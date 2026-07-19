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
  title: 'Picky Eating in Toddlers: Causes & Strategies That Work',
  description:
    'Evidence-based guide to picky eating in toddlers. Covers why it happens developmentally, the Division of Responsibility approach, foods to keep offering, and when to worry about growth.',
  alternates: { canonical: '/behavior/picky-eating' },
};

const faqItems = [
  {
    question: 'Is picky eating normal in toddlers?',
    answer:
      'Yes, very. Research shows that picky eating peaks between ages 2 and 6, with up to 50% of toddlers described as picky eaters by their parents. It is developmentally driven by neophobia (fear of new foods), which is believed to be an evolutionary protective mechanism. Most children naturally expand their diet by school age without intervention.',
  },
  {
    question: 'How many times do I need to offer a food before my child will eat it?',
    answer:
      'Research suggests that children may need 10 to 30 exposures to a new food before accepting it. An "exposure" does not mean eating — it includes seeing it on the plate, touching it, smelling it, licking it, or watching someone else eat it. Keep offering without pressure and count every interaction as progress.',
  },
  {
    question: 'Should I hide vegetables in other foods?',
    answer:
      'Sneaking vegetables into smoothies or sauces is fine for nutrition but does not teach your child to accept vegetables. For long-term food acceptance, children need to see, interact with, and eventually choose to eat foods voluntarily. You can do both: sneak for nutrition AND offer visible vegetables without pressure for skill-building.',
  },
  {
    question: 'What if my toddler only wants to eat one food?',
    answer:
      'Food jags (wanting only one food) are common in toddlers and usually last a few days to a few weeks. Continue offering the preferred food alongside other options at every meal without commenting on choices. Most food jags resolve on their own. If your child eats fewer than 20 different foods total or drops foods without adding new ones, consult your pediatrician.',
  },
  {
    question: 'When should I worry about picky eating?',
    answer:
      'Talk to your pediatrician if your child eats fewer than 20 different foods, drops foods from their accepted list without adding new ones, has extreme reactions to certain textures (gagging, vomiting), is not growing along their growth curve, has mealtime behaviors that significantly disrupt family functioning, or has nutritional deficiencies. Some children may benefit from feeding therapy with an occupational therapist or speech-language pathologist.',
  },
];

const takeaways = [
  'Picky eating peaks between ages 2-6 and is developmentally normal — up to 50% of toddlers are described as picky',
  'The Division of Responsibility: parents decide what, when, and where; children decide whether and how much',
  'Children may need 10-30 exposures to a new food before accepting it — keep offering without pressure',
  'Pressure, bribes, and battles at mealtimes make picky eating worse, not better',
  'Most picky eaters grow normally and naturally expand their diet by school age',
];

