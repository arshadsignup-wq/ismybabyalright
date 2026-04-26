import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WFLCalculator from "@/components/growth/WFLCalculator";

export const metadata: Metadata = {
  title: "Weight-for-Length Calculator",
  description:
    "Calculate your baby's weight-for-length percentile using WHO growth standards. See where your child falls on the weight-for-length chart for children under 2 years.",
};

export default function WeightForLengthPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Weight-for-Length Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <WFLCalculator />
      </div>
    </div>
  );
}
