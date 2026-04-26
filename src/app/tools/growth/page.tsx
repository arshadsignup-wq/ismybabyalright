import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GrowthCalculator from "@/components/growth/GrowthCalculator";

export const metadata: Metadata = {
  title: "Growth Calculator",
  description:
    "Calculate your baby's weight and length percentiles using WHO growth standards. See where your child falls on the growth chart.",
  alternates: {
    canonical: "/tools/growth",
  },
  openGraph: {
    title: "Baby Growth Calculator | Is My Baby Alright?",
    description:
      "Calculate weight and length percentiles using WHO growth standards.",
  },
};

export default function GrowthPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Growth Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <GrowthCalculator />
      </div>
    </div>
  );
}
