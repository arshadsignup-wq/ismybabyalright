import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import LastReviewed from "@/components/shared/LastReviewed";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vaccine Safety: How Vaccines Are Tested & Monitored | Is My Baby Alright?",
  description:
    "Learn how vaccines are rigorously tested for safety before approval, what ingredients are in vaccines and why, and how VAERS and VSD monitor safety after approval. Based on CDC and FDA guidelines.",
  alternates: {
    canonical: "/vaccines/safety",
  },
  openGraph: {
    title: "Vaccine Safety for Babies | Is My Baby Alright?",
    description:
      "Evidence-based guide to vaccine safety: testing, ingredients, monitoring systems, and what the science says.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Vaccine Safety: How Vaccines Are Tested & Monitored",
  description:
    "Learn how vaccines are rigorously tested for safety before approval, what ingredients are in vaccines and why, and how VAERS and VSD monitor safety after approval.",
  path: "/vaccines/safety",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Vaccine Safety", url: "https://www.cdc.gov/vaccinesafety/" },
    { name: "FDA Vaccine Approval Process", url: "https://www.fda.gov/vaccines-blood-biologics/vaccines" },
    { name: "AAP Immunization Recommendations", url: "https://www.aap.org/en/patient-care/immunizations/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Vaccine Safety" },
]);

