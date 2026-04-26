import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RegressionLog from "@/components/tools/RegressionLog";

export const metadata: Metadata = {
  title: "Regression Log",
  description:
    "Track and document developmental skill regression. Record lost skills with dates to share with your pediatrician or specialist.",
  alternates: {
    canonical: "/tools/regression-log",
  },
  openGraph: {
    title: "Regression Log | Is My Baby Alright?",
    description:
      "Track and document developmental skill regression. Record lost skills with dates for your pediatrician.",
  },
};

export default function RegressionLogPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Regression Log" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <RegressionLog />
      </div>
    </div>
  );
}
