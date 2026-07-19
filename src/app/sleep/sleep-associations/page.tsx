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
  title: "Sleep Associations: What They Are and How to Break Them",
  description:
    "Learn what sleep associations are, which ones cause night waking, and evidence-based methods to help your baby fall asleep independently. Covers feeding to sleep, rocking, pacifiers, and more.",
  alternates: { canonical: "/sleep/sleep-associations" },
  openGraph: {
    title: "Sleep Associations: What They Are and How to Break Them",
    description:
      "Understand sleep associations, which are helpful vs. problematic, and how to gently teach your baby independent sleep skills.",
  },
};

const faqItems = [
  {
    question: "Is feeding to sleep always a problem?",
    answer:
      "Not necessarily. If your baby feeds to sleep at bedtime but sleeps through the night (or wakes only for genuine hunger feeds), there is no problem to fix. Feeding to sleep only becomes an issue when it creates a pattern of frequent night waking where your baby needs to feed to reconnect every sleep cycle (every 1 to 2 hours). If it works for your family, it is not broken.",
  },
  {
    question: "At what age should I stop rocking my baby to sleep?",
    answer:
      "There is no rule that says you must stop rocking at a particular age. However, if rocking to sleep is causing frequent night waking (because baby needs to be re-rocked every cycle), or if your baby is getting too heavy to rock comfortably, these are signs it may be time to transition. Many families make this change between 4 and 8 months when babies are developmentally ready to learn self-settling.",
  },
  {
    question: "Is white noise a sleep association?",
    answer:
      "White noise is considered a positive sleep association because it remains constant throughout the night. Your baby does not need you to restart it at each cycle transition. As long as the white noise plays continuously through the sleep period, it does not create the same dependence issues as associations that require parental intervention (feeding, rocking, replacing a pacifier).",
  },
  {
    question: "Should I take the pacifier away to improve sleep?",
    answer:
      "If your baby wakes multiple times per night because the pacifier fell out and they cannot replace it, you have two options: teach them to replace it themselves (possible from around 7 to 8 months -- scatter several pacifiers in the crib) or remove it entirely. Many families find that 2 to 3 nights without the pacifier resolves the frequent wakings. The AAP recommends pacifier use for SIDS risk reduction, so weigh this benefit against the sleep disruption.",
  },
  {
    question: "How long does it take to change a sleep association?",
    answer:
      "With consistency, most families see significant improvement within 3 to 7 nights when using a direct approach (placing baby down awake and allowing them to practice self-settling). Gradual approaches (slowly reducing rocking, shortening feeds) take 1 to 3 weeks. The key is consistency -- partial changes or intermittent old-habit-reinforcement extends the process significantly.",
  },
];

const takeaways = [
  "A sleep association is anything your baby links with falling asleep.",
  "Problematic associations require parental intervention at every sleep cycle (every 1-2 hours).",
  "Positive associations (dark room, white noise, sleep sack) remain constant and do not cause waking.",
  "Feeding, rocking, and patting to sleep are the most common problematic associations after 4 months.",
  "Breaking a sleep association means teaching your baby to fall asleep without that specific condition.",
  "The method used matters less than consistency -- any approach works if applied reliably.",
];

