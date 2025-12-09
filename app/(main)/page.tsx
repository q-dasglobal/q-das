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
