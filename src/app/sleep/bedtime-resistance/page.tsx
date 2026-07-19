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
  title: "Bedtime Resistance: Why Kids Fight Sleep by Age",
  description:
    "Why babies and toddlers resist bedtime and age-specific strategies to fix it. Covers overtiredness, FOMO, boundary testing, separation anxiety, and evidence-based bedtime routine tips.",
  alternates: { canonical: "/sleep/bedtime-resistance" },
  openGraph: {
    title: "Bedtime Resistance: Why Kids Fight Sleep by Age",
    description:
      "Understand why your baby or toddler fights bedtime and get age-specific, evidence-based strategies to make bedtime easier.",
  },
};

const faqItems = [
  {
    question: "Why does my baby scream at bedtime but sleep fine once asleep?",
    answer:
      "If your baby fights falling asleep but then sleeps well once asleep, the issue is usually the transition from wakefulness to sleep rather than a sleep problem. Common causes include: overtiredness (missed the sleep window and cortisol has kicked in), needing more soothing support than currently provided, or a sleep association that was disrupted (for example, usually fed to sleep but tonight was put down awake). Adjusting the timing or bedtime routine often resolves this.",
  },
  {
    question: "What time should bedtime be for my baby?",
    answer:
      "Optimal bedtime varies by age but is earlier than most parents expect. For babies 3 to 12 months, bedtime is typically between 6:00 and 7:30 PM. For toddlers 12 to 24 months, 6:30 to 7:30 PM. For preschoolers, 7:00 to 8:00 PM. The exact time depends on when the last nap ended and age-appropriate wake windows. A baby who seems wide awake at 8 PM may actually be overtired and running on cortisol.",
  },
  {
    question: "Is it normal for toddlers to take an hour to fall asleep?",
    answer:
      "It is not typical for a toddler to take more than 20 to 30 minutes to fall asleep. If bedtime consistently takes longer, consider: bedtime may be too early (they are not tired enough), the pre-bed routine may be too stimulating, they may need more physical activity during the day, or there may be a behavioral pattern of stalling that is being reinforced. Try pushing bedtime 15 to 30 minutes later.",
  },
  {
    question: "Should I let my toddler cry at bedtime?",
    answer:
      "For toddlers who are engaging in bedtime battles as a form of boundary testing, some degree of protest is normal and even expected when you set consistent limits. You do not need to respond to every request or repeatedly return to the room. Setting a clear boundary (one more book, lights off, goodnight) and being consistent teaches your toddler that bedtime is non-negotiable. However, ensure their basic needs are genuinely met and they feel safe.",
  },
  {
    question: "My baby used to go to bed easily. Why are they suddenly fighting it?",
    answer:
      "Sudden bedtime resistance in a previously easy sleeper is often caused by: a sleep regression (particularly at 4, 8, 12, or 18 months), undertiredness due to a schedule that needs adjusting (wake windows have grown), separation anxiety (peaks around 8 to 10 months and 18 months), or a developmental milestone that has the brain too active to settle. In most cases, it is temporary and resolves within 2 to 4 weeks if you maintain consistency.",
  },
];

const takeaways = [
  "Bedtime resistance is normal and has different causes at different ages.",
  "Overtiredness is the most common cause in babies -- an earlier bedtime often helps.",
  "Toddlers resist bedtime due to FOMO, boundary testing, and growing independence.",
  "A predictable, calming bedtime routine (15-30 min) is the most effective tool.",
  "Consistency and firm limits reduce bedtime battles -- giving in intermittently makes it worse.",
  "If resistance is sudden and new, check for schedule changes, regression, or illness.",
];

