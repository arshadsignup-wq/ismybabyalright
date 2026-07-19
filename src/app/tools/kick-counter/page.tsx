import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KickCounter from "@/components/tools/KickCounter";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Kick Counter - Track Fetal Movement During Pregnancy",
  description:
    "Count your baby's kicks during pregnancy. Track how long it takes to feel 10 movements — recommended starting at 28 weeks. Based on ACOG guidelines.",
  alternates: {
    canonical: "/tools/kick-counter",
  },
  openGraph: {
    title: "Baby Kick Counter - Track Fetal Movement During Pregnancy",
    description:
      "Daily kick counter for pregnancy. Track fetal movements, understand what counts, and know when to call your provider.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many kicks should I feel per hour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should feel at least 10 movements within 2 hours, though most babies reach 10 within 30 minutes. Count kicks, rolls, swishes, and jabs — but not hiccups. If you don't feel 10 movements in 2 hours, contact your healthcare provider.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start counting kicks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ACOG recommends starting daily kick counts at 28 weeks (the beginning of the third trimester). Choose a time when your baby is usually active, often after a meal or in the evening.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Baby Kick Counter',
  description: 'Count your baby\'s kicks during pregnancy. Track how long it takes to feel 10 movements — recommended starting at 28 weeks. Based on ACOG guidelines.',
  path: '/tools/kick-counter',
  applicationCategory: 'HealthApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Kick Counter' },
]);

export default function KickCounterPage() {
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
          { label: "Kick Counter" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A kick counter helps expectant parents track fetal movements during the third trimester, with the goal of feeling at least 10 movements within 2 hours as recommended by ACOG.</p>
        <KickCounter />
      </div>
    </div>
  );
}
