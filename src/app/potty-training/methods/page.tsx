import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Potty Training Methods Compared',
  description:
    'Compare potty training methods: 3-day intensive, gradual/child-led (AAP), and Oh Crap approaches. Pros, cons, and which method fits your child best.',
  alternates: { canonical: '/potty-training/methods' },
  openGraph: {
    title: 'Potty Training Methods Compared | Is My Baby Alright?',
    description: '3-day intensive, gradual child-led, and Oh Crap methods compared side by side.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Methods' },
];

const faqItems = [
  { question: 'Which potty training method is fastest?', answer: 'The 3-day intensive method produces the fastest initial results, but only works well for children who are clearly ready. Without true readiness, it often leads to more accidents and regression.' },
  { question: 'Can I combine methods?', answer: 'Yes. Many parents start with a structured approach (like the 3-day method for initial awareness) then transition to a more child-led approach for maintenance and nighttime.' },
  { question: 'What if the 3-day method does not work?', answer: 'If your child is not making progress after 3 days, it usually means they were not quite ready. Take a break for 2-4 weeks and try again, or switch to a more gradual approach.' },
  { question: 'Is the AAP against the 3-day method?', answer: 'The AAP does not specifically endorse or condemn the 3-day method. They recommend a child-led approach that avoids pressure, which can be compatible with a structured introduction if the child is willing.' },
  { question: 'Should I use pull-ups or go straight to underwear?', answer: 'This depends on your method. The 3-day method typically goes straight to underwear. Gradual approaches may use pull-ups during transitions. Either can work — consistency matters more than the specific choice.' },
];

