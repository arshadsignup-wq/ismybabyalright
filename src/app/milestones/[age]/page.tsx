import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CategoryTabs from "@/components/milestones/CategoryTabs";
import RedFlagList from "@/components/milestones/RedFlagList";
import AgeNavigation from "@/components/milestones/AgeNavigation";
import GentleRedirect from "@/components/shared/GentleRedirect";
import { allCheckpoints, getCheckpointById } from "@/data/milestones";

interface MilestonePageProps {
  params: Promise<{ age: string }>;
}

export async function generateStaticParams() {
  return allCheckpoints.map((checkpoint) => ({
    age: checkpoint.id,
  }));
}

export async function generateMetadata({
  params,
}: MilestonePageProps): Promise<Metadata> {
  const { age } = await params;
  const checkpoint = getCheckpointById(age);

  if (!checkpoint) {
    return { title: "Milestone Not Found" };
  }

  return {
    title: `${checkpoint.label} Milestones`,
    description: `Developmental milestones for ${checkpoint.label}: gross motor, fine motor, language, social-emotional, and cognitive skills. Evidence-based guidance from CDC, WHO, and AAP.`,
  };
}

export default async function MilestoneAgePage({ params }: MilestonePageProps) {
  const { age } = await params;
  const checkpoint = getCheckpointById(age);

  if (!checkpoint) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${checkpoint.label} Milestones`,
    description: `Developmental milestones for ${checkpoint.label}: gross motor, fine motor, language, social-emotional, and cognitive skills. Evidence-based guidance from CDC, WHO, and AAP.`,
    about: {
      "@type": "MedicalCondition",
      name: "ChildDevelopment",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "parents",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Milestones", href: "/milestones" },
          { label: checkpoint.label },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>{checkpoint.label} Milestones</h1>

        {checkpoint.notes && (
          <div className="card-alt p-4 mb-8">
            <p className="text-sm text-muted leading-relaxed">
              {checkpoint.notes}
            </p>
          </div>
        )}

        <CategoryTabs categories={checkpoint.categories} />

        {checkpoint.redFlags.length > 0 && (
          <section className="mt-10" aria-labelledby="red-flags-heading">
            <h2 id="red-flags-heading" className="text-concern">
              When to Talk to Your Doctor
            </h2>
            <RedFlagList redFlags={checkpoint.redFlags} />
          </section>
        )}

        <div className="mt-10">
          <AgeNavigation currentId={checkpoint.id} />
        </div>

        <GentleRedirect />
      </div>
    </div>
  );
}
