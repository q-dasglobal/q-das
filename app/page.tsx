"use client";

import {
  Hero,
  Partnerships,
  Services,
  WhyChooseUs,
  Testimonials,
  FAQ,
  ContactSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Partnerships />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}