export default function PottyTrainingMethodsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Potty Training Methods Compared',
          description: 'Compare potty training methods: 3-day intensive, gradual/child-led, and structured approaches.',
          path: '/potty-training/methods',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Toilet Training Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Methods' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Potty Training Methods Compared</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        There is no single right way to potty train. The best method depends on your child&apos;s temperament, readiness level, and your family&apos;s circumstances. Here are the most common approaches with their strengths and limitations.
      </p>

      <KeyTakeaways
        takeaways={[
          'The AAP recommends a child-led approach with low pressure as the default',
          'The 3-day method works well for clearly ready children but requires full commitment',
          'Gradual/scheduled approaches build habits over time with less intensity',
          'No method works for every child \u2014 flexibility is key',
          'Regardless of method, punishment and shaming should never be used',
        ]}
      />

      <div className="space-y-6">
        <Section title="Child-led approach (AAP recommended)">
          <p>The American Academy of Pediatrics recommends following your child&apos;s lead. This approach prioritizes readiness and low pressure over speed.</p>
          <h3 className="font-semibold mt-3 mb-1">How it works:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Wait for clear readiness signs before introducing the potty</li>
            <li>Let your child explore the potty at their own pace</li>
            <li>Offer opportunities to sit without requiring it</li>
            <li>Praise successes enthusiastically but respond to accidents neutrally</li>
            <li>Gradually reduce diapers as your child demonstrates consistent success</li>
          </ol>
          <h3 className="font-semibold mt-3 mb-1">Best for:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Most families and temperaments</li>
            <li>Children who resist pressure or are in a defiant phase</li>
            <li>Families without urgent timeline pressure</li>
            <li>Children with anxiety or sensory sensitivities</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Timeline:</h3>
          <p>Typically 3-6 months for daytime dryness. Fewer relapses and less resistance overall.</p>
        </Section>

        <Section title="3-day intensive method">
          <p>A structured, intensive approach where diapers are removed and the child is immersed in the potty training process over a long weekend.</p>
          <h3 className="font-semibold mt-3 mb-1">How it works:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Choose a 3-day period with no major plans (holiday weekend works well)</li>
            <li>Remove diapers entirely during waking hours on Day 1</li>
            <li>Stay home and watch for cues; rush to potty at first sign</li>
            <li>Offer potty every 20-30 minutes initially</li>
            <li>Celebrate successes; clean accidents matter-of-factly</li>
            <li>By Day 3, the child should be initiating or responding to prompts</li>
          </ol>
          <h3 className="font-semibold mt-3 mb-1">Best for:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Children who are clearly ready (showing multiple readiness signs)</li>
            <li>Children who respond well to clear expectations</li>
            <li>Families who can dedicate 3 full days with no distractions</li>
            <li>Children over 24 months with good communication skills</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Timeline:</h3>
          <p>3 days for initial awareness, then 1-2 weeks of follow-up for consistency. Some accidents are normal for weeks after.</p>
          <h3 className="font-semibold mt-3 mb-1">Important caveats:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>If no progress by end of Day 2, stop and try again in a few weeks</li>
            <li>This method requires high parental availability and patience</li>
            <li>Should not feel punitive — if the child is upset, step back</li>
          </ul>
        </Section>

        <Section title="Gradual/scheduled approach">
          <p>A low-intensity approach that introduces the potty as part of the daily routine over several weeks or months.</p>
          <h3 className="font-semibold mt-3 mb-1">How it works:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Introduce potty sitting at predictable times (after waking, before bath, after meals)</li>
            <li>No pressure to produce — just building the habit of sitting</li>
            <li>Gradually increase frequency as child shows success</li>
            <li>Transition from diapers to pull-ups to underwear over weeks</li>
            <li>Let the child guide the pace of progression</li>
          </ol>
          <h3 className="font-semibold mt-3 mb-1">Best for:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Children who need time to warm up to new experiences</li>
            <li>Families who cannot dedicate multiple consecutive days</li>
            <li>Children in daycare (coordination with caregivers is easier)</li>
            <li>Children who are early in readiness but interested</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Timeline:</h3>
          <p>2-4 months for daytime dryness. Slower start but steady progress.</p>
        </Section>

        <Section title="Method comparison at a glance">
          <ComparisonTable
            caption="Potty training methods compared"
            headers={['Feature', 'Child-Led (AAP)', '3-Day Intensive', 'Gradual/Scheduled']}
            rows={[
              ['Best age', '18-36 months', '24-36 months', '18-30 months'],
              ['Daytime timeline', '3-6 months', '3 days + 2 weeks', '2-4 months'],
              ['Parental commitment', 'Moderate', 'Very high (3 days)', 'Moderate'],
              ['Regression risk', 'Low', 'Moderate', 'Low'],
              ['Works with daycare', 'Yes', 'Start at home', 'Yes'],
              ['Pressure level', 'Very low', 'Moderate', 'Low'],
            ]}
          />
        </Section>

        <Section title="Tips that apply to every method">
          <ul className="list-disc list-inside space-y-1">
            <li>Never punish accidents — they are a normal and expected part of learning</li>
            <li>Use consistent language across all caregivers</li>
            <li>Dress your child in easy-to-remove clothing (elastic waistbands, no overalls)</li>
            <li>Keep the potty accessible and in a convenient location</li>
            <li>Maintain routine during travel and life changes</li>
            <li>Praise effort and process, not just results</li>
            <li>Be prepared to pause and resume if your child becomes resistant</li>
          </ul>
        </Section>

        <Section title="When to switch methods">
          <p>Consider changing your approach if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your child becomes very resistant or fearful after 1-2 weeks</li>
            <li>There is no measurable progress after a reasonable timeframe</li>
            <li>The current method is causing significant family stress</li>
            <li>Your child&apos;s readiness level has changed (for better or worse)</li>
          </ul>
          <p className="mt-2">
            Switching methods is not failure. It is responsive parenting — adapting to your child&apos;s needs.
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The best potty training method is the one that works for your specific child. Most pediatricians recommend starting with a low-pressure, child-led approach. If your child is clearly ready and willing, more intensive methods can work well. Regardless of approach, patience, consistency, and avoiding punishment are universal keys to success." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training/readiness" className="text-sm text-primary font-semibold hover:underline">&larr; Readiness Signs</Link>
        <Link href="/potty-training/regression" className="text-sm text-primary font-semibold hover:underline">Regression &rarr;</Link>
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
