"use client";

import { motion } from "motion/react";
import { SectionBadge } from "@/components/section-badge";
import { HiSparkles } from "react-icons/hi";

export function AboutPrinciples() {
  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 flex justify-center">
            <SectionBadge icon={HiSparkles}>Our Philosophy</SectionBadge>
          </div>
          <h2 className="font-display mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
            The Principles That Power Our Vision
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            <p>
              At QDAS Global Technology Nig. Ltd we take pride that our company
              was formed with one premise in mind, and that is to bring a degree
              of experience, dedication, and professionalism.
            </p>
            <p>
              We aspire to be ahead of the competition when quality and
              performance are evaluated. At QDAS Global, quality isn&apos;t just
              a promise — it&apos;s our name. &quot;Q&quot; stands for Quality.
              We provide Quality in everything we do. From data to systems, from
              strategy to execution, we deliver global standards rooted in
              African resilience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
