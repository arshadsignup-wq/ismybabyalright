import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { allCheckpoints } from "@/data/milestones";

export const metadata: Metadata = {
  title: "Baby Developmental Milestones by Age (1-36 Months)",
  description:
    "Track your baby's developmental milestones from 1 to 36 months. Gross motor, fine motor, language, social-emotional, and cognitive skills based on CDC, WHO, and AAP guidelines.",
  alternates: {
    canonical: "/milestones",
  },
  openGraph: {
    title: "Baby Developmental Milestones by Age (1-36 Months) | Is My Baby Alright?",
    description:
      "Track your baby's developmental milestones from 1 to 36 months. Gross motor, fine motor, language, social-emotional, and cognitive skills based on CDC, WHO, and AAP guidelines.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do babies start walking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies take their first steps between 9 and 12 months and walk well by 14 to 15 months. Some babies don't walk until 17-18 months, which is still within the normal range. Talk to your pediatrician if your baby isn't walking by 18 months.",
      },
    },
    {
      "@type": "Question",
      name: "When do babies say their first word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies say their first recognizable word (like 'mama' or 'dada' with meaning) around 12 months. By 18 months, many toddlers can say 10-25 words. Contact your pediatrician if your child has no words by 15-16 months.",
      },
    },
    {
      "@type": "Question",
      name: "When do babies start crawling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies begin crawling between 7 and 10 months. Some babies skip crawling entirely and go straight to pulling up and walking. Other forms of movement like scooting or army crawling are also normal. Talk to your doctor if your baby isn't mobile by 12 months.",
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
      name: "Milestones",
      item: "https://www.ismybabyalright.com/milestones",
    },
  ],
};

export default function MilestonesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Milestones" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>Milestones by Age</h1>
        <p className="text-muted text-lg mb-8 max-w-2xl">
          Select your child&apos;s age to see what to expect for gross motor,
          fine motor, language, social-emotional, and cognitive development.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allCheckpoints.map((checkpoint) => (
            <Link
              key={checkpoint.id}
              href={`/milestones/${checkpoint.id}`}
              className="card flex flex-col items-center justify-center text-center p-6 min-h-[120px] hover:border-primary hover:shadow-md transition-all no-underline group"
            >
              <span className="text-2xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                {checkpoint.ageInMonths}
              </span>
              <span className="text-sm text-muted mt-1">
                {checkpoint.ageInMonths === 1 ? "month" : "months"}
              </span>
              <span className="text-sm font-medium text-foreground mt-2">
                {checkpoint.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
