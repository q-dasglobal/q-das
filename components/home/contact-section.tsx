"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-blue-200 bg-blue-50 px-4 py-24 lg:py-32"
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiMail}>Contact Us</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-blue-900 lg:text-5xl"
          >
            Ready to talk about
            <br />
            your infrastructure?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-lg leading-relaxed text-blue-700"
          >
            We&apos;re selective. We only work with agencies serious about
            building systems that serve citizens better. If that&apos;s you,
            let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              className="group bg-primary hover:bg-primary/90 rounded-lg px-8 py-4 font-semibold text-white transition-all hover:shadow-xl"
            >
              <Link href="mailto:projects@qdasglobal.com">
                projects@qdasglobal.com
                <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link
              href="tel:+2349000000000"
              className="text-blue-700 transition-colors hover:text-blue-900"
            >
              or call +234 900 000 0000
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
