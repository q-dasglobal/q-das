"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";
import { HiEye, HiGlobeAlt } from "react-icons/hi";
import { companyInfo } from "@/lib/data/about";

export function AboutVisionMission() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-12 md:gap-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <SectionBadge icon={HiEye}>Our Vision</SectionBadge>
              </div>
              <h3 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {companyInfo.vision.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                {companyInfo.vision.description}{" "}
                <span className="text-primary font-bold">
                  {companyInfo.vision.highlight}
                </span>
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6">
                <SectionBadge icon={HiGlobeAlt}>Our Mission</SectionBadge>
              </div>
              <h3 className="font-display mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {companyInfo.mission.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                {companyInfo.mission.description}
              </p>
            </motion.div>
          </div>

          {/* Visual - The Tech Portal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[32px] bg-[#0B0F19] shadow-2xl md:h-[500px] md:rounded-[48px] lg:h-auto"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src="/shape-dark-theme.webp"
                  alt="Vision and Mission"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
