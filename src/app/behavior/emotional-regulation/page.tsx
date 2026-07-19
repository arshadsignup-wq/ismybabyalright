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
  title: 'Teaching Emotional Regulation to Babies & Toddlers',
  description:
    'How children learn to manage big emotions, age-by-age expectations for emotional regulation, and evidence-based strategies parents can use to build emotional intelligence from infancy.',
  alternates: { canonical: '/behavior/emotional-regulation' },
};

const faqItems = [
  {
    question: 'At what age can children regulate their emotions?',
    answer:
      'Emotional self-regulation develops gradually from infancy through early adulthood. Babies rely entirely on caregivers for regulation (co-regulation). By age 2-3, children begin to use simple strategies with help (deep breaths, comfort objects). By age 4-5, they can sometimes manage mild frustration independently. Full emotional regulation is not expected until the late teens or twenties when the prefrontal cortex matures.',
  },
  {
    question: 'What is co-regulation and why does it matter?',
    answer:
      'Co-regulation is when a calm adult helps a distressed child regulate their emotions through their presence, tone of voice, and physical comfort. It is the foundation of all emotional regulation development. Children literally learn to calm themselves by first being calmed by others. Research shows that responsive co-regulation in infancy predicts better self-regulation in later childhood.',
  },
  {
    question: 'Should I let my child cry it out during emotional outbursts?',
    answer:
      'There is a difference between giving space and ignoring. Some children need a moment alone to calm down, and that is okay if they choose it. However, dismissing emotions ("Stop crying, you are fine") or punishing emotional expression teaches children to suppress rather than regulate feelings. Stay nearby, offer comfort, and validate: "You are having a hard time. I am here when you are ready."',
  },
  {
    question: 'How do I teach a 2-year-old to calm down?',
    answer:
      'Two-year-olds cannot calm themselves independently — they need you. In the moment: stay calm yourself, get low and close, speak softly, offer physical comfort. After the storm: name what happened ("You were so frustrated"). Over time: practice calming strategies during calm moments (deep breaths, counting, squeezing a stuffed animal). Read books about feelings. It takes hundreds of repetitions before these become independent skills.',
  },
  {
    question: 'Is it okay for boys to cry?',
    answer:
      'Absolutely. Research consistently shows that suppressing emotions in boys leads to higher rates of aggression, substance abuse, depression, and relationship difficulties in adulthood. All children need to learn that all feelings are acceptable (even though all behaviors are not). Teaching boys to identify and express emotions is protective, not weak.',
  },
];

const takeaways = [
  'Emotional regulation is a learned skill that develops gradually — it is not something children are born with',
  'Co-regulation (a calm adult helping a distressed child) is the foundation of all self-regulation',
  'Children learn emotional management by watching how YOU handle your own emotions',
  'Naming feelings ("You are frustrated") builds emotional vocabulary and is proven to reduce distress intensity',
  'Full self-regulation is not expected until late adolescence — children need decades of practice',
];

