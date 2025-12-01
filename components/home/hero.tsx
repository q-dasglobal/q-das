"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { SectionBadge } from "@/components/section-badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32 lg:min-h-[918px]">
      {/* Background 3D shape image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/shape-light-hero.webp"
          alt="Abstract 3D glass rings"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI5MTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U1ZjBmZiIvPjwvc3ZnPg=="
        />
      </div>

      {/* Base Gradient Overlay - on top of image */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 111, 209, 0.35) 0%, rgba(0, 111, 209, 0.2) 15%, rgba(0, 111, 209, 0.08) 30%, rgba(0, 111, 209, 0.03) 50%, rgba(245, 249, 255, 0.6) 70%, rgba(245, 249, 255, 0.8) 85%, rgba(245, 249, 255, 0.9) 100%)",
        }}
      />

      {/* Top-left Radial Gradient - on top of base gradient */}
      <div
        className="absolute top-0 left-0 z-2 h-[600px] w-2/3"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(0, 111, 209, 0.4) 0%, transparent 50%)",
        }}
      />

      {/* Top-right Radial Gradient - on top of base gradient */}
      <div
        className="absolute top-0 right-0 z-2 h-[600px] w-2/3"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(0, 111, 209, 0.35) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Content */}
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-6 md:pt-12 md:pb-16">
          {/* Top Section - Badge, Heading, Buttons */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: 0,
              }}
              className="mb-6 flex justify-center md:justify-start"
            >
              <SectionBadge icon={HiSparkles}>
                Sure height of quality service!
              </SectionBadge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: 0.1,
              }}
              className="font-display mb-8 text-center text-4xl leading-tight font-bold tracking-tight text-balance text-gray-900 md:text-left md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Transform Your Business with{" "}
              <span className="text-primary">Cutting-Edge</span> IT Solutions
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: 0.2,
              }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 flex-1 rounded-full px-6 py-5 text-sm text-white sm:flex-initial sm:px-8 sm:py-6 sm:text-base"
              >
                <Link href="#contact" scroll={true}>
                  Start Your Project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary flex-1 rounded-full bg-gray-50/70 px-6 py-5 text-sm hover:bg-gray-50 sm:flex-initial sm:px-8 sm:py-6 sm:text-base"
              >
                <Link href="#services" scroll={true}>
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: 0.2,
              }}
              className="mt-6 grid grid-cols-3 gap-4 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-8"
            >
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
                <div className="text-primary text-2xl font-bold sm:text-3xl md:text-4xl">
                  2000+
                </div>
                <div className="text-center text-xs text-gray-600 sm:text-left sm:text-sm md:text-base">
                  <span className="hidden sm:inline">
                    Successful
                    <br />
                    Implementations
                  </span>
                  <span className="sm:hidden">Implementations</span>
                </div>
              </div>
              <div className="hidden h-12 w-px bg-gray-200 sm:block" />
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
                <div className="text-primary text-2xl font-bold sm:text-3xl md:text-4xl">
                  15+
                </div>
                <div className="text-center text-xs text-gray-600 sm:text-left sm:text-sm md:text-base">
                  <span className="hidden sm:inline">
                    Years of
                    <br />
                    Experience
                  </span>
                  <span className="sm:hidden">Years Exp.</span>
                </div>
              </div>
              <div className="hidden h-12 w-px bg-gray-200 sm:block" />
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
                <div className="text-primary text-2xl font-bold sm:text-3xl md:text-4xl">
                  24/7
                </div>
                <div className="text-center text-xs text-gray-600 sm:text-left sm:text-sm md:text-base">
                  <span className="hidden sm:inline">
                    Support &
                    <br />
                    Monitoring
                  </span>
                  <span className="sm:hidden">Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Circular Graphic + Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: 0.3,
            }}
            className="mt-12 flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-end md:gap-12"
          >
            {/* Circular Badge with Arrow */}
            <div className="relative h-40 w-40 shrink-0 md:h-44 md:w-44">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/circle-hero.webp"
                  alt="Circle background"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 160px, 176px"
                />
              </div>

              {/* Rotating Text */}
              <svg
                className="animate-spin-slow absolute inset-0 h-full w-full"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="fill-gray-900 text-sm font-bold tracking-[0.25em] uppercase md:text-base">
                  <textPath href="#circlePath">
                    RELIABILITY * INNOVATION * SOLUTION * SCALABILITY *
                  </textPath>
                </text>
              </svg>

              {/* Center Arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <HiArrowUpRight className="h-10 w-10 text-gray-900" />
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="text-center md:text-left">
              <p className="mb-4 max-w-xs text-base leading-relaxed text-gray-600 md:max-w-sm md:text-lg lg:text-xl">
                We design unique solutions for unique issues ensuring we deliver
                on our commitments every time.
              </p>

              {/* Avatar Group */}
              <div className="mb-3 flex items-center justify-center md:justify-start">
                <div className="flex -space-x-3">
                  <Avatar className="h-10 w-10 border-2 border-white md:h-12 md:w-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                      alt="Professional man"
                    />
                    <AvatarFallback className="bg-linear-to-br from-blue-400 to-blue-600 font-semibold text-white">
                      U1
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white md:h-12 md:w-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                      alt="Professional woman"
                    />
                    <AvatarFallback className="bg-linear-to-br from-purple-400 to-purple-600 font-semibold text-white">
                      U2
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white md:h-12 md:w-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                      alt="Business man"
                    />
                    <AvatarFallback className="bg-linear-to-br from-green-400 to-green-600 font-semibold text-white">
                      U3
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white md:h-12 md:w-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                      alt="Business woman"
                    />
                    <AvatarFallback className="bg-linear-to-br from-pink-400 to-pink-600 font-semibold text-white">
                      U4
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white md:h-12 md:w-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                      alt="Professional person"
                    />
                    <AvatarFallback className="bg-linear-to-br from-orange-400 to-orange-600 font-semibold text-white">
                      U5
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white md:h-12 md:w-12"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                      boxShadow: "0 0 0 2px white",
                    }}
                  >
                    <span className="text-lg font-semibold md:text-xl">+</span>
                  </div>
                </div>
              </div>

              <p className="text-primary text-base font-semibold md:text-lg lg:text-xl">
                2000+ Happy IT Implementations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
