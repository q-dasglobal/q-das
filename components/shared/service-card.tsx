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
      className={cn("group h-full", className)}
    >
      <Link
        href={href}
        className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-100 bg-linear-to-b from-gray-50 to-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
      >
        {/* Image Container */}
        <div className="relative z-10 mb-8 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          {/* Service Label */}
          <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
            <span className="text-gray-400">Service</span>
            <span className="text-primary">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display group-hover:text-primary mb-4 text-2xl leading-tight font-bold text-gray-900 transition-colors">
            {title}
          </h3>

          <p className="mb-8 line-clamp-3 flex-1 text-base leading-relaxed text-gray-600">
            {description}
          </p>

          {/* CTA */}
          <div className="text-primary mt-auto flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3">
            <span>Explore Service</span>
            <div className="bg-primary/10 group-hover:bg-primary flex h-6 w-6 items-center justify-center rounded-full transition-colors group-hover:text-white">
              <HiArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
