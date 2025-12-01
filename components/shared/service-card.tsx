"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  image,
  href,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <Link
        href={href}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:border-gray-300"
      >
        {/* Image Container */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-8">
          {/* Title */}
          <h3 className="font-display mb-4 text-xl leading-snug font-semibold text-gray-900 md:text-2xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
            {description}
          </p>

          {/* CTA */}
          <div className="text-primary mt-auto inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-2.5">
            <span>Learn more</span>
            <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
