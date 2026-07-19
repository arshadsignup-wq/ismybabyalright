import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getContentPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import { pregnancyWeeks, trimesterGuides } from '@/data/pregnancy-weeks';

interface Props {
  params: Promise<{ slug: string }>;
}

const allSlugs = [
  ...pregnancyWeeks.map((w) => w.slug),
  ...trimesterGuides.map((t) => t.slug),
];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const weekData = pregnancyWeeks.find((w) => w.slug === slug);
  const trimesterData = trimesterGuides.find((t) => t.slug === slug);
  const data = weekData || trimesterData;
  if (!data) return { title: 'Not Found' };

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/pregnancy/${slug}` },
  };
}

export default async function PregnancyPage({ params }: Props) {
  const { slug } = await params;
  const weekData = pregnancyWeeks.find((w) => w.slug === slug);
  const trimesterData = trimesterGuides.find((t) => t.slug === slug);

  if (!weekData && !trimesterData) notFound();

  const schema = getContentPageSchema({
    name: (weekData || trimesterData)!.title,
    description: (weekData || trimesterData)!.description,
    path: `/pregnancy/${slug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pregnancy', url: '/pregnancy' },
    { name: (weekData || trimesterData)!.title },
  ]);

  if (trimesterData) {
    return (
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <Breadcrumbs items={[
          { label: 'Pregnancy', href: '/pregnancy' },
          { label: trimesterData.title },
        ]} />

        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <h1>{trimesterData.title}</h1>
          <div className="mt-2 mb-2">
            <MedicalReviewAttribution sources={['ACOG', 'AAP']} />
          </div>
          <div className="mb-4">
            <LastReviewed date="2026-07-01" />
          </div>
          <p className="text-sm text-muted leading-relaxed mb-6">{trimesterData.overview}</p>

          {trimesterData.babyDevelopment.length > 0 && (
            <section className="mt-8">
              <h2>Baby Development</h2>
              <ul className="list-disc list-inside space-y-1 mt-3">
                {trimesterData.babyDevelopment.map((item, i) => (
                  <li key={i} className="text-sm text-muted">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {trimesterData.whenToCallDoctor.length > 0 && (
            <section className="mt-8">
              <h2>When to Call Your Doctor</h2>
              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 mt-3">
                <ul className="list-disc list-inside space-y-1">
                  {trimesterData.whenToCallDoctor.map((item, i) => (
                    <li key={i} className="text-sm text-orange-700">{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <div className="mt-6">
            <EditorialTrustBanner variant="compact" />
          </div>
          <BottomLine summary={`The ${trimesterData.slug.replace('-', ' ')} brings many changes. Talk to your healthcare provider about any concerns.`} />
        </div>
      </article>
    );
  }

  // Week page
  const week = weekData!;
  const weekIndex = pregnancyWeeks.findIndex((w) => w.slug === slug);
  const prevWeek = weekIndex > 0 ? pregnancyWeeks[weekIndex - 1] : null;
  const nextWeek = weekIndex < pregnancyWeeks.length - 1 ? pregnancyWeeks[weekIndex + 1] : null;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[
        { label: 'Pregnancy', href: '/pregnancy' },
        { label: `Week ${week.week}` },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <span className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4 bg-purple-50 text-purple-700">
          Trimester {week.trimester}
        </span>

        <h1>{week.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['ACOG', 'AAP']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{week.description}</p>

        {week.babySize && (
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 mb-6">
            <p className="text-sm font-bold text-purple-800">Baby size: {week.babySize}</p>
          </div>
        )}

        {week.babyDevelopment.length > 0 && (
          <section className="mt-8">
            <h2>Baby Development</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {week.babyDevelopment.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {week.motherChanges.length > 0 && (
          <section className="mt-8">
            <h2>Your Body This Week</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {week.motherChanges.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {week.symptoms.length > 0 && (
          <section className="mt-8">
            <h2>Common Symptoms</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {week.symptoms.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {week.tips.length > 0 && (
          <section className="mt-8">
            <h2>Tips</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {week.tips.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {week.whenToCallDoctor.length > 0 && (
          <section className="mt-8">
            <h2>When to Call Your Doctor</h2>
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 mt-3">
              <ul className="list-disc list-inside space-y-1">
                {week.whenToCallDoctor.map((item, i) => (
                  <li key={i} className="text-sm text-orange-700">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <nav className="mt-10 flex justify-between items-center border-t border-[#E8E2D9] pt-4">
          {prevWeek ? (
            <Link href={`/pregnancy/${prevWeek.slug}`} className="text-sm text-primary hover:underline">
              ← Week {prevWeek.week}
            </Link>
          ) : <span />}
          {nextWeek ? (
            <Link href={`/pregnancy/${nextWeek.slug}`} className="text-sm text-primary hover:underline">
              Week {nextWeek.week} →
            </Link>
          ) : <span />}
        </nav>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine summary={`At week ${week.week}, your baby is developing rapidly. Every pregnancy is different — these are general guidelines.`} />
      </div>
    </article>
  );
}
