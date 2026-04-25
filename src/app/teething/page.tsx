import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { teeth, symptoms, safeRemedies, unsafeRemedies, myths } from "@/data/teething/data";

export const metadata: Metadata = {
  title: "Baby Teething Guide: Timeline, Symptoms & Safe Remedies",
  description:
    "Complete baby teething guide with eruption timeline for all 20 teeth, common symptoms, safe remedies, what to avoid (benzocaine, amber necklaces), and myths debunked. Based on AAP and ADA guidelines.",
  alternates: {
    canonical: "/teething",
  },
  openGraph: {
    title: "Baby Teething Guide: Timeline, Symptoms & Safe Remedies",
    description:
      "Evidence-based teething guide with eruption timeline, safe remedies, and dangerous products to avoid. Free and ad-free.",
    type: "article",
  },
};

// ---------------------------------------------------------------------------
// JSON-LD structured data
// ---------------------------------------------------------------------------

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: myths.map((m) => ({
    "@type": "Question",
    name: m.myth,
    acceptedAnswer: {
      "@type": "Answer",
      text: m.truth,
    },
  })),
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Safely Relieve Baby Teething Pain",
  description:
    "Evidence-based, pediatrician-recommended methods for soothing a teething baby.",
  step: safeRemedies.map((r, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: r.name,
    text: r.description,
  })),
};

// ---------------------------------------------------------------------------
// Helper components
// ---------------------------------------------------------------------------

function ToothCard({
  name,
  position,
  ageRange,
  order,
}: {
  name: string;
  position: string;
  ageRange: string;
  order: number;
}) {
  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-4 flex items-start gap-3">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary text-sm font-bold flex-shrink-0">
        {order}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold text-foreground leading-snug">{name}</p>
        <p className="text-xs text-muted mt-0.5">
          {position === "upper" ? "Upper jaw" : "Lower jaw"} &middot; {ageRange}
        </p>
      </div>
    </div>
  );
}

