"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-500 hover:border-gray-500 md:p-10">
        {/* Icon Container */}
        <div className="mb-6 flex items-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF6FF] md:h-[100px] md:w-[100px]">
            {/* Gradient Definition */}
            <svg
              className="absolute inset-0 h-full w-full rotate-190"
              viewBox="0 0 64 64"
            >
              <defs>
                <linearGradient
                  id={`gradient-border-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#EAE2FF" />
                  <stop offset="100%" stopColor="#006FD1" />
                </linearGradient>
                <linearGradient
                  id={`gradient-icon-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#006FD1" />
                  <stop offset="100%" stopColor="#EAE2FF" />
                </linearGradient>
              </defs>
              {/* Partial Border Ring */}
              <circle
                cx="32"
                cy="32"
                r="31"
                fill="none"
                stroke={`url(#gradient-border-${index})`}
                strokeWidth="2"
                strokeDasharray="110 1000"
                strokeLinecap="round"
                className="opacity-100"
              />
            </svg>

            <div className="bg-primary-light absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <style>
              {`
                .icon-gradient-${index} path {
                  fill: url(#gradient-icon-${index}) !important;
                }
              `}
            </style>
            <Icon
              className={`icon-gradient-${index} relative z-10 h-8 w-8 transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <h3 className="font-display mb-3 text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
