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
import { postpartumWeeks } from '@/data/postpartum-weeks';

interface Props {
  params: Promise<{ week: string }>;
}

export async function generateStaticParams() {
  return postpartumWeeks.map((w) => ({ week: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { week: weekSlug } = await params;
  const weekData = postpartumWeeks.find((w) => w.slug === weekSlug);
  if (!weekData) return { title: 'Not Found' };

  return {
    title: weekData.title,
    description: weekData.description,
    alternates: { canonical: `/postpartum/${weekSlug}` },
  };
}

export default async function PostpartumWeekPage({ params }: Props) {
  const { week: weekSlug } = await params;
  const weekData = postpartumWeeks.find((w) => w.slug === weekSlug);
  if (!weekData) notFound();

  const prevWeek = postpartumWeeks.find((w) => w.week === weekData.week - 1);
  const nextWeek = postpartumWeeks.find((w) => w.week === weekData.week + 1);

  const schema = getContentPageSchema({
    name: weekData.title,
    description: weekData.description,
    path: `/postpartum/${weekSlug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Postpartum', url: '/postpartum' },
    { name: `Week ${weekData.week}` },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[
        { label: 'Postpartum', href: '/postpartum' },
        { label: `Week ${weekData.week}` },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{weekData.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['ACOG', 'AAP']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{weekData.description}</p>

        {weekData.physicalRecovery.length > 0 && (
          <section className="mt-8">
            <h2>Physical Recovery</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.physicalRecovery.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.emotionalChanges.length > 0 && (
          <section className="mt-8">
            <h2>Emotional Changes</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.emotionalChanges.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.selfCare.length > 0 && (
          <section className="mt-8">
            <h2>Self-Care Tips</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {weekData.selfCare.map((item, i) => (
                <li key={i} className="text-sm text-muted">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {weekData.whenToCallDoctor.length > 0 && (
          <section className="mt-8">
            <h2>When to Call Your Doctor</h2>
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 mt-3">
              <ul className="list-disc list-inside space-y-1">
                {weekData.whenToCallDoctor.map((item, i) => (
                  <li key={i} className="text-sm text-orange-700">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <nav className="mt-10 flex justify-between items-center border-t border-[#E8E2D9] pt-4">
          {prevWeek ? (
            <Link href={`/postpartum/${prevWeek.slug}`} className="text-sm text-primary hover:underline">
              ← Week {prevWeek.week}
            </Link>
          ) : <span />}
          {nextWeek ? (
            <Link href={`/postpartum/${nextWeek.slug}`} className="text-sm text-primary hover:underline">
              Week {nextWeek.week} →
            </Link>
          ) : <span />}
        </nav>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine summary={`Postpartum recovery takes time. Be patient with yourself — your body just did something extraordinary.`} />
      </div>
    </article>
  );
}
