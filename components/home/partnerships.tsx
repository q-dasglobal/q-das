"use client";

import { motion, useReducedMotion } from "motion/react";
import { HiUsers } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const partners = [
  {
    name: "HA-SHEM",
    logo: "/partners/Ha-Shem-logo.webp",
  },
  {
    name: "ERICSSON",
    logo: "/partners/ericsson-logo.webp",
  },
  {
    name: "SchoolTry",
    logo: "/partners/schooltry-logo.webp",
  },
  {
    name: "Hewlett Packard Enterprise",
    logo: "/partners/Hewlett-logo.webp",
  },
  {
    name: "HUAWEI",
    logo: "/partners/Huawei-logo.webp",
  },
  {
    name: "SeamlessHR",
    logo: "/partners/seamlesshr-logo.webp",
  },
];

export function Partnerships() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 111, 209, 0.02) 0%, rgba(0, 111, 209, 0.04) 50%, rgba(0, 111, 209, 0.02) 100%)",
        }}
      />

      {/* Header Section - Constrained */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
            }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiUsers}>Our Partnerships</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            Trusted by Industry Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            We partner with the world&apos;s leading technology providers to
            deliver exceptional solutions and innovation to our clients.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="mt-8 flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-primary text-3xl font-bold lg:text-4xl">
                {partners.length}+
              </div>
              <div className="text-sm text-gray-600">Trusted Partners</div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-primary text-3xl font-bold lg:text-4xl">
                15+
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Marquee Container */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-b border-gray-100 py-12">
        {/* Marquee Component */}
        <Marquee
          pauseOnHover
          className="[--duration:40s] [--gap:4rem] md:[--gap:5rem] lg:[--gap:6rem]"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex h-20 shrink-0 items-center justify-center md:h-24 lg:h-28"
              style={{ width: "220px" }}
            >
              <div className="relative h-full w-full transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain object-center grayscale transition-all duration-300 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 180px, 220px"
                />
                {/* Partner name tooltip on hover */}
                <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-linear-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-linear-to-l from-white" />
      </div>
    </section>
  );
}
