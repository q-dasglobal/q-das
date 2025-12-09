#!/usr/bin/env tsx

/**
 * Update Team Bios Script
 *
 * Updates existing team members with slugs, bios, and social links.
 * Bio content is taken from the client's brochure screenshots.
 *
 * Usage:
 *   1. Ensure .env.local has SANITY_API_TOKEN with write permissions
 *   2. Run: npx tsx scripts/update-team-bios.ts
 *
 * This script patches existing team member documents (doesn't replace images).
 */

import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

import { createClient } from "@sanity/client";

// Create Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Team member bios from brochure screenshots
const teamBios = [
  {
    name: "Abubakar Sadiq Mahmoud",
    slug: "abubakar-sadiq-mahmoud",
    role: "Chief Executive Officer",
    shortBio:
      "A visionary strategist driving Q-DAS Global's innovation in ICT and infrastructure.",
    bio: [
      {
        _type: "block",
        _key: "bio1a",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio1a1",
            text: "Sadiq is a dynamic leader with over 16 years of experience spanning ICT, infrastructure systems, and project strategy. He holds a Master's degree in Advanced Computing with Security from the University of Bristol and an MBA from Ahmadu Bello University Business School.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio1b",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio1b1",
            text: "With certifications in Cloud Architecture and project oversight, Sadiq provides the strategic direction that drives Q-DAS Global's integrated approach to engineering and technology services. His leadership ensures that every project aligns with the company's mission of innovation, quality, and client satisfaction.",
          },
        ],
      },
    ],
    socialLinks: [],
  },
  {
    name: "Ibrahim Safana",
    slug: "ibrahim-safana",
    role: "Chief Operating Officer",
    shortBio:
      "Operational expert ensuring seamless delivery of complex engineering projects.",
    bio: [
      {
        _type: "block",
        _key: "bio2a",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio2a1",
            text: "Ibrahim brings deep technical acumen and operational leadership to the organization. With a Bachelor's degree in Information Technology and over a decade of experience in the industry, he plays a key role in the execution of engineering and contracting projects.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio2b",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio2b1",
            text: "His expertise in systems integration, infrastructure deployment, and network architecture supports the seamless delivery of smart infrastructure and enterprise-scale technology initiatives. Ibrahim is also a certified Project Manager.",
          },
        ],
      },
    ],
    socialLinks: [],
  },
  {
    name: "Firdausi Aliyu Dikko",
    slug: "firdausi-aliyu-dikko",
    role: "Executive Director, Digital Transformation",
    shortBio:
      "Digital transformation specialist optimizing business processes through data and analytics.",
    bio: [
      {
        _type: "block",
        _key: "bio3a",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio3a1",
            text: "Firdausi is a highly experienced IT Consultant who specializes in helping organizations modernize their operations, harness the power of data, and optimize business processes. With a strong track record in digital transformation, business intelligence, data analytics and engineering, as well as enterprise solutions, she delivers scalable, customized services that drive measurable business results.",
          },
        ],
      },
    ],
    socialLinks: [],
  },
  {
    name: "Olomolaiye Obamayowa",
    slug: "olomolaiye-obamayowa",
    role: "Chief Technology Officer",
    shortBio:
      "Engineering leader overseeing global technical strategy and quality assurance.",
    bio: [
      {
        _type: "block",
        _key: "bio4a",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio4a1",
            text: "Olomolaiye holds a Bachelor's degree in Electrical Engineering and a Master's in Digital Communication Systems. With broad technical exposure across the UK, Canada, and Nigeria, he brings a global perspective to engineering strategy, project execution, and technology implementation.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio4b",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio4b1",
            text: "At Q-DAS Global, he leads the development and oversight of advanced engineering solutions, ensuring that all deliverables meet international standards of quality, safety, and performance.",
          },
        ],
      },
    ],
    socialLinks: [],
  },
  {
    name: "Zayyad Balarabe Gaya",
    slug: "zayyad-balarabe-gaya",
    role: "Executive Director, Strategy & Innovation",
    shortBio:
      "Data and AI specialist pioneering intelligent solutions for enterprise decision-making.",
    bio: [
      {
        _type: "block",
        _key: "bio5a",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio5a1",
            text: "Zayyad Balarabe Gaya is a data and cloud infrastructure specialist with extensive experience in deploying and managing analytics platforms for enterprise environments.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio5b",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio5b1",
            text: "He previously worked at the Central Bank of Nigeria, where he played a key role in setting up the Business Intelligence Services Office and supported analytics capacity building across departments. Zayyad is currently a PhD researcher at the University of Salford, UK, focusing on AI and deep learning applications in the oil and gas sector. His interests include big data analytics, cloud technologies, and developing scalable solutions for data-driven decision-making.",
          },
        ],
      },
    ],
    socialLinks: [],
  },
];

/**
 * Update team member bios in Sanity
 */
async function updateTeamBios() {
  console.log("\n👥 Updating team member bios...");

  for (const memberData of teamBios) {
    try {
      console.log(`  → Updating: "${memberData.name}"`);

      // Find existing document by name
      const query = `*[_type == "teamMember" && name == $name][0]._id`;
      const existingId = await client.fetch(query, { name: memberData.name });

      if (!existingId) {
        console.log(`  ⚠ Not found: "${memberData.name}" - skipping`);
        continue;
      }

      // Patch the existing document with bio data
      await client
        .patch(existingId)
        .set({
          slug: {
            _type: "slug",
            current: memberData.slug,
          },
          shortBio: memberData.shortBio,
          bio: memberData.bio,
          socialLinks: memberData.socialLinks,
        })
        .commit();

      console.log(`  ✓ Updated: "${memberData.name}"`);
    } catch (error) {
      console.error(`  ✗ Failed to update "${memberData.name}":`, error);
    }
  }

  console.log(`\n✅ Updated ${teamBios.length} team members`);
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting team bio update...\n");
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
    await updateTeamBios();

    console.log("\n✨ Bio update completed successfully!");
    console.log("\n📝 Next steps:");
    console.log("   1. Refresh /team page to see clickable cards");
    console.log("   2. Click a team member to see their bio page");
    console.log("   3. Optionally add social links in Sanity Studio (/admin)");
  } catch (error) {
    console.error("\n❌ Update failed:", error);
    process.exit(1);
  }
}

// Run
main();
