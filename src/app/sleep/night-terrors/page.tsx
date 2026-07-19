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
  title: "Night Terrors vs Nightmares in Babies and Toddlers",
  description:
    "How to tell the difference between night terrors and nightmares in children. Covers causes, timing, what to do during an episode, when they start, and when to see a doctor.",
  alternates: { canonical: "/sleep/night-terrors" },
  openGraph: {
    title: "Night Terrors vs Nightmares in Babies and Toddlers",
    description:
      "Complete guide to night terrors and nightmares: causes, how to respond, age of onset, and when to seek help.",
  },
};

const faqItems = [
  {
    question: "At what age do night terrors start?",
    answer:
      "Night terrors most commonly begin between 18 months and 4 years of age, with a peak around 3 to 4 years. They are rare before 18 months. About 3 to 6% of children experience night terrors. They typically resolve on their own by age 5 to 7 as the nervous system matures.",
  },
  {
    question: "Should I wake my child during a night terror?",
    answer:
      "No. Attempting to wake a child during a night terror usually makes the episode worse and can extend it. The child is not aware of what is happening and will not remember the episode. The best approach is to stay nearby, ensure they are safe (cannot fall out of bed or hit anything), speak in a calm quiet voice if you wish, and wait for the episode to pass. Most last 5 to 15 minutes.",
  },
  {
    question: "Can babies have nightmares?",
    answer:
      "Babies under 12 months are unlikely to have true nightmares because nightmares require the cognitive ability to form complex mental imagery and narrative. Night waking with crying in babies under 12 months is more likely due to hunger, discomfort, sleep cycle transitions, or separation anxiety. True nightmares become possible around 18 to 24 months as imagination develops.",
  },
  {
    question: "Are night terrors caused by trauma or anxiety?",
    answer:
      "Night terrors are not typically caused by psychological trauma or anxiety. They are a parasomnia -- a disorder of arousal that occurs during the transition from deep (stage 3) to lighter sleep. They are more common when children are overtired, have irregular sleep schedules, are sleep-deprived, or have a fever. There is also a genetic component; they run in families.",
  },
  {
    question: "When should I talk to the doctor about night terrors?",
    answer:
      "Consult your pediatrician if: episodes occur more than 2 to 3 times per week, they last longer than 30 minutes, your child is getting hurt during episodes, they are accompanied by stiffening or jerking that could indicate seizure activity, daytime behavior is affected, or they begin after age 7 (which warrants evaluation for other causes).",
  },
];

const takeaways = [
  "Night terrors and nightmares are different events that occur in different sleep stages.",
  "Night terrors happen in deep sleep (first third of night); child appears awake but is not.",
  "Nightmares happen in REM sleep (second half of night); child wakes fully and remembers.",
  "Do not try to wake a child during a night terror -- keep them safe and wait it out.",
  "Night terrors peak at age 3-4 and are often triggered by overtiredness or irregular schedules.",
  "Nightmares become common around age 2-3 as imagination develops; comfort and reassurance help.",
];