function SymptomCard({
  symptom,
  description,
  normalDuration,
  isCommon,
}: {
  symptom: string;
  description: string;
  normalDuration: string;
  isCommon: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-bold text-foreground mb-0">{symptom}</h3>
        {isCommon && (
          <span className="flex-shrink-0 text-xs font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
            Common
          </span>
        )}
      </div>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <p className="text-xs text-muted mt-2">
        <span className="font-semibold text-foreground">Typical duration:</span>{" "}
        {normalDuration}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TeethingPage() {
  const sortedTeeth = [...teeth].sort((a, b) => a.order - b.order);
  const upperTeeth = sortedTeeth.filter((t) => t.position === "upper");
  const lowerTeeth = sortedTeeth.filter((t) => t.position === "lower");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: "Teething Guide" }]} />

        {/* ----------------------------------------------------------------
            Hero
        ---------------------------------------------------------------- */}
        <section className="text-center mb-10 mt-4">
          <h1 className="text-foreground">Teething Timeline &amp; Relief Guide</h1>
          <p className="text-muted mt-3 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about your baby&apos;s teething journey &mdash;
            when to expect each tooth, what symptoms are normal, safe ways to help,
            and what to avoid. Based on AAP, ADA, and FDA guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="source-badge source-badge-aap">AAP</span>
            <span className="source-badge" style={{ backgroundColor: "#7C3AED" }}>ADA</span>
            <span className="source-badge" style={{ backgroundColor: "#DC2626" }}>FDA</span>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Eruption Timeline
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">Eruption Timeline</h2>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            Babies have 20 primary teeth (10 upper, 10 lower). Each entry below represents a
            pair (left and right). Teeth typically erupt in the order shown, but every baby is
            different &mdash; a few months early or late is perfectly normal.
          </p>

          {/* Upper jaw */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
            Upper Jaw
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {upperTeeth.map((t) => (
              <ToothCard
                key={`upper-${t.name}`}
                name={t.name}
                position={t.position}
                ageRange={`${t.typicalAgeMonths.min}–${t.typicalAgeMonths.max} months`}
                order={t.order}
              />
            ))}
          </div>

          {/* Lower jaw */}
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
            Lower Jaw
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {lowerTeeth.map((t) => (
              <ToothCard
                key={`lower-${t.name}`}
                name={t.name}
                position={t.position}
                ageRange={`${t.typicalAgeMonths.min}–${t.typicalAgeMonths.max} months`}
                order={t.order}
              />
            ))}
          </div>

          <div className="rounded-xl border border-[#E8E2D9] bg-card-alt p-4 text-sm text-muted leading-relaxed">
            <span className="font-semibold text-foreground">Note:</span> Most babies get their
            first tooth around 6 months, but the normal range is 3&ndash;14 months. All 20
            primary teeth are usually in by age 3. If your baby has no teeth by 18 months,
            mention it to your pediatrician or dentist.
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Common Symptoms
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">Common Teething Symptoms</h2>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            Teething discomfort is real but usually mild. These are the symptoms
            that research and pediatricians associate with teething.
          </p>
          <div className="flex flex-col gap-4">
            {symptoms.map((s) => (
              <SymptomCard
                key={s.symptom}
                symptom={s.symptom}
                description={s.description}
                normalDuration={s.normalDuration}
                isCommon={s.isCommon}
              />
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Safe Remedies
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">Safe Remedies</h2>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            These methods are recommended or considered safe by the AAP and pediatric
            dentists. Always supervise your baby with any teething object.
          </p>
          <div className="flex flex-col gap-4">
            {safeRemedies.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border-2 border-safe-border bg-safe-light p-5"
              >
                <div className="flex items-start gap-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-safe flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <h3 className="text-base font-bold text-safe-foreground mb-1">{r.name}</h3>
                    <p className="text-sm text-foreground leading-relaxed">{r.description}</p>
                    {r.ageMinMonths > 0 && (
                      <p className="text-xs text-muted mt-2">
                        Suitable from {r.ageMinMonths} months and older
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            What to AVOID
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">What to AVOID</h2>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            These products and practices are unsafe for babies. The FDA, AAP, and CPSC
            have issued warnings against all of them.
          </p>
          <div className="flex flex-col gap-4">
            {unsafeRemedies.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border-2 border-concern-border bg-concern-light p-5"
              >
                <div className="flex items-start gap-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-concern flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <h3 className="text-base font-bold text-concern-foreground mb-1">{r.name}</h3>
                    <p className="text-sm text-foreground leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Myths Debunked
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">Teething Myths &mdash; Debunked</h2>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            Teething folklore is widespread. Here is what the research actually shows.
          </p>
          <div className="flex flex-col gap-4">
            {myths.map((m) => (
              <div
                key={m.myth}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-monitor flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      Myth: &ldquo;{m.myth}&rdquo;
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      <span className="font-semibold text-foreground">Reality:</span> {m.truth}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            When to Call the Doctor
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">When to Call the Doctor</h2>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            Teething is a normal process, but some symptoms are NOT caused by teething
            and need medical attention. Contact your pediatrician if your baby has:
          </p>
          <div className="tier-concern p-5">
            <ul className="flex flex-col gap-3 text-sm text-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Fever of 100.4&deg;F (38&deg;C) or higher</span>
                  &nbsp;&mdash; teething does not cause true fever. A fever indicates infection.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Diarrhea, vomiting, or significant rash</span>
                  &nbsp;&mdash; these are not teething symptoms and may indicate illness.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Inconsolable crying for hours</span>
                  &nbsp;&mdash; teething discomfort is usually mild. Prolonged crying may signal pain from another source.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Refusing to drink fluids</span>
                  &nbsp;&mdash; brief appetite changes are normal, but refusing all fluids can lead to dehydration.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Swollen gums with pus or foul odor</span>
                  &nbsp;&mdash; may indicate infection. An eruption cyst (bluish bump) is normal, but pus is not.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-concern font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">No teeth by 18 months</span>
                  &nbsp;&mdash; delayed eruption is usually harmless but should be evaluated to rule out nutritional or genetic factors.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Dental Care Tips
        ---------------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-foreground mb-1">First Tooth, First Care</h2>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            Once that first tooth appears, dental care begins.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="flex flex-col gap-3 text-sm text-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Clean teeth twice daily</span> with a
                  soft-bristled infant toothbrush and a rice-grain-sized smear of fluoride
                  toothpaste from the very first tooth.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Schedule a dental visit by age 1</span> or
                  within 6 months of the first tooth erupting, whichever comes first (AAP &amp; ADA
                  recommendation).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Avoid putting baby to bed with a bottle</span>
                  &nbsp;of milk, formula, or juice. Pooling liquid causes &ldquo;baby bottle tooth
                  decay.&rdquo;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&bull;</span>
                <span>
                  <span className="font-semibold">Before teeth erupt,</span> wipe your baby&apos;s
                  gums with a clean, damp cloth after feedings to build a healthy habit.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Sources
        ---------------------------------------------------------------- */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-3">Sources</h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-card-alt p-5">
            <ul className="flex flex-col gap-2 text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="source-badge source-badge-aap flex-shrink-0">AAP</span>
                <span>
                  American Academy of Pediatrics &mdash; &ldquo;Teething: 4 to 7 Months&rdquo;
                  and &ldquo;How to Help Teething Babies&rdquo; (HealthyChildren.org)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge flex-shrink-0" style={{ backgroundColor: "#7C3AED" }}>ADA</span>
                <span>
                  American Dental Association &mdash; Eruption charts for primary teeth;
                  recommendations for infant oral care
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge flex-shrink-0" style={{ backgroundColor: "#DC2626" }}>FDA</span>
                <span>
                  U.S. Food &amp; Drug Administration &mdash; Safety warnings on benzocaine
                  products (2018), homeopathic teething tablets (2016, 2017)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge source-badge-cdc flex-shrink-0">CDC</span>
                <span>
                  Centers for Disease Control and Prevention &mdash; Children&apos;s oral health
                  guidelines and community water fluoridation resources
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="source-badge flex-shrink-0">Study</span>
                <span>
                  Massignan et al. (2016), <em>Pediatrics</em> &mdash; &ldquo;Signs and Symptoms
                  of Primary Tooth Eruption: A Meta-analysis&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            Disclaimer
        ---------------------------------------------------------------- */}
        <p className="text-xs text-muted text-center leading-relaxed pb-6">
          This guide is for educational purposes only and is not a substitute for
          professional medical or dental advice. Always consult your pediatrician or
          pediatric dentist with specific concerns about your baby&apos;s teeth and
          health. All data stays on your device.
        </p>
      </div>
    </>
  );
}
