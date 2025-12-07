"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { TeamMember } from "@/lib/data/team";
import { PlusIcon } from "lucide-react";

interface TeamContentProps {
  members: TeamMember[];
}

export function TeamContent({ members }: TeamContentProps) {
  return (
    <section className="bg-gray-50 pb-20 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient Border Wrapper */}
              <div className="from-primary to-accent group-hover:shadow-primary/10 h-full rounded-[32px] bg-linear-to-b p-[3px] transition-transform duration-500 group-hover:shadow-md">
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
                    <h3 className="font-display mb-2 text-lg font-bold tracking-wide text-gray-900 uppercase md:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 md:text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join Our Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group relative"
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
