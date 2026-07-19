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
  title: "Common Vaccine Questions Answered | Is My Baby Alright?",
  description:
    "Evidence-based answers to the most common vaccine questions parents ask: safety, timing, side effects, ingredients, and more. Based on CDC, AAP, and WHO guidelines.",
  alternates: {
    canonical: "/vaccines/questions",
  },
  openGraph: {
    title: "Common Vaccine Questions | Is My Baby Alright?",
    description:
      "Straightforward, evidence-based answers to the vaccine questions every parent has.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Common Vaccine Questions Parents Ask",
  description:
    "Evidence-based answers to the most common vaccine questions parents have about safety, timing, side effects, and more.",
  path: "/vaccines/questions",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Vaccines & Immunizations", url: "https://www.cdc.gov/vaccines/" },
    { name: "AAP Immunization Resources", url: "https://www.aap.org/en/patient-care/immunizations/" },
    { name: "WHO Vaccines and Immunization", url: "https://www.who.int/health-topics/vaccines-and-immunization" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Common Questions" },
]);

const faqItems = [
  {
    question: "Are vaccines safe for my baby?",
    answer:
      "Yes. Vaccines are among the most rigorously tested medical products in the world. They undergo 10-15 years of development and testing before approval. After approval, multiple surveillance systems continuously monitor safety. The CDC, AAP, WHO, and every major medical organization worldwide recommend childhood vaccination.",
  },
  {
    question: "Can vaccines cause autism?",
    answer:
      "No. This claim originated from a single 1998 study that was retracted due to fraud. Since then, more than a dozen large studies involving millions of children have found no link between vaccines (including MMR) and autism. The original author lost his medical license for ethical violations and data falsification.",
  },
  {
    question: "Are too many vaccines given too soon?",
    answer:
      "No. A baby's immune system handles thousands of antigens every day from food, air, and normal bacteria on their skin. The entire childhood vaccine schedule contains fewer than 200 antigens total. Studies confirm that multiple vaccines given at the same visit do not overwhelm the immune system.",
  },
  {
    question: "Why can't I just space out the vaccines?",
    answer:
      "Delaying vaccines leaves your baby unprotected during the period when they are most vulnerable to serious diseases. The CDC schedule is specifically timed to provide protection as early as safely possible. There is no scientific evidence that spacing out vaccines is safer, and it results in more office visits and more total shots.",
  },
  {
    question: "Do vaccines contain harmful chemicals?",
    answer:
      "No. Every ingredient in a vaccine serves a specific purpose and has been studied for safety at the amounts used. For example, the tiny amount of formaldehyde in some vaccines (0.02 mg) is far less than what the body naturally produces (about 50,000 mg at any given time). Thimerosal was removed from childhood vaccines in 2001 as a precautionary measure.",
  },
  {
    question: "If other kids are vaccinated, why does mine need to be?",
    answer:
      "Herd immunity only works when vaccination rates are high (usually 85-95% depending on the disease). Not everyone can be vaccinated — newborns too young for certain vaccines, children with immune disorders, and those with genuine medical contraindications rely on community immunity. Additionally, your unvaccinated child is personally at risk if exposed.",
  },
  {
    question: "What if my baby is sick on vaccination day?",
    answer:
      "Mild illness (runny nose, low-grade fever, ear infection, mild diarrhea) is NOT a reason to delay vaccines. The immune system can handle both a mild illness and a vaccine simultaneously. However, moderate to severe illness (high fever, significant infection requiring antibiotics) may warrant a brief delay — ask your pediatrician.",
  },
  {
    question: "Can my baby get the disease from the vaccine?",
    answer:
      "Most childhood vaccines use killed (inactivated) viruses or just pieces of the virus, so they cannot cause the disease. Live vaccines (MMR, varicella, rotavirus) use weakened viruses that can cause very mild symptoms (like a few chickenpox spots) but not the full disease. These mild symptoms are not dangerous.",
  },
  {
    question: "Are natural immunity and vaccine immunity the same?",
    answer:
      "Natural immunity does develop after surviving a disease, but the cost is actually getting sick — which for diseases like measles, pertussis, or meningitis can mean hospitalization, permanent disability, or death. Vaccines provide immunity without the dangerous consequences of the actual disease.",
  },
  {
    question: "What if I'm still not sure about vaccines?",
    answer:
      "Talk to your pediatrician. A good doctor will listen to your concerns without judgment and address them with evidence. You can also review information from the CDC, AAP, and WHO. Avoid social media groups and unverified websites — peer-reviewed research and official guidelines are the most reliable sources.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

export default function VaccineQuestionsPage() {
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
            { label: "Common Questions" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Common Vaccine Questions Parents Ask
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Wondering about vaccine safety, timing, or ingredients? You are not
            alone. Here are straightforward, evidence-based answers to the
            questions parents ask most.
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
            "Vaccines are among the most rigorously studied medical interventions in history.",
            "The autism-vaccine claim has been thoroughly disproven by studies involving millions of children.",
            "The entire childhood vaccine schedule contains fewer antigens than a baby encounters in a single day of normal life.",
            "Delaying vaccines does not make them safer — it leaves your baby unprotected longer.",
            "Your pediatrician is the best source for personalized vaccine guidance.",
          ]}
        />

        {/* Topic Navigation */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-foreground mb-4">
            Explore Vaccine Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">How vaccines are tested, ingredients, monitoring systems</p>
            </Link>
            <Link
              href="/vaccines/myths"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Myths vs. Facts</span>
              <p className="text-xs text-muted mt-1">Debunking common misconceptions with evidence</p>
            </Link>
            <Link
              href="/vaccines/side-effects"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Side Effects</span>
              <p className="text-xs text-muted mt-1">Normal reactions vs. when to worry</p>
            </Link>
            <Link
              href="/vaccines/how-vaccines-work"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">How Vaccines Work</span>
              <p className="text-xs text-muted mt-1">How vaccines train the immune system</p>
            </Link>
            <Link
              href="/vaccines/schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">CDC Schedule</span>
              <p className="text-xs text-muted mt-1">Recommended immunization timeline</p>
            </Link>
            <Link
              href="/vaccines/delayed-schedule"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Delayed Schedule Risks</span>
              <p className="text-xs text-muted mt-1">Why spacing out vaccines is not recommended</p>
            </Link>
            <Link
              href="/vaccines/after-vaccination"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">After Vaccination</span>
              <p className="text-xs text-muted mt-1">What to expect and comfort measures</p>
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

        {/* FAQ */}
        <FAQSection items={faqItems} heading="All Common Questions" />

        <BottomLine
          summary="Having questions about vaccines is normal and shows you are a thoughtful parent. The scientific consensus is clear: vaccines are safe, effective, and among the most important things you can do to protect your child's health. Your pediatrician can address your specific concerns."
          supportiveMessage="There is a lot of conflicting information out there. Trusting peer-reviewed science and your pediatrician — not social media — is the best way to make informed decisions for your baby."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
