"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiChat, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Q-DAS transformed our vision into a fully functional app ahead of schedule. Their team's expertise and dedication made all the difference in launching our product successfully.",
    author: "Ololade Kevin",
    role: "CEO of Greentech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    quote:
      "The infrastructure solutions provided by Q-DAS have been game-changing for our operations. Their 24/7 support gives us complete peace of mind.",
    author: "Michael Adebayo",
    role: "CTO of TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    quote:
      "Working with Q-DAS has been an exceptional experience. Their client-centric approach and innovative solutions have helped us scale our business significantly.",
    author: "Sarah Johnson",
    role: "Director of Operations",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden px-4 py-24 lg:py-32">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 111, 209, 0.05) 0%, rgba(245, 249, 255, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <SectionBadge icon={HiChat}>Testimonials</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
          >
            What Our Clients Say About Q-DAS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            Don&apos;t just take our word for it - hear directly from the
            startups and businesses we&apos;ve helped innovate and grow. Our
            clients&apos; success stories reflect our commitment to excellence.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 z-20 -translate-x-4 -translate-y-1/2 rounded-full bg-gray-900 p-3 text-white transition-all hover:bg-gray-800 md:-translate-x-12"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-primary hover:bg-primary/90 absolute top-1/2 right-0 z-20 translate-x-4 -translate-y-1/2 rounded-full p-3 text-white transition-all md:translate-x-12"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>

            {/* Testimonial Content */}
            <div className="rounded-2xl bg-white p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Avatar Group */}
                  <div className="mb-8 flex justify-center">
                    <div className="flex -space-x-3">
                      {testimonials.map((testimonial, index) => (
                        <Avatar
                          key={index}
                          className={`h-12 w-12 border-2 border-white transition-all ${
                            index === currentIndex
                              ? "ring-primary ring-2 ring-offset-2"
                              : "opacity-60"
                          }`}
                        >
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.author}
                          />
                          <AvatarFallback className="bg-linear-to-br from-blue-400 to-blue-600 font-semibold text-white">
                            {testimonial.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-xl leading-relaxed font-bold text-gray-900 md:text-2xl">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {currentTestimonial.author}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">
                      {currentTestimonial.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
