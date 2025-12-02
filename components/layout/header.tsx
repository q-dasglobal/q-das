"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navigationItems } from "@/lib/data/navigation";

const MobileMenuButton = memo(
  ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-blue-900 transition-all hover:bg-white/50"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  ),
);

MobileMenuButton.displayName = "MobileMenuButton";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 40);

    // Calculate scroll progress (0-100%)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const progress =
      scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  // Check scroll position on mount and when pathname changes
  useEffect(() => {
    // Check initial scroll position
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);
    };

    checkScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (_i: number) => ({
      opacity: 1,
      y: 0,
    }),
  };

  return (
    <motion.header
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={headerVariants}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="fixed inset-x-0 top-0 z-50 w-full"
      role="banner"
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="bg-primary absolute top-0 left-0 h-0.5 origin-left"
        style={{
          width: `${scrollProgress}%`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      <div className="flex justify-center">
        {/* Desktop Navigation */}
        <motion.nav
          variants={headerVariants}
          className={cn(
            "relative z-60 mt-2 hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent px-4 transition-all duration-500 ease-in-out md:px-6 lg:flex",
            isScrolled
              ? "mx-auto mt-5 w-[1058px] rounded-[32px] border border-neutral-300 bg-white/95 py-2 backdrop-blur-md"
              : "bg-transparent",
          )}
          style={{
            height: "68px",
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo and Name Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <Link
              href="/"
              className="group/logo relative z-20 flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="relative h-32 w-32">
                <Image
                  src="/Logo.png"
                  alt="Q-DAS Global logo"
                  fill
                  sizes="128px"
                  className="object-contain transition-opacity duration-200 group-hover/logo:opacity-90"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div
            className={`absolute inset-0 hidden flex-1 flex-row items-center justify-center text-sm font-medium transition-all duration-500 ease-in-out lg:flex ${
              isScrolled ? "gap-4" : "gap-12"
            }`}
            role="menubar"
          >
            {navigationItems.map((item, i) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/" && pathname === "/");

              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={navItemVariants}
                  transition={{
                    delay: 0.15 + i * 0.05,
                    duration: shouldReduceMotion ? 0 : 0.5,
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
                    className="focus:ring-primary/50 group relative rounded-full px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    <motion.span
                      layoutId="desktop-active-pill"
                      className={`absolute inset-0 rounded-full transition-colors duration-200 ${
                        isActive
                          ? "bg-primary/10 border-primary border-l-2"
                          : "group-hover:bg-primary/5 bg-transparent"
                      }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                    <motion.span
                      className={`relative z-10 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary scale-105"
                          : "group-hover:text-primary text-neutral-900"
                      }`}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Actions Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex items-center gap-4"
            role="group"
            aria-label="Header actions"
          >
            {/* Contact Button */}
            <div>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 shadow-primary/20 hover:shadow-primary/30 group/contact relative hidden cursor-pointer items-center gap-2 rounded-3xl px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl md:flex"
                aria-label="Contact us"
              >
                <span>Contact Us</span>
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
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        variants={headerVariants}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:hidden"
      >
        <motion.div
          animate={{
            width: isScrolled ? "95%" : "100%",
            borderRadius: isScrolled && !isMobileMenuOpen ? 9999 : 10,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: "easeInOut",
            borderRadius: { duration: shouldReduceMotion ? 0 : 0.2 },
          }}
          style={{ willChange: "width, border-radius" }}
          className={cn(
            "relative z-50 mx-auto flex flex-col items-center justify-between px-4 py-2 md:px-6",
            // Is not scrolled and not open
            !isScrolled && !isMobileMenuOpen && "bg-transparent py-4",
            // Is scrolled but open
            isScrolled && "mt-3 border border-neutral-300",
            // Is scrolled but not open
            isScrolled &&
              !isMobileMenuOpen &&
              "border-neutral-300 bg-white/95 backdrop-blur-md",
            // Is open Mobile Menu and Navbar (scrolled or not)
            isMobileMenuOpen &&
              "border border-neutral-300 bg-white/95 backdrop-blur-md",
          )}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <Link
              href="/"
              className="relative z-20 flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="relative h-[32px] w-[98px]">
                <Image
                  src="/Logo.png"
                  alt="Q-DAS Global logo"
                  fill
                  sizes="98px"
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </Link>

            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isScrolled={isScrolled}
        onClose={closeMobileMenu}
      />
    </motion.header>
  );
}
