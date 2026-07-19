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
  title: '2-3 Year Old Toddler Guide',
  description:
    'Complete guide to your toddler at 2-3 years. Sentences, potty training, social play, preschool readiness, discipline strategies, and the 30-month screening. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/2-3yr' },
};

const faqItems = [
  {
    question: 'When should my child be potty trained?',
    answer: 'Most children complete daytime potty training between 2.5-3.5 years. Girls tend to train slightly earlier than boys on average. Nighttime dryness may not come until age 4-5 and is controlled by brain maturation, not training. Bed-wetting before age 5-6 is not considered a problem by the AAP.',
  },
  {
    question: 'Is it normal for a 2-year-old to have tantrums every day?',
    answer: 'Yes. Daily tantrums are developmentally normal between ages 2-3 (the "terrible twos"). Most children have 1-2 tantrums per day lasting 1-5 minutes. Seek guidance if tantrums are very frequent (10+/day), last longer than 15-20 minutes, involve self-harm, or your child cannot recover afterward.',
  },
  {
    question: 'How much should a 2-3 year old talk?',
    answer: 'By age 2: 50+ words, 2-word phrases, understood by parents about 50% of the time. By age 3: 200-1000 words, 3-4 word sentences, understood by strangers about 75% of the time. If your child is not meeting these benchmarks, a speech evaluation is recommended.',
  },
  {
    question: 'When is my child ready for preschool?',
    answer: 'Most children are socially and developmentally ready for a structured preschool environment around age 3. Look for: ability to separate from parents, interest in other children, ability to follow simple group instructions, and basic self-help skills (eating, toileting attempts). Many 2-year-olds benefit from part-time play groups.',
  },
  {
    question: 'How do I handle hitting and aggression in a 2-year-old?',
    answer: 'Aggression at 2-3 is impulsive, not intentional harm. Stay calm, briefly acknowledge ("You are angry"), set the limit ("I won\'t let you hit"), and redirect. Model gentle touch. Brief removal from the situation works better than punishment. Impulse control develops gradually through age 3-4.',
  },
];

