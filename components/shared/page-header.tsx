"use client";

import { motion, Transition, useReducedMotion } from "motion/react";
import { SectionBadge } from "@/components/section-badge";
import { IconType } from "react-icons";
import { HiCog, HiUserGroup, HiNewspaper, HiChatAlt2 } from "react-icons/hi";
import { cn } from "@/lib/utils";
import React from "react";

type IconName = "cog" | "userGroup" | "newspaper" | "chatBubbleLeftRight";

const iconMap: Record<IconName, IconType> = {
  cog: HiCog,
  userGroup: HiUserGroup,
  newspaper: HiNewspaper,
  chatBubbleLeftRight: HiChatAlt2,
};

interface PageHeaderProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  icon?: IconName;
  className?: string;
}

export function PageHeader({
  badge,
  title,
  description,
  icon,
  className,
}: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = icon ? iconMap[icon] : undefined;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      } as Transition,
    },
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24",
        className,
      )}
    >
      {/* Background Pattern - Subtle Dot Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[24px_24px] opacity-60" />

      {/* Decorative Watermark Icon */}
      {Icon && (
        <div className="pointer-events-none absolute -top-12 -right-12 -z-10 overflow-hidden opacity-[0.03] select-none md:-top-20 md:-right-20">
          <Icon className="h-[300px] w-[300px] -rotate-12 text-black md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]" />
        </div>
      )}

      <div className="relative container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8"
        >
          {/* Left Column: Badge & Title */}
          <div className="flex flex-col items-start lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-6">
              <SectionBadge icon={Icon}>{badge}</SectionBadge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl leading-[1.1] font-bold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.05] lg:text-7xl"
            >
              {title}
            </motion.h1>
          </div>

          {/* Right Column: Description & Decorative Line */}
          <div className="flex flex-col justify-end pb-1 lg:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative pl-6 md:pl-8"
            >
              {/* Animated Vertical Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="from-primary/60 absolute top-0 left-0 w-[2px] bg-linear-to-b to-transparent"
              />

              <p className="text-lg leading-relaxed text-pretty text-gray-600 md:text-xl md:leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient for smooth transition to content */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
