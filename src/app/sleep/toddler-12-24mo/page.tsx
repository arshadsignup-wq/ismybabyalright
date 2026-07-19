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
  title: "Toddler Sleep Guide (12-24 Months): Naps and Schedules",
  description:
    "Complete guide to toddler sleep from 12 to 24 months. Covers the 2-to-1 nap transition, 18-month regression, bedtime resistance, early waking, crib climbing, and when to transition to a toddler bed.",
  alternates: { canonical: "/sleep/toddler-12-24mo" },
  openGraph: {
    title: "Toddler Sleep Guide (12-24 Months): Naps and Schedules",
    description:
      "Navigate toddler sleep including the nap transition, 18-month regression, bedtime battles, and toddler bed timing.",
  },
};

const faqItems = [
  {
    question: "When should I switch from 2 naps to 1?",
    answer:
      "Most toddlers are ready to transition from 2 naps to 1 between 14 and 18 months. Signs of readiness include: consistently refusing one nap (usually the morning nap) for 2 or more weeks, taking a very long time to fall asleep for one nap, the morning nap pushing the afternoon nap too late, or night sleep being disrupted. Do not rush this transition based on a few bad days -- the 12-month regression can mimic readiness for one nap.",
  },
  {
    question: "When should I move my toddler to a toddler bed?",
    answer:
      "The AAP recommends keeping children in a crib as long as possible -- ideally until age 3. The crib provides a contained, safe sleep space. The only reason to transition earlier is if your child is regularly climbing out and at risk of falling. If climbing occurs, lower the mattress to the lowest setting first and consider a sleep sack (which restricts leg movement for climbing). Only transition if the climbing cannot be stopped safely.",
  },
  {
    question: "How do I handle my toddler's bedtime stalling tactics?",
    answer:
      "Toddlers are masters of stalling: one more book, one more hug, water, potty, scared. Address all legitimate needs before lights out (last drink, potty trip, one hug). Then set a firm boundary: 'Goodnight. I will see you in the morning.' Do not engage in lengthy conversations or return repeatedly. The silent return method (calmly walking them back without talking) is effective for toddlers who leave their bed. Consistency is critical -- if you cave sometimes, the stalling will intensify.",
  },
  {
    question: "Is it normal for my 18-month-old to fight naps?",
    answer:
      "Yes, the 18-month regression commonly manifests as nap refusal. However, most 18-month-olds still need one nap until age 2.5 to 3.5 years. If your toddler suddenly refuses the nap, continue offering it at the same time daily. Many toddlers go through a 1 to 3 week 'nap strike' during this regression and then resume napping. Dropping the nap at 18 months typically leads to overtiredness and worse nighttime sleep.",
  },
  {
    question: "My toddler wakes up at 5 AM. How do I fix this?",
    answer:
      "Early waking (before 6 AM) in toddlers is commonly caused by: bedtime too late (overtiredness causes early waking), too much daytime sleep (cap the nap at 2 hours and end by 3 PM), light entering the room at dawn, or the last wake window being too short. Try making the room darker, capping the nap, and experimenting with an earlier bedtime. A toddler clock that shows when it is 'okay to wake' can also help toddlers over 18 months stay in bed until an appropriate time.",
  },
];

const takeaways = [
  "Total sleep needs: 12-14 hours (11-12 at night + 1.5-2.5 hour nap).",
  "The 2-to-1 nap transition (14-18 months) is the hardest nap transition -- do not rush it.",
  "The 18-month regression is driven by language, autonomy, and teething -- expect bedtime battles.",
  "Keep your toddler in the crib until at least age 2.5-3 if possible (AAP recommendation).",
  "Firm, consistent boundaries at bedtime are more effective than negotiation.",
  "Early waking is usually a schedule issue (bedtime too late or nap too long) rather than an early riser.",
];

