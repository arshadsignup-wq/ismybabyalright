import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Understanding Developmental Delays",
  description:
    "What are developmental delays? Causes, types, how they are identified, what evaluation involves, and what to expect. Evidence-based guide for parents based on CDC and AAP guidelines.",
  alternates: {
    canonical: "/development/delays",
  },
  openGraph: {
    title: "Understanding Developmental Delays | Parent Guide",
    description:
      "Learn what developmental delays are, how they differ from disabilities, what causes them, and what steps to take. Based on CDC and AAP guidelines.",
  },
};

const faqItems = [
  {
    question: "What is the difference between a developmental delay and a disability?",
    answer:
      "A developmental delay means a child has not reached milestones in the expected timeframe but may catch up with support. A developmental disability (like autism, Down syndrome, or cerebral palsy) is a lifelong condition that affects development. Some delays resolve with early intervention; others are early signs of a disability. The distinction is not always clear early on, which is why evaluation and intervention are important regardless.",
  },
  {
    question: "What causes developmental delays?",
    answer:
      "Causes include genetic conditions (Down syndrome, Fragile X), prenatal factors (exposure to alcohol/drugs, infections, premature birth), birth complications (oxygen deprivation), medical conditions (chronic ear infections, lead exposure, nutritional deficiencies), and environmental factors (lack of stimulation, neglect). In many cases, no specific cause is identified. Having a cause does not change the approach -- early intervention helps regardless.",
  },
  {
    question: "Will my child grow out of a developmental delay?",
    answer:
      "Some children do catch up, particularly with early intervention support. However, taking a 'wait and see' approach is not recommended. Research consistently shows that earlier intervention produces better outcomes. If your child has a delay, getting support now -- regardless of whether it resolves on its own -- gives them the best chance for optimal development.",
  },
  {
    question: "How is a developmental delay diagnosed?",
    answer:
      "Diagnosis involves standardized developmental screening (like the ASQ-3), followed by a comprehensive evaluation if screening indicates concerns. Evaluation typically includes developmental testing, observation of the child, parent interviews, and may involve specialists (developmental pediatrician, psychologist, speech-language pathologist, or other therapists). The process identifies specific areas of delay and their severity.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Understanding Developmental Delays",
  description:
    "What are developmental delays, how they are identified, causes, and what to expect from evaluation. Evidence-based guide for parents.",
  path: "/development/delays",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "AAP Developmental Screening Policy", url: "https://publications.aap.org/pediatrics/article/145/1/e20193449/36971" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Delays" },
]);

