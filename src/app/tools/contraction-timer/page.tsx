import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContractionTimer from "@/components/tools/ContractionTimer";

export const metadata: Metadata = {
  title: "Contraction Timer - Track Duration & Frequency",
  description:
    "Time your contractions to know when it's time to go to the hospital. Track duration, frequency, and the 5-1-1 rule for labor.",
  alternates: {
    canonical: "/tools/contraction-timer",
  },
  openGraph: {
    title: "Contraction Timer - Track Duration & Frequency",
    description:
      "Track contraction duration and frequency. Know when to head to the hospital with the 5-1-1 rule.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 5-1-1 rule for contractions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 5-1-1 rule means: contractions come every 5 minutes, last for 1 minute each, and have been consistent for 1 hour. When this pattern is established, it's generally time to head to the hospital or call your provider.",
      },
    },
    {
      "@type": "Question",
      name: "How do I time contractions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start timing when a contraction begins (when your belly tightens) and stop when it ends (when the tightness releases). The duration is how long each contraction lasts. The frequency is measured from the start of one contraction to the start of the next.",
      },
    },
  ],
};

export default function ContractionTimerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Contraction Timer" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <ContractionTimer />
      </div>
    </div>
  );
}
