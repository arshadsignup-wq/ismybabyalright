import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import OvulationCalculator from "@/components/tools/OvulationCalculator";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ovulation & Fertility Calculator - Track Your Fertile Window",
  description:
    "Calculate your ovulation date and fertile window based on your cycle length. Track your most fertile days across multiple cycles.",
  alternates: {
    canonical: "/tools/ovulation",
  },
  openGraph: {
    title: "Ovulation & Fertility Calculator - Track Your Fertile Window",
    description:
      "Estimate your ovulation day and fertile window for the next 6 cycles based on your menstrual cycle length.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do I ovulate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ovulation typically occurs about 14 days before your next period. For a 28-day cycle, this is around day 14. For a 30-day cycle, around day 16. The fertile window spans about 6 days — the 5 days before ovulation and the day of ovulation itself.",
      },
    },
    {
      "@type": "Question",
      name: "What are the signs of ovulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include changes in cervical mucus (becoming clear and stretchy), a slight rise in basal body temperature, mild pelvic pain or cramping, increased libido, and breast tenderness.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Ovulation & Fertility Calculator',
  description: 'Calculate your ovulation date and fertile window based on your cycle length. Track your most fertile days across multiple cycles.',
  path: '/tools/ovulation',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Ovulation Calculator' },
]);

export default function OvulationPage() {
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
          { label: "Ovulation Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">An ovulation calculator estimates your most fertile days based on your cycle length and last period date, helping you identify the optimal window for conception.</p>
        <OvulationCalculator />
      </div>
    </div>
  );
}
