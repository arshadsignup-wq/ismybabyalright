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
  title: "6-12 Month Sleep Guide: Naps, Night Feeds, Milestones",
  description:
    "Complete 6-12 month sleep guide covering nap consolidation, dropping night feeds, the 8-month regression, separation anxiety, standing in crib, and establishing a solid 2-nap schedule.",
  alternates: { canonical: "/sleep/6-12mo" },
  openGraph: {
    title: "6-12 Month Sleep Guide: Naps, Night Feeds, Milestones",
    description:
      "Navigate 6-12 month sleep including nap transitions, dropping night feeds, and the 8-month regression with evidence-based guidance.",
  },
};

const faqItems = [
  {
    question: "When should my baby drop from 3 naps to 2?",
    answer:
      "Most babies transition from 3 to 2 naps between 6 and 8 months. Signs of readiness include: the third nap pushes bedtime past 7:30 PM, baby resists the third nap consistently for a week or more, or wake windows have naturally extended to 2.5 to 3 hours. During the transition, you may need an earlier bedtime on days when the third nap is skipped.",
  },
  {
    question: "How do I handle my baby standing up in the crib and crying?",
    answer:
      "This is extremely common around 8 to 10 months. Your baby has learned to pull to stand but may not know how to get back down. During the day, practice the 'getting down' skill repeatedly -- show them how to bend their knees and lower themselves. At bedtime, lay them down once or twice, then let them figure it out. They will master it within a few days with practice.",
  },
  {
    question: "Can I stop all night feeds at 6 months?",
    answer:
      "Many 6-month-olds can physiologically go through the night without a feed, but this varies. Before dropping all night feeds, confirm with your pediatrician that your baby's weight gain is adequate. Some breastfed babies benefit from keeping one feed until 9 to 12 months. If you are unsure whether a waking is hunger, offer a feed -- if baby takes a full feed and settles easily, they may still need it.",
  },
  {
    question: "Why does my 8-month-old suddenly hate bedtime?",
    answer:
      "Around 8 to 10 months, separation anxiety peaks. Your baby now has object permanence -- they know you exist when you leave the room, and they do not want you to go. This is a normal cognitive milestone. Maintain your routine, keep goodbyes brief and confident, and consider brief verbal check-ins if using a graduated approach. This phase typically lasts 2 to 4 weeks.",
  },
  {
    question: "My baby's naps were getting longer but are now short again. Why?",
    answer:
      "Nap length can regress during developmental milestones (crawling, pulling to stand, cruising). The brain is so busy processing new skills that it has difficulty sustaining longer sleep periods. This is temporary (usually 1 to 2 weeks). Ensure wake windows are appropriate for the new level of activity -- active babies may need slightly longer wake windows than before.",
  },
];

const takeaways = [
  "By 6-9 months, most babies can sleep 10-12 hours at night with 0-1 feeds.",
  "The 3-to-2 nap transition happens around 6-8 months; a solid 2-nap schedule follows.",
  "The 8-month regression brings separation anxiety, standing in crib, and nap disruption.",
  "Wake windows extend to 2.5-3.5 hours; the last window before bed is the longest.",
  "This is the prime window for sleep training if not already done (6-9 months is ideal).",
  "Motor milestones (crawling, standing, cruising) temporarily disrupt sleep but resolve quickly.",
];

