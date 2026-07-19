import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from '@/components/shared/LastReviewed';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import { growthSpurts, generalTips } from "@/data/growth-spurts/data";

export const metadata: Metadata = {
  title: "Baby Growth Spurts: When They Happen & What to Expect",
  description:
    "Evidence-based guide to baby growth spurts from 1 week to 9 months. Learn the signs, how long they last, and what to do. Based on AAP guidelines.",
  alternates: {
    canonical: "/growth-spurts",
  },
  openGraph: {
    title: "Baby Growth Spurts | Is My Baby Alright?",
    description:
      "When growth spurts happen, the signs, how long they last, and what to do. Evidence-based guide from 1 week to 9 months.",
  },
};

const growthSpurtFaqItems = [
  { question: "When do babies have growth spurts?", answer: "Babies typically have growth spurts at 1-2 weeks, 3 weeks, 6 weeks, 3 months, 4 months, 6 months, and 9 months of age. These are averages -- your baby may experience them a week or two earlier or later." },
  { question: "How long do baby growth spurts last?", answer: "Most growth spurts last between 2 and 7 days. Earlier spurts (1-6 weeks) tend to be shorter (1-3 days), while later spurts (3-9 months) may last 3-7 days." },
  { question: "What are the signs of a growth spurt in babies?", answer: "Common signs include increased feeding (cluster feeding), fussiness and irritability, disrupted sleep patterns, clinginess, and seeming hungrier than usual even after a full feed." },
  { question: "Should I feed on demand during a growth spurt?", answer: "Yes. Feeding on demand during a growth spurt is recommended by the AAP. For breastfeeding mothers, increased feeding signals the body to produce more milk -- supply typically adjusts within 24-48 hours." },
  { question: "Can a growth spurt affect my baby's sleep?", answer: "Yes. Babies often wake more frequently during growth spurts due to increased hunger. They may also nap longer as growth hormone is primarily released during sleep. This disruption is temporary and typically resolves within a few days." },
];

const contentSchema = getContentPageSchema({
  name: 'Baby Growth Spurts: When They Happen & What to Expect',
  description:
    'Evidence-based guide to baby growth spurts from 1 week to 9 months. Learn the signs, how long they last, and what to do. Based on AAP guidelines.',
  path: '/growth-spurts',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Growth Spurts' },
]);

export default function GrowthSpurtsPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(growthSpurtFaqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Growth Spurts" }]} />

      <div className="mx-auto max-w-2xl px-4 pb-12">
        {/* Hero */}
        <section className="py-6 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            Baby Growth Spurts
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            Your baby grows in bursts, not at a steady pace. These sudden surges
            in growth bring increased feeding, fussiness, and disrupted sleep
            &mdash; but they are temporary and completely normal.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="source-badge source-badge-aap">AAP</span>
            <span className="text-xs text-muted flex items-center">
              Evidence-based content
            </span>
          </div>
          <LastReviewed date="2026-07-01" />
          <div className="mt-3">
            <MedicalReviewAttribution sources={['AAP', 'WHO']} />
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            "Growth spurts typically occur at 1-2 weeks, 3 weeks, 6 weeks, 3 months, 4 months, 6 months, and 9 months of age.",
            "Most growth spurts last 2 to 7 days and are marked by increased feeding, fussiness, and disrupted sleep.",
            "Feed on demand during a growth spurt -- breastfeeding mothers' supply will adjust within 24-48 hours.",
            "Growth spurts are completely normal and temporary; extra rest, patience, and responsiveness are the best strategies.",
          ]}
        />

        {/* Timeline */}
        <section aria-label="Growth spurts timeline" className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {growthSpurts.map((spurt, index) => (
              <article
                key={spurt.id}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:ml-10 relative"
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="absolute -left-[calc(2.5rem+6px)] top-6 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm hidden sm:block"
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-bold">
                    {spurt.age}
                  </span>
                  <span className="text-sm text-muted flex items-center gap-1.5">
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
                    Lasts {spurt.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {spurt.description}
                </p>

                {/* Signs */}
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
                      className="text-coral"
                      aria-hidden="true"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Signs to look for
                  </h3>
                  <ul className="space-y-1.5">
                    {spurt.signs.map((sign, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground leading-relaxed flex items-start gap-2"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0"
                          aria-hidden="true"
                        />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div>
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
                      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                      <line x1="9" y1="21" x2="15" y2="21" />
                    </svg>
                    What you can do
                  </h3>
                  <ul className="space-y-1.5">
                    {spurt.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground leading-relaxed flex items-start gap-2"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                          aria-hidden="true"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* General Tips */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            General Tips for All Growth Spurts
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-3">
              {generalTips.map((tip, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
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
              href="/sleep"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Sleep Guide
              </span>
              <p className="text-xs text-muted mt-1">
                Age-based sleep needs and regression info
              </p>
            </Link>
            <Link
              href="/food"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Food Introduction
              </span>
              <p className="text-xs text-muted mt-1">
                When and how to introduce first foods
              </p>
            </Link>
            <Link
              href="/milestones"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Milestones
              </span>
              <p className="text-xs text-muted mt-1">
                Track developmental milestones by age
              </p>
            </Link>
            <Link
              href="/tracker"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline group"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-primary-hover">
                Baby Tracker
              </span>
              <p className="text-xs text-muted mt-1">
                Log feeds, sleep, and diapers
              </p>
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <FAQSection items={growthSpurtFaqItems} />
        </div>

        <BottomLine
          summary="Growth spurts are a normal part of your baby's development and typically last only a few days. Increased feeding, fussiness, and disrupted sleep are all expected signs. Feed on demand, offer extra comfort, and know that things will settle back to normal soon."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Sources / Disclaimer */}
        <footer className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted leading-relaxed">
            <strong>Sources:</strong> American Academy of Pediatrics (AAP),
            World Health Organization (WHO) Child Growth Standards, Stanford
            Children&apos;s Health.
          </p>
          <p className="text-xs text-muted leading-relaxed mt-2">
            This is educational content, not medical advice. Every baby grows at
            their own pace. If you are concerned about your baby&apos;s growth
            or feeding, talk to your pediatrician. All data stays on your device.
          </p>
        </footer>
      </div>
    </article>
  );
}
