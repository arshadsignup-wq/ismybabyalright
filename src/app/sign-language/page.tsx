import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from '@/components/shared/LastReviewed';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import {
  signs,
  teachingTips,
  faqs,
  categories,
} from "@/data/sign-language/data";

export const metadata: Metadata = {
  title: "Baby Sign Language Guide: 30 Signs, Tips & When to Start",
  description:
    "Learn 30 baby signs across 5 categories with step-by-step descriptions. Evidence-based guide covering when to start (6-8 months), teaching tips, and FAQs. Based on research by Acredolo & Goodwyn.",
  alternates: {
    canonical: "/sign-language",
  },
  openGraph: {
    title: "Baby Sign Language Guide | Is My Baby Alright?",
    description:
      "30 easy baby signs with step-by-step instructions. Learn when to start, how to teach, and why signing helps communication without delaying speech.",
  },
};

const contentSchema = getContentPageSchema({
  name: 'Baby Sign Language Guide: 30 Signs, Tips & When to Start',
  description:
    'Learn 30 baby signs across 5 categories with step-by-step descriptions. Evidence-based guide covering when to start (6-8 months), teaching tips, and FAQs. Based on research by Acredolo & Goodwyn.',
  path: '/sign-language',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Baby Sign Language Guide' },
]);

const signLanguageFaqItems = [
  { question: "When should I start teaching my baby sign language?", answer: "Most babies are ready to begin learning signs between 6 and 8 months. You can start modeling signs as early as 4 months, but expect your baby to sign back around 8 to 10 months after consistent exposure." },
  { question: "Does baby sign language delay speech?", answer: "No. Research by Acredolo and Goodwyn shows that signing babies often speak sooner and develop larger vocabularies. Signing is a bridge to spoken language, not a replacement." },
  { question: "How many signs should I start with?", answer: "Start with 3 to 5 high-motivation signs like 'milk,' 'more,' 'all done,' 'eat,' and 'help.' Add more signs gradually as your baby masters the initial ones." },
  { question: "What if my baby makes the sign incorrectly?", answer: "Baby approximations are completely normal and expected. Just as babies babble before speaking clearly, they will modify signs to match their motor abilities. Respond to their attempt enthusiastically and continue modeling the correct form." },
  { question: "Will my baby stop signing once they start talking?", answer: "Yes, most babies naturally transition from signing to speaking as their verbal skills develop, typically between 18 and 24 months. Some may continue to use signs alongside speech for emphasis or clarity." },
];

const faqJsonLd = getFAQPageSchema(signLanguageFaqItems);