export default function NightTerrorsPage() {
  const contentSchema = getContentPageSchema({
    name: "Night Terrors vs Nightmares in Babies and Toddlers",
    description:
      "Comprehensive guide to distinguishing night terrors from nightmares with causes, management, and when to seek help.",
    path: "/sleep/night-terrors",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Clinical Guidelines", url: "https://www.aap.org/en/clinical-guidance/" },
      { name: "NIH National Institute of Neurological Disorders and Stroke", url: "https://www.ninds.nih.gov/" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Night Terrors" },
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
          { label: "Night Terrors" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Night Terrors vs Nightmares in Babies and Toddlers
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Watching your child scream, thrash, or cry inconsolably during sleep is
          terrifying for parents. Understanding whether you are witnessing a night
          terror or a nightmare determines how you should respond. These are
          fundamentally different events with different causes and different
          management strategies.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NIH", "NINDS"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to tell the difference
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Night terrors</p>
              <ul className="space-y-1.5 text-sm text-muted">
                <li><strong>Timing:</strong> First 2-3 hours of sleep</li>
                <li><strong>Sleep stage:</strong> Deep (stage 3/4) sleep</li>
                <li><strong>Awareness:</strong> Child appears awake but is not</li>
                <li><strong>Eyes:</strong> Open, glazed, unseeing</li>
                <li><strong>Response to you:</strong> Does not recognize you, pushes away</li>
                <li><strong>Duration:</strong> 5-30 minutes</li>
                <li><strong>Memory:</strong> No memory in the morning</li>
                <li><strong>After episode:</strong> Falls back to sleep immediately</li>
                <li><strong>Age of onset:</strong> 18 months to 4 years</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-foreground mb-2">Nightmares</p>
              <ul className="space-y-1.5 text-sm text-muted">
                <li><strong>Timing:</strong> Second half of the night</li>
                <li><strong>Sleep stage:</strong> REM (dream) sleep</li>
                <li><strong>Awareness:</strong> Fully awake after episode</li>
                <li><strong>Eyes:</strong> Normal, awake, seeking comfort</li>
                <li><strong>Response to you:</strong> Seeks comfort, clings to you</li>
                <li><strong>Duration:</strong> Wakes up quickly, may need time to calm</li>
                <li><strong>Memory:</strong> Can describe the dream (if verbal)</li>
                <li><strong>After episode:</strong> May struggle to return to sleep</li>
                <li><strong>Age of onset:</strong> 2-3 years</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What causes night terrors
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Night terrors are classified as a parasomnia -- a disorder of arousal.
            They occur when the brain gets &quot;stuck&quot; transitioning from deep
            sleep to a lighter stage. The child is not awake, not dreaming, and not
            aware of what is happening. The brain is in a confused state between
            sleep and wakefulness.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Overtiredness/sleep deprivation:</strong> The single most common trigger. When overtired, children spend more time in deep sleep, making disordered arousals more likely.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Irregular sleep schedule:</strong> Inconsistent bedtimes or nap disruption increases risk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Fever or illness:</strong> Fever-related night terrors are common and resolve when the illness passes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Genetics:</strong> Night terrors run in families. If a parent experienced them, children are more likely to as well.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Full bladder:</strong> A full bladder can trigger partial arousal from deep sleep in some children.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Sleep apnea:</strong> Obstructive breathing during sleep can trigger arousals that manifest as night terrors.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to do during a night terror
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Do not try to wake them:</strong> This typically intensifies and prolongs the episode.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Ensure safety:</strong> Make sure they cannot fall out of bed, hit furniture, or hurt themselves during thrashing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Stay nearby:</strong> You can sit close and speak in a calm, quiet voice but do not restrain them unless they are in danger.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Wait it out:</strong> Most episodes last 5 to 15 minutes and end with the child settling back to peaceful sleep.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Do not discuss it:</strong> Since your child has no memory of the event, bringing it up the next day can create anxiety about sleep.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Preventing night terrors
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Prioritize adequate sleep:</strong> Ensure your child is getting enough total sleep for their age. An earlier bedtime often reduces or eliminates episodes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Maintain a consistent schedule:</strong> Same bedtime and wake time daily, including weekends.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Scheduled awakening:</strong> If episodes occur at a predictable time, gently rouse your child 15 to 30 minutes before the typical episode. This resets the sleep cycle and can prevent the disordered arousal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Address sleep-disordered breathing:</strong> If your child snores, breathes through their mouth, or has restless sleep, discuss with your pediatrician as this can trigger night terrors.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Managing nightmares
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Unlike night terrors, nightmares involve a child who wakes fully, is
            scared, and needs comfort. Nightmares are a normal part of developing
            imagination and become common around age 2 to 3.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Respond promptly:</strong> Go to your child, offer comfort, hold them, and reassure them they are safe.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Validate their feelings:</strong> &quot;That sounds scary. You are safe now. I am here.&quot; Do not dismiss their fear.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Keep it brief:</strong> Comfort and return to sleep without lengthy discussions or turning on bright lights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>A comfort object:</strong> A special stuffed animal or blanket (for children over 12 months) can provide ongoing reassurance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Address content if recurring:</strong> If the same nightmare recurs, you can use daytime play or drawing to process the fear and create a &quot;different ending&quot; to the story.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Night terrors and nightmares are different events requiring different responses. Night terrors occur in deep sleep -- your child is not aware and will not remember. Keep them safe, do not try to wake them, and focus on ensuring adequate total sleep to prevent future episodes. Nightmares occur in REM sleep -- your child wakes fully and needs your comfort and reassurance. Both are normal parts of childhood development and typically resolve with time." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
