import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ScreenTimeCalculator from "@/components/tools/ScreenTimeCalculator";
import ComparisonTable from "@/components/shared/ComparisonTable";
import { SCREEN_TIME_GUIDELINES } from "@/data/screen-time/data";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Screen Time Guidelines by Age - How Much Is Too Much?",
  description:
    "Age-specific screen time recommendations from the AAP and WHO. Find out how much screen time is appropriate for your child and get tips for healthy media habits.",
  alternates: {
    canonical: "/tools/screen-time",
  },
  openGraph: {
    title: "Screen Time Guidelines by Age - How Much Is Too Much?",
    description:
      "AAP and WHO screen time recommendations by age. Tips for healthy screen habits and alternatives to screen time.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much screen time should a 2 year old have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AAP recommends no more than 1 hour per day of high-quality programming for children ages 2-5, and always with a parent co-viewing. Choose educational, age-appropriate content and talk about what you see.",
      },
    },
    {
      "@type": "Question",
      name: "Should babies have any screen time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AAP recommends no screen time for children under 18 months, with the exception of video chatting (FaceTime, Zoom) with family. Babies learn best from face-to-face interactions with caregivers.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Screen Time Guidelines',
  description: 'Age-specific screen time recommendations from the AAP and WHO. Find out how much screen time is appropriate for your child and get tips for healthy media habits.',
  path: '/tools/screen-time',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Screen Time Guidelines' },
]);

export default function ScreenTimePage() {
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
          { label: "Screen Time Guidelines" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">
          Screen time guidelines provide age-specific recommendations from the AAP and WHO on how much screen time is appropriate for children, along with tips for healthy media habits and alternatives to screen use.
        </p>

        <ScreenTimeCalculator />

        <section className="mt-12 border-t border-[#E8E2D9] pt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Screen Time Recommendations by Age
          </h2>
          <ComparisonTable
            caption="Screen Time Recommendations by Age"
            headers={["Age", "Recommendation", "Max Daily", "Details"]}
            rows={SCREEN_TIME_GUIDELINES.map((g) => [
              g.label,
              g.recommendation,
              g.maxMinutesPerDay === 0 ? "None" : g.maxMinutesPerDay == null ? "Varies" : `${g.maxMinutesPerDay} min`,
              g.details,
            ])}
            sourceNote="Based on American Academy of Pediatrics (AAP) media use recommendations."
          />
        </section>
      </div>
    </div>
  );
}
