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
  title: 'Teaching Sharing & Turn-Taking: Age-by-Age Guide',
  description:
    'When can children actually share? Evidence-based guide to teaching sharing and turn-taking by developmental stage. Covers realistic expectations and practical strategies that work.',
  alternates: { canonical: '/behavior/sharing' },
};

const faqItems = [
  {
    question: 'At what age can children truly share?',
    answer:
      'True voluntary sharing (understanding and accepting that another person will use something that belongs to you) does not develop reliably until age 3.5 to 4 years. Before this, children lack the cognitive development to understand another person\'s perspective. Forced sharing before this age does not teach sharing — it teaches that adults will take their things away.',
  },
  {
    question: 'Should I force my toddler to share?',
    answer:
      'Child development experts generally recommend against forced sharing for children under 3. Instead, teach turn-taking ("When you are done, it will be her turn"), model sharing yourself, and allow children to finish with a toy before passing it along. Forced sharing can actually increase possessiveness rather than generosity.',
  },
  {
    question: 'My child shares at school but not at home. Is this normal?',
    answer:
      'Very normal. Children often perform social expectations in structured settings (where rules are clear and adults enforce them) but relax at home where they feel safe to express their true preferences. Home is also where their most prized possessions live. This is not hypocrisy — it shows your child CAN share when motivated, which is progress.',
  },
  {
    question: 'How do I handle it when another child will not share with mine?',
    answer:
      'This is a teaching moment for frustration tolerance. Validate your child\'s feelings ("You really wanted a turn. That is frustrating."), help them practice patience or find an alternative, and avoid shaming the other child. You can model asking: "Can we have a turn when you are finished?" The other child has the right to say no.',
  },
  {
    question: 'Is it okay to let my child have some toys they do not have to share?',
    answer:
      'Absolutely. Even adults have possessions they do not share. Before a playdate, let your child put away 2-3 special items that are "just theirs." This actually makes sharing other toys easier because they feel their boundaries are respected. Teach them that shared toys stay out and special toys can be put away.',
  },
];

const takeaways = [
  'True sharing requires perspective-taking skills that do not develop until approximately age 3.5-4',
  'Turn-taking ("When you are done, she can have a turn") is more developmentally appropriate than forced sharing for toddlers',
  'Modeling sharing yourself is the most powerful teaching tool',
  'Allowing children to keep some special items private actually increases willingness to share other things',
  'Praise specific generous acts when they happen naturally rather than forcing sharing',
];

export default function SharingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Teaching Sharing & Turn-Taking: Age-by-Age Guide',
    description:
      'Evidence-based guide to teaching sharing and turn-taking by developmental stage.',
    path: '/behavior/sharing',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Sharing' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Sharing' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Teaching Sharing & Turn-Taking: Age-by-Age Guide
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          "Share!" is probably one of the most-repeated words at playgrounds and playdates. But can toddlers actually share? The developmental research has surprising answers — and practical strategies that work much better than forcing children to hand over their toys.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'Zero to Three']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why sharing is so hard for young children
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Sharing requires several cognitive abilities that develop slowly: theory of mind (understanding that others have different feelings and desires), impulse control (overriding the desire to keep something), future thinking (believing the toy will come back), and empathy (caring about another person&apos;s happiness). None of these are fully developed before age 3.5 to 4. When we force a 2-year-old to share, we are asking them to do something their brain literally cannot comprehend yet — like asking them to do algebra.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sharing development by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Under 2 years: parallel play, no sharing expected</h3>
              <p>
                Children this age play alongside other children but not with them. They do not understand ownership in a complex way — everything they see is "mine" because they cannot yet separate their desires from reality. Sharing is not a realistic expectation. Focus on: taking turns with a caregiver (rolling a ball back and forth), offering food or toys to you (celebrate this!), and reducing conflict by having duplicates of popular toys at playdates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years: beginning turn-taking with support</h3>
              <p>
                Children begin to understand "mine" vs. "yours" but struggle to act on it. They can learn turn-taking with adult facilitation: "You can use the shovel for two more minutes, then it is her turn." Use timers to make waiting concrete. Praise any voluntary generosity without making it obligatory. Begin using the language of turns: "first you, then me."
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-4 years: emerging sharing with coaching</h3>
              <p>
                Theory of mind begins developing — children start understanding that others have feelings. They can share with coaching and reminders, especially with friends they are motivated to please. Sharing is still inconsistent and depends heavily on mood, tiredness, and the desirability of the object. This is the age where "Would you like to trade?" becomes a powerful tool.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">4-5 years: voluntary sharing emerges</h3>
              <p>
                Children can now genuinely understand fairness, take turns without adult intervention (most of the time), and feel good about being generous. They understand that sharing maintains friendships. Sharing is still situational — they may share freely with best friends but not with strangers — and that is completely normal and appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies that actually teach sharing
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Model it constantly.</strong> "Would you like some of my apple? I am going to share with you." "I am going to let Daddy use my phone to look something up." Children learn sharing by watching you do it hundreds of times.
            </p>
            <p>
              <strong className="text-foreground">Use turn-taking instead of forced sharing.</strong> "When you are finished with the truck, it will be her turn." This respects the child&apos;s current use while teaching patience and fairness. The child finishes when THEY are ready, not when an adult decides.
            </p>
            <p>
              <strong className="text-foreground">Use a timer for turn-taking.</strong> Set a 2-3 minute timer. When it beeps, it is the other child&apos;s turn. The timer is the "bad guy," not the parent, which reduces conflict.
            </p>
            <p>
              <strong className="text-foreground">Praise generosity when it happens naturally.</strong> "You gave her a cracker! That was so generous. Look how happy she is." Connect the act to the positive feeling it creates.
            </p>
            <p>
              <strong className="text-foreground">Teach trading.</strong> "You want the blue car and she has it. What could you offer her in trade?" This teaches negotiation — a lifelong skill.
            </p>
            <p>
              <strong className="text-foreground">Allow some protected possessions.</strong> Before playdates, let your child put away 2-3 special items. This respects their boundaries and paradoxically makes them more willing to share other things.
            </p>
            <p>
              <strong className="text-foreground">Read books about sharing.</strong> Stories help children understand social situations from a safe distance. Discuss characters&apos; feelings and choices.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What NOT to do
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not rip toys from your child&apos;s hands and give them to another child — this models taking, not sharing</li>
              <li>Do not shame ("You are being selfish") — shame shuts down learning</li>
              <li>Do not force an apology — insincere apologies teach dishonesty, not empathy</li>
              <li>Do not always intervene — sometimes children need to work it out with supervision</li>
              <li>Do not compare siblings ("Your sister always shares") — comparison breeds resentment</li>
              <li>Do not expect consistency — sharing is a skill that develops gradually over years</li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Sharing is a complex social skill that develops gradually between ages 2 and 5. True voluntary sharing requires perspective-taking, impulse control, and empathy — abilities that are still under construction in toddlers. Turn-taking, modeling, and praising natural generosity are far more effective than forced sharing. Be patient with this developmental process and trust that with consistent modeling, your child will learn to share genuinely."
          supportiveMessage="If your toddler will not share, they are not selfish — they are developmentally normal. Your patient teaching now is building the foundation for genuine generosity later."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
