import { groq } from "next-sanity";

export const newsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    category,
    featured,
    "author": author->name,
    "date": publishedAt,
    body
  }
`;

export const newsDetailQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    category,
    "author": author->name,
    "date": publishedAt,
    body
  }
`;

export const featuredNewsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    "image": mainImage.asset->url,
    category,
    "date": publishedAt
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    "image": image.asset->url
  }
`;
