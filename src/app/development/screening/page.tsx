import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from "@/components/shared/BottomLine";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Developmental Screening: ASQ, M-CHAT & More",
  description:
    "Guide to developmental screening tools: ASQ-3, M-CHAT-R/F, PEDS, and more. When screening happens, what results mean, and next steps. Based on AAP recommendations.",
  alternates: {
    canonical: "/development/screening",
  },
  openGraph: {
    title: "Developmental Screening Tools Explained | ASQ-3, M-CHAT",
    description:
      "Understanding developmental screening: when it happens, what tools are used, what results mean, and next steps for parents.",
  },
};

const faqItems = [
  {
    question: "What is the ASQ-3 screening tool?",
    answer:
      "The ASQ-3 (Ages and Stages Questionnaire, Third Edition) is a parent-completed screening tool used at well-child visits. It covers five developmental domains: communication, gross motor, fine motor, problem-solving, and personal-social. Parents answer 30 questions about what their child can or cannot do. Scoring takes about 2-3 minutes and identifies children who may need further evaluation. It is validated for children 1-66 months.",
  },
  {
    question: "What is the M-CHAT and when is it used?",
    answer:
      "The M-CHAT-R/F (Modified Checklist for Autism in Toddlers, Revised with Follow-Up) is a 20-question screening tool specifically for autism risk. The AAP recommends it at 18 and 24 months. Parents answer yes/no questions about their child's behavior. A positive screen does not mean a child has autism -- it means further evaluation is recommended. The M-CHAT has a follow-up interview to reduce false positives.",
  },
  {
    question: "Can screening be wrong? What about false positives?",
    answer:
      "Yes, screening tools can produce false positives (flagging a child who is developing typically) and false negatives (missing a child who has a delay). No screening tool is perfect. The ASQ-3 has sensitivity of 86% and specificity of 85%. This is why a positive screen leads to evaluation, not diagnosis. If your child screens positive but you feel they are developing well, the evaluation will confirm this. If negative but you have concerns, you can still request evaluation.",
  },
  {
    question: "What happens after a positive screening result?",
    answer:
      "A positive screen means further evaluation is recommended -- it is NOT a diagnosis. Next steps typically include: referral for a comprehensive developmental evaluation, referral to Early Intervention (for children under 3), possible referral to specialists (developmental pediatrician, speech-language pathologist, etc.), and continued monitoring. Your pediatrician will guide you through the process.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Developmental Screening: ASQ, M-CHAT & More",
  description:
    "Guide to developmental screening tools, when screening happens, what results mean, and next steps for parents.",
  path: "/development/screening",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "AAP Developmental Screening Policy", url: "https://publications.aap.org/pediatrics/article/145/1/e20193449/36971" },
    { name: "CDC Developmental Screening", url: "https://www.cdc.gov/ncbddd/childdevelopment/screening.html" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Screening" },
]);

