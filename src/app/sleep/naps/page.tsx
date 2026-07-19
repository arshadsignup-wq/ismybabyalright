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
  title: "Nap Schedules and Wake Windows by Age",
  description:
    "Age-by-age nap guide with wake windows from newborn to 3 years. Covers number of naps, nap length, nap transitions, and signs your baby is ready to drop a nap. Based on pediatric sleep research.",
  alternates: { canonical: "/sleep/naps" },
  openGraph: {
    title: "Nap Schedules and Wake Windows by Age",
    description:
      "Complete guide to baby and toddler naps including wake windows, schedules, transitions, and troubleshooting by age.",
  },
};

const faqItems = [
  {
    question: "How do I know my baby is ready to drop a nap?",
    answer:
      "Signs your baby is ready to drop a nap include: consistently refusing one nap for 2 or more weeks (not just a few days), taking a very long time to fall asleep for one nap, the last nap pushing bedtime too late, or sleeping well with the dropped nap and not showing overtiredness signs. The transition should be gradual -- do not drop a nap based on one bad week, as regressions and illness can temporarily disrupt naps.",
  },
  {
    question: "Why does my baby only nap for 30 minutes?",
    answer:
      "Short naps (30 to 45 minutes) are developmentally normal for babies under 5 to 6 months. At this age, babies often wake after one sleep cycle because they have not yet learned to connect cycles during the day. After 6 months, if short naps persist, common causes include incorrect wake windows (too short or too long), sleep associations (needing help to reconnect cycles), or an overtired state.",
  },
  {
    question: "Should naps be in a dark room or is light okay?",
    answer:
      "For babies over 8 weeks, napping in a dark room helps promote melatonin production and longer naps. Light exposure during naps can prevent babies from connecting sleep cycles. Blackout curtains are particularly helpful for early morning naps and for babies who are sensitive to light. However, one nap per day in lighter conditions (such as a stroller nap) is unlikely to cause problems if other naps are in a dark environment.",
  },
  {
    question: "What is the best wake window before bedtime?",
    answer:
      "The last wake window of the day (before bedtime) is typically the longest. For a 4-month-old, this might be 2 to 2.5 hours; for a 6-month-old, 2.5 to 3 hours; for a 9-month-old, 3 to 3.5 hours; for a 12-month-old, 3.5 to 4 hours; and for a toddler on one nap, 4.5 to 5.5 hours. Getting this window right is critical for easy bedtimes.",
  },
  {
    question: "When do babies transition from 2 naps to 1?",
    answer:
      "Most babies transition from 2 naps to 1 between 14 and 18 months of age. Some babies may appear ready around 12 months during the 12-month regression but actually still need two naps. Signs of true readiness include consistently refusing the second nap for 2 or more weeks while maintaining good nighttime sleep and mood throughout the day.",
  },
];

const takeaways = [
  "Wake windows (time awake between sleeps) are the most reliable guide for nap timing.",
  "Newborns nap frequently (4-6 naps); by 18 months most toddlers are on one nap.",
  "Short naps (30-45 min) are normal before 6 months -- babies learn to lengthen naps with time.",
  "Nap transitions (dropping a nap) happen around 3-4 mo, 6-8 mo, 14-18 mo, and 2.5-3.5 years.",
  "An overtired baby actually sleeps worse -- watch for sleepy cues and follow wake windows.",
  "Dark room, white noise, and a brief nap routine help signal the brain that it is sleep time.",
];

