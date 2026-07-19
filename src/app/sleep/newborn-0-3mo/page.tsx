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
  title: "Newborn Sleep Guide (0-3 Months): What to Expect",
  description:
    "Everything you need to know about newborn sleep from birth to 3 months. Covers total sleep needs, wake windows, safe swaddling, day-night confusion, feeding schedules, and what is normal.",
  alternates: { canonical: "/sleep/newborn-0-3mo" },
  openGraph: {
    title: "Newborn Sleep Guide (0-3 Months): What to Expect",
    description:
      "Complete guide to newborn sleep patterns, wake windows, safe swaddling, and realistic expectations for the first 3 months.",
  },
};

const faqItems = [
  {
    question: "How much should a newborn sleep per day?",
    answer:
      "Newborns typically sleep 14 to 17 hours per day, but in short stretches of 2 to 4 hours around the clock. Some newborns sleep as little as 11 hours or as much as 19 hours and still be within normal range. The key indicator of adequate sleep is that your baby is feeding well, gaining weight, and has periods of alertness during wake time.",
  },
  {
    question: "When will my newborn sleep through the night?",
    answer:
      "Most newborns cannot sleep through the night due to small stomach capacity and the need for frequent feeding. A 6-hour stretch is considered 'sleeping through the night' for a newborn and some babies achieve this by 6 to 8 weeks, while others do not until 4 to 6 months. It is not realistic or safe to expect a newborn to go more than 4 to 5 hours without feeding in the first weeks.",
  },
  {
    question: "Should I wake my newborn to feed?",
    answer:
      "In the first 2 weeks, most pediatricians recommend waking your newborn every 2 to 3 hours during the day and every 3 to 4 hours at night to feed until birth weight is regained (usually by day 10 to 14). After birth weight is regained and your pediatrician confirms good weight gain, you can typically let your baby sleep as long as they will at night while still feeding every 2 to 3 hours during the day.",
  },
  {
    question: "Why is my newborn only sleeping 20 minutes at a time?",
    answer:
      "Short sleep periods (20 to 45 minutes) are normal for newborns, especially during the day. Newborn sleep cycles are only 30 to 50 minutes long, and they have not yet developed the ability to transition between cycles smoothly. Holding your baby for naps, using swaddling, and ensuring appropriate wake windows (45 to 90 minutes) can help extend sleep periods.",
  },
  {
    question: "Is it safe to let my newborn sleep in a swing or bouncer?",
    answer:
      "No. The AAP recommends that babies always sleep on a firm, flat surface (crib, bassinet, or play yard). Swings, bouncers, car seats, and other inclined or semi-reclined devices are not safe for sleep because of the risk of positional asphyxia (the baby's head can fall forward and restrict the airway). If your baby falls asleep in one of these, move them to a flat surface as soon as possible.",
  },
];

const takeaways = [
  "Newborns sleep 14-17 hours per day in short 2-4 hour stretches -- there is no day/night pattern yet.",
  "Wake windows are only 45-90 minutes including feeding time.",
  "There is no schedule to follow -- feed on demand and let baby sleep when tired.",
  "Swaddling is safe and helpful until baby shows signs of rolling (around 6-8 weeks).",
  "Day-night confusion is normal and typically resolves by 6-8 weeks with light exposure cues.",
  "Safe sleep rules apply from day one: back to sleep, firm flat surface, nothing in the crib.",
];

