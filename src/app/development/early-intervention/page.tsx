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
  title: "Early Intervention Services (Birth to 3)",
  description:
    "Complete guide to Early Intervention services for children under 3. How to qualify, what services include, how to access them, and what to expect. Free in every US state under IDEA Part C.",
  alternates: {
    canonical: "/development/early-intervention",
  },
  openGraph: {
    title: "Early Intervention Services | Free Support for Children Under 3",
    description:
      "Everything parents need to know about Early Intervention: eligibility, services, the IFSP process, and how to self-refer. Free under federal law.",
  },
};

const faqItems = [
  {
    question: "What is Early Intervention and who qualifies?",
    answer:
      "Early Intervention (EI) is a system of federally mandated services for infants and toddlers (birth to age 3) with developmental delays or disabilities. It is authorized under IDEA Part C. Eligibility varies by state but generally requires a 25-33% delay in one or more developmental domains, or a diagnosed condition with a high probability of delay (like Down syndrome or premature birth). Services are free or low-cost in every state.",
  },
  {
    question: "How do I get my child evaluated for Early Intervention?",
    answer:
      "You can self-refer -- no doctor's referral is needed. Contact your state's EI program directly (search '[your state] early intervention program' or call 211). After referral, an evaluation must be completed within 45 days. The evaluation is comprehensive and free. If your child qualifies, services can begin immediately while the full plan is developed.",
  },
  {
    question: "What services does Early Intervention provide?",
    answer:
      "EI can include: speech-language therapy, occupational therapy, physical therapy, developmental therapy, feeding therapy, assistive technology, family counseling and training, service coordination, and more. Services are provided in the child's 'natural environment' -- typically your home or daycare -- and are tailored to your family's needs and routines.",
  },
  {
    question: "Is Early Intervention really free?",
    answer:
      "The evaluation is always free. Services themselves are free in most states. Some states use a sliding fee scale based on family income, but no family can be denied services due to inability to pay. Private insurance may be billed, but families cannot be required to use insurance. Medicaid covers EI services fully. Contact your state program for specific cost information.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Early Intervention Services (Birth to 3)",
  description:
    "Complete guide to Early Intervention services for children under 3. Eligibility, services, access, and what to expect.",
  path: "/development/early-intervention",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "IDEA Part C (Early Intervention)", url: "https://sites.ed.gov/idea/regs/c" },
    { name: "CDC Early Intervention Resources", url: "https://www.cdc.gov/ncbddd/actearly/parents/states.html" },
    { name: "AAP Early Intervention Policy", url: "https://publications.aap.org/pediatrics/article/145/1/e20193449/36971" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Early Intervention" },
]);

