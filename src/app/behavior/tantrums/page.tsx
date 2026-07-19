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
  title: 'Toddler Tantrums: Causes, Prevention & How to Respond',
  description:
    'Evidence-based guide to toddler tantrums. Learn common triggers, prevention strategies, how to handle public meltdowns, and when tantrums may signal something more. Based on AAP guidance.',
  alternates: { canonical: '/behavior/tantrums' },
};

const faqItems = [
  {
    question: 'How long is a normal tantrum?',
    answer:
      'Most tantrums last between 1 and 5 minutes. Tantrums that consistently last longer than 25 minutes or occur more than 5 times per day may warrant discussion with your pediatrician, according to research published in the Journal of Pediatrics.',
  },
  {
    question: 'Should I ignore my toddler during a tantrum?',
    answer:
      'It depends on the type of tantrum. For attention-seeking tantrums (like demanding a toy), calmly ignoring the behavior while staying nearby is effective. For frustration or overwhelm tantrums, your child needs co-regulation — stay close, speak softly, and offer comfort without giving in to unreasonable demands.',
  },
  {
    question: 'Are tantrums in 4 and 5 year olds still normal?',
    answer:
      'Tantrums become less frequent after age 3.5 as language and emotional regulation skills develop. Occasional tantrums at age 4-5 are still normal, especially during transitions or when tired. However, frequent intense tantrums beyond age 4 that include aggression or self-harm should be evaluated by a professional.',
  },
  {
    question: 'Do tantrums mean my child has a behavioral disorder?',
    answer:
      'In the vast majority of cases, no. Tantrums are a normal part of development between ages 1 and 4. Red flags that warrant professional evaluation include: tantrums that consistently last over 25 minutes, self-injury during tantrums, inability to be soothed afterward, or tantrums that increase in frequency after age 3.5.',
  },
  {
    question: 'How do I handle tantrums in public?',
    answer:
      'Move to a quieter area if possible. Stay calm and lower your voice. Acknowledge your child\'s feelings briefly ("I can see you\'re upset"). Do not give in to demands simply because you are in public — this teaches that public tantrums work. If needed, calmly leave the store or situation. Other parents understand; this is a universal experience.',
  },
];

const takeaways = [
  'Tantrums are a normal developmental phase, peaking between ages 1.5 and 3 years',
  'The top triggers are hunger, tiredness, overstimulation, and frustration with limited language skills',
  'Prevention (routine, transitions, choices) is more effective than any in-the-moment strategy',
  'Staying calm yourself is the single most powerful response — children learn regulation by watching you',
  'Most children outgrow frequent tantrums by age 4 as language and coping skills develop',
];

