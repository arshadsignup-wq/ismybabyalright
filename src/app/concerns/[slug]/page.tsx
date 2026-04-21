import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import QuickAnswer from "@/components/concerns/QuickAnswer";
import AgeBreakdown from "@/components/concerns/AgeBreakdown";
import ActionTiers from "@/components/concerns/ActionTiers";
import SelfReferralBox from "@/components/shared/SelfReferralBox";
import SourceBadge from "@/components/shared/SourceBadge";
import { allConcerns, getConcernBySlug } from "@/data/concerns";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allConcerns.map((concern) => ({
    slug: concern.slug,
  }));
}

export async function generateMetadata({
  params,
}: ConcernPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    return { title: "Concern Not Found" };
  }

  return {
    title: concern.title,
    description: concern.quickAnswer,
  };
}

export default async function ConcernSlugPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: concern.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: concern.quickAnswer,
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Concerns", href: "/concerns" },
          { label: concern.title },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{concern.title}</h1>

        <QuickAnswer answer={concern.quickAnswer} />

        <section className="mt-10" aria-labelledby="age-breakdown-heading">
          <h2 id="age-breakdown-heading">By Age</h2>
          <AgeBreakdown byAge={concern.byAge} />
        </section>

        <section className="mt-10" aria-labelledby="action-tiers-heading">
          <h2 id="action-tiers-heading">What Should You Do?</h2>
          <ActionTiers
            whenNormal={concern.whenNormal}
            whenToMention={concern.whenToMention}
            whenToActNow={concern.whenToActNow}
          />
        </section>

        {concern.showSelfReferral && (
          <div className="mt-10">
            <SelfReferralBox showPhone />
          </div>
        )}

        {concern.sources.length > 0 && (
          <section className="mt-10" aria-labelledby="sources-heading">
            <h3 id="sources-heading" className="text-sm font-semibold text-muted mb-3">
              Sources
            </h3>
            <div className="flex flex-wrap gap-2">
              {concern.sources.map((source, index) => (
                <SourceBadge key={index} org={source.org} url={source.url} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
