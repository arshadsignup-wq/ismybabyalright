import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Potty Training Readiness Signs',
  description:
    'How to know when your child is ready for potty training. Physical, cognitive, and emotional readiness signs based on AAP guidelines. Ages 18-36 months.',
  alternates: { canonical: '/potty-training/readiness' },
  openGraph: {
    title: 'Potty Training Readiness Signs | Is My Baby Alright?',
    description: 'Physical, cognitive, and emotional signs your toddler is ready for potty training.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Readiness Signs' },
];

const faqItems = [
  { question: 'What is the earliest age a child can be potty trained?', answer: 'While some children show readiness signs as early as 18 months, most are not truly ready until 24-30 months. Starting too early often leads to a longer overall process according to AAP research.' },
  { question: 'My child meets some readiness signs but not all. Should I start?', answer: 'You do not need every single sign present. If your child shows most physical and cognitive readiness signs and seems interested, you can try a gentle introduction. If it leads to resistance, wait a few weeks and try again.' },
  { question: 'My child is 3 and not showing readiness signs. Should I worry?', answer: 'Talk to your pediatrician. While the normal range extends to 36 months, if a child shows no interest or awareness of bladder/bowel functions by age 3, a developmental evaluation may be helpful.' },
  { question: 'Does my child need to be verbal to potty train?', answer: 'Children do not need to speak in full sentences. They need to be able to communicate (verbally or through gestures/signs) that they need to go or that their diaper is wet/dirty.' },
  { question: 'Can readiness signs come and go?', answer: 'Yes. Illness, stress, or developmental leaps can temporarily reduce readiness. If signs disappear, pause and revisit in a few weeks.' },
];

export default function PottyTrainingReadinessPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Potty Training Readiness Signs',
          description: 'How to know when your child is ready for potty training. Physical, cognitive, and emotional readiness signs.',
          path: '/potty-training/readiness',
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Readiness Signs' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Potty Training Readiness Signs</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        The single most important factor in successful potty training is timing. Starting when your child is truly ready leads to faster success with fewer setbacks. The AAP identifies three categories of readiness: physical, cognitive, and emotional.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most children show readiness between 18-30 months, but the range is wide',
          'Physical readiness includes staying dry for 2+ hours and regular bowel movements',
          'Cognitive readiness means understanding cause-and-effect and following simple directions',
          'Emotional readiness includes wanting to be independent and interest in the toilet',
          'Starting before true readiness often extends the total training time',
        ]}
      />

      <div className="space-y-6">
        <Section title="Physical readiness signs">
          <p>Your child&apos;s body needs to be physically mature enough to control bladder and bowel functions:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Stays dry for at least 2 hours during the day or wakes dry from naps</li>
            <li>Has regular, predictable bowel movements (often at the same time each day)</li>
            <li>Can walk steadily to and from the bathroom</li>
            <li>Can sit down and stand up independently</li>
            <li>Can pull pants up and down with minimal help</li>
            <li>Shows physical signs of needing to go (squatting, crossing legs, holding genitals)</li>
          </ul>
          <p className="mt-2">
            If your child is still urinating every hour and has irregular bowel patterns, their body may not be ready regardless of their interest level.
          </p>
        </Section>

        <Section title="Cognitive readiness signs">
          <p>Potty training requires your child to understand the process mentally:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Understands and follows simple 2-step instructions (&ldquo;Go to the bathroom and sit on the potty&rdquo;)</li>
            <li>Can communicate the need to go (words, signs, or gestures)</li>
            <li>Understands the connection between the urge to go and using the toilet</li>
            <li>Knows the words your family uses for urine and bowel movements</li>
            <li>Can imitate behaviors (watching others use the toilet)</li>
            <li>Shows awareness of being wet or dirty (&ldquo;I peed&rdquo; or pointing to diaper)</li>
          </ul>
        </Section>

        <Section title="Emotional readiness signs">
          <p>Perhaps most important is your child&apos;s emotional willingness:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Shows interest in the toilet, potty chair, or wearing underwear</li>
            <li>Wants to be independent (&ldquo;I do it myself!&rdquo;)</li>
            <li>Expresses discomfort with wet or dirty diapers</li>
            <li>Is in a cooperative phase rather than a defiant one</li>
            <li>Is not going through a major life change (new sibling, move, starting daycare)</li>
            <li>Shows pride in accomplishments</li>
          </ul>
          <p className="mt-2">
            If your child is in a strong &ldquo;no!&rdquo; phase or resists sitting on the potty, waiting a few weeks often makes a significant difference.
          </p>
        </Section>

        <Section title="Signs your child is NOT ready yet">
          <p>Hold off on starting if your child:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Shows fear or strong resistance to the potty</li>
            <li>Cannot stay dry for more than 1 hour</li>
            <li>Has no awareness of wet/dirty diapers</li>
            <li>Cannot pull pants up and down</li>
            <li>Is going through a stressful transition (new sibling, move, illness)</li>
            <li>Shows no interest despite gentle encouragement</li>
          </ul>
          <p className="mt-2">
            Waiting is not a failure. Research shows that children who start later (when truly ready) often complete training faster than those pushed to begin early.
          </p>
        </Section>

        <Section title="What does the research say about timing?">
          <ul className="list-disc list-inside space-y-1">
            <li>Children who begin training before 24 months take an average of 12 months to complete</li>
            <li>Children who begin between 24-30 months typically complete training in 6 months</li>
            <li>The average age of completion in the US is 36 months for daytime training</li>
            <li>Girls tend to be ready 2-3 months earlier than boys on average</li>
            <li>Forcing early training does not produce long-term benefits and may increase resistance</li>
          </ul>
        </Section>

        <Section title="How to encourage readiness without pressure">
          <ul className="list-disc list-inside space-y-1">
            <li>Let your child observe family members using the toilet (when comfortable)</li>
            <li>Read books about potty training together</li>
            <li>Place a potty chair in the bathroom so it becomes familiar</li>
            <li>Use language that normalizes the process (&ldquo;Everyone uses the toilet when they&apos;re ready&rdquo;)</li>
            <li>Let your child sit on the potty with clothes on to get comfortable with the position</li>
            <li>Praise any interest without pushing</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="There is no universal right age to start potty training. Watch for a combination of physical, cognitive, and emotional readiness signs. Starting when your child is truly ready leads to faster, smoother training with fewer setbacks." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training" className="text-sm text-primary font-semibold hover:underline">&larr; Potty Training Guide</Link>
        <Link href="/potty-training/methods" className="text-sm text-primary font-semibold hover:underline">Training Methods &rarr;</Link>
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
