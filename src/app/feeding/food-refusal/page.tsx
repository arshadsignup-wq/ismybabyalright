import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import LastReviewed from "@/components/shared/LastReviewed";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from "@/components/shared/BottomLine";
import {
  getBreadcrumbSchema,
  getContentPageSchema,
  getFAQPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Food Refusal & Picky Eating: What Actually Works",
  description:
    "Evidence-based strategies for baby and toddler food refusal, picky eating, and mealtime battles. Learn why babies refuse food, when it is normal, and proven techniques from feeding therapists to expand your child's diet.",
  alternates: { canonical: "/feeding/food-refusal" },
  openGraph: {
    title: "Baby Food Refusal & Picky Eating: What Actually Works",
    description:
      "Practical strategies for dealing with picky eating and food refusal in babies and toddlers.",
  },
};

const faqItems = [
  {
    question: "Is it normal for my baby to refuse food?",
    answer:
      "Yes, food refusal is very common and usually normal. Babies may refuse food because they are not hungry, teething, ill, tired, distracted, or going through a normal developmental phase. Neophobia (fear of new foods) peaks between 18-24 months and is an evolutionary protective mechanism. Most children outgrow extreme pickiness by age 5-6.",
  },
  {
    question: "How many times do I need to offer a food before my baby accepts it?",
    answer:
      "Research shows it can take 10-15 (sometimes up to 30) exposures to a new food before a baby or toddler accepts it. An 'exposure' includes seeing, touching, smelling, licking, and tasting - not just eating. Continue offering rejected foods without pressure. Many parents give up after 3-5 tries, which is too soon.",
  },
  {
    question: "Should I hide vegetables in other foods?",
    answer:
      "Sneaking vegetables into foods can help with nutrition in the short term, but it does not teach your child to enjoy those foods. A better long-term strategy is to serve vegetables openly alongside accepted foods, without pressure. You can also serve them in different preparations - a child who rejects steamed broccoli may love roasted broccoli.",
  },
  {
    question: "When should I worry about picky eating?",
    answer:
      "Consult your pediatrician if your child eats fewer than 20 foods, drops foods from their diet without accepting new ones, gags or vomits at the sight/smell of food, has not grown as expected, shows extreme distress at mealtimes, or if meals consistently take more than 30 minutes. These may signal ARFID or a sensory processing issue that benefits from feeding therapy.",
  },
  {
    question: "Does my toddler need vitamins if they are a picky eater?",
    answer:
      "Many pediatricians recommend a multivitamin with iron for toddlers who eat a limited diet. However, a supplement does not replace the goal of expanding the diet. Talk to your pediatrician about whether your child's specific eating pattern warrants supplementation, particularly for iron, zinc, and vitamin D.",
  },
];

const takeaways = [
  "Food refusal is normal - it can take 10-15+ exposures before a baby accepts a new food. Do not give up after a few tries.",
  "The Division of Responsibility (Ellyn Satter model): parents decide what, when, and where; the child decides whether and how much to eat.",
  "Never force, bribe, or punish around food - this creates negative associations and makes picky eating worse long-term.",
  "Neophobia (fear of new foods) peaks between 18-24 months and is a normal developmental phase, not a failure of parenting.",
  "Seek help if your child eats fewer than 20 foods, is losing foods without gaining new ones, or is not growing well.",
];

