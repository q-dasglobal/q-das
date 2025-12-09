import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { NewsContent } from "@/components/news/news-page-content";
import { getNewsArticles } from "@/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest news, success stories, and tech breakthroughs from Q-DAS Global. Stay updated with industry insights.",
};

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function NewsPage() {
  const articles = await getNewsArticles();

  return (
    <main className="flex-1 bg-white">
      <PageHeader
        badge="Latest News"
        title={
          <>
            Insights, Innovation, and{" "}
            <span className="text-primary">Industry Updates</span>
          </>
        }
        description="Explore the latest news, success stories, and technological breakthroughs from Q-DAS Global."
        icon="newspaper"
      />
      <NewsContent articles={articles} />
      <ContactSection />
    </main>
  );
}
