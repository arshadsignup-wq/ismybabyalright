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
  title: 'Potty Training Boys vs. Girls',
  description:
    'Differences in potty training boys and girls. Average timelines, unique challenges, and specific tips for each. Evidence-based guidance from AAP research.',
  alternates: { canonical: '/potty-training/boys-vs-girls' },
  openGraph: {
    title: 'Potty Training Boys vs. Girls | Is My Baby Alright?',
    description: 'Real differences in training boys and girls, with specific tips for each.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Boys vs. Girls' },
];

const faqItems = [
  { question: 'Do boys really potty train later than girls?', answer: 'On average, yes. Research shows boys complete daytime training about 2-3 months later than girls. However, individual variation is much larger than gender differences. Many boys train earlier than many girls.' },
  { question: 'Should boys sit or stand to pee first?', answer: 'The AAP and most pediatricians recommend starting with sitting for both pee and poop. This is simpler (one position for both), easier to aim, and avoids the need to differentiate between urges. Standing can be introduced later.' },
  { question: 'Is it helpful for boys to see their father use the toilet?', answer: 'Yes. Modeling is one of the most effective teaching tools. When boys see a male figure (father, older brother, or caregiver) use the toilet, it normalizes the process and provides a visual example.' },
  { question: 'My daughter is afraid of the loud toilet flush. What should I do?', answer: 'Fear of flushing is common in both genders. Let your child flush only if they want to, or flush after they leave the room. Use a smaller potty that does not flush. The fear typically resolves with time and no pressure.' },
  { question: 'Are there differences in nighttime dryness between boys and girls?', answer: 'Yes. Girls tend to achieve nighttime dryness earlier than boys. By age 5, about 90% of girls are dry at night compared to about 80% of boys. This is a neurological maturation difference, not a training difference.' },
];

export default function BoysVsGirlsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Potty Training Boys vs. Girls',
          description: 'Differences in potty training boys and girls with specific tips for each.',
          path: '/potty-training/boys-vs-girls',
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Boys vs. Girls' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Potty Training Boys vs. Girls</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        While the core principles of potty training are the same regardless of gender, research does show some average differences in readiness timing, challenges, and techniques that work best. Here is what the evidence says — while remembering that individual variation matters more than gender averages.
      </p>

      <KeyTakeaways
        takeaways={[
          'Boys complete daytime training an average of 2-3 months later than girls',
          'The AAP recommends boys start by sitting for both pee and poop',
          'Individual variation is larger than gender differences',
          'Girls may have more urinary tract infections during training',
          'Both genders benefit most from patience, consistency, and no pressure',
        ]}
      />

      <div className="space-y-6">
        <Section title="What does the research show?">
          <ComparisonTable
            caption="Average potty training milestones by gender"
            headers={['Milestone', 'Girls (Average)', 'Boys (Average)']}
            rows={[
              ['First readiness signs', '18-24 months', '22-28 months'],
              ['Daytime dryness', '29 months', '31 months'],
              ['Nighttime dryness', '3-4 years', '3.5-5 years'],
              ['Complete independence', '32-34 months', '35-39 months'],
            ]}
          />
          <p className="mt-2">
            These are averages from population studies. Your child may be earlier or later regardless of gender. Developmental readiness matters far more than age or gender.
          </p>
        </Section>

        <Section title="Tips for potty training boys">
          <h3 className="font-semibold mb-1">Getting started:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Start with sitting for both pee and poop (less confusing, easier to manage)</li>
            <li>Point the penis downward when sitting to prevent spray over the front of the seat</li>
            <li>Use a potty with a splash guard or a separate seat adapter with a urine deflector</li>
            <li>Let boys observe male role models using the toilet when comfortable</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Teaching to stand:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Wait until sitting is mastered before introducing standing (usually a few weeks to months)</li>
            <li>A step stool helps boys reach an appropriate height</li>
            <li>Targets in the bowl (cereal, toilet targets) can help with aim</li>
            <li>Teach to lift the seat (or provide consistent reminders)</li>
            <li>Practice outside (if available) can reduce pressure and mess</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common challenges with boys:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>More distracted during training (may run back to play before finishing)</li>
            <li>Erections can make aiming difficult — this is normal and temporary</li>
            <li>May resist sitting still long enough for bowel movements</li>
            <li>May be more interested in the mechanics (flushing, spraying) than the function</li>
          </ul>
        </Section>

        <Section title="Tips for potty training girls">
          <h3 className="font-semibold mb-1">Getting started:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Girls sit for both pee and poop from the start (simpler learning curve)</li>
            <li>Teach to wipe from front to back to prevent urinary tract infections</li>
            <li>Use enough toilet paper — demonstrate the right amount</li>
            <li>A step stool helps smaller children feel secure on an adult toilet</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Hygiene essentials:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Front-to-back wiping:</strong> This is critical for girls to prevent UTIs. Practice and reinforce consistently.</li>
            <li>Parents will need to help with wiping for quite a while (often until age 4-5)</li>
            <li>Avoid bubble baths and harsh soaps near the vulva during training (can cause irritation)</li>
            <li>Cotton underwear is preferred over synthetic materials</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common challenges with girls:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Higher risk of UTIs during training (teach front-to-back wiping early)</li>
            <li>May be more sensitive to unfamiliar or public toilets</li>
            <li>Vulvar irritation from wiping too aggressively or not enough</li>
            <li>May want more privacy earlier (respect this)</li>
          </ul>
        </Section>

        <Section title="What is the same for both">
          <p>The fundamentals of successful potty training are identical regardless of gender:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Wait for readiness signs before starting</li>
            <li>Never punish accidents</li>
            <li>Use enthusiastic praise for successes</li>
            <li>Maintain consistency across caregivers</li>
            <li>Dress in easy-to-remove clothing</li>
            <li>Model and normalize toilet use</li>
            <li>Be patient — every child&apos;s timeline is different</li>
            <li>Address constipation promptly regardless of gender</li>
          </ul>
        </Section>

        <Section title="Twins and siblings of different genders">
          <ul className="list-disc list-inside space-y-1">
            <li>Do not assume siblings will train at the same time, even twins</li>
            <li>Avoid comparing one child&apos;s progress to another&apos;s</li>
            <li>Each child should be assessed for individual readiness</li>
            <li>It is normal for a younger sibling to train earlier (they observe the older child)</li>
            <li>Same-gender siblings may train closer in age, but individual differences still dominate</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="While girls tend to potty train slightly earlier than boys on average, individual readiness matters far more than gender. The same core principles apply to both: wait for readiness, avoid pressure, praise success, and respond to accidents with patience. Specific techniques (sitting vs. standing for boys, front-to-back wiping for girls) are the main practical differences." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training/poop-withholding" className="text-sm text-primary font-semibold hover:underline">&larr; Poop Withholding</Link>
        <Link href="/potty-training" className="text-sm text-primary font-semibold hover:underline">Potty Training Hub &rarr;</Link>
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
