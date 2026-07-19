import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Potty Training: Readiness Signs, Methods & Timelines',
  description:
    'Evidence-based potty training guide covering readiness signs, popular methods compared, handling setbacks, and realistic timelines. Based on AAP recommendations for when and how to start.',
  alternates: { canonical: '/behavior/potty-training' },
};

const faqItems = [
  {
    question: 'What age should potty training start?',
    answer:
      'The AAP states that most children are not ready to begin potty training until 18 to 24 months at the earliest, with many not ready until 2.5 to 3 years. Starting before readiness signs appear does not speed up the process — it can actually prolong it. The average age of completion in the US is around 3 years for daytime and 4-5 years for nighttime dryness.',
  },
  {
    question: 'How long does potty training take?',
    answer:
      'This varies enormously. Some children are trained in 3 to 7 days with an intensive method. Others take 3 to 6 months of gradual introduction. The research shows that readiness (not the method) is the strongest predictor of speed. Children who show clear readiness signs typically train faster regardless of the specific approach used.',
  },
  {
    question: 'Should I use pull-ups or go straight to underwear?',
    answer:
      'Both approaches have supporters. Going straight to underwear creates a strong sensation when wet, which may speed awareness. Pull-ups are convenient for outings and naps but may feel too much like diapers for some children. A common approach: underwear at home, pull-ups for outings and sleep. There is no single "right" answer — observe what motivates your child.',
  },
  {
    question: 'My child was trained and is now having accidents again. What happened?',
    answer:
      'Regression is very common and usually triggered by stress or change: new sibling, starting school, moving, illness, or any disruption to routine. Physical causes (urinary tract infection, constipation) should also be considered. Respond calmly without punishment — shame worsens regression. Return to basics, increase bathroom reminders, and address the underlying stressor.',
  },
  {
    question: 'Is nighttime dryness separate from daytime training?',
    answer:
      'Yes. Nighttime dryness depends on physical maturation (hormonal signals that reduce urine production during sleep and bladder capacity) and is not something children can be trained to do. Many children are dry during the day at 3 but not overnight until 5, 6, or even 7 years. Bedwetting before age 7 is considered normal by the AAP and does not require treatment.',
  },
];

const takeaways = [
  'Readiness signs (not age) should determine when to start — most children are ready between 2 and 3 years',
  'The AAP emphasizes a child-oriented approach: follow your child\'s cues rather than a rigid timeline',
  'Starting before readiness does not accelerate the process — it often prolongs it and creates frustration',
  'Nighttime dryness is physiologically separate from daytime training and may not come until age 5-7',
  'Regression after success is common and usually temporary, especially during transitions',
];

