import { newsArticles } from "@/lib/data/news";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { HiArrowLeft, HiCalendar, HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailProps): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article)
    return {
      title: "Article Not Found | Q-DAS Global",
      description: "The requested article could not be found.",
    };
  return {
    title: `${article.title} | Q-DAS Global`,
    description: article.excerpt,
    keywords: [article.category, "Q-DAS Global", "news", "ICT"],
    openGraph: {
      title: `${article.title} | Q-DAS Global`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Q-DAS Global`,
      description: article.excerpt,
    },
  };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="flex-1">
      <PageHeader
        badge={article.category}
        title={article.title}
        description=""
      />

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          {/* Article Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-500 md:mb-12">
            <div className="flex items-center gap-2">
              <HiCalendar className="text-primary h-5 w-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiUser className="text-primary h-5 w-5" />
              <span>{article.author}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-[32px] shadow-xl md:mb-16">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <article
            className="prose prose-lg prose-blue mx-auto max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share / Back */}
          <div className="mt-16 border-t border-gray-100 pt-8">
            <Link
              href="/news"
              className="group hover:text-primary inline-flex items-center gap-2 font-medium text-gray-600 transition-colors"
            >
              <HiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to News
            </Link>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display mb-12 text-3xl font-bold text-gray-900">
              More News Article from QDAS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display group-hover:text-primary mb-3 text-xl font-bold text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </main>
  );
}
