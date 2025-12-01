"use client";

import { motion } from "motion/react";
import { HiStar } from "react-icons/hi";
import { HiCube, HiUser, HiTrendingUp, HiCog } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";

const features = [
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
    icon: HiCog,
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
            QDAS Global combines industry expertise, technology, and vision to
            give your business the competitive edge it deserves.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="bg-primary-light absolute inset-0 rounded-full blur-xl" />
                  <div className="border-primary/20 bg-primary-light relative rounded-full border-2 p-4">
                    <feature.icon className="text-primary h-8 w-8" />
                  </div>
                </div>
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
