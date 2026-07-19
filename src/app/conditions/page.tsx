import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import { allConcerns } from "@/data/concerns";
import type { ConcernCategory } from "@/data/concerns/types";

export const metadata: Metadata = {
  title: "Conditions A-Z",
  description:
    "Browse all baby health conditions alphabetically. Over 2,500 evidence-based guides covering physical development, feeding, sleep, skin, digestive, behavior, medical conditions, and more.",
  alternates: {
    canonical: "/conditions",
  },
  openGraph: {
    title: "Conditions A-Z | Is My Baby Alright?",
    description:
      "Browse all baby health conditions alphabetically. Over 2,500 evidence-based guides covering physical development, feeding, sleep, skin, digestive, behavior, medical conditions, and more.",
  },
};

const categoryColors: Record<ConcernCategory, string> = {
  physical: "#38BDF8",
  communication: "#A78BFA",
  feeding: "#F4A261",
  sleep: "#818CF8",
  skin: "#F472B6",
  digestive: "#34D399",
  behavior: "#FBBF24",
  medical: "#F07167",
  maternal: "#E879A0",
};

const categoryLabels: Record<ConcernCategory, string> = {
  physical: "Physical",
  communication: "Communication",
  feeding: "Feeding",
  sleep: "Sleep",
  skin: "Skin",
  digestive: "Digestive",
  behavior: "Behavior",
  medical: "Medical",
  maternal: "Maternal",
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function groupByLetter() {
  const groups: Record<string, typeof allConcerns> = {};

  for (const letter of ALPHABET) {
    groups[letter] = [];
  }

  const sorted = [...allConcerns].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  for (const concern of sorted) {
    const firstChar = concern.title.charAt(0).toUpperCase();
    if (groups[firstChar]) {
      groups[firstChar].push(concern);
    }
  }

  return groups;
}

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
      name: "Conditions A-Z",
      url: "https://www.ismybabyalright.com/conditions",
    },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Conditions A-Z",
  description:
    "Browse all baby health conditions alphabetically. Over 2,500 evidence-based guides.",
  url: "https://www.ismybabyalright.com/conditions",
  isPartOf: {
    "@type": "WebSite",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

export default function ConditionsPage() {
  const groups = groupByLetter();
  const activeLetters = new Set(
    ALPHABET.filter((letter) => groups[letter].length > 0)
  );

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
      <Breadcrumbs items={[{ label: "Conditions A-Z" }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Conditions A&ndash;Z
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted text-base sm:text-lg">
            Browse all {allConcerns.length} evidence-based guides
            alphabetically. Each guide explains what&apos;s normal, what to
            watch, and when to call your doctor.
          </p>
          <div className="mt-4">
            <LastReviewed date="2026-07-01" />
          </div>
          <div className="mt-3">
            <MedicalReviewAttribution sources={['AAP', 'NIH']} />
          </div>
        </div>

        {/* Letter Navigation */}
        <nav
          aria-label="Alphabetical navigation"
          className="mb-8 rounded-xl border border-border bg-white p-4"
        >
          <div className="flex flex-wrap justify-center gap-1.5">
            {ALPHABET.map((letter) => {
              const isActive = activeLetters.has(letter);
              return isActive ? (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold transition-colors no-underline bg-white border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold text-muted/30 cursor-default"
                  aria-disabled="true"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </nav>

        {/* Letter Sections */}
        <div className="space-y-8">
          {ALPHABET.map((letter) => {
            const concerns = groups[letter];
            if (concerns.length === 0) return null;

            return (
              <section key={letter} id={`letter-${letter}`}>
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-2 pt-2">
                  <h2 className="text-2xl font-bold text-primary">{letter}</h2>
                  <p className="text-sm text-muted">
                    {concerns.length}{" "}
                    {concerns.length === 1 ? "condition" : "conditions"}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-white divide-y divide-border">
                  {concerns.map((concern) => (
                    <Link
                      key={concern.slug}
                      href={`/concerns/${concern.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/5 transition-colors no-underline group first:rounded-t-xl last:rounded-b-xl"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {concern.title}
                      </span>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: `${categoryColors[concern.category]}18`,
                          color: categoryColors[concern.category],
                        }}
                      >
                        {categoryLabels[concern.category]}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <BottomLine summary="This index covers common childhood conditions with evidence-based information. For any condition, your pediatrician is the best source of personalized guidance for your child." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Back to top */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-sm text-muted hover:text-primary transition-colors no-underline"
          >
            Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
