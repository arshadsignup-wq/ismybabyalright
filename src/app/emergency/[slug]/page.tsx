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
import { getContentPageSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo';
import { allEmergencyGuides, getEmergencyBySlug } from '@/data/emergency';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allEmergencyGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getEmergencyBySlug(slug);
  if (!guide) return { title: 'Not Found' };

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/emergency/${slug}` },
  };
}

export default async function EmergencyGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getEmergencyBySlug(slug);
  if (!guide) notFound();

  const takeaways = [
    guide.callNineOneOne ? 'Call 911 immediately' : 'May not require 911 — see guidance below',
    guide.immediateActions[0],
    guide.doNotDo[0] ? `DO NOT: ${guide.doNotDo[0]}` : '',
  ].filter(Boolean);

  const faqItems = [
    { question: `Should I call 911 for ${guide.title.toLowerCase()}?`, answer: guide.callNineOneOne ? `Yes. ${guide.whenToCall911[0]}` : `Not always. Call 911 if: ${guide.whenToCall911[0]}` },
    { question: 'What should I do first?', answer: guide.immediateActions.join('. ') },
    { question: 'What should I NOT do?', answer: guide.doNotDo.join('. ') },
    { question: 'How can I prevent this?', answer: guide.prevention.slice(0, 3).join('. ') },
  ];

  const schema = getContentPageSchema({
    name: guide.title,
    description: guide.description,
    path: `/emergency/${slug}`,
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Emergency Guide', url: '/emergency' },
    { name: guide.title },
  ]);
  const howToSchema = getHowToSchema(
    guide.title,
    guide.description,
    guide.stepByStep.map((s) => ({ name: s.title, text: s.description }))
  );

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <Breadcrumbs items={[
        { label: 'Emergency Guide', href: '/emergency' },
        { label: guide.title },
      ]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {guide.callNineOneOne && (
          <div className="rounded-xl bg-red-600 text-white p-4 mb-6">
            <p className="text-base font-bold">CALL 911</p>
            <p className="text-sm mt-1">This is a life-threatening emergency. Call 911 immediately, then follow these steps while waiting for help.</p>
          </div>
        )}

        <h1>{guide.title}</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={guide.sources.map(s => s.org)} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <p className="text-sm text-muted leading-relaxed mb-6">{guide.description}</p>

        <KeyTakeaways takeaways={takeaways} label="Immediate actions" />

        {/* Step by step */}
        <section className="mt-8">
          <h2>Step-by-Step Response</h2>
          <div className="space-y-3 mt-4">
            {guide.stepByStep.map((step) => (
              <div key={step.step} className="flex gap-4 rounded-lg border border-[#E8E2D9] bg-white p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {step.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{step.title}</p>
                  <p className="text-sm text-muted mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Do NOT do */}
        <section className="mt-8">
          <h2>What NOT to Do</h2>
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 mt-3">
            <ul className="space-y-2">
              {guide.doNotDo.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="flex-shrink-0 mt-0.5 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When to call */}
        <section className="mt-8">
          <h2>When to Seek Help</h2>
          <div className="space-y-4 mt-3">
            {guide.whenToCall911.length > 0 && (
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                <p className="text-sm font-bold text-red-800 mb-2">Call 911 if:</p>
                <ul className="list-disc list-inside space-y-1">
                  {guide.whenToCall911.map((item, i) => (
                    <li key={i} className="text-sm text-red-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {guide.whenToGoToER.length > 0 && (
              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-800 mb-2">Go to ER if:</p>
                <ul className="list-disc list-inside space-y-1">
                  {guide.whenToGoToER.map((item, i) => (
                    <li key={i} className="text-sm text-orange-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {guide.whenToCallDoctor.length > 0 && (
              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <p className="text-sm font-bold text-yellow-800 mb-2">Call your doctor if:</p>
                <ul className="list-disc list-inside space-y-1">
                  {guide.whenToCallDoctor.map((item, i) => (
                    <li key={i} className="text-sm text-yellow-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* By age */}
        {guide.byAge.length > 0 && (
          <section className="mt-8">
            <h2>Age-Specific Guidance</h2>
            <div className="space-y-3 mt-3">
              {guide.byAge.map((age, i) => (
                <div key={i} className="rounded-lg border border-[#E8E2D9] bg-white p-4">
                  <p className="text-sm font-bold text-foreground">{age.ageRange}</p>
                  <p className="text-sm text-muted mt-1">{age.context}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Prevention */}
        <section className="mt-8">
          <h2>Prevention</h2>
          <ul className="list-disc list-inside space-y-1 mt-3">
            {guide.prevention.map((item, i) => (
              <li key={i} className="text-sm text-muted">{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <section className="mt-10">
          <h3 className="text-sm font-semibold text-muted mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {guide.sources.map((source, i) => (
              <SourceBadge key={i} org={source.org} url={source.url} />
            ))}
          </div>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {guide.relatedEmergencySlugs.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-semibold text-muted mb-3">Related Emergency Guides</h3>
            <div className="flex flex-wrap gap-2">
              {guide.relatedEmergencySlugs.map((relSlug) => (
                <Link key={relSlug} href={`/emergency/${relSlug}`} className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">
                  {relSlug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}

        <BottomLine
          summary={guide.callNineOneOne ? 'This is a serious emergency. Always call 911 first, then follow the steps above while help is on the way.' : 'Stay calm and follow the steps above. When in doubt, call your pediatrician or go to the nearest emergency room.'}
          supportiveMessage="You are doing the right thing by learning what to do in an emergency. Being prepared is one of the best things you can do for your child."
        />
      </div>
    </article>
  );
}