export default function NapsPage() {
  const contentSchema = getContentPageSchema({
    name: "Nap Schedules and Wake Windows by Age",
    description:
      "Comprehensive guide to baby and toddler naps including wake windows, schedules, transitions, and troubleshooting.",
    path: "/sleep/naps",
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
    { name: "Naps" },
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
          { label: "Naps" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Nap Schedules and Wake Windows by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Daytime sleep is essential for your baby&apos;s brain development, mood
          regulation, and nighttime sleep quality. This guide covers age-appropriate
          nap schedules, wake windows, nap transitions, and troubleshooting common
          nap problems from newborn through preschool.
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
            Understanding wake windows
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            A wake window is the amount of time your baby can comfortably stay awake
            between sleep periods. Getting wake windows right is the single most
            impactful thing you can do for nap quality. Too short a window means your
            baby is not tired enough to fall asleep easily; too long means they become
            overtired, which paradoxically makes it harder to fall asleep and stay asleep
            due to elevated cortisol.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Wake windows increase as babies age. Sleepy cues (eye rubbing, yawning,
            fussiness, zoning out) are helpful but become less reliable after 4 months
            as babies become more socially engaged. Using age-appropriate wake window
            ranges as a guide is more consistent than relying on cues alone.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Nap guide by age
          </h2>

          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Newborn (0-8 weeks)</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 5-8 per day (no set schedule)</li>
                <li><strong>Wake windows:</strong> 45-90 minutes</li>
                <li><strong>Total daytime sleep:</strong> 6-8 hours</li>
                <li><strong>Notes:</strong> Follow sleepy cues; naps anywhere are fine at this age. No schedule needed.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">2-3 months</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 4-5 per day</li>
                <li><strong>Wake windows:</strong> 1-1.5 hours</li>
                <li><strong>Total daytime sleep:</strong> 4-6 hours</li>
                <li><strong>Notes:</strong> Last nap may be a short catnap. Naps begin to consolidate.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">4-5 months</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 3-4 per day</li>
                <li><strong>Wake windows:</strong> 1.5-2.5 hours</li>
                <li><strong>Total daytime sleep:</strong> 3.5-5 hours</li>
                <li><strong>Notes:</strong> Short naps (30-45 min) are still common. 4th nap is a brief catnap if needed.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">6-8 months</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 2-3 per day (transition to 2 naps around 7-8 months)</li>
                <li><strong>Wake windows:</strong> 2-3 hours</li>
                <li><strong>Total daytime sleep:</strong> 2.5-3.5 hours</li>
                <li><strong>Notes:</strong> Naps often lengthen to 1-2 hours. 3rd nap (if kept) should be short.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">9-12 months</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 2 per day</li>
                <li><strong>Wake windows:</strong> 2.5-3.5 hours</li>
                <li><strong>Total daytime sleep:</strong> 2-3 hours</li>
                <li><strong>Notes:</strong> Solid 2-nap schedule. Morning nap 1-1.5 hours, afternoon nap 1-2 hours.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">12-18 months</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 2 dropping to 1 (most transition between 14-18 months)</li>
                <li><strong>Wake windows:</strong> 3-4.5 hours (up to 5 hours before bed on 1 nap)</li>
                <li><strong>Total daytime sleep:</strong> 2-3 hours</li>
                <li><strong>Notes:</strong> Do not rush the transition to one nap. Keep two naps until consistently refusing one for 2+ weeks.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">18 months - 3 years</p>
              <ul className="space-y-1 text-sm text-muted">
                <li><strong>Naps:</strong> 1 per day (dropped around 2.5-3.5 years)</li>
                <li><strong>Wake windows:</strong> 5-6 hours before nap, 4.5-5.5 hours after nap</li>
                <li><strong>Total daytime sleep:</strong> 1.5-2.5 hours</li>
                <li><strong>Notes:</strong> Single midday nap. Many children transition to quiet time by age 3-3.5.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Nap transitions
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Nap transitions are the process of dropping a nap. They typically take 2 to
            4 weeks to fully settle. During the transition, you may need to alternate
            between the old and new schedule based on how your baby slept the night
            before and how the earlier nap went.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>4 to 3 naps:</strong> Around 4-5 months. Drop the late catnap when wake windows extend beyond 2 hours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>3 to 2 naps:</strong> Around 7-8 months. Drop the third nap when it pushes bedtime too late.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>2 to 1 nap:</strong> Around 14-18 months. The most challenging transition. Move to a single midday nap.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>1 to 0 naps:</strong> Around 2.5-3.5 years. Replace with quiet time. May need earlier bedtime temporarily.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Troubleshooting nap problems
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Short naps:</strong> Extend wake windows slightly (10-15 min). Ensure the room is very dark. Try leaving baby for 10 minutes after waking to see if they resettle.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Nap refusal:</strong> Check if the wake window is too short (baby not tired enough) or too long (overtired and wired).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Only naps while held:</strong> Practice putting baby down drowsy but awake for at least one nap per day to build the skill gradually.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Different nap lengths:</strong> Morning naps are biologically easier (driven by circadian rhythm). Afternoon naps are harder and often shorter -- this is normal.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Age-appropriate wake windows are the foundation of good naps. As your baby grows, they need fewer naps with longer awake periods between them. Short naps are normal before 6 months. Nap transitions are gradual processes that take weeks to settle. When in doubt, a brief period of offering the old schedule helps determine true readiness for a transition versus a temporary regression." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
