import type { Metadata } from "next";
import Link from "next/link";
import { allTriageTrees } from "@/data/triage";

export const metadata: Metadata = {
  title: "Baby Symptom Checker: Fever, Rash, Vomiting & More",
  description:
    "Should I call the doctor? Free evidence-based triage tool for 11 common baby symptoms including fever, rash, vomiting, diarrhea, and breathing difficulty.",
  alternates: {
    canonical: "/triage",
  },
  openGraph: {
    title: "Baby Symptom Checker: Fever, Rash, Vomiting & More | Is My Baby Alright?",
    description:
      "Should I call the doctor? Free evidence-based triage tool for 11 common baby symptoms including fever, rash, vomiting, diarrhea, and breathing difficulty.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I take my baby to the ER?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take your baby to the ER for a fever over 100.4°F (38°C) in babies under 3 months, difficulty breathing, blue lips or skin, unresponsiveness, signs of dehydration (no wet diapers for 6+ hours), or any seizure. When in doubt, call your pediatrician or 911.",
      },
    },
    {
      "@type": "Question",
      name: "What fever is dangerous for a baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any fever (100.4°F / 38°C or higher) in a baby under 3 months is considered an emergency — go to the ER immediately. For babies 3-6 months, call your doctor for fevers over 101°F. For babies over 6 months, seek care for fevers above 102°F or any fever lasting more than 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "When to call the doctor for baby vomiting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call your doctor if your baby is vomiting forcefully (projectile), has blood or green bile in vomit, shows signs of dehydration (dry mouth, no tears, fewer wet diapers), has vomited for more than 12-24 hours, or if the baby is under 3 months old.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ismybabyalright.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Symptom Checker",
      item: "https://www.ismybabyalright.com/triage",
    },
  ],
};

export default function TriagePage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="text-center mb-8">
        <h1 className="text-foreground">Should I call the doctor?</h1>
        <p className="text-muted mt-2 leading-relaxed">
          Answer a few questions about your baby&apos;s symptoms and get clear
          guidance  -  including what to say when you call.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {allTriageTrees.map((tree) => (
          <Link
            key={tree.slug}
            href={`/triage/${tree.slug}`}
            className="card p-5 flex items-center gap-4 hover:border-primary transition-colors no-underline"
          >
            <span className="text-3xl" aria-hidden="true">{tree.icon}</span>
            <div>
              <span className="text-base font-bold text-foreground">{tree.title}</span>
              <p className="text-sm text-muted mt-0.5">{tree.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-xs text-muted text-center mt-8 leading-relaxed">
        This tool is not a substitute for medical advice. When in doubt, always
        call your pediatrician or go to the emergency room.
      </p>
    </div>
  );
}
