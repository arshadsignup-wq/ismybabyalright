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
import { allSymptomGuides, getSymptomBySlug } from '@/data/symptoms';
import { bodySystemLabels } from '@/data/symptoms/types';
import Link from 'next/link';

interface Props {
  params: Promise<{ 'body-system': string; slug: string }>;
}

export async function generateStaticParams() {
  return allSymptomGuides.map((s) => ({
    'body-system': s.bodySystem,
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) return { title: 'Not Found' };

  return {
    title: symptom.title,
    description: symptom.description.slice(0, 160),
    alternates: { canonical: `/symptoms/${symptom.bodySystem}/${slug}` },
  };
}

export default async function SymptomPage({ params }: Props) {
  const { 'body-system': system, slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom || symptom.bodySystem !== system) notFound();

  const systemLabel = bodySystemLabels[symptom.bodySystem];

  const takeaways = [
    symptom.description.split('.')[0] + '.',
    `Most common cause: ${symptom.possibleCauses.find(c => c.likelihood === 'common')?.cause || 'varies'}`,
    symptom.urgencyLevels.emergency[0] ? `Emergency: ${symptom.urgencyLevels.emergency[0]}` : '',
    symptom.homeRemedies[0] ? `Home care: ${symptom.homeRemedies[0]}` : '',
  ].filter(Boolean);

  const faqItems = [
    { question: `What causes ${symptom.title.toLowerCase().replace(/ in babies.*/, '')}?`, answer: symptom.possibleCauses.map(c => `${c.cause} (${c.likelihood})`).join('; ') },
    { question: 'When is this an emergency?', answer: symptom.urgencyLevels.emergency.join('. ') || 'See the urgency levels section above.' },
    { question: 'What can I do at home?', answer: symptom.homeRemedies.join('. ') },
    { question: 'When should I call the doctor?', answer: symptom.urgencyLevels.sameDay.join('. ') || 'If you are concerned, always call your pediatrician.' },
  ];

  const schema = getContentPageSchema({
    name: symptom.title,
    description: symptom.description,
    path: `/symptoms/${system}/${slug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Symptoms', url: '/symptoms' },
    { name: systemLabel, url: `/symptoms/${system}` },
    { name: symptom.title },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Symptoms', href: '/symptoms' },
        { label: systemLabel, href: `/symptoms/${system}` },
        { label: symptom.title },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>{symptom.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={symptom.sources.map(s => s.org)} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{symptom.description}</p>

        <KeyTakeaways takeaways={takeaways} />

        {/* Possible causes */}
        <section className="mt-8">
          <h2>Possible Causes</h2>
          <div className="space-y-2 mt-3">
            {symptom.possibleCauses.map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  c.likelihood === 'common' ? 'bg-green-500' :
                  c.likelihood === 'uncommon' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span>{c.cause}</span>
                <span className="text-xs text-muted ml-auto capitalize">{c.likelihood}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Urgency levels */}
        <section className="mt-8">
          <h2>When to Seek Help</h2>
          <div className="space-y-4 mt-3">
            {symptom.urgencyLevels.emergency.length > 0 && (
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                <p className="text-sm font-bold text-red-800 mb-2">Emergency — Call 911 or go to ER:</p>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.urgencyLevels.emergency.map((item, i) => (
                    <li key={i} className="text-sm text-red-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {symptom.urgencyLevels.urgent.length > 0 && (
              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-800 mb-2">Urgent — See doctor today:</p>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.urgencyLevels.urgent.map((item, i) => (
                    <li key={i} className="text-sm text-orange-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {symptom.urgencyLevels.sameDay.length > 0 && (
              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <p className="text-sm font-bold text-yellow-800 mb-2">Same-day appointment:</p>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.urgencyLevels.sameDay.map((item, i) => (
                    <li key={i} className="text-sm text-yellow-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {symptom.urgencyLevels.monitor.length > 0 && (
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <p className="text-sm font-bold text-green-800 mb-2">Monitor at home:</p>
                <ul className="list-disc list-inside space-y-1">
                  {symptom.urgencyLevels.monitor.map((item, i) => (
                    <li key={i} className="text-sm text-green-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* By Age */}
        <section className="mt-8">
          <h2>By Age</h2>
          <div className="space-y-3 mt-3">
            {symptom.byAge.map((age, i) => (
              <div key={i} className="rounded-lg border border-[#E8E2D9] bg-white p-4">
                <p className="text-sm font-bold text-foreground">{age.ageRange}</p>
                <p className="text-sm text-muted mt-1"><span className="font-medium">Normal:</span> {age.normalVariation}</p>
                <p className="text-sm text-muted mt-1"><span className="font-medium">Worry if:</span> {age.whenToWorry}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Home remedies */}
        {symptom.homeRemedies.length > 0 && (
          <section className="mt-8">
            <h2>Home Care</h2>
            <ul className="list-disc list-inside space-y-1 mt-3">
              {symptom.homeRemedies.map((remedy, i) => (
                <li key={i} className="text-sm text-muted">{remedy}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Triage link */}
        {symptom.triageSlug && (
          <div className="mt-8 rounded-xl border border-primary/30 bg-primary-light p-4">
            <p className="text-sm font-semibold text-foreground">Need help deciding what to do?</p>
            <Link href={`/triage/${symptom.triageSlug}`} className="text-sm text-primary hover:underline mt-1 inline-block">
              Use our interactive triage tool →
            </Link>
          </div>
        )}

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <section className="mt-10">
          <h3 className="text-sm font-semibold text-muted mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {symptom.sources.map((source, i) => (
              <SourceBadge key={i} org={source.org} url={source.url} />
            ))}
          </div>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Related */}
        {symptom.relatedSymptomSlugs.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-semibold text-muted mb-3">Related Symptoms</h3>
            <div className="flex flex-wrap gap-2">
              {symptom.relatedSymptomSlugs.map((relSlug) => (
                <Link key={relSlug} href={`/symptoms/${system}/${relSlug}`} className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">
                  {relSlug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}

        <BottomLine summary={`Most cases of ${symptom.title.toLowerCase().replace(/ in babies.*/, '')} in babies are not emergencies. ${symptom.urgencyLevels.emergency[0] ? `However, seek immediate care if ${symptom.urgencyLevels.emergency[0].toLowerCase()}.` : 'When in doubt, call your pediatrician.'}`} />
      </div>
    </article>
  );
}
