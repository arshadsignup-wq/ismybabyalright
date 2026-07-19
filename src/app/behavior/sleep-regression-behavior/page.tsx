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
  title: 'Behavioral Sleep Issues in Babies & Toddlers',
  description:
    'Understanding sleep regressions and behavioral sleep problems by age. Covers bedtime resistance, night waking, early rising, and evidence-based strategies for each stage.',
  alternates: { canonical: '/behavior/sleep-regression-behavior' },
};

const faqItems = [
  {
    question: 'What is a sleep regression?',
    answer:
      'A sleep regression is a period when a baby or toddler who was sleeping well suddenly starts waking more at night, resisting naps, or fighting bedtime. They typically coincide with developmental leaps — when the brain is practicing new skills (rolling, standing, language), it can disrupt sleep patterns. Common regression ages are 4 months, 8-10 months, 12 months, 18 months, and 2 years.',
  },
  {
    question: 'How long do sleep regressions last?',
    answer:
      'Most sleep regressions last 2 to 6 weeks. The 4-month regression is unique because it represents a permanent change in sleep architecture (transitioning from newborn sleep to adult-like sleep cycles) and may require adjustment of sleep habits. Other regressions are temporary disruptions that resolve as the child masters the developmental skill causing them.',
  },
  {
    question: 'Should I change my approach during a sleep regression?',
    answer:
      'Try to maintain your existing sleep routines and habits as consistently as possible. Adding new sleep associations (rocking back to sleep, bringing them to your bed) during a regression can create habits that persist after the regression ends. Offer extra comfort and reassurance during the day, but keep nighttime responses consistent.',
  },
  {
    question: 'My toddler suddenly refuses to go to bed. What is happening?',
    answer:
      'Bedtime resistance in toddlers (18 months - 3 years) is very common and usually driven by: growing autonomy and desire for control, separation anxiety, fear of the dark or being alone, overtiredness (paradoxically makes it harder to fall asleep), or understimulation/undertiredness from nap transitions. The solution depends on the cause.',
  },
  {
    question: 'Is sleep training harmful to my baby?',
    answer:
      'Research published in Pediatrics found no long-term adverse effects on parent-child attachment, child behavior, or emotional development from graduated extinction ("Ferber") or camping out methods when used after 6 months of age. The AAP states that behavioral sleep interventions are effective and do not cause harm. However, sleep training is a personal choice and not required.',
  },
];

const takeaways = [
  'Sleep regressions are temporary disruptions tied to developmental leaps and typically last 2-6 weeks',
  'The most common regression ages are 4 months, 8-10 months, 12 months, 18 months, and 2 years',
  'Maintaining consistent sleep routines during regressions prevents creating new problematic habits',
  'Bedtime resistance in toddlers is usually about control, separation anxiety, or overtiredness',
  'Research shows that evidence-based sleep training methods (after 6 months) do not harm attachment',
];

