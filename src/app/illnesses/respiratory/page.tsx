import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getIllnessesByCategory } from '@/data/illnesses';

export const metadata: Metadata = {
  title: 'Respiratory Illnesses in Babies',
  description: 'Complete guide to respiratory illnesses in babies and toddlers including RSV, croup, bronchiolitis, pneumonia, flu, and whooping cough.',
  alternates: { canonical: '/illnesses/respiratory' },
};

export default function RespiratoryIllnessesPage() {
  const illnesses = getIllnessesByCategory('respiratory');
  const schema = getCollectionPageSchema({
    name: 'Respiratory Illnesses in Babies',
    description: 'Guide to respiratory illnesses in babies and toddlers.',
    path: '/illnesses/respiratory',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Illnesses', url: '/illnesses' },
    { name: 'Respiratory' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[
        { label: 'Illnesses', href: '/illnesses' },
        { label: 'Respiratory' },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Respiratory Illnesses in Babies & Toddlers</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={[
          'Respiratory illnesses are the most common reason babies visit the doctor',
          'Most are viral and resolve with supportive care (rest, fluids, nasal suctioning)',
          'RSV and bronchiolitis are most dangerous in babies under 6 months',
          'Watch for fast breathing, chest retractions, and poor feeding as signs of severity',
        ]} />

        <section className="mt-8">
          <h2>All Respiratory Illnesses</h2>
          <div className="space-y-2 mt-4">
            {illnesses.map((illness) => (
              <Link
                key={illness.slug}
                href={`/illnesses/${illness.slug}`}
                className="block rounded-lg border border-[#E8E2D9] bg-white px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">{illness.title}</span>
                <p className="text-xs text-muted mt-1 line-clamp-2">{illness.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
