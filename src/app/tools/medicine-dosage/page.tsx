import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DosageCalculator from "@/components/tools/DosageCalculator";

export const metadata: Metadata = {
  title: "Baby Medicine Dosage Calculator - Tylenol & Motrin by Weight",
  description:
    "Calculate the correct dose of acetaminophen (Tylenol) and ibuprofen (Motrin/Advil) for your baby or child by weight. Based on AAP-published dosing tables.",
  alternates: {
    canonical: "/tools/medicine-dosage",
  },
  openGraph: {
    title: "Baby Medicine Dosage Calculator - Tylenol & Motrin by Weight",
    description:
      "Weight-based dosing calculator for infant acetaminophen and ibuprofen. Based on AAP dosing tables from HealthyChildren.org.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much Tylenol can I give my 20 lb baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a 20 lb baby, the recommended dose of infant acetaminophen (160 mg/5 mL) is 120 mg, or 3.75 mL, every 4-6 hours as needed. Do not exceed 5 doses in 24 hours. Always confirm with your pediatrician.",
      },
    },
    {
      "@type": "Question",
      name: "Can I give ibuprofen to a baby under 6 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ibuprofen (Motrin/Advil) is not recommended for infants under 6 months of age. Use acetaminophen (Tylenol) instead for babies 3-6 months, and always consult your pediatrician first.",
      },
    },
    {
      "@type": "Question",
      name: "How often can I give my baby Tylenol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acetaminophen (Tylenol) can be given every 4-6 hours as needed, with a maximum of 5 doses in a 24-hour period. Do not give more frequently than every 4 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between infant Tylenol and children's Tylenol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Infant and children's liquid acetaminophen are now the same concentration: 160 mg per 5 mL. The main difference is the dosing device — infant versions come with a syringe for smaller, more precise doses.",
      },
    },
    {
      "@type": "Question",
      name: "Can I alternate Tylenol and Motrin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some pediatricians recommend alternating acetaminophen and ibuprofen every 3-4 hours for persistent fevers, but you should only do this under your doctor's guidance to avoid dosing errors.",
      },
    },
  ],
};

const medicalJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Baby Medicine Dosage Calculator - Tylenol & Motrin by Weight",
  description:
    "Weight-based dosing calculator for infant acetaminophen and ibuprofen based on AAP-published dosing tables.",
  url: "https://www.ismybabyalright.com/tools/medicine-dosage",
  lastReviewed: "2025-05-01",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
};

export default function MedicineDosagePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Medicine Dosage" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <DosageCalculator />

        <section className="mt-12 border-t border-[#E8E2D9] pt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Related Concerns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/concerns/persistent-fever-baby"
              className="card p-4 no-underline hover:border-primary transition-colors"
            >
              <span className="text-sm font-bold text-foreground">Persistent Fever in Babies</span>
              <p className="text-xs text-muted mt-1">
                When to worry, how to treat, and when to call the doctor.
              </p>
            </Link>
            <Link
              href="/concerns/baby-teething-fever-myth"
              className="card p-4 no-underline hover:border-primary transition-colors"
            >
              <span className="text-sm font-bold text-foreground">Teething & Fever</span>
              <p className="text-xs text-muted mt-1">
                Does teething really cause fever? What to know and when to medicate.
              </p>
            </Link>
            <Link
              href="/concerns/ear-infections"
              className="card p-4 no-underline hover:border-primary transition-colors"
            >
              <span className="text-sm font-bold text-foreground">Ear Infections</span>
              <p className="text-xs text-muted mt-1">
                Signs, treatment options, and when antibiotics are needed.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
