"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
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
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:border-gray-300 md:p-10">
        {/* Icon Container */}
        <div className="mb-6 flex items-center">
          <div className="relative">
            <div className="bg-primary-light absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="bg-primary-light border-primary/20 group-hover:border-primary/30 relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500">
              <Icon className="text-primary h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
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
