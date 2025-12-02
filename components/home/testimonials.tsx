"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { HiChat, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
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
  {
    quote:
      "The level of detail and strategic thinking Q-DAS brings to the table is unmatched. They truly understand what it takes to build a successful digital product.",
    author: "David Chen",
    role: "Founder of StartUp X",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    quote:
      "From concept to execution, Q-DAS delivered excellence. Their team is responsive, skilled, and a pleasure to work with.",
    author: "Emily Davis",
    role: "VP of Marketing",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleAvatarClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      position: "relative" as const,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
    }),
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-32">
      {/* Background 3D shape image - Reused from Hero */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/shape-light-hero.webp"
          alt="Abstract 3D glass rings"
          fill
          className="object-cover object-center opacity-60"
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Base Gradient Overlay - Reduced opacity as requested */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(245, 249, 255, 0.6) 0%, rgba(245, 249, 255, 0.4) 50%, rgba(245, 249, 255, 0.6) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
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
            className="font-display mb-6 text-3xl leading-tight font-bold text-gray-900 lg:text-4xl"
          >
            What Our Clients Say About Q-DAS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-gray-600 lg:text-lg"
          >
            Don&apos;t just take our word for it - hear directly from the
            startups and businesses we&apos;ve helped innovate and grow. Our
            clients&apos; success stories reflect our commitment to excellence.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Arrows - Desktop (Sides) */}
          <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-between px-4 md:flex md:px-0">
            <button
              onClick={prevTestimonial}
              className="focus:ring-primary pointer-events-auto rounded-full border border-gray-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="h-6 w-6 text-gray-900" />
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-primary/90 hover:bg-primary focus:ring-primary pointer-events-auto rounded-full p-4 backdrop-blur-sm transition-all hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-24">
            <div className="flex flex-col items-center text-center">
              {/* Avatars Row - Infinite Carousel */}
              <div className="relative mb-6 flex h-[120px] w-full items-center justify-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] md:h-[160px]">
                {testimonials.map((testimonial, index) => {
                  const length = testimonials.length;
                  let offset = (index - currentIndex + length) % length;
                  if (offset > 2) offset -= 5;

                  const isActive = offset === 0;
                  const isNeighbor = Math.abs(offset) === 1;

                  // Calculate positions
                  // Using smaller offsets for better responsiveness on mobile
                  let xOffset = 0;
                  // Mobile-first safe values
                  if (offset === -1) xOffset = -85; // Tighter for mobile
                  if (offset === 1) xOffset = 85;
                  if (offset === -2) xOffset = -160;
                  if (offset === 2) xOffset = 160;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAvatarClick(index)}
                      className="absolute top-1/2 left-1/2 focus:outline-none"
                      initial={false}
                      animate={{
                        x: `calc(-50% + ${xOffset}px)`,
                        y: `calc(-50% + ${Math.abs(offset) * 8}px)`, // Reduced arc
                        scale: isActive ? 1.25 : isNeighbor ? 0.9 : 0.75,
                        opacity: isActive ? 1 : isNeighbor ? 0.8 : 0.5,
                        zIndex: 100 - Math.abs(offset) * 10,
                        filter: isActive
                          ? "blur(0px)"
                          : isNeighbor
                            ? "blur(0px)"
                            : "blur(1px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 1,
                      }}
                      style={{
                        pointerEvents: isActive || isNeighbor ? "auto" : "none",
                      }}
                    >
                      <div
                        className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                          isActive
                            ? "border-primary h-16 w-16 border-4 md:h-20 md:w-20"
                            : "h-12 w-12 border-2 border-white/60 md:h-14 md:w-14"
                        }`}
                      >
                        <Avatar className="h-full w-full">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="object-cover"
                          />
                          <AvatarFallback>
                            {testimonial.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Text Content with Slide Animation */}
              <motion.div layout className="relative w-full">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex flex-col items-center"
                  >
                    <blockquote className="mb-6 text-lg leading-relaxed font-bold text-gray-900 md:mb-8 md:text-2xl">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex flex-row items-center gap-3">
                      <span className="text-base font-bold text-gray-900 md:text-xl">
                        {currentTestimonial.author}
                      </span>
                      <div className="h-4 w-px bg-gray-900" />
                      <span className="text-sm text-gray-600 md:text-base">
                        {currentTestimonial.role}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navigation Arrows - Mobile (Bottom) */}
              <div className="mt-12 flex items-center justify-center gap-6 md:hidden">
                <button
                  onClick={prevTestimonial}
                  className="rounded-full border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <HiChevronLeft className="h-5 w-5 text-gray-900" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="bg-primary hover:bg-primary/90 rounded-full border border-gray-200 p-4 transition-all active:scale-95"
                  aria-label="Next testimonial"
                >
                  <HiChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
