import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caregiver Handoff",
  description:
    "View a shared baby care summary with feeding schedule, sleep routine, medications, and emergency contacts.",
  alternates: {
    canonical: "/shared/view",
  },
  openGraph: {
    title: "Caregiver Handoff | Is My Baby Alright?",
    description:
      "View a shared baby care summary with feeding, sleep, and emergency info.",
  },
};

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
