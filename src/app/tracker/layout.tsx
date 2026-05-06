import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Tracker: Feeds, Sleep, Diapers & Temperature Log",
  description:
    "Free baby tracker for feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. Private — all data stays on your device.",
  alternates: {
    canonical: "/tracker",
  },
  openGraph: {
    title: "Baby Tracker: Feeds, Sleep, Diapers & Temperature Log | Is My Baby Alright?",
    description:
      "Free baby tracker for feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. Private — all data stays on your device.",
  },
};

export default function TrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
