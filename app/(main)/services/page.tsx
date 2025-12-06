import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { ServicesContent } from "@/components/services/services-page-content";

export const metadata: Metadata = {
  title: "Our Services | Q-DAS Global",
  description:
    "From intelligent software development to robust infrastructure, we deliver end-to-end technology solutions designed for scale. Explore our comprehensive ICT services.",
  keywords: [
    "software development",
    "managed IT services",
    "infrastructure solutions",
    "IT consulting",
    "cloud services",
    "cybersecurity",
    "digital transformation",
  ],
  openGraph: {
    title: "Our Services | Q-DAS Global",
    description:
      "From intelligent software development to robust infrastructure, we deliver the systems that power modern enterprises.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Q-DAS Global",
    description:
      "From intelligent software development to robust infrastructure, we deliver the systems that power modern enterprises.",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        badge="Our Services"
        title={
          <>
            End-to-End Technology Solutions{" "}
            <span className="text-primary">Designed for Scale</span>
          </>
        }
        description="From intelligent software development to robust infrastructure, we deliver the systems that power modern enterprises."
        icon="cog"
      />
      <ServicesContent />
      <ContactSection />
    </main>
  );
}
