import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Food Introduction Guide - When & How to Start Solids",
  description:
    "Age-appropriate food introduction guide for babies 4-12 months. 14 first foods with prep instructions, allergen tracker, gagging vs choking education. Based on AAP and WHO guidelines.",
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
