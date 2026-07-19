import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RelatedGuides from "@/components/guides/RelatedGuides";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import AuthoritativeQuote from '@/components/shared/AuthoritativeQuote';
import { getQuotesForTopic } from '@/data/authoritative-quotes';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import { tummyTimeByAge, troubleshooting, benefits } from "@/data/tummy-time/data";

export const metadata: Metadata = {
  title: "Tummy Time Guide by Age: How Much, Positions & Tips",
  description:
    "Evidence-based tummy time guide from newborn to 6 months. Daily goals, positions, troubleshooting for babies who hate tummy time, and safety tips based on AAP guidelines.",
  alternates: {
    canonical: "/tummy-time",
  },
  openGraph: {
    title: "Tummy Time Guide by Age | Is My Baby Alright?",
    description:
      "Evidence-based tummy time guide from newborn to 6 months. Daily goals, positions, and troubleshooting tips.",
  },
};

const faqItems = [
  {
    question: "When should I start tummy time with my newborn?",
    answer:
      "You can start tummy time from day one. The AAP recommends beginning tummy time as soon as you come home from the hospital. Start with short sessions (1-2 minutes) on your chest during skin-to-skin contact.",
  },
  {
    question: "How much tummy time does my baby need each day?",
    answer:
      "Newborns need just 3-5 minutes total per day, gradually increasing to 60-90 minutes by 3-4 months. The AAP recommends aiming for at least 15-30 minutes total per day by 7 weeks of age, spread across multiple short sessions.",
  },
  {
    question: "What if my baby hates tummy time?",
    answer:
      "Many babies fuss during tummy time, especially at first. Start on your chest instead of the floor, keep sessions very short (even 30 seconds), get face-to-face on the floor, and try after naps when baby is rested. Some fussing is normal and expected  -  hard crying is your cue to stop and try again later.",
  },
  {
    question: "Can I do tummy time after feeding?",
    answer:
      "It is best to wait 20-30 minutes after feeding before tummy time to reduce spit-up. The pressure on baby's tummy can push milk back up. Try tummy time after a nap and before the next feed for best results.",
  },
  {
    question: "Is tummy time safe for babies with reflux?",
    answer:
      "Yes, but use modifications. Wait at least 30 minutes after feeding, use an inclined position (your chest while reclining or a nursing pillow), keep sessions very short, and do more sessions per day. Talk to your pediatrician about specific recommendations for your baby.",
  },
  {
    question: "Does holding my baby upright count as tummy time?",
    answer:
      "Holding baby upright (such as against your shoulder) does help strengthen neck muscles but does not fully replace tummy time. True tummy time  -  where baby is on their stomach working against gravity  -  provides more comprehensive strengthening for the neck, shoulders, arms, and core muscles needed for motor milestones.",
  },
];

const contentSchema = getContentPageSchema({
  name: 'Tummy Time Guide by Age: How Much, Positions & Tips',
  description:
    'Evidence-based tummy time guide from newborn to 6 months. Daily goals, positions, troubleshooting for babies who hate tummy time, and safety tips based on AAP guidelines.',
  path: '/tummy-time',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tummy Time' },
]);

const faqJsonLd = getFAQPageSchema(faqItems);