export default function ScreeningPage() {
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
          { label: "Screening" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Developmental Screening
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["AAP", "CDC"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "The AAP recommends standardized developmental screening at 9, 18, and 30 months -- plus autism screening at 18 and 24 months.",
              "Screening is a brief check, not a diagnosis. A positive result means further evaluation is needed.",
              "The ASQ-3 is the most widely used general developmental screening tool. The M-CHAT-R/F screens specifically for autism.",
              "You can request screening at any time if you have concerns -- do not wait for the scheduled ages.",
              "A negative screen does not rule out a delay. If you have ongoing concerns, request evaluation regardless of screening results.",
            ]}
          />
        </div>

        {/* What Is Developmental Screening */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Is Developmental Screening?</h2>
          <p>
            Developmental screening is a brief, standardized assessment that identifies children who may
            be at risk for developmental delays or disabilities. It is not a diagnosis -- it is a
            first step that determines whether a child needs a more comprehensive evaluation.
          </p>
          <p>
            Screening is important because many developmental concerns are not obvious during a routine
            office visit. Research shows that parental concerns alone and clinical observation identify
            fewer than 30% of children with delays. Standardized screening tools identify significantly
            more -- approximately 70-80% of children who need support.
          </p>
        </section>

        {/* When Screening Happens */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">AAP Recommended Screening Schedule</h2>
          <p>The American Academy of Pediatrics recommends:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>9 months:</strong> General developmental screening (ASQ-3 or equivalent)</li>
            <li><strong>18 months:</strong> General developmental screening + autism-specific screening (M-CHAT-R/F)</li>
            <li><strong>24 months:</strong> Autism-specific screening (M-CHAT-R/F)</li>
            <li><strong>30 months:</strong> General developmental screening (ASQ-3 or equivalent)</li>
            <li><strong>Any time a parent has concerns:</strong> Screening should be done whenever a parent or provider expresses concern</li>
          </ul>
          <p>
            Additionally, developmental surveillance (informal monitoring through questions and observation)
            should occur at every well-child visit from birth through age 3.
          </p>
        </section>

        {/* ASQ-3 */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">ASQ-3 (Ages and Stages Questionnaire)</h2>
          <p>
            The ASQ-3 is the most widely used developmental screening tool in the United States. Key features:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Format:</strong> Parent-completed questionnaire (30 questions)</li>
            <li><strong>Age range:</strong> 1-66 months (21 age-specific forms)</li>
            <li><strong>Domains assessed:</strong> Communication, gross motor, fine motor, problem-solving, personal-social</li>
            <li><strong>Time to complete:</strong> 10-15 minutes for parents; 2-3 minutes to score</li>
            <li><strong>Accuracy:</strong> Sensitivity 86%, specificity 85%</li>
            <li><strong>Languages:</strong> Available in English, Spanish, French, and other languages</li>
          </ul>
          <p>
            Results are categorized as: typical development (no concerns), monitoring zone (borderline -- rescreen in 1-2 months), or referral zone (evaluation recommended).
          </p>
        </section>

        {/* M-CHAT */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">M-CHAT-R/F (Autism Screening)</h2>
          <p>
            The M-CHAT-R/F is the standard autism screening tool recommended by the AAP at 18 and 24 months:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Format:</strong> 20 yes/no questions completed by parents</li>
            <li><strong>Age range:</strong> 16-30 months</li>
            <li><strong>What it screens for:</strong> Early signs of autism spectrum disorder (ASD)</li>
            <li><strong>Follow-up:</strong> If initial screen is positive, a structured follow-up interview reduces false positives</li>
            <li><strong>Time to complete:</strong> 5 minutes for initial screen</li>
            <li><strong>Important:</strong> A positive M-CHAT does NOT mean your child has autism -- it means further evaluation is recommended</li>
          </ul>
          <p>
            Key behaviors the M-CHAT assesses include: response to name, pointing to show interest, following
            a point, pretend play, interest in other children, and social engagement.
          </p>
        </section>

        {/* Other Screening Tools */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Other Screening Tools</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PEDS (Parents&apos; Evaluation of Developmental Status):</strong> 10 open-ended questions about parent concerns. Quick but less specific than ASQ-3.</li>
            <li><strong>ASQ:SE-2 (Social-Emotional):</strong> Companion to ASQ-3 that specifically screens social-emotional development and behavioral concerns.</li>
            <li><strong>MCHAT-R (without follow-up):</strong> The initial 20 questions without the structured follow-up. Higher sensitivity but more false positives.</li>
            <li><strong>SWYC (Survey of Wellbeing of Young Children):</strong> Free tool that combines developmental, behavioral, and family risk screening.</li>
            <li><strong>Edinburgh Postnatal Depression Scale:</strong> Not a child screening tool, but maternal mental health screening is recommended at well-child visits because parental depression affects child development.</li>
          </ul>
        </section>

        {/* Understanding Results */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Understanding Screening Results</h2>
          <p>Screening results are not a diagnosis. They indicate the level of next steps needed:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Negative screen (typical range):</strong> No concerns identified. Continue routine monitoring at well-child visits. Note: A negative screen does not guarantee no delay -- if you have ongoing concerns, trust your instincts and request further evaluation.
            </li>
            <li>
              <strong>Monitoring zone (borderline):</strong> Scores are close to the cutoff. May recommend rescreening in 1-2 months, providing activities to support development, and monitoring closely.
            </li>
            <li>
              <strong>Positive screen (referral recommended):</strong> Scores indicate a comprehensive evaluation is needed. This is NOT a diagnosis. Many children who screen positive develop typically. The evaluation will clarify whether support is needed.
            </li>
          </ul>
        </section>

        {/* What To Do */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Next Steps After Screening</h2>
          <p>If screening indicates concerns:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Ask your pediatrician to explain the results and what they mean for your specific child</li>
            <li>Accept referrals for comprehensive evaluation (this is information-gathering, not a commitment to anything)</li>
            <li>Contact your state&apos;s Early Intervention program (free evaluation for children under 3)</li>
            <li>Continue supporting your child&apos;s development with activities and responsive interaction</li>
            <li>Keep notes about your observations to share at the evaluation appointment</li>
          </ol>
          <p>
            Remember: seeking evaluation is always the right choice. If your child is developing typically,
            the evaluation will confirm that. If they need support, you will have access to services that
            can make a meaningful difference.
          </p>
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
                href="https://publications.aap.org/pediatrics/article/145/1/e20193449/36971"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Promoting Optimal Development: Screening for Behavioral and Emotional Problems (2020)
              </a>
            </li>
            <li>
              <a
                href="https://www.cdc.gov/ncbddd/childdevelopment/screening.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Developmental Screening
              </a>
            </li>
            <li>
              <a
                href="https://mchatscreen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                M-CHAT Official Website
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. If you have concerns about your child&apos;s
            development, talk to your pediatrician about screening.
          </p>
        </div>

        <BottomLine
          summary="Developmental screening is a brief, evidence-based tool that helps identify children who may benefit from further evaluation and support. The AAP recommends screening at 9, 18, and 30 months (plus autism screening at 18 and 24 months). A positive screen is not a diagnosis -- it is a signal to gather more information. If you have concerns at any age, you can request screening from your pediatrician or contact Early Intervention directly."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
