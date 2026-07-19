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
  title: "Sleep Regressions by Age: 4, 8, 12, 18, 24 Mo",
  description:
    "Complete guide to baby sleep regressions at 4, 8, 12, 18, and 24 months. Learn what causes each regression, how long it lasts, signs to watch for, and evidence-based strategies to get through them.",
  alternates: { canonical: "/sleep/regressions" },
  openGraph: {
    title: "Sleep Regressions by Age: 4, 8, 12, 18, 24 Months",
    description:
      "What causes sleep regressions, how long they last, and what to do at each age from 4 to 24 months.",
  },
};

const faqItems = [
  {
    question: "Are sleep regressions real or just a myth?",
    answer:
      "Sleep regressions are real and well-documented in pediatric sleep research. They correlate with developmental milestones, brain maturation (particularly the 4-month shift to adult-like sleep architecture), and periods of rapid cognitive and motor development. While the term 'regression' is somewhat misleading -- it is actually a progression in development -- the disruption to sleep patterns is genuine.",
  },
  {
    question: "How can I tell the difference between a regression and a sleep problem?",
    answer:
      "A regression typically starts suddenly in a baby who was previously sleeping well, correlates with a developmental milestone, and resolves within 2 to 6 weeks. A chronic sleep problem persists beyond 6 weeks, does not correlate with a clear developmental change, and usually involves a sleep association or schedule issue that needs to be addressed directly.",
  },
  {
    question: "Should I sleep train during a regression?",
    answer:
      "Most sleep consultants recommend waiting until the acute phase of a regression passes (usually 1 to 2 weeks) before starting formal sleep training. However, the 4-month regression is an exception -- since it represents a permanent change in sleep architecture, it is actually an ideal time to begin teaching independent sleep skills once the initial disruption settles.",
  },
  {
    question: "Will my baby's sleep go back to normal after a regression?",
    answer:
      "In most cases, sleep improves significantly after a regression resolves (2 to 6 weeks). However, if new sleep associations were formed during the regression (such as feeding to sleep or bringing baby to your bed), those may persist and need to be addressed. The 4-month regression is unique in that it represents a permanent change in sleep cycles rather than a temporary disruption.",
  },
  {
    question: "Can I prevent sleep regressions?",
    answer:
      "You cannot prevent regressions because they are driven by normal brain development. However, babies with strong independent sleep skills tend to be less affected. If your baby already knows how to self-settle, they are more likely to navigate a regression with minimal disruption because they can get themselves back to sleep between cycles.",
  },
];

const takeaways = [
  "Sleep regressions are temporary disruptions (2 to 6 weeks) caused by developmental leaps.",
  "The 4-month regression is the most significant -- it reflects a permanent shift in sleep architecture.",
  "Common regression ages: 4, 8, 12, 18, and 24 months, though timing varies by baby.",
  "Maintaining consistent routines during a regression prevents new habits from forming.",
  "Babies with independent sleep skills are less disrupted by regressions.",
  "If sleep does not improve within 6 weeks, the issue may not be a regression.",
];

