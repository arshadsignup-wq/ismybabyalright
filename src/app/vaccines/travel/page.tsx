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
  title: "Travel Vaccines for Babies & Toddlers | Is My Baby Alright?",
  description:
    "Which travel vaccines does your baby or toddler need? Guide to Hepatitis A, Yellow Fever, typhoid, malaria prevention, and CDC travel health recommendations for young children.",
  alternates: {
    canonical: "/vaccines/travel",
  },
  openGraph: {
    title: "Travel Vaccines for Babies & Toddlers | Is My Baby Alright?",
    description:
      "Plan ahead: travel vaccination guide for infants and toddlers. Know what is needed and when to start.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Travel Vaccines for Babies & Toddlers",
  description:
    "Which travel vaccines does your baby or toddler need? Guide to destination-specific immunizations for young children.",
  path: "/vaccines/travel",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel" },
    { name: "AAP Travel Health Guidance", url: "https://www.aap.org/en/patient-care/travel-health/" },
    { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Travel Vaccines" },
]);

const faqItems = [
  {
    question: "How far in advance should I plan travel vaccines for my baby?",
    answer:
      "Ideally 4-6 weeks before travel. Some vaccines require multiple doses with intervals between them. Others take 2-4 weeks to provide full protection. If you are traveling in less than 4 weeks, see a travel medicine specialist immediately — accelerated schedules may be available for some vaccines.",
  },
  {
    question: "Can babies under 6 months travel internationally?",
    answer:
      "Babies can travel at any age, but infants under 6 months cannot receive some travel vaccines (like Yellow Fever, which requires a minimum age of 9 months). This means some destinations may not be advisable for very young infants. Consult a travel medicine specialist and consider whether the trip can be postponed.",
  },
  {
    question: "Does my baby need the Yellow Fever vaccine?",
    answer:
      "Yellow Fever vaccine is required for entry to certain countries in Africa and South America. It can only be given to babies 9 months and older (6 months in some circumstances during outbreaks). If your baby is too young, you may be able to obtain a medical waiver, but the CDC recommends avoiding Yellow Fever risk areas with unvaccinated infants.",
  },
  {
    question: "What about malaria prevention for babies?",
    answer:
      "There is no malaria vaccine for routine travel use in young children. Prevention involves antimalarial medication (some are safe from birth, others from specific ages), mosquito nets treated with permethrin, DEET-containing repellent (safe for babies over 2 months), and staying in screened/air-conditioned areas. Consult a travel medicine specialist for the correct antimalarial for your baby's age and destination.",
  },
  {
    question: "Can travel vaccines be given at the same time as routine vaccines?",
    answer:
      "In most cases, yes. Travel vaccines can generally be given at the same visit as routine childhood vaccines. Your pediatrician or travel medicine specialist will coordinate the timing. Some live vaccines (like Yellow Fever and MMR) must be given either on the same day or at least 4 weeks apart.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function TravelVaccinesPage() {
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
            { label: "Travel Vaccines" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Travel Vaccines for Babies &amp; Toddlers
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Planning international travel with your baby? Some destinations
            require additional vaccines or health precautions. Here is what you
            need to know to keep your little one safe abroad.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "AAP", "WHO"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Start planning travel vaccines 4-6 weeks before departure — some require multiple doses or time to take effect.",
            "Being up to date on routine vaccines is the most important first step (many travel diseases are covered by the CDC schedule).",
            "Some vaccines have minimum age requirements (Yellow Fever: 9 months; Typhoid injectable: 2 years).",
            "A travel medicine specialist can create a personalized plan based on your destination, trip length, and baby's age.",
            "CDC.gov/travel has destination-specific recommendations that are regularly updated.",
          ]}
        />

        {/* First Step */}
        <section className="mb-10" aria-labelledby="first-step-heading">
          <h2
            id="first-step-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            First Step: Be Up to Date on Routine Vaccines
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Before thinking about travel-specific vaccines, make sure your
              baby is current on all routine CDC-recommended immunizations.
              Many diseases that seem "exotic" are actually covered by the
              standard schedule:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
              <li><strong>Measles (MMR)</strong> — outbreaks are common in many countries</li>
              <li><strong>Hepatitis B</strong> — endemic in parts of Asia and Africa</li>
              <li><strong>Polio (IPV)</strong> — still circulating in some regions</li>
              <li><strong>Hepatitis A</strong> — common in developing countries (routine at 12 months)</li>
              <li><strong>Rotavirus</strong> — a leading cause of severe diarrhea worldwide</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-2">
              If your baby is behind on any routine vaccines, catch up before
              traveling. An accelerated schedule may be possible — ask your
              pediatrician.
            </p>
          </div>
        </section>

        {/* Travel-Specific Vaccines */}
        <section className="mb-10" aria-labelledby="travel-vaccines-heading">
          <h2
            id="travel-vaccines-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Travel-Specific Vaccines for Young Children
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Hepatitis A
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> 12 months (routine CDC schedule). For
                travel before 12 months, a dose can be given as early as 6 months
                but does not count toward the routine series.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> Central/South America, Africa, Asia, Eastern Europe, Middle East.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Yellow Fever
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> 9 months (6 months only during outbreaks per CDC guidance).
                Required for entry to certain countries.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> Parts of Africa and South America. Check country-specific requirements.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Note:</strong> This is a live vaccine. If your baby needs MMR or varicella around the same time, they must be given on the same day or 28+ days apart.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Typhoid
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> 2 years (injectable Vi polysaccharide). Oral
                vaccine: 6 years.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> South Asia (highest risk), parts of Africa, Central/South America.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>For children under 2:</strong> Prevention relies on safe food and water practices.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Japanese Encephalitis
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> 2 months (Ixiaro vaccine).
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> Rural areas of East/Southeast Asia, Western Pacific.
                Primarily for stays longer than 1 month in endemic areas.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Rabies (Pre-exposure)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> No strict minimum. Consider for travel to
                areas where rabies is common and medical care is limited.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> Parts of Asia, Africa, Central/South America where
                animal bites (especially dogs) are a risk and rabies immune
                globulin may not be available locally.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Meningococcal Vaccine
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong>Minimum age:</strong> 2 months (MenACWY for high-risk; routine at 11-12 years).
              </p>
              <p className="text-sm text-muted leading-relaxed mt-1">
                <strong>Where:</strong> Required for Hajj/Umrah travel to Saudi Arabia.
                Recommended for the "meningitis belt" of sub-Saharan Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Malaria and Other Non-Vaccine Prevention */}
        <section className="mb-10" aria-labelledby="malaria-heading">
          <h2
            id="malaria-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Malaria &amp; Other Non-Vaccine Prevention
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Some travel health threats do not have routine travel vaccines for
              young children and require other prevention strategies:
            </p>
            <div className="mt-3">
              <h3 className="text-sm font-bold text-foreground mb-2">Malaria</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li>Antimalarial medication (some safe from birth; consult travel medicine specialist)</li>
                <li>DEET-based insect repellent (safe for babies 2+ months, 10-30% concentration)</li>
                <li>Permethrin-treated bed nets and clothing</li>
                <li>Stay in screened or air-conditioned rooms</li>
                <li>Cover arms and legs at dusk and dawn</li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-bold text-foreground mb-2">Traveler&apos;s Diarrhea</h3>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                <li>Use bottled or boiled water for drinking and mixing formula</li>
                <li>Avoid ice, raw produce, and street food</li>
                <li>Bring oral rehydration salts (ORS) for dehydration management</li>
                <li>Continue breastfeeding — it provides some protective antibodies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Planning Checklist */}
        <section className="mb-10" aria-labelledby="checklist-heading">
          <h2
            id="checklist-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Travel Health Checklist
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Check CDC.gov/travel for destination-specific recommendations</li>
              <li>Schedule a travel medicine consultation 4-6 weeks before departure</li>
              <li>Ensure all routine vaccines are up to date (accelerate if needed)</li>
              <li>Obtain destination-specific vaccines as recommended</li>
              <li>Get prescriptions for antimalarials if traveling to malaria zones</li>
              <li>Pack insect repellent, ORS packets, and any needed medications</li>
              <li>Carry a copy of your baby&apos;s immunization record</li>
              <li>Research healthcare facilities at your destination</li>
              <li>Consider travel health insurance that covers medical evacuation</li>
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
              <p className="text-xs text-muted mt-1">Routine immunization timeline</p>
            </Link>
            <Link
              href="/vaccines/diseases"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Diseases Prevented</span>
              <p className="text-xs text-muted mt-1">What vaccines protect against</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="International travel with a baby requires advance planning. Start 4-6 weeks before departure, make sure routine vaccines are current, and consult a travel medicine specialist for destination-specific recommendations. The CDC Travelers' Health website (wwwnc.cdc.gov/travel) is the best starting point."
          supportiveMessage="Traveling with your baby can be wonderful. A little preparation keeps everyone safe and lets you focus on making memories."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
