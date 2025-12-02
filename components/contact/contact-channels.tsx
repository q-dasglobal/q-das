"use client";

import { motion } from "motion/react";
import { FaWhatsapp, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const channels = [
  {
    name: "Chat on WhatsApp",
    description: "Direct line for quick questions",
    icon: FaWhatsapp,
    href: "https://wa.me/2348027891614",
    color: "bg-[#25D366]",
    hoverColor: "group-hover:text-[#25D366]",
  },
  {
    name: "LinkedIn",
    description: "Connect with our professional network",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/qdas-global",
    color: "bg-[#0077B5]",
    hoverColor: "group-hover:text-[#0077B5]",
  },
  {
    name: "X (Twitter)",
    description: "Follow our latest tech updates",
    icon: FaXTwitter,
    href: "https://x.com/qdasglobal",
    color: "bg-black",
    hoverColor: "group-hover:text-black",
  },
  {
    name: "Support Ticket",
    description: "Existing client? Open a ticket",
    icon: HiOutlineChatAlt2,
    href: "#",
    color: "bg-primary",
    hoverColor: "group-hover:text-primary",
  },
];

export function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {channels.map((channel, index) => (
        <motion.a
          key={channel.name}
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gray-50 p-6 text-center transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-transform group-hover:scale-110 ${channel.color}`}
          >
            <channel.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display mb-1 text-lg font-bold text-gray-900">
              {channel.name}
            </h3>
            <p className="text-sm text-gray-500">{channel.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
