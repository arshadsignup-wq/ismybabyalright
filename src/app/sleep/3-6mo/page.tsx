import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import LastReviewed from "@/components/shared/LastReviewed";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from "@/components/shared/BottomLine";
import {
  getBreadcrumbSchema,
  getContentPageSchema,
  getFAQPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "3-6 Month Sleep Guide: Schedules and Milestones",
  description:
    "Complete sleep guide for 3 to 6 month old babies. Covers the 4-month regression, nap transitions, emerging schedules, wake windows, swaddle transition, and when to start sleep training.",
  alternates: { canonical: "/sleep/3-6mo" },
  openGraph: {
    title: "3-6 Month Sleep Guide: Schedules and Milestones",
    description:
      "Navigate the 3-6 month sleep stage including the 4-month regression, nap consolidation, and readiness for sleep training.",
  },
};

const faqItems = [
  {
    question: "What does the 4-month sleep regression look like?",
    answer:
      "The 4-month regression typically involves: waking every 1 to 2 hours at night (where previously your baby may have slept 4 to 6 hour stretches), short naps of exactly 30 to 45 minutes, increased fussiness at bedtime, and difficulty settling. This happens because your baby's sleep architecture is permanently maturing from 2 sleep stages to 4, creating more transition points where they can fully wake.",
  },
  {
    question: "How do I transition out of the swaddle?",
    answer:
      "You must stop swaddling as soon as your baby shows signs of rolling (often around 8 to 12 weeks, sometimes later). Options include: cold turkey (remove the swaddle entirely and use a sleep sack), one arm out for a few nights then both arms out, or using a transitional product like a Merlin suit or arms-free swaddle. Most babies adjust within 3 to 7 nights regardless of method.",
  },
  {
    question: "How many naps should a 5-month-old take?",
    answer:
      "Most 5-month-olds take 3 naps per day, though some may still need a 4th catnap on short nap days. The typical pattern is: morning nap (1 to 1.5 hours), afternoon nap (1 to 1.5 hours), and a late afternoon catnap (30 to 45 minutes). Total daytime sleep should be around 3 to 4 hours. The 4th nap is dropped when your baby can comfortably handle longer wake windows (around 2 to 2.5 hours).",
  },
  {
    question: "Is my 4-month-old ready for sleep training?",
    answer:
      "Many 4-month-olds are developmentally ready for sleep training, but check with your pediatrician first. Prerequisites include: at least 4 months old (adjusted age for preemies), gaining weight well, no acute medical concerns, and you have an age-appropriate schedule in place. The post-4-month-regression period is actually an ideal time to teach independent sleep because the new sleep architecture is now in place.",
  },
  {
    question: "Should I drop night feeds at this age?",
    answer:
      "Most babies between 3 and 6 months still need 1 to 2 night feeds. By 6 months, many can go with 0 to 1 feed. Do not eliminate night feeds without your pediatrician's guidance, especially for breastfed babies. You can sleep train while maintaining night feeds -- teach baby to fall asleep independently at bedtime while still offering a feed at a scheduled time.",
  },
];

const takeaways = [
  "This age brings the biggest sleep change: the 4-month regression (permanent sleep architecture shift).",
  "Wake windows expand to 1.5-2.5 hours, and a rough schedule begins to emerge.",
  "Most babies move from 4-5 naps down to 3 naps during this period.",
  "The swaddle must be dropped when rolling begins (typically 3-4 months).",
  "Babies can physiologically sleep 6-8 hour stretches but may still need 1-2 night feeds.",
  "This is the earliest age for formal sleep training (4+ months, with pediatrician approval).",
];

