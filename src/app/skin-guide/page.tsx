import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { skinConditions } from "@/data/skin/data";

export const metadata: Metadata = {
  title: "Baby Skin Conditions Guide: Rashes, Eczema & More",
  description:
    "Evidence-based guide to common baby skin conditions including eczema, cradle cap, diaper rash, heat rash, baby acne, hives, birthmarks, and more. Based on AAP guidelines.",
  alternates: {
    canonical: "/skin-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the most common baby skin conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common baby skin conditions include cradle cap, eczema (atopic dermatitis), baby acne, diaper rash, heat rash, hives, dry or peeling skin, and birthmarks. Most are harmless and resolve on their own or with simple treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal for newborns to have peeling skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, peeling skin in newborns is completely normal, especially in babies born past their due date. In the womb, baby's skin was protected by vernix caseosa. Once exposed to air, the outer layer naturally dries and peels. It resolves on its own within 2-3 weeks without treatment.",
      },
    },
    {
      "@type": "Question",
      name: "When should I worry about a rash on my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See your pediatrician if a rash is accompanied by fever, spreads rapidly, has pus or blisters, does not improve with treatment after a few days, or if your baby seems unwell. Seek emergency care if a rash occurs with difficulty breathing, swelling of the lips or tongue, or if your baby is lethargic or inconsolable.",
      },
    },
    {
      "@type": "Question",
      name: "How can I tell the difference between eczema and baby acne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baby acne appears as small red or white bumps primarily on the face (cheeks, nose, forehead), is not itchy, and does not cause dry or scaly skin. Eczema causes red, dry, rough, scaly patches that are often itchy and can appear on the cheeks, arms, legs, and body creases. Baby acne typically resolves by 3-4 months; eczema may persist longer.",
      },
    },
  ],
};

export default function SkinGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Skin Guide" }]} />

      <div className="mx-auto max-w-2xl px-4 pb-12">
        {/* Hero */}
        <section className="py-6 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            Baby Skin Conditions Guide
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            Baby skin is delicate and sensitive. Rashes, bumps, and patches are
            incredibly common and usually harmless. This guide covers the most
            common baby skin conditions, what they look like, what causes them,
            how to treat them, and when to call your pediatrician.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="source-badge source-badge-aap">AAP</span>
            <span className="text-xs text-muted flex items-center">
              Evidence-based content
            </span>
          </div>
        </section>

        {/* Quick Jump Navigation */}
        <nav aria-label="Skin conditions quick navigation" className="mb-8">
          <h2 className="text-sm font-bold text-muted uppercase tracking-wide mb-3">
            Jump to condition
          </h2>
          <div className="flex flex-wrap gap-2">
            {skinConditions.map((condition) => (
              <a
                key={condition.id}
                href={`#${condition.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-card-alt border border-card-border text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors no-underline"
              >
                {condition.name.split(" (")[0]}
              </a>
            ))}
          </div>
        </nav>

        {/* Condition Cards */}
        <div className="flex flex-col gap-8">
          {skinConditions.map((condition) => (
            <article
              key={condition.id}
              id={condition.id}
              className="rounded-xl border border-[#E8E2D9] bg-white p-5 scroll-mt-20"
            >
              {/* Header */}
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-foreground leading-tight">
                  {condition.name}
                </h2>
                <p className="text-sm text-muted mt-1 flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Common ages: {condition.commonAges}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {condition.description}
              </p>

              {/* Appearance */}
              <div className="mb-4 p-3 rounded-lg bg-sky-light border border-sky/20">
                <h3 className="text-sm font-bold text-sky-foreground mb-1.5 flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  What it looks like
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {condition.appearance}
                </p>
              </div>

              {/* Causes */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Causes
                </h3>
                <ul className="space-y-1.5">
                  {condition.causes.map((cause, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted flex-shrink-0"
                        aria-hidden="true"
                      />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  Treatment
                </h3>
                <ul className="space-y-1.5">
                  {condition.treatments.map((treatment, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to Worry */}
              <div className="p-3 rounded-lg bg-monitor-light border border-monitor-border">
                <h3 className="text-sm font-bold text-monitor-foreground mb-2 flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  When to call your pediatrician
                </h3>
                <ul className="space-y-1.5">
                  {condition.whenToWorry.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-monitor-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-monitor flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Concern Link */}
              {condition.relatedConcernSlug && (
                <div className="mt-4 pt-3 border-t border-border">
                  <Link
                    href={`/concerns/${condition.relatedConcernSlug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    Read the full {condition.name.split(" (")[0]} concern guide
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* General Skin Care Tips */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            General Baby Skin Care Tips
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-3">
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span>
                  <strong>Bathe less frequently.</strong> Babies do not need
                  daily baths. Every 2-3 days is enough for most infants, with
                  spot-cleaning in between. Overbathing strips natural skin
                  oils.
                </span>
              </li>
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span>
                  <strong>Use fragrance-free everything.</strong> Choose
                  fragrance-free soaps, detergents, wipes, and lotions.
                  Fragrances are one of the most common irritants for baby skin.
                </span>
              </li>
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span>
                  <strong>Moisturize after every bath.</strong> Apply a thick
                  cream or ointment (not lotion) immediately after bathing while
                  skin is still slightly damp to lock in moisture.
                </span>
              </li>
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <span>
                  <strong>Dress in breathable fabrics.</strong> Cotton is best
                  for baby skin. Avoid wool and synthetic materials directly
                  against the skin, which can cause irritation.
                </span>
              </li>
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  5
                </span>
                <span>
                  <strong>Protect from the sun.</strong> Babies under 6 months
                  should be kept out of direct sunlight. For babies over 6
                  months, use a broad-spectrum SPF 30+ sunscreen on exposed
                  areas and dress in sun-protective clothing.
                </span>
              </li>
              <li className="text-sm text-foreground leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                  6
                </span>
                <span>
                  <strong>When in doubt, call your pediatrician.</strong> Most
                  baby rashes are harmless, but if you are ever unsure or your
                  baby seems unwell, a quick call to your doctor can provide
                  peace of mind.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-muted uppercase tracking-wide mb-3">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/triage/rash"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Rash Triage Tool
              </span>
              <p className="text-xs text-muted mt-1">
                Step-by-step guidance for evaluating a rash
              </p>
            </Link>
            <Link
              href="/concerns"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                All Concern Guides
              </span>
              <p className="text-xs text-muted mt-1">
                Browse all baby health concern guides
              </p>
            </Link>
            <Link
              href="/food/allergens"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Allergen Tracker
              </span>
              <p className="text-xs text-muted mt-1">
                Track allergen introductions (some cause skin reactions)
              </p>
            </Link>
            <Link
              href="/growth-spurts"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Growth Spurts
              </span>
              <p className="text-xs text-muted mt-1">
                When they happen and what to expect
              </p>
            </Link>
          </div>
        </section>

        {/* Sources / Disclaimer */}
        <footer className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted leading-relaxed">
            <strong>Sources:</strong> American Academy of Pediatrics (AAP),
            National Eczema Association, Stanford Children&apos;s Health,
            Mayo Clinic, CDC.
          </p>
          <p className="text-xs text-muted leading-relaxed mt-2">
            This is educational content, not medical advice. It does not include
            clinical images. If you are concerned about a rash or skin condition
            on your baby, contact your pediatrician. All data stays on your
            device.
          </p>
        </footer>
      </div>
    </>
  );
}
