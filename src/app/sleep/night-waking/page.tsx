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
  title: "Why Babies Wake at Night and When to Worry",
  description:
    "Understand why your baby wakes at night by age. Covers normal night waking patterns, hunger vs habit waking, when night feeds are needed, and red flags that warrant a call to your pediatrician.",
  alternates: { canonical: "/sleep/night-waking" },
  openGraph: {
    title: "Why Babies Wake at Night and When to Worry",
    description:
      "Normal night waking patterns by age, how to tell hunger from habit, and when to call the doctor.",
  },
};

const faqItems = [
  {
    question: "How many night wakings are normal for a 6-month-old?",
    answer:
      "By 6 months, many babies can sleep a 6 to 8 hour stretch, but 1 to 2 night wakings are still within the normal range. Some 6-month-olds still genuinely need one night feed, particularly breastfed babies. If your baby is waking more than 2 to 3 times and needing help to get back to sleep each time, a sleep association (rather than hunger) is likely the cause.",
  },
  {
    question: "When can I stop night feeds?",
    answer:
      "Most healthy, full-term babies who are gaining weight well can physiologically go without night feeds by 6 to 9 months, though some pediatricians may recommend continuing one feed until 9 to 12 months for breastfed babies. Always confirm with your pediatrician before eliminating night feeds. If your baby takes a full feed (not just comfort sucking), they may still need it.",
  },
  {
    question: "Why does my baby wake at the same time every night?",
    answer:
      "Habitual waking at the same time (for example, always at 2 AM) is typically a learned pattern rather than a hunger cue. Your baby's body has become accustomed to waking at that time. This is different from random wakings which are more likely developmental or environmental. Habitual wakings can often be resolved by gradually reducing the response (shorter feeds, less intervention) or through sleep training.",
  },
  {
    question: "Is it normal for my toddler to still wake at night?",
    answer:
      "Night wakings in toddlers (12 to 24 months) are common and can be caused by teething, developmental changes, nightmares, separation anxiety, or schedule issues. About 20 to 30% of toddlers still wake at least once per night. This is within the normal range, though if it is disruptive to the family, behavioral approaches can help.",
  },
  {
    question: "Should I feed my baby every time they wake at night?",
    answer:
      "Not necessarily. After 4 to 6 months, babies can often resettle without a feed if they have independent sleep skills. Signs that a waking is hunger-driven include: it occurs 4+ hours after the last feed, baby takes a full feed (not just a few sips), and baby settles easily after feeding. Signs of a habit waking include: it occurs at the same time nightly, baby only sucks briefly, and baby seems more awake than hungry.",
  },
];

const takeaways = [
  "Night waking is biologically normal for all humans -- babies just need help learning to resettle.",
  "Most babies can sleep 6-8 hour stretches by 4-6 months and through the night by 9-12 months.",
  "Common causes include hunger, sleep associations, developmental milestones, and discomfort.",
  "After 6 months, frequent waking is usually caused by sleep associations rather than hunger.",
  "Sudden increases in night waking often correlate with regressions, illness, or teething.",
  "See your pediatrician if night waking is accompanied by breathing issues, pain, or failure to thrive.",
];

