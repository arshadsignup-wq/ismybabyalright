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
  title: "6-9 Month Feeding Guide: Growing Appetite & New Textures",
  description:
    "Complete feeding guide for 6-9 month old babies. Covers progressing textures, finger foods, self-feeding, meal planning, balancing milk and solids, and introducing a cup. Based on AAP and WHO guidelines.",
  alternates: { canonical: "/feeding/6-9mo" },
  openGraph: {
    title: "6-9 Month Feeding Guide: Growing Appetite & New Textures",
    description:
      "How to feed your 6-9 month old including texture progression, finger foods, and balancing milk with solids.",
  },
};

const faqItems = [
  {
    question: "How many meals should a 7-8 month old have per day?",
    answer:
      "By 7-8 months, aim for 2-3 solid meals per day plus 4-6 breast milk or formula feeds. Solid meals are growing in importance but milk remains the primary nutrition source. A typical day might include breakfast, lunch, and a small dinner, with milk feeds in between and at bedtime.",
  },
  {
    question: "When can I introduce finger foods?",
    answer:
      "You can introduce soft finger foods as soon as baby can sit independently and brings objects to their mouth, typically around 6-8 months. Good first finger foods include: ripe banana pieces, steamed broccoli florets, well-cooked pasta, soft avocado strips, and toast strips. All foods should be soft enough to squish between your fingers.",
  },
  {
    question: "How do I know if food is the right texture for my baby?",
    answer:
      "The 'squish test' is simple: press the food between your thumb and forefinger. If it squishes easily, it is safe. At 6-7 months, foods should be smooth purees or very soft mashes. By 8-9 months, soft lumps, minced foods, and dissolvable finger foods are appropriate. Never offer hard, round, or sticky foods.",
  },
  {
    question: "Should I still offer milk before or after solids?",
    answer:
      "At 6-7 months, offer milk about 30-60 minutes before solids to ensure baby still gets adequate milk nutrition. By 8-9 months, you can begin offering solids first at some meals as food becomes a bigger part of their diet. The transition is gradual - there is no exact switch date.",
  },
  {
    question: "My 8 month old is not interested in lumpy textures - is that normal?",
    answer:
      "Some babies take time to accept textured foods, but it is important to keep offering them. Research shows that delaying lumpy textures past 9-10 months can increase feeding difficulties later. If baby consistently gags on or refuses all textures beyond smooth puree, talk to your pediatrician about a feeding evaluation.",
  },
];

const takeaways = [
  "By 8-9 months, aim for 2-3 solid meals per day while maintaining 4-6 breast milk or formula feeds.",
  "Progress textures from smooth purees to mashed, then to soft lumps and finger foods - do not stay on purees too long.",
  "Introduce a cup (open or straw) with water at meals by 6-7 months to build cup-drinking skills.",
  "Offer a wide variety of flavors and textures now - food preferences established at this age tend to persist.",
  "Let baby practice self-feeding with finger foods to develop fine motor skills and independence.",
];

