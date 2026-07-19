import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WFLCalculator from "@/components/growth/WFLCalculator";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Weight-for-Length Percentile Calculator (WHO Charts)",
  description:
    "Calculate your baby's weight-for-length percentile using WHO growth charts. Check if your child's weight is proportional to their length — for boys and girls under 2 years.",
  alternates: {
    canonical: "/tools/weight-for-length",
  },
  openGraph: {
    title: "Baby Weight-for-Length Percentile Calculator (WHO Charts) | Is My Baby Alright?",
    description:
      "Calculate your baby's weight-for-length percentile using WHO growth charts. For boys and girls under 2 years.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: 'Baby Weight-for-Length Percentile Calculator',
  description: 'Calculate your baby\'s weight-for-length percentile using WHO growth charts. Check if your child\'s weight is proportional to their length — for boys and girls under 2 years.',
  path: '/tools/weight-for-length',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Weight-for-Length Calculator' },
]);

export default function WeightForLengthPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Weight-for-Length Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A weight-for-length calculator plots your baby&apos;s proportionality on WHO growth standards, helping identify whether weight is appropriate for their length rather than relying on weight or length percentiles alone.</p>
        <WFLCalculator />
      </div>
    </div>
  );
}