export default function NightWakingPage() {
  const contentSchema = getContentPageSchema({
    name: "Why Babies Wake at Night and When to Worry",
    description:
      "Comprehensive guide to baby night waking patterns, causes by age, and when to seek medical advice.",
    path: "/sleep/night-waking",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Clinical Guidelines", url: "https://www.aap.org/en/clinical-guidance/" },
      { name: "NIH Sleep Research", url: "https://www.nhlbi.nih.gov/health-topics/sleep-deprivation-and-deficiency" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Night Waking" },
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
          { label: "Night Waking" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Why Babies Wake at Night and When to Worry
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          All humans wake briefly between sleep cycles -- adults do it too but rarely
          remember. Babies wake fully because they have not yet learned to transition
          between cycles independently. Understanding why your baby wakes helps you
          respond appropriately and know when waking is normal versus when to consult
          your pediatrician.
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
            Normal night waking by age
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Newborn (0-3 months)</p>
              <p className="text-sm text-muted">Waking every 2-4 hours is normal and expected. Newborns have small stomachs and need frequent feeds. They do not yet have a circadian rhythm, so there is no day/night distinction. 2-4 feeds per night is typical.</p>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">3-6 months</p>
              <p className="text-sm text-muted">Many babies begin sleeping one longer stretch (4-6 hours) but still wake 1-3 times. 1-2 night feeds are still common and appropriate. The 4-month regression often temporarily increases waking.</p>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">6-12 months</p>
              <p className="text-sm text-muted">Most babies can sleep 6-10 hour stretches. 0-1 feeds may still be needed, but waking more than 2 times is often due to sleep associations rather than hunger. Many babies sleep through (10-12 hours) by 9-12 months.</p>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">12-24 months</p>
              <p className="text-sm text-muted">Night feeds are no longer physiologically necessary. Waking is typically caused by developmental regressions, teething, nightmares, separation anxiety, or learned habits. 0-1 brief wakings may persist.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common causes of night waking
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Hunger:</strong> The primary cause in the first 6 months. Babies need to feed frequently due to small stomach capacity and rapid growth.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Sleep associations:</strong> If your baby needs specific conditions to fall asleep (feeding, rocking, pacifier), they will need those same conditions to resettle at each cycle transition.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Developmental milestones:</strong> Learning new skills (rolling, crawling, standing) causes temporary sleep disruption as the brain processes new information.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Teething:</strong> Teething discomfort can cause 2-3 nights of disrupted sleep around each tooth emergence. Persistent disruption beyond a few days is usually not teething alone.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Illness or discomfort:</strong> Ear infections, congestion, reflux, and allergies can all disrupt sleep. A sudden change in a previously good sleeper warrants checking for illness.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Schedule issues:</strong> Overtiredness (bedtime too late or naps too short) or undertiredness (too much daytime sleep or bedtime too early) both cause night waking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Environment:</strong> Room too hot or cold, light exposure, noise disturbances, or uncomfortable sleepwear can all cause unnecessary waking.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Hunger vs. habit: how to tell the difference
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Distinguishing hunger from habit waking is important for responding
            appropriately. Here are key indicators:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Signs of hunger</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>4+ hours since last feed</li>
                <li>Takes a full feed (not just comfort sucking)</li>
                <li>Settles quickly after feeding</li>
                <li>Variable timing (not the same time every night)</li>
                <li>Baby is under 9 months</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Signs of habit waking</p>
              <ul className="space-y-1 text-sm text-muted">
                <li>Occurs at the same time nightly</li>
                <li>Only sucks briefly or comfort sucks</li>
                <li>Takes a long time to settle back down</li>
                <li>Occurs less than 3 hours after last feed</li>
                <li>Baby seems more awake than hungry</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to call your pediatrician
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            While night waking is normal, certain patterns warrant medical evaluation:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Snoring, gasping, or pauses in breathing during sleep (possible sleep apnea)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Waking with apparent pain, arching back, or inconsolable crying (possible reflux or ear infection)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Poor weight gain combined with frequent waking and feeding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Excessive daytime sleepiness despite adequate nighttime sleep hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Sudden, dramatic increase in waking frequency in a baby who was sleeping well (rule out illness)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Restless sleep with frequent movement, leg kicking, or head banging (possible restless leg syndrome or other condition)</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies for reducing night waking
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Teach independent sleep at bedtime:</strong> How baby falls asleep at bedtime determines how they resettle overnight.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Ensure adequate daytime calories:</strong> Full feeds during the day and a good pre-bedtime feed reduce hunger-driven waking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Optimize the schedule:</strong> An age-appropriate bedtime (usually between 6:30 and 7:30 PM) with correct wake windows reduces overtiredness.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Pause before responding:</strong> Give your baby a moment (30 seconds to 2 minutes) before intervening -- they may resettle on their own.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Address the environment:</strong> Dark room, consistent white noise, comfortable temperature (68-72°F) all support longer sleep stretches.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Night waking is normal for babies, especially in the first 6 months when hunger drives most awakenings. After 6 months, sleep associations are the most common cause of frequent waking. Teaching your baby to fall asleep independently at bedtime is the most effective way to reduce unnecessary night wakings. If waking is accompanied by breathing concerns, pain, or poor growth, consult your pediatrician." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
