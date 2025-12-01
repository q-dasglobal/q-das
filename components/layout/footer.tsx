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
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      {/* Large Q-DAS Watermark Background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-display text-[200px] leading-none font-bold text-white opacity-5 md:text-[300px] lg:text-[400px]">
            Q
          </span>
          <span className="font-display text-[200px] leading-none font-bold text-white opacity-5 md:text-[300px] lg:text-[400px]">
            D
          </span>
          <span className="font-display text-[200px] leading-none font-bold text-white opacity-5 md:text-[300px] lg:text-[400px]">
            A
          </span>
          <span className="font-display text-[200px] leading-none font-bold text-white opacity-5 md:text-[300px] lg:text-[400px]">
            S
          </span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Top Section: Logo, Navigation, Social */}
        <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link
            href="/"
            className="group/logo flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <div className="relative h-12 w-12 shrink-0 md:h-16 md:w-16">
              <Image
                src="/Logo.png"
                alt="Q-DAS Global logo"
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-contain transition-opacity duration-200 group-hover/logo:opacity-90"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white md:text-2xl">
                Q-DAS
              </span>
              <span className="text-xs text-gray-400 md:text-sm">Global</span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
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

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 md:text-base">
            Copyright {currentYear} Q-DAS Global Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
