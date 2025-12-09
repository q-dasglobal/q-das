import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { AboutContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2011, Q-DAS Global has empowered organizations with intelligent, secure, and scalable ICT solutions. Discover our mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        badge="About Us"
        title={
          <>
            Building the Digital Infrastructure of{" "}
            <span className="text-primary">Tomorrow</span>
          </>
        }
        description="Since 2011, Q-DAS Global has been empowering organizations with intelligent, secure, and scalable ICT solutions."
        icon="userGroup"
      />
      <AboutContent />
      <ContactSection />
    </main>
  );
}
