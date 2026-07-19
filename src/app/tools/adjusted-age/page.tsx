import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdjustedAgeCalc from "@/components/tools/AdjustedAgeCalc";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Adjusted Age Calculator",
  description:
    "Calculate your premature baby's adjusted (corrected) age for developmental milestones. Enter due date and birth date to see adjusted age.",
  alternates: {
    canonical: "/tools/adjusted-age",
  },
  openGraph: {
    title: "Adjusted Age Calculator | Is My Baby Alright?",
    description:
      "Calculate your premature baby's adjusted age for developmental milestones.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: 'Adjusted Age Calculator',
  description: 'Calculate your premature baby\'s adjusted (corrected) age for developmental milestones. Enter due date and birth date to see adjusted age.',
  path: '/tools/adjusted-age',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Adjusted Age Calculator' },
]);

export default function AdjustedAgePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Adjusted Age Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">An adjusted age calculator determines a premature baby&apos;s developmental age by subtracting weeks of prematurity from their chronological age, helping parents and pediatricians set realistic milestone expectations.</p>
        <AdjustedAgeCalc />
      </div>
    </div>
  );
}