export default function SleepRegressionBehaviorPage() {
  const contentSchema = getContentPageSchema({
    name: 'Behavioral Sleep Issues in Babies & Toddlers',
    description:
      'Understanding and addressing sleep regressions and behavioral sleep problems by developmental stage.',
    path: '/behavior/sleep-regression-behavior',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Sleep Regression & Behavior' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Sleep Regression & Behavior' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Behavioral Sleep Issues in Babies & Toddlers
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Your baby was finally sleeping through the night — and now they are not. Or your toddler who used to go to bed easily is suddenly fighting bedtime for an hour. Sleep regressions and behavioral sleep issues are among the most exhausting challenges parents face. Here is what is happening developmentally and what you can do about it.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'NSF']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sleep regressions by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">4 months: the big sleep architecture shift</h3>
              <p>
                This is the most significant regression because it represents a permanent change. Your baby&apos;s sleep cycles mature from newborn patterns (2 stages) to adult-like patterns (4-5 stages). They now cycle through light and deep sleep like adults — and wake briefly between cycles. If they were rocked or fed to sleep, they notice at these wake points that conditions have changed and cry. This regression does not "pass" in the same way — it requires adaptation to the new sleep reality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">8-10 months: motor skills and separation anxiety</h3>
              <p>
                Babies are learning to crawl, pull to stand, and cruise. Their brains practice these skills during sleep, causing wake-ups. Separation anxiety also peaks around this time, making them more distressed when they wake and you are not there. Object permanence means they know you exist somewhere else and want you. This regression typically lasts 3 to 6 weeks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">12 months: walking and nap transitions</h3>
              <p>
                Learning to walk is cognitively consuming. Many babies practice standing in their cribs at night. This also coincides with the transition from two naps to one, which can temporarily disrupt nighttime sleep. Resist dropping to one nap too early — most babies are not ready until 13 to 15 months.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">18 months: language explosion and independence</h3>
              <p>
                A language explosion combines with growing independence and stronger will. Toddlers may refuse to go to bed ("No! Play!"), climb out of cribs, or scream at bedtime. Separation anxiety may resurge. Teething (molars) and nap transitions can add to the disruption. This regression can feel particularly challenging because your toddler is now vocally protesting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2 years: fears, imagination, and transitions</h3>
              <p>
                Imagination develops, bringing fears of the dark, monsters, and shadows. Potty training, new siblings, or transitioning to a big bed can all disrupt sleep. Toddlers may also simply learn that getting out of bed is possible and interesting. Nightmares may begin appearing at this age.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Bedtime resistance: causes and solutions
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Overtiredness.</strong> Paradoxically, an overtired child is harder to get to sleep. Cortisol rises when children pass their sleep window, creating a "wired" state. Solution: move bedtime earlier by 15-30 minutes if your child is consistently fighting sleep.
            </p>
            <p>
              <strong className="text-foreground">Undertiredness.</strong> If nap timing or length is wrong, your child may simply not be tired enough at bedtime. Solution: evaluate nap schedule — it may be time to shorten or drop a nap.
            </p>
            <p>
              <strong className="text-foreground">Need for control.</strong> Toddlers want to make decisions. Solution: offer limited choices within the bedtime routine: "Do you want the blue pajamas or the green ones? Which two books shall we read?"
            </p>
            <p>
              <strong className="text-foreground">Separation anxiety.</strong> Being alone in the dark can feel scary. Solution: add a brief check-in after lights out, offer a lovey or nightlight, and use a consistent phrase: "I will check on you in two minutes."
            </p>
            <p>
              <strong className="text-foreground">Inconsistent boundaries.</strong> If "one more book" sometimes becomes three more books, your child will always ask. Solution: set clear, consistent limits for the bedtime routine and hold them every night.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Night waking strategies
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Wait before responding.</strong> Give your child 2 to 5 minutes to resettle before intervening. Many children fuss briefly between sleep cycles and fall back asleep without help if given the chance.
            </p>
            <p>
              <strong className="text-foreground">Keep interactions boring.</strong> When you do go in, keep the room dark, speak minimally and in a monotone, and avoid stimulating activities. The goal is to communicate "it is still sleep time" without engaging their alert brain.
            </p>
            <p>
              <strong className="text-foreground">Be consistent.</strong> If you sometimes bring them to your bed and sometimes settle them back in the crib, they will keep waking to see what happens. Consistency (whatever you choose) reduces wake-ups faster than any specific method.
            </p>
            <p>
              <strong className="text-foreground">Rule out physical causes.</strong> Before assuming behavioral causes, check for teething pain, illness, hunger, room temperature issues, or wet diapers.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to talk to your pediatrician
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Most behavioral sleep issues resolve with consistent strategies within 2 to 4 weeks. Consult your pediatrician if your child snores loudly, gasps, or pauses breathing during sleep (possible sleep apnea), if sleep disruption has lasted more than 6 weeks without improvement, if your child seems excessively sleepy during the day despite adequate nighttime sleep opportunity, if you are concerned about night terrors (different from nightmares), or if sleep deprivation is affecting your own mental health or ability to function safely.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Sleep regressions are temporary disruptions tied to developmental leaps. They typically last 2 to 6 weeks and resolve as the new skill is mastered. The most important thing you can do is maintain consistent sleep routines and avoid creating new habits (like bed-sharing or motion sleep) that you will need to undo later. Consistency — whatever approach you choose — is more important than the specific method."
          supportiveMessage="Sleep deprivation is truly exhausting and can affect your mental health. If you are struggling, ask for help. Tag-team with a partner, call in family, or talk to your pediatrician. You cannot pour from an empty cup."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
