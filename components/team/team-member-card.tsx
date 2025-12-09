"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { TeamMember } from "@/lib/data/team";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <Link
        href={`/team/${member.slug}`}
        className="block h-full cursor-pointer"
      >
        {/* Gradient Border Wrapper */}
        <div className="from-primary to-accent group-hover:shadow-primary/10 h-full rounded-[32px] bg-linear-to-b p-[3px] transition-all duration-500 group-hover:shadow-md">
          <div className="flex h-full flex-col overflow-hidden rounded-[29px] bg-white">
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fallback={
                  <div className="bg-primary/5 text-primary flex h-full w-full items-center justify-center">
                    <span className="font-display text-4xl font-bold tracking-wider uppercase">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                }
              />

              {/* Subtle Gradient Overlay at bottom of image for text readability transition */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/50 to-transparent opacity-50" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:p-8">
              <h3 className="font-display group-hover:text-primary mb-2 text-lg font-bold tracking-wide text-gray-900 uppercase transition-colors md:text-xl">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 md:text-base">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
