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
  title: "9-12 Month Feeding Guide: Table Foods & Self-Feeding",
  description:
    "Complete feeding guide for 9-12 month old babies. Covers transitioning to table foods, self-feeding development, weaning from bottles, introducing a cup, portion sizes, and preparing for toddler eating. Based on AAP guidelines.",
  alternates: { canonical: "/feeding/9-12mo" },
  openGraph: {
    title: "9-12 Month Feeding Guide: Table Foods & Self-Feeding",
    description:
      "Guide to feeding your 9-12 month old including table foods, self-feeding, and preparing for the transition to toddlerhood.",
  },
};

const faqItems = [
  {
    question: "What table foods can my 9-12 month old eat?",
    answer:
      "By 9-12 months, most babies can eat a modified version of what the family eats. Offer soft, bite-sized pieces of cooked vegetables, fruits, pasta, rice, shredded meat, flaked fish, beans, cheese, toast, and soft breads. Avoid choking hazards (whole grapes, hot dogs, raw hard vegetables, popcorn, nuts) and limit added salt and sugar.",
  },
  {
    question: "When should I start weaning my baby off the bottle?",
    answer:
      "The AAP recommends weaning from bottles by 12-15 months. Start introducing a cup (open or straw) at 6 months and gradually shift milk feeds from bottles to cups as baby approaches their first birthday. A good approach is to drop one bottle at a time over 2-4 weeks, starting with the mid-day bottle (keep the morning and bedtime bottles for last).",
  },
  {
    question: "How much milk does my 9-12 month old need?",
    answer:
      "At 9-12 months, baby still needs about 16-24 oz of breast milk or formula per day, typically in 3-4 feeds. After 12 months, transition to whole cow's milk (16-24 oz per day max) or continue breastfeeding. Do not exceed 24 oz of milk as it can suppress appetite for solid foods and contribute to iron deficiency.",
  },
  {
    question: "My 10 month old wants to feed themselves but makes a huge mess - should I let them?",
    answer:
      "Yes! Self-feeding is an important developmental milestone. Babies develop fine motor skills (pincer grasp), hand-eye coordination, and independence through self-feeding. The mess is temporary but the skills are lasting. Offer finger foods, pre-loaded spoons, and let baby explore. Use a bib with a pocket and a mat under the high chair for easier cleanup.",
  },
  {
    question: "Should I still puree food for my 10-11 month old?",
    answer:
      "By 9-10 months, most babies should be moving away from purees and eating soft, chopped table foods. Staying on purees too long can make the transition to textures harder later. Some babies may still prefer a combination of purees and finger foods - that is fine, but keep offering textured foods at every meal to build comfort and skill.",
  },
];

const takeaways = [
  "By 9-12 months, solid food provides the majority of nutrition - aim for 3 meals plus 1-2 snacks per day.",
  "Offer table foods (soft, bite-sized pieces) that the family is eating, modified for safety - no more separate baby meals.",
  "Encourage self-feeding with finger foods and pre-loaded spoons to build motor skills and independence.",
  "Begin transitioning from bottle to cup - the AAP recommends bottles be dropped by 12-15 months.",
  "Do not exceed 24 oz of milk per day, as excess milk suppresses appetite for iron-rich foods.",
];

