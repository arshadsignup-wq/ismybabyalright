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
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';
import { allIllnesses, getIllnessBySlug } from '@/data/illnesses';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allIllnesses.map((illness) => ({ slug: illness.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const illness = getIllnessBySlug(slug);
  if (!illness) return { title: 'Illness Not Found' };

  return {
    title: illness.title,
    description: `${illness.description.slice(0, 150)}...`,
    alternates: { canonical: `/illnesses/${slug}` },
    openGraph: { type: 'article', title: illness.title, description: illness.description.slice(0, 150) },
  };
}

export default async function IllnessPage({ params }: Props) {
  const { slug } = await params;
  const illness = getIllnessBySlug(slug);
  if (!illness) notFound();

  const faqItems = [
    { question: `How long does ${illness.title.toLowerCase().replace(/ in babies.*/, '')} last?`, answer: illness.expectedDuration },
    { question: `How does ${illness.medicalName.toLowerCase()} spread?`, answer: illness.howItSpreads },
    { question: `When should I take my baby to the ER?`, answer: illness.whenToGoToER.join('. ') },
    { question: `Can ${illness.medicalName.toLowerCase()} be prevented?`, answer: illness.prevention.join('. ') },
    { question: `When can my child return to daycare?`, answer: illness.returnToSchoolCriteria },
  ];

  const takeaways = [
    illness.description.split('.')[0] + '.',
    `Duration: ${illness.expectedDuration}`,
    illness.whenToGoToER[0] ? `Go to ER if: ${illness.whenToGoToER[0]}` : '',
    illness.vaccineAvailable ? 'A vaccine or immunization is available' : 'No vaccine currently available',
  ].filter(Boolean);

  const schema = getContentPageSchema({
    name: illness.title,
    description: illness.description,
    path: `/illnesses/${slug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Illnesses', url: '/illnesses' },
    { name: illness.title },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="illness-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Illnesses', href: '/illnesses' },
        { label: illness.title },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <span className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4 bg-red-50 text-red-700">
          {illness.category.charAt(0).toUpperCase() + illness.category.slice(1)}
        </span>

        <h1>{illness.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={illness.sources.map(s => s.org)} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="rounded-xl bg-blue-50 border border-blue-200 px-5 py-4 mb-6">
          <p className="text-sm text-blue-900 leading-relaxed">{illness.description}</p>
        </div>

        <KeyTakeaways takeaways={takeaways} />

        {/* Symptoms */}
        <section className="mt-8">
          <h2>Symptoms</h2>
          <div className="space-y-2 mt-3">
            {illness.symptoms.map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  s.frequency === 'always' ? 'bg-red-500' :
                  s.frequency === 'common' ? 'bg-orange-400' :
                  s.frequency === 'sometimes' ? 'bg-yellow-400' : 'bg-gray-300'
                }`} />
                <span>{s.symptom}</span>
                <span className="text-xs text-muted ml-auto">{s.frequency}</span>
              </div>
            ))}
          </div>
        </section>

        {/* By Age */}
        <section className="mt-8">
          <h2>How It Presents by Age</h2>
          <div className="space-y-4 mt-3">
            {illness.byAge.map((age, i) => (
              <div key={i} className="rounded-lg border border-[#E8E2D9] bg-white p-4">
                <p className="text-sm font-bold text-foreground">{age.ageRange}</p>
                <p className="text-sm text-muted mt-1">{age.presentation}</p>
                <p className="text-xs text-muted mt-2">Risk level: <span className="font-semibold">{age.risk}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment */}
        <section className="mt-8">
          <h2>Treatment</h2>
          <div className="space-y-3 mt-3">
            {illness.treatment.map((t, i) => (
              <div key={i} className="rounded-lg border border-[#E8E2D9] bg-white p-4">
                <p className="text-sm font-bold text-foreground">{t.approach}</p>
                <p className="text-sm text-muted mt-1">{t.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Home Remedies */}
        <section className="mt-8">
          <h2>Home Care</h2>
          <ul className="list-disc list-inside space-y-1 mt-3">
            {illness.homeRemedies.map((remedy, i) => (
              <li key={i} className="text-sm text-muted">{remedy}</li>
            ))}
          </ul>
        </section>

        {/* When to Worry */}
        <section className="mt-8">
          <h2>When to Worry</h2>
          <div className="space-y-4 mt-3">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
              <p className="text-sm font-bold text-red-800 mb-2">Go to the ER if:</p>
              <ul className="list-disc list-inside space-y-1">
                {illness.whenToGoToER.map((item, i) => (
                  <li key={i} className="text-sm text-red-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
              <p className="text-sm font-bold text-orange-800 mb-2">Call your doctor if:</p>
              <ul className="list-disc list-inside space-y-1">
                {illness.whenToCallDoctor.map((item, i) => (
                  <li key={i} className="text-sm text-orange-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
              <p className="text-sm font-bold text-yellow-800 mb-2">Keep an eye on:</p>
              <ul className="list-disc list-inside space-y-1">
                {illness.whenToWorry.map((item, i) => (
                  <li key={i} className="text-sm text-yellow-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="mt-8">
          <h2>Prevention</h2>
          <ul className="list-disc list-inside space-y-1 mt-3">
            {illness.prevention.map((item, i) => (
              <li key={i} className="text-sm text-muted">{item}</li>
            ))}
          </ul>
        </section>

        {/* Contagion info */}
        <section className="mt-8">
          <h2>Contagion & Incubation</h2>
          <div className="grid gap-3 sm:grid-cols-3 mt-3">
            <div className="rounded-lg border border-[#E8E2D9] bg-white p-3 text-center">
              <p className="text-xs text-muted">Incubation</p>
              <p className="text-sm font-bold mt-1">{illness.incubationPeriod}</p>
            </div>
            <div className="rounded-lg border border-[#E8E2D9] bg-white p-3 text-center">
              <p className="text-xs text-muted">Contagious for</p>
              <p className="text-sm font-bold mt-1">{illness.contagiousPeriod}</p>
            </div>
            <div className="rounded-lg border border-[#E8E2D9] bg-white p-3 text-center">
              <p className="text-xs text-muted">Duration</p>
              <p className="text-sm font-bold mt-1">{illness.expectedDuration}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        {/* Sources */}
        {illness.sources.length > 0 && (
          <section className="mt-10">
            <h3 className="text-sm font-semibold text-muted mb-3">Sources</h3>
            <div className="flex flex-wrap gap-2">
              {illness.sources.map((source, i) => (
                <SourceBadge key={i} org={source.org} url={source.url} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Related */}
        {illness.relatedIllnessSlugs.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-semibold text-muted mb-3">Related Illnesses</h3>
            <div className="flex flex-wrap gap-2">
              {illness.relatedIllnessSlugs.map((relSlug) => (
                <Link
                  key={relSlug}
                  href={`/illnesses/${relSlug}`}
                  className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
                >
                  {relSlug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}

        <BottomLine summary={`${illness.title.replace(/ in Babies.*| in Toddlers.*/, '')} is ${illness.type === 'viral' ? 'a viral illness that typically resolves on its own' : 'treatable with appropriate medical care'}. ${illness.whenToGoToER[0] ? `Seek emergency care if ${illness.whenToGoToER[0].toLowerCase()}.` : ''}`} />
      </div>
    </article>
  );
}
