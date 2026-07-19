import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GenderPredictor from "@/components/tools/GenderPredictor";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chinese Gender Predictor - Boy or Girl?",
  description:
    "Use the traditional Chinese Gender Prediction Chart to guess if you're having a boy or girl. Based on the mother's lunar age and month of conception. For fun only!",
  alternates: {
    canonical: "/tools/gender-predictor",
  },
  openGraph: {
    title: "Chinese Gender Predictor - Boy or Girl?",
    description:
      "Fun gender prediction tool based on the ancient Chinese gender chart. Uses mother's age and conception month.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the Chinese Gender Predictor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Despite claims of 85-93% accuracy, scientific studies show the Chinese Gender Prediction Chart is no more accurate than flipping a coin (about 50%). It should be used for entertainment purposes only.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Chinese Gender Chart work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The chart cross-references the mother's lunar age at conception with the lunar month of conception to predict boy or girl. Lunar age is typically 1-2 years older than Western age because the Chinese system counts from conception and adds a year at Chinese New Year.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Chinese Gender Predictor',
  description: 'Use the traditional Chinese Gender Prediction Chart to guess if you\'re having a boy or girl. Based on the mother\'s lunar age and month of conception. For fun only!',
  path: '/tools/gender-predictor',
  applicationCategory: 'UtilityApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Gender Predictor' },
]);

export default function GenderPredictorPage() {
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
          { label: "Gender Predictor" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A baby gender predictor uses the Chinese Gender Calendar method, which cross-references the mother&apos;s lunar age at conception with the month of conception — this is for entertainment only and is not scientifically accurate.</p>
        <GenderPredictor />
      </div>
    </div>
  );
}
