import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { wellVisits } from "@/data/doctor-visits/data";

export const metadata: Metadata = {
  title: "Well-Baby Visit Guide: What to Expect at Every Checkup",
  description:
    "Complete guide to all 11 AAP-recommended well-baby checkups from newborn to 3 years. Know what to expect, which vaccines are due, questions to ask your pediatrician, and developmental milestones your doctor will check.",
  alternates: {
    canonical: "/doctor-visits",
  },
  openGraph: {
    title: "Well-Baby Visit Guide: What to Expect at Every Checkup | Is My Baby Alright?",
    description:
      "Complete guide to all 11 AAP-recommended well-baby checkups. Vaccines, screenings, milestones, and questions to ask your pediatrician.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many well-baby visits does the AAP recommend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The American Academy of Pediatrics (AAP) recommends 11 well-baby visits during the first three years: at 3-5 days (newborn), 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, and 30 months/3 years.",
      },
    },
    {
      "@type": "Question",
      name: "What happens at a well-baby checkup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At each well-baby visit, the pediatrician measures your baby's weight, length, and head circumference, performs a physical exam, assesses developmental milestones, administers age-appropriate vaccines, conducts recommended screenings, and discusses feeding, sleep, and safety with parents.",
      },
    },
    {
      "@type": "Question",
      name: "When is autism screening done at well-baby visits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AAP recommends formal autism screening with the M-CHAT-R/F questionnaire at both the 18-month and 24-month well-baby visits. Developmental surveillance (informal monitoring) happens at every visit.",
      },
    },
    {
      "@type": "Question",
      name: "Which well-baby visits include vaccines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The visits with the most vaccines are at 2 months, 4 months, 6 months, and 12 months. The 2-month and 4-month visits typically include DTaP, IPV, Hib, PCV13, and rotavirus. The 12-month visit introduces MMR, varicella, and hepatitis A vaccines.",
      },
    },
    {
      "@type": "Question",
      name: "What questions should I ask at my baby's checkup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good questions include asking about your baby's growth trajectory, whether developmental milestones are on track, what to expect before the next visit, vaccine side effects to watch for, feeding and sleep guidance, and when to call the office vs. go to the ER.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconStethoscope() {
  return (
    <svg {...iconProps}>
      <path d="M4.8 2.62a1 1 0 0 0-1.6.78v4.2a4 4 0 0 0 4 4h1.6a4 4 0 0 0 4-4V3.4a1 1 0 0 0-1.6-.78" />
      <path d="M18 12h.01" />
      <circle cx="18" cy="16" r="2" />
      <path d="M12 7.6v4.8c0 2.5 1.7 4.6 4 4.6" />
    </svg>
  );
}

