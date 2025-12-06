import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/shared/contact-section";
import { TeamContent } from "@/components/team/team-content";
import { LeadershipValues } from "@/components/team/leadership-values";
import { getTeamMembers } from "@/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Our Team | Q-DAS Global",
  description:
    "Meet our leadership team. Led by visionaries and powered by expertise, our team drives Q-DAS Global's sustainable growth and innovation in ICT solutions.",
  keywords: [
    "Q-DAS Global team",
    "leadership",
    "executive team",
    "ICT professionals",
    "Nigeria technology leaders",
  ],
  openGraph: {
    title: "Our Team | Q-DAS Global",
    description:
      "Our leadership blends expertise, passion, and vision to drive Q-DAS' sustainable growth and innovation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Q-DAS Global",
    description:
      "Our leadership blends expertise, passion, and vision to drive Q-DAS' sustainable growth and innovation.",
  },
};

// ISR: Revalidate every hour (team changes infrequently)
export const revalidate = 3600;

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <main className="flex-1">
      <PageHeader
        badge="Our Leadership"
        title={
          <>
            Led by Visionaries.{" "}
            <span className="text-primary">Powered by Expertise.</span>
          </>
        }
        description="Our leadership blends expertise, passion, and vision to drive Q-DAS' sustainable growth and innovation."
        icon="userGroup"
      />
      <TeamContent members={members} />
      <LeadershipValues />
      <ContactSection />
    </main>
  );
}