export default function EmotionalRegulationPage() {
  const contentSchema = getContentPageSchema({
    name: 'Teaching Emotional Regulation to Babies & Toddlers',
    description:
      'Evidence-based guide to building emotional regulation skills from infancy through early childhood.',
    path: '/behavior/emotional-regulation',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Emotional Regulation' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Emotional Regulation' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Teaching Emotional Regulation to Babies & Toddlers
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          When your toddler melts down over a broken cracker, they are not being dramatic — they genuinely lack the brain wiring to manage that disappointment. Emotional regulation is not something children are born with; it is a skill that develops over years with patient teaching and modeling. Here is how it develops and what you can do at each stage.
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
            How emotional regulation develops
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The brain regions responsible for emotional regulation (primarily the prefrontal cortex) are among the last to fully develop — a process that continues into the mid-twenties. In infancy and toddlerhood, the emotional brain (limbic system) is fully online and producing intense feelings, while the rational brain (prefrontal cortex) that would normally moderate those feelings is barely functional. This mismatch is WHY toddlers have meltdowns over things that seem trivial to adults. The feeling is real and overwhelming — they truly cannot "just calm down."
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Emotional regulation by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">0-6 months: total dependence on caregivers</h3>
              <p>
                Babies have no ability to self-regulate. They rely entirely on caregivers to soothe them through holding, rocking, feeding, and gentle voice. Responsive caregiving at this stage builds the neural pathways that will eventually support self-regulation. This is not spoiling — it is literally building their brain.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">6-12 months: beginning self-soothing</h3>
              <p>
                Babies begin developing primitive self-soothing behaviors: thumb-sucking, stroking a blanket, turning away from overstimulation. They are also learning to trust that distress is temporary because caregivers consistently respond. Attachment security formed now is the foundation of later regulation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">12-24 months: big feelings, few tools</h3>
              <p>
                Toddlers experience the full range of human emotion (frustration, jealousy, fear, excitement) with virtually no regulation tools. They depend on co-regulation — your calm presence helping them through emotional storms. They begin to understand simple feeling words and may seek comfort objects. This is the hardest stage for parents because the emotions are big and the tools are tiny.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years: emerging strategies with heavy support</h3>
              <p>
                Children begin using simple regulation strategies WITH adult guidance: deep breaths (with you modeling), seeking a comfort object, asking for help, brief distraction. Emotional vocabulary is growing. They can begin to name feelings ("I mad!") which research shows reduces the intensity of the emotion. Still need co-regulation for most situations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-5 years: growing independence</h3>
              <p>
                Children can sometimes manage mild frustration independently using practiced strategies. They understand cause and effect ("When I do not get a turn, I feel angry"). They can wait briefly, use words instead of aggression sometimes, and apply learned calming techniques with reminders. Major emotions still overwhelm them and require adult support.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What parents can do at every age
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Model regulation yourself.</strong> Children learn more from watching you manage YOUR emotions than from anything you teach them directly. Narrate your process: "I am feeling frustrated right now. I am going to take three deep breaths to calm my body."
            </p>
            <p>
              <strong className="text-foreground">Name feelings constantly.</strong> Research by Dr. Dan Siegel shows that "naming it to tame it" — putting words to emotions — activates the prefrontal cortex and reduces limbic reactivity. Name your child&apos;s feelings: "You look scared." Name your own: "I feel happy when we play together." Name characters&apos; feelings in books.
            </p>
            <p>
              <strong className="text-foreground">Validate before correcting.</strong> "You are SO angry that he took your toy" must come before "but hitting is not okay." Validation does not mean agreement — it means acknowledging that the feeling is real and understandable.
            </p>
            <p>
              <strong className="text-foreground">Teach strategies during calm moments.</strong> Practice deep breathing when everyone is happy, not in the middle of a meltdown. Use "breathing buddies" (a stuffed animal on the belly that rises and falls), count to 5, squeeze hands together, or do "starfish breathing" (trace fingers while breathing).
            </p>
            <p>
              <strong className="text-foreground">Create a calm-down space.</strong> Not a punishment corner — a cozy area with soft things, a feelings chart, fidget toys, or books about emotions. This gives children a place to go when they feel overwhelmed. Model using it yourself.
            </p>
            <p>
              <strong className="text-foreground">Allow all feelings.</strong> Anger, sadness, jealousy, and frustration are all valid human emotions. The goal is not to eliminate negative feelings but to help children experience and move through them without harmful behaviors.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common mistakes that hinder emotional development
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <ul className="list-disc pl-5 space-y-1">
              <li>Dismissing feelings: "You are fine," "It is not a big deal," "Stop crying"</li>
              <li>Punishing emotional expression: time-out for crying, consequences for anger</li>
              <li>Fixing too quickly: solving every problem before the child can process the feeling</li>
              <li>Gendering emotions: "Boys do not cry," "Be a big girl"</li>
              <li>Expecting adult-level control: "You are 3, you should know better by now"</li>
              <li>Dysregulating yourself: yelling, threatening, or losing control during their meltdowns</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to seek support
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Some children have a harder time with emotional regulation due to temperament, sensory processing differences, or developmental differences. Talk to your pediatrician if your child&apos;s emotional responses are significantly more intense or longer than peers consistently, if they cannot recover from distress even with support, if emotional outbursts are damaging relationships or preventing participation in normal activities, if you notice a sudden change in emotional behavior, or if you are feeling burned out from the constant emotional demands. Early intervention with a child psychologist or occupational therapist can make a significant difference.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Emotional regulation is a learned skill that develops over years and decades, not weeks. Your role is to co-regulate (stay calm while they cannot), name feelings to build vocabulary, validate emotions without enabling harmful behaviors, model healthy coping, and practice strategies during calm moments. Every time you help your child through a big emotion, you are literally building the neural pathways they will use for the rest of their life."
          supportiveMessage="If you struggle to stay calm during your child's meltdowns, you are normal. Regulating another human while managing your own stress is extraordinarily hard. Give yourself grace, repair when you lose your cool, and remember that imperfect is still enough."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