export default function FoodRefusalPage() {
  const contentSchema = getContentPageSchema({
    name: "Baby Food Refusal & Picky Eating: What Actually Works",
    description:
      "Evidence-based strategies for food refusal and picky eating in babies and toddlers.",
    path: "/feeding/food-refusal",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Food Refusal & Picky Eating" },
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Feeding", href: "/feeding" },
          { label: "Food Refusal & Picky Eating" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Food Refusal &amp; Picky Eating: Strategies That Actually Work
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Food refusal and picky eating cause more parental stress than almost
          any other feeding issue. The good news: most picky eating is normal
          and responds well to evidence-based strategies. This guide covers
          why babies refuse food, what actually works, and when to seek help.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "Ellyn Satter Institute", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Why Babies Refuse Food */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why babies and toddlers refuse food
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Not hungry</strong> - Toddler appetites are naturally
                inconsistent; they may eat a lot one day and little the next
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Neophobia</strong> - Fear of new foods is an evolutionary
                protective mechanism that peaks at 18-24 months
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Sensory sensitivity</strong> - Some children are
                sensitive to textures, temperatures, or appearance of food
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Autonomy seeking</strong> - Toddlers are learning
                independence and food is one area they can control
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Teething or illness</strong> - Pain or feeling unwell
                naturally suppresses appetite
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Too much milk or snacking</strong> - Filling up on
                milk or grazing between meals reduces hunger at mealtimes
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Pressure at mealtimes</strong> - Paradoxically, the more
                we pressure children to eat, the less they want to
              </li>
            </ul>
          </div>
        </section>

        {/* Division of Responsibility */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The Division of Responsibility (Ellyn Satter model)
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            This evidence-based framework is recommended by the AAP and most
            pediatric feeding therapists. It reduces mealtime stress and
            builds healthy eating habits long-term.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-primary mb-2">
                Parent&apos;s job
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>What</strong> - Choose nutritious foods to offer
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>When</strong> - Provide regular meal and snack times
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Where</strong> - Create a calm eating environment
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-primary mb-2">
                Child&apos;s job
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Whether</strong> - Decide if they want to eat
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>How much</strong> - Decide how much to eat
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Strategies That Work */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Proven strategies to expand the diet
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Offer new foods alongside accepted foods</strong> -
                Always include at least one food you know they will eat so
                they are not going hungry
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Serve family meals together</strong> - Children learn
                by watching others eat. Model eating the foods you want them
                to try
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>No pressure, no praise</strong> - Do not beg, bribe,
                or celebrate bites. Keep meals neutral and low-pressure
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Make it fun outside meals</strong> - Let children help
                cook, garden, shop for groceries, or play with food during
                non-mealtimes
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Offer the same food in different ways</strong> - Raw
                vs. roasted, whole vs. chopped, with a dip vs. plain. Preparation
                makes a big difference
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Keep mealtimes short</strong> - 15-20 minutes for
                toddlers. If they are not eating, calmly end the meal
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Limit milk and snack grazing</strong> - Offer milk with
                meals, not between. Space meals and snacks 2-3 hours apart
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Stay consistent</strong> - It can take 10-30 exposures.
                Keep offering without pressure or commentary
              </li>
            </ol>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to avoid (common mistakes)
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Forcing bites</strong> - Creates fear and negative
                associations with food
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Bribing with dessert</strong> - Teaches that vegetables
                are a punishment and dessert is the reward
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Making a separate meal</strong> - Serve the same food
                as the family (include one accepted item) rather than becoming
                a short-order cook
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Commenting on what they eat or do not eat</strong> -
                Even positive comments (&quot;Good job eating your broccoli!&quot;)
                add pressure
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Distractions during meals</strong> - Screens, toys, or
                walking around while eating prevents children from tuning into
                hunger/fullness
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Giving up after a few tries</strong> - Consistency is
                key; keep offering without commentary
              </li>
            </ul>
          </div>
        </section>

        {/* When to Seek Help */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to seek professional help
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Most picky eating is normal and resolves with time and consistent
            strategies. However, consult your pediatrician or a pediatric
            feeding therapist if:
          </p>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Your child eats fewer than 20 foods total
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              They are dropping foods from their diet without accepting new ones
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Entire food groups are missing (refuses all vegetables, all
              proteins, etc.)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              They gag, vomit, or cry at the sight or smell of food
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Growth is faltering or they are not gaining weight as expected
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Mealtimes consistently involve crying, tantrums, or extreme stress
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Meals consistently take longer than 30 minutes
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Your child refuses to eat foods of certain textures entirely
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-4">
            These may indicate ARFID (Avoidant/Restrictive Food Intake
            Disorder), sensory processing differences, or oral-motor
            difficulties that benefit from specialized feeding therapy.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Picky eating is one of the most normal parts of toddlerhood. Follow the Division of Responsibility - you decide what, when, and where; your child decides whether and how much. Keep offering variety without pressure, model eating different foods, and give it time. If your child eats fewer than 20 foods or is not growing well, ask your pediatrician about feeding therapy." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
