import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Mental Health Hub",
  description:
    "Mental health resources for new parents. Mood tracking, EPDS screening, postpartum depression and anxiety information, and crisis helplines.",
  alternates: {
    canonical: "/mental-health",
  },
  openGraph: {
    title: "Parent Mental Health Hub | Is My Baby Alright?",
    description:
      "Mood tracking, postpartum depression and anxiety resources, EPDS screening, and crisis helplines for new parents.",
  },
};

export default function MentalHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
