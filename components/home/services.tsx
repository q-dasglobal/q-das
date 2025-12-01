"use client";

import { motion } from "motion/react";
import { HiCog } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { ServiceCard } from "@/components/shared/service-card";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Software & Application Development",
    description:
      "Custom software solutions built to scale with your business. From web applications to enterprise systems, we deliver robust, maintainable code that solves real business challenges.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/software-development",
  },
  {
    title: "Managed IT Services",
    description:
      "Comprehensive IT management that handles everything from infrastructure monitoring to security updates. Free your team to focus on core business objectives while we ensure your systems run smoothly.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/managed-it",
  },
  {
    title: "Infrastructure Solutions",
    description:
      "Enterprise-grade infrastructure designed for reliability and performance. We architect cloud and on-premise solutions that support your operations today and scale for tomorrow.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/infrastructure",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance for technology decisions. We help you navigate digital transformation, implement AI and machine learning initiatives, and establish data governance frameworks that drive measurable results.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/consulting",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Technical training programs tailored to your team's needs. We bridge the gap between technology and people, ensuring your organization can effectively leverage the tools and systems you invest in.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/training",
  },
  {
    title: "Professional Support & ICT Maintenance",
    description:
      "Proactive maintenance and responsive support for your technology infrastructure. Our team ensures optimal performance, minimizes downtime, and resolves issues before they impact your operations.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=80",
    href: "/services/support",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiCog}>Our Services</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            Enterprise IT Services Built for Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            Comprehensive technology solutions designed to support your business
            objectives and drive operational efficiency.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
