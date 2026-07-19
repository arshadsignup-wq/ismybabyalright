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
  title: 'Nighttime Potty Training',
  description:
    'When to expect nighttime dryness, how to help your child stay dry at night, and when bedwetting is a concern. Evidence-based guidance from AAP.',
  alternates: { canonical: '/potty-training/nighttime' },
  openGraph: {
    title: 'Nighttime Potty Training | Is My Baby Alright?',
    description: 'When to expect nighttime dryness and how to support your child through the process.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Nighttime Training' },
];

const faqItems = [
  { question: 'When do most children stay dry at night?', answer: 'About 85% of children are dry at night by age 5. Some healthy children take until age 6-7. Nighttime dryness is a neurological maturation process that cannot be rushed.' },
  { question: 'Should I wake my child to pee at night?', answer: 'Scheduled waking (lifting) can reduce wet nights but does not speed up the neurological development needed for true nighttime dryness. It is a management strategy, not a training method.' },
  { question: 'Are bedwetting alarms effective?', answer: 'Yes. Bedwetting alarms are the most effective non-medication treatment for children over 6 who are still wetting. They work by conditioning the brain to respond to bladder signals during sleep. Success rates are 60-80%.' },
  { question: 'Is bedwetting hereditary?', answer: 'Yes. If one parent wet the bed past age 5, their child has about a 40% chance of doing the same. If both parents did, the chance rises to about 75%.' },
  { question: 'When should I see a doctor about bedwetting?', answer: 'See your pediatrician if your child is over 6 and still wetting most nights, if a previously dry child begins wetting again, or if bedwetting is accompanied by daytime symptoms (urgency, pain, excessive thirst).' },
];

export default function NighttimePottyTrainingPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Nighttime Potty Training',
          description: 'When to expect nighttime dryness, how to help, and when bedwetting is a concern.',
          path: '/potty-training/nighttime',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Toilet Training Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'AAP Nocturnal Enuresis Guidelines', url: 'https://publications.aap.org/pediatrics' },
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Nighttime Training' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Nighttime Potty Training</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Nighttime dryness is a separate developmental milestone from daytime potty training. It depends on neurological maturation — the brain must learn to either wake the child or suppress urine production during sleep. This cannot be taught the same way daytime training can.
      </p>

      <KeyTakeaways
        takeaways={[
          'Nighttime dryness is a separate milestone from daytime training',
          'It depends on brain maturation, not willpower or laziness',
          'Most children achieve nighttime dryness by age 5, but age 6-7 is still normal',
          'Bedwetting under age 6 is NOT considered a medical problem',
          'Pull-ups at night are not a setback \u2014 they are a practical tool until the brain is ready',
        ]}
      />

      <div className="space-y-6">
        <Section title="Why nighttime is different from daytime">
          <p>Daytime training relies on conscious awareness and habit. Nighttime dryness requires:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Adequate vasopressin production:</strong> This hormone reduces urine production during sleep. Some children&apos;s bodies produce less at night until they mature.</li>
            <li><strong>Bladder capacity:</strong> The bladder must be large enough to hold urine through the night.</li>
            <li><strong>Brain-bladder communication:</strong> The brain must either wake the child when the bladder is full or signal the bladder to hold.</li>
          </ul>
          <p className="mt-2">
            These are biological processes that develop on their own timeline. No amount of training, rewards, or restriction can speed up neurological maturation.
          </p>
        </Section>

        <Section title="Normal timeline for nighttime dryness">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Age 3:</strong> About 50% of children are dry at night</li>
            <li><strong>Age 4:</strong> About 70% are dry at night</li>
            <li><strong>Age 5:</strong> About 85% are dry at night</li>
            <li><strong>Age 6:</strong> About 90% are dry at night</li>
            <li><strong>Age 7+:</strong> About 5-10% still wet occasionally (nocturnal enuresis)</li>
          </ul>
          <p className="mt-2">
            Boys achieve nighttime dryness later than girls on average. A strong family history of bedwetting is the best predictor of later dryness.
          </p>
        </Section>

        <Section title="Signs your child may be ready for nighttime training">
          <ul className="list-disc list-inside space-y-1">
            <li>Wakes up with a dry diaper or pull-up most mornings (at least 5 out of 7 nights)</li>
            <li>Wakes up during the night to use the bathroom independently</li>
            <li>Tells you they do not want to wear a pull-up at night</li>
            <li>Has been daytime trained for at least 6 months</li>
          </ul>
          <p className="mt-2">
            If your child&apos;s pull-up is heavy and soaked every morning, they are not yet ready. This is not a failure — their body is still developing.
          </p>
        </Section>

        <Section title="How to support nighttime dryness">
          <h3 className="font-semibold mb-1">Practical strategies:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Limit fluids 1-2 hours before bedtime (ensure adequate hydration earlier in the day)</li>
            <li>Have your child use the toilet immediately before bed</li>
            <li>Use a waterproof mattress protector (keep a spare for quick changes)</li>
            <li>Keep a nightlight and clear path to the bathroom</li>
            <li>Consider a portable potty near the bed for young children</li>
            <li>Use double-layered bedding (waterproof pad between two sheets) for easy nighttime changes</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Emotional support:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Never punish or shame a child for wetting the bed</li>
            <li>Remind them that their body is still learning and it is not their fault</li>
            <li>Be matter-of-fact about nighttime accidents — change sheets without drama</li>
            <li>Do not restrict sleepovers or activities due to bedwetting (pull-ups and discreet strategies exist)</li>
          </ul>
        </Section>

        <Section title="Scheduled waking (lifting)">
          <p>Some parents wake their child to use the toilet before they go to bed themselves (often around 10-11 PM).</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Pros:</strong> Can reduce wet nights and laundry while waiting for natural development</li>
            <li><strong>Cons:</strong> Does not teach the child to wake themselves; disrupts sleep; child may not fully wake</li>
            <li><strong>Best practice:</strong> If you do this, make sure the child is awake enough to participate (not carried unconscious to the toilet)</li>
          </ul>
        </Section>

        <Section title="When bedwetting becomes a medical concern">
          <p>The medical term for bedwetting is &ldquo;nocturnal enuresis.&rdquo; It is considered a clinical concern when:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A child over 6 wets the bed 2+ times per week</li>
            <li>A previously dry child (dry for 6+ months) begins wetting again (secondary enuresis)</li>
            <li>Bedwetting is accompanied by daytime wetting, pain, unusual thirst, or snoring</li>
            <li>The child is emotionally distressed about the bedwetting</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Medical treatments (for children over 6, with pediatrician guidance):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Bedwetting alarms:</strong> Most effective long-term treatment (60-80% success rate)</li>
            <li><strong>Desmopressin (DDAVP):</strong> Synthetic vasopressin that reduces nighttime urine production; useful for sleepovers</li>
            <li><strong>Bladder training exercises:</strong> Gradually increasing daytime holding time</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Nighttime dryness is a brain maturation process, not a training outcome. Most children are reliably dry at night by age 5, but age 6-7 is within normal range. Never punish bedwetting. Use pull-ups and waterproof bedding without shame while your child's body catches up. See your pediatrician if bedwetting persists past age 6 or causes your child distress." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training/regression" className="text-sm text-primary font-semibold hover:underline">&larr; Regression</Link>
        <Link href="/potty-training/poop-withholding" className="text-sm text-primary font-semibold hover:underline">Poop Withholding &rarr;</Link>
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
