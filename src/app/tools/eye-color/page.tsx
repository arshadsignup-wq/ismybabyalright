import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EyeColorPredictor from "@/components/tools/EyeColorPredictor";
import { getWebApplicationSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Eye Color Predictor - What Color Will My Baby's Eyes Be?",
  description:
    "Predict your baby's eye color based on both parents' eye colors. See probabilities for brown, blue, green, and hazel eyes.",
  alternates: {
    canonical: "/tools/eye-color",
  },
  openGraph: {
    title: "Baby Eye Color Predictor - What Color Will My Baby's Eyes Be?",
    description:
      "Fun eye color prediction tool based on parent genetics. See the probability of brown, blue, green, or hazel eyes.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do babies' eyes change color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies are born with blue or dark gray eyes. Permanent eye color usually develops between 6-12 months as melanin production increases. Some children's eye color may continue to change until age 3.",
      },
    },
    {
      "@type": "Question",
      name: "Can two brown-eyed parents have a blue-eyed baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! If both parents carry a recessive blue-eye gene, there is approximately a 25% chance of having a blue-eyed child. Eye color inheritance involves multiple genes, so surprises are common.",
      },
    },
  ],
};

const webAppSchema = getWebApplicationSchema({
  name: 'Baby Eye Color Predictor',
  description: 'Predict your baby\'s eye color based on both parents\' eye colors. See probabilities for brown, blue, green, and hazel eyes.',
  path: '/tools/eye-color',
  applicationCategory: 'UtilityApplication',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Eye Color Predictor' },
]);

export default function EyeColorPage() {
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
          { label: "Eye Color Predictor" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <p className="text-base text-muted leading-relaxed mb-6">A baby eye color predictor estimates the likelihood of your child&apos;s eye color based on both parents&apos; eye colors, using simplified genetics principles — though actual eye color involves multiple genes.</p>
        <EyeColorPredictor />
      </div>
    </div>
  );
}
