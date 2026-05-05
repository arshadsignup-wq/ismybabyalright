import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Sleep Guide - Age-Based Sleep Needs & Regressions",
  description:
    "Evidence-based baby sleep guide covering 8 age ranges from newborn to 3 years. Sleep regressions, wake windows, safe sleep guidelines, and schedules. Based on AAP guidelines.",
  alternates: {
    canonical: "/sleep",
  },
  openGraph: {
    title: "Baby Sleep Guide by Age | Is My Baby Alright?",
    description:
      "Age-specific sleep schedules, wake windows, and regression explanations based on AAP guidelines.",
  },
};

export default function SleepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