export default function NineToTwelveMonthFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "9-12 Month Feeding Guide: Table Foods & Self-Feeding",
    description:
      "Complete feeding guide for 9-12 month olds covering table foods, self-feeding, and bottle weaning.",
    path: "/feeding/9-12mo",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "9-12 Months" },
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
          { label: "9-12 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding Your 9-12 Month Old: Table Foods &amp; Self-Feeding
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Between 9-12 months, your baby is transitioning from baby food to
          table food. They are developing the fine motor skills to self-feed,
          the teeth and jaw strength to handle more textures, and the appetite
          for full meals. This is when feeding starts to look more like
          &quot;real eating.&quot;
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Daily Structure */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Daily feeding structure
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="rounded-lg bg-primary-light p-3">
                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Solid meals</p>
                <p className="text-sm text-foreground">3 per day + 1-2 snacks</p>
              </div>
              <div className="rounded-lg bg-sky-light p-3">
                <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Milk feeds</p>
                <p className="text-sm text-foreground">3-4 per day (16-24 oz total)</p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Water</p>
                <p className="text-sm text-foreground">Offered in a cup at every meal</p>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              At this age, solid food starts to become the primary source of nutrition, with milk playing a supporting role. Offer solids first at meals, then milk afterward or between meals.
            </p>
          </div>
        </section>

        {/* Table Foods */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Transitioning to table foods
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Your baby can now eat most of what your family eats, cut into
            small, safe pieces. This is the time to move away from separate
            &quot;baby meals&quot; and toward family food.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              Safe table food ideas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Proteins</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Small pieces of soft chicken, turkey, or beef</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Flaked fish (check for bones)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Scrambled eggs</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Small cubes of tofu</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Mashed or whole beans</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Shredded cheese</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Grains &amp; starches</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Small pasta shapes</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Soft rice</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Toast strips or pieces</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Pancake pieces</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Soft tortilla pieces</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Oatmeal</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Fruits &amp; vegetables</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Soft cooked vegetables (small pieces)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Ripe soft fruits (cut small)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Steamed or roasted vegetables</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Blueberries (halved or quartered)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Grapes (quartered lengthwise)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Dairy &amp; fats</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Full-fat yogurt</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Cottage cheese</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Small cheese cubes or shreds</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Butter or olive oil on foods</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Avocado pieces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Feeding */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Encouraging self-feeding
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-sm text-muted leading-relaxed mb-3">
              Self-feeding is messy but important. It develops fine motor
              skills, builds confidence, and supports healthy appetite
              regulation.
            </p>
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Finger foods at every meal</strong> - Offer a variety
                of pieces baby can pick up independently
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Pre-loaded spoons</strong> - Load a spoon with yogurt
                or oatmeal and let baby bring it to their mouth
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Practice with a cup</strong> - Open cups and straw
                cups build oral motor skills
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Let them explore</strong> - Squishing, smearing, and
                dropping food are all part of learning
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Offer a mix</strong> - Combine finger foods with
                spoon-fed items if baby gets frustrated
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Pincer grasp develops 8-10 months</strong> - Baby goes
                from raking food to picking up small pieces with thumb and finger
              </li>
            </ul>
          </div>
        </section>

        {/* Transitioning from Bottle */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Weaning from the bottle
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            The AAP recommends weaning from bottles by 12-15 months. Prolonged
            bottle use is associated with tooth decay, excess milk intake, and
            iron deficiency. Start the transition now.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Introduce cups at meals</strong> - Offer water or milk
                in an open cup or straw cup during mealtimes
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Drop one bottle at a time</strong> - Start with the
                mid-day bottle and replace with a cup. Wait a week before
                dropping the next
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Keep morning and bedtime bottles for last</strong> -
                These are often the most emotionally attached bottles
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Offer the cup confidently</strong> - Babies adapt
                to changes faster when caregivers are consistent
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>No bottles after 12-15 months</strong> - The bedtime
                bottle can be replaced with a cup of milk and a book
              </li>
            </ol>
          </div>
        </section>

        {/* Sample Day */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample day: 10-month-old
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">6:30 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6-8 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">7:30 AM</span>
                <span className="text-sm text-foreground">Breakfast: scrambled egg + toast strips + banana pieces + water in cup</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">10:00 AM</span>
                <span className="text-sm text-foreground">Snack: yogurt with berries + rice cake</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">11:00 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">12:30 PM</span>
                <span className="text-sm text-foreground">Lunch: soft chicken pieces + pasta + steamed veggies + water in cup</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">3:00 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6 oz) + snack: avocado and cheese</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">5:30 PM</span>
                <span className="text-sm text-foreground">Dinner: flaked fish + rice + roasted sweet potato + fruit + water</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">7:00 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula before bed (6-8 oz)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portion Sizes */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Portion size guidelines
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Baby portions are much smaller than adult portions. Use these as a
            starting point, but let your baby&apos;s appetite guide actual
            intake.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Grains</strong> - 2-4 tablespoons per meal (1/4 slice bread, 2 tbsp pasta)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Protein</strong> - 1-2 tablespoons per meal (1-2 tbsp meat, half an egg)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Fruits/vegetables</strong> - 2-3 tablespoons per meal
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Dairy</strong> - 2-4 tablespoons yogurt, 1/2 oz cheese
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Total per meal</strong> - Roughly 4-8 tablespoons total (1/4 to 1/2 cup)
              </li>
            </ul>
            <p className="text-xs text-muted mt-3 leading-relaxed">
              Some meals baby may eat more, some less. Appetite varies day to day and that is completely normal.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="At 9-12 months, your baby is ready for table foods, self-feeding, and 3 meals plus snacks per day. Move away from purees toward soft chopped foods that the family eats. Start transitioning from bottles to cups. Let your baby practice self-feeding (the mess is temporary!) and offer a wide variety of flavors and textures. They are becoming a real eater." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
