"use client";

import { motion } from "motion/react";
import { HiExternalLink } from "react-icons/hi";

export function ContactMap() {
  return (
    <div className="relative flex flex-col-reverse overflow-hidden rounded-[32px] bg-gray-100 shadow-xl shadow-blue-900/5 md:block md:h-[550px]">
      {/* Location Widget - Responsive: Bottom block on mobile, Floating on desktop */}
      <div className="relative z-20 w-full bg-white p-6 md:absolute md:bottom-8 md:left-8 md:w-80 md:bg-transparent md:p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl bg-[#001529] shadow-2xl ring-1 ring-white/10"
        >
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs font-bold tracking-widest text-blue-200 uppercase">
                Headquarters
              </h3>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] font-medium text-blue-200/70">
                  9.08°N, 7.46°E
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-display text-2xl font-bold text-white">
                Abuja, Nigeria
              </p>
              <p className="mt-1 text-sm text-blue-200/70">
                10 Sequela Street, Wuse II
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=10+Sequela+St,+Wuse,+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary hover:bg-primary/90 flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white transition-all"
            >
              <span>Get Directions</span>
              <HiExternalLink className="h-4 w-4 text-blue-100 transition-colors group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Map Iframe */}
      <div className="h-[300px] w-full md:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.816677989668!2d7.46548797450379!3d9.080438790983637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae5b277255d%3A0x633513362035315!2s10%20Sequela%20St%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1709645823000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
