import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BMICalculator from "@/components/tools/BMICalculator";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pediatric BMI Calculator - Child BMI Percentile by Age",
  description:
    "Calculate your child's BMI and BMI-for-age percentile based on CDC growth charts. For children ages 2-18. Understand weight categories and what they mean.",
  alternates: {
    canonical: "/tools/bmi",
  },
  openGraph: {
    title: "Pediatric BMI Calculator - Child BMI Percentile by Age",
    description:
      "Calculate your child's BMI percentile based on CDC growth charts. Covers ages 2-18 with weight category guidance.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a healthy BMI for a child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For children ages 2-18, a healthy BMI is between the 5th and 84th percentile for their age and sex. Unlike adults, BMI in children is age- and sex-specific because body composition changes as children grow.",
      },
    },
    {
      "@type": "Question",
      name: "Is BMI accurate for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMI is a useful screening tool but not a diagnostic measure. It doesn't directly measure body fat. Your pediatrician considers BMI alongside growth patterns, family history, and other factors for a complete assessment.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Pediatric BMI Calculator',
  description: 'Calculate your child\'s BMI and BMI-for-age percentile based on CDC growth charts. For children ages 2-18. Understand weight categories and what they mean.',
  path: '/tools/bmi',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'BMI Calculator' },
]);

export default function BMIPage() {
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
          { label: "BMI Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A child BMI calculator determines your child&apos;s Body Mass Index percentile based on age and sex, using CDC growth charts to screen for underweight, healthy weight, overweight, or obesity categories.</p>
        <BMICalculator />
      </div>
    </div>
  );
}
