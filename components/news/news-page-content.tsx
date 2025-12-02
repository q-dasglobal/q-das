"use client";

import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/data/news";
import { cn } from "@/lib/utils";

const categories = ["All", "Tech", "Inside QDAS", "Featured", "Newsroom"];

export function NewsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  const featuredArticle = filteredNews[0];
  const remainingArticles = filteredNews.slice(1);

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Filters */}
        <div className="mb-16 flex flex-wrap gap-4 border-b border-gray-100 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "hover:text-primary text-sm font-medium transition-colors",
                activeCategory === category
                  ? "text-primary underline decoration-2 underline-offset-8"
                  : "text-gray-500",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Featured Article (Hero) */}
            {featuredArticle && (
              <div className="mb-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 lg:col-span-8">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center lg:col-span-4">
                  <div className="mb-6 flex items-center gap-3 text-sm font-medium">
                    <span className="text-primary">
                      {featuredArticle.category}
                    </span>
                    <span className="h-px w-8 bg-gray-300" />
                    <span className="text-gray-500">
                      {featuredArticle.date}
                    </span>
                  </div>
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="group block"
                  >
                    <h2 className="font-display group-hover:text-primary mb-6 text-4xl leading-tight font-bold text-gray-900 transition-colors lg:text-5xl">
                      {featuredArticle.title}
                    </h2>
                  </Link>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="group text-primary inline-flex items-center gap-2 font-medium"
                  >
                    Read Article
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}

            {/* Remaining Articles Grid */}
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {remainingArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative mb-6 aspect-4/3 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wider uppercase">
                      <span className="text-primary">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="font-display group-hover:text-primary mb-3 text-2xl leading-tight font-bold text-gray-900 transition-colors">
                      {article.title}
                    </h3>
                    <p className="line-clamp-3 text-base leading-relaxed text-gray-600">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
