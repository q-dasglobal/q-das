import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactContent } from "@/components/contact/contact-page-content";
import { FAQ } from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Q-DAS Global. We're ready to help transform your business with intelligent ICT solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        badge="Contact Us"
        title={
          <>
            Let&apos;s Build Something{" "}
            <span className="text-primary">Great</span> Together
          </>
        }
        description="Have a project in mind or need technical support? Our team is ready to assist you."
        icon="chatBubbleLeftRight"
      />
      <ContactContent />
      <FAQ />
    </main>
  );
}
