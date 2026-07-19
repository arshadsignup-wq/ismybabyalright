import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby Growth Guide',
  description: 'Complete guide to baby growth — weight, height, head circumference, growth charts, percentiles, and when to worry about growth concerns.',
  alternates: { canonical: '/growth' },
};

const sections = [
  { label: 'Growth Charts', href: '/growth/charts', description: 'How to read and interpret baby growth charts' },
  { label: 'Percentiles', href: '/growth/percentiles', description: 'What percentiles mean (and don\'t mean)' },
  { label: 'Weight', href: '/growth/weight', description: 'Weight gain guide by age, from birth to 24 months' },
  { label: 'Height', href: '/growth/height', description: 'Length/height tracking and normal growth rates' },
  { label: 'Head Circumference', href: '/growth/head-circumference', description: 'Head circumference, brain growth, and what to watch for' },
  { label: 'Failure to Thrive', href: '/growth/failure-to-thrive', description: 'Signs, causes, and treatment of growth faltering' },
  { label: 'Premature Growth', href: '/growth/premature', description: 'Catch-up growth, adjusted age, and preemie nutrition' },
  { label: 'Newborn Weight Loss', href: '/growth/newborn-weight-loss', description: 'Normal weight loss after birth and regain timeline' },
  { label: 'WHO vs CDC Charts', href: '/growth/who-vs-cdc', description: 'Which growth chart to use and why they differ' },
  { label: 'Breastfed vs Formula', href: '/growth/breastfed-vs-formula', description: 'How feeding method affects growth patterns' },
  { label: 'Slow Weight Gain', href: '/growth/slow-weight-gain', description: 'Causes of slow gain and strategies to help' },
  { label: 'Crossing Percentiles', href: '/growth/crossing-percentiles', description: 'When crossing percentile lines is concerning' },
  { label: 'Nutrition for Growth', href: '/growth/nutrition', description: 'Calorie needs, vitamins, and minerals for healthy growth' },
];

export default function GrowthHubPage() {
  const schema = getCollectionPageSchema({
    name: 'Baby Growth Guide',
    description: 'Complete guide to baby growth.',
    path: '/growth',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ label: 'Growth' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Baby Growth Guide</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['WHO', 'CDC', 'AAP']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={[
          'Healthy babies come in all shapes and sizes — percentiles are about tracking trends, not hitting a number',
          'A single measurement means less than the overall growth pattern over time',
          'Crossing two or more percentile lines (up or down) warrants discussion with your pediatrician',
          'Breastfed and formula-fed babies have different growth patterns — both are normal',
        ]} />

        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">Growth Topics</h2>
          <div className="space-y-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors"
              >
                <span className="font-semibold text-sm text-foreground">{section.label}</span>
                <p className="text-xs text-muted mt-0.5">{section.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold mb-4">Growth Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/tools/growth" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors">
              <span className="font-semibold text-sm">Growth Chart Tracker</span>
            </Link>
            <Link href="/tools/weight-for-length" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors">
              <span className="font-semibold text-sm">Weight-for-Length</span>
            </Link>
            <Link href="/tools/height-predictor" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors">
              <span className="font-semibold text-sm">Height Predictor</span>
            </Link>
            <Link href="/tools/bmi" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors">
              <span className="font-semibold text-sm">BMI Calculator</span>
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </article>
  );
}
