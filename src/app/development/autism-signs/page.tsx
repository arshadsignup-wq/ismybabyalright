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
  title: "Early Signs of Autism by Age",
  description:
    "Age-by-age guide to early signs of autism in babies and toddlers. What to watch for at 6, 9, 12, 18, and 24 months. Screening tools, next steps, and when to seek evaluation. Based on AAP and CDC guidelines.",
  alternates: {
    canonical: "/development/autism-signs",
  },
  openGraph: {
    title: "Early Signs of Autism by Age | What Parents Should Know",
    description:
      "Recognize early signs of autism in babies and toddlers. Age-specific signs, screening tools, and next steps for parents.",
  },
};

const faqItems = [
  {
    question: "What is the earliest age autism can be detected?",
    answer:
      "Research shows reliable signs can emerge as early as 6-12 months, though most children are not diagnosed until age 2-4. Some studies have identified differences in brain development and visual attention as early as 6 months in babies later diagnosed with autism. The AAP recommends autism screening at 18 and 24 months. A reliable diagnosis can often be made by an experienced clinician by age 2.",
  },
  {
    question: "Does lack of eye contact always mean autism?",
    answer:
      "No. While reduced eye contact is one possible sign of autism, it is not diagnostic on its own. Many babies occasionally avoid eye contact, especially when tired, overstimulated, or distracted. What matters more is the overall pattern: does your child use eye contact as part of communication? Do they look at you to share enjoyment? Context matters more than any single behavior.",
  },
  {
    question: "Can a child have autism and still be affectionate?",
    answer:
      "Yes. Many autistic children are deeply affectionate with their caregivers. Autism is a spectrum -- it presents differently in every child. Some autistic children seek out physical affection, enjoy cuddles, and show strong attachment to family. The key differences tend to be in social communication: how they share interests, respond to social cues, and interact with peers.",
  },
  {
    question: "My child was developing normally and then regressed. What does that mean?",
    answer:
      "Developmental regression -- loss of previously acquired skills (words, social engagement, play skills) -- occurs in approximately 25-30% of children later diagnosed with autism, typically between 15-24 months. This is called 'regressive autism.' Any loss of skills at any age warrants immediate evaluation. Contact your pediatrician right away and request referral for a comprehensive developmental evaluation.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Early Signs of Autism by Age",
  description:
    "Age-by-age guide to early signs of autism in babies and toddlers. Screening tools and next steps for parents.",
  path: "/development/autism-signs",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "AAP Autism Screening Guidelines", url: "https://publications.aap.org/pediatrics/article/145/1/e20193447/36255" },
    { name: "CDC Autism Information", url: "https://www.cdc.gov/ncbddd/autism/signs.html" },
    { name: "M-CHAT Screening Tool", url: "https://mchatscreen.com/" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Early Signs of Autism" },
]);

