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
  title: "Speech & Language Development",
  description:
    "Complete guide to speech and language milestones from birth to 3 years. Babbling, first words, sentences, and communication skills. Based on CDC, AAP, and ASHA guidelines.",
  alternates: {
    canonical: "/development/speech-language",
  },
  openGraph: {
    title: "Speech & Language Development Milestones | Birth to 3 Years",
    description:
      "When do babies babble, say first words, and form sentences? Evidence-based speech and language guide from CDC, AAP, and ASHA.",
  },
};

const faqItems = [
  {
    question: "When should a baby say their first word?",
    answer:
      "Most babies say their first meaningful word by 12 months. This is typically 'mama' or 'dada' used specifically for a parent (not just babbling). By 12 months, babies should also understand simple words and respond to their name. If your child has no words by 15-16 months, talk to your pediatrician about a speech evaluation.",
  },
  {
    question: "How many words should a 2-year-old say?",
    answer:
      "By 24 months, most children use at least 50 words and are combining two words into phrases ('more milk,' 'daddy go'). The CDC milestone is using at least 2-word phrases by 24 months. Some children have 200+ words by this age, while others have fewer -- the range is wide. The key concern is whether a child is combining words and communicating intentionally.",
  },
  {
    question: "Is bilingualism causing my child's speech delay?",
    answer:
      "No. Research consistently shows that bilingualism does not cause speech delay. Bilingual children may mix languages (code-switching), which is normal and shows language competence. Their total vocabulary across both languages is typically comparable to monolingual peers. If you have concerns, a speech-language pathologist experienced with bilingual children can evaluate in both languages.",
  },
  {
    question: "What is the difference between speech and language?",
    answer:
      "Speech refers to the physical production of sounds -- articulation, fluency, and voice quality. Language refers to the system of communication -- understanding words (receptive language) and using words and grammar to express ideas (expressive language). A child can have a speech problem (difficulty producing sounds clearly) without a language problem, or vice versa, or both.",
  },
];

const jsonLd = getFAQPageSchema(faqItems);

