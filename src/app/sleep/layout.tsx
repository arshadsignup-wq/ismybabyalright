import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Sleep Guide by Age",
  description:
    "Evidence-based baby sleep guide with age-specific schedules, wake windows, and regression explanations. Based on AAP safe sleep guidelines.",
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
