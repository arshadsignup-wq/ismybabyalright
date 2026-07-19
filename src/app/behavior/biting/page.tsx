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
  title: 'Why Babies & Toddlers Bite and How to Stop It',
  description:
    'Understand why babies and toddlers bite, age-specific reasons behind biting behavior, and evidence-based strategies to respond effectively and prevent future biting.',
  alternates: { canonical: '/behavior/biting' },
};

const faqItems = [
  {
    question: 'Is biting normal for toddlers?',
    answer:
      'Yes, biting is very common and developmentally normal between ages 1 and 3. According to the AAP, up to half of all children in group childcare will be bitten by another child at some point. Biting typically decreases significantly after age 3 as language and social skills develop.',
  },
  {
    question: 'Why does my baby bite while breastfeeding?',
    answer:
      'Babies often bite during breastfeeding when teething, when the milk flow slows, when they are distracted, or at the end of a feeding when they are no longer hungry. If your baby bites, calmly unlatch them, say "no biting," and pause the feeding briefly. This teaches that biting ends the nursing session.',
  },
  {
    question: 'Should I bite my child back to teach them it hurts?',
    answer:
      'No. The AAP and child development experts unanimously advise against biting a child back. This teaches that biting is acceptable behavior for bigger people, models aggression, damages trust, and does not teach alternative behaviors. Instead, use firm redirection and teach replacement behaviors.',
  },
  {
    question: 'My toddler only bites at daycare. What should I do?',
    answer:
      'Biting at daycare often occurs because of the social demands of group settings — sharing toys, close physical proximity, and competition for adult attention. Work with your daycare provider to identify triggers (time of day, specific situations), increase supervision during high-risk times, and ensure consistent responses between home and school.',
  },
  {
    question: 'When should I worry about biting behavior?',
    answer:
      'Consult your pediatrician if biting continues frequently past age 3.5, if your child bites hard enough to consistently break skin, if biting is accompanied by other aggressive behaviors that are escalating, or if your child seems to enjoy causing pain rather than biting from frustration or overwhelm.',
  },
];

const takeaways = [
  'Biting is extremely common in toddlers — it is not a sign of a behavioral disorder or bad parenting',
  'Babies bite for different reasons than toddlers: teething and exploration vs. frustration and communication',
  'The most effective response is brief, calm, and immediate: comfort the bitten child first, then redirect',
  'Teaching replacement behaviors ("Use words" or "Bite this teether instead") is more effective than punishment',
  'Most children stop biting by age 3 to 3.5 as their language catches up with their emotions',
];

