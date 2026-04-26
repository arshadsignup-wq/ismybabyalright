import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fairness View",
  description:
    "See how caregiving tasks are distributed between partners. Visualize who is handling feeds, diapers, and sleep shifts.",
  alternates: {
    canonical: "/fairness",
  },
  openGraph: {
    title: "Fairness View | Is My Baby Alright?",
    description:
      "Visualize how caregiving tasks are distributed between partners.",
  },
};

export default function FairnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
