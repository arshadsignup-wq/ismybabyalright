import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Tracker",
  description:
    "Log your baby's sleep sessions, track wake windows, and spot patterns. All data stays on your device.",
  alternates: {
    canonical: "/tracker/sleep",
  },
  openGraph: {
    title: "Baby Sleep Tracker | Is My Baby Alright?",
    description:
      "Log sleep sessions, track wake windows, and spot patterns. Private and on-device.",
  },
};

export default function SleepTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
