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
  title: "Therapy Types for Children: OT, PT, Speech & More",
  description:
    "Guide to developmental therapy types for young children: occupational therapy, physical therapy, speech therapy, ABA, developmental therapy, and feeding therapy. What each treats and when to seek it.",
  alternates: {
    canonical: "/development/therapy-types",
  },
  openGraph: {
    title: "Therapy Types for Children | OT, PT, Speech, ABA",
    description:
      "Understanding the different types of developmental therapy: what they treat, what sessions look like, and how to access them.",
  },
};

const faqItems = [
  {
    question: "What is the difference between occupational therapy and physical therapy for children?",
    answer:
      "Physical therapy (PT) focuses on large body movements -- strength, balance, coordination, walking, running, and mobility. Occupational therapy (OT) focuses on daily living skills -- fine motor skills, hand coordination, self-feeding, dressing, sensory processing, and play skills. A child with gross motor delays typically sees PT; a child with fine motor or sensory issues typically sees OT. Some children benefit from both.",
  },
  {
    question: "What does ABA therapy involve?",
    answer:
      "Applied Behavior Analysis (ABA) uses learning principles to teach skills and reduce challenging behaviors. Modern ABA is play-based and naturalistic, focusing on communication, social skills, daily living skills, and learning readiness. It is the most researched intervention for autism. However, approaches vary significantly between providers -- look for those using naturalistic, child-led methods rather than rigid, compliance-based approaches.",
  },
  {
    question: "How often should my child attend therapy?",
    answer:
      "Frequency depends on the severity of the delay, the child's age, and the type of therapy. Early Intervention typically provides 1-2 sessions per week per service. Private therapy may be 1-3 times per week. More is not always better -- what happens between sessions (parent follow-through on strategies) matters as much as the sessions themselves. Your therapist will recommend frequency based on your child's specific needs.",
  },
  {
    question: "How do I find a good therapist for my child?",
    answer:
      "Start with your pediatrician for referrals, or contact your state's Early Intervention program (free for under 3). For private therapy, look for therapists who specialize in pediatrics, use play-based approaches, actively involve parents, explain their reasoning, and set measurable goals. Ask about their experience with your child's specific needs. Trust your instincts -- you should feel comfortable and see progress over time.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Therapy Types for Children",
  description:
    "Guide to developmental therapy types for young children: OT, PT, speech therapy, ABA, and more.",
  path: "/development/therapy-types",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "AAP Clinical Guidelines", url: "https://www.aap.org/en/clinical-guidance/" },
    { name: "ASHA Speech-Language Pathology", url: "https://www.asha.org/public/" },
    { name: "AOTA Occupational Therapy", url: "https://www.aota.org/practice/children-and-youth" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Therapy Types" },
]);

