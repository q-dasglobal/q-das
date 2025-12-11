#!/usr/bin/env tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Migration Script: Static Data → Sanity CMS
 *
 * Migrates existing news articles and team members from static files to Sanity.
 *
 * Usage:
 *   1. Ensure .env.local has SANITY_API_TOKEN with write permissions
 *   2. Run: pnpm run migrate-to-sanity
 *
 * Note: Images will need to be uploaded manually to Sanity Studio
 */

// Load environment variables from .env.local
import { config } from "dotenv";
import { resolve, join } from "path";
import { createReadStream, existsSync } from "fs";

config({ path: resolve(process.cwd(), ".env.local") });

import { createClient } from "@sanity/client";
import { newsArticles } from "../lib/data/news";
import { teamMembers } from "../lib/data/team";

// Create Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Upload image to Sanity asset
 */
async function uploadImage(imageSource: string): Promise<string | null> {
  if (!imageSource) return null;

  try {
    let stream: any;
    let filename: string;

    if (imageSource.startsWith("http")) {
      // Remote URL
      const res = await fetch(imageSource);
      if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
      const arrayBuffer = await res.arrayBuffer();
      stream = Buffer.from(arrayBuffer);
      filename = imageSource.split("/").pop()?.split("?")[0] || "image.jpg";
    } else {
      // Local path
      const localPath = imageSource.startsWith("/")
        ? join(process.cwd(), "public", imageSource)
        : join(process.cwd(), "public", "/" + imageSource);

      if (!existsSync(localPath)) {
        console.warn(`  ⚠️ Image not found locally: ${localPath}`);
        return null;
      }
      stream = createReadStream(localPath);
      filename = localPath.split("/").pop() || "image.jpg";
    }

    const asset = await client.assets.upload("image", stream, {
      filename: filename,
    });

    return asset._id;
  } catch (error) {
    console.error(`  ⚠️ Failed to upload image ${imageSource}:`, error);
    return null;
  }
}

/**
 * Migrate news articles to Sanity
 */
async function migrateNews() {
  console.log("\n📰 Migrating news articles...");

  for (const article of newsArticles) {
    try {
      console.log(`  → Creating: "${article.title}"`);

      // Create author first (or use existing)
      const authorId = await createOrGetAuthor(article.author);

      // Upload image if exists
      let mainImage;
      if (article.image) {
        console.log(`    → Uploading image...`);
        const imageAssetId = await uploadImage(article.image);
        if (imageAssetId) {
          mainImage = {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAssetId,
            },
          };
        }
      }

      // Create the post document
      const post = {
        _type: "post",
        _id: `post-${article.id}`, // Use predictable ID for idempotency
        title: article.title,
        slug: {
          _type: "slug",
          current: article.slug,
        },
        excerpt: article.excerpt,
        category: article.category === "All" ? "Featured" : article.category,
        featured: article.featured || false,
        author: {
          _type: "reference",
          _ref: authorId,
        },
        publishedAt: new Date(article.date).toISOString(),
        body: article.content.map((block: any) => ({
          ...block,
          _key: block._key || Math.random().toString(36).substring(7),
          children: block.children
            ? block.children.map((child: any) => ({
                ...child,
                _key: child._key || Math.random().toString(36).substring(7),
              }))
            : undefined,
          rows: block.rows
            ? block.rows.map((row: any) => ({
                ...row,
                _key: row._key || Math.random().toString(36).substring(7),
                cells: row.cells, // Cells are strings, no key needed
              }))
            : undefined,
        })), // Portable Text content

        mainImage: mainImage,
      };

      await client.createOrReplace(post);
      console.log(`  ✓ Created: "${article.title}"`);
    } catch (error) {
      console.error(`  ✗ Failed to create "${article.title}":`, error);
    }
  }

  console.log(`\n✅ Migrated ${newsArticles.length} news articles`);
}

/**
 * Create or get existing author
 */
async function createOrGetAuthor(authorName: string): Promise<string> {
  const authorId = `author-${authorName.toLowerCase().replace(/\s+/g, "-")}`;

  // Check if author exists
  const existing = await client.getDocument(authorId);
  if (existing) {
    return authorId;
  }

  // Create new author
  await client.create({
    _type: "author",
    _id: authorId,
    name: authorName,
    email: `${authorName.toLowerCase().replace(/\s+/g, ".")}@q-das-global.com`,
  });

  return authorId;
}

/**
 * Migrate team members to Sanity
 */
async function migrateTeam() {
  console.log("\n👥 Migrating team members...");

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    try {
      console.log(`  → Creating: "${member.name}"`);

      const teamMemberDoc = {
        _type: "teamMember",
        _id: `team-${member.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: member.name,
        role: member.role,
        order: i, // Maintain current order
        // Note: image will need to be uploaded manually via Sanity Studio
      };

      await client.createOrReplace(teamMemberDoc);
      console.log(`  ✓ Created: "${member.name}"`);
    } catch (error) {
      console.error(`  ✗ Failed to create "${member.name}":`, error);
    }
  }

  console.log(`\n✅ Migrated ${teamMembers.length} team members`);
}

/**
 * Main migration function
 */
async function migrate() {
  console.log("🚀 Starting migration to Sanity CMS...\n");
  console.log("Project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

  // Check for required environment variables
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
    process.exit(1);
  }

  if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.error("❌ Missing NEXT_PUBLIC_SANITY_DATASET in .env.local");
    process.exit(1);
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ Missing SANITY_API_TOKEN in .env.local");
    console.error("   Get your token from: https://sanity.io/manage");
    process.exit(1);
  }

  try {
    await migrateNews();
    await migrateTeam();

    console.log("\n✨ Migration completed successfully!");
    console.log("\n⚠️  IMPORTANT: Next steps:");
    console.log("   1. Go to http://localhost:3000/admin");
    console.log("   2. Upload images for each news article and team member");
    console.log("   3. Review and publish all content");
    console.log(
      "\n📝 Note: News images were auto-migrated. Team images may need manual upload.",
    );
  } catch (error) {
    console.error("\n❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration
migrate();
