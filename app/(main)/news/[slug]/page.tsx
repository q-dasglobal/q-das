import { getNewsArticles, getNewsArticle } from "@/lib/sanity/fetch";
import { ContactSection } from "@/components/shared/contact-section";
import { ArticleContent } from "@/components/news/article-content";
import { NewsCard } from "@/components/news/news-card";
import { ShareButtons } from "@/components/news/share-buttons";
import {
  HiArrowLeft,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cn, formatDate } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";

interface NewsDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  if (!article)
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getNewsArticles();
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <article className="pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Back Link (Breadcrumb style) */}
          <div className="mb-4 md:mb-8">
            <Link
              href="/news"
              className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>

          {/* Article Title Area */}
          <div className="mb-4 lg:mb-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-primary bg-primary/10 rounded-full px-3 py-1 text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="font-display text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl xl:text-6xl">
              {article.title}
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Metadata & Share Sidebar */}
            <aside className="lg:col-span-3">
              <div
                className={cn(
                  "flex flex-col gap-6",
                  "lg:sticky lg:top-32 lg:block lg:space-y-8 lg:border-l-2 lg:border-gray-100 lg:pl-6",
                  "border-y border-gray-100 py-6 lg:border-y-0 lg:py-0",
                )}
              >
                {/* Meta Info Container */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:block lg:space-y-8">
                  {/* Published On */}
                  <div>
                    <h3 className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase lg:mb-2 lg:text-sm lg:tracking-normal lg:text-gray-900 lg:normal-case">
                      Published On
                    </h3>
                    <div className="flex items-center gap-2 text-gray-900 lg:text-gray-600">
                      <HiOutlineCalendar className="text-primary h-4 w-4 lg:text-current" />
                      <span className="text-sm font-medium lg:font-normal">
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>

                  {/* Author */}
                  <div>
                    <h3 className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase lg:mb-2 lg:text-sm lg:tracking-normal lg:text-gray-900 lg:normal-case">
                      Author
                    </h3>
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gray-100 lg:flex">
                        <HiOutlineUser className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 lg:font-normal lg:text-gray-600">
                        {article.author}
                      </span>
                    </div>
                  </div>

                  {/* Read Time */}
                  <div>
                    <h3 className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase lg:mb-2 lg:text-sm lg:tracking-normal lg:text-gray-900 lg:normal-case">
                      Read Time
                    </h3>
                    <div className="flex items-center gap-2 text-gray-900 lg:text-gray-600">
                      <HiOutlineClock className="text-primary h-4 w-4 lg:text-current" />
                      <span className="text-sm font-medium lg:font-normal">
                        5 min read
                      </span>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-2 w-full lg:mt-0">
                  <h3 className="mb-3 hidden text-sm font-semibold text-gray-900 lg:block">
                    Share
                  </h3>

                  {/* Mobile Share */}
                  <div className="flex items-center justify-between lg:block">
                    <div className="flex items-center gap-3 lg:hidden">
                      <p className="text-sm font-bold text-gray-900">
                        Share Article
                      </p>
                    </div>

                    <ShareButtons
                      url={`https://qdasglobal.com/news/${slug}`}
                      title={article.title}
                      description={article.excerpt}
                      className="lg:flex-wrap"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column (Content) */}
            <div className="min-w-0 lg:col-span-9">
              {/* Hero Image */}
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl shadow-sm md:rounded-3xl">
                <ImageWithFallback
                  src={
                    article.mainImage
                      ? urlFor(article.mainImage).width(1200).height(675).url()
                      : article.image
                  }
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <ArticleContent content={article.content} />
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 py-8 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                More from Q-DAS
              </h2>
              <Link
                href="/news"
                className="group text-primary hidden items-center gap-2 text-sm font-semibold md:flex"
              >
                View All
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <NewsCard
                  key={item.id}
                  article={item}
                  variant="elevated"
                  showExcerpt={false}
                />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/news"
                className="text-primary inline-flex items-center gap-2 text-sm font-semibold"
              >
                View All News
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </main>
  );
}