export default function EarlyInterventionPage() {
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
          { label: "Early Intervention" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Early Intervention Services (Birth to 3)
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["IDEA Part C", "CDC", "AAP"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Early Intervention (EI) is a federally mandated program providing services to children birth to 3 with developmental delays.",
              "You do NOT need a doctor's referral -- you can self-refer by contacting your state's EI program directly.",
              "Evaluation is always free. Services are free or low-cost in every US state.",
              "Services are provided in your child's natural environment (home, daycare) and tailored to your family's routines.",
              "Research consistently shows that earlier intervention leads to better outcomes. Do not delay contacting EI if you have concerns.",
            ]}
          />
        </div>

        {/* What Is Early Intervention */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Is Early Intervention?</h2>
          <p>
            Early Intervention (EI) is a system of services authorized by the Individuals with
            Disabilities Education Act (IDEA), Part C. It provides support for infants and toddlers
            (birth to age 3) who have developmental delays or conditions that put them at risk for delays.
          </p>
          <p>
            Every state and territory in the United States is required to have an EI program. Services
            are designed to support the child&apos;s development and help families learn strategies to
            support their child in everyday activities and routines.
          </p>
          <p>
            The science is clear: the brain is most responsive to intervention in the first three years
            of life. Children who receive early support show significantly better outcomes in language,
            motor skills, cognitive development, and social skills compared to those who start services later.
          </p>
        </section>

        {/* Who Qualifies */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Who Qualifies?</h2>
          <p>
            Eligibility criteria vary by state, but generally children qualify if they have:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>A developmental delay:</strong> Typically a 25-33% delay in one or more domains (gross motor, fine motor, communication, cognitive, social-emotional, adaptive skills)</li>
            <li><strong>A diagnosed condition:</strong> A condition with a high probability of resulting in delay (Down syndrome, cerebral palsy, hearing loss, vision impairment, autism, etc.)</li>
            <li><strong>Biological risk factors (in some states):</strong> Extreme prematurity, very low birth weight, or other medical conditions</li>
          </ul>
          <p>
            Important: You do not need a diagnosis to qualify. A measurable delay in any domain is
            sufficient. Many children qualify based on speech-language delay alone.
          </p>
        </section>

        {/* How to Access */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">How to Access Early Intervention</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Contact your state&apos;s EI program.</strong> You can self-refer -- no doctor&apos;s
              referral is needed. Find your state program by searching &quot;[state name] early intervention
              program&quot; or calling 211 (nationwide information line).
            </li>
            <li>
              <strong>Intake and service coordination.</strong> A service coordinator will be assigned to
              your family. They will explain the process, gather initial information, and schedule an evaluation.
            </li>
            <li>
              <strong>Evaluation (within 45 days of referral).</strong> A team of qualified professionals
              evaluates your child in all developmental domains. This is free and comprehensive.
            </li>
            <li>
              <strong>Eligibility determination.</strong> Based on evaluation results, the team determines
              if your child qualifies for services.
            </li>
            <li>
              <strong>IFSP development.</strong> If eligible, you and the team develop an Individualized
              Family Service Plan (IFSP) that outlines goals, services, and how they will be delivered.
            </li>
            <li>
              <strong>Services begin.</strong> Therapists work with your child and family in your natural
              environment (home, daycare). Services are reviewed every 6 months.
            </li>
          </ol>
        </section>

        {/* What Services Include */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What Services Are Available?</h2>
          <p>EI services are tailored to your child&apos;s specific needs and may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Speech-language therapy:</strong> For communication delays, feeding difficulties, and social communication</li>
            <li><strong>Occupational therapy:</strong> For fine motor skills, sensory processing, feeding, and daily living skills</li>
            <li><strong>Physical therapy:</strong> For gross motor skills, strength, balance, and mobility</li>
            <li><strong>Developmental therapy:</strong> For cognitive skills, play skills, and overall development</li>
            <li><strong>Feeding therapy:</strong> For oral motor difficulties, food aversions, and swallowing concerns</li>
            <li><strong>Assistive technology:</strong> Devices and services to help children participate in activities</li>
            <li><strong>Family training and counseling:</strong> Teaching families strategies to support development in daily routines</li>
            <li><strong>Service coordination:</strong> Help navigating systems, appointments, and transitions</li>
            <li><strong>Vision and hearing services:</strong> For children with sensory impairments</li>
          </ul>
        </section>

        {/* The IFSP */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">The IFSP: Your Child&apos;s Service Plan</h2>
          <p>
            The Individualized Family Service Plan (IFSP) is a written document developed collaboratively
            by you and the EI team. It includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your child&apos;s current developmental levels in all domains</li>
            <li>Your family&apos;s priorities, concerns, and resources</li>
            <li>Measurable goals (called &quot;outcomes&quot;) for your child and family</li>
            <li>Specific services to be provided (type, frequency, duration, location)</li>
            <li>Plan for transition at age 3 (to school district services if still needed)</li>
          </ul>
          <p>
            You are a full member of the IFSP team. Your input is essential -- you know your child and
            family best. The plan is reviewed every 6 months and can be updated at any time.
          </p>
        </section>

        {/* What to Expect */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What to Expect from Sessions</h2>
          <p>
            EI sessions look different from traditional therapy. Key principles:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Natural environment:</strong> Sessions happen in your home, daycare, or community settings -- not a clinic</li>
            <li><strong>Routine-based:</strong> Therapists embed strategies into your daily routines (bath time, mealtime, play)</li>
            <li><strong>Coaching model:</strong> The therapist coaches you on strategies you can use throughout the week -- not just during the session</li>
            <li><strong>Family-centered:</strong> The focus is on empowering your family, not creating dependence on a therapist</li>
            <li><strong>Play-based:</strong> Young children learn through play, so sessions look like guided play with a purpose</li>
          </ul>
          <p>
            Sessions are typically 30-60 minutes, 1-2 times per week per service. The strategies you learn
            to use between sessions are as important as the sessions themselves.
          </p>
        </section>

        {/* Transition at Age 3 */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Transition at Age 3</h2>
          <p>
            EI services end when your child turns 3. If your child still needs support, they may
            transition to services through your local school district (IDEA Part B, Section 619).
            The transition process begins at least 6 months before your child&apos;s third birthday:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your EI team will help plan the transition</li>
            <li>A conference with the school district will be scheduled</li>
            <li>The school district evaluates your child for eligibility under Part B</li>
            <li>If eligible, an IEP (Individualized Education Program) is developed</li>
            <li>Services may include special education preschool, therapy services, or both</li>
          </ul>
          <p>
            Not all children who received EI will need ongoing services -- some catch up fully during
            the EI period. Your team will help determine what your child needs going forward.
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
                href="https://sites.ed.gov/idea/regs/c"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                IDEA Part C — Early Intervention Regulations
              </a>
            </li>
            <li>
              <a
                href="https://www.cdc.gov/ncbddd/actearly/parents/states.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                CDC — Find Your State&apos;s Early Intervention Program
              </a>
            </li>
            <li>
              <a
                href="https://ectacenter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Early Childhood Technical Assistance Center (ECTA)
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Contact your state&apos;s Early Intervention
            program for specific eligibility criteria and available services in your area.
          </p>
        </div>

        <BottomLine
          summary="Early Intervention is a free, federally mandated program available in every US state for children birth to 3 with developmental delays. You can self-refer without a doctor's permission. The evaluation is free, services are provided in your home, and research consistently shows that earlier support leads to better outcomes. If you have any concerns about your child's development, contacting EI is always the right step."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
