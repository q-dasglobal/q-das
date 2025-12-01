"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, isScrolled, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-white/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Menu Container */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-0 right-0 left-0 z-50 mt-[75px]"
      >
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? "95%" : "100%",
            borderRadius: isScrolled ? 10 : 10,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            borderRadius: { duration: 0.3 },
          }}
          className="mx-auto border border-neutral-300 bg-white/95 p-6 shadow-md"
        >
          <nav>
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item, i) => {
                const isActive = isItemActive(item.href);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group relative flex w-full items-center"
                    >
                      <motion.div
                        layoutId="mobile-active-pill"
                        className={`absolute inset-0 -left-2 rounded-lg transition-colors duration-200 ${
                          isActive
                            ? "bg-primary/10 border-primary border-l-2"
                            : "group-hover:bg-primary/5 group-hover:border-primary/30 border-l-2 border-transparent bg-transparent"
                        }`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                      <motion.span
                        className={cn(
                          "relative z-10 py-2.5 text-base font-medium transition-colors duration-200",
                          isActive
                            ? "text-primary"
                            : "group-hover:text-primary text-neutral-900",
                        )}
                        animate={{
                          x: isActive ? 4 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        {item.name}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-dot"
                          className="bg-primary absolute right-2 h-2 w-2 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Contact Us Link */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navigationItems.length * 0.05,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                <Link
                  href="/#contact"
                  onClick={onClose}
                  className="group bg-primary hover:bg-primary/90 shadow-primary/20 hover:shadow-primary/30 inline-flex w-full items-center justify-center gap-2 rounded-3xl px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Contact Us
                  <motion.svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
}
