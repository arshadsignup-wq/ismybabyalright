import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ChildcareCostCalculator from "@/components/tools/ChildcareCostCalculator";

export const metadata: Metadata = {
  title: "Childcare Cost Calculator - Compare Daycare, Nanny & More",
  description:
    "Estimate childcare costs by type (daycare, nanny, au pair), region, and hours. Compare options side by side and learn about tax credits and savings.",
  alternates: {
    canonical: "/tools/childcare-cost",
  },
  openGraph: {
    title: "Childcare Cost Calculator - Compare Daycare, Nanny & More",
    description:
      "Compare childcare costs across care types and regions. Includes tax credit information and pros/cons for each option.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does daycare cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average cost of full-time daycare center care in the US is approximately $1,150-$1,450 per month, depending on the child's age. Infant care is the most expensive, and costs vary significantly by region — from $800/month in rural areas to $2,000+ in major metro areas.",
      },
    },
    {
      "@type": "Question",
      name: "Is a nanny cheaper than daycare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full-time nanny typically costs more than daycare ($2,600-$2,800/month on average), but a nanny share — splitting a nanny with another family — can be comparable to center-based care at around $1,600-$1,800/month per family.",
      },
    },
  ],
};

export default function ChildcareCostPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Childcare Costs" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <ChildcareCostCalculator />
      </div>
    </div>
  );
}
