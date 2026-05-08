import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FeedingAmountCalculator from "@/components/tools/FeedingAmountCalculator";

export const metadata: Metadata = {
  title: "Baby Feeding Amount Calculator - How Much Should My Baby Eat?",
  description:
    "Calculate how much formula or breast milk your baby needs by age. Includes per-feed amounts, daily totals, feeding frequency, and when to introduce solids.",
  alternates: {
    canonical: "/tools/feeding-amount",
  },
  openGraph: {
    title: "Baby Feeding Amount Calculator - How Much Should My Baby Eat?",
    description:
      "Age-based feeding guide with formula amounts, breastfeeding duration, and solid food introduction timeline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many ounces should a newborn eat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newborns typically eat 1-2 ounces per feeding, every 2-3 hours, for a total of 12-20 ounces per day. Feedings increase gradually over the first few weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I feed my 3 month old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3-month-old typically feeds 6-8 times per day, about every 3-4 hours. Formula-fed babies usually take 4-5 ounces per feeding.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start giving my baby solid food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies are ready for solids around 6 months, when they can sit with support, show interest in food, and have lost the tongue-thrust reflex. Some may show readiness at 4 months — talk to your pediatrician.",
      },
    },
  ],
};

export default function FeedingAmountPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Feeding Amount" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <FeedingAmountCalculator />
      </div>
    </div>
  );
}
