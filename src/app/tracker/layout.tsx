import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Tracker",
  description:
    "Track feeds, sleep, diapers, temperature & medications. Export reports for your pediatrician.",
};

export default function TrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
