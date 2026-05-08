import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DiaperSizeGuide from "@/components/tools/DiaperSizeGuide";

export const metadata: Metadata = {
  title: "Diaper Size Guide - Find the Right Size by Weight",
  description:
    "Find the right diaper size for your baby by weight. Full size chart from Preemie through Size 7 with weight ranges, age estimates, daily counts, and fit tips.",
  alternates: {
    canonical: "/tools/diaper-size",
  },
  openGraph: {
    title: "Diaper Size Guide - Find the Right Size by Weight",
    description:
      "Weight-based diaper size chart with fit tips. Covers Preemie through Size 7.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size diaper does my baby need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diaper size is based on weight, not age. Most newborns start in Newborn (up to 10 lbs) or Size 1 (8-14 lbs). Check for red marks on thighs or frequent blowouts as signs to size up.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know when to go up a diaper size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs it's time to size up: red marks on baby's thighs or waist, frequent blowouts up the back, the diaper doesn't fully cover baby's bottom, or you can't comfortably fit two fingers under the waistband.",
      },
    },
  ],
};

export default function DiaperSizePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Diaper Size Guide" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <DiaperSizeGuide />
      </div>
    </div>
  );
}
