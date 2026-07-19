import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DiaperSizeGuide from "@/components/tools/DiaperSizeGuide";
import ComparisonTable from "@/components/shared/ComparisonTable";
import { DIAPER_SIZES } from "@/data/diaper-size/data";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

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

const webAppSchema = getWebApplicationSchema({
  name: 'Diaper Size Guide',
  description: 'Find the right diaper size for your baby by weight. Full size chart from Preemie through Size 7 with weight ranges, age estimates, daily counts, and fit tips.',
  path: '/tools/diaper-size',
  applicationCategory: 'UtilityApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Diaper Size Guide' },
]);

export default function DiaperSizePage() {
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
          { label: "Diaper Size Guide" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">
          A diaper size guide is a weight-based reference chart that helps parents find the right diaper size from Preemie through Size 7, with weight ranges, typical age estimates, daily diaper counts, and fit tips.
        </p>

        <DiaperSizeGuide />

        <section className="mt-12 border-t border-[#E8E2D9] pt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Diaper Size Chart by Weight
          </h2>
          <ComparisonTable
            caption="Diaper Size Chart by Weight"
            headers={["Size", "Weight (lbs)", "Age Range", "Diapers/Day", "Notes"]}
            rows={DIAPER_SIZES.map((d) => [
              d.size,
              d.weightMinLbs === 0 ? `Up to ${d.weightMaxLbs}` : `${d.weightMinLbs} - ${d.weightMaxLbs}`,
              d.ageRange,
              d.diapersPerDay,
              d.notes,
            ])}
            sourceNote="Sizes may vary slightly between brands. Weight is the primary factor in choosing diaper size."
          />
        </section>
      </div>
    </div>
  );
}
