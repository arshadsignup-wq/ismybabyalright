import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import HeightPredictor from "@/components/tools/HeightPredictor";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Child Height Predictor - Estimate Adult Height from Parent Heights",
  description:
    "Predict your child's adult height using the mid-parental height formula. Enter both parents' heights and child's sex to get an estimated height range. Based on AAP guidelines.",
  alternates: {
    canonical: "/tools/height-predictor",
  },
  openGraph: {
    title: "Child Height Predictor - Estimate Adult Height from Parent Heights",
    description:
      "Estimate your child's adult height using the clinically-used mid-parental height formula. Supports ft/in and cm.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How tall will my child be as an adult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common method is the mid-parental height formula: for boys, add 5 inches to the mother's height, add the father's height, and divide by 2. For girls, subtract 5 inches from the father's height, add the mother's height, and divide by 2. This gives an estimate within +/- 2 inches.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the height predictor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mid-parental height formula provides an estimate within about +/- 2 inches (5 cm) of actual adult height. Nutrition, health conditions, and genetic variation can cause actual height to differ.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Child Height Predictor',
  description: 'Predict your child\'s adult height using the mid-parental height formula. Enter both parents\' heights and child\'s sex to get an estimated height range. Based on AAP guidelines.',
  path: '/tools/height-predictor',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Height Predictor' },
]);

export default function HeightPredictorPage() {
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
          { label: "Height Predictor" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A child height predictor estimates adult height using the mid-parental height method, which averages both parents&apos; heights with an adjustment factor to provide a predicted height range.</p>
        <HeightPredictor />
      </div>
    </div>
  );
}
