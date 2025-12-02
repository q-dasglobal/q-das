"use client";

import { motion } from "motion/react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/section-badge";

const faqs = [
  {
    question: "Who is Q-DAS Global?",
    answer:
      "Q-DAS Global is a premier technology solutions provider established in 2011. We specialize in delivering cutting-edge ICT infrastructure, custom software development, and enterprise-grade engineering solutions for government and private sectors.",
  },
  {
    question: "What specific services do you offer?",
    answer:
      "We provide a holistic suite of digital services including Custom Software & App Development, Cloud Infrastructure & DevOps, Cybersecurity Audits, IT Consulting, and specialized Technical Training. We build the systems that power modern businesses.",
  },
  {
    question: "How do we engage with Q-DAS for a project?",
    answer:
      "Starting is simple. Reach out to our team via info@qdasglobal.com or call +234 802 789 1614. We'll schedule an initial consultation to understand your objectives and propose a tailored roadmap for your digital transformation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We believe in long-term partnerships. Our team offers 24/7 service desk support, proactive system monitoring, and SLA-backed maintenance to ensure your infrastructure operates at peak performance continuously.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "Our expertise spans critical sectors including Government & Public Sector, Banking & Finance, Healthcare, Education, and Manufacturing. We understand the unique compliance and operational challenges of these industries.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is embedded in our DNA. We adhere to strict global standards for data protection, employing advanced threat detection, regular security audits, and compliance frameworks to safeguard your sensitive information.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiQuestionMarkCircle}>
              Frequently Asked Questions
            </SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            Answers to your questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Everything you need to know about our services, process, and how we
            deliver value to your organization.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group data-[state=open]:border-primary/20 bg-primary-light/50 overflow-hidden rounded-[20px] border border-transparent transition-all duration-300 data-[state=open]:bg-white"
                >
                  <AccordionTrigger className="px-6 text-left hover:no-underline md:px-8">
                    <span className="font-display group-data-[state=open]:text-primary mr-4 text-base font-semibold text-gray-900 transition-colors md:text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-gray-600 md:px-8">
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
