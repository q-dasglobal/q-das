"use client";

import { motion } from "motion/react";
import { TeamMember } from "@/lib/data/team";
import { PlusIcon } from "lucide-react";
import { TeamMemberCard } from "@/components/team/team-member-card";

interface TeamContentProps {
  members: TeamMember[];
}

export function TeamContent({ members }: TeamContentProps) {
  return (
    <section className="bg-gray-50 pb-20 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {members.map((member, index) => (
            <TeamMemberCard
              key={member.slug || member.name}
              member={member}
              index={index}
            />
          ))}

          {/* Join Our Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group relative h-full"
          >
            <div className="hover:border-primary/50 hover:bg-primary/5 h-full rounded-[32px] border-2 border-dashed border-gray-200 bg-gray-50 p-6 transition-all duration-300 md:p-8">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100 transition-transform duration-300 group-hover:scale-110">
                  <PlusIcon className="h-8 w-8 text-gray-400 transition-colors" />
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-gray-900">
                  Work With Us
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-500">
                  Interested in being part of our journey? We&apos;d love to
                  hear from you.
                </p>
                <a
                  href="/contact"
                  className="text-primary hover:bg-primary hover:ring-primary inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold shadow-sm ring-1 ring-gray-200 transition-all hover:text-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
