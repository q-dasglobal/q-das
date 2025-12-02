"use client";

import { motion } from "motion/react";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
// import { ContactChannels } from "@/components/contact/contact-channels";
// import { ContactMap } from "@/components/contact/contact-map";

export function ContactContent() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Main Contact Section */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Contact Info Hub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm className="border border-gray-100" />
          </motion.div>
        </div>

        {/* Alternative Channels */}
        {/* <div className="mb-20">
          <div className="mb-10 text-center">
            <h3 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Other Ways to Connect
            </h3>
            <p className="text-gray-600">
              Choose the channel that works best for you
            </p>
          </div>
          <ContactChannels />
        </div> */}

        {/* Map Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactMap />
        </motion.div> */}
      </div>
    </section>
  );
}
