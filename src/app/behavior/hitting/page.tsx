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
  title: 'Toddler Hitting & Aggression: Why It Happens & What to Do',
  description:
    'Why toddlers hit, push, and show aggression, and evidence-based strategies to respond. Covers age-specific causes, prevention, and when hitting may need professional support.',
  alternates: { canonical: '/behavior/hitting' },
};

const faqItems = [
  {
    question: 'Is it normal for a 2-year-old to hit?',
    answer:
      'Yes, hitting is very common and developmentally normal at age 2. Toddlers have limited impulse control and language skills. According to research, physical aggression peaks between 18 months and 3 years and then gradually declines as children develop verbal skills and self-regulation. Consistent, calm responses help children learn alternatives.',
  },
  {
    question: 'Why does my toddler hit me but no one else?',
    answer:
      'Children often hit parents because they feel safest with you. You are their primary attachment figure, which means they express their biggest emotions with you. They trust that you will not stop loving them even when they behave badly. This is actually a sign of secure attachment, even though it is frustrating to experience.',
  },
  {
    question: 'Should I spank my child for hitting?',
    answer:
      'The AAP strongly recommends against spanking and all forms of physical punishment. Research consistently shows that spanking increases aggression, damages the parent-child relationship, and does not teach self-regulation. Children learn "hitting is wrong" more effectively from adults who model non-violent problem solving.',
  },
  {
    question: 'My toddler hits when excited, not angry. Is this different?',
    answer:
      'Yes, this is common and somewhat different. Some toddlers hit or flap when experiencing any intense emotion, including joy and excitement. Their bodies are flooded with energy they cannot control. The response is similar — gently catch their hand and redirect: "You are so excited! High five instead!" or "Let us jump to show we are happy!"',
  },
  {
    question: 'When does toddler hitting become a concern?',
    answer:
      'Consult your pediatrician if hitting is frequent and intense past age 4, if your child shows no remorse or empathy development, if hitting is accompanied by other concerning behaviors (cruelty to animals, deliberate destruction), if your child was previously gentle and aggression appeared suddenly, or if consistent strategies show no improvement over 6 to 8 weeks.',
  },
];

const takeaways = [
  'Physical aggression peaks between 18 months and 3 years — this is normal brain development, not a character flaw',
  'Toddlers hit because they lack impulse control, not because they intend harm',
  'The AAP recommends against physical punishment as it increases rather than decreases aggression',
  'Consistent calm responses, teaching alternatives, and preventing triggers are the most effective strategies',
  'Most children show significant improvement by age 3.5 to 4 as verbal skills develop',
];