export default function TwoToThreeYearsPage() {
  const schema = getContentPageSchema({
    name: '2-3 Year Old Toddler Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your toddler at 2-3 years covering sentences, potty training, social play, preschool readiness, discipline, and the 30-month developmental screening.',
    path: '/ages/2-3yr',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '2-3 Years' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '2-3 Years' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">2-3 Year Old Toddler Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 2 and 3 years, your toddler transforms into a little communicator. Sentences form, imagination flourishes, friendships begin, and potty training becomes achievable. This period also brings the peak of tantrums and boundary-testing — which are healthy signs of a developing sense of self.
      </p>

      <KeyTakeaways
        takeaways={[
          'By age 3, most children speak in 3-4 word sentences and are understood by strangers 75% of the time (CDC)',
          'Potty training typically completes between 2.5-3.5 years — readiness is key, not a specific age',
          'The AAP recommends formal developmental screening at 30 months',
          'Imaginative play, turn-taking, and social play with peers all emerge during this period',
          'Discipline should focus on connection, consistency, and teaching — not punishment (AAP)',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 2-3 years">
          <p>According to the CDC, these milestones are typically reached between 2-3 years:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Runs well without falling frequently</li>
            <li>Jumps with both feet off the ground</li>
            <li>Climbs well (stairs with alternating feet by age 3)</li>
            <li>Kicks a ball with increasing accuracy</li>
            <li>Catches a large ball with both arms</li>
            <li>Pedals a tricycle (by age 3)</li>
            <li>Stacks 6-10 blocks</li>
            <li>Draws circles and begins vertical/horizontal lines</li>
            <li>Uses scissors (with supervision)</li>
            <li>Turns doorknobs and unscrew lids</li>
            <li>Dresses and undresses with some help</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sorts objects by shape and color</li>
            <li>Completes puzzles with 3-6 pieces</li>
            <li>Understands the concept of &quot;two&quot;</li>
            <li>Plays make-believe with dolls, animals, and people</li>
            <li>Follows 2-3 step instructions</li>
            <li>Turns book pages one at a time</li>
            <li>Names most familiar objects</li>
            <li>Understands spatial concepts (in, on, under)</li>
            <li>Begins to understand time (now vs. later, today vs. tomorrow)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>By 2 years: 2-word phrases, 50+ words, 50% intelligible to strangers</li>
            <li>By 3 years: 3-4 word sentences, 200-1000 words, 75% intelligible to strangers</li>
            <li>Asks &quot;what&quot; and &quot;where&quot; questions</li>
            <li>Uses pronouns (I, me, you) and plurals</li>
            <li>Carries on simple conversations</li>
            <li>Plays alongside and begins to play with other children</li>
            <li>Takes turns (with reminders)</li>
            <li>Shows a range of emotions and begins to name them</li>
            <li>Shows empathy (may comfort a crying friend)</li>
            <li>Begins to understand rules and shows guilt when breaking them</li>
          </ul>
        </Section>

        <Section title="Feeding at 2-3 years">
          <h3 className="font-semibold mb-1">Nutrition needs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Caloric needs: approximately 1,000-1,400 calories per day</li>
            <li>Switch to low-fat (1%) or skim milk at age 2 (16-20 oz per day max)</li>
            <li>Water as primary drink throughout the day</li>
            <li>No juice, or limit to 4 oz per day of 100% juice (AAP recommendation)</li>
            <li>3 meals and 2-3 snacks daily on a consistent schedule</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">What to offer</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>All food groups daily: grains, protein, dairy, fruits, vegetables</li>
            <li>Continue offering variety even if toddler refuses — this is normal</li>
            <li>Protein: meat, fish, eggs, beans, lentils, tofu, nut butters</li>
            <li>Healthy fats: avocado, olive oil, nut butters (still important for brain development)</li>
            <li>Fiber-rich foods help with constipation (common at this age)</li>
            <li>Limit added sugars and highly processed foods</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Mealtime behavior</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Independent eating with spoon and fork (still some mess)</li>
            <li>Can drink from an open cup well</li>
            <li>Sit at the table with family — model healthy eating behaviors</li>
            <li>Continue division of responsibility: parent decides what/when/where; child decides whether/how much</li>
            <li>Picky eating may persist — continue exposing to variety without pressure</li>
            <li>Never use food as reward or punishment</li>
          </ul>
        </Section>

        <Section title="Sleep at 2-3 years">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 11-14 hours per day (AAP recommendation)</li>
            <li>Nighttime: 10-12 hours</li>
            <li>One nap: 1-2 hours (some children drop the nap entirely between 2.5-3.5 years)</li>
            <li>Most children still need a nap until at least age 3</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Nap transition (dropping the last nap)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Signs: consistently fighting the nap for 2+ weeks, taking 30+ minutes to fall asleep, nap interfering with bedtime</li>
            <li>Transition to &quot;quiet time&quot; (45-60 minutes of rest even without sleep)</li>
            <li>Move bedtime earlier temporarily (30-60 minutes) when dropping the nap</li>
            <li>Expect some cranky evenings during the transition period</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Toddler bed transition</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Many children transition between 2-3 years (often prompted by climbing out of crib)</li>
            <li>Fully childproof the bedroom (room is now the sleep space)</li>
            <li>Anchor furniture, cover outlets, remove choking/strangulation hazards</li>
            <li>Use a baby gate in the doorway if needed for safety</li>
            <li>Expect some boundary-testing (getting out of bed repeatedly) — be consistent</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common sleep issues</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Nightmares begin around age 2-3 (child wakes fully, remembers the dream)</li>
            <li>Night terrors (partial arousal, screaming, does not recognize you) — do not wake; keep safe</li>
            <li>Bedtime fears (dark, monsters) — validate, add nightlight, brief reassurance</li>
            <li>Stalling tactics: set clear limits and follow through consistently</li>
          </ul>
        </Section>

        <Section title="Potty training">
          <h3 className="font-semibold mb-1">When to start</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Most children are ready between 2-3 years</li>
            <li>Wait for readiness signs: dry for 2+ hours, interest, tells you when wet/dirty, can pull pants up/down</li>
            <li>Do not start during major transitions (new baby, move, new childcare)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">How to approach it</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Keep it positive and low-pressure</li>
            <li>Let child sit on potty fully clothed first to get comfortable</li>
            <li>Offer potty at predictable times (after waking, after meals)</li>
            <li>Celebrate successes without over-the-top reactions</li>
            <li>Never punish accidents — say &quot;that is okay, we will try again next time&quot;</li>
            <li>Expect regression during illness, stress, or transitions</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Timeline expectations</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Daytime training: typically takes 3-6 months once started</li>
            <li>Nighttime dryness: may not come until age 4-5 (brain maturation, not training)</li>
            <li>Pull-ups at night are fine until consistent dryness develops</li>
            <li>Boys and girls train at similar ages; some studies suggest girls slightly earlier on average</li>
          </ul>
        </Section>

        <Section title="Safety at 2-3 years">
          <p>Increasing physical abilities and independence mean ongoing vigilance:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Can open doors, climb counters, and operate simple mechanisms — adapt baby-proofing</li>
            <li>Drowning remains a leading cause of death at this age — constant supervision near water, fence pools on all 4 sides</li>
            <li>Car seat: forward-facing with harness is appropriate once child exceeds rear-facing limits; keep harnessed to seat maximum before transitioning to booster</li>
            <li>Playground injuries increase — supervise closely, teach age-appropriate risk</li>
            <li>Pedestrian safety: always hold hands near traffic, practice stop-and-wait</li>
            <li>Teach basic body safety (&quot;private parts,&quot; &quot;no one touches without permission&quot;)</li>
            <li>Firearm safety: if guns are in the home, they must be locked and unloaded (AAP recommends removal from home)</li>
            <li>Sun protection: hat, sunscreen (SPF 30+), limit midday exposure</li>
            <li>Always check back seat when leaving car — never leave child unattended in vehicle</li>
          </ul>
        </Section>

        <Section title="Discipline and behavior">
          <p>The AAP recommends positive discipline strategies rather than punishment:</p>
          <h3 className="font-semibold mt-3 mb-1">Effective strategies for 2-3 year olds</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Connection first:</strong> Children behave better when they feel securely connected to caregivers</li>
            <li><strong>Clear, simple limits:</strong> &quot;We use gentle hands&quot; rather than long explanations</li>
            <li><strong>Natural consequences:</strong> Threw the toy? Toy goes away for a while</li>
            <li><strong>Choices within limits:</strong> &quot;You can walk or I can carry you&quot;</li>
            <li><strong>Acknowledge feelings:</strong> &quot;You are angry because you wanted that toy&quot;</li>
            <li><strong>Redirect:</strong> Offer an acceptable alternative to the undesired behavior</li>
            <li><strong>Consistency:</strong> Follow through every time on stated limits</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">What not to do (AAP guidance)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>No spanking or hitting — associated with worse outcomes and increased aggression (AAP policy statement 2018)</li>
            <li>No yelling or shaming — damages the parent-child relationship</li>
            <li>No extended timeouts (brief removal from situation is okay — 1-2 minutes maximum at this age)</li>
            <li>No taking away food or forcing food as punishment</li>
          </ul>
        </Section>

        <Section title="Common concerns at 2-3 years">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Tantrums:</strong> Peak at 2-3 years, 1-2 per day is normal. Seek help if: 10+/day, lasting 20+ minutes, involving self-harm, or no recovery</li>
            <li><strong>Speech concerns:</strong> If not using 2-word phrases by 24 months or not intelligible 75% by age 3, request a speech evaluation</li>
            <li><strong>Stuttering:</strong> Normal developmental disfluency is common at 2-3 years as language outpaces motor control. Usually resolves. Seek evaluation if lasting 6+ months or accompanied by tension/frustration</li>
            <li><strong>Potty training resistance:</strong> Stop and try again in a few weeks. Power struggles make it worse</li>
            <li><strong>Night waking/nightmares:</strong> Common at this age. Brief, boring comfort and return to bed</li>
            <li><strong>Not playing with other kids:</strong> Parallel play (alongside, not with) is still normal at 2. Interactive play develops through age 3</li>
            <li><strong>Aggression toward peers:</strong> Impulsive, not malicious. Supervise closely, intervene calmly, model and teach alternatives</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 2-3 years">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>24 months (2 years):</strong> Growth check, developmental screening, autism screening (M-CHAT-R), Hep A #2 (if not given earlier)</li>
            <li><strong>30 months (2.5 years):</strong> Formal developmental screening (AAP mandated at 30 months), growth check, language assessment</li>
            <li><strong>3 years:</strong> Growth check, vision screening, blood pressure, dental assessment, readiness for preschool discussion</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The 30-month screening</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AAP mandates formal developmental screening at 9, 18, and 30 months</li>
            <li>Assesses language, motor, social-emotional, and adaptive skills</li>
            <li>Last mandatory general screening before school-age assessments</li>
            <li>If concerns, referral to early intervention (free before age 3) or school district (free after age 3)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Dental care</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Dental visits every 6 months starting from first visit (by age 1)</li>
            <li>Brush teeth twice daily with a pea-sized amount of fluoride toothpaste (starting at age 2-3)</li>
            <li>Begin flossing when teeth touch each other</li>
            <li>Limit sugary snacks and drinks; no juice at bedtime</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Does not speak in 2-word phrases by 24 months</li>
              <li>Speech is not 50% intelligible to strangers by age 2 or 75% by age 3</li>
              <li>Does not engage in pretend play</li>
              <li>Does not follow 2-step instructions by age 2</li>
              <li>Cannot run or climb by age 2</li>
              <li>Does not show interest in other children</li>
              <li>Does not use pronouns (I, me, you) by age 3</li>
              <li>Cannot copy a circle by age 3</li>
              <li>Loses previously acquired skills at any age</li>
              <li>Extremely rigid about routines (intense distress with any change)</li>
              <li>Self-injurious behavior during tantrums</li>
              <li>No improvement in separation anxiety by age 3</li>
            </ul>
          </div>
        </Section>

        <Section title="Preparing for preschool">
          <p>If your child will start preschool during this period, here are skills to encourage (not require):</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Separating from parents (practice with short separations)</li>
            <li>Following simple group instructions</li>
            <li>Using words to express needs</li>
            <li>Basic self-help: putting on shoes, feeding self, toileting attempts</li>
            <li>Taking turns and sharing with reminders</li>
            <li>Sitting for a short activity (5-10 minutes)</li>
            <li>Playing alongside other children without frequent aggression</li>
          </ul>
          <p className="mt-2">No academic skills are required for preschool entry. The primary goals of preschool at this age are socialization, independence, and play-based learning.</p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 2-3 year period is challenging but remarkable. Your child is becoming a true communicator and social being. The tantrums, the 'no' phase, and the boundary-testing are all signs of a healthy, developing brain learning to navigate the world. Be their guide, not their adversary. Connection and consistency are everything." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/18-24mo" className="text-sm text-primary font-semibold hover:underline">&larr; 18-24 Months</Link>
        <Link href="/milestones" className="text-sm text-primary font-semibold hover:underline">Milestones Tracker &rarr;</Link>
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
