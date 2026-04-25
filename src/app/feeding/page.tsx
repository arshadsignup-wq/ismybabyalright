import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { breastfeedingTopics } from "@/data/feeding/breastfeeding";
import {
  pumpingSchedules,
  milkStorage,
  pumpingTips,
} from "@/data/feeding/pumping";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title:
    "Breastfeeding & Pumping Guide: Solutions for Common Challenges | Is My Baby Alright?",
  description:
    "Evidence-based breastfeeding and pumping guide covering latch issues, low supply, engorgement, mastitis, clogged ducts, nipple pain, cluster feeding, pumping schedules, and milk storage. Free, no paywall.",
  alternates: {
    canonical: "/feeding",
  },
  openGraph: {
    title: "Breastfeeding & Pumping Guide | Is My Baby Alright?",
    description:
      "Practical, evidence-based solutions for common breastfeeding challenges. Pumping schedules, milk storage guidelines, and when to get help.",
    type: "article",
  },
};

/* ==========================================================================
   JSON-LD: FAQPage
   ========================================================================== */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: breastfeedingTopics.map((topic) => ({
    "@type": "Question",
    name: `How do I deal with ${topic.title.toLowerCase()} while breastfeeding?`,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${topic.description} Key solutions include: ${topic.solutions.slice(0, 3).join(". ")}. Seek help from a lactation consultant if: ${topic.whenToGetHelp.slice(0, 2).join("; ")}.`,
    },
  })),
};

/* ==========================================================================
   Page Component (Server Component)
   ========================================================================== */

export default function FeedingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[{ label: "Breastfeeding & Pumping Guide" }]}
        />

        {/* ----------------------------------------------------------------
            Hero
        ---------------------------------------------------------------- */}
        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Breastfeeding &amp; Pumping Guide
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Practical, evidence-based solutions for the most common breastfeeding
            challenges. Whether you&apos;re nursing, pumping, or both  -  you&apos;re
            doing a great job.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="source-badge source-badge-aap">AAP</span>
            <span className="source-badge source-badge-who">WHO</span>
            <span className="source-badge" style={{ backgroundColor: "#7C3AED" }}>
              La Leche League
            </span>
            <span className="source-badge" style={{ backgroundColor: "#0891B2" }}>
              ABM
            </span>
          </div>
        </header>

        {/* Quick jump nav */}
        <nav
          className="mb-10 rounded-xl border border-[#E8E2D9] bg-white p-5"
          aria-label="Page sections"
        >
          <h2 className="text-sm font-bold text-foreground mb-3">Jump to a section</h2>
          <div className="flex flex-wrap gap-2">
            {breastfeedingTopics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary-light text-primary hover:bg-primary hover:text-primary-foreground transition-colors no-underline"
              >
                {topic.title}
              </a>
            ))}
            <a
              href="#pumping"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-sky-light text-sky-foreground hover:bg-sky hover:text-white transition-colors no-underline"
            >
              Pumping Guide
            </a>
            <a
              href="#milk-storage"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-sky-light text-sky-foreground hover:bg-sky hover:text-white transition-colors no-underline"
            >
              Milk Storage
            </a>
            <a
              href="#lactation-consultant"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-coral-light text-coral-foreground hover:bg-coral hover:text-white transition-colors no-underline"
            >
              When to See a Lactation Consultant
            </a>
          </div>
        </nav>

        {/* ----------------------------------------------------------------
            Breastfeeding Topics
        ---------------------------------------------------------------- */}
        <section className="mb-12" aria-labelledby="breastfeeding-heading">
          <h2
            id="breastfeeding-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-6"
          >
            Common Breastfeeding Challenges
          </h2>

          <div className="flex flex-col gap-6">
            {breastfeedingTopics.map((topic) => (
              <article
                key={topic.id}
                id={topic.id}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6 scroll-mt-20"
              >
                <h3 className="text-lg font-extrabold text-foreground mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
                  {topic.description}
                </p>

                {/* Signs */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-monitor-light text-monitor"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </span>
                    Signs to look for
                  </h4>
                  <ul className="space-y-1.5 ml-8">
                    {topic.signs.map((sign, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground leading-relaxed list-disc"
                      >
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-safe-light text-safe"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    What to try
                  </h4>
                  <ul className="space-y-1.5 ml-8">
                    {topic.solutions.map((solution, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground leading-relaxed list-disc"
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to get help */}
                <div className="rounded-lg bg-coral-light border border-coral/20 p-4">
                  <h4 className="text-sm font-bold text-coral-foreground mb-2 flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-coral/10 text-coral"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </span>
                    When to get help
                  </h4>
                  <ul className="space-y-1.5 ml-8">
                    {topic.whenToGetHelp.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-coral-foreground leading-relaxed list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Pumping Section
        ---------------------------------------------------------------- */}
        <section
          id="pumping"
          className="mb-12 scroll-mt-20"
          aria-labelledby="pumping-heading"
        >
          <h2
            id="pumping-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-6"
          >
            Pumping Guide
          </h2>

          {/* Pumping schedules */}
          <div className="flex flex-col gap-6 mb-8">
            {pumpingSchedules.map((schedule) => (
              <article
                key={schedule.scenario}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6"
              >
                <h3 className="text-lg font-extrabold text-foreground mb-3">
                  {schedule.scenario}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="rounded-lg bg-primary-light p-3">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                      Frequency
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {schedule.frequency}
                    </p>
                  </div>
                  <div className="rounded-lg bg-sky-light p-3">
                    <p className="text-xs font-bold text-sky-foreground uppercase tracking-wide mb-1">
                      Duration
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {schedule.duration}
                    </p>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-foreground mb-2">Tips</h4>
                <ul className="space-y-1.5 ml-5">
                  {schedule.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground leading-relaxed list-disc"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* General pumping tips */}
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6">
            <h3 className="text-lg font-extrabold text-foreground mb-4">
              Essential Pumping Tips
            </h3>
            <ul className="space-y-3">
              {pumpingTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-foreground leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Milk Storage Table
        ---------------------------------------------------------------- */}
        <section
          id="milk-storage"
          className="mb-12 scroll-mt-20"
          aria-labelledby="storage-heading"
        >
          <h2
            id="storage-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-6"
          >
            Breast Milk Storage Guidelines
          </h2>

          {/* Mobile-friendly cards (shown on small screens) */}
          <div className="flex flex-col gap-4 sm:hidden">
            {milkStorage.map((entry) => (
              <div
                key={entry.location}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5"
              >
                <h3 className="text-base font-extrabold text-foreground mb-2">
                  {entry.location}
                </h3>
                <div className="flex gap-3 mb-3">
                  <div className="rounded-lg bg-sky-light px-3 py-1.5">
                    <p className="text-xs font-bold text-sky-foreground">
                      {entry.temperature}
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary-light px-3 py-1.5">
                    <p className="text-xs font-bold text-primary">
                      {entry.duration}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {entry.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Table (shown on larger screens) */}
          <div className="hidden sm:block rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-alt border-b border-[#E8E2D9]">
                  <th className="text-left px-5 py-3 font-bold text-foreground">
                    Location
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">
                    Temperature
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">
                    Duration
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {milkStorage.map((entry, i) => (
                  <tr
                    key={entry.location}
                    className={
                      i < milkStorage.length - 1
                        ? "border-b border-[#E8E2D9]"
                        : ""
                    }
                  >
                    <td className="px-5 py-3 font-semibold text-foreground align-top">
                      {entry.location}
                    </td>
                    <td className="px-5 py-3 text-muted align-top">
                      {entry.temperature}
                    </td>
                    <td className="px-5 py-3 text-primary font-semibold align-top whitespace-nowrap">
                      {entry.duration}
                    </td>
                    <td className="px-5 py-3 text-muted leading-relaxed align-top">
                      {entry.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted mt-3 leading-relaxed">
            Source: CDC &quot;Proper Storage and Preparation of Breast Milk&quot;
            guidelines. These are guidelines for healthy, full-term infants. Premature
            or hospitalized babies may have stricter requirements.
          </p>
        </section>

        {/* ----------------------------------------------------------------
            When to See a Lactation Consultant
        ---------------------------------------------------------------- */}
        <section
          id="lactation-consultant"
          className="mb-12 scroll-mt-20"
          aria-labelledby="lc-heading"
        >
          <h2
            id="lc-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            When to See a Lactation Consultant
          </h2>

          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6">
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              A board-certified lactation consultant (IBCLC) is a healthcare
              professional who specializes in breastfeeding. You don&apos;t need to
              wait until something is &quot;wrong enough&quot;  -  they help with
              everything from establishing a good latch in the early days to
              troubleshooting complex issues months in. Many insurance plans cover
              lactation consultation.
            </p>

            <h3 className="text-sm font-bold text-foreground mb-3">
              Consider scheduling a visit if:
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "You're experiencing persistent pain during breastfeeding",
                "Baby isn't gaining weight adequately or has lost more than 10% of birth weight",
                "You're concerned about your milk supply (too much or too little)",
                "Baby has difficulty latching or refuses the breast",
                "You've been diagnosed with or suspect tongue-tie or lip-tie",
                "You have recurrent clogged ducts or mastitis",
                "You're returning to work and need help with a pumping plan",
                "You're considering weaning and want guidance on how to do it comfortably",
                "You have a premature baby or multiples and need specialized support",
                "You simply want reassurance that things are going well  -  that's a valid reason too",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground leading-relaxed">
                  <span
                    className="flex-shrink-0 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-light text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-3">
              How to find one:
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Ask your OB, midwife, or pediatrician for a referral
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Search the{" "}
                <a
                  href="https://www.ilca.org/why-ibclc/falc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline"
                >
                  ILCA Find a Lactation Consultant
                </a>{" "}
                directory
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Many hospitals offer outpatient lactation clinics  -  call your birth
                hospital
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                WIC programs provide free breastfeeding support and peer counselors
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Telehealth lactation consultations are widely available and can be
                very effective
              </li>
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Supportive Reminder
        ---------------------------------------------------------------- */}
        <div className="rounded-xl bg-primary-light border border-primary/20 p-5 sm:p-6 mb-8">
          <h3 className="text-base font-bold text-foreground mb-2">
            A reminder for you
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            However you feed your baby  -  exclusively breastfeeding, pumping,
            combo feeding, or formula  -  you are giving your baby exactly what
            they need. Fed is best. Your mental health matters too. If
            breastfeeding is causing significant distress, it&apos;s okay to
            adjust your approach. Talk to your provider or a lactation
            consultant about what works for <em>your</em> family.
          </p>
        </div>

        {/* ----------------------------------------------------------------
            Sources
        ---------------------------------------------------------------- */}
        <footer className="border-t border-border pt-6 pb-8">
          <h2 className="text-sm font-bold text-foreground mb-3">Sources</h2>
          <ul className="space-y-1.5 text-xs text-muted leading-relaxed">
            <li>
              <span className="font-semibold">American Academy of Pediatrics (AAP)</span>{" "}
               -  Policy Statement: Breastfeeding and the Use of Human Milk (2022)
            </li>
            <li>
              <span className="font-semibold">World Health Organization (WHO)</span>{" "}
               -  Infant and Young Child Feeding Guidelines
            </li>
            <li>
              <span className="font-semibold">La Leche League International</span>{" "}
               -  Breastfeeding Resources and Support
            </li>
            <li>
              <span className="font-semibold">
                Academy of Breastfeeding Medicine (ABM)
              </span>{" "}
               -  Clinical Protocols for Breastfeeding Management
            </li>
            <li>
              <span className="font-semibold">CDC</span>  -  Proper Storage and
              Preparation of Breast Milk
            </li>
            <li>
              <span className="font-semibold">Stanford School of Medicine</span>{" "}
               -  Maximizing Milk Production with Hands-On Pumping (Morton et al.)
            </li>
          </ul>
          <p className="text-xs text-muted mt-4 leading-relaxed">
            This is educational content based on current medical guidelines, not
            medical advice. Every breastfeeding journey is different. Please
            consult your healthcare provider or a board-certified lactation
            consultant (IBCLC) for personalized guidance. All data stays on your
            device.
          </p>
        </footer>
      </div>
    </>
  );
}
