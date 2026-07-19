import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BabyProofingChecklist from "@/components/tools/BabyProofingChecklist";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby-Proofing Checklist - Room by Room Safety Guide",
  description:
    "Complete baby-proofing checklist by room and age. Track your progress from prenatal through toddlerhood. Based on AAP, CPSC, and Safe Kids Worldwide guidelines.",
  alternates: {
    canonical: "/tools/baby-proofing",
  },
  openGraph: {
    title: "Baby-Proofing Checklist - Room by Room Safety Guide",
    description:
      "Interactive baby-proofing checklist organized by room and developmental stage. Track your progress with saved checkmarks.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I start baby-proofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start basic baby-proofing before baby arrives — install smoke detectors, secure furniture, and set up a safe sleep space. Then expand as baby becomes mobile (around 4-6 months for reaching and rolling, 7-12 months for crawling and cruising).",
      },
    },
    {
      "@type": "Question",
      name: "What is the most important thing to baby-proof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest priorities are: 1) Safe sleep environment (bare crib, firm mattress), 2) Anchoring furniture to walls, 3) Securing medications and cleaning products, 4) Installing baby gates at stairs, and 5) Setting water heater below 120°F.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Baby-Proofing Checklist',
  description: 'Complete baby-proofing checklist by room and age. Track your progress from prenatal through toddlerhood. Based on AAP, CPSC, and Safe Kids Worldwide guidelines.',
  path: '/tools/baby-proofing',
  applicationCategory: 'UtilityApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Baby-Proofing Checklist' },
]);

export default function BabyProofingPage() {
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
          { label: "Baby-Proofing Checklist" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A baby-proofing checklist is a room-by-room safety guide that identifies potential hazards in your home and provides age-appropriate recommendations for childproofing, based on CPSC safety guidelines.</p>
        <BabyProofingChecklist />
      </div>
    </div>
  );
}