export default function SleepAssociationsPage() {
  const contentSchema = getContentPageSchema({
    name: "Sleep Associations: What They Are and How to Break Them",
    description:
      "Comprehensive guide to understanding and changing sleep associations that cause frequent night waking.",
    path: "/sleep/sleep-associations",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Clinical Guidelines", url: "https://www.aap.org/en/clinical-guidance/" },
      { name: "National Sleep Foundation", url: "https://www.sleepfoundation.org/" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Sleep Associations" },
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
          { label: "Sleep Associations" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Sleep Associations: What They Are and How to Break Them
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          A sleep association is any condition, object, or action that your baby
          connects with falling asleep. Some associations are helpful; others
          create a pattern of frequent night waking. Understanding the difference
          is the first step to better sleep for your whole family.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NSF"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What is a sleep association?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            All humans have sleep associations -- adults might need their pillow, a
            dark room, or lying on a particular side. For babies, sleep associations
            are the conditions present when they fall asleep. If those conditions are
            still present when they briefly wake between cycles (every 60 to 120
            minutes), they smoothly transition back to sleep. If the conditions have
            changed (parent is gone, rocking stopped, bottle is empty), they wake
            fully and cry for those conditions to be restored.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This is why pediatric sleep experts emphasize that how your baby falls
            asleep at bedtime determines how they sleep all night. The conditions at
            sleep onset need to be present throughout the night.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Positive vs. problematic associations
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Positive (independent)</p>
              <p className="text-xs text-muted mb-2">Remain constant all night; no intervention needed</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>Dark room</li>
                <li>Continuous white noise</li>
                <li>Sleep sack</li>
                <li>Crib/own sleep space</li>
                <li>Thumb sucking (self-directed)</li>
                <li>Comfort object (for 12+ months)</li>
                <li>Cool room temperature</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Problematic (dependent)</p>
              <p className="text-xs text-muted mb-2">Require parental intervention to maintain</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>Feeding to sleep (breast or bottle)</li>
                <li>Rocking or bouncing to sleep</li>
                <li>Patting or shushing to sleep</li>
                <li>Being held while sleeping</li>
                <li>Pacifier (if baby cannot replace it)</li>
                <li>Motion (car, stroller, swing)</li>
                <li>Co-sleeping (parent presence)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How sleep associations cause night waking
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Imagine falling asleep in your bed with your pillow, then waking at 2 AM
            and finding yourself on the kitchen floor with no pillow. You would be
            startled and need your original conditions back before you could sleep
            again. This is what happens to a baby who falls asleep being rocked and
            wakes in a still crib -- the conditions have changed and they need help
            to restore them.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Since babies naturally wake between sleep cycles (every 60 to 120
            minutes in the first half of the night, and every 45 to 60 minutes in
            the early morning), a problematic sleep association can result in a baby
            needing help 6 to 8 or more times per night. This is exhausting for
            parents and disrupts the baby&apos;s sleep quality as well.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Addressing feeding to sleep
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Feeding to sleep is the most common problematic association because it
            develops naturally (babies are sleepy after eating) and works beautifully
            in the newborn phase. It only becomes an issue after 4 months when sleep
            architecture matures and cycle transitions become more frequent.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Gradual approach:</strong> Feed earlier in the routine (before bath or books) so feeding is separated from sleep onset by 20 to 30 minutes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Wake before placing:</strong> If baby falls asleep during the feed, gently rouse them (change diaper, tickle feet) before placing in the crib.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Direct approach:</strong> Complete the feed, then place baby in the crib awake and allow them to fall asleep independently using a sleep training method.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Addressing rocking to sleep
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Rocking creates a motion-dependent association. Babies who need rocking
            to fall asleep will need re-rocking at every partial awakening overnight.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Gradual reduction:</strong> Rock until very drowsy (but not asleep), then place down. Over several nights, reduce rocking until baby is placed down more awake.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Transfer to crib drowsy:</strong> Rock until drowsy, then sit in the chair next to the crib with a hand on baby while they finish falling asleep.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Cold turkey:</strong> Complete your bedtime routine and place baby in the crib awake. Use a sleep training method for the settling period.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The pacifier question
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Pacifiers are uniquely complex because the AAP recommends them for SIDS
            risk reduction. They become problematic when a baby wakes multiple times
            because the pacifier fell out and they cannot replace it themselves.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Teach self-replacement (7-8+ months):</strong> Scatter 3 to 5 pacifiers in the crib. Practice during the day by guiding baby&apos;s hand to find and insert it. Most babies master this within a week.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Remove entirely:</strong> If replacing is not working, removing the pacifier typically results in 2 to 3 harder nights followed by dramatic improvement. Many families are surprised at how quickly babies adjust.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to address sleep associations
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            You do not need to change anything that is working for your family. Sleep
            associations only need to be addressed when:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Night waking is frequent (3+ times) and disruptive to the family</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Your baby is 4+ months old and developmentally ready for independent sleep</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>The current approach is unsustainable (you cannot keep rocking a 25-pound baby)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Your own sleep deprivation is affecting your health, mood, or safety</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Sleep associations are the conditions present when your baby falls asleep. Problematic ones require your intervention at every sleep cycle, causing frequent night waking. The solution is helping your baby learn to fall asleep with conditions that remain constant all night -- dark room, white noise, sleep sack, and their own self-soothing skills. You only need to make changes if the current situation is not working for your family." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
