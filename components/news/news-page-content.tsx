"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { NewsCard } from "@/components/news/news-card";
import Link from "next/link";
import { NewsArticle } from "@/lib/data/news";
import { cn, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiSearch, HiCalendar } from "react-icons/hi";
import { urlFor } from "@/lib/sanity/image";

const categories: NewsArticle["category"][] = [
  "All",
  "Tech",
  "Inside QDAS",
  "Featured",
  "Newsroom",
  "Press",
];

interface NewsContentProps {
  articles: NewsArticle[];
}

export function NewsContent({ articles }: NewsContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter news based on category and search query
  const filteredNews = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Hero Grid Logic
  // 1. Get featured articles (or fallback to latest if none marked featured)
  const featuredArticles = articles.filter((a) => a.featured);
  const heroCandidates =
    featuredArticles.length >= 3 ? featuredArticles : articles.slice(0, 3);

  const mainHeroArticle = heroCandidates[0];
  const subHeroArticles = heroCandidates.slice(1, 3);
  const showHeroGrid = heroCandidates.length >= 3;

  // 2. Get the rest of the articles for the list
  // If we are showing the hero grid, exclude those 3 from the list
  const listArticles =
    activeCategory === "All" && !searchQuery && showHeroGrid
      ? filteredNews.filter((a) => !heroCandidates.find((h) => h.id === a.id))
      : filteredNews;

  const [visibleCount, setVisibleCount] = useState<number>(6);

  return (
    <section className="bg-white lg:pt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Top Bar: Categories & Search */}
        <div className="mb-10 flex flex-col gap-6 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
          {/* Categories */}
          <div className="relative">
            {/* Horizontal scroll container for mobile, flex-wrap for desktop */}
            <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pt-2 pb-2 md:flex-wrap md:overflow-visible md:pb-0">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6); // Reset pagination on category change
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "focus:ring-primary min-w-fit touch-manipulation rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none",
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300",
                  )}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            {/* Left gradient fade */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-5 bg-linear-to-r from-white to-transparent md:hidden" />
            {/* Right gradient fade */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-5 bg-linear-to-l from-white to-transparent md:hidden" />
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <HiSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6); // Reset pagination on search
              }}
              className="focus:ring-primary/20 h-10 border-gray-200 bg-gray-50 pl-9 text-sm transition-colors focus:bg-white"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredNews.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Hero Grid Section (Only on 'All' tab & no search) */}
              {activeCategory === "All" && !searchQuery && showHeroGrid && (
                <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
                  {/* Main Hero Article (Left - Large) */}
                  <Link
                    href={`/news/${mainHeroArticle.slug}`}
                    className="group relative block overflow-hidden rounded-2xl bg-gray-900 lg:col-span-2 lg:row-span-2"
                  >
                    <div className="relative h-full min-h-[400px] w-full lg:min-h-[500px]">
                      <ImageWithFallback
                        src={
                          mainHeroArticle.mainImage?.asset
                            ? urlFor(mainHeroArticle.mainImage)
                                .width(1200)
                                .height(800)
                                .url()
                            : mainHeroArticle.image
                        }
                        alt={mainHeroArticle.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <div className="mb-4 flex items-center gap-3 text-xs font-medium text-white/90">
                          <span className="bg-primary rounded px-2 py-0.5 text-white">
                            {mainHeroArticle.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <HiCalendar className="h-3 w-3" />
                            {formatDate(mainHeroArticle.date)}
                          </span>
                        </div>
                        <h2 className="font-display mb-3 text-2xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
                          {mainHeroArticle.title}
                        </h2>
                        <p className="line-clamp-2 max-w-2xl text-base text-white/80 md:text-lg">
                          {mainHeroArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Sub-Featured Articles (Right - Stacked) */}
                  <div className="flex flex-col gap-6 lg:col-span-1 lg:row-span-2">
                    {subHeroArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/news/${article.slug}`}
                        className="group relative flex-1 overflow-hidden rounded-2xl bg-gray-900"
                      >
                        <div className="relative h-full min-h-[240px] w-full">
                          <ImageWithFallback
                            src={
                              article.mainImage?.asset
                                ? urlFor(article.mainImage)
                                    .width(600)
                                    .height(400)
                                    .url()
                                : article.image
                            }
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-6">
                            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-white/90">
                              {/* Refined Tag: Glassmorphism */}
                              <span className="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-semibold text-white backdrop-blur-md">
                                {article.category}
                              </span>
                              <span>•</span>
                              <span>{formatDate(article.date)}</span>
                            </div>
                            <h3 className="font-display line-clamp-2 text-lg leading-snug font-bold text-white md:text-xl">
                              {article.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Article Grid */}
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Latest News
                  </h3>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {listArticles.slice(0, visibleCount).map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < listArticles.length && (
                  <div className="mt-12 flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="h-12 min-w-[200px] rounded-full border-gray-200 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
              </div>

              {/* Newsletter Section (Bottom) - Commented out, requires backend integration */}
              {/* TODO: Implement newsletter subscription with email marketing service (e.g., Resend Audiences, Mailchimp) */}
              {/*
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-16 sm:px-12 lg:px-20">
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="h-full w-full"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid-pattern"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 40L40 0H20L0 20M40 40V20L20 40"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          className="text-white"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#grid-pattern)"
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
                  <div className="max-w-xl text-center lg:text-left">
                    <h3 className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      The Future, Delivered.
                    </h3>
                    <p className="text-lg text-gray-400">
                      Join 10,000+ engineers and innovators staying ahead of the
                      curve with our weekly insights.
                    </p>
                  </div>

                  <div className="w-full max-w-md">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Input
                        placeholder="Enter your email"
                        className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white/20 focus:bg-white/10 focus:ring-0"
                      />
                      <Button className="h-12 bg-white px-8 font-bold text-gray-900 hover:bg-gray-100">
                        Join Now
                      </Button>
                    </div>
                    <p className="mt-3 text-center text-xs text-gray-500 lg:text-left">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
              */}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <HiSearch className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                No articles found
              </h3>
              <p className="max-w-xs text-sm text-gray-500">
                We couldn't find any articles matching "{searchQuery}". Try
                adjusting your search or filters.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