export default function SignLanguagePage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Baby Sign Language Guide" }]} />

      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            Baby Sign Language Guide
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            Baby sign language lets your little one communicate before they can
            talk. Using simple hand gestures based on American Sign Language
            (ASL), babies as young as 6 to 8 months can tell you what they want,
            how they feel, and what they see  -  dramatically reducing frustration
            for both of you.
          </p>
          <LastReviewed date="2026-07-01" />
          <div className="mt-3">
            <MedicalReviewAttribution sources={['AAP', 'ASHA']} />
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            "Babies can start learning signs between 6 and 8 months and typically sign back around 8 to 10 months after consistent exposure.",
            "Research shows signing does not delay speech -- signing babies often speak sooner and develop larger vocabularies.",
            "Start with 3 to 5 high-motivation signs like 'milk,' 'more,' and 'all done,' then add more as your baby masters them.",
            "Signing reduces frustration, strengthens the parent-baby bond, and builds early cognitive and fine motor skills.",
          ]}
        />

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            Why Teach Baby Sign Language?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Gives babies a way to express needs before they can speak, reducing frustration and tantrums",
              "Research shows signing babies often speak sooner and develop larger vocabularies",
              "Strengthens the parent-baby bond through shared communication and understanding",
              "Builds early cognitive skills including memory, visual attention, and symbolic thinking",
              "Encourages early literacy  -  signing babies tend to show more interest in books",
              "Helps babies develop fine motor skills through purposeful hand and finger movements",
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5 flex gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Start */}
        <section className="mb-10">
          <div className="rounded-xl bg-sky-light border border-sky/20 p-5">
            <h2 className="text-base font-bold text-sky-foreground mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              When to Start
            </h2>
            <p className="text-sm text-sky-foreground leading-relaxed">
              Most babies are ready to begin learning signs between{" "}
              <strong>6 and 8 months</strong> of age. At this stage, they have
              developed enough fine motor control to start imitating simple hand
              movements and have the cognitive ability to connect a gesture with
              its meaning. You can start modeling signs earlier  -  as young as 4
              months  -  but expect your baby to sign back around 8 to 10 months
              after consistent exposure.
            </p>
          </div>
        </section>

        {/* Teaching Tips */}
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            How to Teach Baby Sign Language
          </h2>
          <div className="flex flex-col gap-3">
            {teachingTips.map((tip, index) => (
              <article
                key={index}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Signs by Category */}
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            30 Signs to Teach Your Baby
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Start with a few signs from the Essentials category and add more as
            your baby masters them. Each sign includes the recommended starting
            age and step-by-step instructions.
          </p>

          {categories.map((category) => {
            const categorySigns = signs.filter(
              (s) => s.category === category.id
            );
            return (
              <div key={category.id} className="mb-8 last:mb-0">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <span aria-hidden="true">{category.emoji}</span>
                  {category.label}
                </h3>
                <div className="flex flex-col gap-3">
                  {categorySigns.map((sign) => (
                    <article
                      key={sign.word}
                      className="rounded-2xl border border-card-border bg-card p-4 sm:p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="text-base font-bold text-foreground">
                          {sign.word}
                        </h4>
                        <span className="shrink-0 rounded-full bg-primary-light text-primary text-xs font-bold px-3 py-1">
                          {sign.ageRange}
                        </span>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed mb-2">
                        {sign.description}
                      </p>
                      {sign.tip && (
                        <div className="rounded-lg bg-card-alt p-3 mt-2">
                          <p className="text-xs text-muted leading-relaxed">
                            <strong className="text-foreground">Tip:</strong>{" "}
                            {sign.tip}
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* FAQ Section */}
        <div className="mb-10">
          <FAQSection items={signLanguageFaqItems} />
        </div>

        <BottomLine
          summary="Baby sign language is a safe, evidence-based way to help your baby communicate before they can talk. Research consistently shows that signing does not delay speech -- in fact, signing babies often develop larger vocabularies and speak sooner. Starting with a few simple signs around 6 to 8 months can reduce frustration and strengthen your bond."
        />

        {/* Sources */}
        <section className="mb-4 mt-10">
          <div className="rounded-xl bg-card-alt p-5">
            <h2 className="text-sm font-bold text-foreground mb-2">Sources</h2>
            <ul className="flex flex-col gap-1.5">
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge mr-1.5">Research</span>
                Acredolo, L. &amp; Goodwyn, S. (2002). &ldquo;Baby Signs: How
                to Talk with Your Baby Before Your Baby Can Talk.&rdquo;
                Contemporary Books. Landmark study showing signing babies
                develop spoken language faster than non-signers.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge mr-1.5">NIH</span>
                Goodwyn, S. W., Acredolo, L. P., &amp; Brown, C. A. (2000).
                &ldquo;Impact of Symbolic Gesturing on Early Language
                Development.&rdquo; Journal of Nonverbal Behavior, 24(2),
                81-103. NIH-funded research.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge source-badge-aap mr-1.5">
                  AAP
                </span>
                American Academy of Pediatrics. &ldquo;Language Development in
                Toddlers.&rdquo; HealthyChildren.org. Supports gesture-based
                communication as a normal part of language development.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge mr-1.5">ASL</span>
                National Association of the Deaf. American Sign Language
                resources and sign descriptions referenced for accurate hand
                movements.
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted text-center leading-relaxed pb-4 mt-8">
          This guide is for educational purposes only and is not a substitute
          for professional medical or developmental advice. Every baby develops
          at their own pace. If you have concerns about your baby&apos;s
          communication or language development, consult your pediatrician or a
          speech-language pathologist. All data stays on your device.
        </p>
      </div>
    </article>
  );
}
