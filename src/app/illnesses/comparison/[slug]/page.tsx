import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import SourceBadge from '@/components/shared/SourceBadge';
import ComparisonTable from '@/components/shared/ComparisonTable';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';
import { allIllnessComparisons, getIllnessComparisonBySlug } from '@/data/illnesses';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allIllnessComparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getIllnessComparisonBySlug(slug);
  if (!comparison) return { title: 'Not Found' };

  return {
    title: comparison.title,
    description: comparison.description,
    alternates: { canonical: `/illnesses/comparison/${slug}` },
  };
}

export default async function IllnessComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getIllnessComparisonBySlug(slug);
  if (!comparison) notFound();

  const faqItems = [
    { question: `What is the main difference between ${comparison.conditionA.name} and ${comparison.conditionB.name}?`, answer: comparison.keyDifferences[0] || comparison.description },
    { question: `How can I tell if my baby has ${comparison.conditionA.name} or ${comparison.conditionB.name}?`, answer: comparison.keyDifferences.slice(0, 3).join('. ') },
    { question: 'When should I worry?', answer: comparison.whenToWorry.join('. ') },
  ];

  const schema = getContentPageSchema({
    name: comparison.title,
    description: comparison.description,
    path: `/illnesses/comparison/${slug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Illnesses', url: '/illnesses' },
    { name: comparison.title },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Illnesses', href: '/illnesses' },
        { label: comparison.title },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{comparison.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={comparison.sources.map(s => s.org)} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{comparison.description}</p>

        <KeyTakeaways takeaways={comparison.keyDifferences.slice(0, 4)} />

        <ComparisonTable
          caption={`${comparison.conditionA.name} vs ${comparison.conditionB.name}`}
          headers={['', comparison.conditionA.name, comparison.conditionB.name]}
          rows={comparison.comparisonPoints.map((point) => [point.category, point.conditionA, point.conditionB])}
        />

        <section className="mt-8">
          <h2>When to Worry</h2>
          <ul className="list-disc list-inside space-y-1 mt-3">
            {comparison.whenToWorry.map((item, i) => (
              <li key={i} className="text-sm text-muted">{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex gap-3">
          {comparison.conditionA.illnessSlug && (
            <Link href={`/illnesses/${comparison.conditionA.illnessSlug}`} className="inline-block rounded-full border border-[#E8E2D9] px-4 py-2 text-sm text-primary hover:bg-card-alt transition-colors">
              Learn more about {comparison.conditionA.name}
            </Link>
          )}
          {comparison.conditionB.illnessSlug && (
            <Link href={`/illnesses/${comparison.conditionB.illnessSlug}`} className="inline-block rounded-full border border-[#E8E2D9] px-4 py-2 text-sm text-primary hover:bg-card-alt transition-colors">
              Learn more about {comparison.conditionB.name}
            </Link>
          )}
        </div>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <section className="mt-10">
          <h3 className="text-sm font-semibold text-muted mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {comparison.sources.map((source, i) => (
              <SourceBadge key={i} org={source.org} url={source.url} />
            ))}
          </div>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        <BottomLine summary={`Both ${comparison.conditionA.name} and ${comparison.conditionB.name} are common in young children. The key differences in symptoms can help you identify what your child may have, but when in doubt, consult your pediatrician.`} />
      </div>
    </article>
  );
}
