import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RegressionLog from "@/components/tools/RegressionLog";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Regression Log",
  description:
    "Track and document developmental skill regression. Record lost skills with dates to share with your pediatrician or specialist.",
  alternates: {
    canonical: "/tools/regression-log",
  },
  openGraph: {
    title: "Regression Log | Is My Baby Alright?",
    description:
      "Track and document developmental skill regression. Record lost skills with dates for your pediatrician.",
  },
};

const webAppSchema = getWebApplicationSchema({
  name: 'Regression Log',
  description: 'Track and document developmental skill regression. Record lost skills with dates to share with your pediatrician or specialist.',
  path: '/tools/regression-log',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Regression Log' },
]);

export default function RegressionLogPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Regression Log" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A sleep regression tracker helps parents log and identify periods when a baby who previously slept well begins waking more frequently, typically occurring at predictable ages like 4, 8, 12, and 18 months.</p>
        <RegressionLog />
      </div>
    </div>
  );
}
