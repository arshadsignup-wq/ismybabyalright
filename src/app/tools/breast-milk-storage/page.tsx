import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreastMilkStorageGuide from "@/components/tools/BreastMilkStorageGuide";

export const metadata: Metadata = {
  title: "Breast Milk Storage Guide - How Long Does Breast Milk Last?",
  description:
    "CDC-based breast milk storage guidelines. How long breast milk lasts at room temperature, in the fridge, freezer, and deep freezer. Includes thawing tips.",
  alternates: {
    canonical: "/tools/breast-milk-storage",
  },
  openGraph: {
    title: "Breast Milk Storage Guide - How Long Does Breast Milk Last?",
    description:
      "Quick reference for breast milk storage times and temperatures. Based on CDC and AAP guidelines.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long can breast milk sit out at room temperature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freshly expressed breast milk can sit at room temperature (up to 77°F / 25°C) for up to 4 hours. Previously frozen and thawed milk should be used within 1-2 hours at room temperature.",
      },
    },
    {
      "@type": "Question",
      name: "How long does breast milk last in the fridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fresh breast milk lasts up to 4 days in the refrigerator (40°F / 4°C or below), with 3 days being optimal for quality. Store it in the back of the fridge, not in the door. Thawed milk should be used within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refreeze thawed breast milk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Once breast milk has been thawed, it should never be refrozen. Thawed milk must be used within 24 hours if stored in the refrigerator, or within 1-2 hours at room temperature.",
      },
    },
  ],
};

export default function BreastMilkStoragePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Breast Milk Storage" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <BreastMilkStorageGuide />
      </div>
    </div>
  );
}