const faqItems = [
  {
    question: "How do we know vaccines are safe for babies?",
    answer:
      "Vaccines undergo 10-15 years of testing before FDA approval, including three phases of clinical trials involving thousands of participants. After approval, multiple surveillance systems (VAERS, VSD, CISA) continue monitoring for rare side effects. The CDC, FDA, and independent advisory committees review safety data on an ongoing basis.",
  },
  {
    question: "What ingredients are in vaccines and why?",
    answer:
      "Vaccine ingredients include antigens (the active component that trains immunity), adjuvants like aluminum salts (to strengthen immune response), preservatives like thimerosal in multi-dose flu vials (to prevent contamination), and stabilizers like gelatin (to keep vaccines effective during storage). Each ingredient has been extensively studied for safety at the amounts used.",
  },
  {
    question: "Is the aluminum in vaccines harmful to babies?",
    answer:
      "No. Babies receive more aluminum from breast milk and formula in the first 6 months than from all vaccines combined. The small amounts of aluminum salts in vaccines are quickly eliminated by the body. Studies show no link between vaccine aluminum and health problems.",
  },
  {
    question: "What is VAERS and how does it work?",
    answer:
      "VAERS (Vaccine Adverse Event Reporting System) is a national early warning system co-managed by the CDC and FDA. Anyone can report a health event after vaccination. VAERS reports do not prove causation — they are signals that trigger further investigation by scientists using more rigorous methods.",
  },
  {
    question: "Are vaccines tested on children before being approved?",
    answer:
      "Yes. Pediatric vaccines are specifically tested in children during clinical trials. Phase III trials typically include thousands of children and compare vaccinated groups to placebo groups, monitoring for safety and efficacy over months to years before FDA approval.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function VaccineSafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        <Breadcrumbs
          items={[
            { label: "Vaccines", href: "/vaccines" },
            { label: "Vaccine Safety" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Vaccine Safety: How Vaccines Are Tested &amp; Monitored
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            It is completely normal to have questions about vaccine safety. Here is
            how the rigorous testing and monitoring process works to keep your baby
            safe.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "FDA", "AAP", "WHO"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Vaccines undergo 10-15 years of development and testing before FDA approval, including large clinical trials in children.",
            "After approval, multiple independent surveillance systems (VAERS, VSD, CISA) monitor safety continuously.",
            "Every ingredient in a vaccine has a specific purpose and has been studied extensively for safety at the amounts used.",
            "The amount of aluminum in all childhood vaccines combined is less than what a baby receives from breast milk or formula in 6 months.",
            "Serious vaccine reactions are extremely rare — about 1 in a million doses for anaphylaxis.",
          ]}
        />

        {/* How Vaccines Are Tested */}
        <section className="mb-10" aria-labelledby="testing-heading">
          <h2
            id="testing-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            How Vaccines Are Developed and Tested
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Pre-clinical Research (Laboratory)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Before human testing, vaccines are studied in laboratories and
                animal models to identify promising candidates and evaluate
                initial safety. This phase alone can take several years.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Phase I Trials (Small Groups)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                20-100 healthy volunteers receive the vaccine. Researchers monitor
                for serious side effects and determine dosing. For pediatric
                vaccines, adult trials come first.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Phase II Trials (Hundreds of People)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Hundreds of participants, including people in the target age
                group, receive the vaccine. Safety, dosing, immunogenicity
                (immune response), and schedule are evaluated.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Phase III Trials (Thousands of People)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Thousands to tens of thousands of participants receive either
                the vaccine or a placebo in randomized controlled trials. This
                phase establishes efficacy and identifies less common side
                effects. These trials often run for 1-4 years.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                FDA Review and Approval
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                The FDA reviews all clinical trial data, manufacturing
                processes, and labeling. An independent advisory committee
                (VRBPAC) of scientists, physicians, and public health experts
                votes on whether to recommend approval.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">
                Post-approval (Phase IV) Monitoring
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                After approval, safety monitoring continues indefinitely through
                VAERS, the Vaccine Safety Datalink (VSD), and the Clinical
                Immunization Safety Assessment (CISA) Project. These systems can
                detect rare adverse events that even large clinical trials might
                miss.
              </p>
            </div>
          </div>
        </section>

        {/* Vaccine Ingredients */}
        <section className="mb-10" aria-labelledby="ingredients-heading">
          <h2
            id="ingredients-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            What Is in Vaccines (and Why)
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E8E2D9]">
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Ingredient Type</th>
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Example</th>
                    <th className="text-left py-2 font-bold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Antigen</td>
                    <td className="py-2 pr-4">Weakened or inactivated virus/bacteria</td>
                    <td className="py-2">Trains the immune system to recognize the pathogen</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Adjuvant</td>
                    <td className="py-2 pr-4">Aluminum salts</td>
                    <td className="py-2">Strengthens immune response so less antigen is needed</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Preservative</td>
                    <td className="py-2 pr-4">Thimerosal (multi-dose flu vials only)</td>
                    <td className="py-2">Prevents bacterial/fungal contamination</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Stabilizer</td>
                    <td className="py-2 pr-4">Gelatin, sugars</td>
                    <td className="py-2">Keeps vaccine effective during storage and transport</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Residual</td>
                    <td className="py-2 pr-4">Formaldehyde (trace)</td>
                    <td className="py-2">Used during manufacturing to inactivate viruses; removed to trace amounts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              <strong>Note:</strong> Thimerosal has been removed from all
              childhood vaccines (except some multi-dose flu vaccine vials) since
              2001 as a precautionary measure. Multiple large studies have
              confirmed no link between thimerosal and autism or other health
              problems. Single-dose flu vaccines without thimerosal are available.
            </p>
          </div>
        </section>

        {/* Safety Monitoring Systems */}
        <section className="mb-10" aria-labelledby="monitoring-heading">
          <h2
            id="monitoring-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            How Vaccine Safety Is Monitored After Approval
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                VAERS (Vaccine Adverse Event Reporting System)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A national early warning system co-managed by CDC and FDA.
                Anyone — patients, parents, healthcare providers — can submit
                reports of health events that occur after vaccination. Reports
                serve as signals for further investigation; they do not prove
                that a vaccine caused the event.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                VSD (Vaccine Safety Datalink)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A collaboration between the CDC and 9 integrated healthcare
                organizations covering over 12 million people. VSD uses
                electronic health records to conduct rigorous studies comparing
                vaccinated and unvaccinated populations to identify real
                associations.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                CISA (Clinical Immunization Safety Assessment)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A network of vaccine safety experts at medical research centers
                that provides clinical consultations for complex adverse events
                and conducts focused research studies on vaccine safety.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Related Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/side-effects"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Side Effects</span>
              <p className="text-xs text-muted mt-1">Common reactions and when to call the doctor</p>
            </Link>
            <Link
              href="/vaccines/myths"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Myths vs. Facts</span>
              <p className="text-xs text-muted mt-1">Evidence-based answers to common concerns</p>
            </Link>
            <Link
              href="/vaccines/how-vaccines-work"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">How Vaccines Work</span>
              <p className="text-xs text-muted mt-1">How vaccines train your baby&apos;s immune system</p>
            </Link>
            <Link
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">Complete recommended immunization schedule</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Vaccines are among the most rigorously tested medical products in the world. Before your baby receives any vaccine, it has been studied for over a decade and reviewed by independent experts. After approval, multiple surveillance systems continuously monitor safety. Serious reactions are extremely rare."
          supportiveMessage="Having questions about what goes into your baby's body is a sign of being a thoughtful parent. The science is clear: vaccines are safe and effective."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
