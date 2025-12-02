import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { NewsContent } from "@/components/news/news-page-content";

export const metadata: Metadata = {
  title: "News & Insights | Q-DAS Global",
  description:
    "Explore the latest news, success stories, and technological breakthroughs from Q-DAS Global. Stay updated with industry insights and innovation.",
  keywords: [
    "Q-DAS Global news",
    "ICT news",
    "technology updates",
    "industry insights",
    "Nigeria tech news",
  ],
  openGraph: {
    title: "News & Insights | Q-DAS Global",
    description:
      "Explore the latest news, success stories, and technological breakthroughs from Q-DAS Global.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | Q-DAS Global",
    description:
      "Explore the latest news, success stories, and technological breakthroughs from Q-DAS Global.",
  },
};

export default function NewsPage() {
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
      <NewsContent />
      <ContactSection />
    </main>
  );
}
