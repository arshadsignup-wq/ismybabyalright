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
  title: "Vaccine Myths vs. Facts: Evidence-Based Answers | Is My Baby Alright?",
  description:
    "Debunking common vaccine myths with peer-reviewed evidence. Vaccines and autism, too many too soon, ingredients, natural immunity, and more. Based on CDC, AAP, and WHO research.",
  alternates: {
    canonical: "/vaccines/myths",
  },
  openGraph: {
    title: "Vaccine Myths vs. Facts | Is My Baby Alright?",
    description:
      "Evidence-based answers to common vaccine myths. What the research actually shows.",
    type: "article",
  },
};

const contentJsonLd = getContentPageSchema({
  name: "Vaccine Myths vs. Facts: What the Science Actually Shows",
  description:
    "Debunking common vaccine myths with peer-reviewed evidence. Vaccines and autism, too many too soon, ingredients, natural immunity, and more.",
  path: "/vaccines/myths",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Vaccine Safety Research", url: "https://www.cdc.gov/vaccinesafety/research/index.html" },
    { name: "AAP Immunization Information", url: "https://www.aap.org/en/patient-care/immunizations/" },
    { name: "WHO Vaccine Misinformation", url: "https://www.who.int/news-room/spotlight/let-s-flatten-the-infodemic-curve" },
  ],
});

const breadcrumbJsonLd = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Vaccines", url: "/vaccines" },
  { name: "Myths vs. Facts" },
]);

const faqItems = [
  {
    question: "Where did the vaccine-autism myth come from?",
    answer:
      "It originated from a 1998 study by Andrew Wakefield published in The Lancet. The study was retracted in 2010 after investigations revealed data falsification and undisclosed financial conflicts of interest. Wakefield lost his medical license. Since then, studies involving over 1.2 million children have found no connection between vaccines and autism.",
  },
  {
    question: "Why do some parents still believe vaccines cause autism?",
    answer:
      "Autism signs often become noticeable around 12-18 months — the same age many vaccines are given. This coincidental timing creates the appearance of a connection where none exists. Additionally, misinformation spreads rapidly on social media, and celebrity endorsements gave the myth visibility that the scientific rebuttal did not receive.",
  },
  {
    question: "If vaccines are safe, why is there a vaccine injury compensation program?",
    answer:
      "The National Vaccine Injury Compensation Program (VICP) was created in 1986 to ensure rapid compensation for the extremely rare cases of genuine vaccine injury (about 1 per million doses). It was designed to prevent lawsuits from making vaccine production unprofitable, which would leave everyone unprotected. The program's existence demonstrates transparency, not that vaccines are dangerous.",
  },
];

const faqJsonLd = getFAQPageSchema(faqItems);

const myths = [
  {
    myth: "Vaccines cause autism",
    fact: "More than a dozen large studies involving over 1.2 million children have found no link between any vaccine and autism. The original 1998 study claiming a link was retracted due to fraud, and the author lost his medical license.",
    source: "Taylor et al., 2014 (meta-analysis of 1.27 million children); Madsen et al., 2002 (530,000 children); CDC ongoing research",
  },
  {
    myth: "Too many vaccines overwhelm the immune system",
    fact: "A baby's immune system responds to thousands of antigens every single day. The entire childhood vaccine schedule contains fewer than 200 antigens — less than what your baby encounters touching a toy or eating food. Studies show no increased risk of infections or immune problems in vaccinated children.",
    source: "Offit et al., 2002; CDC; AAP; Pediatrics journal research",
  },
  {
    myth: "Vaccines contain dangerous chemicals like mercury and formaldehyde",
    fact: "Thimerosal (an ethylmercury compound) was removed from childhood vaccines in 2001 as a precaution. It was never harmful at vaccine doses. Formaldehyde is present in trace amounts (0.02 mg) — your baby's body naturally contains about 50,000 mg at any given time. The dose makes the poison.",
    source: "FDA; CDC Vaccine Safety; EPA mercury research",
  },
  {
    myth: "Natural immunity is better than vaccine immunity",
    fact: "Natural immunity requires actually getting sick — which for diseases like measles, pertussis, or meningitis can mean hospitalization, permanent brain damage, deafness, or death. Vaccines provide immunity without these risks. For some diseases, vaccine immunity is actually more reliable than natural immunity.",
    source: "CDC; WHO; AAP clinical guidelines",
  },
  {
    myth: "Vaccines are just a money grab for pharmaceutical companies",
    fact: "Vaccines are among the least profitable pharmaceutical products. The entire global vaccine market is worth less than a single blockbuster drug. Many companies have exited vaccine production because of low margins. Vaccines save society an estimated $21 in healthcare costs for every $1 spent.",
    source: "WHO Economic Analysis; CDC cost-benefit studies",
  },
  {
    myth: "We don't need vaccines because these diseases are gone",
    fact: "These diseases are not gone — they are held in check by vaccination. When vaccination rates drop, outbreaks return. The 2019 US measles outbreak (1,282 cases) occurred in under-vaccinated communities. Polio still exists in some countries and is one plane flight away.",
    source: "CDC Morbidity and Mortality Weekly Report; WHO Global Surveillance",
  },
  {
    myth: "The flu vaccine gives you the flu",
    fact: "The injectable flu vaccine contains inactivated (killed) virus — it cannot give you the flu. Some people experience mild side effects (low fever, aches) for 1-2 days, which is an immune response, not the flu. The nasal spray uses a weakened virus that cannot cause true influenza.",
    source: "CDC Influenza Division; AAP recommendations",
  },
  {
    myth: "Vaccines contain fetal tissue",
    fact: "No vaccine contains fetal tissue. Some vaccines (varicella, rubella, hepatitis A) are grown using cell lines derived from two elective abortions performed in the 1960s. The final vaccine products do not contain cells — only the virus grown in them. Major religious authorities, including the Vatican, have stated that using these vaccines is morally acceptable.",
    source: "Children's Hospital of Philadelphia; Pontifical Academy for Life (2017)",
  },
];

