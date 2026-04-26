import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdjustedAgeCalc from "@/components/tools/AdjustedAgeCalc";

export const metadata: Metadata = {
  title: "Adjusted Age Calculator",
  description:
    "Calculate your premature baby's adjusted (corrected) age for developmental milestones. Enter due date and birth date to see adjusted age.",
  alternates: {
    canonical: "/tools/adjusted-age",
  },
  openGraph: {
    title: "Adjusted Age Calculator | Is My Baby Alright?",
    description:
      "Calculate your premature baby's adjusted age for developmental milestones.",
  },
};

export default function AdjustedAgePage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Adjusted Age Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <AdjustedAgeCalc />
      </div>
    </div>
  );
}
