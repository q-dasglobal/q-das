"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { TeamMember } from "@/lib/data/team";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { HiArrowRight } from "react-icons/hi";

interface TeamMemberCompactCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamMemberCompactCard({
  member,
  index = 0,
}: TeamMemberCompactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link
        href={`/team/${member.slug}`}
        className="hover:ring-primary/20 flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
      >
        <div className="relative flex items-center gap-4 p-4">
          {/* Avatar Image */}
          <div className="ring-primary/20 group-hover:ring-primary relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100 shadow-sm ring-2 transition-all duration-500 group-hover:scale-105">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="64px"
              fallback={
                <div className="bg-primary/5 text-primary flex h-full w-full items-center justify-center">
                  <span className="font-display text-lg font-bold">
                    {member.name.slice(0, 2)}
                  </span>
                </div>
              }
            />
          </div>

          {/* Header Info */}
          <div className="min-w-0 flex-1">
            <h3 className="font-display group-hover:text-primary truncate text-base font-bold text-gray-900 transition-colors">
              {member.name}
            </h3>
            <p className="truncate text-xs font-medium tracking-wide text-gray-500 uppercase">
              {member.role}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="group-hover:bg-primary/10 group-hover:text-primary flex h-8 w-8 shrink-0 -translate-x-2 items-center justify-center rounded-full text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <HiArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Short Bio Snippet - Mobile Friendly */}
        {member.shortBio && (
          <div className="flex-1 px-4 pb-4">
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500 group-hover:text-gray-600">
              {member.shortBio}
            </p>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
