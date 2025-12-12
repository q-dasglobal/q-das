"use client";

import { motion } from "motion/react";
import { PortableText } from "@portabletext/react";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { TeamMember, SocialPlatform } from "@/lib/data/team";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiGlobeAlt, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { IconType } from "react-icons";
import { TeamMemberCompactCard } from "@/components/team/team-member-compact-card";

// Map platform to icons and colors
const socialIconMap: Record<
  SocialPlatform,
  { icon: IconType; hoverColor: string }
> = {
  linkedin: { icon: FaLinkedin, hoverColor: "hover:text-[#0A66C2]" },
  x: { icon: FaXTwitter, hoverColor: "hover:text-gray-900" },
  instagram: { icon: FaInstagram, hoverColor: "hover:text-[#E4405F]" },
  facebook: { icon: FaFacebook, hoverColor: "hover:text-[#1877F2]" },
  email: { icon: HiMail, hoverColor: "hover:text-primary" },
  website: { icon: HiGlobeAlt, hoverColor: "hover:text-primary" },
};

// Platform base URLs for username support
const platformBaseUrls: Record<SocialPlatform, string> = {
  linkedin: "https://linkedin.com/in/",
  x: "https://x.com/",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  email: "",
  website: "https://",
};

// Smart URL builder - accepts username or full URL
const buildUrl = (platform: SocialPlatform, input: string): string => {
  if (!input) return "";

  // Email: keep as-is
  if (platform === "email") return input;

  // If already a full URL, return as-is
  if (input.startsWith("http://") || input.startsWith("https://")) {
    return input;
  }

  // Otherwise, prefix with platform base URL
  return platformBaseUrls[platform] + input;
};

interface TeamMemberContentProps {
  member: TeamMember;
  otherMembers: TeamMember[];
}

export function TeamMemberContent({
  member,
  otherMembers,
}: TeamMemberContentProps) {
  return (
    <>
      {/* Hero Profile Section */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              {/* Gradient Border Wrapper */}
              <div className="from-primary to-accent rounded-[32px] bg-linear-to-b p-[4px] shadow-xl">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-[28px] bg-gray-50">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    priority
                    fallback={
                      <div className="bg-primary/5 text-primary flex h-full w-full items-center justify-center">
                        <span className="font-display text-6xl font-bold tracking-wider uppercase">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    }
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col justify-center lg:col-span-7"
            >
              {/* Decorative Background Element - Subtle Geometric Pattern */}
              <div className="pointer-events-none absolute -top-10 -right-10 hidden opacity-[0.03] lg:block">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M12 2C12 2 8 7 8 12C8 17 12 22 12 22"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M2.5 12H21.5"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="relative">
                {/* Header Group */}
                <div className="mb-8">
                  <h1 className="font-display mb-4 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
                    {member.name}
                  </h1>
                </div>

                {/* Role & Intro with Left Border Emphasis */}
                <div className="border-primary/40 relative mb-8 border-l-[3px] py-1 pl-6 md:pl-8">
                  {/* Role */}
                  <div className="text-primary mb-3 text-sm font-bold tracking-widest uppercase">
                    {member.role}
                  </div>

                  {/* Highlighted Short Bio / Intro */}
                  {member.shortBio && (
                    <p className="font-display text-xl leading-relaxed font-medium text-gray-800">
                      {member.shortBio}
                    </p>
                  )}
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                  {/* Main Bio */}
                  {member.bio && member.bio.length > 0 && (
                    <div className="prose prose-lg prose-gray max-w-none text-gray-600">
                      <PortableText value={member.bio} />
                    </div>
                  )}
                </div>

                {/* Social Links */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="mt-10">
                    <p className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Connect with {member.name.split(" ")[0]}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {member.socialLinks.map((link, index) => {
                        const socialConfig = socialIconMap[link.platform];
                        if (!socialConfig) return null;
                        const Icon = socialConfig.icon;

                        // Build URL from username or full URL
                        const fullUrl = buildUrl(link.platform, link.url);
                        const href =
                          link.platform === "email"
                            ? `mailto:${fullUrl}`
                            : fullUrl;

                        return (
                          <a
                            key={index}
                            href={href}
                            target={
                              link.platform !== "email" ? "_blank" : undefined
                            }
                            rel={
                              link.platform !== "email"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className={`group border-primary/10 hover:border-primary text-primary/70 hover:bg-primary/5 hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-300`}
                            aria-label={`${link.platform} profile`}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      {otherMembers.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                Meet the Team
              </h2>
              <Link
                href="/team"
                className="group text-primary flex items-center gap-2 text-sm font-semibold"
              >
                View All
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile: Horizontal Scroll Snap Carousel | Desktop: Grid */}
            <div className="scrollbar-hide -mx-4 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
              {otherMembers.map((otherMember, index) => (
                <div
                  key={otherMember.slug}
                  className="w-[300px] flex-none snap-center md:w-auto"
                >
                  <TeamMemberCompactCard member={otherMember} index={index} />
                </div>
              ))}
            </div>

            {/* Mobile View All Button (Bottom) */}
            <div className="mt-8 text-center md:hidden"></div>
          </div>
        </section>
      )}
    </>
  );
}