function IconSyringe() {
  return (
    <svg {...iconProps}>
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg {...iconProps}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg {...iconProps}>
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-1 2.65V10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8.65A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
      <path d="M6.5 10c-1.38 0-2.5 1.12-2.5 2.5S5.12 15 6.5 15H8v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2h1.5c1.38 0 2.5-1.12 2.5-2.5S18.88 10 17.5 10" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconPrinter() {
  return (
    <svg {...iconProps} width="16" height="16">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Section Components                                                 */
/* ------------------------------------------------------------------ */

function VisitSection({
  title,
  icon,
  items,
  colorClass,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  colorClass: string;
}) {
  return (
    <div>
      <h4 className={`flex items-center gap-2 text-sm font-bold mb-2 ${colorClass}`}>
        {icon}
        {title}
      </h4>
      <ul className="space-y-1.5 ml-1">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${colorClass === "text-primary" ? "bg-primary" : colorClass === "text-coral" ? "bg-coral" : colorClass === "text-sky-foreground" ? "bg-sky" : "bg-sunny"}`} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DoctorVisitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Doctor Visits" }]} />

        {/* Hero */}
        <section className="py-6 sm:py-10">
          <h1 className="text-foreground">
            Well-Baby Visit Guide
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
            Know exactly what to expect at every well-baby checkup from birth through age 3.
            Covers all 11 AAP-recommended visits with vaccines, screenings, milestones your
            doctor will check, and questions worth asking.
          </p>

          {/* Print hint */}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted print:hidden">
            <IconPrinter />
            <span>
              This page is print-friendly. Use <kbd className="inline-flex items-center px-1.5 py-0.5 rounded bg-card-alt border border-card-border text-xs font-mono font-semibold">Ctrl+P</kbd> or <kbd className="inline-flex items-center px-1.5 py-0.5 rounded bg-card-alt border border-card-border text-xs font-mono font-semibold">Cmd+P</kbd> to print a checklist for your next visit.
            </span>
          </div>

          {/* Source badges */}
          <div className="mt-4 flex flex-wrap gap-2" data-print-hide>
            <span className="source-badge source-badge-aap">AAP Bright Futures</span>
            <span className="source-badge source-badge-cdc">CDC Vaccine Schedule</span>
          </div>
        </section>

        {/* Quick jump nav */}
        <nav className="mb-8 print:hidden" aria-label="Jump to visit">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Jump to visit
          </p>
          <div className="flex flex-wrap gap-2">
            {wellVisits.map((visit) => (
              <a
                key={visit.id}
                href={`#${visit.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary hover:bg-primary hover:text-primary-foreground transition-colors no-underline"
              >
                {visit.age}
              </a>
            ))}
          </div>
        </nav>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-card-border print:hidden"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {wellVisits.map((visit, index) => (
              <article
                key={visit.id}
                id={visit.id}
                className="relative pl-12 sm:pl-14 scroll-mt-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 sm:left-3 top-5 flex items-center justify-center w-5 h-5 rounded-full bg-primary border-2 border-white shadow-sm print:hidden"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Visit card */}
                <div className="rounded-xl border border-card-border bg-white p-5 sm:p-6 shadow-sm print:shadow-none print:break-inside-avoid">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground whitespace-nowrap">
                      {visit.age}
                    </span>
                    <span className="text-xs text-muted mt-0.5 print:hidden">
                      Visit {index + 1} of {wellVisits.length}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-2">
                    {visit.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {visit.description}
                  </p>

                  {/* Content grid */}
                  <div className="grid gap-5 sm:gap-6">
                    {/* What to Expect */}
                    <VisitSection
                      title="What to Expect"
                      icon={<IconStethoscope />}
                      items={visit.whatToExpect}
                      colorClass="text-primary"
                    />

                    {/* Screenings */}
                    <VisitSection
                      title="Screenings"
                      icon={<IconSearch />}
                      items={visit.screenings}
                      colorClass="text-sky-foreground"
                    />

                    {/* Vaccines */}
                    <div className="rounded-lg bg-coral-light border border-coral/20 p-4">
                      <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-coral-foreground">
                        <IconSyringe />
                        Vaccines at This Visit
                      </h4>
                      <ul className="space-y-1.5 ml-1">
                        {visit.vaccinesTypical.map((v, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-coral-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-coral flex-shrink-0" aria-hidden="true" />
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestones */}
                    <VisitSection
                      title="Milestones Your Doctor Will Check"
                      icon={<IconBrain />}
                      items={visit.milestonesFocus}
                      colorClass="text-primary"
                    />

                    {/* Questions to Ask */}
                    <div className="rounded-lg bg-sunny-light border border-sunny/20 p-4">
                      <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-sunny-foreground">
                        <IconClipboard />
                        Questions to Ask Your Pediatrician
                      </h4>
                      <ul className="space-y-1.5 ml-1">
                        {visit.questionsToAsk.map((q, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed text-sunny-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sunny flex-shrink-0" aria-hidden="true" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sources footer */}
        <section className="mt-12 mb-10 rounded-xl border border-card-border bg-card-alt p-5">
          <h3 className="text-sm font-bold text-foreground mb-3">Sources</h3>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex gap-2">
              <span className="source-badge source-badge-aap text-xs">AAP</span>
              <span>
                American Academy of Pediatrics  -  <em>Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents</em>, 4th Edition. Recommended preventive pediatric health care (periodicity schedule).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="source-badge source-badge-cdc text-xs">CDC</span>
              <span>
                Centers for Disease Control and Prevention  -  Recommended Child and Adolescent Immunization Schedule for ages 18 years or younger. Updated annually.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="source-badge source-badge-aap text-xs">AAP</span>
              <span>
                American Academy of Pediatrics  -  Screening recommendations including M-CHAT-R/F for autism at 18 and 24 months, developmental screening with ASQ-3, and lead/anemia screening.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted leading-relaxed">
            This guide is for informational purposes only and does not replace medical advice.
            Your pediatrician may adjust the visit schedule, vaccines, or screenings based on
            your child&apos;s individual needs, health history, and risk factors.
          </p>
        </section>
      </div>
    </>
  );
}
