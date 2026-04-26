import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Intervention Directory by State",
  description:
    "Find your state's early intervention program. Contact information for all 50 states and DC to get your child evaluated for developmental delays.",
  alternates: {
    canonical: "/resources/early-intervention",
  },
  openGraph: {
    title: "Early Intervention Directory | Is My Baby Alright?",
    description:
      "Contact information for early intervention programs in all 50 states and DC.",
  },
};

export default function EarlyInterventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