export default function TantrumsPage() {
  const contentSchema = getContentPageSchema({
    name: 'Toddler Tantrums: Causes, Prevention & How to Respond',
    description:
      'Evidence-based guide to toddler tantrums including triggers, prevention, and response strategies.',
    path: '/behavior/tantrums',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Tantrums' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Tantrums' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Toddler Tantrums: Causes, Prevention & How to Respond
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Tantrums are one of the most common and most stressful parts of toddlerhood for parents. The good news: they are completely normal, developmentally expected, and temporary. This guide covers why they happen, how to prevent them, and what to do in the moment.
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
            Why tantrums happen
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Tantrums occur because toddlers have big emotions but lack the brain development and language skills to manage them. The prefrontal cortex — the part of the brain responsible for impulse control, planning, and emotional regulation — does not fully develop until the mid-20s. Between ages 1 and 3, children are developing autonomy and have strong desires but limited ability to communicate or wait. When they hit a wall of frustration, hunger, or overwhelm, a tantrum is the only outlet they have.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common tantrum triggers by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">12-18 months</h3>
              <p>
                At this age, tantrums are primarily caused by frustration with communication. Your child knows what they want but cannot express it. Physical limitations also play a role — wanting to climb, reach, or do something their body is not yet capable of. Separation from caregivers and transitions between activities are also common triggers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">18 months - 2 years</h3>
              <p>
                This is the peak tantrum age. Children are asserting independence ("me do it!") but lack the skills to follow through. They struggle with sharing, waiting, and accepting limits. Hunger and tiredness amplify everything. Changes in routine, such as a new sibling or starting daycare, can increase tantrums significantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years</h3>
              <p>
                Tantrums at this age often involve power struggles and testing boundaries. Children want control over decisions (what to wear, what to eat, when to leave). They also have developing fears and can become overwhelmed by sensory experiences. Tantrums may become more dramatic but should begin decreasing in frequency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-4 years</h3>
              <p>
                By this age, tantrums should be decreasing as language improves. When they occur, they are often triggered by social situations (unfairness, not getting a turn), disappointment, or tiredness. Children this age may also have tantrums when their expectations do not match reality.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Prevention strategies that actually work
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Maintain routines.</strong> Consistent meal times, nap times, and bedtime reduce the biggest physiological triggers (hunger and fatigue). The AAP emphasizes that predictable routines help young children feel secure.
            </p>
            <p>
              <strong className="text-foreground">Give transition warnings.</strong> Say "Five more minutes, then we leave the park" rather than abruptly ending an activity. Use timers for children who respond to visual cues.
            </p>
            <p>
              <strong className="text-foreground">Offer limited choices.</strong> Instead of open-ended questions, give two acceptable options: "Do you want the blue cup or the green cup?" This gives toddlers a sense of control within boundaries.
            </p>
            <p>
              <strong className="text-foreground">Avoid known triggers when possible.</strong> Do not bring a hungry, tired toddler to a store with tempting displays. Plan errands after naps and meals.
            </p>
            <p>
              <strong className="text-foreground">Acknowledge emotions proactively.</strong> Name feelings before they escalate: "I can see you are getting frustrated. This puzzle is tricky." This builds emotional vocabulary and shows understanding.
            </p>
            <p>
              <strong className="text-foreground">Praise positive behavior specifically.</strong> Rather than generic "good job," say "You waited so patiently for your turn. That was hard and you did it."
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to respond during a tantrum
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Stay calm.</strong> This is the hardest and most important step. Your calm presence teaches co-regulation. Take a deep breath. Lower your voice. If you feel yourself escalating, it is okay to step back briefly (while keeping your child safe).
            </p>
            <p>
              <strong className="text-foreground">Ensure safety.</strong> Move your child away from stairs, sharp objects, or traffic. If they are hitting or kicking, gently hold them or move out of range without restraining unnecessarily.
            </p>
            <p>
              <strong className="text-foreground">Do not reason or lecture.</strong> During a tantrum, the emotional brain is in control. Logic is inaccessible. Save discussions for after the storm passes.
            </p>
            <p>
              <strong className="text-foreground">Acknowledge the feeling, hold the limit.</strong> "You are so angry that we cannot have ice cream. I understand. The answer is still no, and I am here with you." This validates without giving in.
            </p>
            <p>
              <strong className="text-foreground">Wait it out.</strong> Most tantrums resolve within 1 to 5 minutes if you do not escalate the situation. Offering comfort (a hug, sitting nearby) is appropriate. Bribing or threatening extends tantrums over time.
            </p>
            <p>
              <strong className="text-foreground">Reconnect afterward.</strong> Once your child is calm, offer a hug and briefly name what happened: "You were upset because you wanted the toy. It is hard to wait. Next time, you can say &apos;I want a turn.&apos;" Keep it short and forward-looking.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Handling tantrums in public
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Public tantrums feel worse than they are. Other parents have been there. The key principles remain the same: stay calm, do not give in to avoid embarrassment, and prioritize your child&apos;s safety. Move to a quieter area if possible — a corner of the store, outside, or to your car. Do not worry about judgment from strangers. If you need to leave, that is okay. You can say calmly, "We are going to the car until you feel better." This is not punishment; it is removing an overwhelming environment. Avoid threats like "If you do not stop, we will never come back" — these are unrealistic and undermine trust.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to talk to your pediatrician
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>While most tantrums are normal, consult your pediatrician if you notice:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tantrums consistently lasting longer than 25 minutes</li>
              <li>More than 5 tantrums per day on most days</li>
              <li>Self-injurious behavior (head-banging, biting themselves, scratching)</li>
              <li>Aggression toward others that does not respond to consistent intervention</li>
              <li>Tantrums increasing in frequency after age 3.5</li>
              <li>Your child cannot be soothed or reconnect after tantrums</li>
              <li>Tantrums accompanied by breath-holding spells lasting more than a minute</li>
              <li>You are feeling overwhelmed and need support (this is a valid reason to seek help)</li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Tantrums are a normal, temporary phase of development that peak between 18 months and 3 years. They happen because toddlers have big emotions and limited skills to manage them. Prevention through routines, transitions, and choices is the most effective approach. When tantrums happen, staying calm, ensuring safety, and holding boundaries with empathy teaches your child that all feelings are acceptable, even when all behaviors are not."
          supportiveMessage="Every parent struggles with tantrums. Having a hard time in this phase does not mean you are doing something wrong — it means you are parenting a toddler. This phase will pass."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
