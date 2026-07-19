import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContractionTimer from "@/components/tools/ContractionTimer";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

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

const webAppSchema = getWebApplicationSchema({
  name: 'Contraction Timer',
  description: 'Time your contractions to know when it\'s time to go to the hospital. Track duration, frequency, and the 5-1-1 rule for labor.',
  path: '/tools/contraction-timer',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Contraction Timer' },
]);

export default function ContractionTimerPage() {
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
          { label: "Contraction Timer" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A contraction timer tracks the duration and frequency of contractions during labor, helping you determine when contractions are regular enough to head to the hospital — typically when they are 5 minutes apart, lasting 1 minute each, for at least 1 hour.</p>
        <ContractionTimer />
      </div>
    </div>
  );
}
