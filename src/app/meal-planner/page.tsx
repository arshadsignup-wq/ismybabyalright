import type { Metadata } from "next";
import WeeklyPlanner from "@/components/meal-planner/WeeklyPlanner";

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

export default function MealPlannerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">
          Baby Meal Planner
        </h1>
        <p className="text-sm text-muted mt-1">
          Age-appropriate meal ideas for your little one, all week long.
          Generate a weekly plan, swap meals, and track allergens.
        </p>
      </div>

      <WeeklyPlanner />

      <p className="text-xs text-muted text-center mt-8 leading-relaxed pb-4">
        Based on AAP and WHO feeding guidelines. This is educational content,
        not medical advice. Discuss your baby&apos;s diet and any allergies with your
        pediatrician. Always supervise your child during mealtimes.
        All data stays on your device.
      </p>
    </div>
  );
}
