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
  title: "Baby Feeding Schedule by Age: Newborn to 2 Years",
  description:
    "Complete feeding schedule guide from newborn to 2 years. Covers how often and how much to feed at each age, when to introduce solids, and how milk and food balance changes over time. Based on AAP guidelines.",
  alternates: { canonical: "/feeding/schedule-by-age" },
  openGraph: {
    title: "Baby Feeding Schedule by Age: Newborn to 2 Years",
    description:
      "Age-by-age feeding schedules covering breast milk, formula, and solid foods from newborn through toddlerhood.",
  },
};

const faqItems = [
  {
    question: "How often should a newborn eat?",
    answer:
      "Newborns should eat 8-12 times per day (every 2-3 hours), including overnight. Breastfed newborns may feed even more frequently during cluster feeding periods. Watch for hunger cues (rooting, sucking hands, fussiness) rather than strict clock-watching. In the early weeks, never let a newborn go more than 4 hours without eating.",
  },
  {
    question: "When should I drop a milk feeding?",
    answer:
      "Milk feedings gradually decrease as solid food intake increases. Most babies naturally drop feedings between 6-12 months. By 9 months, most babies have 3 meals plus 3-4 milk feeds. By 12 months, many toddlers have 3 meals, 1-2 snacks, and 2-3 cups of milk. Let your baby guide the transition by watching their appetite.",
  },
  {
    question: "Should I feed on a schedule or on demand?",
    answer:
      "For newborns, feeding on demand (responsive feeding) is recommended by the AAP. As babies get older and establish patterns (usually by 3-4 months), a flexible schedule can emerge. By the time solids are introduced, having regular meal times helps establish good eating habits, but remain flexible to hunger cues.",
  },
  {
    question: "How much formula should my baby drink per day?",
    answer:
      "A general guideline is 2.5 ounces of formula per pound of body weight per day, divided across feedings. Most formula-fed babies take 24-32 oz per day between 2-6 months, gradually decreasing as solids increase after 6 months. By 12 months, formula should be replaced with whole cow's milk (16-24 oz per day max).",
  },
  {
    question: "My baby suddenly wants to eat more - is this normal?",
    answer:
      "Yes, appetite increases during growth spurts are completely normal. Growth spurts commonly occur around 2-3 weeks, 6 weeks, 3 months, and 6 months. During a growth spurt, baby may want to feed more frequently for 2-3 days. Breastfed babies may cluster feed to increase supply. This is temporary and resolves on its own.",
  },
];

const takeaways = [
  "Newborns eat 8-12 times per day; by 12 months this transitions to 3 meals, 1-2 snacks, and 2-3 milk feeds.",
  "Breast milk or formula is the primary nutrition source for the entire first year - solids complement, not replace, milk.",
  "Every baby is different - use these schedules as a guide and let your baby's hunger and fullness cues lead.",
  "Growth spurts cause temporary increases in appetite that resolve in 2-3 days.",
  "By 12 months, most toddlers should be eating family foods in small pieces and drinking from an open cup.",
];