export default function Newborn0to3moPage() {
  const contentSchema = getContentPageSchema({
    name: "Newborn Sleep Guide (0-3 Months): What to Expect",
    description:
      "Comprehensive guide to newborn sleep patterns, needs, and safe practices from birth to 3 months.",
    path: "/sleep/newborn-0-3mo",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Safe Sleep Guidelines", url: "https://www.aap.org/en/patient-care/safe-sleep/" },
      { name: "NIH Safe to Sleep Campaign", url: "https://safetosleep.nichd.nih.gov/" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Newborn (0-3 Months)" },
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
          { label: "Newborn (0-3 Months)" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Newborn Sleep Guide (0-3 Months)
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The newborn phase is a period of survival and adaptation for both you and
          your baby. Sleep is irregular, unpredictable, and fragmented -- and that
          is completely normal. Understanding what to expect and what is within
          your control helps reduce anxiety during these intense first weeks.
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
            Newborn sleep patterns
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Newborns do not have a circadian rhythm (the internal clock that tells us
            to sleep at night and be awake during the day). This develops gradually
            over the first 6 to 8 weeks. Until then, your baby will sleep in short
            bursts around the clock with no regard for day or night.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Newborn sleep cycles are only 30 to 50 minutes long (compared to 90 to
            120 minutes in adults) and alternate between only two stages: active
            sleep (similar to REM) and quiet sleep (similar to deep sleep). Active
            sleep is lighter, which is why newborns startle, twitch, and make sounds
            during sleep -- this is normal and does not mean they are waking.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sleep needs by week
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Weeks 1-2 (the survival weeks)</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Total sleep:</strong> 16-18 hours per day</li>
                <li><strong>Longest stretch:</strong> 2-3 hours (sometimes 4)</li>
                <li><strong>Wake windows:</strong> 45-60 minutes (including feeding)</li>
                <li><strong>Priority:</strong> Feed on demand, sleep whenever possible, wake to feed if needed</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Weeks 3-6</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Total sleep:</strong> 15-17 hours per day</li>
                <li><strong>Longest stretch:</strong> 3-4 hours (sometimes longer at night)</li>
                <li><strong>Wake windows:</strong> 60-90 minutes</li>
                <li><strong>Changes:</strong> Day/night confusion begins to resolve, more alert periods emerge</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Weeks 6-12</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Total sleep:</strong> 14-16 hours per day</li>
                <li><strong>Longest stretch:</strong> 4-6 hours at night (some babies, not all)</li>
                <li><strong>Wake windows:</strong> 60-90 minutes</li>
                <li><strong>Changes:</strong> Circadian rhythm developing, bedtime emerging, naps may shorten</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Day-night confusion
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Many newborns have their days and nights reversed -- sleeping long
            stretches during the day and waking frequently at night. This is normal
            and typically resolves by 6 to 8 weeks as the circadian rhythm develops.
            You can help by:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Bright light during the day:</strong> Expose your baby to natural light during daytime feeds and wake windows. Keep curtains open.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Dark and quiet at night:</strong> Keep nighttime feeds in dim light (red/amber). Minimize stimulation -- no talking, playing, or eye contact.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Cap daytime naps:</strong> After 2 weeks (and once weight gain is established), you can wake your baby after 2 to 2.5 hours of daytime sleep to preserve nighttime sleep drive.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Activity during the day:</strong> Talk, sing, and interact during daytime wake windows. Make daytime engaging.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Safe swaddling
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Swaddling can help newborns sleep more soundly by suppressing the Moro
            (startle) reflex and providing a womb-like sensation. When done safely,
            it is a valuable tool for the first weeks of life.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Arms snug, hips loose:</strong> Arms should be snug against the body but hips should be free to flex and move in a frog-like position (to prevent hip dysplasia).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Back to sleep always:</strong> A swaddled baby must always be placed on their back. Never place a swaddled baby on their stomach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Stop when rolling:</strong> As soon as your baby shows any signs of rolling (often 6 to 8 weeks), stop swaddling immediately. A swaddled baby who rolls to their stomach cannot push up or reposition.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Do not overheat:</strong> Use a thin muslin or cotton swaddle. The swaddle is a layer -- adjust other clothing accordingly.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Laying the foundation (no sleep training yet)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Formal sleep training is not recommended or appropriate for newborns.
            However, you can begin building healthy habits that will make sleep
            easier in the months ahead:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Practice drowsy but awake:</strong> Try placing your baby in the crib drowsy (but not fully asleep) once a day. If it does not work, that is fine -- there is no pressure at this age.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Begin a mini bedtime routine:</strong> Even at 3 to 4 weeks, a short routine (diaper, swaddle, white noise, feed) signals that sleep is coming.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Vary sleep locations:</strong> It is okay for newborns to nap in different places (bassinet, carrier, stroller). This does not create bad habits at this age.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Watch for sleepy cues:</strong> Yawning, eye rubbing, looking away, fussing. At this age, cues are reliable -- put baby down at the first sign.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Surviving newborn sleep deprivation
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Newborn sleep deprivation is intense and affects your physical and mental
            health. Practical strategies include: sleeping when the baby sleeps (even
            if just for one nap), splitting nighttime shifts with a partner (one takes
            the first stretch, the other takes the second), accepting help from family
            and friends, and lowering standards for everything that is not feeding and
            safety. If you are feeling overwhelmed, irritable, or having thoughts of
            harming yourself or your baby, please reach out to your healthcare provider
            immediately.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Newborn sleep is biologically irregular and unpredictable. Your baby does not have a circadian rhythm yet, sleep cycles are short, and frequent feeding is essential. There is no schedule to follow and no bad habits to worry about creating. Focus on safe sleep practices, feeding on demand, and your own survival. Things begin to organize around 6 to 8 weeks and improve significantly by 3 to 4 months." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
