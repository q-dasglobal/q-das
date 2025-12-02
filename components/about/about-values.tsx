"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";
import { HiSparkles } from "react-icons/hi";
import { coreValues, companyInfo } from "@/lib/data/about";

export function AboutValues() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiSparkles}>Our Values</SectionBadge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {companyInfo.values.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-600"
          >
            {companyInfo.values.description}
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {coreValues.map((value, index) => {
            // Zig-Zag Bento Logic:
            // Row 1: Wide (0) - Narrow (1)
            // Row 2: Narrow (2) - Wide (3)
            // Row 3: Wide (4) - Narrow (5)
            const isWide = index === 0 || index === 3 || index === 4;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 ${
                  isWide
                    ? "md:col-span-2 md:flex-row md:items-center md:gap-12"
                    : "md:col-span-1"
                }`}
              >
                <div
                  className={`relative shrink-0 transition-transform duration-500 group-hover:scale-105 ${
                    isWide ? "h-48 w-48" : "mb-8 h-40 w-40"
                  }`}
                >
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-primary mb-2 text-2xl font-bold">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