const contentSchema = getContentPageSchema({
  name: "Speech & Language Development Milestones",
  description:
    "Complete guide to speech and language milestones from birth to 3 years. Based on CDC, AAP, and ASHA guidelines.",
  path: "/development/speech-language",
  lastModified: "2026-07-01",
  medicalGuidelines: [
    { name: "CDC Developmental Milestones (2022)", url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html" },
    { name: "ASHA Speech-Language Development", url: "https://www.asha.org/public/speech/development/" },
    { name: "AAP Language Development", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development.aspx" },
  ],
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Development", url: "/development" },
  { name: "Speech & Language" },
]);

export default function SpeechLanguagePage() {
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
          { label: "Speech & Language" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Speech &amp; Language Development
        </h1>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={["CDC", "AAP", "ASHA"]} />
        </div>

        <div className="mt-4">
          <KeyTakeaways
            takeaways={[
              "Speech (sound production) and language (understanding and using communication) are related but distinct skills.",
              "Babies communicate from birth through crying, then cooing, babbling, gestures, and eventually words and sentences.",
              "The CDC milestone for first words is 12 months; two-word phrases by 24 months.",
              "Receptive language (understanding) typically develops ahead of expressive language (speaking).",
              "Early intervention for speech-language delays is highly effective -- do not take a 'wait and see' approach if you have concerns.",
            ]}
          />
        </div>

        {/* Speech vs Language */}
        <section className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">Speech vs. Language: What&apos;s the Difference?</h2>
          <p>
            <strong>Speech</strong> refers to the physical act of producing sounds. It includes articulation
            (forming sounds correctly), fluency (flow and rhythm of speech), and voice (pitch, volume, quality).
          </p>
          <p>
            <strong>Language</strong> refers to the system of communication itself. It includes receptive language
            (understanding what others say) and expressive language (using words, grammar, and gestures to
            communicate ideas).
          </p>
          <p>
            A child can have difficulty with speech (unclear pronunciation) while having strong language skills
            (rich vocabulary, complex sentences). Or a child may speak clearly but have limited vocabulary or
            difficulty understanding instructions. Understanding this distinction helps identify the right type
            of support.
          </p>
        </section>

        {/* 0-3 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">0-3 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Startles at loud sounds</li>
            <li>Quiets or smiles when spoken to</li>
            <li>Coos and makes pleasure sounds (ah, oh)</li>
            <li>Has different cries for different needs</li>
            <li>Recognizes caregiver&apos;s voice</li>
            <li>Smiles at people (social smile by 6-8 weeks)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Talk to your baby constantly -- narrate diaper changes, feeding,
            and daily activities. Respond to coos and sounds as if having a conversation. Sing songs and
            read books (even at this age). Make eye contact during interactions.
          </p>
        </section>

        {/* 4-6 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">4-6 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Babbles with consonant sounds (ba, da, ma)</li>
            <li>Makes sounds to express joy and displeasure</li>
            <li>Turns toward the source of sounds</li>
            <li>Responds to changes in tone of voice</li>
            <li>Notices toys that make sounds</li>
            <li>Begins to babble with intonation (sounds like a sentence)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Imitate your baby&apos;s sounds and add new ones. Play
            peek-a-boo and other vocal games. Point to objects and name them. Read board books with
            simple pictures. Respond enthusiastically to all vocalization attempts.
          </p>
        </section>

        {/* 7-9 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">7-9 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Babbles chains of sounds (bababababa, mamamama)</li>
            <li>Responds to their own name</li>
            <li>Understands &quot;no&quot; (may not obey)</li>
            <li>Begins to use gestures (reaching, waving)</li>
            <li>Looks at named objects (&quot;Where&apos;s the ball?&quot;)</li>
            <li>Uses babbling to get attention</li>
            <li>May say &quot;mama&quot; or &quot;dada&quot; (not yet specific to parent)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Name everything -- people, objects, body parts, actions.
            Play naming games (&quot;Where&apos;s your nose?&quot;). Wave bye-bye and encourage imitation.
            Respond to all communication attempts. Introduce simple gestures and baby sign language.
          </p>
        </section>

        {/* 12 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">12 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Says 1-3 words meaningfully (mama, dada, another word)</li>
            <li>Uses &quot;mama&quot; and &quot;dada&quot; specifically for parents</li>
            <li>Tries to imitate words</li>
            <li>Understands simple instructions (&quot;Give me the cup&quot;)</li>
            <li>Points to objects they want</li>
            <li>Shakes head for &quot;no&quot;</li>
            <li>Uses gestures like waving, pointing, reaching</li>
          </ul>
          <p>
            <strong>Red flag:</strong> If your child has no words at all by 12 months, does not respond to
            their name, or does not use gestures (pointing, waving), discuss with your pediatrician.
          </p>
        </section>

        {/* 15-18 Months */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">15-18 Months</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uses 6-20 words (by 18 months)</li>
            <li>Points to body parts when asked</li>
            <li>Points to pictures in a book when named</li>
            <li>Follows simple one-step directions</li>
            <li>Understands many more words than can say</li>
            <li>Tries to say new words they hear</li>
            <li>May start combining gestures with words</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Expand on your child&apos;s words (child says &quot;ball,&quot;
            you say &quot;Yes, the big red ball!&quot;). Read together daily. Name emotions (&quot;You seem
            frustrated&quot;). Give choices (&quot;Do you want milk or water?&quot;). Avoid correcting --
            instead, model the correct form.
          </p>
        </section>

        {/* 2 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2 Years (24 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uses 50+ words</li>
            <li>Combines two words into phrases (&quot;more milk,&quot; &quot;daddy go&quot;)</li>
            <li>Follows two-step instructions (&quot;Get your shoes and bring them here&quot;)</li>
            <li>Points to things in a book when asked</li>
            <li>Names familiar objects and pictures</li>
            <li>Strangers can understand about 50% of speech</li>
            <li>Uses some pronouns (me, my, you)</li>
          </ul>
          <p>
            <strong>Red flag:</strong> If your child is not using at least two-word phrases by 24 months,
            the CDC recommends a developmental evaluation. This is the most important speech milestone
            to watch for.
          </p>
        </section>

        {/* 2.5-3 Years */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">2.5-3 Years (30-36 Months)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uses 200-1000+ words</li>
            <li>Speaks in 3-4 word sentences</li>
            <li>Asks &quot;what&quot; and &quot;where&quot; questions</li>
            <li>Uses plurals and past tense (with errors)</li>
            <li>Strangers can understand 75% of speech by age 3</li>
            <li>Tells simple stories</li>
            <li>Knows first name, age, and gender</li>
            <li>Follows multi-step instructions</li>
            <li>Engages in conversation (takes turns talking)</li>
          </ul>
          <p>
            <strong>What you can do:</strong> Have conversations -- ask open-ended questions. Read longer
            stories and discuss them. Sing songs with actions. Play pretend games that involve dialogue.
            Avoid baby talk -- model clear, correct speech. Expand sentences (&quot;The dog is running fast!&quot;).
          </p>
        </section>

        {/* Supporting Language Development */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">How to Support Language Development</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Talk constantly:</strong> Narrate your day, describe what you see, explain what you are doing</li>
            <li><strong>Respond to all communication:</strong> Treat coos, babbles, gestures, and words as intentional communication</li>
            <li><strong>Read daily:</strong> Even 5-10 minutes of shared reading has measurable benefits</li>
            <li><strong>Expand and extend:</strong> When your child says a word, add to it without correcting</li>
            <li><strong>Limit screen time:</strong> The AAP recommends no screens before 18 months (except video calls). Passive screen time does not support language development</li>
            <li><strong>Serve and return:</strong> Have back-and-forth interactions where you respond to what your child communicates</li>
            <li><strong>Sing songs:</strong> Repetitive songs with actions (Itsy Bitsy Spider, Wheels on the Bus) build vocabulary and memory</li>
          </ul>
        </section>

        {/* When to Seek Evaluation */}
        <section className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">When to Seek Evaluation</h2>
          <p>The American Speech-Language-Hearing Association (ASHA) recommends evaluation if your child:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Is not babbling by 7 months</li>
            <li>Does not respond to their name by 9 months</li>
            <li>Has no words by 12-15 months</li>
            <li>Is not using gestures (pointing, waving) by 12 months</li>
            <li>Has fewer than 6 words by 18 months</li>
            <li>Is not combining words by 24 months</li>
            <li>Has speech that is mostly unintelligible to strangers by age 3</li>
            <li>Stops talking or loses words they previously used</li>
            <li>Does not seem to understand what you say</li>
          </ul>
          <p>
            You do not need a doctor&apos;s referral to contact a speech-language pathologist (SLP) for an
            evaluation. For children under 3, your state&apos;s Early Intervention program provides free
            evaluations and services.
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
                href="https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP HealthyChildren.org — Language Development
              </a>
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            This is educational content, not medical advice. Every child develops at their own pace.
            If you have concerns about your child&apos;s speech or language, talk to your pediatrician
            or contact a speech-language pathologist.
          </p>
        </div>

        <BottomLine
          summary="Language development begins at birth and progresses from cries and coos to words, phrases, and sentences over the first three years. Talk to your baby constantly, respond to all communication attempts, and read together daily. If your child is not meeting speech-language milestones -- particularly no words by 15 months or no phrases by 24 months -- seek evaluation promptly. Early speech therapy is highly effective."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