export default function SixToNineMonthFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "6-9 Month Feeding Guide: Growing Appetite & New Textures",
    description:
      "Complete feeding guide for 6-9 month olds covering texture progression, finger foods, and meal planning.",
    path: "/feeding/6-9mo",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "6-9 Months" },
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
          { label: "6-9 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding Your 6-9 Month Old: Textures, Finger Foods &amp; Growth
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Between 6-9 months, your baby&apos;s eating skills develop rapidly.
          This is the time to progress textures, introduce finger foods,
          expand variety, and start building lifelong eating habits. Milk
          remains important, but food is becoming a bigger part of their day.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Nutrition Balance */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Balancing milk and solids
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">Breast milk / Formula</h3>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">4-6 feeds per day</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">6-8 oz per bottle (if applicable)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Still provides 60-70% of calories</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">Solid foods</h3>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">2-3 meals per day by 8-9 months</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">2-4 tablespoons per meal (increasing)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Variety from all food groups</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              The balance shifts gradually. By 9 months, some babies naturally reduce milk feeds as solid food intake increases. Follow your baby&apos;s appetite.
            </p>
          </div>
        </section>

        {/* Texture Progression */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Texture progression: Month by month
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                6-7 months: Smooth to thick purees
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Smooth single-ingredient purees (sweet potato, peas, banana)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Gradually thicken purees and combine flavors
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Introduce soft, dissolvable finger foods (puffs, thin rice cakes)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Offer pre-loaded spoons for baby to bring to mouth
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                7-8 months: Mashed with soft lumps
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Mashed foods with small soft lumps (fork-mashed banana, cottage cheese)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Soft finger foods cut into strips (steamed carrot sticks, banana spears)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Well-cooked small pasta shapes
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Shredded or minced soft meats
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                8-9 months: Chopped and more finger foods
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Finely chopped soft foods (chicken, fish, vegetables)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Small pieces baby can pick up (developing pincer grasp)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Mixed-texture foods (soup with soft chunks, casseroles)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Soft bread, toast fingers, pancake strips
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted mt-3 leading-relaxed">
            Important: Research shows that delaying introduction of lumpy textures past
            9-10 months is associated with increased feeding difficulties later. Progress
            textures even if baby gags occasionally - gagging is a normal learning reflex.
          </p>
        </section>

        {/* Finger Foods */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Best finger foods for 6-9 month olds
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-xs text-muted mb-3">
              All finger foods should pass the &quot;squish test&quot; - if you can squish it between your thumb and finger, it is safe for baby.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">Fruits &amp; vegetables</h3>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Ripe banana (strips or pieces)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Ripe avocado strips</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Steamed broccoli florets</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Steamed sweet potato sticks</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Ripe mango strips</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Steamed carrot sticks (very soft)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">Proteins &amp; grains</h3>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">Shredded chicken or turkey</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Flaked soft fish (salmon, cod)</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Soft scrambled egg strips</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Well-cooked pasta shapes</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Toast strips with thin nut butter</li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">Soft meatballs (cut in half)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Day */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample day: 8-month-old
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">6:30 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">8:00 AM</span>
                <span className="text-sm text-foreground">Breakfast: oatmeal with mashed banana + scrambled egg strips</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">10:00 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">12:00 PM</span>
                <span className="text-sm text-foreground">Lunch: shredded chicken + steamed broccoli + avocado + pasta</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">2:30 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">5:00 PM</span>
                <span className="text-sm text-foreground">Dinner: mashed sweet potato + lentils + steamed carrot sticks</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">7:00 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula (bedtime)</span>
              </div>
            </div>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Offer small sips of water in an open cup or straw cup during meals.
            </p>
          </div>
        </section>

        {/* Introducing a Cup */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Introducing a cup
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-sm text-muted leading-relaxed mb-3">
              The AAP recommends introducing a cup around 6 months. This helps
              with oral motor development and makes the transition off bottles
              easier at 12 months.
            </p>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Start with an open cup or straw cup (skip sippy cups if possible)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Offer small amounts of water during solid meals
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                1-2 oz at a time is plenty - the goal is practice, not hydration
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Expect spills - this is a learning process
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Breast milk or formula can also be offered in a cup
              </li>
            </ul>
          </div>
        </section>

        {/* Iron and Nutrition */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Key nutrients at 6-9 months
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Iron</strong> - 11 mg/day needed. Offer iron-rich foods
              (meat, beans, fortified cereal) at every meal. Pair with vitamin C
              foods (fruits) to enhance absorption
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Zinc</strong> - Important for growth. Found in meat,
              beans, fortified cereals, and yogurt
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Healthy fats</strong> - Critical for brain development.
              Include avocado, nut butters, olive oil, full-fat yogurt, and
              fatty fish
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Vitamin D</strong> - 400 IU/day supplement recommended
              for all breastfed babies (formula contains vitamin D)
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="At 6-9 months, your baby is developing real eating skills. Progress textures steadily (do not stay on purees too long), offer finger foods to encourage self-feeding, and aim for 2-3 meals per day by 8-9 months. Variety matters - this is when food preferences are forming. Milk remains the primary nutrition source, but food is becoming increasingly important." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