export default function RegressionsPage() {
  const contentSchema = getContentPageSchema({
    name: "Sleep Regressions by Age: 4, 8, 12, 18, 24 Months",
    description:
      "Complete guide to baby sleep regressions including causes, duration, and management strategies for each age.",
    path: "/sleep/regressions",
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
    { name: "Sleep Regressions" },
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
          { label: "Sleep Regressions" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Sleep Regressions: The Complete Guide by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Sleep regressions are periods when a baby who was sleeping well suddenly
          starts waking more frequently, resisting sleep, or taking shorter naps.
          They are a normal part of development, driven by cognitive and motor leaps.
          Understanding what happens at each stage helps you respond appropriately
          and maintain healthy sleep habits.
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
            The 4-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The 4-month regression is the most significant because it reflects a permanent
            change in your baby&apos;s sleep architecture. Before this point, babies cycle
            between only two sleep stages (active and quiet). Around 4 months, their sleep
            matures to include all four adult stages (including light sleep stages 1 and 2).
            This means more partial awakenings between cycles -- and if your baby does not
            know how to get back to sleep independently, they will fully wake and cry.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">4-month regression details</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Typical timing:</strong> 3.5 to 4.5 months</li>
              <li><strong>Duration:</strong> 2 to 6 weeks (but the underlying change is permanent)</li>
              <li><strong>Signs:</strong> Frequent night waking (every 1-2 hours), short naps (30-45 min), increased fussiness</li>
              <li><strong>Developmental driver:</strong> Maturation of sleep cycles to adult pattern</li>
              <li><strong>What helps:</strong> This is an ideal time to start teaching independent sleep skills</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 8-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Around 8 to 10 months, many babies experience another disruption linked to
            major developmental milestones: crawling, pulling to stand, object permanence,
            and separation anxiety. Your baby now understands that you exist when out of
            sight, which can make separations at bedtime more distressing. They may also
            practice new motor skills in the crib (standing, crawling) instead of sleeping.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">8-month regression details</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Typical timing:</strong> 8 to 10 months</li>
              <li><strong>Duration:</strong> 2 to 4 weeks</li>
              <li><strong>Signs:</strong> Separation anxiety at bedtime, standing in crib, nap refusal, night waking</li>
              <li><strong>Developmental driver:</strong> Object permanence, crawling, pulling to stand</li>
              <li><strong>What helps:</strong> Practice new skills extensively during the day, keep routine consistent</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 12-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Around 12 months, babies are often learning to walk, saying first words, and
            may be transitioning from two naps to one (though most babies are not truly
            ready for one nap until 14 to 18 months). This regression can manifest as nap
            refusal (particularly the second nap), bedtime resistance, and night waking.
            Some babies temporarily appear to need only one nap but revert to two after
            the regression passes.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">12-month regression details</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Typical timing:</strong> 11 to 13 months</li>
              <li><strong>Duration:</strong> 2 to 4 weeks</li>
              <li><strong>Signs:</strong> Second nap refusal, bedtime resistance, early morning waking</li>
              <li><strong>Developmental driver:</strong> Walking, first words, increased independence</li>
              <li><strong>What helps:</strong> Do not drop to one nap prematurely; keep offering the second nap</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 18-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The 18-month regression is often described as one of the hardest because
            toddlers now have the will and the physical ability to resist sleep more
            effectively. They can climb out of cribs, verbally protest, and have strong
            opinions about separation. This regression coincides with a language explosion,
            increased autonomy seeking, possible molar teething, and the nap transition
            (many toddlers move to one nap around this time).
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">18-month regression details</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Typical timing:</strong> 17 to 19 months</li>
              <li><strong>Duration:</strong> 2 to 6 weeks</li>
              <li><strong>Signs:</strong> Strong bedtime resistance, new night waking, nap strikes, separation tantrums</li>
              <li><strong>Developmental driver:</strong> Language explosion, autonomy, possible teething</li>
              <li><strong>What helps:</strong> Firm boundaries, predictable routine, limited choices (which book, which pajamas)</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The 24-month regression
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Around 2 years, many toddlers experience sleep disruption related to growing
            imagination (nightmares and fears emerge), potty training, the possible
            transition to a toddler bed, and a new level of testing boundaries. Night
            wakings may involve calling out for parents, asking for water, or expressing
            fears of the dark.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-card-alt border border-[#E8E2D9]">
            <p className="text-sm font-semibold text-foreground mb-2">24-month regression details</p>
            <ul className="space-y-1 text-sm text-muted">
              <li><strong>Typical timing:</strong> 23 to 25 months</li>
              <li><strong>Duration:</strong> 2 to 4 weeks</li>
              <li><strong>Signs:</strong> Stalling at bedtime, nightmares, nap refusal, crib climbing</li>
              <li><strong>Developmental driver:</strong> Imagination, fears, boundary testing, possible new sibling</li>
              <li><strong>What helps:</strong> Address fears calmly, maintain boundaries, use a toddler clock</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to survive a regression
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Maintain your routine:</strong> Keep bedtime and nap routines consistent even if sleep is disrupted.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Avoid creating new habits:</strong> Try not to introduce new sleep associations (feeding to sleep, co-sleeping) that you will need to undo later.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Offer comfort without taking over:</strong> Briefly reassure your baby but give them the opportunity to resettle.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Practice new skills during the day:</strong> If your baby is learning to stand or crawl, plenty of daytime practice reduces the urge to practice at night.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Check the schedule:</strong> Wake windows increase with age -- ensure the schedule is still age-appropriate.</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Sleep regressions are temporary and developmentally normal. They are a sign that your baby's brain is growing and learning new skills. The most important thing you can do is maintain consistency in your routines, avoid creating new sleep associations you will need to break later, and give your baby the opportunity to practice their developing self-soothing skills. Most regressions resolve within 2 to 6 weeks." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
