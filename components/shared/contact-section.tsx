"use client";

import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block md:mb-6"
          >
            <SectionBadge icon={HiSparkles}>Contact Us</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-4 text-3xl leading-tight font-bold text-gray-900 md:mb-6 md:text-4xl"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-gray-600 md:text-lg"
          >
            We&apos;re only one click away. Contact QDAS Global for inquiries,
            collaborations, or tailored IT solutions that fit your business.
          </motion.p>
        </div>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gray-50 p-5 md:rounded-[40px] md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Contact Info */}
            <ContactInfo />

            {/* Right Column: Form */}
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
