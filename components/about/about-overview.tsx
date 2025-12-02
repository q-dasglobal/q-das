"use client";

import { motion } from "motion/react";
import { SectionBadge } from "@/components/section-badge";
import { HiSparkles } from "react-icons/hi";
import { companyInfo } from "@/lib/data/about";

export function AboutOverview() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <SectionBadge icon={HiSparkles}>Who We Are</SectionBadge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display mb-8 text-3xl leading-tight font-medium text-gray-900 md:mb-12 md:text-5xl lg:leading-tight"
            >
              {companyInfo.overview.paragraph1}
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            <p>{companyInfo.overview.paragraph2}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            <p>{companyInfo.overview.paragraph3}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
