import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WonderWeeksCalculator from "@/components/tools/WonderWeeksCalculator";

export const metadata: Metadata = {
  title: "Wonder Weeks Calculator - Is My Baby in a Developmental Leap?",
  description:
    "Find out if your baby is going through a developmental leap. Track all 10 Wonder Weeks leaps with signs, new abilities, and timing for babies 0-20 months.",
  alternates: {
    canonical: "/tools/wonder-weeks",
  },
  openGraph: {
    title: "Wonder Weeks Calculator - Developmental Leaps Tracker",
    description:
      "Track your baby's 10 developmental leaps. See what mental skills emerge at each stage and how to support your baby.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the Wonder Weeks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Wonder Weeks are 10 predictable developmental leaps that babies go through in the first 20 months. During each leap, babies experience a period of fussiness followed by new mental abilities. These leaps are based on research by Dutch researchers Hetty van de Rijt and Frans Plooij.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my baby suddenly so fussy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sudden fussiness, clinginess, and sleep disruption are common signs of a developmental leap. Your baby's brain is rewiring, which can feel overwhelming. The fussy period usually passes within 1-2 weeks and is followed by exciting new skills.",
      },
    },
  ],
};

export default function WonderWeeksPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Wonder Weeks" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <WonderWeeksCalculator />
      </div>
    </div>
  );
}