export default function BitingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Why Babies & Toddlers Bite and How to Stop It',
    description:
      'Evidence-based guide to understanding and addressing biting behavior in babies and toddlers.',
    path: '/behavior/biting',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Biting' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Biting' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Why Babies & Toddlers Bite and How to Stop It
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Few behaviors alarm parents more than biting. Whether your baby is chomping during breastfeeding or your toddler is biting other children at daycare, understanding why it happens is the first step toward stopping it. Biting is almost always a phase — and an extremely common one.
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
            Why babies bite (under 12 months)
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Teething.</strong> The pressure of biting down provides relief for sore gums. Babies between 4 and 7 months are cutting their first teeth and will bite anything within reach — including you. This is purely physical, not behavioral.
            </p>
            <p>
              <strong className="text-foreground">Oral exploration.</strong> Babies learn about the world through their mouths. Biting an arm, a toy, or a book is how they gather sensory information. This is developmentally appropriate and expected.
            </p>
            <p>
              <strong className="text-foreground">Cause and effect.</strong> Around 8 to 10 months, babies discover that biting produces a reaction. Your yelp or surprised face is fascinating to them. They are not trying to hurt you — they are experimenting with their impact on the world.
            </p>
            <p>
              <strong className="text-foreground">Nursing bites.</strong> Biting during breastfeeding often happens when the milk flow slows, when the baby is done feeding, when teething, or when distracted. It is not intentional aggression.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why toddlers bite (12 months - 3 years)
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Frustration and limited language.</strong> This is the most common reason. Toddlers have strong desires and feelings but lack the vocabulary to express them. When words fail, teeth work. A child who wants a toy another child has may bite because they literally cannot say "Can I have a turn?"
            </p>
            <p>
              <strong className="text-foreground">Overwhelm and overstimulation.</strong> Crowded, noisy, or highly stimulating environments can push toddlers past their coping ability. Biting becomes a release valve for sensory overload.
            </p>
            <p>
              <strong className="text-foreground">Seeking attention.</strong> Even negative attention (scolding, gasps) is attention. If a child has learned that biting gets an immediate, dramatic response, they may repeat it.
            </p>
            <p>
              <strong className="text-foreground">Asserting control.</strong> Toddlers are developing autonomy. When they feel powerless — forced to share, transition, or comply — biting can feel like the only power they have.
            </p>
            <p>
              <strong className="text-foreground">Imitating.</strong> If a child has been bitten by a peer, they may try it themselves. This is not malicious; it is social learning.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to respond when your child bites
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Step 1: Attend to the bitten child first.</strong> This sends a clear message that biting does not get attention. Comfort the hurt child, clean the bite if needed, and model empathy: "Ouch, that hurt. Let me help you."
            </p>
            <p>
              <strong className="text-foreground">Step 2: Address the biter briefly and firmly.</strong> Get down to their level. Use a calm, serious tone: "No biting. Biting hurts." Keep it to 10 words or fewer. Do not yell, lecture, or shame.
            </p>
            <p>
              <strong className="text-foreground">Step 3: Name the feeling and offer an alternative.</strong> "You wanted that toy. You can say &apos;my turn&apos; or come ask me for help." This teaches what TO do instead.
            </p>
            <p>
              <strong className="text-foreground">Step 4: Redirect.</strong> Move your child to a different activity or area. If they seem overwhelmed, offer a calm-down space or sensory tool (a chewy toy, playdough).
            </p>
            <p>
              <strong className="text-foreground">What NOT to do:</strong> Do not bite back, wash their mouth with soap, force an apology (they cannot mean it yet), or isolate them for extended periods. These approaches model aggression, create shame, and do not teach alternatives.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Prevention strategies
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Identify patterns.</strong> Track when biting happens: time of day, setting, who is involved, what happened just before. You will likely find patterns — biting before lunch (hungry), during free play (overstimulated), or with one specific child (conflict).
            </p>
            <p>
              <strong className="text-foreground">Increase supervision during high-risk times.</strong> If you know your child bites when tired, watch closely before nap. Stay within arm&apos;s reach during social play so you can intervene before teeth make contact.
            </p>
            <p>
              <strong className="text-foreground">Teach emotional vocabulary.</strong> Even before full sentences, teach signs or words for "mad," "mine," "help," and "stop." Children who can communicate are less likely to bite.
            </p>
            <p>
              <strong className="text-foreground">Provide appropriate outlets.</strong> Offer teethers, chewy snacks, or a designated "bite toy" for children who seem to need oral sensory input. For frustration, teach stomping feet or squeezing a ball.
            </p>
            <p>
              <strong className="text-foreground">Praise gentle behavior.</strong> When your child touches gently, shares, or uses words instead of biting, notice it: "You asked for a turn! That was great." Positive reinforcement is more powerful than correction.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to seek professional help
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Talk to your pediatrician if biting continues regularly past age 3.5, if your child bites hard enough to consistently break skin, if biting is part of a pattern of escalating aggression, if your child seems to derive pleasure from hurting others (rather than biting from frustration), or if your strategies are not showing improvement after 4 to 6 weeks of consistent implementation. Your pediatrician may refer you to a behavioral specialist or child psychologist who can observe and create a targeted plan.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Biting is one of the most common toddler behaviors and is almost always a phase that resolves as language and emotional skills develop. Respond calmly and consistently: comfort the hurt child first, use brief firm words, teach alternatives, and prevent by identifying triggers. With patience and consistent strategies, most children stop biting by age 3 to 3.5."
          supportiveMessage="If your child is biting, you are not alone and it does not reflect on your parenting. This is one of the most universal toddler behaviors and it will pass with time and consistent guidance."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
