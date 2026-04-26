import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feeding Tracker",
  description:
    "Log breastfeeding sessions, bottles, and solid food meals. Track feeding frequency and patterns over time.",
  alternates: {
    canonical: "/tracker/feeding",
  },
  openGraph: {
    title: "Baby Feeding Tracker | Is My Baby Alright?",
    description:
      "Log breastfeeding, bottles, and solid meals. Track feeding patterns over time.",
  },
};

export default function FeedingTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
