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
  title: "Risks of Delaying Vaccines: Why the CDC Schedule Matters | Is My Baby Alright?",
  description:
    "Learn why delaying or spacing out vaccines puts your baby at risk. Evidence on alternative schedules, vulnerability windows, and what the AAP and CDC recommend.",
  alternates: {
    canonical: "/vaccines/delayed-schedule",
  },
  openGraph: {
    title: "Risks of Delaying Vaccines | Is My Baby Alright?",
    description:
      "Why alternative vaccine schedules are not recommended and how delays leave babies vulnerable.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Risks of Delaying Vaccines: Why the CDC Schedule Matters",
  description:
    "Learn why delaying or spacing out vaccines puts your baby at risk. Evidence on alternative schedules and vulnerability windows.",
  path: "/vaccines/delayed-schedule",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Immunization Schedule", url: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" },
    { name: "AAP Policy on Immunization Timing", url: "https://www.aap.org/en/patient-care/immunizations/" },
    { name: "ACIP Recommendations", url: "https://www.cdc.gov/vaccines/acip/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Delayed Schedule Risks" },
]);

const faqItems = [
  {
    question: "Is Dr. Sears' alternative vaccine schedule safe?",
    answer:
      "The AAP, CDC, and AAFP do not endorse any alternative vaccine schedule including Dr. Sears' schedule. There is no scientific evidence that spacing out vaccines is safer. Research shows that alternative schedules leave children unprotected during their most vulnerable period and are associated with increased risk of vaccine-preventable diseases.",
  },
  {
    question: "Will my pediatrician refuse to see us if we delay vaccines?",
    answer:
      "Most pediatricians will continue to see your family even if you choose to delay vaccines, though they will strongly recommend following the CDC schedule. Some practices do dismiss families who refuse all vaccines. The AAP recommends that pediatricians continue the relationship and keep educating parents rather than dismissing them.",
  },
  {
    question: "What if my baby is premature — should I delay vaccines?",
    answer:
      "No. The AAP and CDC recommend that premature babies follow the same schedule based on chronological (actual birth) age, not adjusted age. Preemies are actually MORE vulnerable to vaccine-preventable diseases, making timely vaccination even more important. The only exception is Hepatitis B for babies under 2,000 grams.",
  },
  {
    question: "Is it safer to give one vaccine at a time?",
    answer:
      "No. Studies have found no safety benefit to giving vaccines one at a time. Giving one vaccine per visit means more total office visits, more total needle sticks, more pain and stress for your baby, and — most importantly — longer periods of vulnerability to serious diseases.",
  },
  {
    question: "What diseases could my baby catch while waiting?",
    answer:
      "Pertussis (whooping cough) kills approximately 20 babies per year in the US, mostly under 3 months. Measles is highly contagious and can cause brain inflammation. Hib meningitis can cause permanent brain damage within hours. Rotavirus hospitalizes about 50,000 US children yearly. These risks exist every day your baby is unprotected.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function DelayedSchedulePage() {
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
            { label: "Delayed Schedule Risks" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Risks of Delaying Vaccines
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Some parents consider spacing out or delaying vaccines. We
            understand the impulse to be cautious — but the evidence is clear
            that delays increase risk without providing any safety benefit.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "AAP", "ACIP"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "No major medical organization recommends alternative or delayed vaccine schedules.",
            "Delaying vaccines provides no safety benefit — it only extends the time your baby is vulnerable.",
            "Studies show children on delayed schedules have higher rates of vaccine-preventable diseases.",
            "The CDC schedule is timed to protect babies when they are most vulnerable and most at risk.",
            "More visits means more shots total, more stress, and more opportunity for missed doses.",
          ]}
        />

        {/* Why Parents Consider Delaying */}
        <section className="mb-10" aria-labelledby="why-heading">
          <h2
            id="why-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Why Some Parents Consider Delaying
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              We understand the concerns that lead parents to consider alternative
              schedules:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Worry about "too many vaccines at once" overwhelming the immune system</li>
              <li>Desire to reduce the number of shots per visit</li>
              <li>Misinformation suggesting the standard schedule is unsafe</li>
              <li>A general instinct to "slow down" and be cautious</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed">
              These feelings are understandable. However, the scientific evidence
              does not support delayed schedules as safer. Here is why.
            </p>
          </div>
        </section>

        {/* Evidence Against Delaying */}
        <section className="mb-10" aria-labelledby="evidence-heading">
          <h2
            id="evidence-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            What the Evidence Shows
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                No Safety Benefit to Spacing Out
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Multiple large studies have compared children who followed the
                CDC schedule to those on delayed schedules. There is no
                difference in adverse events, developmental outcomes, or immune
                function. The perception that fewer vaccines at once is safer is
                not supported by data.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Increased Disease Risk
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A 2013 study in JAMA Pediatrics found that children with delayed
                vaccination were significantly more likely to be diagnosed with
                vaccine-preventable diseases. Every day without vaccination is a
                day of real vulnerability.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                More Visits, More Stress
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Spacing out vaccines means more total office visits, more
                separate needle sticks (since combination vaccines may not be
                usable), and more cumulative stress for your baby. It also
                increases the chance of falling behind and missing doses entirely.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                The Immune System Is Not Overwhelmed
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                A baby&apos;s immune system encounters and responds to thousands of
                antigens every single day. The entire childhood vaccine schedule
                contains fewer than 200 antigens total. Studies confirm that
                multiple vaccines given simultaneously do not suppress immune
                function or increase susceptibility to other infections.
              </p>
            </div>
          </div>
        </section>

        {/* Real Risks of Delay */}
        <section className="mb-10" aria-labelledby="risks-heading">
          <h2
            id="risks-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Real Risks During the Vulnerability Window
          </h2>
          <div className="rounded-xl border border-concern/20 bg-concern-light p-5">
            <p className="text-sm text-muted leading-relaxed mb-3">
              These diseases remain active threats. During any delay, your baby
              is unprotected against:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Pertussis (whooping cough):</strong> Kills ~20 US infants/year, mostly under 3 months. 50% of infected infants need hospitalization.</li>
              <li><strong>Measles:</strong> One of the most contagious diseases known. Can cause pneumonia, brain inflammation, and death. 2019 US outbreak had 1,282 cases.</li>
              <li><strong>Hib meningitis:</strong> Before the vaccine, ~20,000 children/year got Hib disease. Can cause brain damage within hours.</li>
              <li><strong>Rotavirus:</strong> Before the vaccine, caused ~50,000 hospitalizations and 20-60 deaths in US children yearly.</li>
              <li><strong>Pneumococcal disease:</strong> Leading cause of bacterial meningitis in children under 2.</li>
            </ul>
          </div>
        </section>

        {/* What AAP Says */}
        <section className="mb-10" aria-labelledby="aap-heading">
          <h2
            id="aap-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            What Major Medical Organizations Say
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <blockquote className="text-sm text-muted leading-relaxed italic border-l-4 border-primary pl-4">
              &ldquo;The recommended immunization schedule is designed to provide
              protection at the earliest appropriate age. There is no evidence
              that spreading out or delaying vaccines is safer.&rdquo;
              <footer className="text-xs text-muted mt-1 not-italic">— American Academy of Pediatrics (AAP)</footer>
            </blockquote>
            <blockquote className="text-sm text-muted leading-relaxed italic border-l-4 border-primary pl-4 mt-4">
              &ldquo;The schedule is not random. Each vaccine is given at a specific
              age based on when children are most at risk and when the vaccine
              will generate the best immune response.&rdquo;
              <footer className="text-xs text-muted mt-1 not-italic">— Centers for Disease Control and Prevention (CDC)</footer>
            </blockquote>
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
              <p className="text-xs text-muted mt-1">The recommended immunization timeline</p>
            </Link>
            <Link
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">How vaccines are tested and monitored</p>
            </Link>
            <Link
              href="/vaccines/myths"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Myths vs. Facts</span>
              <p className="text-xs text-muted mt-1">Debunking common misconceptions</p>
            </Link>
            <Link
              href="/vaccines/diseases"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Diseases Prevented</span>
              <p className="text-xs text-muted mt-1">What your baby is being protected from</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="There is no scientific evidence that delaying or spacing out vaccines is safer. It only extends the time your baby is vulnerable to serious diseases. The CDC schedule is carefully designed to protect babies at the earliest safe age. If you have concerns, discuss them with your pediatrician — but please do not delay protection."
          supportiveMessage="Wanting to protect your baby from everything is good parenting. The best way to do that is to follow the science-backed schedule that has prevented millions of childhood deaths worldwide."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