export default function VaccineMythsPage() {
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
            { label: "Myths vs. Facts" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Vaccine Myths vs. Facts
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            There is a lot of misinformation about vaccines. Here is what
            peer-reviewed research and major medical organizations actually say
            — clearly, directly, and with sources.
          </p>
          <div className="mt-3">
            <MedicalReviewAttribution
              sources={["CDC", "AAP", "WHO", "FDA"]}
              reviewDate="July 2026"
            />
          </div>
          <div className="mt-1">
            <LastReviewed date="2026-07-01" />
          </div>
        </header>

        <KeyTakeaways
          takeaways={[
            "The vaccine-autism myth originated from a fraudulent study that was retracted. Studies of over 1.2 million children found no link.",
            "The childhood vaccine schedule contains fewer antigens than a baby encounters in a single day of normal life.",
            "Thimerosal was removed from childhood vaccines in 2001. The trace formaldehyde in vaccines is far less than what the body produces naturally.",
            "Diseases like measles and whooping cough return quickly when vaccination rates drop — as recent outbreaks have proven.",
            "Every major medical and scientific organization worldwide recommends childhood vaccination.",
          ]}
        />

        {/* Myths Section */}
        <section className="mb-10" aria-labelledby="myths-heading">
          <h2
            id="myths-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            Common Myths — and What the Evidence Shows
          </h2>

          <div className="space-y-4">
            {myths.map((item, i) => (
              <div key={i} className="rounded-xl border border-[#E8E2D9] bg-white p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                    X
                  </span>
                  <p className="text-sm font-bold text-foreground">
                    Myth: &ldquo;{item.myth}&rdquo;
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    &#10003;
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-foreground">Fact:</strong> {item.fact}
                  </p>
                </div>
                <p className="text-xs text-muted italic pl-9">
                  Source: {item.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How Misinformation Spreads */}
        <section className="mb-10" aria-labelledby="misinfo-heading">
          <h2
            id="misinfo-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            How Vaccine Misinformation Spreads
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              Understanding why misinformation is convincing can help you
              evaluate claims critically:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Coincidental timing:</strong> Autism signs appear around 12-18 months — when many vaccines are given. Correlation is not causation.</li>
              <li><strong>Anecdotes over data:</strong> A single dramatic story feels more convincing than a study of millions, even though the study is more reliable.</li>
              <li><strong>Social media amplification:</strong> Emotional content spreads faster than factual corrections. Anti-vaccine content is highly shareable.</li>
              <li><strong>Distrust of institutions:</strong> General distrust of pharmaceutical companies can extend unfairly to the independent scientists and public health agencies that evaluate vaccines.</li>
              <li><strong>Cherry-picking VAERS:</strong> VAERS reports are misrepresented as proof of causation. In reality, anyone can report anything to VAERS — reports are signals for investigation, not evidence of harm.</li>
            </ul>
          </div>
        </section>

        {/* How to Evaluate Sources */}
        <section className="mb-10" aria-labelledby="sources-heading">
          <h2
            id="sources-heading"
            className="text-xl sm:text-2xl font-extrabold text-foreground mb-4"
          >
            How to Evaluate Vaccine Information
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 space-y-3">
            <p className="text-sm text-muted leading-relaxed">
              When you encounter vaccine claims, ask:
            </p>
            <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-2">
              <li>Is this from a peer-reviewed journal or a reputable medical organization?</li>
              <li>Does the author have relevant medical or scientific credentials?</li>
              <li>Are they trying to sell something (supplements, books, "alternative" treatments)?</li>
              <li>Does the claim contradict the consensus of every major medical organization?</li>
              <li>Is it a single study or anecdote, or consistent with the body of research?</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-3">
              <strong>Reliable sources:</strong> CDC, AAP, WHO, FDA, Children&apos;s Hospital of
              Philadelphia (CHOP) Vaccine Education Center, your pediatrician.
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
              href="/vaccines/safety"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">Vaccine Safety</span>
              <p className="text-xs text-muted mt-1">Testing, ingredients, monitoring</p>
            </Link>
            <Link
              href="/vaccines/how-vaccines-work"
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors no-underline"
            >
              <span className="text-sm font-bold text-foreground">How Vaccines Work</span>
              <p className="text-xs text-muted mt-1">Training the immune system</p>
            </Link>
          </div>
        </section>

        <FAQSection items={faqItems} />

        <BottomLine
          summary="Every common vaccine myth has been thoroughly investigated and debunked by rigorous scientific research. The evidence is overwhelming: vaccines are safe, effective, and one of the most important medical advances in human history. Over 1.2 million children have been studied for the autism claim alone — no link exists."
          supportiveMessage="It is okay to have had doubts. What matters is that you are seeking evidence-based information. Talk to your pediatrician about any remaining concerns."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </>
  );
}
