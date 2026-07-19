import type { Metadata } from "next";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";
import WeeklyPlanner from "@/components/meal-planner/WeeklyPlanner";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

export const metadata: Metadata = {
  title: "Baby Meal Planner - Weekly Meal Ideas by Age",
  description:
    "Free weekly meal planner for babies and toddlers ages 6-36 months. Age-appropriate breakfast, lunch, dinner, and snack ideas with allergen warnings. Based on AAP feeding guidelines.",
  alternates: {
    canonical: "/meal-planner",
  },
  openGraph: {
    title: "Baby Meal Planner - Weekly Meal Ideas by Age",
    description:
      "Free weekly meal planner for babies and toddlers ages 6-36 months. Age-appropriate meal ideas with allergen warnings.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: "Baby Meal Planner - Weekly Meal Ideas by Age",
  description:
    "Free weekly meal planner for babies and toddlers ages 6-36 months. Age-appropriate breakfast, lunch, dinner, and snack ideas with allergen warnings. Based on AAP feeding guidelines.",
  path: "/meal-planner",
  applicationCategory: "HealthApplication",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Meal Planner" },
]);

export default function MealPlannerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">
          Baby Meal Planner
        </h1>
        <p className="text-sm text-muted mt-1">
          Age-appropriate meal ideas for your little one, all week long.
          Generate a weekly plan, swap meals, and track allergens.
        </p>
        <div className="mt-2">
          <LastReviewed date="2026-07-01" />
        </div>
        <div className="mt-3">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>
      </div>

      <KeyTakeaways
        takeaways={[
          "Babies are typically ready to start solids around 6 months when they can sit with support and show interest in food.",
          "Introduce common allergens like peanut, egg, and dairy early and often -- current guidelines recommend starting between 4 and 6 months to reduce allergy risk.",
          "Offer a variety of textures and flavors across meals, starting with smooth purees and progressing to soft finger foods by 8 to 9 months.",
          "Portion sizes for babies are much smaller than adults -- start with 1 to 2 tablespoons per food and let your baby guide how much they eat.",
        ]}
      />

      <WeeklyPlanner />

      <div className="mt-8">
        <FAQSection
          items={[
            { question: "When should I start my baby on solid foods?", answer: "Most babies are ready to start solids around 6 months of age, when they can sit with minimal support, show interest in what you are eating, and have lost the tongue-thrust reflex. Some babies may be ready as early as 4 months. Always discuss readiness signs with your pediatrician before starting." },
            { question: "When should I introduce allergens like peanut and egg?", answer: "Current AAP guidelines recommend introducing common allergens between 4 and 6 months. The LEAP study showed that early peanut introduction significantly reduced peanut allergy risk. Introduce one new allergen at a time, wait 2 to 3 days before adding another, and watch for signs of a reaction." },
            { question: "How do I know if my baby is eating enough?", answer: "Let your baby set the pace. Signs they are full include turning away, closing their mouth, or pushing food away. In the first months of solids, breast milk or formula is still the primary source of nutrition. As long as your baby is growing steadily and producing enough wet diapers, they are likely getting enough." },
            { question: "What foods should I avoid before 12 months?", answer: "Avoid honey (botulism risk), whole cow's milk as a primary drink, added salt and sugar, choking hazards like whole grapes and raw carrots, and unpasteurized foods. Always cut round foods into safe shapes and supervise mealtimes closely." },
          ]}
        />
      </div>

      <BottomLine
        summary="Planning meals for your baby does not need to be stressful. Focus on variety, age-appropriate textures, and early allergen introduction. Your baby's appetite will vary from day to day -- that is normal. Breast milk or formula remains the primary nutrition source for the first year, so solid foods are about exploration and learning."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <p className="text-xs text-muted text-center mt-8 leading-relaxed pb-4">
        Based on AAP and WHO feeding guidelines. This is educational content,
        not medical advice. Discuss your baby&apos;s diet and any allergies with your
        pediatrician. Always supervise your child during mealtimes.
        All data stays on your device.
      </p>
    </div>
  );
}