export default function AutismSignsPage() {
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
          { label: "Early Signs of Autism" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Early Signs of Autism by Age
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["AAP", "CDC"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Autism can be reliably identified as early as age 2, though signs may emerge by 6-12 months.",
              "No single behavior means a child has autism -- it is the pattern of social communication differences that matters.",
              "The AAP recommends autism-specific screening (M-CHAT) at 18 and 24 months for ALL children.",
              "Early intervention for autism (before age 3) leads to significantly better outcomes in language, social skills, and adaptive behavior.",
              "Autism is a spectrum -- it looks different in every child. Girls and children of color are often identified later due to different presentations and systemic biases.",
            ]}
          />
        </div>

        {/* Understanding Autism */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Understanding Autism Spectrum Disorder</h2>
          <p>
            Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by differences
            in social communication and the presence of restricted or repetitive behaviors or interests.
            It is called a &quot;spectrum&quot; because it presents with widely varying levels of support needs.
          </p>
          <p>
            Autism affects approximately 1 in 36 children in the United States (CDC, 2023). It is
            diagnosed 4 times more often in boys than girls, though this gap is narrowing as recognition
            of autism in girls improves.
          </p>
          <p>
            Early identification matters because the brain is most responsive to intervention in the
            first years of life. Children who receive autism-specific intervention before age 3 show
            significantly better outcomes in language, social skills, and adaptive behavior compared
            to those who start later.
          </p>
        </section>

        {/* 6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">By 6 Months</h2>
          <p>At this age, possible early signs are subtle and not diagnostic on their own:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Limited or no social smiling (specifically smiling directed at people)</li>
            <li>Reduced eye contact during interactions</li>
            <li>Limited facial expressions or emotional responses</li>
            <li>Does not seem interested in looking at faces</li>
            <li>Seems unusually quiet or does not babble/coo</li>
          </ul>
          <p>
            <strong>Important:</strong> These signs at 6 months are not diagnostic. Many babies who show
            these early differences develop typically. They are noted here because research has identified
            them retrospectively in studies of babies later diagnosed with autism.
          </p>
        </section>

        {/* 9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">By 9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Does not respond to their name being called</li>
            <li>Limited or no babbling</li>
            <li>Does not follow your gaze when you look at something</li>
            <li>Limited back-and-forth communication (sounds, smiles, gestures)</li>
            <li>Does not show emotions through facial expressions</li>
            <li>Seems unusually focused on objects rather than people</li>
          </ul>
          <p>
            <strong>What to do:</strong> If you notice several of these signs, mention them to your
            pediatrician at the 9-month well-child visit. A hearing evaluation is also recommended to
            rule out hearing loss as a cause of reduced responsiveness.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">By 12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>No pointing (to request things or to show interest)</li>
            <li>No waving bye-bye</li>
            <li>No response to name consistently</li>
            <li>Limited or no babbling with consonants (ba, da, ma)</li>
            <li>Does not share enjoyment (showing you a toy, looking at you when something funny happens)</li>
            <li>Limited imitation of actions or sounds</li>
            <li>Does not follow simple gestures (following a point)</li>
            <li>Repetitive movements with objects (spinning wheels, lining things up)</li>
          </ul>
          <p>
            <strong>Key milestone:</strong> By 12 months, most children point to show interest (not just
            to request). The absence of this &quot;declarative pointing&quot; -- pointing at a dog to share
            the experience with you -- is one of the strongest early predictors of autism.
          </p>
        </section>

        {/* 18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">By 18 Months</h2>
          <p>
            This is when the AAP recommends the first autism-specific screening (M-CHAT-R/F). Signs at this age:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No words (or loss of previously acquired words)</li>
            <li>Does not point to show things to others</li>
            <li>Does not follow a point (look where you point)</li>
            <li>Limited pretend play (not pretending to drink, feed doll, etc.)</li>
            <li>Does not bring objects to show you</li>
            <li>Unusual reactions to sensory input (covering ears, visual fascination with lights/spinning)</li>
            <li>Lines up toys or objects repeatedly</li>
            <li>Gets upset by minor changes in routine</li>
            <li>Unusual body movements (hand flapping, rocking, toe walking)</li>
            <li>Seems to be in their own world</li>
          </ul>
          <p>
            <strong>Screening:</strong> Your pediatrician should administer the M-CHAT-R/F at the
            18-month visit. If they do not, request it. This screening takes 5 minutes and can identify
            children at risk who need further evaluation.
          </p>
        </section>

        {/* 24 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">By 24 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>No two-word phrases (not including echoing/repeating)</li>
            <li>Does not imitate actions or words</li>
            <li>Does not follow simple instructions</li>
            <li>Limited or no pretend play</li>
            <li>Does not show interest in other children</li>
            <li>Echoes words or phrases without apparent meaning (echolalia)</li>
            <li>Intense, focused interests in specific objects or topics</li>
            <li>Difficulty with transitions or changes in routine</li>
            <li>Unusual tone of voice or speech patterns</li>
            <li>Loss of previously acquired language or social skills</li>
          </ul>
          <p>
            <strong>Red flag -- regression:</strong> Loss of skills at any age warrants immediate
            evaluation. Approximately 25-30% of children with autism experience regression (losing
            words or social skills) typically between 15-24 months.
          </p>
        </section>

        {/* What Autism Is NOT */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Autism Is NOT</h2>
          <p>Common misconceptions that may delay identification:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>&quot;They make eye contact, so it cannot be autism&quot; -- Many autistic children make some eye contact</li>
            <li>&quot;They are affectionate, so it cannot be autism&quot; -- Many autistic children are loving and attached to caregivers</li>
            <li>&quot;They are too young to diagnose&quot; -- Reliable diagnosis is possible by age 2</li>
            <li>&quot;Boys are more likely, so girls do not need screening&quot; -- Girls are often missed because their presentations differ</li>
            <li>&quot;They will grow out of it&quot; -- Autism is a lifelong neurological difference (but early support dramatically improves outcomes)</li>
            <li>&quot;They are just shy&quot; -- Shyness involves interest in others with fear; autism involves fundamental differences in social communication</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What to Do If You Have Concerns</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Do not wait.</strong> Research consistently shows earlier intervention leads to better outcomes. Do not accept &quot;let&apos;s wait and see&quot; if you have significant concerns.</li>
            <li><strong>Talk to your pediatrician.</strong> Request the M-CHAT-R/F screening if not already done. Ask for referrals to specialists.</li>
            <li><strong>Contact Early Intervention.</strong> You can self-refer for a free developmental evaluation for children under 3. No doctor referral needed.</li>
            <li><strong>Request a comprehensive evaluation.</strong> A developmental pediatrician, child psychologist, or multidisciplinary team can provide a formal assessment.</li>
            <li><strong>Begin intervention.</strong> You do not need a formal diagnosis to start services. EI can begin based on developmental delay alone, and{" "}
              <Link href="/development/early-intervention" className="text-primary underline">
                early intervention services
              </Link>{" "}
              can start while you wait for a diagnostic evaluation.</li>
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
                href="https://www.cdc.gov/ncbddd/autism/signs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Signs and Symptoms of Autism
              </a>
            </li>
            <li>
              <a
                href="https://publications.aap.org/pediatrics/article/145/1/e20193447/36255"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Identification, Evaluation, and Management of Children with ASD (2020)
              </a>
            </li>
            <li>
              <a
                href="https://mchatscreen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                M-CHAT-R/F Official Screening Tool
              </a>
            </li>
            <li>
              <a
                href="https://www.autismspeaks.org/signs-autism"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Autism Speaks — Signs of Autism
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. If you have concerns about your child&apos;s
            development, talk to your pediatrician. Only a qualified professional can diagnose autism.
          </p>
        </div>

        <BottomLine
          summary="Autism can be identified as early as age 2 when parents and providers know what to look for. No single sign means a child has autism -- it is the overall pattern of social communication differences that matters. If you have concerns, act now: request M-CHAT screening, contact Early Intervention, and seek comprehensive evaluation. Early intervention during the critical period of brain development leads to significantly better lifelong outcomes."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