export default function Toddler12to24moPage() {
  const contentSchema = getContentPageSchema({
    name: "Toddler Sleep Guide (12-24 Months): Naps and Schedules",
    description:
      "Complete guide to toddler sleep from 12 to 24 months including nap transition, regressions, and behavioral management.",
    path: "/sleep/toddler-12-24mo",
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
    { name: "Toddler (12-24 Months)" },
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
          { label: "Toddler (12-24 Months)" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Toddler Sleep Guide (12-24 Months)
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Toddler sleep brings a new set of challenges. Your child now has opinions,
          willpower, and the physical ability to resist sleep more effectively than
          a baby ever could. The good news: with clear boundaries and a consistent
          approach, toddler sleep can be remarkably predictable once you get through
          the transitions and regressions of this age.
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
            Sleep needs at 12-24 months
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-2 text-sm text-muted">
              <li><strong>Total sleep (24 hours):</strong> 12-14 hours</li>
              <li><strong>Nighttime sleep:</strong> 11-12 hours</li>
              <li><strong>Daytime sleep:</strong> 1.5-2.5 hours (1 nap after transition)</li>
              <li><strong>Wake windows (2 naps):</strong> 3-4 hours / 3.5-4 hours / 3.5-4 hours</li>
              <li><strong>Wake windows (1 nap):</strong> 5-5.5 hours before nap / 4.5-5.5 hours after nap</li>
              <li><strong>Bedtime:</strong> 7:00-8:00 PM (earlier during nap transition)</li>
              <li><strong>Night feeds:</strong> None needed (physiologically unnecessary after 12 months)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 2-to-1 nap transition
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            This is widely considered the most challenging nap transition because the
            wake windows change dramatically and there is a long adjustment period.
            Most toddlers transition between 14 and 18 months.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">How to transition to 1 nap</p>
            <ol className="space-y-1.5 text-sm text-muted list-decimal list-inside">
              <li>Gradually push the morning nap later by 15 minutes every 2 to 3 days</li>
              <li>Target a single nap starting between 12:00 and 1:00 PM</li>
              <li>Cap the nap at 2 to 2.5 hours to protect bedtime</li>
              <li>Use an earlier bedtime (as early as 6:30 PM) during the transition to prevent overtiredness</li>
              <li>Expect the full transition to take 2 to 4 weeks to stabilize</li>
            </ol>
          </div>
          <p className="text-sm text-muted leading-relaxed mt-3">
            During the transition, you may alternate between one and two nap days based
            on how your toddler slept the night before. A bad night or missed nap
            day may mean offering a two-nap day to catch up. Flexibility during this
            period is more important than rigid consistency.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample schedule: one nap (15-24 months)
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-1 text-sm text-muted">
              <li>Wake: 6:30-7:00 AM</li>
              <li>Nap: 12:00-2:00 PM (5-5.5 hr wake window before, 1.5-2 hr nap)</li>
              <li>Bedtime: 7:00-7:30 PM (5-5.5 hr wake window after)</li>
            </ul>
            <p className="text-xs text-muted mt-2">
              Some toddlers do well with a slightly later nap (12:30-2:30) depending on wake time.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 18-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The 18-month regression is often the most challenging because your
            toddler now has the tools to truly resist: words, will, and physical
            ability. Common manifestations include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Intense bedtime battles:</strong> Screaming, climbing out, throwing things, tantrums when you leave</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Nap strikes:</strong> Refusing to nap for days or weeks at a time (still needs the nap though)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Night waking with calling out:</strong> &quot;Mama! Dada!&quot; repeatedly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Separation anxiety resurgence:</strong> Second peak of separation distress</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This regression typically lasts 2 to 6 weeks. The key is maintaining firm
            boundaries while showing empathy. Acknowledge their feelings (&quot;I know
            you want mama to stay&quot;) but maintain the limit (&quot;It is sleep time
            now. I will see you in the morning&quot;).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Toddler sleep strategies
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Offer choices, not control:</strong> &quot;Do you want the blue pajamas or the red ones?&quot; Choices give toddlers a sense of autonomy within your structure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Use a routine chart:</strong> Visual charts showing each step of the bedtime routine help toddlers know what comes next and reduce resistance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Address needs proactively:</strong> Offer water, a last potty trip, and one final hug as part of the routine -- so these cannot be used as stalling tactics later.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Comfort object:</strong> A special stuffed animal or blanket that stays in the crib provides comfort and helps with separation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Consistent consequences:</strong> If your toddler throws things out of the crib, calmly return them once. After that, they stay out until morning. Be matter-of-fact, not emotional.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Crib climbing and the toddler bed question
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Many toddlers attempt to climb out of the crib between 18 and 24 months.
            Before transitioning to a toddler bed, try these strategies to keep them
            safely in the crib longer:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Lower the mattress to the lowest setting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Use a sleep sack (restricts leg movement needed for climbing)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Turn the crib around so the higher side faces outward (if the crib design allows)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Remove any bumpers, toys, or items that give a foothold</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Give a firm &quot;no&quot; if you catch them mid-climb (some toddlers respond to the limit)</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            If your toddler is regularly getting out despite these measures and you
            are concerned about a fall, it may be time to transition. Use a floor bed
            or toddler bed with a safety rail, and childproof the entire room since
            your toddler will now have unsupervised access to the space. A baby gate
            on the door is recommended for safety.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to worry
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Most toddler sleep challenges are behavioral and resolve with
            consistency. However, consult your pediatrician if:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Your toddler snores loudly or has pauses in breathing during sleep</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>They seem excessively tired during the day despite adequate sleep hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Night terrors are occurring multiple times per week</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Frequent head banging, rocking, or teeth grinding during sleep</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true" />
              <span>Sleep problems persist for more than 6 weeks despite consistent behavioral interventions</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Toddler sleep is largely a behavioral challenge. Your toddler has the physical and cognitive ability to resist sleep, and they will test your boundaries. The 2-to-1 nap transition (14-18 months) and 18-month regression are the two biggest hurdles. Success comes from maintaining consistent limits, keeping an age-appropriate schedule, offering choices within your structure, and keeping them in the crib as long as safely possible. Most toddler sleep problems respond well to consistency within 1 to 2 weeks." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