export default function DelaysPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Development", href: "/development" },
          { label: "Understanding Delays" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Understanding Developmental Delays
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "A developmental delay means a child has not met milestones in the expected timeframe -- it is not a diagnosis of a permanent condition.",
              "About 1 in 6 children (17%) have a developmental disability or delay, according to the CDC.",
              "Early intervention is effective regardless of the cause -- do not wait to seek evaluation if you have concerns.",
              "A 'wait and see' approach is NOT recommended. Research consistently shows earlier intervention leads to better outcomes.",
              "You can request a free evaluation through your state's Early Intervention program without a doctor's referral.",
            ]}
          />
        </div>

        {/* What Is a Developmental Delay */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Is a Developmental Delay?</h2>
          <p>
            A developmental delay occurs when a child does not reach developmental milestones in the
            expected timeframe. This can affect one area (isolated delay) or multiple areas (global
            developmental delay). A delay is different from a developmental disability -- delays may
            resolve with intervention, while disabilities are lifelong conditions.
          </p>
          <p>
            According to the CDC, approximately 1 in 6 children (17%) in the United States have one or
            more developmental disabilities or delays. However, fewer than half of these children are
            identified before starting school, which means they miss the window for early intervention
            when the brain is most responsive to support.
          </p>
        </section>

        {/* Types of Delays */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Types of Developmental Delays</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Gross motor delay:</strong> Difficulty with large body movements (rolling, sitting, walking). May indicate muscle tone issues, neurological conditions, or simply being at the later end of normal range.</li>
            <li><strong>Fine motor delay:</strong> Difficulty with hand skills (grasping, manipulating objects, self-feeding). May affect daily living skills and later academic tasks.</li>
            <li><strong>Speech-language delay:</strong> Difficulty understanding or producing language. The most common type of developmental delay. May be expressive (speaking), receptive (understanding), or both.</li>
            <li><strong>Cognitive delay:</strong> Difficulty with thinking, learning, problem-solving. May affect academic readiness and adaptive skills.</li>
            <li><strong>Social-emotional delay:</strong> Difficulty with relationships, emotional regulation, or social interaction. May overlap with autism spectrum disorder.</li>
            <li><strong>Global developmental delay:</strong> Significant delays in two or more developmental domains. Affects approximately 1-3% of children under 5.</li>
          </ul>
        </section>

        {/* Causes */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Causes Developmental Delays?</h2>
          <p>
            Developmental delays have many possible causes, and in some cases no specific cause is identified.
            Known risk factors include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Genetic conditions:</strong> Down syndrome, Fragile X syndrome, other chromosomal differences</li>
            <li><strong>Prenatal factors:</strong> Exposure to alcohol, drugs, or infections during pregnancy; poor prenatal nutrition</li>
            <li><strong>Prematurity and low birth weight:</strong> Born before 37 weeks or under 5.5 pounds</li>
            <li><strong>Birth complications:</strong> Oxygen deprivation, birth trauma</li>
            <li><strong>Medical conditions:</strong> Chronic ear infections (affecting hearing/speech), seizure disorders, metabolic disorders</li>
            <li><strong>Environmental factors:</strong> Lead exposure, malnutrition, lack of stimulation, trauma or neglect</li>
            <li><strong>Unknown:</strong> In many cases, no specific cause is identified</li>
          </ul>
          <p>
            Important: Identifying a cause does not change the need for intervention. Regardless of why
            a delay exists, early support helps children make progress.
          </p>
        </section>

        {/* How Delays Are Identified */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">How Delays Are Identified</h2>
          <p>The process typically involves three steps:</p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Developmental surveillance:</strong> Ongoing monitoring by your pediatrician at every well-child visit. Includes asking about milestones, observing the child, and listening to parent concerns.
            </li>
            <li>
              <strong>Developmental screening:</strong> Standardized questionnaires (like ASQ-3 or M-CHAT) at recommended ages (9, 18, and 30 months). These are brief tools that identify children who need further evaluation.
            </li>
            <li>
              <strong>Comprehensive evaluation:</strong> Detailed assessment by specialists if screening indicates concerns. May include developmental testing, observation, parent interviews, and domain-specific assessments (speech, motor, cognitive).
            </li>
          </ol>
          <p>
            You do not need to wait for your pediatrician to initiate this process. If you have concerns,
            you can request screening at any time or contact your state&apos;s{" "}
            <Link href="/development/early-intervention" className="text-primary underline">
              Early Intervention program
            </Link>{" "}
            directly for a free evaluation.
          </p>
        </section>

        {/* What Evaluation Involves */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What to Expect from an Evaluation</h2>
          <p>A developmental evaluation typically includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Parent interview about developmental history, concerns, and home environment</li>
            <li>Observation of the child in play and interaction</li>
            <li>Standardized developmental testing (age-appropriate tasks and activities)</li>
            <li>Assessment of specific domains (speech, motor, cognitive, adaptive skills)</li>
            <li>Hearing and vision screening if not recently completed</li>
            <li>Medical history review and possible referral for additional testing</li>
          </ul>
          <p>
            The evaluation results in a report that identifies areas of delay, their severity (mild,
            moderate, severe), and recommendations for services. For Early Intervention, eligibility
            is typically a 25-33% delay in one or more areas (varies by state).
          </p>
        </section>

        {/* What To Do If You Suspect a Delay */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What to Do If You Suspect a Delay</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Trust your instincts.</strong> You know your child better than anyone. If something feels off, it is worth investigating.</li>
            <li><strong>Talk to your pediatrician.</strong> Share specific observations about what your child is and is not doing compared to milestones.</li>
            <li><strong>Request formal screening.</strong> Ask for a standardized screening tool (ASQ-3) if one has not been done recently.</li>
            <li><strong>Contact Early Intervention.</strong> For children under 3, you can self-refer to your state&apos;s EI program for a free evaluation. No doctor referral needed.</li>
            <li><strong>Do not wait.</strong> A &quot;wait and see&quot; approach delays intervention during the most critical period of brain development.</li>
          </ol>
        </section>

        {/* FAQ Section */}
        <div className="mt-8">
          <FAQSection items={faqItems} />
        </div>

        {/* Sources */}
        <div className="mt-10 text-xs text-muted">
          <p className="font-semibold mb-1">Sources</p>
          <ul className="space-y-0.5">
            <li>
              <a
                href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Learn the Signs. Act Early.
              </a>
            </li>
            <li>
              <a
                href="https://publications.aap.org/pediatrics/article/145/1/e20193449/36971"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Promoting Optimal Development: Identifying Infants and Young Children with Developmental Disorders
              </a>
            </li>
            <li>
              <a
                href="https://www.cdc.gov/ncbddd/developmentaldisabilities/about.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Developmental Disabilities
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. If you have concerns about your child&apos;s
            development, talk to your pediatrician or contact your state&apos;s Early Intervention program.
          </p>
        </div>

        <BottomLine
          summary="Developmental delays are common -- affecting about 1 in 6 children -- and early identification leads to significantly better outcomes. If you have concerns about your child's development, do not wait. Contact your pediatrician or your state's Early Intervention program for a free evaluation. Early support helps children make progress regardless of the underlying cause."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
