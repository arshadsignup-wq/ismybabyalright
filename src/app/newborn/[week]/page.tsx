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
import { newbornWeeks } from '@/data/newborn-weeks';

interface Props {
  params: Promise<{ week: string }>;
}

export async function generateStaticParams() {
  return newbornWeeks.map((w) => ({ week: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { week: weekSlug } = await params;
  const weekData = newbornWeeks.find((w) => w.slug === weekSlug);
  if (!weekData) return { title: 'Not Found' };

  return {
    title: weekData.title,
    description: weekData.description,
    alternates: { canonical: `/newborn/${weekSlug}` },
  };
}

export default async function NewbornWeekPage({ params }: Props) {
  const { week: weekSlug } = await params;
  const weekData = newbornWeeks.find((w) => w.slug === weekSlug);
  if (!weekData) notFound();

  const prevWeek = newbornWeeks.find((w) => w.week === weekData.week - 1);
  const nextWeek = newbornWeeks.find((w) => w.week === weekData.week + 1);

  const schema = getContentPageSchema({
    name: weekData.title,
    description: weekData.description,
    path: `/newborn/${weekSlug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Newborn', url: '/newborn' },
    { name: `Week ${weekData.week}` },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[
        { label: 'Newborn', href: '/newborn' },
        { label: `Week ${weekData.week}` },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{weekData.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{weekData.description}</p>

        {weekData.whatToExpect.length > 0 && (
          <KeyTakeaways takeaways={weekData.whatToExpect} label="What to expect this week" />
        )}

        {weekData.physicalDevelopment.length > 0 && (
          <section className="mt-8">
            <h2>Physical Development</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.physicalDevelopment.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.feedingGuidance.length > 0 && (
          <section className="mt-8">
            <h2>Feeding</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.feedingGuidance.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.sleepGuidance.length > 0 && (
          <section className="mt-8">
            <h2>Sleep</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.sleepGuidance.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.whenToCallDoctor.length > 0 && (
          <section className="mt-8">
            <h2>When to Call the Doctor</h2>
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 mt-3">
              <ul className="list-disc list-inside space-y-1">
                {weekData.whenToCallDoctor.map((item, i) => (
                  <li key={i} className="text-sm text-orange-700">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {weekData.parentTips.length > 0 && (
          <section className="mt-8">
            <h2>Tips for Parents</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.parentTips.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Week navigation */}
        <nav className="mt-10 flex justify-between items-center border-t border-[#E8E2D9] pt-4">
          {prevWeek ? (
            <Link href={`/newborn/${prevWeek.slug}`} className="text-sm text-primary hover:underline">
              ← Week {prevWeek.week}
            </Link>
          ) : <span />}
          {nextWeek ? (
            <Link href={`/newborn/${nextWeek.slug}`} className="text-sm text-primary hover:underline">
              Week {nextWeek.week} →
            </Link>
          ) : <span />}
        </nav>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine summary={`Week ${weekData.week} is a time of rapid change for both you and your baby. Every baby develops at their own pace — these are general guidelines, not strict milestones.`} />
      </div>
    </article>
  );
}
