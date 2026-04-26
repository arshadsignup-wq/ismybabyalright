import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Food Introduction Guide",
  description:
    "Evidence-based guide to introducing solid foods. Age-appropriate foods, preparation tips, choking hazards, and allergen introduction based on AAP guidelines.",
  alternates: {
    canonical: "/food",
  },
  openGraph: {
    title: "Baby Food Introduction Guide | Is My Baby Alright?",
    description:
      "Age-appropriate foods, preparation tips, choking hazards, and allergen introduction based on AAP guidelines.",
  },
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
