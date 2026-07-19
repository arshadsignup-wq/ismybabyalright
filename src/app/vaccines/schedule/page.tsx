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
  title: "CDC Vaccine Schedule for Babies & Toddlers (0-6 Years) | Is My Baby Alright?",
  description:
    "Complete CDC recommended immunization schedule for children ages 0-6. Learn which vaccines are due at birth, 2 months, 4 months, 6 months, 12 months, and beyond. Endorsed by AAP and AAFP.",
  alternates: {
    canonical: "/vaccines/schedule",
  },
  openGraph: {
    title: "CDC Vaccine Schedule (0-6 Years) | Is My Baby Alright?",
    description:
      "Comprehensive guide to the CDC recommended childhood immunization schedule with explanations for each vaccine and timing.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "CDC Recommended Vaccine Schedule for Children (0-6 Years)",
  description:
    "Complete CDC recommended immunization schedule for children ages 0-6. Learn which vaccines are due at each well-child visit.",
  path: "/vaccines/schedule",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Immunization Schedule", url: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" },
    { name: "AAP Immunization Recommendations", url: "https://www.aap.org/en/patient-care/immunizations/" },
    { name: "ACIP Vaccine Recommendations", url: "https://www.cdc.gov/vaccines/acip/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "CDC Schedule" },
]);

