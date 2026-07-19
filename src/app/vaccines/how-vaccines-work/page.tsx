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
  title: "How Vaccines Work: Training Your Baby's Immune System | Is My Baby Alright?",
  description:
    "Simple explanation of how vaccines train your baby's immune system to fight diseases without getting sick. Learn about antigens, antibodies, memory cells, and different vaccine types.",
  alternates: {
    canonical: "/vaccines/how-vaccines-work",
  },
  openGraph: {
    title: "How Vaccines Work | Is My Baby Alright?",
    description:
      "How vaccines safely teach your baby's immune system to fight dangerous diseases.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "How Vaccines Work: Training Your Baby's Immune System",
  description:
    "Simple explanation of how vaccines train the immune system to fight diseases without getting sick.",
  path: "/vaccines/how-vaccines-work",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Understanding How Vaccines Work", url: "https://www.cdc.gov/vaccines/hcp/conversations/understanding-vacc-work.html" },
    { name: "WHO How Do Vaccines Work", url: "https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work" },
    { name: "NIH Immune System and Vaccines", url: "https://www.niaid.nih.gov/research/how-vaccines-work" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "How Vaccines Work" },
]);

const faqItems = [
  {
    question: "Do vaccines give my baby the actual disease?",
    answer:
      "No. Most childhood vaccines use killed (inactivated) viruses, pieces of the virus, or weakened forms that cannot cause the full disease. Live attenuated vaccines (like MMR and varicella) use viruses that are too weak to cause illness in healthy people. Your baby gets the immune training without the danger of the actual disease.",
  },
  {
    question: "How long does it take for a vaccine to start working?",
    answer:
      "It typically takes 2-4 weeks after vaccination for the immune system to build full protection. This is why vaccines are given before exposure to a disease, not after. Some vaccines require multiple doses to build strong, lasting immunity.",
  },
  {
    question: "Why do some vaccines need multiple doses?",
    answer:
      "Some vaccines need multiple doses to build strong, long-lasting immunity. The first dose primes the immune system. Each subsequent dose boosts the response, creating more memory cells and stronger antibodies. Without all recommended doses, protection may be incomplete or short-lived.",
  },
  {
    question: "Can my baby's immune system handle multiple vaccines at once?",
    answer:
      "Yes. A baby's immune system responds to thousands of antigens every day from food, air, and normal bacteria. The antigens in all childhood vaccines combined (fewer than 200) represent a tiny fraction of what the immune system already handles daily. Studies confirm that multiple vaccines given together are safe and effective.",
  },
  {
    question: "Does breastfeeding protect my baby enough without vaccines?",
    answer:
      "Breastfeeding provides some temporary passive immunity (mainly IgA antibodies for gut protection), but it does not replace vaccination. Breast milk antibodies do not provide long-lasting immunity to vaccine-preventable diseases like measles, whooping cough, or meningitis. The AAP and WHO recommend both breastfeeding and vaccination.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function HowVaccinesWorkPage() {
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
            { label: "How Vaccines Work" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            How Vaccines Work: Training Your Baby&apos;s Immune System
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Vaccines teach your baby&apos;s immune system to recognize and fight
            dangerous diseases — without ever getting sick. Here is how that
            process works.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "WHO", "NIH", "AAP"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Vaccines introduce a harmless form of a pathogen so the immune system can learn to fight it without the risk of actual disease.",
            "After vaccination, the immune system creates memory cells that provide rapid protection if the real pathogen is encountered later.",
            "Multiple doses strengthen the immune response and create more durable long-term protection.",
            "A baby's immune system handles thousands of antigens daily — vaccines add a tiny fraction to that workload.",
            "Different vaccine types (live, inactivated, mRNA, subunit) all achieve the same goal through different mechanisms.",
          ]}
        />

        {/* The Immune System Basics */}
        <section className="mb-10" aria-labelledby="immune-heading">
          <h2
            id="immune-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Your Baby&apos;s Immune System: The Basics
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Your baby is born with an immune system that has two main parts:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Innate Immunity</p>
                <p className="text-xs text-muted mt-1">
                  General defenses present from birth — skin barriers, mucus,
                  fever response, and cells that attack any foreign invader.
                  Fast but not specific.
                </p>
              </div>
              <div className="rounded-lg bg-card-alt p-3">
                <p className="text-sm font-bold text-foreground">Adaptive Immunity</p>
                <p className="text-xs text-muted mt-1">
                  Targeted defenses that learn to recognize specific pathogens.
                  Slower at first, but creates memory for faster future
                  responses. This is what vaccines train.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Vaccines Teach the Immune System */}
        <section className="mb-10" aria-labelledby="process-heading">
          <h2
            id="process-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            How a Vaccine Trains Immunity (Step by Step)
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
              <div>
                <p className="text-sm font-bold text-foreground">Introduction</p>
                <p className="text-xs text-muted mt-1">
                  The vaccine introduces a harmless form of a pathogen (killed
                  virus, weakened virus, or just a piece of it like a protein)
                  into the body.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
              <div>
                <p className="text-sm font-bold text-foreground">Detection</p>
                <p className="text-xs text-muted mt-1">
                  Immune cells (antigen-presenting cells) detect the foreign
                  material and present it to helper T cells, sounding the alarm.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
              <div>
                <p className="text-sm font-bold text-foreground">Response</p>
                <p className="text-xs text-muted mt-1">
                  B cells produce antibodies specifically designed to neutralize
                  this pathogen. Killer T cells learn to destroy infected cells.
                  This is why your baby may get a mild fever — the immune system
                  is actively working.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
              <div>
                <p className="text-sm font-bold text-foreground">Memory</p>
                <p className="text-xs text-muted mt-1">
                  After the threat is neutralized, most immune cells die off.
                  But memory B cells and memory T cells remain in the body for
                  years or decades, ready to mount a rapid, powerful response if
                  the real pathogen is ever encountered.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
              <div>
                <p className="text-sm font-bold text-foreground">Protection</p>
                <p className="text-xs text-muted mt-1">
                  If your baby is later exposed to the real disease, memory
                  cells activate within hours — producing antibodies and
                  killing infected cells before the pathogen can take hold.
                  Your baby is protected without ever getting sick.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Vaccines */}
        <section className="mb-10" aria-labelledby="types-heading">
          <h2
            id="types-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Types of Vaccines
          </h2>
          <div className="space-y-3">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Live Attenuated Vaccines
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Use a weakened (attenuated) form of the living virus that can
                replicate but cannot cause disease in healthy people. Produce
                strong, long-lasting immunity, often with fewer doses.
              </p>
              <p className="text-xs text-muted mt-2 italic">
                Examples: MMR, Varicella (chickenpox), Rotavirus
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Inactivated (Killed) Vaccines
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Use a killed version of the pathogen. Cannot cause disease at
                all. Often require multiple doses and boosters because the
                immune response is less robust than with live vaccines.
              </p>
              <p className="text-xs text-muted mt-2 italic">
                Examples: IPV (polio), Hepatitis A, Influenza (shot)
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Subunit / Conjugate / Toxoid Vaccines
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Use only specific pieces of the pathogen (proteins, sugars,
                or inactivated toxins) rather than the whole organism. Very
                targeted and safe. Cannot cause disease.
              </p>
              <p className="text-xs text-muted mt-2 italic">
                Examples: DTaP (toxoid), Hib (conjugate), PCV (conjugate), Hepatitis B (subunit)
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                mRNA Vaccines
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Provide genetic instructions for cells to make a harmless
                piece of the pathogen (like the spike protein), triggering an
                immune response. The mRNA is broken down within days and does
                not alter DNA.
              </p>
              <p className="text-xs text-muted mt-2 italic">
                Examples: COVID-19 vaccines (Pfizer, Moderna)
              </p>
            </div>
          </div>
        </section>

        {/* Why Multiple Doses */}
        <section className="mb-10" aria-labelledby="doses-heading">
          <h2
            id="doses-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Why Multiple Doses Are Needed
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Some vaccines require multiple doses for full protection. Here is
              why:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Primary series:</strong> Each dose builds upon the previous one, creating more memory cells and stronger antibodies. The first dose primes the system; subsequent doses amplify it.</li>
              <li><strong>Boosters:</strong> Over time, some memory cells naturally decline. Booster doses reactivate and expand the memory cell population, extending protection.</li>
              <li><strong>Immune maturity:</strong> Very young infants may not respond fully to a single dose. Multiple doses ensure robust protection as the immune system matures.</li>
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
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">Testing, ingredients, monitoring</p>
            </Link>
            <Link
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">When each vaccine is given</p>
            </Link>
            <Link
              href="/vaccines/diseases"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Diseases Prevented</span>
              <p className="text-xs text-muted mt-1">What vaccines protect against</p>
            </Link>
            <Link
              href="/vaccines/myths"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Myths vs. Facts</span>
              <p className="text-xs text-muted mt-1">Debunking common misconceptions</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Vaccines work by safely training your baby's immune system to recognize and fight specific diseases. This creates memory cells that provide rapid protection if your baby is ever exposed to the real pathogen — all without the risk of actual illness."
          supportiveMessage="Your baby's immune system is remarkable. Vaccines simply give it a safe preview of dangerous pathogens so it can be prepared. It is one of the smartest things modern medicine has given us."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
