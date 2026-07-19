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
  title: "Vaccines for Premature Babies: What Parents Need to Know | Is My Baby Alright?",
  description:
    "Vaccination guidelines for premature babies. Learn why preemies follow the same schedule, special considerations for Hepatitis B, RSV protection, and what the AAP recommends.",
  alternates: {
    canonical: "/vaccines/premature",
  },
  openGraph: {
    title: "Vaccines for Premature Babies | Is My Baby Alright?",
    description:
      "Complete guide to vaccination for premature infants. Same schedule, special considerations.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Vaccines for Premature Babies: What Parents Need to Know",
  description:
    "Vaccination guidelines for premature babies including schedule timing, special considerations, and AAP recommendations.",
  path: "/vaccines/premature",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "AAP Policy on Immunization of Preterm Infants", url: "https://www.aap.org/en/patient-care/immunizations/" },
    { name: "CDC Immunization Schedule", url: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" },
    { name: "AAP RSV Prevention Guidance", url: "https://www.aap.org/en/patient-care/respiratory-syncytial-virus-rsv-prevention/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Premature Babies" },
]);

const faqItems = [
  {
    question: "Should premature babies get vaccines on the same schedule?",
    answer:
      "Yes. The AAP and CDC recommend that premature babies follow the standard immunization schedule based on their chronological (actual birth) age, not their corrected/adjusted age. Preemies are more vulnerable to infections, making timely vaccination even more important. The only exception is the first Hepatitis B dose for babies born weighing less than 2,000 grams.",
  },
  {
    question: "Are vaccines safe for very small premature babies?",
    answer:
      "Yes. Studies show that premature babies tolerate vaccines well and develop protective immune responses. The AAP specifically states that prematurity is NOT a reason to delay vaccination. Even babies born as early as 24-25 weeks should be vaccinated on schedule based on their birth date.",
  },
  {
    question: "Do premature babies need extra vaccines?",
    answer:
      "Preemies follow the same vaccine schedule as full-term babies. However, they may need additional protection against RSV (respiratory syncytial virus) through nirsevimab (Beyfortus) or palivizumab (Synagis) depending on their gestational age and risk factors. This is a monoclonal antibody, not technically a vaccine, but it provides passive immunity.",
  },
  {
    question: "What about the Hepatitis B vaccine for very small preemies?",
    answer:
      "Babies born weighing less than 2,000 grams (about 4.4 pounds) who are born to Hepatitis B-negative mothers should receive their first HepB dose at 1 month of age or hospital discharge (whichever comes first), rather than at birth. If the mother is HepB-positive or her status is unknown, the baby should still receive HepB and HBIG within 12 hours of birth regardless of weight.",
  },
  {
    question: "Can my preemie get vaccines while still in the NICU?",
    answer:
      "Yes. The AAP recommends that medically stable premature infants in the NICU receive all indicated vaccines at the appropriate chronological age. NICU staff are experienced with vaccinating preemies. The only temporarily contraindicated situation is acute illness requiring intensive medical management.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function PrematurePage() {
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
            { label: "Premature Babies" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Vaccines for Premature Babies
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            If your baby was born early, you may wonder whether they should be
            vaccinated on the same schedule. The short answer: yes, with one
            small exception. Here is everything you need to know.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["AAP", "CDC", "WHO"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Premature babies should follow the standard CDC vaccine schedule based on their chronological (birth) age, NOT adjusted age.",
            "Preemies are MORE vulnerable to vaccine-preventable diseases, making on-time vaccination even more critical.",
            "The only exception: first Hepatitis B dose may be delayed for babies under 2,000 grams born to HepB-negative mothers.",
            "Premature babies respond well to vaccines and tolerate them safely, even in the NICU.",
            "Additional RSV protection (nirsevimab/Beyfortus) is recommended for preemies born before 32 weeks.",
          ]}
        />

        {/* Key Principle */}
        <section className="mb-10" aria-labelledby="principle-heading">
          <h2
            id="principle-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            The Key Principle: Chronological Age, Not Adjusted Age
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              For developmental milestones, pediatricians use your baby&apos;s
              adjusted (corrected) age. But for vaccines, they use chronological
              age — the actual number of days since birth.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              <strong>Why?</strong> Because premature babies are exposed to
              infections from their actual birth date, not their due date.
              Their immune systems need training as soon as it is safe to
              provide it — and that timing is based on real-world exposure, not
              developmental maturity.
            </p>
            <div className="rounded-lg bg-primary-light p-4 mt-3">
              <p className="text-sm text-foreground font-medium">
                Example: A baby born at 28 weeks who is now 2 months old
                chronologically should receive the 2-month vaccines (DTaP,
                IPV, Hib, PCV, Rotavirus, HepB) — even though their adjusted
                age is only about 1 week.
              </p>
            </div>
          </div>
        </section>

        {/* Hepatitis B Exception */}
        <section className="mb-10" aria-labelledby="hepb-heading">
          <h2
            id="hepb-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            The Hepatitis B Exception
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              The only modification to the standard schedule for preemies
              involves the birth dose of Hepatitis B:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Mother is HepB-negative</p>
                <p className="text-xs text-muted mt-1">
                  Baby under 2,000g: Delay first HepB dose to 1 month of
                  age or hospital discharge (whichever is first). Baby over
                  2,000g: Give at birth as normal.
                </p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Mother is HepB-positive or unknown</p>
                <p className="text-xs text-muted mt-1">
                  Give HepB vaccine AND HBIG within 12 hours of birth
                  regardless of baby&apos;s weight or gestational age. This is
                  an emergency prevention measure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RSV Protection */}
        <section className="mb-10" aria-labelledby="rsv-heading">
          <h2
            id="rsv-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            RSV Protection for Preemies
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Respiratory Syncytial Virus (RSV) is especially dangerous for
              premature babies because their lungs are underdeveloped. The AAP
              recommends additional RSV protection:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Nirsevimab (Beyfortus):</strong> A single-dose monoclonal antibody injection recommended for all infants in their first RSV season, with particular importance for preemies.</li>
              <li><strong>Palivizumab (Synagis):</strong> Monthly injections during RSV season for highest-risk infants (born before 29 weeks, or with chronic lung disease/significant heart disease).</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-2">
              These are passive immunizations (antibodies), not vaccines. They
              provide immediate protection rather than training the immune
              system. Ask your neonatologist or pediatrician which is
              appropriate for your baby.
            </p>
          </div>
        </section>

        {/* NICU Vaccination */}
        <section className="mb-10" aria-labelledby="nicu-heading">
          <h2
            id="nicu-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Vaccination in the NICU
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              If your baby is still in the NICU at 2 months of age, they should
              still receive their 2-month vaccines unless they are acutely ill
              and medically unstable. Key points:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>NICU nurses routinely administer vaccines to premature infants</li>
              <li>Babies on ventilators or supplemental oxygen can still be vaccinated</li>
              <li>Cardiorespiratory monitoring may continue for 48 hours after vaccination as a precaution</li>
              <li>The rotavirus vaccine may require coordination with NICU infection control protocols</li>
              <li>Any previous apnea/bradycardia episodes do not contraindicate vaccination</li>
            </ul>
          </div>
        </section>

        {/* Special Considerations */}
        <section className="mb-10" aria-labelledby="special-heading">
          <h2
            id="special-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Additional Considerations for Preemie Parents
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Cocooning:</strong> Make sure all household contacts and caregivers are up to date on Tdap (whooping cough) and flu vaccines to protect your preemie before they are fully vaccinated.</li>
              <li><strong>Flu vaccine:</strong> Especially important for preemies once they reach 6 months. Until then, household contacts should all be vaccinated.</li>
              <li><strong>Antibody response:</strong> Some studies show slightly lower initial antibody levels in very premature infants, but after completing the full series, protection is comparable to term infants.</li>
              <li><strong>Multiple doses matter more:</strong> Because initial responses may be slightly lower, completing every dose on schedule is even more important for preemies.</li>
            </ul>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Related Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">The standard immunization timeline</p>
            </Link>
            <Link
              href="/vaccines/after-vaccination"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">After Vaccination</span>
              <p className="text-xs text-muted mt-1">What to expect and comfort measures</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Premature babies are more vulnerable to infections, not less. That is exactly why on-time vaccination (based on birth age) is so important. Your preemie's immune system can handle vaccines safely, and the protection they provide is critical for babies whose respiratory and immune systems are still developing."
          supportiveMessage="NICU parents carry extra worry about everything. Know that your medical team has extensive experience vaccinating premature babies safely. Ask them any questions you have."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
