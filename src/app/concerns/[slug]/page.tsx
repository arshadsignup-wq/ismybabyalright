import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import QuickAnswer from "@/components/concerns/QuickAnswer";
import AgeBreakdown from "@/components/concerns/AgeBreakdown";
import ActionTiers from "@/components/concerns/ActionTiers";
import RelatedConcerns from "@/components/concerns/RelatedConcerns";
import InternalLinks from "@/components/concerns/InternalLinks";
import SelfReferralBox from "@/components/shared/SelfReferralBox";
import SourceBadge from "@/components/shared/SourceBadge";
import { allConcerns, getConcernBySlug } from "@/data/concerns";
import { getConcernMeta, getFAQSchema, getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/seo";
import { getInternalLinks } from "@/lib/concern-links";
import type { ConcernCategory } from "@/data/concerns/types";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

const categoryColors: Record<ConcernCategory, string> = {
  physical: "#38BDF8",
  communication: "#A78BFA",
  feeding: "#F4A261",
  sleep: "#818CF8",
  skin: "#F472B6",
  digestive: "#34D399",
  behavior: "#FBBF24",
  medical: "#F07167",
};

const categoryLabels: Record<ConcernCategory, string> = {
  physical: "Physical Development",
  communication: "Speech & Communication",
  feeding: "Feeding & Eating",
  sleep: "Sleep",
  skin: "Skin & Rashes",
  digestive: "Digestive",
  behavior: "Behavior & Social",
  medical: "Medical Conditions",
};

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

  const meta = getConcernMeta(concern);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/concerns/${slug}`,
    },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ConcernSlugPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  const faqSchema = getFAQSchema(concern);
  const medicalSchema = getMedicalWebPageSchema(concern, `/concerns/${slug}`);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Concerns", url: "/concerns" },
    { name: concern.title },
  ]);

  const color = categoryColors[concern.category];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Concerns", href: "/concerns" },
          { label: concern.title },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Category badge */}
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4"
          style={{
            backgroundColor: `${color}15`,
            color: color,
          }}
        >
          {categoryLabels[concern.category]}
        </span>

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

        <InternalLinks links={getInternalLinks(concern)} />

        <RelatedConcerns
          currentSlug={concern.slug}
          category={concern.category}
          curatedSlugs={concern.relatedConcernSlugs}
        />
      </div>
    </div>
  );
}
