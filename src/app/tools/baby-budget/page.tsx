import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BabyBudgetPlanner from "@/components/tools/BabyBudgetPlanner";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Budget Planner - Estimate First Year Costs",
  description:
    "Plan your baby budget with realistic cost estimates across 8 categories. Compare budget, mid-range, and premium options. Adjust for feeding method and see monthly and first-year totals.",
  alternates: {
    canonical: "/tools/baby-budget",
  },
  openGraph: {
    title: "Baby Budget Planner - Estimate First Year Costs",
    description:
      "Estimate your first-year baby costs by category. Compare budget vs. premium options, adjust for feeding method, and get money-saving tips.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a baby cost in the first year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first year of a baby's life typically costs between $12,000 and $25,000, depending on your choices. Major expenses include childcare ($800-$2,000/month), feeding ($120-$400/month), diapers ($50-$110/month), and gear. Budget-conscious families can spend closer to $12,000 by using secondhand items, breastfeeding, and choosing store-brand essentials.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest baby expense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Childcare is by far the biggest baby expense for most families, averaging $1,200/month nationally for full-time daycare — and up to $2,000+ in major metro areas. If a parent stays home, feeding (especially formula at $150-$300/month) and healthcare costs become the largest line items.",
      },
    },
    {
      "@type": "Question",
      name: "How can I save money on baby expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top ways to save include: buying secondhand clothes and gear (babies outgrow things quickly), using store-brand formula and diapers (same quality, 30-50% cheaper), breastfeeding if possible (saves $1,200-$3,600/year), making your own baby food, using a Dependent Care FSA for childcare, and registering strategically for big-ticket items.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Baby Budget Planner',
  description: 'Plan your baby budget with realistic cost estimates across 8 categories. Compare budget, mid-range, and premium options. Adjust for feeding method and see monthly and first-year totals.',
  path: '/tools/baby-budget',
  applicationCategory: 'UtilityApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Budget Planner' },
]);

export default function BabyBudgetPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Budget Planner" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A baby budget calculator estimates the first-year costs of raising an infant, covering categories like diapers, feeding, clothing, childcare, and healthcare to help new parents plan their finances.</p>
        <BabyBudgetPlanner />
      </div>
    </div>
  );
}
