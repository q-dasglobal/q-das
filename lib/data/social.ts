import { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
// import { HiOutlineMail } from "react-icons/hi";

export type SocialLink = {
  name: string;
  icon: IconType;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "#",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "#",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/qdas-global",
  },
  //   {
  //     name: "Email",
  //     icon: HiOutlineMail,
  //     href: "mailto:info@qdasglobal.com",
  //   },
];
