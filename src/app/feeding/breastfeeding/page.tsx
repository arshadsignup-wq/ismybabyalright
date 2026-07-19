import type { Metadata } from 'next';
import Link from 'next/link';
import { breastfeedingTopics } from '@/data/feeding/breastfeeding';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Breastfeeding Guide',
  description:
    'Complete breastfeeding guide: latch, positioning, supply, pumping, troubleshooting, and when to get help. Evidence-based guidance from AAP and WHO.',
  alternates: { canonical: '/feeding/breastfeeding' },
  openGraph: {
    title: 'Breastfeeding Guide | Is My Baby Alright?',
    description: 'Latch, positioning, supply, pumping, troubleshooting, and when to get help.',
  },
};

const faqItems = [
  { question: 'How do I get a good breastfeeding latch?', answer: 'A good latch means baby has a wide mouth around the areola (not just the nipple), chin touching breast, and lips flanged outward. If it hurts beyond mild tenderness, break the latch and try again.' },
  { question: 'How do I know if my baby is getting enough breast milk?', answer: '6+ wet diapers per day after day 5, steady weight gain at pediatrician visits, and contentment after feeds are reliable signs of adequate intake.' },
  { question: 'Is breastfeeding supposed to hurt?', answer: 'Mild tenderness in the first few days is common as you and baby learn. Persistent pain beyond the first week is not normal and usually indicates a latch issue. Seek help from a lactation consultant.' },
  { question: 'How often should I breastfeed my newborn?', answer: '8-12 times in 24 hours, or approximately every 2-3 hours. Frequent feeding is normal and necessary to establish milk supply.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Feeding', url: '/feeding' },
  { name: 'Breastfeeding Guide' },
];

export default function BreastfeedingPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Breastfeeding Guide',
          description: 'Complete breastfeeding guide: latch, positioning, supply, pumping, troubleshooting, and when to get help.',
          path: '/feeding/breastfeeding',
          medicalGuidelines: [
            { name: 'AAP Breastfeeding Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'WHO Breastfeeding Recommendations', url: 'https://www.who.int/health-topics/breastfeeding' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Feeding', href: '/feeding' }, { label: 'Breastfeeding Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Breastfeeding Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'WHO', 'La Leche League']} />
      <p className="text-sm text-muted mb-6 mt-4">
        Breastfeeding is natural but not always easy. This guide covers common challenges and evidence-based solutions to help you and your baby succeed — however feeding looks for your family.
      </p>

      <KeyTakeaways
        takeaways={[
          'Initiate breastfeeding within the first hour after birth when possible',
          'Newborns feed 8-12 times in 24 hours \u2014 this is normal and necessary to establish supply',
          'A good latch means wide mouth, chin touching breast, and lips flanged outward',
          'Pain during breastfeeding is common but not normal \u2014 seek help from a lactation consultant',
          'Any amount of breast milk provides immune benefits',
        ]}
      />

      <div className="space-y-6">
        <Section title="How do I start breastfeeding?">
          <ul className="list-disc list-inside space-y-1">
            <li>Initiate breastfeeding within the first hour after birth when possible</li>
            <li>Skin-to-skin contact helps trigger feeding reflexes</li>
            <li>Newborns feed 8-12 times in 24 hours — this is normal and necessary to establish supply</li>
            <li>Colostrum (the first milk) is concentrated and rich in antibodies — small volumes are expected</li>
            <li>Mature milk typically comes in 2-5 days after birth</li>
            <li>A good latch means wide mouth, chin touching breast, and lips flanged outward</li>
          </ul>
        </Section>

        <Section title="What are the best breastfeeding positions?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Cradle hold:</strong> Baby lies across your lap, head in the crook of your arm. The most traditional position.</li>
            <li><strong>Cross-cradle:</strong> Similar to cradle but opposite arm supports baby, giving more control over latch. Good for newborns.</li>
            <li><strong>Football hold:</strong> Baby tucked under your arm along your side. Good for C-section recovery and large breasts.</li>
            <li><strong>Side-lying:</strong> Both you and baby lie on your sides. Good for night feeds and recovery.</li>
            <li><strong>Laid-back (biological nurturing):</strong> You recline and baby lies on your chest. Uses gravity and baby&apos;s instincts.</li>
          </ul>

          <ComparisonTable
            caption="Breastfeeding positions compared"
            headers={['Position', 'Best for', 'Technique']}
            rows={[
              ['Cradle hold', 'After latch established', 'Baby across lap, head in arm crook'],
              ['Cross-cradle', 'Newborns, learning to latch', 'Opposite arm supports baby'],
              ['Football hold', 'C-section recovery, large breasts', 'Baby tucked under arm'],
              ['Side-lying', 'Night feeds, recovery', 'Both lie on sides'],
              ['Laid-back', 'Using baby\u2019s instincts', 'Recline with baby on chest'],
            ]}
          />
        </Section>

        {/* Troubleshooting topics from data */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">Troubleshooting common issues</h2>
          <div className="space-y-4">
            {breastfeedingTopics.map((topic) => (
              <div key={topic.id} className="rounded-xl border border-[#E8E2D9] bg-white p-5">
                <h3 className="text-sm font-bold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted mb-2">{topic.description}</p>
                <details className="text-sm text-muted">
                  <summary className="cursor-pointer text-primary font-semibold hover:underline">Signs &amp; solutions</summary>
                  <div className="mt-2 space-y-2">
                    <p className="font-semibold text-foreground text-xs">Signs:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {topic.signs.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                    <p className="font-semibold text-foreground text-xs mt-2">Solutions:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {topic.solutions.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                    {topic.whenToGetHelp.length > 0 && (
                      <>
                        <p className="font-semibold text-foreground text-xs mt-2">Get help if:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {topic.whenToGetHelp.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <Section title="When to see a lactation consultant">
          <p>An IBCLC (International Board Certified Lactation Consultant) can help with:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Persistent latch difficulties or pain during feeding</li>
            <li>Concerns about milk supply or baby&apos;s weight gain</li>
            <li>Tongue-tie or lip-tie assessment</li>
            <li>Returning to work and establishing a pumping routine</li>
            <li>Weaning guidance</li>
          </ul>
          <p className="mt-2">
            Many hospitals, pediatrician offices, and WIC programs offer free or low-cost lactation support.
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/tools/breast-milk-storage" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Breast Milk Storage Guide</Link>
        <Link href="/tools/pumping-schedule" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Pumping Schedule</Link>
        <Link href="/tools/feeding-amount" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Feeding Amount Calculator</Link>
        <Link href="/resources/guides/breastfeeding-troubleshooting" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Full Troubleshooting Guide</Link>
      </div>

      <BottomLine summary="Breastfeeding has well-documented health benefits for both mother and baby, but it doesn't always come easily. Support from a lactation consultant can make a significant difference. However you feed your baby, what matters most is that your baby is fed and you are supported." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/feeding" className="text-sm text-primary font-semibold hover:underline">&larr; Feeding Guide</Link>
        <Link href="/feeding/formula" className="text-sm text-primary font-semibold hover:underline">Formula Feeding &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