export default function SixToTwelveMonthsPage() {
  const contentSchema = getContentPageSchema({
    name: "6-12 Month Sleep Guide: Naps, Night Feeds, Milestones",
    description:
      "Comprehensive guide to 6-12 month sleep including nap consolidation, night weaning, and milestone-related disruptions.",
    path: "/sleep/6-12mo",
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
    { name: "6-12 Months" },
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
          { label: "6-12 Months" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          6-12 Month Sleep Guide
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The 6 to 12 month period is when sleep truly begins to consolidate. Many
          babies are capable of sleeping through the night, naps become more
          predictable, and a solid routine takes shape. However, this period also
          brings major motor milestones, separation anxiety, and the 8 to 10 month
          regression. Here is what to expect and how to navigate it.
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
            Sleep needs at 6-12 months
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-2 text-sm text-muted">
              <li><strong>Total sleep (24 hours):</strong> 13-15 hours</li>
              <li><strong>Nighttime sleep:</strong> 10-12 hours</li>
              <li><strong>Daytime sleep:</strong> 2.5-3.5 hours across 2 naps</li>
              <li><strong>Wake windows:</strong> 2.5-3.5 hours (increasing with age)</li>
              <li><strong>Bedtime:</strong> 6:30-7:30 PM</li>
              <li><strong>Night feeds:</strong> 0-1 (most can go all night by 9 months)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 3-to-2 nap transition
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Between 6 and 8 months, most babies drop the third nap and settle into
            a 2-nap schedule. This is typically the most straightforward nap
            transition. Signs your baby is ready:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>The third nap consistently pushes bedtime past 7:30 or 8 PM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Baby resists or plays through the third nap for 5+ days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Wake windows have stretched to 2.5 to 3 hours comfortably</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Nighttime sleep is being affected (split nights or early waking)</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            During the transition, use an earlier bedtime (as early as 6:00 PM) on
            days when the third nap is dropped to prevent overtiredness. The
            transition typically takes 1 to 2 weeks to settle.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sample schedule: 7-10 months (2 naps)
          </h2>
          <div className="p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <ul className="space-y-1 text-sm text-muted">
              <li>Wake: 6:30 AM</li>
              <li>Nap 1: 9:00-10:30 AM (2.5 hr wake window, 1-1.5 hr nap)</li>
              <li>Nap 2: 1:30-3:00 PM (3 hr wake window, 1-1.5 hr nap)</li>
              <li>Bedtime: 6:30-7:00 PM (3-3.5 hr wake window)</li>
            </ul>
            <p className="text-xs text-muted mt-2">
              Note: Wake windows increase gradually. A 7-month-old may use 2.5/2.75/3 hours; a 10-month-old may use 3/3.25/3.5 hours.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 8-10 month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Around 8 to 10 months, several developmental milestones converge to
            disrupt sleep:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Object permanence:</strong> Your baby now understands you still exist when you leave. This creates genuine separation distress at bedtime and during night wakings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Motor skills:</strong> Crawling, pulling to stand, and cruising are practiced day and night. Baby may stand in the crib and not know how to get down.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Cognitive leaps:</strong> Language comprehension is exploding, and the brain is processing enormous amounts of information during sleep.</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This regression typically lasts 2 to 4 weeks. The most helpful things you
            can do are: practice motor skills extensively during the day (especially
            getting down from standing), maintain your bedtime routine, and avoid
            creating new sleep associations in response to the disruption.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Night weaning
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Many babies between 6 and 9 months are physiologically ready to go
            through the night without feeds, but this varies by baby. Before
            eliminating night feeds, confirm with your pediatrician that your
            baby&apos;s weight gain is on track and they are taking adequate
            calories during the day.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">Night weaning approaches</p>
            <ul className="space-y-1.5 text-sm text-muted">
              <li><strong>Gradual reduction (bottle):</strong> Reduce the amount in the bottle by 1 oz every 2 to 3 nights until eliminated.</li>
              <li><strong>Gradual reduction (breast):</strong> Reduce feeding time by 1 to 2 minutes every 2 to 3 nights.</li>
              <li><strong>Cold turkey:</strong> Eliminate the feed entirely and allow baby to self-settle. Often results in 1 to 3 nights of protest then resolution.</li>
              <li><strong>Dream feed:</strong> Offer a feed before you go to bed (10-11 PM) to tank baby up, then do not feed again until morning.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Sleep training at 6-12 months
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            If you have not yet sleep trained and want to, the 6 to 9 month window
            is considered ideal by many pediatric sleep researchers. Your baby is
            developmentally mature, capable of self-soothing, and not yet dealing
            with the strong-willed resistance that comes with toddlerhood.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            All methods (extinction, graduated extinction, chair method) work well
            at this age. Consistency remains the most important factor. If you have
            already sleep trained but sleep has regressed due to milestones, you may
            need a brief &quot;refresher&quot; -- go back to your original method for
            2 to 3 nights and sleep typically re-establishes quickly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Separation anxiety and sleep
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Separation anxiety peaks around 8 to 10 months and can significantly
            impact bedtime. Your baby may cry intensely when you leave the room,
            even if they previously self-settled easily. Strategies include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Practice short separations during the day (peekaboo, leaving the room briefly and returning)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Keep your goodnight routine confident and brief -- do not linger or look worried</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Introduce a transitional object (small lovey or comfort cloth) from 7+ months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>If using check-ins, keep them brief (under 30 seconds) and boring -- do not pick up</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 12-month regression preview
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Around 11 to 13 months, you may see another brief disruption as your
            baby learns to walk, says first words, and may appear ready to drop to
            one nap. Resist the urge to drop the second nap -- most babies are not
            truly ready for one nap until 14 to 18 months. Continue offering two
            naps and this regression typically passes within 2 to 3 weeks.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="The 6-12 month period is when sleep truly matures. Most babies can sleep 10-12 hours at night, consolidate into a predictable 2-nap schedule, and no longer need night feeds by 9 months. Motor milestones and separation anxiety temporarily disrupt sleep but resolve with consistency and patience. This is the golden window for sleep training if you choose to pursue it." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
