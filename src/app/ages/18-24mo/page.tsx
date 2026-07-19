import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: '18-24 Month Toddler Guide',
  description:
    'Complete guide to your toddler at 18-24 months. Running, two-word phrases, imaginative play, potty training readiness, and the 2-year well-child visit. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/18-24mo' },
};

const faqItems = [
  {
    question: 'How many words should a 2-year-old say?',
    answer: 'By 24 months, most children have a vocabulary of 50+ words and are combining two words together ("more milk," "daddy go," "big truck"). If your child has fewer than 50 words or is not putting 2 words together by 24 months, talk to your pediatrician about an evaluation. Early intervention can make a significant difference.',
  },
  {
    question: 'Is my toddler ready for potty training?',
    answer: 'Most children show readiness signs between 18-30 months. Signs include: staying dry for 2+ hours, showing interest in the toilet, telling you when they are wet/dirty, pulling pants up and down, and following simple instructions. Do not force it — starting before readiness leads to longer training time. Average age of completion is 2.5-3 years.',
  },
  {
    question: 'When should I transition to a toddler bed?',
    answer: 'There is no rush. Most experts recommend keeping the crib until at least age 2-3, or until the child is climbing out and at risk of falling. If your child is safe in the crib, there is no developmental reason to switch early. When you do transition, place the mattress on the floor initially and childproof the room completely.',
  },
  {
    question: 'Why does my toddler say "no" to everything?',
    answer: 'Saying "no" is a healthy assertion of autonomy and independence — it means your toddler is developing a sense of self. This "no" phase peaks between 18-30 months. Offer limited choices ("red shirt or blue shirt?") to give them control within boundaries. Avoid asking yes/no questions when "no" is not an acceptable answer.',
  },
  {
    question: 'How much screen time is appropriate at this age?',
    answer: 'The AAP recommends limiting screen time to no more than 1 hour per day of high-quality programming for children 18-24 months (video chat with family is okay). Co-viewing is recommended — watch with your child and talk about what you see. No screens during meals or before bed.',
  },
];

