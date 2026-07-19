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
  title: "4-6 Month Feeding Guide: Starting Solids",
  description:
    "Complete guide to feeding your 4-6 month old baby. Covers when to start solids, first foods, how much breast milk or formula to offer, introducing allergens, and balancing milk with solid food. Based on AAP guidelines.",
  alternates: { canonical: "/feeding/4-6mo" },
  openGraph: {
    title: "4-6 Month Feeding Guide: Starting Solids",
    description:
      "Everything you need to know about feeding your 4-6 month old, including when and how to start solid foods.",
  },
};

const faqItems = [
  {
    question: "Should I start solids at 4 months or 6 months?",
    answer:
      "The AAP recommends exclusive breastfeeding for about 6 months, and the WHO recommends 6 months. However, some pediatricians may suggest introducing solids between 4-6 months if baby shows all readiness signs. Discuss with your pediatrician, especially if there is a family history of food allergies (early allergen introduction may be beneficial for high-risk babies).",
  },
  {
    question: "How much solid food should a 6 month old eat?",
    answer:
      "At 6 months, solids are just for practice and exploration. Start with 1-2 tablespoons of food, once or twice per day. Do not worry about how much baby actually swallows - this stage is about learning textures, tastes, and the mechanics of eating. Breast milk or formula remains the primary source of nutrition.",
  },
  {
    question: "Should I give breast milk or solids first?",
    answer:
      "At 4-6 months, offer breast milk or formula first (about 30-60 minutes before solids). Milk is still the primary nutrition source and you do not want baby to fill up on solids and reduce milk intake. After 8-9 months, you can gradually shift to offering solids first as food becomes a bigger part of their diet.",
  },
  {
    question: "Can I give my 4 month old water?",
    answer:
      "Babies under 6 months generally do not need water - breast milk or formula provides all necessary hydration. When you start solids around 6 months, you can offer small sips of water (1-2 oz) in an open cup during meals to help with swallowing. Do not offer juice before 12 months.",
  },
  {
    question: "My 5 month old is very interested in food - should I start early?",
    answer:
      "Interest in food alone is not enough to start solids. Your baby also needs: good head and neck control, ability to sit with minimal support, loss of the tongue-thrust reflex, and the ability to bring objects to their mouth. If all these signs are present, talk to your pediatrician about starting between 4-6 months.",
  },
];

const takeaways = [
  "Most babies are ready for solids around 6 months, though some may be ready between 4-6 months with pediatrician guidance.",
  "At this age, breast milk or formula provides 90%+ of nutrition - solids are for practice and exploration.",
  "Start with 1-2 tablespoons, once or twice daily. Focus on exposure to new tastes and textures, not quantity.",
  "Iron-rich foods should be prioritized as first foods since iron stores from birth deplete around 6 months.",
  "Begin introducing common allergens (peanut, egg) early and often to reduce allergy risk.",
];

export default function FourToSixMonthFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "4-6 Month Feeding Guide: Starting Solids",
    description:
      "Complete guide to feeding your 4-6 month old including starting solids, amounts, and allergen introduction.",
    path: "/feeding/4-6mo",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "4-6 Months" },
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
          { label: "4-6 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding Your 4-6 Month Old: Starting Solids
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Between 4-6 months, your baby transitions from exclusive milk feeding
          to their first experiences with solid food. This is an exciting time
          of exploration, sensory discovery, and learning. Here is everything
          you need to know about this stage.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Milk Needs */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Milk feeding at 4-6 months
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Breast milk or formula remains the primary source of nutrition at
            this age. Even after starting solids, milk provides the majority
            of calories, protein, and fat your baby needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Breastfed babies
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  5-7 nursing sessions per day
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Typically 3-5 oz per bottle if pumped
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  May begin to drop one night feed
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Nurse before offering solids
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Formula-fed babies
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  4-5 bottles per day
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  6-8 oz per bottle
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Total: 24-32 oz per day
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Bottle before solids at this stage
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Starting Solids */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to start solid foods
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Confirm readiness signs</strong> - Sitting with support,
                good head control, interest in food, lost tongue-thrust reflex
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Choose a time when baby is happy</strong> - Not too
                hungry, not too tired. Mid-morning often works well
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Start with one food at a time</strong> - Iron-rich
                foods like iron-fortified cereal, pureed meat, or mashed beans
                are ideal first foods
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Offer 1-2 teaspoons</strong> - Put a small amount on
                a soft-tipped spoon and let baby explore. Most will end up on
                their face and bib - that is normal
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Follow baby&apos;s lead</strong> - If they turn away
                or close their mouth, stop. Try again another day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Introduce new foods every 2-3 days</strong> - This
                helps identify any allergic reactions
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Gradually increase</strong> - Over weeks, work up to
                1-2 tablespoons, twice per day by 6 months
              </li>
            </ol>
          </div>
        </section>

        {/* What to Offer */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to offer at 4-6 months
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Priority: Iron-rich foods
              </h3>
              <p className="text-xs text-muted mb-2">
                Iron stores from birth deplete around 6 months - these should be among baby&apos;s first foods.
              </p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">Iron-fortified infant cereal (oat, rice, multigrain)</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Pureed meat (chicken, beef, turkey)</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Mashed beans or lentils</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Pureed tofu</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Vegetables and fruits
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">Sweet potato, squash, carrots, peas, green beans</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Avocado, banana, pear, apple, peach</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">All should be pureed smooth or mashed very soft</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Early allergen introduction
              </h3>
              <p className="text-xs text-muted mb-2">
                Current evidence supports introducing allergens early to reduce allergy risk.
              </p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">Smooth peanut butter thinned with breast milk or puree</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Well-cooked scrambled egg</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Plain whole-milk yogurt</li>
                <li className="text-sm text-foreground leading-relaxed list-disc">Thin tree nut butters in purees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample Day */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample day: 6-month-old just starting solids
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">6:00 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">8:30 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">10:00 AM</span>
                <span className="text-sm text-foreground">Solids: 1-2 tbsp iron-fortified cereal mixed with breast milk + mashed banana</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">11:30 AM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">2:30 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">5:00 PM</span>
                <span className="text-sm text-foreground">Solids: 1-2 tbsp pureed sweet potato (optional second meal)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-bold text-primary whitespace-nowrap min-w-[70px]">6:30 PM</span>
                <span className="text-sm text-foreground">Breast milk or formula (bedtime feed)</span>
              </div>
            </div>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Some babies may still have one night feed. The solid food meals are flexible - skip if baby is not interested.
            </p>
          </div>
        </section>

        {/* Common Concerns */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common concerns at this stage
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Baby pushes food out with tongue</strong> - The tongue-thrust
              reflex may not be fully gone. Wait a week and try again
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Baby only eats a tiny amount</strong> - Completely normal.
              At this stage, any exposure counts as success
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Stool changes</strong> - Expect changes in color, consistency,
              and smell as solids are introduced. Green, brown, or orange are all normal
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Constipation</strong> - Some babies get constipated when starting
              solids. Offer water, prunes, pears, or &quot;P&quot; fruits. Avoid
              excess rice cereal
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Gagging</strong> - Gagging is different from choking and is
              a normal protective reflex as baby learns to manage textures
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="At 4-6 months, solid food is about exploration and practice - not nutrition. Breast milk or formula still provides 90%+ of your baby's nutritional needs. Start with iron-rich foods, introduce allergens early, and follow your baby's cues. If they are not interested yet, wait a few days and try again. There is no rush." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
