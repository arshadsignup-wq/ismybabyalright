import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allergen Introduction Tracker",
  description:
    "Track your baby's allergen introductions. Log reactions to the top 9 allergens and keep a record for your pediatrician.",
  alternates: {
    canonical: "/food/allergens",
  },
  openGraph: {
    title: "Baby Allergen Tracker | Is My Baby Alright?",
    description:
      "Track allergen introductions and log reactions to the top 9 allergens.",
  },
};

export default function AllergensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
