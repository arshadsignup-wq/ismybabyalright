import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Vaccine Tracker & CDC Immunization Schedule",
  description:
    "Track your baby's vaccinations against the CDC recommended immunization schedule. Log doses, see what's due next, and keep a printable record for your pediatrician.",
  alternates: {
    canonical: "/vaccines",
  },
  openGraph: {
    title: "Baby Vaccine Tracker & CDC Immunization Schedule | Is My Baby Alright?",
    description:
      "Track your baby's vaccinations against the CDC recommended immunization schedule. Log doses, see what's due next, and keep a printable record for your pediatrician.",
  },
};

export default function VaccinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
