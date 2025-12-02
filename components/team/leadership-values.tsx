"use client";

import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";

const values = [
  {
    id: "01",
    label: "INNOVATION",
    title: "Visionary Thinking",
    description:
      "We don't just adapt to the future; we shape it. Our leadership is driven by a relentless pursuit of innovation, constantly exploring new technologies to keep our clients ahead of the curve.",
  },
  {
    id: "02",
    label: "INTEGRITY",
    title: "Operational Integrity",
    description:
      "Trust is the currency of our business. We believe in transparent, ethical, and reliable operations, ensuring that every solution we deliver is built on a foundation of security and compliance.",
  },
  {
    id: "03",
    label: "IMPACT",
    title: "Global Standards",
    description:
      "While we operate with world-class standards and methodologies, our solutions are deeply rooted in understanding the unique challenges and opportunities of the African market.",
  },
];

export function LeadershipValues() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <SectionBadge icon={HiSparkles}>Our Philosophy</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display max-w-3xl text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            Engineering the future with{" "}
            <span className="text-primary">precision</span> and purpose.
          </motion.h2>
        </div>

        <div className="grid gap-0 border-t border-gray-100 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative border-b border-gray-100 bg-white px-4 pt-10 pb-10 lg:border-r lg:border-b-0 lg:pt-16 lg:pr-12 lg:pl-12 lg:last:border-r-0"
            >
              {/* Tech Accent Line Animation */}
              <div className="bg-primary absolute top-0 left-0 h-[2px] w-0 transition-all duration-700 ease-out group-hover:w-full" />

              <div className="mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-sm font-bold">
                  {value.id}
                </span>
                <div className="h-px w-8 bg-gray-200" />
                <span className="font-mono text-xs font-bold tracking-widest text-gray-400 uppercase">
                  {value.label}
                </span>
              </div>

              <h3 className="font-display mb-4 text-2xl font-bold text-gray-900">
                {value.title}
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
