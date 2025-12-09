/* 
 This file was mock data for the team members. It is not used in the project anymore.
 It is kept here for reference only. Was used to migrate the data to Sanity. And also to test the UI components.
*/

import type { PortableTextBlock } from "@portabletext/types";

export type SocialPlatform =
  | "linkedin"
  | "x"
  | "instagram"
  | "facebook"
  | "email"
  | "website";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  image: string;
  shortBio?: string;
  bio?: PortableTextBlock[];
  socialLinks?: SocialLink[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Abubakar Sadiq Mahmoud",
    slug: "abubakar-sadiq-mahmoud",
    role: "Chief Executive Officer",
    image: "/team/CEO.webp",
  },
  {
    name: "Ibrahim Safana",
    slug: "ibrahim-safana",
    role: "Chief Operating Officer",
    image: "/team/COO.webp",
  },
  {
    name: "Firdausi Aliyu Dikko",
    slug: "firdausi-aliyu-dikko",
    role: "Executive Director, Digital Transformation",
    image: "/team/ED.webp",
  },
  {
    name: "Olomolaiye Obamayowa",
    slug: "olomolaiye-obamayowa",
    role: "Chief Technology Officer",
    image: "/team/CTO.webp",
  },
  {
    name: "Zayyad Balarabe Gaya",
    slug: "zayyad-balarabe-gaya",
    role: "Executive Director, Strategy & Innovation",
    image: "/team/ED 2.webp",
  },
];