export default function PickyEatingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Picky Eating in Toddlers: Causes & Strategies That Work',
    description:
      'Evidence-based strategies for managing picky eating in toddlers and young children.',
    path: '/behavior/picky-eating',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Picky Eating' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Picky Eating' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Picky Eating in Toddlers: Causes & Strategies That Work
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          If your toddler who once ate everything is now refusing anything green, living on crackers, or dramatically gagging at new foods — you are not alone. Picky eating is one of the most common and most frustrating toddler behaviors, and it is almost always a normal developmental phase rather than a problem to solve.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'Ellyn Satter Institute']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why picky eating happens
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Neophobia (fear of new foods).</strong> This is an evolutionary survival mechanism. In our ancestral environment, toddlers who wandered away from parents and put unknown things in their mouths were at risk. An innate suspicion of unfamiliar foods protected them. This instinct peaks around age 2 and gradually fades.
            </p>
            <p>
              <strong className="text-foreground">Growth slowdown.</strong> After the rapid growth of infancy, toddlers&apos; growth rate slows dramatically. They genuinely need fewer calories than parents expect. A toddler who ate voraciously as an infant may naturally reduce intake — this is appropriate, not concerning.
            </p>
            <p>
              <strong className="text-foreground">Control and autonomy.</strong> Toddlers are asserting independence in every area. Food is one of the few things they can truly control — you cannot force someone to swallow. Refusing food can be about power as much as preference.
            </p>
            <p>
              <strong className="text-foreground">Sensory sensitivity.</strong> Toddlers experience textures, temperatures, and flavors more intensely than adults. Foods that seem "fine" to you may genuinely feel overwhelming to their developing sensory system. Mixed textures (like soup with chunks) are particularly challenging for many children.
            </p>
            <p>
              <strong className="text-foreground">Routine and predictability needs.</strong> In a world full of changes, familiar foods feel safe. Preferring known foods is a way of maintaining stability — the same reason many toddlers want the same bedtime story every night.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The Division of Responsibility approach
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Developed by dietitian Ellyn Satter and endorsed by many pediatric feeding specialists, the Division of Responsibility (sDOR) is the most researched approach to childhood feeding:
          </p>
          <div className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Parents are responsible for:</strong> WHAT food is served, WHEN meals and snacks happen, and WHERE eating takes place.
            </p>
            <p>
              <strong className="text-foreground">Children are responsible for:</strong> WHETHER they eat and HOW MUCH they eat.
            </p>
            <p className="mt-3">
              This means you serve balanced meals on a predictable schedule, always include at least one food you know your child will eat, and then step back. No begging, bribing, or battling. Your child may eat a lot or a little. They may eat only the bread. That is their job to decide. Over time (weeks, not meals), their intake balances out.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies that help (without pressure)
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Serve meals family-style.</strong> Put food in bowls on the table and let your child serve themselves (with help). This gives them control and makes trying new foods feel like their choice.
            </p>
            <p>
              <strong className="text-foreground">Always include a "safe" food.</strong> At every meal, include at least one food you know your child will eat. This reduces anxiety and ensures they will not go hungry. They can fill up on bread while being exposed to the other foods.
            </p>
            <p>
              <strong className="text-foreground">Make new foods low-pressure.</strong> Put new foods on the table without comment. Do not say "try it" or "just one bite." Let them see you eating it happily. If they ignore it, that is fine. Tomorrow, it appears again.
            </p>
            <p>
              <strong className="text-foreground">Involve them in food preparation.</strong> Children are more likely to try foods they helped prepare. Let them wash lettuce, stir batter, sprinkle cheese, or choose between two vegetables at the store.
            </p>
            <p>
              <strong className="text-foreground">Eat together whenever possible.</strong> Children learn eating behaviors by watching their family. Regular family meals where everyone eats the same food (with at least one child-friendly option) normalize varied eating.
            </p>
            <p>
              <strong className="text-foreground">Maintain structure.</strong> Offer meals and snacks at consistent times (every 2 to 3 hours for toddlers). Avoid grazing, which diminishes appetite at mealtimes. Water between meals, not milk or juice.
            </p>
            <p>
              <strong className="text-foreground">Praise interaction, not eating.</strong> "You touched the broccoli! You smelled it!" is more helpful long-term than "Good job eating your vegetables." The goal is comfort with food, which leads to eventual eating.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What makes picky eating worse
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <ul className="list-disc pl-5 space-y-1">
              <li>Pressure: "Just one bite," "You have to try it," "Finish your plate"</li>
              <li>Bribes: "If you eat your broccoli, you can have dessert" (this teaches broccoli is bad and dessert is the reward)</li>
              <li>Making separate meals: cooking a different meal for your child teaches that they will always get an alternative</li>
              <li>Labeling: "He is my picky one" — children live up to their labels</li>
              <li>Anxiety and tension at mealtimes: stress shuts down appetite</li>
              <li>Unlimited snacks or milk between meals: a child who grazes all day will not be hungry at dinner</li>
              <li>Too many choices: offering 5 options overwhelms; serve 1 meal with a safe food included</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to consult your pediatrician
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>Most picky eating is normal and resolves by school age. Seek evaluation if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your child accepts fewer than 20 different foods total</li>
              <li>They are dropping foods from their repertoire without adding new ones</li>
              <li>Extreme texture sensitivity causing gagging or vomiting with most foods</li>
              <li>Not following their growth curve (falling percentiles)</li>
              <li>Eating only one food group (only carbs, only dairy)</li>
              <li>Mealtime distress that significantly impacts family quality of life</li>
              <li>Your child is in pain when eating (could indicate reflux, allergy, or oral-motor issue)</li>
            </ul>
            <p className="mt-2">
              Your pediatrician may refer to a feeding therapist (occupational therapist or speech-language pathologist) who specializes in pediatric eating. Programs like SOS Approach to Feeding and Food Chaining have strong evidence.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Picky eating is one of the most common toddler behaviors, peaking between ages 2 and 6. It is driven by developmental neophobia, the need for control, and sensory sensitivity — not bad parenting or willfulness. The most effective approach is structured meals with at least one safe food, no pressure, repeated exposure without comment, and trust that your child's appetite will guide them appropriately over time."
          supportiveMessage="It is hard to watch your child refuse the food you prepared. Try to trust the process: keep mealtimes pleasant, keep offering variety, and know that most picky eaters grow normally and eventually expand their diets."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
