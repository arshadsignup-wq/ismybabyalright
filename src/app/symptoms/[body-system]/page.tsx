import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import { getSymptomsByBodySystem } from '@/data/symptoms';
import { bodySystemLabels, bodySystemDescriptions } from '@/data/symptoms/types';
import type { BodySystem } from '@/data/symptoms/types';

interface Props {
  params: Promise<{ 'body-system': string }>;
}

const validSystems: BodySystem[] = ['head', 'eyes', 'ears', 'nose', 'mouth-throat', 'chest-breathing', 'abdomen', 'skin', 'limbs-joints', 'genitourinary', 'fever-general', 'neurological'];

export async function generateStaticParams() {
  return validSystems.map((system) => ({ 'body-system': system }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'body-system': system } = await params;
  if (!validSystems.includes(system as BodySystem)) return { title: 'Not Found' };
  const label = bodySystemLabels[system as BodySystem];

  return {
    title: `${label} Symptoms in Babies`,
    description: bodySystemDescriptions[system as BodySystem],
    alternates: { canonical: `/symptoms/${system}` },
  };
}

export default async function BodySystemPage({ params }: Props) {
  const { 'body-system': system } = await params;
  if (!validSystems.includes(system as BodySystem)) notFound();

  const symptoms = getSymptomsByBodySystem(system);
  const label = bodySystemLabels[system as BodySystem];
  const description = bodySystemDescriptions[system as BodySystem];

  const schema = getCollectionPageSchema({
    name: `${label} Symptoms in Babies`,
    description,
    path: `/symptoms/${system}`,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Symptoms', url: '/symptoms' },
    { name: label },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[
        { label: 'Symptoms', href: '/symptoms' },
        { label },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{label} Symptoms in Babies</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

        <section className="mt-6">
          <h2>All {label} Symptoms</h2>
          <div className="space-y-2 mt-4">
            {symptoms.map((s) => (
              <Link
                key={s.slug}
                href={`/symptoms/${system}/${s.slug}`}
                className="block rounded-lg border border-[#E8E2D9] bg-white px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">{s.title}</span>
                <p className="text-xs text-muted mt-1 line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>

          {symptoms.length === 0 && (
            <p className="text-sm text-muted italic">Symptom guides for this category are coming soon.</p>
          )}
        </section>

        <div className="mt-8">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
