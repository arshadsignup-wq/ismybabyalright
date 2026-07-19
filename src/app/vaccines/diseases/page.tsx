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
  title: "Diseases Vaccines Prevent: Why Childhood Vaccination Matters | Is My Baby Alright?",
  description:
    "Learn about the 14 serious diseases childhood vaccines prevent: measles, whooping cough, polio, meningitis, and more. Symptoms, complications, and why vaccination is critical.",
  alternates: {
    canonical: "/vaccines/diseases",
  },
  openGraph: {
    title: "Diseases Vaccines Prevent | Is My Baby Alright?",
    description:
      "The 14 serious diseases childhood vaccines protect against. Understand what your baby is being immunized from.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Diseases Vaccines Prevent: Why Childhood Vaccination Matters",
  description:
    "Learn about the 14 serious diseases childhood vaccines prevent and why vaccination is critical for babies.",
  path: "/vaccines/diseases",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Diseases & Vaccines", url: "https://www.cdc.gov/vaccines/parents/diseases/index.html" },
    { name: "WHO Vaccine-Preventable Diseases", url: "https://www.who.int/teams/immunization-vaccines-and-biologicals/diseases" },
    { name: "AAP Red Book", url: "https://www.aap.org/en/catalog/red-book/" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Diseases Prevented" },
]);

