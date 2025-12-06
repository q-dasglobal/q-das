import { client } from "./client";
import type { NewsArticle } from "@/lib/data/news";
import type { TeamMember } from "@/lib/data/team";
import type { Testimonial } from "@/lib/types/testimonial";

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    mainImage,
    "image": mainImage.asset->url,
    category,
    featured,
    "author": author->name,
    "date": publishedAt,
    "content": body
  }`;

  return client.fetch(query);
}

export async function getNewsArticle(
  slug: string,
): Promise<NewsArticle | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    mainImage,
    "image": mainImage.asset->url,
    category,
    featured,
    "author": author->name,
    "date": publishedAt,
    "content": body
  }`;

  return client.fetch(query, { slug });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    "image": image.asset->url
  }`;

  return client.fetch(query);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"] {
    _id,
    name,
    role,
    company,
    content,
    "avatar": avatar.asset->url
  }`;
  return client.fetch(query);
}
