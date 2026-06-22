import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GrowthCalculator from "@/components/growth/GrowthCalculator";

export const metadata: Metadata = {
  title: "Baby Growth Percentile Calculator (WHO Standards)",
  description:
    "Calculate your baby's weight, length, and head circumference percentiles using WHO growth standards. Free chart for boys and girls, newborn to 36 months.",
  alternates: {
    canonical: "/tools/growth",
  },
  openGraph: {
    title: "Baby Growth Percentile Calculator (WHO Standards) | Is My Baby Alright?",
    description:
      "Calculate your baby's weight, length, and head circumference percentiles using WHO growth standards. Free chart for boys and girls, newborn to 36 months.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What percentile should my baby be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single 'right' percentile — any percentile from the 3rd to the 97th can be normal. What matters most is that your baby follows a consistent growth curve over time. A sudden drop or jump across two or more percentile lines may warrant a discussion with your pediatrician.",
      },
    },
    {
      "@type": "Question",
      name: "How do I read a baby growth chart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A growth chart shows how your baby's measurements compare to other children of the same age and sex. The curved lines represent percentiles — for example, the 50th percentile means your baby is right in the middle. Plot your baby's weight, length, or head circumference at their age to see which percentile line they fall near.",
      },
    },
    {
      "@type": "Question",
      name: "Is my baby's weight normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Babies come in all sizes, and most weights are normal. The WHO growth standards are used for children under 2. Your pediatrician tracks your baby's weight percentile over time — consistent growth along any curve is typically healthy. Rapid weight loss, failure to gain, or crossing two percentile lines warrants medical attention.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ismybabyalright.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Growth Calculator",
      item: "https://www.ismybabyalright.com/tools/growth",
    },
  ],
};

export default function GrowthPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Growth Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <GrowthCalculator />
      </div>
    </div>
  );
}
