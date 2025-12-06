"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { HiCheck } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data/services";

export function ServicesContent() {
  return (
    <section className="pb-12 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex flex-col gap-6 md:gap-12">
          {services.map((service, index) => {
            const isEven = index % 2 !== 0;

            return (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative scroll-mt-24 overflow-hidden rounded-[24px] border border-gray-100 bg-linear-to-b from-gray-50 to-white p-6 shadow-sm transition-shadow hover:shadow-md md:scroll-mt-32 md:rounded-[48px] md:p-12 lg:p-16"
              >
                <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* COLUMN 1: Title (Odd) OR Features (Even) */}
                  <div
                    className={cn(
                      "lg:col-span-4",
                      isEven ? "lg:order-3 lg:text-right" : "lg:order-1",
                    )}
                  >
                    <div className={cn("flex flex-col", isEven && "items-end")}>
                      {/* Editorial Number Badge */}
                      <div
                        className={cn(
                          "mb-6 flex items-center gap-3",
                          isEven && "flex-row-reverse",
                        )}
                      >
                        <span className="text-primary flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold shadow-sm">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                          Service
                        </span>
                      </div>

                      <h2 className="font-display text-2xl leading-tight font-bold text-balance text-gray-900 md:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>
                      <div
                        className={cn(
                          "bg-primary mt-4 h-1.5 w-16 rounded-full md:mt-6 md:w-20",
                          isEven && "lg:ml-auto",
                        )}
                      />
                    </div>
                  </div>

                  {/* COLUMN 2: Center Content (Description + Image) */}
                  <div className="flex flex-col text-center lg:order-2 lg:col-span-4 lg:text-left">
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 md:mb-10 md:text-lg">
                      {service.description}
                    </p>

                    {/* Illustration */}
                    <div className="relative mx-auto aspect-square w-full max-w-[240px] md:max-w-[320px]">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>

                  {/* COLUMN 3: Features (Odd) OR Title (Even) */}
                  <div
                    className={cn(
                      "lg:col-span-4",
                      isEven ? "lg:order-1" : "lg:order-3",
                    )}
                  >
                    <ul className="space-y-4 md:space-y-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                          <div className="bg-primary ring-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white shadow-sm ring-2 md:mt-1 md:h-6 md:w-6 md:ring-4">
                            <HiCheck className="h-3 w-3 md:h-3.5 md:w-3.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 md:text-base">
                              {feature.title}
                            </h4>
                            <p className="mt-0.5 text-xs leading-relaxed text-gray-600 md:mt-1 md:text-sm">
                              {feature.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
