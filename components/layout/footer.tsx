"use client";

import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "@/lib/data/navigation";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/qdasglobal",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com/qdasglobal",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://twitter.com/qdasglobal",
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    href: "mailto:info@qdasglobal.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#1A1615] text-white">
      {/* Large Q-DAS Watermark Background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 flex justify-center overflow-hidden">
        <span className="font-display translate-y-[30%] text-[40vw] leading-none font-bold whitespace-nowrap text-white/2 md:translate-y-[45%] md:text-[35vw]">
          Q-DAS
        </span>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20 md:px-12 md:pb-60">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="group/logo flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="relative h-12 w-36 shrink-0">
                <Image
                  src="/Logo-dark.webp"
                  alt="Q-DAS Global logo"
                  fill
                  sizes="(max-width: 768px) 144px, 144px"
                  quality={100}
                  className="object-contain transition-opacity duration-200 group-hover/logo:opacity-90"
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation & Copyright */}
          <div className="flex flex-col items-center gap-6 md:mt-2">
            <nav
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
              aria-label="Footer navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white md:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-gray-500 md:text-sm">
              Copyright {currentYear} Q-das Global Group
            </p>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex shrink-0 items-center gap-5 md:mt-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
