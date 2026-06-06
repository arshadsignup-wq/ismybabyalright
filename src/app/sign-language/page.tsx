import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SignLanguagePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        </section>

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
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="rounded-xl border border-[#E8E2D9] bg-white group"
              >
                <summary className="cursor-pointer p-5 text-sm font-bold text-foreground list-none flex items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 text-muted transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-4">
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

        {/* Disclaimer */}
        <p className="text-xs text-muted text-center leading-relaxed pb-4 mt-8">
          This guide is for educational purposes only and is not a substitute
          for professional medical or developmental advice. Every baby develops
          at their own pace. If you have concerns about your baby&apos;s
          communication or language development, consult your pediatrician or a
          speech-language pathologist. All data stays on your device.
        </p>
      </div>
    </div>
  );
}
