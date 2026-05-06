import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WFLCalculator from "@/components/growth/WFLCalculator";

export const metadata: Metadata = {
  title: "Baby Weight-for-Length Percentile Calculator (WHO Charts)",
  description:
    "Calculate your baby's weight-for-length percentile using WHO growth charts. Check if your child's weight is proportional to their length — for boys and girls under 2 years.",
  alternates: {
    canonical: "/tools/weight-for-length",
  },
  openGraph: {
    title: "Baby Weight-for-Length Percentile Calculator (WHO Charts) | Is My Baby Alright?",
    description:
      "Calculate your baby's weight-for-length percentile using WHO growth charts. For boys and girls under 2 years.",
  },
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
