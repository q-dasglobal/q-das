"use client";

import { motion } from "motion/react";
import { HiStar, HiCube, HiUser, HiTrendingUp, HiPhone } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { FeatureCard } from "@/components/shared/feature-card";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: HiCube,
    title: "Innovation First",
    description:
      "We harness the power of modern technologies—AI, IoT, blockchain, and data analytics—to keep you competitive in a digital-first world.",
  },
  {
    icon: HiUser,
    title: "Client-Centric Approach",
    description:
      "Your goals drive our solutions. We listen, design, and deliver based on your unique challenges and ambitions.",
  },
  {
    icon: HiTrendingUp,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our modular service offerings grow with your business.",
  },
  {
    icon: HiPhone,
    title: "24/7 Support & Reliability",
    description:
      "Round-the-clock service desks, proactive monitoring, and SLA-backed support give you peace of mind.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiStar}>Our Advantage</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            Why Choose Q-DAS Global
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            We combine deep technical expertise with a commitment to
            understanding your business, delivering solutions that provide
            measurable value and sustainable competitive advantage.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
