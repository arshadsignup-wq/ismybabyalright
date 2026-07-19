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
  title: "Speech Delay vs Speech Disorder",
  description:
    "Understand the difference between speech delay and speech disorder. Late talkers, expressive language delay, articulation disorders, and when to seek evaluation. Based on ASHA and AAP guidelines.",
  alternates: {
    canonical: "/development/speech-delay",
  },
  openGraph: {
    title: "Speech Delay vs Speech Disorder | What Parents Need to Know",
    description:
      "Is your child a late talker or is something more going on? Understand speech delays, disorders, and when to seek evaluation.",
  },
};

const faqItems = [
  {
    question: "What is a 'late talker' and will they catch up?",
    answer:
      "A 'late talker' is a child aged 18-30 months with limited expressive vocabulary (fewer than 50 words by age 2 or no two-word combinations) but age-appropriate understanding, play, and social skills. Research shows approximately 50-70% of late talkers catch up by age 3-4 without intervention. However, 30-50% do not, and there is no reliable way to predict who will catch up. This is why evaluation is always recommended -- intervention helps regardless.",
  },
  {
    question: "What is the difference between a speech delay and a language delay?",
    answer:
      "A speech delay affects how clearly a child produces sounds (articulation). A language delay affects how well a child understands (receptive) and/or uses (expressive) communication. A child can have clear speech but limited vocabulary (language delay), or many words that are hard to understand (speech delay), or both. The distinction matters because treatment approaches differ.",
  },
  {
    question: "Should I be concerned about stuttering in my toddler?",
    answer:
      "Developmental stuttering (repetition of sounds or words, like 'I-I-I want that') is common between ages 2-5 as language skills are developing rapidly. Most children outgrow it. Seek evaluation if: stuttering lasts more than 6 months, your child shows physical tension or frustration when speaking, avoids speaking situations, or there is a family history of persistent stuttering.",
  },
  {
    question: "Does using a pacifier or thumb sucking cause speech delays?",
    answer:
      "Pacifiers and thumb sucking do not directly cause language delays, but prolonged use (beyond age 2-3) can affect oral motor development and articulation (specifically the production of certain sounds like 's,' 'z,' 'sh'). The bigger concern is if a pacifier is in the mouth so often that the child has fewer opportunities to babble, practice sounds, and communicate. Aim to limit pacifier use to sleep times by age 1 and wean by age 2.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Speech Delay vs Speech Disorder",
  description:
    "Understanding the difference between speech delay and speech disorder. Late talkers, evaluation, and treatment.",
  path: "/development/speech-delay",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "ASHA Speech-Language Development", url: "https://www.asha.org/public/speech/development/" },
    { name: "AAP Language Development", url: "https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx" },
    { name: "CDC Communication Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Speech Delay vs Disorder" },
]);

