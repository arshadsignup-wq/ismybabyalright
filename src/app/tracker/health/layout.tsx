import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Tracker",
  description:
    "Log your baby's temperature readings and medications. Track health events and share summaries with your pediatrician.",
  alternates: {
    canonical: "/tracker/health",
  },
  openGraph: {
    title: "Baby Health Tracker | Is My Baby Alright?",
    description:
      "Log temperature readings and medications. Track health events for your pediatrician.",
  },
};

export default function HealthTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