export default function HittingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Toddler Hitting & Aggression: Why It Happens & What to Do',
    description:
      'Evidence-based guide to understanding and responding to toddler hitting and physical aggression.',
    path: '/behavior/hitting',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Hitting' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Hitting' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Toddler Hitting & Aggression: Why It Happens & What to Do
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          When your toddler hits you, another child, or a sibling, it can feel alarming and discouraging. The truth is that physical aggression is one of the most common toddler behaviors — and one that responds well to consistent, calm intervention. Here is what the research says about why it happens and what actually works.
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
            Why toddlers hit: the developmental explanation
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Hitting in toddlers is not about intent to harm. The prefrontal cortex — responsible for impulse control, empathy, and rational decision-making — is one of the last brain regions to mature. Between ages 1 and 3, children experience intense emotions but have virtually no ability to pause between feeling and action. When frustrated, overwhelmed, or excited, the impulse to strike is faster than any learned behavior can override. Research published in the journal Child Development found that physical aggression peaks around age 2 and declines steadily through ages 3 to 5 as language and executive function skills develop.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common reasons toddlers hit
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Frustration.</strong> They cannot get a toy to work, cannot communicate what they want, or are told "no" to something they desperately want. Hitting is an overflow of frustration when words are unavailable.
            </p>
            <p>
              <strong className="text-foreground">Testing limits.</strong> Toddlers need to learn where boundaries are. Hitting and watching your reaction is one way they map social rules. This is exhausting but normal.
            </p>
            <p>
              <strong className="text-foreground">Seeking attention.</strong> Even a scolding is attention. If calm, positive behavior goes unnoticed but hitting gets an immediate dramatic response, a child may choose the behavior that works.
            </p>
            <p>
              <strong className="text-foreground">Overwhelm or overstimulation.</strong> Too much noise, too many people, too many demands. The body goes into fight-or-flight, and for toddlers, fight often looks like hitting.
            </p>
            <p>
              <strong className="text-foreground">Modeling.</strong> Children who witness hitting (including spanking, rough sibling play, or media violence) are more likely to hit. They learn that physical force is a way to solve problems.
            </p>
            <p>
              <strong className="text-foreground">Excitement or sensory seeking.</strong> Some children hit when happy, not angry. Their bodies are flooded with energy and they lack the motor planning to express it appropriately.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to respond when your toddler hits
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Stay calm and serious.</strong> Do not yell, laugh, or show shock. A neutral, firm tone is most effective: lower your body to their level and make eye contact.
            </p>
            <p>
              <strong className="text-foreground">Set a clear, brief limit.</strong> "I will not let you hit. Hitting hurts." Use 10 words or fewer. No lectures — they cannot process them in this state.
            </p>
            <p>
              <strong className="text-foreground">Physically prevent if needed.</strong> Gently hold their hands or move away. "I am going to hold your hands to keep everyone safe." This is not punishment — it is protection.
            </p>
            <p>
              <strong className="text-foreground">Name the feeling.</strong> "You are so frustrated that he took your truck." This builds emotional vocabulary and shows you understand WHY even though the behavior is not acceptable.
            </p>
            <p>
              <strong className="text-foreground">Offer alternatives.</strong> "You can stomp your feet when you are mad. You can hit this pillow. You can say &apos;I am angry!&apos;" Give them a physical and verbal outlet.
            </p>
            <p>
              <strong className="text-foreground">Follow through consistently.</strong> If your child hits during play, calmly end the play session briefly: "Hitting means we take a break. We can try again in two minutes." Be consistent every single time.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Prevention: reducing hitting before it happens
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Notice and praise gentle behavior.</strong> "You touched the baby so gently. That was kind." Catch them being good far more often than you correct them being aggressive.
            </p>
            <p>
              <strong className="text-foreground">Teach feeling words early.</strong> Use picture books, name emotions throughout the day, and model: "I am feeling frustrated right now. I am going to take a deep breath."
            </p>
            <p>
              <strong className="text-foreground">Provide physical outlets.</strong> Running, climbing, jumping, rough-housing with a willing adult, dancing — children with high energy need ways to use their bodies.
            </p>
            <p>
              <strong className="text-foreground">Supervise closely during triggers.</strong> If you know your child hits when tired, hungry, or in crowded settings, stay close and intervene before contact happens.
            </p>
            <p>
              <strong className="text-foreground">Limit exposure to media violence.</strong> The AAP advises avoiding violent content, as children under 5 have difficulty distinguishing fantasy from reality and may imitate what they see.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Age-specific expectations
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">12-18 months</h3>
              <p>Hitting is purely impulsive at this age. The child has zero ability to stop themselves. Gentle physical redirection and simple words ("Gentle hands") are appropriate. Do not expect them to remember or generalize yet.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">18 months - 2.5 years</h3>
              <p>Peak aggression period. Children are beginning to understand rules but cannot consistently follow them. Be patient, consistent, and repetitive. You may need to intervene dozens or hundreds of times before the lesson sticks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2.5-4 years</h3>
              <p>Gradual improvement as language develops. Children can start to use words instead of hands with coaching. Natural consequences become more effective: "If you hit, your friend will not want to play."</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">4+ years</h3>
              <p>Hitting should be infrequent. Children at this age can understand rules, use words, and demonstrate empathy. If hitting remains frequent and intense past age 4, consult your pediatrician.</p>
            </div>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Toddler hitting is one of the most common developmental behaviors between ages 1 and 3. It happens because impulse control has not yet developed, not because your child is aggressive or poorly raised. Respond consistently with calm limits, teach alternatives, prevent triggers, and model non-violent conflict resolution. The behavior will decrease as language and executive function mature."
          supportiveMessage="Your child hitting does not mean you have failed as a parent. It means their brain is still developing. With your patient, consistent guidance, they are learning — even when it does not feel like it."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