export default function SpeechDelayPage() {
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
          { label: "Speech Delay vs Disorder" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Speech Delay vs. Speech Disorder
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["ASHA", "AAP", "CDC"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Speech delay (late talking) means a child is following the typical pattern of development but at a slower pace.",
              "Speech disorder means the pattern itself is atypical -- sounds are produced differently or language is organized differently.",
              "About 50-70% of 'late talkers' catch up by age 3-4, but there is no reliable way to predict who will -- evaluation is always recommended.",
              "Receptive language (understanding) is a better predictor of outcomes than expressive language (speaking) alone.",
              "Early speech therapy is highly effective. The 'wait and see' approach delays intervention during a critical period.",
            ]}
          />
        </div>

        {/* Definitions */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Understanding the Terminology</h2>
          <p>
            The terms &quot;speech delay,&quot; &quot;language delay,&quot; and &quot;speech disorder&quot; are often used
            interchangeably by parents, but they mean different things clinically:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Speech delay:</strong> A child is following the typical developmental pattern for
              producing sounds, but at a slower pace. They will likely catch up with or without intervention.
            </li>
            <li>
              <strong>Language delay:</strong> A child&apos;s vocabulary, sentence complexity, or understanding
              of language is behind peers but following the typical progression. May be expressive (speaking),
              receptive (understanding), or both.
            </li>
            <li>
              <strong>Speech disorder:</strong> The pattern of sound production is atypical -- not just slow.
              Examples include articulation disorder (difficulty producing specific sounds), phonological
              disorder (pattern-based sound errors), childhood apraxia of speech (difficulty planning
              mouth movements for speech), and dysarthria (muscle weakness affecting speech).
            </li>
            <li>
              <strong>Language disorder:</strong> Persistent difficulty understanding or using language that
              is not simply delayed but fundamentally different. Formerly called &quot;Specific Language
              Impairment&quot; (SLI), now often called &quot;Developmental Language Disorder&quot; (DLD).
            </li>
          </ul>
        </section>

        {/* Late Talkers */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Late Talkers: When to Worry</h2>
          <p>
            A &quot;late talker&quot; is typically defined as a child aged 18-30 months who has:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fewer than 50 words by age 2</li>
            <li>No two-word combinations by age 2</li>
            <li>BUT age-appropriate understanding (receptive language)</li>
            <li>AND age-appropriate play, cognitive, and social skills</li>
          </ul>
          <p>
            <strong>Positive prognostic signs (more likely to catch up):</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Good receptive language (understands much more than they say)</li>
            <li>Uses gestures to communicate (pointing, waving, showing)</li>
            <li>Imitates sounds and actions</li>
            <li>Shows interest in communicating (brings you things, looks at you expectantly)</li>
            <li>Good play skills (pretend play emerging)</li>
            <li>No other developmental concerns</li>
          </ul>
          <p>
            <strong>Concerning signs (less likely to catch up without intervention):</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Limited understanding of language (receptive delay too)</li>
            <li>Few or no gestures</li>
            <li>Limited imitation</li>
            <li>Family history of language disorders or learning disabilities</li>
            <li>Delays in other areas (social, cognitive, motor)</li>
            <li>History of chronic ear infections</li>
          </ul>
        </section>

        {/* Types of Speech Disorders */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Types of Speech Disorders in Young Children</h2>

          <h3 className="text-base font-semibold text-foreground mt-4">Articulation Disorder</h3>
          <p>
            Difficulty producing specific speech sounds correctly. Common examples: substituting
            &quot;w&quot; for &quot;r&quot; (&quot;wabbit&quot;), omitting final consonants (&quot;ca&quot; for &quot;cat&quot;),
            or lisping on &quot;s&quot; and &quot;z&quot; sounds.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4">Phonological Disorder</h3>
          <p>
            Pattern-based errors in how sounds are used in words. For example, a child might delete all
            final consonants (&quot;do&quot; for &quot;dog,&quot; &quot;ca&quot; for &quot;cat,&quot; &quot;ba&quot; for &quot;ball&quot;)
            or substitute all back sounds with front sounds (&quot;tat&quot; for &quot;cat&quot;). These patterns make
            speech very difficult to understand.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4">Childhood Apraxia of Speech (CAS)</h3>
          <p>
            A motor planning disorder where the brain has difficulty coordinating the mouth movements
            needed for speech. Signs include: inconsistent errors (saying the same word differently each
            time), difficulty imitating speech, limited babbling as an infant, and better understanding
            than production. CAS requires specialized treatment and is less common than other disorders.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4">Developmental Stuttering</h3>
          <p>
            Repetitions of sounds, syllables, or words; prolonged sounds; or blocks (getting &quot;stuck&quot;).
            Common between ages 2-5. Most children outgrow it, but persistent stuttering (lasting 6+
            months) benefits from early intervention with a fluency specialist.
          </p>
        </section>

        {/* Speech Intelligibility */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Speech Intelligibility Guidelines</h2>
          <p>
            How much of your child&apos;s speech should be understandable by age? These are general guidelines
            from ASHA:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>18 months:</strong> Familiar listeners understand approximately 25% of speech</li>
            <li><strong>24 months:</strong> Familiar listeners understand approximately 50-75% of speech</li>
            <li><strong>36 months:</strong> Unfamiliar listeners understand approximately 75% of speech</li>
            <li><strong>4 years:</strong> Unfamiliar listeners understand approximately 100% of speech (some sound errors still normal)</li>
          </ul>
          <p>
            If your child&apos;s speech is significantly less intelligible than these guidelines suggest,
            or if you frequently cannot understand what your own child is saying by age 2-3, seek a
            speech evaluation.
          </p>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>Contact a speech-language pathologist or your pediatrician if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No babbling by 9 months</li>
            <li>No words by 15 months</li>
            <li>Fewer than 50 words by 2 years</li>
            <li>No two-word phrases by 2 years</li>
            <li>Speech is mostly unintelligible to unfamiliar listeners by age 3</li>
            <li>Your child is frustrated by inability to communicate</li>
            <li>Your child does not seem to understand what you say</li>
            <li>Loss of previously acquired words or language skills</li>
            <li>Stuttering lasting more than 6 months or causing distress</li>
            <li>You have a gut feeling something is not right</li>
          </ul>
          <p>
            You do not need a doctor&apos;s referral to see a speech-language pathologist. For children
            under 3,{" "}
            <Link href="/development/early-intervention" className="text-primary underline">
              Early Intervention
            </Link>{" "}
            provides free evaluations and therapy. You can self-refer.
          </p>
        </section>

        {/* Treatment */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Treatment Approaches</h2>
          <p>Speech therapy for young children is play-based and family-centered. Common approaches include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>For language delays:</strong> Building vocabulary through play, modeling language, expanding utterances, teaching gestures, and coaching parents on language stimulation strategies in daily routines.</li>
            <li><strong>For articulation disorders:</strong> Teaching correct sound production through modeling, visual cues, and graduated practice from sounds to words to sentences.</li>
            <li><strong>For phonological disorders:</strong> Targeting sound patterns (not individual sounds) through minimal pair therapy and phonological awareness activities.</li>
            <li><strong>For childhood apraxia of speech:</strong> Intensive, repetitive motor practice with multi-sensory cues. Requires frequent sessions (2-3+ times per week). May include sign language or AAC as a bridge while verbal speech develops.</li>
            <li><strong>For stuttering:</strong> Indirect therapy (modifying the speaking environment) and direct therapy (teaching fluency strategies). The Lidcombe Program is evidence-based for preschool stuttering.</li>
          </ul>
        </section>

        {/* What You Can Do at Home */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What You Can Do at Home</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Talk constantly:</strong> Narrate your day, describe what you see, explain what you are doing</li>
            <li><strong>Reduce questions:</strong> Instead of quizzing (&quot;What&apos;s that?&quot;), comment and describe (&quot;I see a big red truck!&quot;)</li>
            <li><strong>Wait and expect:</strong> Give your child time to communicate -- do not rush to fill silence</li>
            <li><strong>Expand:</strong> When your child says something, repeat it back with one more word (&quot;Ball!&quot; -&gt; &quot;Big ball!&quot;)</li>
            <li><strong>Follow their lead:</strong> Talk about what they are interested in and looking at</li>
            <li><strong>Read daily:</strong> Shared reading builds vocabulary and comprehension powerfully</li>
            <li><strong>Limit screen time:</strong> Screens do not support language development the way live interaction does</li>
            <li><strong>Do not force speech:</strong> Avoid requiring your child to say words before giving them what they want</li>
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
                href="https://www.asha.org/public/speech/development/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                ASHA — Speech and Language Development
              </a>
            </li>
            <li>
              <a
                href="https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                ASHA — Late Blooming or Language Problem?
              </a>
            </li>
            <li>
              <a
                href="https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Language Development
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. If you have concerns about your child&apos;s
            speech or language development, contact a speech-language pathologist or your pediatrician.
          </p>
        </div>

        <BottomLine
          summary="The distinction between a speech delay (slower but typical pattern) and a speech disorder (atypical pattern) matters for treatment planning, but in either case, early evaluation and intervention help. Do not adopt a 'wait and see' approach -- approximately 30-50% of late talkers do not catch up on their own, and there is no reliable way to predict who will. Speech therapy for young children is effective, play-based, and can begin through free Early Intervention services."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