export default function TherapyTypesPage() {
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
          { label: "Therapy Types" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Therapy Types for Children
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["AAP", "ASHA", "AOTA"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Different therapy types address different developmental domains -- your child may benefit from one or several.",
              "For children under 3, therapy is often provided free through Early Intervention in your home or daycare.",
              "Good pediatric therapy is play-based, family-centered, and includes parent coaching on strategies to use between sessions.",
              "The therapist-child relationship matters. If your child is not making progress or seems distressed, discuss this with the provider.",
              "What you do between sessions (implementing strategies in daily routines) is as important as the therapy sessions themselves.",
            ]}
          />
        </div>

        {/* Speech-Language Therapy */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Speech-Language Therapy (SLP)</h2>
          <p>
            <strong>Provider:</strong> Speech-Language Pathologist (SLP), Master&apos;s degree with clinical certification (CCC-SLP)
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Expressive language delays (limited vocabulary, difficulty forming sentences)</li>
            <li>Receptive language delays (difficulty understanding language)</li>
            <li>Articulation disorders (unclear speech, difficulty producing sounds)</li>
            <li>Fluency disorders (stuttering)</li>
            <li>Social communication (pragmatic language, conversation skills)</li>
            <li>Feeding and swallowing difficulties (oral motor skills)</li>
            <li>Augmentative and alternative communication (AAC) for nonverbal children</li>
          </ul>
          <p><strong>What sessions look like:</strong> For young children, speech therapy is play-based. The SLP uses toys, books, songs, and games to target specific language goals. Sessions typically last 30-60 minutes. The SLP will teach you strategies to use during daily routines (mealtime, bath time, reading).</p>
          <p><strong>When to seek it:</strong> No babbling by 9 months, no words by 15 months, no two-word phrases by 24 months, unclear speech by age 3, difficulty understanding language, or feeding difficulties.</p>
        </section>

        {/* Occupational Therapy */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Occupational Therapy (OT)</h2>
          <p>
            <strong>Provider:</strong> Occupational Therapist (OT or OTR), Master&apos;s or Doctoral degree
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fine motor skills (grasping, manipulating small objects, drawing, cutting)</li>
            <li>Self-care skills (feeding, dressing, grooming)</li>
            <li>Sensory processing difficulties (over- or under-sensitivity to input)</li>
            <li>Hand-eye coordination</li>
            <li>Visual motor integration (copying shapes, tracking)</li>
            <li>Play skills and social participation</li>
            <li>Adaptive equipment needs</li>
          </ul>
          <p><strong>What sessions look like:</strong> Pediatric OT uses purposeful play activities to build skills. Sessions may include sensory experiences (swinging, textured materials), fine motor activities (play dough, bead stringing), feeding practice, and self-care routines. The OT coaches parents on strategies for home.</p>
          <p><strong>When to seek it:</strong> Difficulty grasping or manipulating objects, avoidance of textures, extreme picky eating related to texture, difficulty self-feeding, sensory meltdowns, poor handwriting readiness, or difficulty with daily routines.</p>
        </section>

        {/* Physical Therapy */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Physical Therapy (PT)</h2>
          <p>
            <strong>Provider:</strong> Physical Therapist (PT or DPT), Doctoral degree
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gross motor delays (rolling, sitting, crawling, walking, running)</li>
            <li>Muscle tone issues (too high -- spasticity; or too low -- hypotonia)</li>
            <li>Balance and coordination difficulties</li>
            <li>Strength and endurance</li>
            <li>Mobility limitations</li>
            <li>Orthopedic conditions (torticollis, clubfoot)</li>
            <li>Equipment needs (orthotics, walkers, wheelchairs)</li>
          </ul>
          <p><strong>What sessions look like:</strong> Pediatric PT involves active movement through play -- climbing, crawling, walking, ball activities, and obstacle courses. The therapist may use equipment like therapy balls, swings, and balance boards. Sessions include parent education on positioning, exercises, and safe movement practice.</p>
          <p><strong>When to seek it:</strong> Not meeting gross motor milestones (head control by 4 months, sitting by 9 months, walking by 18 months), preferring one side of body, toe walking, frequent falling, very stiff or very floppy muscle tone, or difficulty keeping up with peers physically.</p>
        </section>

        {/* Developmental Therapy */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Developmental Therapy</h2>
          <p>
            <strong>Provider:</strong> Developmental Therapist or Early Interventionist (qualifications vary by state)
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Overall cognitive development (problem-solving, cause and effect, imitation)</li>
            <li>Play skills (functional play, pretend play, cooperative play)</li>
            <li>Pre-academic skills (colors, shapes, counting)</li>
            <li>Adaptive behavior (daily routines, following directions)</li>
            <li>Social interaction skills</li>
            <li>Parent-child interaction</li>
          </ul>
          <p><strong>What sessions look like:</strong> Developmental therapy uses play-based activities to target cognitive and adaptive skills. The therapist observes how the child approaches problems, plays, and interacts, then introduces activities at the right level of challenge. Strong emphasis on coaching parents.</p>
          <p><strong>When to seek it:</strong> Global developmental delays, limited play skills, difficulty problem-solving, not meeting cognitive milestones, or when a child needs support across multiple domains.</p>
        </section>

        {/* ABA Therapy */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Applied Behavior Analysis (ABA)</h2>
          <p>
            <strong>Provider:</strong> Board Certified Behavior Analyst (BCBA) with Registered Behavior Technicians (RBT)
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Communication and language skills</li>
            <li>Social skills and peer interaction</li>
            <li>Daily living skills (toileting, dressing, feeding)</li>
            <li>Challenging behaviors (aggression, self-injury, elopement)</li>
            <li>Learning readiness (attending, following instructions, imitation)</li>
            <li>Play and leisure skills</li>
          </ul>
          <p><strong>What sessions look like:</strong> Modern, evidence-based ABA is naturalistic and play-based. It uses the child&apos;s interests and motivation to teach new skills. Sessions may be in-home, in a clinic, or at school. Intensity varies from a few hours per week to 20-40 hours per week for comprehensive programs.</p>
          <p><strong>Important notes:</strong> ABA has evolved significantly. Look for providers using Naturalistic Developmental Behavioral Interventions (NDBI) approaches like the Early Start Denver Model (ESDM) or Pivotal Response Treatment (PRT). Avoid providers who use primarily table-based discrete trial training for very young children or who prioritize compliance over engagement.</p>
          <p><strong>When to seek it:</strong> Primarily for children with autism or suspected autism, particularly when there are significant communication, social, or behavioral challenges.</p>
        </section>

        {/* Feeding Therapy */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Feeding Therapy</h2>
          <p>
            <strong>Provider:</strong> Speech-Language Pathologist (SLP) or Occupational Therapist (OT) with feeding specialization
          </p>
          <p><strong>What it addresses:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Difficulty transitioning to solid foods</li>
            <li>Extreme picky eating (beyond normal toddler pickiness)</li>
            <li>Texture aversions and gagging with certain foods</li>
            <li>Swallowing difficulties (dysphagia)</li>
            <li>Poor oral motor skills for chewing</li>
            <li>Failure to thrive related to feeding</li>
            <li>Tube feeding weaning</li>
          </ul>
          <p><strong>What sessions look like:</strong> Feeding therapy is gentle and child-paced. It may involve food exploration (touching, smelling, tasting), oral motor exercises, desensitization to textures, mealtime strategies, and family coaching on creating positive mealtime environments. It is never forcing food.</p>
          <p><strong>When to seek it:</strong> Accepting fewer than 20 foods, gagging or vomiting with certain textures, losing weight or not gaining, mealtime battles lasting 30+ minutes regularly, or difficulty transitioning from purees to table foods by 12 months.</p>
        </section>

        {/* How to Access */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">How to Access Therapy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Early Intervention (birth to 3):</strong> Free or low-cost. Self-refer by contacting your state&apos;s EI program. Services provided in your home.</li>
            <li><strong>School district (age 3+):</strong> Free through special education services if your child qualifies under IDEA Part B.</li>
            <li><strong>Private therapy:</strong> Through your pediatrician&apos;s referral and health insurance. May have copays and waitlists.</li>
            <li><strong>Hospital outpatient clinics:</strong> Often have specialized programs for complex needs.</li>
            <li><strong>University clinics:</strong> Training programs that offer lower-cost services supervised by licensed professionals.</li>
          </ul>
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
                href="https://www.asha.org/public/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                ASHA — Speech-Language Pathology Information for the Public
              </a>
            </li>
            <li>
              <a
                href="https://www.aota.org/practice/children-and-youth"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AOTA — Occupational Therapy for Children and Youth
              </a>
            </li>
            <li>
              <a
                href="https://www.apta.org/patient-care/interventions/early-intervention"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                APTA — Physical Therapy Early Intervention
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Discuss therapy options with your pediatrician
            or your child&apos;s Early Intervention team to determine what is appropriate for your child.
          </p>
        </div>

        <BottomLine
          summary="Different types of therapy target different areas of development. The right therapy (or combination) depends on your child's specific needs. For children under 3, start with Early Intervention -- it is free and covers multiple therapy types. Look for therapists who use play-based approaches, actively involve parents, and set clear goals. Remember: what you do between sessions matters as much as the sessions themselves."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
