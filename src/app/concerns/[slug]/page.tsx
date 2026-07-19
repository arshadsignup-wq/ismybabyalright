import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import QuickAnswer from "@/components/concerns/QuickAnswer";
import AgeBreakdown from "@/components/concerns/AgeBreakdown";
import ActionTiers from "@/components/concerns/ActionTiers";
import RelatedConcerns from "@/components/concerns/RelatedConcerns";
import InternalLinks from "@/components/concerns/InternalLinks";
import ReassuranceBanner from "@/components/concerns/ReassuranceBanner";
import SelfReferralBox from "@/components/shared/SelfReferralBox";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import SourceBadge from "@/components/shared/SourceBadge";
import AuthoritativeQuote from "@/components/shared/AuthoritativeQuote";
import { getQuotesForTopic } from "@/data/authoritative-quotes";
import { allConcerns, getConcernBySlug } from "@/data/concerns";
import { getConcernMeta, getFAQSchema, getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/seo";
import { generateConcernFAQ } from "@/lib/concern-faq";
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
  maternal: "#E879A0",
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
  maternal: "Maternal Health",
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

  const faqItems = generateConcernFAQ(concern);
  const faqSchema = getFAQSchema(concern);
  const medicalSchema = getMedicalWebPageSchema(concern, `/concerns/${slug}`);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Concerns", url: "/concerns" },
    { name: concern.title },
  ]);

  const color = categoryColors[concern.category];

  // Auto-generate key takeaways from existing data
  const takeaways: string[] = [concern.quickAnswer];
  if (concern.whenNormal.length > 0) {
    takeaways.push(`Usually normal when: ${concern.whenNormal[0]}`);
  }
  if (concern.whenToActNow.length > 0) {
    takeaways.push(`Call your doctor if: ${concern.whenToActNow[0]}`);
  }
  if (concern.byAge.length > 2) {
    takeaways.push('Varies by age — see the age-by-age breakdown below');
  }

  // Auto-generate bottom line summary
  const topic = concern.title.toLowerCase().replace(/^my baby('s)?\s+/i, '').replace(/\?$/, '');
  const bottomLineSummary = `Most cases of ${topic} are normal.${concern.whenToActNow.length > 0 ? ` Talk to your pediatrician if ${concern.whenToActNow[0].toLowerCase().replace(/\.$/, '')}.` : ''}`;

  const topicQuotes = getQuotesForTopic(concern.slug).length > 0
    ? getQuotesForTopic(concern.slug)
    : getQuotesForTopic(concern.category);

  return (
    <article>
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

      <div className="concern-content mx-auto max-w-3xl px-4 py-8 sm:px-6">
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

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution
            sources={concern.sources.map(s => s.org)}
          />
        </div>

        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <QuickAnswer answer={concern.quickAnswer} />

        <div className="mt-4">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {topicQuotes.length > 0 && (
          <AuthoritativeQuote
            quote={topicQuotes[0].quote}
            source={topicQuotes[0].source}
            sourceUrl={topicQuotes[0].sourceUrl}
            organization={topicQuotes[0].organization}
          />
        )}

        <ReassuranceBanner slug={concern.slug} popular={concern.popular} />

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

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

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

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <InternalLinks links={getInternalLinks(concern)} />

        <BottomLine summary={bottomLineSummary} />

        <RelatedConcerns
          currentSlug={concern.slug}
          category={concern.category}
          curatedSlugs={concern.relatedConcernSlugs}
        />
      </div>
    </article>
  );
}
