import { getTeamMembers, getTeamMember } from "@/lib/sanity/fetch";
import { ContactSection } from "@/components/shared/contact-section";
import { TeamMemberContent } from "@/components/team/team-member-content";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: Revalidate every hour (team changes infrequently)
export const revalidate = 3600;

export async function generateStaticParams() {
  const members = await getTeamMembers();
  // Filter out members without valid slugs (e.g., legacy data without slug field)
  return members
    .filter((member) => member.slug && typeof member.slug === "string")
    .map((member) => ({
      slug: member.slug,
    }));
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
      description: "The requested team member could not be found.",
    };
  }

  return {
    title: `${member.name} - ${member.role}`,
    description:
      member.shortBio ||
      `Learn more about ${member.name}, ${member.role} at Q-DAS Global.`,
    openGraph: {
      title: `${member.name} - ${member.role}`,
      description:
        member.shortBio ||
        `Learn more about ${member.name}, ${member.role} at Q-DAS Global.`,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const allMembers = await getTeamMembers();
  const otherMembers = allMembers
    .filter((m) => m.slug !== member.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <Link
            href="/team"
            className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
        </div>
      </div>

      <TeamMemberContent member={member} otherMembers={otherMembers} />

      <ContactSection />
    </main>
  );
}