export default function ThreeToSixMonthsPage() {
  const contentSchema = getContentPageSchema({
    name: "3-6 Month Sleep Guide: Schedules and Milestones",
    description:
      "Complete guide to baby sleep from 3 to 6 months including the 4-month regression, schedule development, and sleep training readiness.",
    path: "/sleep/3-6mo",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Clinical Guidelines", url: "https://www.aap.org/en/clinical-guidance/" },
      { name: "NIH Safe to Sleep Campaign", url: "https://safetosleep.nichd.nih.gov/" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "3-6 Months" },
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Sleep", href: "/sleep" },
          { label: "3-6 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          3-6 Month Sleep Guide: Schedules and Milestones
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The 3 to 6 month period is a time of enormous sleep change. Your baby&apos;s
          brain is reorganizing how it sleeps, a circadian rhythm is solidifying, and
          for the first time, a real schedule becomes possible. This stage also
          contains the most significant regression (4 months) and the earliest
          opportunity for sleep training.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NIH"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What changes between 3 and 6 months
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            This period brings three major developments that affect sleep:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Sleep architecture matures (4 months):</strong> Your baby transitions from 2 sleep stages to 4 (like adults). This creates more light sleep and more cycle transitions where they can wake.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Circadian rhythm solidifies:</strong> Melatonin production becomes robust, creating a clear preference for nighttime sleep. A predictable bedtime (between 6 and 7:30 PM) becomes important.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Motor development (rolling):</strong> Rolling ability means the swaddle must go, which can temporarily disrupt sleep. Babies may also practice rolling in the crib, causing additional wakings.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sleep needs at 3-6 months
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-2 text-sm text-muted">
              <li><strong>Total sleep (24 hours):</strong> 14-16 hours</li>
              <li><strong>Nighttime sleep:</strong> 10-12 hours (with 1-2 feeds)</li>
              <li><strong>Daytime sleep:</strong> 3-4.5 hours across 3-4 naps</li>
              <li><strong>Wake windows:</strong> 1.5-2.5 hours (increasing throughout the day)</li>
              <li><strong>Bedtime:</strong> 6:00-7:30 PM</li>
              <li><strong>Night feeds:</strong> 1-2 (some babies still need 2, many can do 1 by 6 months)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample schedules
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">4 months (4 naps)</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>Wake: 6:30 AM</li>
                <li>Nap 1: 8:00-9:30 AM (1.5 hr wake window)</li>
                <li>Nap 2: 11:00 AM-12:30 PM (1.5 hr wake window)</li>
                <li>Nap 3: 2:15-3:15 PM (1.75 hr wake window)</li>
                <li>Nap 4: 4:45-5:15 PM (catnap, 1.5 hr wake window)</li>
                <li>Bedtime: 7:00 PM (1.75 hr wake window)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">5-6 months (3 naps)</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>Wake: 6:30 AM</li>
                <li>Nap 1: 8:30-10:00 AM (2 hr wake window)</li>
                <li>Nap 2: 12:00-1:30 PM (2 hr wake window)</li>
                <li>Nap 3: 3:30-4:15 PM (catnap, 2 hr wake window)</li>
                <li>Bedtime: 6:30-7:00 PM (2.25-2.5 hr wake window)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted mt-3">
            Note: These are examples only. Your baby&apos;s schedule will vary based on their individual needs and wake time.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The swaddle transition
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            When your baby shows signs of rolling (pushing up on arms during tummy
            time, rolling to one side, or successfully rolling), the swaddle must be
            stopped immediately. This is a safety issue -- a swaddled baby who rolls
            face-down cannot use their arms to push up or reposition.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">Swaddle transition options</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Cold turkey:</strong> Remove swaddle, use a sleep sack. Most babies adjust in 3-5 nights.</li>
              <li><strong>One arm out:</strong> Free one arm for a few nights, then both arms. Takes about a week.</li>
              <li><strong>Transitional product:</strong> Merlin suit, Zipadee-Zip, or Love to Dream arms-up suit provides some compression without restricting arm movement.</li>
            </ul>
          </div>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Expect some disruption regardless of method. The startle reflex typically
            resolves by 4 to 5 months, so if your baby has not rolled yet but is
            approaching 4 months, they may adjust quickly even without a transitional
            product.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Is your baby ready for sleep training?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            After the 4-month regression settles (typically 2 to 4 weeks after it
            begins), many families find this is the ideal time to teach independent
            sleep. Your baby now has mature sleep architecture, a working circadian
            rhythm, and the developmental capacity to self-soothe.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Prerequisites:</strong> 4+ months old (adjusted for prematurity), gaining weight well, pediatrician approval, no acute illness.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Before starting:</strong> Establish an age-appropriate schedule, optimize the sleep environment, create a consistent bedtime routine, and decide on your method.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Night feeds:</strong> You can sleep train while keeping 1 to 2 scheduled night feeds. Teach independent sleep at bedtime first.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common challenges at this age
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>30-minute naps:</strong> Very common at this age. Naps often consolidate (lengthen) between 5 and 6 months as the brain matures. Independent sleep at nap onset helps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Early morning waking (before 6 AM):</strong> Often caused by overtiredness (bedtime too late), too much daytime sleep, or light leaking into the room at dawn.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Bedtime taking too long:</strong> The last wake window may need to be extended. At 5-6 months, the last window is typically 2 to 2.5 hours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Rolling in the crib:</strong> Practice rolling extensively during daytime tummy time. Once baby can roll both ways, they will self-resolve at night. Do not flip them back.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="The 3-6 month stage is transformative for baby sleep. The 4-month regression is challenging but represents important brain development. Once it passes, your baby has the architecture needed for longer sleep stretches and the capacity for independent sleep. Focus on age-appropriate wake windows, transition out of the swaddle safely, and consider whether sleep training is right for your family. This is the age where things begin to get better." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