const faqItems = [
  {
    question: "Why does the schedule start at birth?",
    answer:
      "The Hepatitis B vaccine is given at birth because infants infected with Hepatitis B have a 90% chance of developing chronic infection, which can lead to liver cancer and liver failure later in life. Vaccinating at birth provides immediate protection before any potential exposure.",
  },
  {
    question: "Why are so many vaccines given at 2 months?",
    answer:
      "At 2 months, maternal antibodies from pregnancy begin to wane, leaving babies vulnerable. The 2-month visit includes DTaP, IPV, Hib, PCV13, rotavirus, and HepB because these diseases are most dangerous for very young infants. Studies confirm that giving multiple vaccines at once is safe and does not overwhelm the immune system.",
  },
  {
    question: "What if my baby misses a scheduled dose?",
    answer:
      "If your baby misses a dose, you do not need to restart the series. Your pediatrician will use the CDC catch-up schedule to get back on track. The key is to resume as soon as possible — every day without protection is a day of vulnerability.",
  },
  {
    question: "Can preemies follow the same schedule?",
    answer:
      "Yes. The AAP and CDC recommend that premature babies follow the same immunization schedule based on their chronological (actual) age, not their adjusted age, with the exception of Hepatitis B for babies under 2,000 grams at birth, who may need a delayed first dose.",
  },
  {
    question: "Are combination vaccines safe?",
    answer:
      "Yes. Combination vaccines (like Pediarix, which combines DTaP, IPV, and HepB) reduce the number of shots while providing the same protection. They undergo the same rigorous safety testing as individual vaccines. The AAP and CDC support their use.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function VaccineSchedulePage() {
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
            { label: "CDC Schedule" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            CDC Recommended Vaccine Schedule (Ages 0-6)
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            The immunization schedule is carefully designed to protect your baby
            at the earliest possible age, when they are most vulnerable to
            serious diseases.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "AAP", "ACIP", "AAFP"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "The CDC schedule protects against 14 serious diseases by age 2, with most doses given at routine well-child visits.",
            "Each vaccine is timed to provide protection when your baby is most vulnerable and the immune system can respond effectively.",
            "The schedule is endorsed by the AAP, AAFP, ACIP, and all major medical organizations.",
            "Combination vaccines (like Pediarix) reduce total shots while providing the same protection.",
            "If doses are missed, a catch-up schedule can get your baby back on track without restarting.",
          ]}
        />

        {/* Schedule by Age */}
        <section className="mb-10" aria-labelledby="schedule-heading">
          <h2
            id="schedule-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Vaccines by Age
          </h2>

          <div className="space-y-4">
            {/* Birth */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">At Birth</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>Hepatitis B (HepB)</strong> - 1st dose. Protects against a virus that causes liver disease and liver cancer.</li>
              </ul>
            </div>

            {/* 2 Months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">2 Months</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>DTaP</strong> - 1st dose. Protects against diphtheria, tetanus, and pertussis (whooping cough).</li>
                <li><strong>IPV</strong> - 1st dose. Protects against polio.</li>
                <li><strong>Hib</strong> - 1st dose. Protects against Haemophilus influenzae type b (meningitis, pneumonia).</li>
                <li><strong>PCV15 or PCV20</strong> - 1st dose. Protects against pneumococcal disease (meningitis, blood infections).</li>
                <li><strong>Rotavirus (RV)</strong> - 1st dose. Protects against severe diarrhea and dehydration.</li>
                <li><strong>Hepatitis B (HepB)</strong> - 2nd dose (given between 1-2 months).</li>
              </ul>
              <p className="text-xs text-muted mt-3 italic">
                This is when maternal antibodies begin to fade, making vaccination critical.
              </p>
            </div>

            {/* 4 Months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">4 Months</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>DTaP</strong> - 2nd dose</li>
                <li><strong>IPV</strong> - 2nd dose</li>
                <li><strong>Hib</strong> - 2nd dose</li>
                <li><strong>PCV15 or PCV20</strong> - 2nd dose</li>
                <li><strong>Rotavirus (RV)</strong> - 2nd dose</li>
              </ul>
            </div>

            {/* 6 Months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">6 Months</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>DTaP</strong> - 3rd dose</li>
                <li><strong>PCV15 or PCV20</strong> - 3rd dose</li>
                <li><strong>Rotavirus (RV)</strong> - 3rd dose (RotaTeq brand only; Rotarix is 2-dose)</li>
                <li><strong>Hepatitis B (HepB)</strong> - 3rd dose (given between 6-18 months)</li>
                <li><strong>IPV</strong> - 3rd dose (given between 6-18 months)</li>
                <li><strong>Influenza (Flu)</strong> - 1st dose annually starting at 6 months</li>
              </ul>
            </div>

            {/* 12-15 Months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">12-15 Months</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>MMR</strong> - 1st dose. Protects against measles, mumps, and rubella.</li>
                <li><strong>Varicella</strong> - 1st dose. Protects against chickenpox.</li>
                <li><strong>Hepatitis A (HepA)</strong> - 1st dose. Protects against hepatitis A virus.</li>
                <li><strong>Hib</strong> - Booster dose</li>
                <li><strong>PCV15 or PCV20</strong> - Booster dose</li>
              </ul>
            </div>

            {/* 15-18 Months */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">15-18 Months</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>DTaP</strong> - 4th dose</li>
              </ul>
            </div>

            {/* 4-6 Years */}
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">4-6 Years (Before Kindergarten)</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li><strong>DTaP</strong> - 5th dose</li>
                <li><strong>IPV</strong> - 4th dose</li>
                <li><strong>MMR</strong> - 2nd dose</li>
                <li><strong>Varicella</strong> - 2nd dose</li>
              </ul>
              <p className="text-xs text-muted mt-3 italic">
                These boosters ensure strong long-term protection before children enter school settings.
              </p>
            </div>
          </div>
        </section>

        {/* Why the Timing Matters */}
        <section className="mb-10" aria-labelledby="timing-heading">
          <h2
            id="timing-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Why the Timing Matters
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              The schedule is not arbitrary. Each vaccine is timed based on:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
              <li>When maternal antibodies wane and baby becomes vulnerable</li>
              <li>When the immune system is mature enough to respond effectively</li>
              <li>When the risk of disease exposure is highest</li>
              <li>The minimum intervals needed between doses for optimal immunity</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed">
              The Advisory Committee on Immunization Practices (ACIP) reviews
              all available evidence and updates recommendations when new data
              becomes available.
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Related Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/delayed-schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Delayed Schedule Risks</span>
              <p className="text-xs text-muted mt-1">Why delaying vaccines puts babies at risk</p>
            </Link>
            <Link
              href="/vaccines/after-vaccination"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">After Vaccination</span>
              <p className="text-xs text-muted mt-1">What to expect and comfort measures</p>
            </Link>
            <Link
              href="/vaccines/premature"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Premature Babies</span>
              <p className="text-xs text-muted mt-1">Vaccination guidance for preemies</p>
            </Link>
            <Link
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">How vaccines are tested and monitored</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="The CDC immunization schedule is the product of decades of research and is endorsed by every major medical organization. It is designed to protect your baby from 14 serious diseases at the earliest safe age, when they are most vulnerable."
          supportiveMessage="Keeping up with vaccines can feel overwhelming, but your pediatrician's office tracks it for you. Each well-child visit is an opportunity to stay on schedule."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
