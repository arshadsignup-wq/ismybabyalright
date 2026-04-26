import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaccine Tracker and CDC Schedule",
  description:
    "Track your baby's vaccinations against the CDC recommended schedule. Log doses, see what's due next, and keep a record for your pediatrician.",
  alternates: {
    canonical: "/vaccines",
  },
  openGraph: {
    title: "Baby Vaccine Tracker | Is My Baby Alright?",
    description:
      "Track vaccinations against the CDC schedule. Log doses and see what's due next.",
  },
};

export default function VaccinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