export default function EighteenToTwentyFourMonthsPage() {
  const schema = getContentPageSchema({
    name: '18-24 Month Toddler Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your toddler at 18-24 months covering running, two-word phrases, imaginative play, potty training readiness, and the 2-year well-child visit.',
    path: '/ages/18-24mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '18-24 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '18-24 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">18-24 Month Toddler Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 18 and 24 months, your toddler&apos;s personality shines through. They are running, climbing, combining words, and asserting independence at every turn. This is also when imaginative play begins and potty training readiness may emerge.
      </p>

      <KeyTakeaways
        takeaways={[
          'By 24 months, most toddlers combine two words and have 50+ word vocabulary (CDC)',
          'Running, climbing, and kicking a ball develop during this period',
          'Imaginative play emerges — feeding dolls, pretending to cook, imitating adults',
          'The AAP recommends autism screening at 18 and 24 months for all children',
          'Potty training readiness signs may appear, but forcing it early backfires',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 18-24 months">
          <p>According to the CDC, these milestones are typically reached between 18-24 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Runs (stiff-legged, with frequent falls — improving over time)</li>
            <li>Climbs on and off furniture without help</li>
            <li>Walks up and down stairs holding a railing (one step at a time)</li>
            <li>Kicks a ball forward</li>
            <li>Throws a ball overhand</li>
            <li>Stacks 4-6 blocks</li>
            <li>Turns pages one at a time</li>
            <li>Uses spoon and fork with increasing accuracy</li>
            <li>Begins to undress self (takes off shoes, pulls down pants)</li>
            <li>Scribbles spontaneously; may make vertical and circular strokes</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sorts shapes and colors</li>
            <li>Completes simple puzzles (2-4 pieces)</li>
            <li>Follows two-step instructions (&quot;pick up the ball and bring it here&quot;)</li>
            <li>Begins make-believe play (cooking, caring for dolls, driving cars)</li>
            <li>Points to things in a book when asked (&quot;where is the dog?&quot;)</li>
            <li>Knows names of familiar people and body parts</li>
            <li>Begins to understand concepts: in/out, up/down, big/small</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>50+ word vocabulary by 24 months</li>
            <li>Two-word phrases (&quot;more milk,&quot; &quot;mama go,&quot; &quot;big truck&quot;)</li>
            <li>Vocabulary explosion (learning several new words per week)</li>
            <li>Points to things to show you or ask for them</li>
            <li>Says &quot;no&quot; frequently (asserting independence)</li>
            <li>Names familiar objects and people in pictures</li>
            <li>Plays alongside other children (parallel play)</li>
            <li>Shows defiance and tests limits (healthy autonomy development)</li>
            <li>Copies adults and older children enthusiastically</li>
          </ul>
        </Section>

        <Section title="Feeding at 18-24 months">
          <h3 className="font-semibold mb-1">Nutrition needs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>3 meals and 2-3 snacks per day</li>
            <li>Caloric needs: approximately 1,000-1,400 calories per day</li>
            <li>Whole milk: 16-24 oz per day (switch to low-fat at age 2)</li>
            <li>Water freely available throughout the day</li>
            <li>All food groups: grains, protein, dairy, fruits, vegetables</li>
            <li>Iron-rich foods daily (meat, beans, fortified cereals)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Self-feeding and mealtime</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Can use spoon and fork (messy but improving)</li>
            <li>Drinks from an open cup (expect some spilling)</li>
            <li>Sits at the table with the family (booster seat or high chair)</li>
            <li>Meals should last about 20-30 minutes — do not extend indefinitely</li>
            <li>Eating is still learning — expect mess, food throwing, and varied appetite</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Dealing with picky eating</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Picky eating peaks around 18-24 months — this is developmentally normal</li>
            <li>Continue offering rejected foods without pressure</li>
            <li>Serve meals family-style when possible (let toddler choose from what is offered)</li>
            <li>Avoid becoming a short-order cook — one meal for the family</li>
            <li>Model eating a variety of foods</li>
            <li>If concerned about nutrition, discuss with pediatrician — a multivitamin may be suggested</li>
          </ul>
        </Section>

        <Section title="Sleep at 18-24 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 11-14 hours per day (AAP recommendation)</li>
            <li>Nighttime: 10-12 hours</li>
            <li>One nap per day: typically 1.5-3 hours after lunch</li>
            <li>Bedtime resistance often increases (stalling tactics emerge)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common sleep challenges</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>18-month sleep regression (linked to language explosion and autonomy)</li>
            <li>Bedtime stalling: &quot;one more book,&quot; &quot;need water,&quot; &quot;one more hug&quot;</li>
            <li>Night fears begin (monsters, dark) — validate feelings, add nightlight</li>
            <li>Climbing out of crib (safety risk — may need to transition to bed)</li>
            <li>Nap refusal (not ready to drop — keep offering quiet time even if no sleep)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Strategies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Clear, consistent bedtime routine with visual or verbal cues</li>
            <li>Offer limited bedtime choices to give some control (&quot;red pajamas or blue?&quot;)</li>
            <li>Set clear limits: &quot;one book, one song, then sleep&quot;</li>
            <li>A comfort object (special stuffed animal or blanket) helps with separation</li>
            <li>Keep the room dark and use white noise if helpful</li>
          </ul>
        </Section>

        <Section title="Safety at 18-24 months">
          <p>Climbing, running, and curiosity create new risks:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Supervise near stairs even with gates — climbers can defeat some gates</li>
            <li>Window guards on all upper-floor windows; windows should not open more than 4 inches</li>
            <li>Keep all medications locked (child can now open drawers and cabinets)</li>
            <li>Poison Control: 1-800-222-1222 — button batteries, medications, and cleaning products are top risks</li>
            <li>Water safety is critical — toddlers can drown in just 1-2 inches of water</li>
            <li>Car seat: keep rear-facing as long as the seat allows (AAP recommends to max height/weight)</li>
            <li>Playground safety: age-appropriate equipment, always supervised, soft ground surface</li>
            <li>Driveway safety: always know where your toddler is before moving a car</li>
            <li>Never leave a child alone in or around a car</li>
          </ul>
        </Section>

        <Section title="Potty training readiness">
          <p>Most children are not ready before 18-24 months. Look for these signs:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Stays dry for 2+ hours or wakes dry from naps</li>
            <li>Shows interest in the toilet or wearing underwear</li>
            <li>Tells you (or shows) when diaper is wet or dirty</li>
            <li>Can pull pants up and down</li>
            <li>Follows simple instructions and can sit still for 2-3 minutes</li>
            <li>Shows a desire for independence (&quot;I do it!&quot;)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">If signs are not present yet</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Wait. Starting too early does not speed up the process — it often extends it</li>
            <li>Average completion age: 2.5-3 years for daytime; nighttime control comes later</li>
            <li>Read potty books, let toddler observe, and talk about it casually</li>
            <li>Never punish accidents — this creates negative associations</li>
          </ul>
        </Section>

        <Section title="Common concerns at 18-24 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Tantrums intensifying:</strong> Peak between 18-30 months. Normal. Stay calm, do not give in to demands made through tantrums, and help name emotions</li>
            <li><strong>&quot;No&quot; to everything:</strong> Healthy autonomy. Offer choices, pick your battles, use positive phrasing (&quot;walking feet&quot; vs. &quot;don&apos;t run&quot;)</li>
            <li><strong>Hitting/biting/throwing:</strong> Impulse control is not developed yet. Model gentle behavior, use brief timeouts if needed, and stay consistent</li>
            <li><strong>Not talking enough:</strong> If fewer than 50 words or no 2-word phrases by 24 months, request a speech evaluation. Early intervention is free and highly effective</li>
            <li><strong>Separation anxiety persisting:</strong> Still normal at this age. Usually improves significantly by 2.5-3 years</li>
            <li><strong>Regression with new sibling:</strong> Common. Extra one-on-one time and patience help</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 18-24 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>18 months:</strong> Growth check, formal developmental screening (ASQ-3), autism screening (M-CHAT-R), Hep A #2, DTaP booster, vaccines as needed</li>
            <li><strong>24 months (2 years):</strong> Growth check, developmental screening, second autism screening (M-CHAT-R), dental assessment, vision screening</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The 24-month developmental screening</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Second formal autism screening (M-CHAT-R)</li>
            <li>Language assessment (should have 50+ words, 2-word phrases)</li>
            <li>Motor development check (running, climbing, stacking)</li>
            <li>Social-emotional screening</li>
            <li>Discussion about behavior, sleep, nutrition, and potty training readiness</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Fewer than 50 words by 24 months</li>
              <li>Not combining two words by 24 months</li>
              <li>Does not follow simple two-step instructions</li>
              <li>Does not engage in pretend play</li>
              <li>Does not point to show things to others</li>
              <li>Does not copy actions or words</li>
              <li>Cannot walk steadily</li>
              <li>Loses skills previously acquired</li>
              <li>Does not notice or seem to care when a caregiver leaves</li>
              <li>Very limited eye contact</li>
              <li>Lines up toys or objects excessively without other types of play</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 18-24 month period is intense — for toddlers and parents alike. Your child is becoming a communicator, a problem-solver, and a person with strong opinions. The defiance is healthy autonomy developing. Stay patient, stay consistent, and remember: this too is a phase." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/12-18mo" className="text-sm text-primary font-semibold hover:underline">&larr; 12-18 Months</Link>
        <Link href="/ages/2-3yr" className="text-sm text-primary font-semibold hover:underline">2-3 Years &rarr;</Link>
      </nav>
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