const faqItems = [
  {
    question: "Are these diseases really still a threat?",
    answer:
      "Yes. These diseases are suppressed by vaccination, not eradicated (except smallpox). When vaccination rates drop, outbreaks return — as seen with measles outbreaks in the US (1,282 cases in 2019) and whooping cough outbreaks in under-vaccinated communities. Many of these diseases remain common in other countries and are only a plane flight away.",
  },
  {
    question: "Why vaccinate against diseases that are rare in the US?",
    answer:
      "They are rare BECAUSE of vaccination. If we stop vaccinating, they will return. Polio, for example, paralyzed tens of thousands of US children before the vaccine. Hib meningitis killed hundreds yearly. The vaccine is the only reason these numbers are now near zero.",
  },
  {
    question: "Which of these diseases is most dangerous for babies?",
    answer:
      "Pertussis (whooping cough) and Hib meningitis are particularly lethal for infants. Half of babies under 1 year who get pertussis require hospitalization, and about 1 in 100 die. Hib meningitis can cause permanent brain damage within hours. Measles, pneumococcal meningitis, and rotavirus are also especially severe in infants.",
  },
  {
    question: "Can my baby die from vaccine-preventable diseases?",
    answer:
      "Yes. Before vaccines, these diseases killed thousands of US children annually. Measles killed 400-500 per year, pertussis killed 8,000+ per year, and Hib killed 600+ per year. Even with modern medicine, some of these diseases remain deadly — particularly for infants whose immune systems are immature.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

const diseases = [
  {
    name: "Measles",
    vaccine: "MMR",
    description: "Highly contagious viral disease causing high fever, rash, cough, and potentially pneumonia, brain inflammation (encephalitis), and death.",
    severity: "1 in 1,000 children develops brain inflammation. 1-3 in 1,000 die. Before the vaccine, 400-500 US deaths per year.",
    status: "Still circulates globally. US outbreaks occur in under-vaccinated communities (1,282 cases in 2019).",
  },
  {
    name: "Whooping Cough (Pertussis)",
    vaccine: "DTaP",
    description: "Bacterial infection causing severe coughing fits that can last months. Infants may stop breathing. Can cause brain damage and death.",
    severity: "50% of infants under 1 year with pertussis require hospitalization. About 20 US infant deaths per year, mostly under 3 months.",
    status: "Never eliminated. 15,000-30,000 US cases reported yearly. Actual cases estimated 10x higher.",
  },
  {
    name: "Polio",
    vaccine: "IPV",
    description: "Viral disease that can permanently paralyze muscles, including breathing muscles. No cure once paralysis occurs.",
    severity: "1 in 200 infections causes irreversible paralysis. 5-10% of paralyzed patients die when breathing muscles are affected.",
    status: "Near eradication globally but still endemic in some countries. Ongoing risk until fully eradicated worldwide.",
  },
  {
    name: "Diphtheria",
    vaccine: "DTaP",
    description: "Bacterial infection creating a thick coating in the throat that can block the airway. Produces a toxin that damages the heart and nervous system.",
    severity: "Kills about 1 in 10 people who get it. Before vaccination, caused ~15,000 US deaths per year.",
    status: "Rare in the US due to vaccination. Still occurs in countries with low vaccine coverage.",
  },
  {
    name: "Tetanus",
    vaccine: "DTaP",
    description: "Bacterial toxin causes severe muscle spasms and lockjaw. Bacteria enters through cuts or wounds. Not spread person-to-person.",
    severity: "Fatal in 10-20% of cases even with modern ICU care. Neonatal tetanus is nearly always fatal without treatment.",
    status: "Cannot be eliminated (bacteria lives in soil). Only vaccination provides protection.",
  },
  {
    name: "Hib Disease (Meningitis & More)",
    vaccine: "Hib",
    description: "Haemophilus influenzae type b can cause meningitis, pneumonia, epiglottitis (airway swelling), and bloodstream infections. Most dangerous for children under 5.",
    severity: "Before the vaccine: ~20,000 severe cases/year in US children under 5. ~1,000 deaths. 15-30% of survivors have permanent brain damage.",
    status: "Reduced by >99% since vaccination began. Rare in vaccinated populations.",
  },
  {
    name: "Pneumococcal Disease",
    vaccine: "PCV15/PCV20",
    description: "Streptococcus pneumoniae causes meningitis, blood infections (bacteremia), pneumonia, and ear infections. Leading cause of bacterial meningitis in young children.",
    severity: "Pneumococcal meningitis kills about 1 in 10 children and causes brain damage in many survivors.",
    status: "Dramatically reduced since PCV vaccine introduction. Still a significant cause of illness in under-vaccinated children.",
  },
  {
    name: "Rotavirus",
    vaccine: "Rotavirus (RV)",
    description: "Highly contagious virus causing severe vomiting and watery diarrhea. Leading cause of severe dehydration in infants and young children.",
    severity: "Before the vaccine: ~55,000-70,000 US hospitalizations and 20-60 deaths per year in children under 5.",
    status: "Dramatically reduced in vaccinated populations. Still common in unvaccinated children worldwide.",
  },
  {
    name: "Hepatitis B",
    vaccine: "HepB",
    description: "Virus that attacks the liver. Can cause chronic infection, liver cirrhosis, and liver cancer. Infants are at highest risk of becoming chronic carriers.",
    severity: "90% of infected infants develop chronic hepatitis B (vs. 5% of infected adults). Chronic carriers have 25% lifetime risk of liver cancer or failure.",
    status: "Still infects ~1 million people worldwide annually. Vaccination has dramatically reduced childhood infection rates.",
  },
  {
    name: "Hepatitis A",
    vaccine: "HepA",
    description: "Virus causing liver inflammation, fever, fatigue, nausea, and jaundice. Spread through contaminated food/water or close contact.",
    severity: "Usually milder in children than adults, but can cause weeks of illness. Rarely fatal but can cause liver failure in some cases.",
    status: "Outbreaks still occur in the US. Common in many developing countries.",
  },
  {
    name: "Varicella (Chickenpox)",
    vaccine: "Varicella",
    description: "Highly contagious virus causing itchy blistering rash, fever, and fatigue. Can cause serious complications including skin infections, pneumonia, and brain inflammation.",
    severity: "Before the vaccine: ~100 US deaths per year, 10,000+ hospitalizations. Newborns and immunocompromised children at highest risk.",
    status: "Reduced by >90% since vaccination. Still occurs in unvaccinated individuals.",
  },
  {
    name: "Mumps",
    vaccine: "MMR",
    description: "Viral infection causing painful swelling of salivary glands, fever, headache. Can cause meningitis, encephalitis, and deafness. In post-pubertal males, can cause orchitis (testicular inflammation).",
    severity: "1 in 10 get meningitis. Permanent deafness in 1 in 20,000. Was a leading cause of childhood deafness before vaccine.",
    status: "Outbreaks still occur in close-contact settings (colleges, camps) even with vaccination.",
  },
  {
    name: "Rubella (German Measles)",
    vaccine: "MMR",
    description: "Usually mild in children, but devastating if a pregnant woman is infected — causes Congenital Rubella Syndrome (deafness, blindness, heart defects, intellectual disability).",
    severity: "CRS causes severe birth defects in up to 85% of babies whose mothers are infected in the first trimester.",
    status: "Eliminated in the US since 2004 due to vaccination. Still occurs in countries with low vaccine coverage.",
  },
  {
    name: "Influenza (Flu)",
    vaccine: "Annual Flu Shot",
    description: "Respiratory viral infection causing fever, cough, body aches. More severe in young children. Can cause pneumonia, dehydration, and worsen chronic conditions.",
    severity: "Average 100-200 US pediatric deaths per year. More than half of children who die from flu were previously healthy.",
    status: "Circulates annually. Vaccination recommended yearly for everyone 6 months and older.",
  },
];

export default function DiseasesPage() {
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
            { label: "Diseases Prevented" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Diseases Vaccines Prevent
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Childhood vaccines protect against 14 serious diseases. Many of
            these were once common killers of children. Here is what each
            disease does and why vaccination is so important.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "WHO", "AAP"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "Childhood vaccines protect against 14 diseases that can cause hospitalization, permanent disability, or death.",
            "Before vaccines, these diseases killed tens of thousands of US children every year.",
            "These diseases are rare today BECAUSE of vaccination — if rates drop, they return (as seen in recent measles and pertussis outbreaks).",
            "Infants are at the highest risk from many of these diseases because their immune systems are immature.",
            "Vaccination is the only reliable way to protect against most of these diseases.",
          ]}
        />

        {/* Disease Cards */}
        <section className="mb-10" aria-labelledby="diseases-heading">
          <h2
            id="diseases-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            The 14 Diseases
          </h2>

          <div className="space-y-4">
            {diseases.map((disease, i) => (
              <details key={i} className="rounded-xl border border-[#E8E2D9] bg-white">
                <summary className="cursor-pointer p-5 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-foreground">{disease.name}</span>
                    <span className="text-xs text-muted ml-2">({disease.vaccine})</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-muted flex-shrink-0 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 space-y-2 border-t border-[#E8E2D9] pt-3">
                  <p className="text-sm text-muted leading-relaxed">{disease.description}</p>
                  <div className="rounded-lg bg-card-alt p-3">
                    <p className="text-xs font-bold text-foreground mb-1">Severity</p>
                    <p className="text-xs text-muted">{disease.severity}</p>
                  </div>
                  <div className="rounded-lg bg-card-alt p-3">
                    <p className="text-xs font-bold text-foreground mb-1">Current Status</p>
                    <p className="text-xs text-muted">{disease.status}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Before & After Vaccines */}
        <section className="mb-10" aria-labelledby="impact-heading">
          <h2
            id="impact-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            The Impact of Vaccines: Before and After
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E8E2D9]">
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Disease</th>
                    <th className="text-left py-2 pr-4 font-bold text-foreground">Before Vaccine (US/yr)</th>
                    <th className="text-left py-2 font-bold text-foreground">After Vaccine (US/yr)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Measles</td>
                    <td className="py-2 pr-4">~530,000 cases, 400-500 deaths</td>
                    <td className="py-2">&lt;200 cases (non-outbreak years)</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Pertussis</td>
                    <td className="py-2 pr-4">~200,000 cases, 8,000+ deaths</td>
                    <td className="py-2">~15,000-30,000 cases, ~20 deaths</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Polio</td>
                    <td className="py-2 pr-4">~21,000 paralytic cases/year</td>
                    <td className="py-2">0 (eliminated in US since 1979)</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Hib Disease</td>
                    <td className="py-2 pr-4">~20,000 cases, ~1,000 deaths</td>
                    <td className="py-2">&lt;30 cases/year</td>
                  </tr>
                  <tr className="border-b border-[#E8E2D9]">
                    <td className="py-2 pr-4 font-medium text-foreground">Diphtheria</td>
                    <td className="py-2 pr-4">~175,000 cases, ~15,000 deaths</td>
                    <td className="py-2">0-5 cases/year</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Rubella (CRS)</td>
                    <td className="py-2 pr-4">~20,000 CRS cases (1964-65 epidemic)</td>
                    <td className="py-2">0 (eliminated in US since 2004)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted italic">
              Source: CDC MMWR, Historical Vaccine-Preventable Disease Data
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
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">When each vaccine is given</p>
            </Link>
            <Link
              href="/vaccines/how-vaccines-work"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">How Vaccines Work</span>
              <p className="text-xs text-muted mt-1">How immunity is built</p>
            </Link>
            <Link
              href="/vaccines/delayed-schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Delayed Schedule Risks</span>
              <p className="text-xs text-muted mt-1">Why timing matters for protection</p>
            </Link>
            <Link
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">Testing and monitoring systems</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Childhood vaccines protect against 14 diseases that once killed or permanently disabled tens of thousands of children every year in the US alone. These diseases are not gone — they are held in check by vaccination. Every dose your baby receives is a shield against a specific, real threat."
          supportiveMessage="It can be hard to feel urgency about diseases you have never seen. That is actually a testament to how well vaccines work. You are part of the generation keeping these diseases at bay."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