export default function BedtimeResistancePage() {
  const contentSchema = getContentPageSchema({
    name: "Bedtime Resistance: Why Kids Fight Sleep by Age",
    description:
      "Age-specific guide to bedtime resistance with evidence-based strategies for babies, toddlers, and preschoolers.",
    path: "/sleep/bedtime-resistance",
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
    { name: "Bedtime Resistance" },
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
          { label: "Bedtime Resistance" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Bedtime Resistance: Why Kids Fight Sleep by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Bedtime battles are one of the most common sleep complaints from parents
          of babies and toddlers. The reasons children resist sleep change as they
          develop -- what works for a 6-month-old will not work for an 18-month-old.
          This guide covers why bedtime resistance happens at each age and what
          strategies actually work.
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
            Bedtime resistance in babies (0-12 months)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Babies resist bedtime primarily for physiological reasons: they are
            overtired, undertired, or the conditions for sleep are not quite right.
            Unlike toddlers, they are not doing this intentionally -- their nervous
            system is simply not ready to transition to sleep.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Overtiredness (most common):</strong> When babies are awake too long, cortisol and adrenaline spike, making them wired and hyperactive. They fight sleep even though they desperately need it. Solution: move bedtime earlier by 15-30 minutes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Undertiredness:</strong> If the last nap ended too close to bedtime or the baby napped too long, they simply are not tired enough. Solution: cap or drop the last nap, or push bedtime slightly later.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Separation anxiety (8-10 months):</strong> Babies develop object permanence and suddenly protest when you leave. Solution: a consistent goodbye routine and brief check-ins if using a sleep training approach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Discomfort:</strong> Gas, reflux, teething, or an uncomfortable temperature can make settling difficult. Rule out physical causes first.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Bedtime resistance in toddlers (12-24 months)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Toddlers fight bedtime for more complex reasons. They now have the
            cognitive ability to understand cause and effect, test boundaries, and
            express strong preferences. Common toddler-specific causes include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>FOMO (fear of missing out):</strong> Toddlers are aware that life continues after they go to bed. They want to be part of the action. Solution: the whole house should wind down -- dim lights, quiet activities, no screens.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Boundary testing:</strong> Toddlers learn that crying, asking for water, needing another hug, or saying they are scared gets a response. Solution: address all needs before lights out, then maintain your boundary calmly and consistently.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Autonomy and control:</strong> Toddlers want to make decisions. Solution: offer limited choices within the routine (which pajamas, which book, which song) so they feel empowered within your structure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Nap transition timing:</strong> If the nap transition is not quite right (nap too late, or recently dropped and overtired), evenings become difficult. Solution: cap the nap to end by 3 PM for most toddlers.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Building an effective bedtime routine
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Research consistently shows that a predictable bedtime routine (15 to 30
            minutes) is the single most effective intervention for bedtime problems.
            A 2009 study in Sleep found that a consistent bedtime routine reduced
            bedtime resistance, night wakings, and improved maternal mood within
            3 weeks.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">Sample bedtime routine (20-30 minutes)</p>
            <ol className="space-y-1 text-sm text-muted list-decimal list-inside">
              <li>Bath or warm washcloth (calming, signals transition)</li>
              <li>Pajamas and diaper/pull-up in the bedroom</li>
              <li>Dim lights, close curtains</li>
              <li>Final feed (for babies) or small snack with milk (toddlers)</li>
              <li>Brush teeth (age-appropriate)</li>
              <li>2-3 books or quiet songs</li>
              <li>Final cuddle, goodnight phrase, into bed awake</li>
              <li>White noise on, lights off, leave the room</li>
            </ol>
          </div>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The key principles are: same order every night, calming activities only (no
            screens, roughhousing, or exciting games), done in the bedroom where sleep
            happens, and ending with your child in their sleep space while still awake.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies for toddler bedtime battles
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Two-choices technique:</strong> &quot;Would you like the blue pajamas or the green ones?&quot; Giving small choices prevents power struggles while keeping you in control of the outcome.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Bedtime pass:</strong> Give your toddler one &quot;pass&quot; per night (a card or token) that they can exchange for one allowed exit (water, hug, bathroom). Once used, no more exits. Research shows this reduces curtain calls.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Toddler clock:</strong> A color-changing clock (green means okay to get up, red means stay in bed) helps toddlers understand time boundaries visually.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Positive reinforcement:</strong> Praise and small rewards for staying in bed work better than punishment for getting up. A sticker chart for &quot;stayed in bed all night&quot; can be motivating.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Silent return:</strong> If your toddler gets out of bed, calmly and silently walk them back without engaging in conversation. Repeat as many times as needed. This is boring for the child and removes the reward of interaction.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What makes bedtime resistance worse
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Inconsistency:</strong> Giving in sometimes (one more book, five more minutes) teaches your child that resistance works. Intermittent reinforcement is the strongest reinforcer of behavior.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Screen time before bed:</strong> Blue light suppresses melatonin. The AAP recommends no screens for at least 1 hour before bedtime.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Exciting activities close to bedtime:</strong> Roughhousing, tickling, and active play stimulate the nervous system. Save high-energy activities for earlier in the day.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Too much parental attention during protests:</strong> Long negotiations, repeated explanations, and emotional responses reward the behavior with connection (even negative connection is reinforcing for toddlers).</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Bedtime resistance is developmentally normal and changes in character as children grow. For babies, the solution is usually scheduling (correct wake windows and bedtime). For toddlers, firm and consistent boundaries combined with a predictable routine are most effective. The key principle across all ages is consistency -- whatever approach you choose, applying it the same way every night yields the fastest results." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
