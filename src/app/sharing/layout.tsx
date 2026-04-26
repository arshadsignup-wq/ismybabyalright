import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share with Caregiver",
  description:
    "Create a shareable handoff card for babysitters, grandparents, or daycare. Includes feeding schedule, sleep routine, and emergency contacts.",
  alternates: {
    canonical: "/sharing",
  },
  openGraph: {
    title: "Share with Caregiver | Is My Baby Alright?",
    description:
      "Create a shareable handoff card with feeding schedule, sleep routine, and emergency contacts.",
  },
};

export default function SharingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