export default function PottyTrainingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Potty Training: Readiness Signs, Methods & Timelines',
    description:
      'Evidence-based guide to potty training readiness, methods, and managing setbacks.',
    path: '/behavior/potty-training',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Potty Training' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Potty Training' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Potty Training: Readiness Signs, Methods & Timelines
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Potty training is one of the most anticipated and most stressful milestones of toddlerhood. The pressure from family, daycare requirements, and social comparison can make parents feel like they are behind. The evidence is clear: readiness matters more than age, and a patient approach leads to faster, more lasting results than a pressured one.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Readiness signs to watch for
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>The AAP identifies these indicators that a child may be ready to begin potty training:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Staying dry for 2 or more hours at a time, or waking dry from naps</li>
              <li>Showing awareness of wet or soiled diapers (pulling at them, asking to be changed)</li>
              <li>Predictable bowel movement schedule</li>
              <li>Ability to walk to and sit on a toilet or potty</li>
              <li>Can pull pants up and down</li>
              <li>Shows interest in the toilet, watching others, or wearing underwear</li>
              <li>Can follow simple instructions</li>
              <li>Uses words or gestures to communicate bodily needs</li>
              <li>Shows desire for independence ("me do it!")</li>
            </ul>
            <p className="mt-2">
              Your child does not need ALL of these signs, but showing several suggests readiness. Emotional readiness is equally important — if your child is going through a period of high stress or opposition, waiting a few weeks may be wise.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Popular potty training methods compared
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Child-oriented approach (AAP recommended)</h3>
              <p>
                Follow the child&apos;s cues. Introduce the potty without pressure. Let them sit on it clothed, then naked. Celebrate success without punishing failure. This approach takes longer initially but has fewer power struggles and less regression. It respects the child&apos;s autonomy and developmental timeline.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Three-day intensive method</h3>
              <p>
                Dedicate three days at home with no diapers. Watch for cues constantly, rush to the potty at every signal, celebrate successes enthusiastically. This method works best for children who show clear readiness signs and are past 2.5 years. It requires full parental attention for 3 days and may not work on the first attempt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Timed interval approach</h3>
              <p>
                Place the child on the potty at regular intervals (every 30-60 minutes initially). Gradually increase intervals as they show awareness. This approach is common in daycare settings and works well for children who do not yet recognize body signals reliably but are otherwise ready.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Practical tips for success
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Choose the right timing.</strong> Do not start during major transitions (new baby, moving, starting daycare, illness). Pick a calm period when you can be consistent for at least 2 weeks.
            </p>
            <p>
              <strong className="text-foreground">Make the potty accessible and non-threatening.</strong> Let your child choose their potty. Let them sit on it clothed. Read books about using the potty. Remove the pressure completely.
            </p>
            <p>
              <strong className="text-foreground">Use positive reinforcement.</strong> Celebrate successes with specific praise ("You listened to your body and got to the potty!"), stickers, or a small reward chart. Avoid candy rewards that must escalate.
            </p>
            <p>
              <strong className="text-foreground">Never punish accidents.</strong> Shame and punishment create anxiety around toileting, which can cause withholding (leading to constipation) and actually prolong the process. Say calmly: "Oops, pee goes in the potty. Let us clean up. You will get it next time."
            </p>
            <p>
              <strong className="text-foreground">Dress for success.</strong> Elastic-waist pants that can be pulled down quickly. No overalls, belts, or complicated clothing during training.
            </p>
            <p>
              <strong className="text-foreground">Address constipation first.</strong> If your child is constipated, potty training will be much harder because bowel movements will be painful. Talk to your pediatrician about stool softeners if needed before beginning training.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Handling setbacks and regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Regression after initial success is normal. Common triggers include a new sibling, starting school, illness, constipation, or any routine change. When regression happens: stay calm and avoid punishment, return to more frequent potty reminders, check for physical causes (UTI, constipation), address the underlying stressor if possible, and consider whether your child needs a brief break. If your child shows active resistance (screaming, withholding stool, hiding to poop), take a full break for 2 to 4 weeks and restart when they are calmer. Pushing through resistance creates power struggles that can extend the process by months.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to talk to your pediatrician
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>Consult your child&apos;s doctor if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your child is over 4 and showing no progress with consistent effort</li>
              <li>They are actively withholding stool (which can cause encopresis)</li>
              <li>Daytime wetting persists past age 5-6</li>
              <li>Previously trained child has sudden regression with no obvious cause</li>
              <li>You see signs of UTI (pain, frequency, blood in urine)</li>
              <li>Severe constipation is present</li>
              <li>Your child shows extreme fear or anxiety about the toilet</li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Potty training success depends far more on readiness than on method or age. Watch for readiness signs, choose an approach that matches your child's temperament, never punish accidents, and be prepared for some regression along the way. Most children achieve daytime dryness between 2.5 and 3.5 years, with nighttime dryness following months or years later. There is a wide range of normal."
          supportiveMessage="If your child is not training as quickly as others, there is nothing wrong with them or with you. Every child has their own timeline. The less pressure you put on the process, the smoother it typically goes."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
