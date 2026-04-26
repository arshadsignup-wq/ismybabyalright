import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Tracker",
  description:
    "Track feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician. All data stays on your device.",
  alternates: {
    canonical: "/tracker",
  },
  openGraph: {
    title: "Baby Tracker | Is My Baby Alright?",
    description:
      "Track feeds, sleep, diapers, temperature, and medications. Export reports for your pediatrician.",
  },
};

export default function TrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
