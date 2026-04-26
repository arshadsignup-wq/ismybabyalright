import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Am I Okay? Postpartum Check-in",
  description:
    "A gentle, private self-check for new parents. Reflect on how you're feeling with questions based on common postpartum experiences.",
  alternates: {
    canonical: "/mental-health/check-in",
  },
  openGraph: {
    title: "\"Am I Okay?\" Postpartum Check-in | Is My Baby Alright?",
    description:
      "A gentle, private self-check for new parents based on common postpartum experiences.",
  },
};

export default function CheckInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
