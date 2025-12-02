import type { IconType } from "react-icons";
import {
  HiLightBulb,
  HiShieldCheck,
  HiUserGroup,
  HiRefresh,
  HiGlobeAlt,
  HiUsers,
} from "react-icons/hi";

export type CoreValue = {
  title: string;
  description: string;
  iconName:
    | "userGroup"
    | "shieldCheck"
    | "lightBulb"
    | "refresh"
    | "globeAlt"
    | "users";
  image: string;
};

export const iconMap: Record<CoreValue["iconName"], IconType> = {
  userGroup: HiUserGroup,
  shieldCheck: HiShieldCheck,
  lightBulb: HiLightBulb,
  refresh: HiRefresh,
  globeAlt: HiGlobeAlt,
  users: HiUsers,
};

export const coreValues: CoreValue[] = [
  {
    title: "Quality First",
    description:
      "We don't compromise — quality defines our name, our culture, and our delivery.",
    iconName: "userGroup",
    image: "/values/quality-first.webp",
  },
  {
    title: "Integrity",
    description:
      "We do the right thing, even when no one is watching. Trust is our foundation.",
    iconName: "shieldCheck",
    image: "/values/integrity.webp",
  },
  {
    title: "Innovation",
    description:
      "We embrace technology and creativity to solve real problems and unlock new value.",
    iconName: "lightBulb",
    image: "/values/innovation.webp",
  },
  {
    title: "Resilience",
    description:
      "We are built to endure. Rooted in African strength, we adapt and thrive in any environment.",
    iconName: "refresh",
    image: "/values/resilience.webp",
  },
  {
    title: "Impact - Driven",
    description: "Our solutions are designed to create lasting value.",
    iconName: "globeAlt",
    image: "/values/impact-driven.webp",
  },
  {
    title: "Collaboration",
    description:
      "We build meaningful partnerships across borders, sectors, and cultures.",
    iconName: "users",
    image: "/values/collaboration.webp",
  },
];

export const companyInfo = {
  overview: {
    paragraph1:
      "Q-DAS Global Technology Nigeria Limited is a trusted leader in ICT and technology solutions, founded in 2011 with a mission to empower organizations through intelligent, secure, and scalable digital systems.",
    paragraph2:
      "Headquartered in Abuja, Nigeria, we specialize in delivering end-to-end IT services including software development, managed services, infrastructure solutions, cloud computing, and advanced technologies such as Artificial Intelligence, Machine Learning, Big Data Analytics, and IoT.",
    paragraph3:
      "With a commitment to excellence and innovation, Q-DAS Global supports clients across both public and private sectors, helping them optimise operations, reduce costs, and enhance service delivery. Our 24/7 support, strong technical expertise, and client centric approach make us a strategic partner in driving digital transformation across industries.",
  },
  vision: {
    title: "Vision Statement",
    description:
      "To become the trusted name in emerging markets for Infrastructure, Intelligence, and Innovation — recognized globally by one word:",
    highlight: "Quality.",
  },
  mission: {
    title: "Mission Statement",
    description:
      "To deliver data-driven, quality-focused solutions that transform industries across Africa and beyond; with the clarity, strategy, and resilience our name stands for.",
  },
  values: {
    title: "Core Values",
    description:
      "These core values distinguish Q-DAS Global and inspire us to deliver high quality, future-focused ICT solutions.",
  },
};