export default function ScheduleByAgePage() {
  const contentSchema = getContentPageSchema({
    name: "Baby Feeding Schedule by Age: Newborn to 2 Years",
    description:
      "Complete age-by-age feeding schedule from newborn to 2 years covering milk, solids, and the transition between them.",
    path: "/feeding/schedule-by-age",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Feeding Schedule by Age" },
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
          { label: "Schedule by Age" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Feeding Schedule by Age: Newborn to 2 Years
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          How often and how much your baby eats changes dramatically in the
          first two years. This guide provides age-appropriate feeding
          schedules as a starting point, but remember: every baby is
          different. Follow your baby&apos;s hunger and fullness cues.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Age Schedules */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Feeding schedules by age
          </h2>
          <div className="space-y-5">
            {/* Newborn */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Newborn (0-4 weeks)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Frequency</p>
                  <p className="text-sm text-foreground">8-12 feeds/day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Amount</p>
                  <p className="text-sm text-foreground">1-3 oz per feed</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Solids</p>
                  <p className="text-sm text-foreground">None</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Feed on demand. Never let a newborn go more than 4 hours without eating. Cluster feeding is normal, especially in evenings.
              </p>
            </div>

            {/* 1-3 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                1-3 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Frequency</p>
                  <p className="text-sm text-foreground">7-9 feeds/day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Amount</p>
                  <p className="text-sm text-foreground">3-5 oz per feed</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Solids</p>
                  <p className="text-sm text-foreground">None</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Feedings may become more predictable. Some babies start sleeping longer stretches at night. Total daily intake is approximately 24-32 oz of formula or equivalent breast milk.
              </p>
            </div>

            {/* 4-6 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                4-6 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Milk feeds</p>
                  <p className="text-sm text-foreground">5-7 per day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Amount</p>
                  <p className="text-sm text-foreground">5-8 oz per feed</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Solids</p>
                  <p className="text-sm text-foreground">1-2 tbsp, 1-2x/day (if ready)</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                If baby shows readiness signs, solids can be introduced around 6 months (some pediatricians recommend 4-6 months). Milk remains the primary nutrition. Solid foods are for practice and exploration at this stage.
              </p>
            </div>

            {/* 6-9 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                6-9 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Milk feeds</p>
                  <p className="text-sm text-foreground">4-6 per day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Amount</p>
                  <p className="text-sm text-foreground">6-8 oz per feed</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Solids</p>
                  <p className="text-sm text-foreground">2-3 meals/day</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Solid food becomes a more regular part of the day. Offer milk first, then solids 30-60 minutes later. Introduce variety including iron-rich foods, fruits, vegetables, grains, and allergens. Progress textures from purees to soft lumps.
              </p>
            </div>

            {/* 9-12 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                9-12 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Milk feeds</p>
                  <p className="text-sm text-foreground">3-4 per day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Amount</p>
                  <p className="text-sm text-foreground">6-8 oz per feed</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Solids</p>
                  <p className="text-sm text-foreground">3 meals + 1-2 snacks</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Solids become a more significant part of nutrition but milk remains important. Offer finger foods and encourage self-feeding. Start offering water in an open cup or straw cup. Introduce a wider variety of textures and flavors.
              </p>
            </div>

            {/* 12-18 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                12-18 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Milk</p>
                  <p className="text-sm text-foreground">16-24 oz whole milk/day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Meals</p>
                  <p className="text-sm text-foreground">3 meals + 2 snacks</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Note</p>
                  <p className="text-sm text-foreground">Food is now primary nutrition</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Transition from formula to whole cow&apos;s milk (or continue breastfeeding). Toddlers eat family foods cut into small pieces. Offer meals and snacks at consistent times. Do not exceed 24 oz of milk per day as it can suppress appetite for food.
              </p>
            </div>

            {/* 18-24 months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                18-24 months
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg bg-primary-light p-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Milk</p>
                  <p className="text-sm text-foreground">16-20 oz whole milk/day</p>
                </div>
                <div className="rounded-lg bg-sky-light p-3">
                  <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">Meals</p>
                  <p className="text-sm text-foreground">3 meals + 2 snacks</p>
                </div>
                <div className="rounded-lg bg-card-alt p-3">
                  <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">Note</p>
                  <p className="text-sm text-foreground">Growing independence</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Toddlers may become pickier eaters - this is normal. Continue offering variety without pressure. Portion sizes are roughly 1/4 of an adult portion. Appetite varies day to day. Focus on nutrition over the week, not individual meals.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Daily Schedule */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample daily schedule: 8-month-old
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">6:30 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6-8 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">8:00 AM</span>
                <span className="text-sm text-foreground">Breakfast: iron-fortified cereal with fruit, or scrambled egg with toast strips</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">10:00 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6-8 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">12:00 PM</span>
                <span className="text-sm text-foreground">Lunch: pureed or soft chicken, mashed sweet potato, steamed broccoli</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">2:00 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula (6-8 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">5:00 PM</span>
                <span className="text-sm text-foreground">Dinner: soft pasta with sauce, avocado, yogurt</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[60px]">7:00 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula before bed (6-8 oz)</span>
              </div>
            </div>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              This is a sample only. Your baby&apos;s schedule may look different depending on nap times, appetite, and family routines.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            General feeding schedule tips
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Offer milk before solids until 9 months</strong> - This
              ensures adequate nutrition from their primary food source
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>After 9 months, offer solids first</strong> - This
              encourages appetite for solid foods as they become more important
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Do not force amounts</strong> - Trust your baby to
              regulate their intake; appetite varies day to day
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Growth spurts mean more hunger</strong> - Common at
              2-3 weeks, 6 weeks, 3 months, and 6 months
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Consistent meal times help</strong> - Regular routines
              help baby learn when to expect food
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Feeding schedules provide a helpful framework, but every baby is unique. In the first 6 months, breast milk or formula provides all nutrition. From 6-12 months, solids gradually increase while milk remains primary. After 12 months, food becomes the main source of nutrition with milk as a supplement. Follow your baby's hunger cues above all else." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
