import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Developmental Red Flags by Age',
  description:
    'Know when to seek evaluation. Age-specific developmental warning signs from birth to 36 months, based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/development/red-flags',
  },
  openGraph: {
    title: 'Developmental Red Flags by Age | Is My Baby Alright?',
    description:
      'Age-specific developmental warning signs from birth to 36 months, based on CDC and AAP guidelines.',
  },
};

const redFlagsByAge = [
  {
    age: 'By 2 months',
    flags: [
      'Does not respond to loud sounds',
      'Does not watch things as they move',
      'Does not smile at people',
      'Does not bring hands to mouth',
      'Cannot hold head up when pushing up on tummy',
    ],
  },
  {
    age: 'By 4 months',
    flags: [
      'Does not watch things as they move',
      'Does not smile at people',
      'Cannot hold head steady',
      'Does not coo or make sounds',
      'Does not bring things to mouth',
      'Does not push down with legs when feet are placed on a hard surface',
      'Has trouble moving one or both eyes in all directions',
    ],
  },
  {
    age: 'By 6 months',
    flags: [
      'Does not try to get things that are in reach',
      'Shows no affection for caregivers',
      'Does not respond to sounds around them',
      'Has difficulty getting things to mouth',
      'Does not make vowel sounds ("ah", "eh", "oh")',
      'Does not roll over in either direction',
      'Does not laugh or squeal',
      'Seems very stiff, with tight muscles',
      'Seems very floppy, like a rag doll',
    ],
  },
  {
    age: 'By 9 months',
    flags: [
      'Does not bear weight on legs with support',
      'Does not sit with help',
      'Does not babble ("mama", "baba", "dada")',
      'Does not play games involving back-and-forth interaction',
      'Does not respond to own name',
      'Does not seem to recognize familiar people',
      'Does not look where you point',
      'Does not transfer toys from one hand to the other',
    ],
  },
  {
    age: 'By 12 months',
    flags: [
      'Does not crawl',
      'Cannot stand when supported',
      'Does not search for things that are hidden',
      'Does not say single words like "mama" or "dada"',
      'Does not learn gestures like waving or shaking head',
      'Does not point to things',
      'Loses skills they once had',
    ],
  },
  {
    age: 'By 18 months',
    flags: [
      'Does not point to show things to others',
      'Cannot walk',
      'Does not know what familiar things are for (phone, brush, spoon)',
      'Does not copy others',
      'Does not gain new words',
      'Does not have at least 6 words',
      'Does not notice or mind when a caregiver leaves or returns',
      'Loses skills they once had',
    ],
  },
  {
    age: 'By 24 months',
    flags: [
      'Does not use 2-word phrases ("drink milk", "more cookie")',
      'Does not know what to do with common objects (brush, phone, fork)',
      'Does not copy actions and words',
      'Does not follow simple instructions',
      'Does not walk steadily',
      'Loses skills they once had',
    ],
  },
  {
    age: 'By 36 months',
    flags: [
      'Falls down a lot or has trouble with stairs',
      'Drools or has very unclear speech',
      'Cannot work simple toys (peg boards, simple puzzles, turning handle)',
      'Does not speak in sentences',
      'Does not understand simple instructions',
      'Does not play pretend or make-believe',
      'Does not want to play with other children or with toys',
      'Does not make eye contact',
      'Loses skills they once had',
    ],
  },
];

const faqItems = [
  { question: 'What is a developmental red flag?', answer: 'A red flag is a sign that a child may benefit from a developmental evaluation. It does not mean something is wrong — many children who show one or two red flags develop typically.' },
  { question: 'When should I worry about my baby not talking?', answer: 'Talk to your pediatrician if your child has no words by 12 months or no 2-word phrases by 24 months.' },
  { question: 'Can I contact early intervention without a referral?', answer: 'Yes. Every state has an early intervention program for children under 3. You can contact them directly without a doctor\'s referral.' },
  { question: 'Is developmental regression always a concern?', answer: 'Brief regressions during illness or stress are common and usually temporary. Persistent loss of previously acquired skills warrants evaluation by a pediatrician.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Development', url: '/development' },
  { name: 'Red Flags by Age' },
];

