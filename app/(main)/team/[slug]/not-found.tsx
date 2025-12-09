"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "motion/react";
import { HiUserGroup } from "react-icons/hi2";

export default function TeamMemberNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Minimal Icon Graphic */}
          <div className="border-primary mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border bg-gray-50 text-gray-300">
            <HiUserGroup className="text-primary h-8 w-8" />
          </div>

          <h1 className="font-display mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Profile Not Found
          </h1>

          <p className="mx-auto mb-6 text-base leading-relaxed text-gray-500">
            We couldn&apos;t find the team member you&apos;re looking for. They
            may have moved to a different role.
          </p>

          <Link
            href="/team"
            className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all"
          >
            <HiArrowLeft className="h-5 w-5" />
            Back to Team
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
