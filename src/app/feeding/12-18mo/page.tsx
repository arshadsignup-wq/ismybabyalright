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
  title: "12-18 Month Feeding Guide: Toddler Transition",
  description:
    "Complete guide to feeding your 12-18 month old toddler. Covers switching from formula to whole milk, weaning from bottles and breast, toddler portion sizes, dealing with picky eating, and nutrition needs. Based on AAP guidelines.",
  alternates: { canonical: "/feeding/12-18mo" },
  openGraph: {
    title: "12-18 Month Feeding Guide: Toddler Transition",
    description:
      "Everything you need to know about feeding your 12-18 month old including milk transition, weaning, and toddler nutrition.",
  },
};

const faqItems = [
  {
    question: "When should I switch from formula to whole milk?",
    answer:
      "Switch from formula to whole cow's milk at 12 months. Introduce it gradually by mixing increasing amounts of milk with decreasing amounts of formula over 1-2 weeks. Offer milk in a cup (not a bottle). Limit total milk to 16-24 oz per day to avoid suppressing appetite for solid foods and contributing to iron deficiency.",
  },
  {
    question: "How much should my 12-18 month old eat per day?",
    answer:
      "Toddlers need about 900-1000 calories per day, split across 3 meals and 2 snacks. Portions are roughly 1/4 of an adult portion. Toddler appetite fluctuates dramatically - they may eat voraciously one day and barely eat the next. This is normal. Look at nutrition over the week, not individual meals.",
  },
  {
    question: "My toddler only wants milk and refuses food - what should I do?",
    answer:
      "Excess milk (over 24 oz/day) is the most common reason toddlers refuse food. Milk fills them up and provides easy calories, reducing appetite for solids. Limit milk to 16-24 oz per day (served with meals, not between), stop bottles if still using them, and offer water between meals. Appetite for food typically improves within a few days.",
  },
  {
    question: "Should I still breastfeed after 12 months?",
    answer:
      "The AAP supports continued breastfeeding for 2 years or beyond, as mutually desired by mother and child. The WHO recommends breastfeeding until at least 2 years. After 12 months, breast milk becomes a complement to solid food rather than the primary nutrition source. You can continue as long as it works for both of you.",
  },
  {
    question: "Is it normal for my toddler to eat barely anything some days?",
    answer:
      "Yes, this is completely normal. Toddler growth slows significantly compared to infancy (growth rate drops by about 50%), so caloric needs per pound actually decrease. Combined with developing independence and food preferences, erratic eating is one of the most normal aspects of toddlerhood. Focus on what they eat over a week, not per meal.",
  },
  {
    question: "What foods should I avoid giving my 12-18 month old?",
    answer:
      "Continue to avoid choking hazards: whole grapes (quarter them), whole cherry tomatoes (quarter), hot dogs (cut lengthwise then slice), raw hard vegetables, whole nuts, popcorn, sticky candy, and large chunks of meat. Also limit added sugar, honey is now safe, but avoid excessive juice (max 4 oz/day) and highly processed foods.",
  },
];

const takeaways = [
  "At 12 months, switch from formula to whole cow's milk (16-24 oz per day max) served in a cup, not a bottle.",
  "Food is now the primary nutrition source - aim for 3 meals and 2 snacks per day with a variety of foods.",
  "Toddler appetites are naturally erratic - they may eat a lot one day and almost nothing the next. This is normal.",
  "Wean from bottles by 12-15 months. Prolonged bottle use increases tooth decay and excess milk intake.",
  "Excess milk (over 24 oz/day) is the top reason toddlers refuse food. Limit milk and serve it only with meals.",
];

export default function TwelveToEighteenMonthFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "12-18 Month Feeding Guide: Toddler Transition",
    description:
      "Complete guide to feeding your 12-18 month old toddler covering milk transition, weaning, and nutrition needs.",
    path: "/feeding/12-18mo",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "12-18 Months" },
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
          { label: "12-18 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding Your 12-18 Month Old: The Toddler Transition
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The transition from baby to toddler brings big feeding changes:
          switching from formula to milk, weaning from bottles, eating family
          meals, and navigating the infamous toddler pickiness. This guide
          covers everything you need to know about this stage.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Milk Transition */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Transitioning to whole cow&apos;s milk
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-sm text-muted leading-relaxed mb-4">
              At 12 months, you can switch from formula to whole cow&apos;s
              milk. Whole milk (not 2%, 1%, or skim) is recommended until age
              2 because toddlers need the fat for brain development.
            </p>
            <h3 className="text-sm font-bold text-foreground mb-2">How to transition</h3>
            <ol className="space-y-2 ml-5 mb-4">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                Week 1: Mix 3/4 formula + 1/4 whole milk
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                Week 2: Mix 1/2 formula + 1/2 whole milk
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                Week 3: Mix 1/4 formula + 3/4 whole milk
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                Week 4: 100% whole milk
              </li>
            </ol>
            <h3 className="text-sm font-bold text-foreground mb-2">Important guidelines</h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Maximum 16-24 oz of whole milk per day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Serve milk in a cup, not a bottle
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Offer milk with meals, not between meals
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Excess milk suppresses appetite and can cause iron deficiency
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                If breastfeeding, you can continue alongside solid food - no
                need to switch to cow&apos;s milk
              </li>
            </ul>
          </div>
        </section>

        {/* Weaning */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Weaning from bottles and breast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Weaning from bottles
              </h3>
              <p className="text-xs text-muted mb-2">Goal: Bottles gone by 12-15 months</p>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Drop one bottle at a time (every 3-7 days)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Start with mid-day bottles, end with bedtime
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Replace with an open or straw cup
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Replace bedtime bottle with a cup of milk + book
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Be consistent - going back and forth makes it harder
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Weaning from breastfeeding
              </h3>
              <p className="text-xs text-muted mb-2">No rush - wean when ready for both of you</p>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Drop one feed at a time (every few days to a week)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Start with the feed your child is least attached to
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Offer a cup of milk and a snack/distraction instead
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Morning and bedtime feeds are usually last to go
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Gradual weaning is more comfortable for both of you
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Feed */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What toddlers should eat
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-sm text-muted leading-relaxed mb-4">
              Toddlers should eat the same foods as the family, cut into safe
              pieces. Aim for variety across the week from all food groups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Daily food groups</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    <strong>Grains</strong> - 3 oz (1 slice bread = 1 oz)
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    <strong>Fruits</strong> - 1 cup total
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    <strong>Vegetables</strong> - 3/4 cup total
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    <strong>Protein</strong> - 2 oz total
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    <strong>Dairy</strong> - 2 cups (includes milk)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2">Portion sizes (1/4 of adult)</h4>
                <ul className="space-y-1 ml-4">
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    Meat: 1-2 tablespoons per serving
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    Vegetables: 1-2 tablespoons per serving
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    Fruit: 2-3 tablespoons per serving
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    Grains: 1/4 slice bread, 2 tbsp pasta
                  </li>
                  <li className="text-sm text-foreground leading-relaxed list-disc">
                    Offer more if they want more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Day */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample day: 14-month-old
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">7:00 AM</span>
                <span className="text-sm text-foreground">Breakfast: oatmeal with berries + scrambled egg + milk in cup (4-6 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">9:30 AM</span>
                <span className="text-sm text-foreground">Morning snack: sliced banana + whole wheat crackers + water</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">12:00 PM</span>
                <span className="text-sm text-foreground">Lunch: grilled cheese on whole wheat + steamed broccoli + melon pieces + milk in cup (4-6 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">3:00 PM</span>
                <span className="text-sm text-foreground">Afternoon snack: yogurt + soft apple slices + water</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">5:30 PM</span>
                <span className="text-sm text-foreground">Dinner: pasta with meat sauce + roasted sweet potato + peas + milk in cup (4-6 oz)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">7:00 PM</span>
                <span className="text-sm text-foreground">Bedtime snack (optional): whole grain toast with peanut butter + milk (4 oz)</span>
              </div>
            </div>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Total milk: approximately 16-20 oz. Offer water with all meals and snacks.
            </p>
          </div>
        </section>

        {/* Picky Eating */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Navigating toddler pickiness
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Picky eating often begins between 12-18 months as toddlers assert
            independence. This is a normal developmental phase, not a failure
            of parenting.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Keep offering variety</strong> - Even if it gets
                rejected. It can take 10-30 exposures before acceptance
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Always include one &quot;safe&quot; food</strong> - At
                each meal, include at least one food you know they will eat
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>No pressure, no force</strong> - Your job is to offer;
                their job is to decide what and how much to eat
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Eat together</strong> - Toddlers learn by watching
                you eat the same foods
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Limit milk and juice</strong> - Full tummy from
                drinks means no appetite for food
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Keep mealtimes short</strong> - 15-20 minutes max.
                If they are not eating, calmly end the meal
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Do not make separate meals</strong> - Serve family
                food with at least one accepted item included
              </li>
            </ul>
          </div>
        </section>

        {/* Nutrition Concerns */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Key nutrition concerns at this age
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Iron deficiency</strong> - The most common nutritional
              deficiency in toddlers, often from excess milk and limited iron-rich
              food intake. Limit milk to 16-24 oz and offer meat, beans, and
              fortified cereals daily
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Healthy fats</strong> - Still critical for brain
              development. Use whole milk, offer avocado, nut butters, cheese,
              and cook with olive oil or butter
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Vitamin D</strong> - 600 IU/day recommended. Found in
              fortified milk, fatty fish, and supplements
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Fiber and hydration</strong> - Constipation is common in
              toddlers. Offer fruits, vegetables, whole grains, and adequate
              water
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Avoid excess sugar and salt</strong> - Taste preferences
              are forming. Keep added sugars and sodium low
            </li>
          </ul>
        </section>

        {/* Still Unsafe Foods */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Foods still to avoid or modify
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Whole grapes</strong> - Quarter lengthwise
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Cherry tomatoes</strong> - Quarter
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Hot dogs</strong> - Cut lengthwise, then into small pieces
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Whole nuts</strong> - Use nut butters instead
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Popcorn</strong> - Not until age 4+
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Raw hard vegetables</strong> - Cook until soft or grate finely
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Sticky candy, hard candy, marshmallows</strong> - Avoid entirely
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Unpasteurized foods</strong> - Continue to avoid
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="At 12-18 months, food becomes your toddler's primary nutrition source. Switch from formula to whole milk (16-24 oz max per day), wean from bottles by 15 months, and serve family foods in small pieces. Picky eating is normal and usually responds well to low-pressure, consistent variety. Your toddler's appetite will vary dramatically day to day - trust their internal regulation." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
