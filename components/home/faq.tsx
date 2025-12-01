"use client";

import { motion } from "motion/react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Q-DAS?",
    answer:
      "QDAS GLOBAL TECHNOLOGY NIG. LTD was registered on the 20th December 2011, offering solutions and services on information, communication and technology (ICT), building and contractors for construction work, manufacturing, assembling, importing, exporting and supply of electronic, electrical apparatus and equipments, general contractor, import, export and general supply of goods and services.",
  },
  {
    question: "What services does Q-DAS Global offer?",
    answer:
      "We offer a comprehensive range of IT services including Software & Application Development, Managed IT Services, Infrastructure Solutions, IT Consulting, Training & Capacity Building, and Professional Support & ICT Maintenance.",
  },
  {
    question: "How can I contact Q-DAS Global?",
    answer:
      "You can reach us via email at info@qdasglobal.com, call us at +234 802789 1614, or visit our office at No 10 Sequela Street, Wuse II, Abuja, Nigeria. Our business hours are Monday-Friday: 9am to 5pm, Saturday: 11am to 3pm.",
  },
  {
    question: "Does Q-DAS Global provide 24/7 support?",
    answer:
      "Yes, we offer round-the-clock service desks, proactive monitoring, and SLA-backed support to ensure your technology infrastructure runs efficiently at all times.",
  },
  {
    question: "What industries does Q-DAS Global serve?",
    answer:
      "We serve various industries including government agencies, financial institutions, healthcare, education, and private enterprises across Nigeria and beyond.",
  },
  {
    question: "How does Q-DAS Global ensure data security?",
    answer:
      "We implement comprehensive security measures including SOC monitoring, threat detection, compliance frameworks, and regular security audits to protect your data and infrastructure.",
  },
];

export function FAQ() {
  return (
    <section className="px-4 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiQuestionMarkCircle}>FAQ</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            Answers To Questions You Might Have
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            We keep things simple. Here is what most of our clients ask before
            getting started.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="hover:border-primary/50 rounded-lg border border-gray-200 bg-white px-6 transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
