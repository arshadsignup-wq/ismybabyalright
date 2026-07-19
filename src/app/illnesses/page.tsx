import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import { allIllnesses } from '@/data/illnesses';

export const metadata: Metadata = {
  title: 'Common Childhood Illnesses A-Z',
  description: 'Complete guide to common illnesses in babies and toddlers. Learn symptoms, treatment, when to worry, and when to call the doctor for RSV, croup, ear infections, and more.',
  alternates: { canonical: '/illnesses' },
};

const categories = [
  { id: 'respiratory', label: 'Respiratory', icon: '\u{1FAC1}', href: '/illnesses/respiratory' },
  { id: 'gastrointestinal', label: 'Stomach & GI', icon: '\u{1F922}', href: '/illnesses/gastrointestinal' },
  { id: 'skin', label: 'Skin Infections', icon: '\u{1F534}', href: '/illnesses/skin-infections' },
  { id: 'ear-nose-throat', label: 'Ear, Nose & Throat', icon: '\u{1F442}', href: '/illnesses/ear-nose-throat' },
  { id: 'viral-rash', label: 'Viral Rash Illnesses', icon: '\u{1F321}\uFE0F', href: '/illnesses/viral-rash' },
  { id: 'chronic', label: 'Chronic Conditions', icon: '\u{1F504}', href: '/illnesses/chronic' },
  { id: 'serious', label: 'Serious & Rare', icon: '\u{1F3E5}', href: '/illnesses/serious' },
];

export default function IllnessesHubPage() {
  const schema = getCollectionPageSchema({
    name: 'Common Childhood Illnesses A-Z',
    description: 'Complete guide to common illnesses in babies and toddlers.',
    path: '/illnesses',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Illnesses' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ label: 'Illnesses' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Common Childhood Illnesses A-Z</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'CDC', 'WHO']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={[
          'Most childhood illnesses are viral and resolve on their own with supportive care',
          'Knowing the difference between viral and bacterial infections helps you understand when antibiotics are needed',
          'Young babies under 3 months need urgent evaluation for any fever',
          'This guide covers symptoms, treatment, and when to call the doctor for each illness',
        ]} />

        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">Browse by Category</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="flex items-center gap-3 rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors"
              >
                <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                <span className="font-semibold text-sm">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold mb-4">All Illnesses</h2>
          <div className="space-y-2">
            {allIllnesses.map((illness) => (
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
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </article>
  );
}
