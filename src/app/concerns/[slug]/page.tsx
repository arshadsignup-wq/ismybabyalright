import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
import ShareButtons from "@/components/shared/ShareButtons";
import FeedbackWidget from "@/components/shared/FeedbackWidget";
import { getQuotesForTopic } from "@/data/authoritative-quotes";
import { allConcerns, getConcernBySlug } from "@/data/concerns";
import { getConcernMeta, getFAQSchema, getMedicalWebPageSchema, getBreadcrumbSchema } from "@/lib/seo";
import { generateConcernFAQ } from "@/lib/concern-faq";
import { getInternalLinks } from "@/lib/concern-links";
import { getReviewerForConcern } from "@/data/editorial";
import {
  generateParentNarrative,
  generateRedFlagsComparison,
  generateDoctorTalkingPoints,
  generateRelatedConditions,
  getReviewDate,
} from "@/lib/concern-content";
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

const categoryIntros: Record<ConcernCategory, string> = {
  medical: "If your baby has been diagnosed with or you suspect",
  physical: "Your baby's physical development is unique, and concerns about",
  communication: "Speech and communication milestones vary widely, and worries about",
  feeding: "Feeding challenges are one of the most common concerns new parents face. When it comes to",
  sleep: "Sleep concerns affect nearly every family at some point. When it comes to",
  skin: "Baby skin is sensitive and changes frequently. If you are noticing",
  digestive: "Digestive issues are common in infants and toddlers. If your baby is experiencing",
  behavior: "Behavioral development varies greatly from child to child. If you have noticed",
  maternal: "Your health matters just as much as your baby's. If you are dealing with",
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

  const reviewer = getReviewerForConcern(concern.category);
  const reviewDate = concern.lastReviewed ?? getReviewDate(concern.slug);
  const faqItems = generateConcernFAQ(concern);
  const faqSchema = getFAQSchema(concern);
  const medicalSchema = getMedicalWebPageSchema(concern, `/concerns/${slug}`, reviewDate, reviewer);
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

  // Content expansion data
  const parentNarrative = generateParentNarrative(concern);
  const redFlagsComparison = generateRedFlagsComparison(concern);
  const doctorTalkingPoints = generateDoctorTalkingPoints(concern);
  const relatedConditions = generateRelatedConditions(concern);

  // Category-specific intro
  const categoryIntro = categoryIntros[concern.category];
  const introSentence = concern.category === 'medical'
    ? `${categoryIntro} ${topic}, here is what the evidence says.`
    : concern.category === 'feeding' || concern.category === 'sleep'
    ? `${categoryIntro} ${topic}, here is what the guidelines recommend.`
    : `${categoryIntro} ${topic}, here is what you need to know.`;

  // Determine section ordering based on category
  const isEmergencyForward = concern.category === 'medical' && concern.whenToActNow.length >= 3;

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
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-bold"
            style={{
              backgroundColor: `${color}15`,
              color: color,
            }}
          >
            {categoryLabels[concern.category]}
          </span>
          {concern.popular && (
            <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Frequently searched
            </span>
          )}
        </div>

        <h1>{concern.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution
            sources={concern.sources.map(s => s.org)}
            reviewer={reviewer}
          />
        </div>

        <div className="mb-4">
          <LastReviewed date={reviewDate} />
        </div>

        {/* Category-specific intro sentence */}
        <p className="text-sm text-muted leading-relaxed mb-4">
          {introSentence}
        </p>

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

        {/* "What Parents Should Know" — narrative expansion */}
        <section className="mt-10" aria-labelledby="parent-narrative-heading">
          <h2 id="parent-narrative-heading">What Parents Should Know</h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 text-sm text-muted leading-relaxed">
            <p>{parentNarrative}</p>
          </div>
        </section>

        {/* "Normal vs. Concerning" comparison table */}
        {redFlagsComparison.length > 0 && (
          <section className="mt-10" aria-labelledby="normal-vs-concerning-heading">
            <h2 id="normal-vs-concerning-heading">Normal vs. Concerning</h2>
            <div className="rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-wider">
                <div className="px-4 py-3 bg-green-50 text-green-800">Usually Normal</div>
                <div className="px-4 py-3 bg-red-50 text-red-800">Worth Discussing</div>
              </div>
              {redFlagsComparison.map((item, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-[#E8E2D9]">
                  <div className="px-4 py-3 text-sm text-muted">{item.normal}</div>
                  <div className="px-4 py-3 text-sm text-muted">{item.redFlag}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Emergency-forward layout for medical concerns with many whenToActNow items */}
        {isEmergencyForward && (
          <section className="mt-10" aria-labelledby="emergency-callout-heading">
            <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5">
              <h2 id="emergency-callout-heading" className="text-base font-bold text-red-800 mb-3">
                When to Seek Immediate Care
              </h2>
              <ul className="space-y-2">
                {concern.whenToActNow.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                    <span className="mt-0.5 flex-shrink-0 text-red-500" aria-hidden="true">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="mt-10" aria-labelledby="age-breakdown-heading">
          <h2 id="age-breakdown-heading">By Age</h2>
          <AgeBreakdown byAge={concern.byAge} />
        </section>

        {/* "What to Tell Your Pediatrician" */}
        <section className="mt-10" aria-labelledby="doctor-talking-points-heading">
          <h2 id="doctor-talking-points-heading">What to Tell Your Pediatrician</h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2">
              {doctorTalkingPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="action-tiers-heading">
          <h2 id="action-tiers-heading">What Should You Do?</h2>
          <ActionTiers
            whenNormal={concern.whenNormal}
            whenToMention={concern.whenToMention}
            whenToActNow={concern.whenToActNow}
          />
        </section>

        {/* Related Conditions */}
        {relatedConditions.length > 0 && (
          <section className="mt-10" aria-labelledby="related-conditions-heading">
            <h2 id="related-conditions-heading">Related Conditions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedConditions.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/concerns/${condition.slug}`}
                  className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
                >
                  <p className="font-semibold text-sm text-foreground">{condition.title}</p>
                  {condition.howItDiffers && (
                    <p className="text-xs text-muted mt-1 line-clamp-2">{condition.howItDiffers}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

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
            {concern.sources.length >= 4 && (
              <p className="mt-3 text-xs text-muted">
                This page references {concern.sources.length} published clinical sources. All citations link directly to the original guideline or publication.
              </p>
            )}
          </section>
        )}

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <InternalLinks links={getInternalLinks(concern)} />

        <BottomLine summary={bottomLineSummary} />

        <div className="mt-6">
          <ShareButtons url={`/concerns/${slug}`} title={concern.title} />
        </div>

        <div className="mt-6">
          <FeedbackWidget slug={concern.slug} />
        </div>

        <RelatedConcerns
          currentSlug={concern.slug}
          category={concern.category}
          curatedSlugs={concern.relatedConcernSlugs}
        />
      </div>
    </article>
  );
}
