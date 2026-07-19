import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SourceBadge from "@/components/shared/SourceBadge";
import PrintButton from "@/components/shared/PrintButton";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import AuthoritativeQuote from "@/components/shared/AuthoritativeQuote";
import BottomLine from "@/components/shared/BottomLine";
import { getQuotesForTopic } from "@/data/authoritative-quotes";
import { allGuides, getGuideBySlug } from "@/data/guides";
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from "@/lib/seo";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: guide.title,
    description: guide.subtitle,
    alternates: {
      canonical: `/resources/guides/${slug}`,
    },
    openGraph: {
      title: `${guide.title} | Is My Baby Alright?`,
      description: guide.subtitle,
    },
  };
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/resources/guides" },
    { name: guide.title },
  ]);

  const contentPageSchema = getContentPageSchema({
    name: guide.title,
    description: guide.subtitle,
    path: `/resources/guides/${slug}`,
  });

  const faqItems = [
    { question: `What is ${guide.title.toLowerCase()}?`, answer: guide.whatHappened },
    { question: `What should I do about ${guide.title.toLowerCase()}?`, answer: guide.actionPlan.slice(0, 3).join('. ') + '.' },
    { question: `When should I worry about ${guide.title.toLowerCase()}?`, answer: guide.whenToWorry.slice(0, 3).join('. ') + '.' },
  ];

  const faqSchema = getFAQPageSchema(faqItems);

  const topicQuotes = getQuotesForTopic(slug);

  const topic = guide.title.toLowerCase();
  const bottomLineSummary = `${guide.whatHappened.split('.')[0]}.${guide.whenToWorry.length > 0 ? ` Talk to your pediatrician if ${guide.whenToWorry[0].toLowerCase().replace(/\.$/, '')}.` : ''}`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources/mental-health" },
          { label: "Guides", href: "/resources/guides" },
          { label: guide.title },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1>{guide.title}</h1>
          <PrintButton />
        </div>
        <p className="text-lg text-muted mb-4">{guide.subtitle}</p>

        <div className="mb-8">
          <MedicalReviewAttribution
            sources={guide.sources.map(s => s.org)}
          />
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={guide.keyFacts} />

        {topicQuotes.length > 0 && (
          <AuthoritativeQuote
            quote={topicQuotes[0].quote}
            source={topicQuotes[0].source}
            sourceUrl={topicQuotes[0].sourceUrl}
            organization={topicQuotes[0].organization}
          />
        )}

        {/* What Happened */}
        <section className="mb-8" aria-labelledby="what-happened-heading">
          <h2 id="what-happened-heading">What Happened</h2>
          <div className="card p-6">
            <p className="text-sm text-muted leading-relaxed">
              {guide.whatHappened}
            </p>
          </div>
        </section>

        {/* Key Facts */}
        <section className="mb-8" aria-labelledby="key-facts-heading">
          <h2 id="key-facts-heading">Key Facts</h2>
          <ul className="flex flex-col gap-3" role="list">
            {guide.keyFacts.map((fact, index) => (
              <li
                key={index}
                className="card-alt p-4 flex items-start gap-3"
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* What to Expect */}
        <section className="mb-8" aria-labelledby="what-to-expect-heading">
          <h2 id="what-to-expect-heading">What to Expect</h2>
          <div className="card p-6">
            <ul className="flex flex-col gap-3" role="list">
              {guide.whatToExpect.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When to Worry */}
        <section className="mb-8" aria-labelledby="when-to-worry-heading">
          <h2 id="when-to-worry-heading" className="text-concern">
            When to Worry
          </h2>
          <div className="tier-concern p-6">
            <ul className="flex flex-col gap-3" role="list">
              {guide.whenToWorry.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-8" aria-labelledby="action-plan-heading">
          <h2 id="action-plan-heading">Your Action Plan</h2>
          <ol className="flex flex-col gap-3" role="list">
            {guide.actionPlan.map((step, index) => (
              <li
                key={index}
                className="card p-4 flex items-start gap-3"
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-safe-light text-safe-foreground text-sm font-bold flex items-center justify-center border border-safe-border"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <div className="mb-8">
          <FAQSection items={faqItems} />
        </div>

        {/* Sources */}
        {guide.sources.length > 0 && (
          <section className="mt-10" aria-labelledby="guide-sources-heading">
            <h3
              id="guide-sources-heading"
              className="text-sm font-semibold text-muted mb-3"
            >
              Sources
            </h3>
            <div className="flex flex-col gap-3">
              {guide.sources.map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <SourceBadge org={source.org} url={source.url} />
                  <p className="text-xs text-muted leading-relaxed">
                    {source.citation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <BottomLine summary={bottomLineSummary} />

        <div className="mt-8">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
