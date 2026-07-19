import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import { symptomCategories } from "@/data/symptom-categories";

export const metadata: Metadata = {
  title: "Symptom Index - Find Baby Symptoms by Body System",
  description:
    "Browse baby symptoms organized by body system — fever, breathing, skin, digestive, eyes, head, movement, and behavior. Find what you observe and learn what it might mean.",
  alternates: {
    canonical: "/symptoms",
  },
  openGraph: {
    title: "Symptom Index - Find Baby Symptoms by Body System | Is My Baby Alright?",
    description:
      "Browse baby symptoms organized by body system — fever, breathing, skin, digestive, eyes, head, movement, and behavior. Find what you observe and learn what it might mean.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      url: "https://www.ismybabyalright.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Symptom Index",
      url: "https://www.ismybabyalright.com/symptoms",
    },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Symptom Index - Find Baby Symptoms by Body System",
  description:
    "Browse baby symptoms organized by body system. Navigate from what you observe to what it might mean.",
  url: "https://www.ismybabyalright.com/symptoms",
  isPartOf: {
    "@type": "WebSite",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

export default function SymptomsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Symptom Index" }]} />

      <div className="mx-auto max-w-3xl px-5 py-10">
        {/* Intro */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Symptom Index
          </h1>
          <p className="mt-3 text-muted text-base sm:text-lg leading-relaxed">
            Not sure what&apos;s going on with your baby? Start here. This page
            helps you navigate from what you observe — a rash, a cough, a change
            in behavior — to what it might mean. Browse symptoms by body system,
            check them with our triage tool, or read the related concern guides.
          </p>
          <div className="mt-4">
            <LastReviewed date="2026-07-01" />
          </div>
          <div className="mt-3">
            <MedicalReviewAttribution sources={['AAP', 'CDC']} />
          </div>
        </div>

        {/* Quick links */}
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/triage"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F07167] px-4 py-2.5 text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
          >
            Symptom Checker
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/when-to-call-the-doctor"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E2D9] bg-white px-4 py-2.5 text-sm font-bold text-foreground no-underline transition-colors hover:border-primary hover:text-primary"
          >
            When to Call the Doctor
          </Link>
        </div>

        {/* Symptom categories */}
        <div className="flex flex-col gap-6">
          {symptomCategories.map((category) => (
            <section
              key={category.id}
              className="rounded-xl border border-[#E8E2D9] bg-white p-5"
            >
              <h2 className="text-lg font-bold text-foreground">
                {category.title}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {category.description}
              </p>

              <ul className="mt-4 flex flex-col gap-3">
                {category.symptoms.map((symptom) => (
                  <li
                    key={symptom.label}
                    className="border-t border-[#E8E2D9] pt-3 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {symptom.label}
                      </span>
                      {symptom.triageSlug && (
                        <Link
                          href={`/triage/${symptom.triageSlug}`}
                          className="text-xs font-medium text-[#F07167] no-underline hover:underline"
                        >
                          Check symptoms &rarr;
                        </Link>
                      )}
                    </div>

                    {symptom.concernSlugs.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {symptom.concernSlugs.map((slug) => (
                          <Link
                            key={slug}
                            href={`/concerns/${slug}`}
                            className="inline-block rounded-md bg-[#FAF8F5] px-2 py-0.5 text-xs text-muted no-underline transition-colors hover:bg-[#F0EDE8] hover:text-foreground"
                          >
                            {slug.replace(/-/g, " ")}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <BottomLine summary="Most childhood symptoms are caused by common, self-limiting illnesses. This index helps you understand what you're seeing and when to seek medical attention. Always call your pediatrician if you're unsure." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Back to Home */}
        <div className="mt-10 pt-6 border-t border-[#E8E2D9] text-center">
          <Link
            href="/"
            className="text-sm font-medium text-muted no-underline hover:text-primary transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
