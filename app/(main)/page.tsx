import type { Metadata } from "next";
import {
  Hero,
  Partnerships,
  Services,
  WhyChooseUs,
  Testimonials,
  FAQ,
} from "@/components/home";
import { ContactSection } from "@/components/shared/contact-section";
import { getTestimonials } from "@/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Q-DAS Global | Leading ICT Solutions in Nigeria",
  description:
    "Q-DAS Global provides innovative ICT solutions, software development, managed IT services, and infrastructure solutions for organizations across Nigeria and Africa. Empowering digital transformation since 2011.",
  keywords: [
    "ICT solutions",
    "software development",
    "managed IT services",
    "Nigeria",
    "digital transformation",
    "cloud computing",
    "AI solutions",
    "infrastructure",
  ],
  openGraph: {
    title: "Q-DAS Global | Leading ICT Solutions in Nigeria",
    description:
      "Empowering organizations through intelligent, secure, and scalable digital systems since 2011.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-DAS Global | Leading ICT Solutions in Nigeria",
    description:
      "Empowering organizations through intelligent, secure, and scalable digital systems since 2011.",
  },
};

export default async function Home() {
  const testimonials = await getTestimonials(); // Fetch data from sanity

  return (
    <main className="flex-1">
      <Hero />
      <Partnerships />
      <Services />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <FAQ />
      <ContactSection />
    </main>
  );
}
