"use client";

import Link from "next/link";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import { motion } from "motion/react";

export default function GlobalNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <h1 className="font-display from-primary to-accent bg-linear-to-r bg-clip-text text-9xl font-bold text-transparent md:text-[10rem]">
            404
          </h1>

          {/* Subtitle */}
          <h2 className="font-display mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-md text-gray-500 md:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              <HiHome className="h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3 text-base font-bold text-gray-700 transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm sm:w-auto"
            >
              <HiArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
