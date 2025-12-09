import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { ServicesContent } from "@/components/services/services-page-content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end ICT solutions—from software development to infrastructure—designed for scale and built for modern enterprises.",
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