export default function TummyTimePage() {
  const topicQuotes = getQuotesForTopic('tummy-time');

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

      <Breadcrumbs items={[{ label: "Tummy Time Guide" }]} />

      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-foreground">Tummy Time Guide</h1>
          <MedicalReviewAttribution sources={['AAP']} />
          <LastReviewed date="2026-07-01" />
          <p className="text-lg text-muted leading-relaxed mt-2 max-w-2xl">
            Tummy time is one of the most important activities for your baby's
            physical development. The{" "}
            <strong className="text-foreground">
              American Academy of Pediatrics (AAP)
            </strong>{" "}
            recommends starting from day one  -  even just a few minutes at a time.
            Here is everything you need to know, by age.
          </p>
        </section>

        <KeyTakeaways
          takeaways={[
            "Start tummy time from day one -- even 1-2 minutes on your chest during skin-to-skin counts.",
            "Aim for 15-30 minutes total per day by 7 weeks, building up to 60-90 minutes by 3-4 months.",
            "Always supervise tummy time on a firm, flat surface -- if baby falls asleep, roll them onto their back.",
            "Many babies fuss at first; try shorter sessions, different positions, and face-to-face interaction to help.",
            "Tummy time builds the neck, shoulder, arm, and core strength needed for rolling, crawling, and sitting.",
          ]}
        />

        {topicQuotes.length > 0 && (
          <AuthoritativeQuote
            quote={topicQuotes[0].quote}
            source={topicQuotes[0].source}
            sourceUrl={topicQuotes[0].sourceUrl}
            organization={topicQuotes[0].organization}
          />
        )}

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-foreground mb-4">Why Tummy Time Matters</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
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

        {/* By-Age Progression */}
        <section className="mb-10">
          <h2 className="text-foreground mb-4">Tummy Time by Age</h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Every baby develops at their own pace. These are general guidelines
            based on AAP recommendations  -  adjust to what works for your baby.
          </p>

          <div className="flex flex-col gap-5">
            {tummyTimeByAge.map((stage, index) => (
              <article
                key={index}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {stage.ageRange}
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary-light text-primary text-xs font-bold px-3 py-1">
                    {stage.dailyGoal.split(",")[0]}
                  </span>
                </div>

                {/* Daily goal and session length */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="rounded-lg bg-card-alt p-3">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                      Daily Goal
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {stage.dailyGoal}
                    </p>
                  </div>
                  <div className="rounded-lg bg-card-alt p-3">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                      Session Length
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {stage.sessionLength}
                    </p>
                  </div>
                </div>

                {/* Positions */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    Positions to Try
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {stage.positions.map((position, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-foreground leading-relaxed"
                      >
                        <span className="text-primary shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="5" />
                          </svg>
                        </span>
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    Tips
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {stage.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted leading-relaxed"
                      >
                        <span className="text-sunny shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to expect */}
                <div className="rounded-lg bg-sky-light border border-sky/20 p-3">
                  <p className="text-xs font-semibold text-sky-foreground uppercase tracking-wide mb-1">
                    What to Expect
                  </p>
                  <p className="text-sm text-sky-foreground leading-relaxed">
                    {stage.whatToExpect}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-foreground mb-4">Troubleshooting</h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Tummy time does not always go smoothly  -  and that is completely
            normal. Here are solutions for the most common challenges.
          </p>

          <div className="flex flex-col gap-4">
            {troubleshooting.map((item, index) => (
              <article
                key={index}
                className="rounded-xl border border-[#E8E2D9] bg-white p-5"
              >
                <h3 className="text-base font-bold text-foreground mb-3 flex gap-2 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral-light text-coral text-xs font-bold mt-0.5">
                    ?
                  </span>
                  {item.problem}
                </h3>
                <ul className="flex flex-col gap-2 ml-8">
                  {item.solutions.map((solution, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-foreground leading-relaxed"
                    >
                      <span className="text-safe shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Safety Notes */}
        <section className="mb-10">
          <div className="rounded-xl bg-monitor-light border-1.5 border-monitor-border p-5">
            <h2 className="text-base font-bold text-monitor-foreground mb-3 flex items-center gap-2">
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
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              Safety Notes
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                "Always supervise tummy time  -  never leave baby unattended on their stomach",
                "Use a firm, flat surface  -  avoid soft surfaces like beds, couches, or pillows that could suffocate",
                "If baby falls asleep during tummy time, gently roll them onto their back immediately",
                "Tummy time is for awake, supervised play only  -  babies must always sleep on their back",
                "Clear the area of small objects, cords, and anything baby could grab and put in their mouth",
                "Stop tummy time if baby is crying hard or seems truly distressed  -  try again later",
                "If your baby was premature or has special medical needs, ask your pediatrician about any modifications",
              ].map((note, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-monitor-foreground leading-relaxed"
                >
                  <span className="shrink-0 mt-0.5 font-bold">
                    &bull;
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mb-10">
          <FAQSection items={faqItems} />
        </div>

        {/* Sources */}
        <section className="mb-4">
          <div className="rounded-xl bg-card-alt p-5">
            <h2 className="text-sm font-bold text-foreground mb-2">Sources</h2>
            <ul className="flex flex-col gap-1.5">
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge source-badge-aap mr-1.5">AAP</span>
                American Academy of Pediatrics. &ldquo;Back to Sleep, Tummy to Play.&rdquo;
                HealthyChildren.org.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge source-badge-aap mr-1.5">AAP</span>
                Palat, J., &amp; Palat, J. (2023). &ldquo;The Importance of Tummy Time.&rdquo;
                American Academy of Pediatrics.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge source-badge-who mr-1.5">WHO</span>
                World Health Organization. &ldquo;Guidelines on Physical Activity, Sedentary
                Behaviour and Sleep for Children Under 5 Years of Age.&rdquo; 2019.
              </li>
              <li className="text-xs text-muted leading-relaxed">
                <span className="source-badge mr-1.5">NIH</span>
                Eunice Kennedy Shriver National Institute of Child Health and Human Development.
                &ldquo;Safe to Sleep Campaign.&rdquo;
              </li>
            </ul>
          </div>
        </section>

        {/* Related Guides */}
        <RelatedGuides currentPath="/tummy-time" />

        {/* Disclaimer */}
        <p className="text-xs text-muted text-center leading-relaxed pb-4 mt-8">
          This guide is based on AAP and WHO recommendations. It is educational
          content, not medical advice. Every baby is different  -  discuss your
          baby&apos;s development with your pediatrician. If your baby was
          premature or has medical conditions, ask your doctor about modified
          tummy time approaches.
        </p>

        <BottomLine summary="Tummy time is one of the most important activities for your baby's physical development. Start with short sessions from day one and gradually increase as your baby gets stronger. If your baby fusses during tummy time, try different positions and keep sessions short — even a few minutes at a time counts." />

        <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>
      </div>
    </article>
  );
}
