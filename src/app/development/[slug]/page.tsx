import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import AuthoritativeQuote from '@/components/shared/AuthoritativeQuote';
import { getQuotesForTopic } from '@/data/authoritative-quotes';
import { monthlyDevelopment, getMonthBySlug } from '@/data/development-months';
import { getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';

interface DevelopmentMonthPageProps {
  params: Promise<{ slug: string }>;
}

function firstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

export async function generateStaticParams() {
  return monthlyDevelopment.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: DevelopmentMonthPageProps): Promise<Metadata> {
  const { slug } = await params;
  const month = getMonthBySlug(slug);

  if (!month) return { title: 'Month Not Found' };

  return {
    title: `${month.label} Development`,
    description: `${month.label} baby development guide: physical, cognitive, and social milestones, feeding and sleep expectations, common concerns, and activities. Evidence-based guidance from CDC, WHO, and AAP.`,
    alternates: { canonical: `/development/${slug}` },
    openGraph: {
      title: `${month.label} Development | Is My Baby Alright?`,
      description: `${month.label} baby development: milestones, feeding, sleep, common concerns, and activities.`,
    },
  };
}

export default async function DevelopmentMonthPage({
  params,
}: DevelopmentMonthPageProps) {
  const { slug } = await params;
  const month = getMonthBySlug(slug);

  if (!month) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Development', url: '/development' },
    { name: month.label },
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${month.label} Baby Development`,
    url: `https://www.ismybabyalright.com/development/${slug}`,
    description: month.summary,
    about: { '@type': 'MedicalCondition', name: 'Child Development' },
    audience: { '@type': 'PeopleAudience', audienceType: 'Parents' },
    lastReviewed: '2026-07-01',
    author: {
      '@type': 'Organization',
      name: 'Is My Baby Alright?',
      url: 'https://www.ismybabyalright.com',
    },
    reviewedBy: {
      '@type': 'Organization',
      name: 'Is My Baby Alright? Editorial Team',
      url: 'https://www.ismybabyalright.com',
      description:
        'Content reviewed against published guidelines from the CDC, WHO, AAP, and ACOG.',
    },
  };

  const faqItems = [
    { question: `What should a ${month.label.toLowerCase()} be doing?`, answer: month.summary },
    { question: `How much should a ${month.label.toLowerCase()} sleep?`, answer: month.sleep },
    { question: `How much should a ${month.label.toLowerCase()} eat?`, answer: month.feeding },
    { question: `What activities help a ${month.label.toLowerCase()} develop?`, answer: month.activities.slice(0, 3).join('. ') + '.' },
  ];

  const faqSchema = getFAQPageSchema(faqItems);

  const takeaways = [
    month.physical[0],
    month.cognitive[0],
    month.social[0],
    firstSentence(month.feeding),
    firstSentence(month.sleep),
  ].filter(Boolean);

  const currentIndex = monthlyDevelopment.findIndex(
    (m) => m.slug === month.slug
  );
  const prev = currentIndex > 0 ? monthlyDevelopment[currentIndex - 1] : null;
  const next =
    currentIndex < monthlyDevelopment.length - 1
      ? monthlyDevelopment[currentIndex + 1]
      : null;

  const topicQuotes = getQuotesForTopic(slug).length > 0
    ? getQuotesForTopic(slug)
    : getQuotesForTopic('milestones');

  // Bottom line summary
  const bottomLineSummary = `Every baby develops at their own pace. The milestones listed for ${month.label.toLowerCase()} are typical ranges based on CDC and AAP guidelines. If your baby hasn't reached a milestone, it doesn't necessarily mean something is wrong — but talk to your pediatrician if you have concerns.`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-5 py-10">
        <Breadcrumbs
          items={[
            { label: 'Development', href: '/development' },
            { label: month.label },
          ]}
        />

        <h1 className="text-2xl font-bold text-foreground mb-2 mt-4">
          {month.label} Development
        </h1>

        <div className="mb-2">
          <MedicalReviewAttribution
            sources={['CDC', 'WHO', 'AAP']}
          />
        </div>
        <div className="mb-6">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-8">
          {month.summary}
        </p>

        <KeyTakeaways takeaways={takeaways} />

        {topicQuotes.length > 0 && (
          <AuthoritativeQuote
            quote={topicQuotes[0].quote}
            source={topicQuotes[0].source}
            sourceUrl={topicQuotes[0].sourceUrl}
            organization={topicQuotes[0].organization}
          />
        )}

        <div className="space-y-6">
          <Section title="Physical development">
            <ul className="list-disc list-inside space-y-1">
              {month.physical.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Cognitive development">
            <ul className="list-disc list-inside space-y-1">
              {month.cognitive.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Social & emotional">
            <ul className="list-disc list-inside space-y-1">
              {month.social.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Feeding">
            <p>{month.feeding}</p>
          </Section>

          <Section title="Sleep">
            <p>{month.sleep}</p>
          </Section>

          {month.commonConcerns.length > 0 && (
            <Section title="Common concerns at this age">
              <ul className="space-y-2">
                {month.commonConcerns.map((concern) => (
                  <li key={concern.slug}>
                    <Link
                      href={`/concerns/${concern.slug}`}
                      className="text-primary hover:underline"
                    >
                      {concern.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Activities to try">
            <ul className="list-disc list-inside space-y-1">
              {month.activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary={bottomLineSummary} />

        {/* Cross-links */}
        <div className="mt-8 flex flex-wrap gap-2">
          {month.milestoneCheckpoint && (
            <Link
              href={`/milestones/${month.milestoneCheckpoint}`}
              className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
            >
              {month.label} Milestones Checklist
            </Link>
          )}
          <Link
            href="/developmental-activities"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Play Activities
          </Link>
          <Link
            href="/doctor-visits"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Doctor Visits
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
          {prev ? (
            <Link
              href={`/development/${prev.slug}`}
              className="text-sm text-primary font-semibold hover:underline"
            >
              &larr; {prev.label}
            </Link>
          ) : (
            <Link
              href="/development"
              className="text-sm text-primary font-semibold hover:underline"
            >
              &larr; All Months
            </Link>
          )}
          {next ? (
            <Link
              href={`/development/${next.slug}`}
              className="text-sm text-primary font-semibold hover:underline"
            >
              {next.label} &rarr;
            </Link>
          ) : (
            <Link
              href="/milestones"
              className="text-sm text-primary font-semibold hover:underline"
            >
              Milestones &rarr;
            </Link>
          )}
        </div>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}