export default function RedFlagsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Developmental Red Flags by Age',
          description: 'Age-specific developmental warning signs from birth to 36 months, based on CDC and AAP guidelines.',
          path: '/development/red-flags',
          medicalGuidelines: [
            { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
            { name: 'AAP Developmental Screening', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Development', href: '/development' }, { label: 'Red Flags by Age' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Developmental Red Flags by Age
      </h1>
      <p className="text-sm text-muted mb-6">
        Based on CDC &ldquo;Learn the Signs. Act Early.&rdquo; guidelines and
        AAP developmental screening recommendations.
      </p>

      <KeyTakeaways
        takeaways={[
          'Red flags are signs a child may benefit from evaluation, not a diagnosis',
          'Many children who show one or two red flags develop typically',
          'Early identification leads to early intervention, which produces the best outcomes',
          'Loss of previously-acquired skills at any age warrants immediate evaluation',
          'Contact your state\u2019s early intervention program directly \u2014 no referral needed',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} />
      </div>

      <LastReviewed date="2026-07-01" />

      <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-8">
        <h2 className="text-base font-bold text-foreground mb-2">
          What are red flags?
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>
            Red flags are signs that a child may benefit from a developmental
            evaluation. They do not mean something is wrong — many children who
            show one or two red flags develop typically. But early identification
            leads to early intervention, which produces the best outcomes.
          </p>
          <p>
            If your child shows any of these signs, talk to your pediatrician.
            You can also contact your state&apos;s early intervention program
            directly — no referral is needed.
          </p>
        </div>
      </div>

      <ComparisonTable
        caption="Developmental red flags summary"
        headers={['Age', 'Key red flags']}
        rows={[
          ['2 months', 'No smiling, no response to sounds'],
          ['4 months', 'Cannot hold head steady, no sounds'],
          ['6 months', 'No reaching, no rolling, very stiff/floppy'],
          ['9 months', 'No babbling, no response to name'],
          ['12 months', 'No words, no pointing, no crawling'],
          ['18 months', 'Cannot walk, fewer than 6 words'],
          ['24 months', 'No 2-word phrases, no pretend play'],
          ['36 months', 'Unclear speech, no sentences, no eye contact'],
          ['Any age', 'Loss of previously acquired skills'],
        ]}
        sourceNote="Source: CDC \u201CLearn the Signs. Act Early.\u201D guidelines"
      />

      <div className="space-y-6 mt-6">
        {redFlagsByAge.map((group) => (
          <section
            key={group.age}
            className="rounded-xl border border-[#E8E2D9] bg-white p-5"
          >
            <h2 className="text-base font-bold text-foreground mb-3">
              {group.age}
            </h2>
            <ul className="space-y-2">
              {group.flags.map((flag, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern"
                    aria-hidden="true"
                  />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* At any age */}
      <section className="mt-6 rounded-xl border-2 border-concern bg-white p-5">
        <h2 className="text-base font-bold text-concern mb-2">At any age</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p className="font-semibold text-foreground">
            Talk to your doctor immediately if your child:
          </p>
          <ul className="space-y-2">
            {[
              'Loses skills they previously had (developmental regression)',
              'Shows a significant change in behavior',
              'Stops making eye contact',
              'Stops responding to their name',
              'Stops babbling or talking',
            ].map((flag, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 leading-relaxed"
              >
                <span
                  className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern"
                  aria-hidden="true"
                />
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next steps */}
      <div className="mt-8 rounded-xl border border-[#E8E2D9] bg-white p-5">
        <h2 className="text-base font-bold text-foreground mb-2">
          What to do next
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>
            If you have concerns about your child&apos;s development, you do not
            need to wait for the next well-child visit. You can:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Call your pediatrician to discuss your observations</li>
            <li>
              Request a formal developmental screening (ASQ-3 or similar)
            </li>
            <li>
              Contact your state&apos;s early intervention program (for children
              under 3) — no referral needed
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Red flags don't automatically mean something is wrong — they mean your child should be evaluated by a professional. Early intervention services are free in every state and can make a significant difference when started early. If you have concerns, ask your pediatrician for a developmental screening." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link
          href="/milestones"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Milestones by Age
        </Link>
        <Link
          href="/resources/early-intervention"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Early Intervention Guide
        </Link>
        <Link
          href="/resources/guides/developmental-assessment-guide"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Developmental Assessment Guide
        </Link>
        <Link
          href="/doctor-visits"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Well-Child Visits
        </Link>
      </div>
    </article>
  );
}
