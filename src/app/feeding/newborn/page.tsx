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
  title: "Newborn Feeding Guide (0-4 Weeks): Everything You Need to Know",
  description:
    "Complete guide to feeding your newborn in the first 4 weeks. Covers how often to feed, how much, cluster feeding, hunger cues, tracking wet diapers, and when to wake a sleeping baby. Based on AAP guidelines.",
  alternates: { canonical: "/feeding/newborn" },
  openGraph: {
    title: "Newborn Feeding Guide (0-4 Weeks)",
    description:
      "Everything first-time parents need to know about feeding a newborn including frequency, amounts, and hunger cues.",
  },
};

const faqItems = [
  {
    question: "How often should a newborn eat?",
    answer:
      "Newborns should eat 8-12 times per day (about every 2-3 hours), including overnight. Feed on demand - whenever baby shows hunger cues like rooting, sucking hands, or fussiness. In the first 2 weeks, never let a newborn go more than 4 hours without eating, even if you need to wake them.",
  },
  {
    question: "How do I know my newborn is getting enough milk?",
    answer:
      "Key signs your baby is getting enough: 6+ wet diapers per day by day 5, 3-4 yellow seedy stools per day (breastfed) by day 4, baby is content after feeds (not always crying to eat), weight loss of no more than 7-10% in the first week, and regaining birth weight by 10-14 days. Your pediatrician will track weight at check-ups.",
  },
  {
    question: "Should I wake my newborn to feed?",
    answer:
      "Yes, in the first 2 weeks, wake your baby if they sleep more than 4 hours between feeds (3 hours if not yet back to birth weight). After baby has regained birth weight and is gaining well, you can generally let them sleep longer stretches at night. Always feed on demand during the day.",
  },
  {
    question: "What is cluster feeding and is it normal?",
    answer:
      "Cluster feeding is when a baby wants to feed very frequently (sometimes every 30-60 minutes) for several hours, usually in the evening. It is completely normal, especially in the first 6 weeks. It helps build milk supply and is often associated with growth spurts. It does not mean you do not have enough milk.",
  },
  {
    question: "How much formula should a newborn drink?",
    answer:
      "Day 1-2: 0.5-1 oz (15-30 ml) per feed. Day 3-4: 1-2 oz (30-60 ml) per feed. Week 1-2: 2-3 oz (60-90 ml) per feed. Week 3-4: 3-4 oz (90-120 ml) per feed. Feed every 2-3 hours (8-12 times per day). These are averages - follow your baby's hunger and fullness cues.",
  },
];

const takeaways = [
  "Feed your newborn 8-12 times per day (every 2-3 hours), on demand, including overnight.",
  "Your baby's stomach is tiny: marble-sized on day 1, walnut-sized by day 3, egg-sized by day 10.",
  "Track wet diapers to confirm adequate intake: aim for 6+ wet diapers per day by day 5.",
  "Cluster feeding (frequent feeds for hours at a time) is normal and does not mean low supply.",
  "Wake your newborn to feed if they sleep more than 4 hours in the first 2 weeks.",
];

export default function NewbornFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "Newborn Feeding Guide (0-4 Weeks)",
    description:
      "Complete guide to feeding your newborn in the first 4 weeks covering frequency, amounts, and hunger cues.",
    path: "/feeding/newborn",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Newborn (0-4 Weeks)" },
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
          { label: "Feeding", href: "/feeding" },
          { label: "Newborn (0-4 Weeks)" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Newborn Feeding Guide: The First 4 Weeks
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          The first month of feeding is a learning curve for both you and your
          baby. Whether breastfeeding, formula feeding, or a combination, this
          guide covers what to expect, how to know your baby is getting enough,
          and when to get help.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Stomach Size */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Your newborn&apos;s stomach size
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Understanding how tiny your baby&apos;s stomach is helps explain
            why they eat so frequently - and why small amounts are perfectly
            normal in the early days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-4">
              <p className="text-sm font-bold text-foreground">Day 1</p>
              <p className="text-xs text-muted">Size of a cherry (5-7 ml / 1 tsp)</p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-4">
              <p className="text-sm font-bold text-foreground">Day 3</p>
              <p className="text-xs text-muted">Size of a walnut (22-27 ml / 0.75-1 oz)</p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-4">
              <p className="text-sm font-bold text-foreground">Day 7</p>
              <p className="text-xs text-muted">Size of an apricot (45-60 ml / 1.5-2 oz)</p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-4">
              <p className="text-sm font-bold text-foreground">Day 30</p>
              <p className="text-xs text-muted">Size of an egg (80-150 ml / 2.5-5 oz)</p>
            </div>
          </div>
        </section>

        {/* Hunger Cues */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Recognizing hunger and fullness cues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Early hunger cues (feed now)
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Rooting (turning head, opening mouth)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Sucking on hands or fingers
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Lip smacking or licking
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Alertness and increased movement
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Late hunger cue (try to feed before this)
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Crying - this is a late hunger cue. A crying baby may need
                  to be calmed before latching
                </li>
              </ul>
              <h3 className="text-base font-bold text-foreground mb-2 mt-4">
                Fullness cues (stop feeding)
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Slowing or stopping sucking
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Turning away from breast or bottle
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Relaxed hands (unclenching fists)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Falling asleep at the breast/bottle
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Day-by-Day First Week */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The first week: Day by day
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-foreground">Day 1</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Colostrum (thick, yellow) is all baby needs. Expect 1-2 wet
                  diapers. Baby may be very sleepy after birth. Feed at least
                  8 times.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Day 2-3</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Baby becomes more alert and hungry. Expect more frequent
                  nursing. 3-4 wet diapers per day. Stools transition from
                  dark meconium to greenish. Milk begins to transition from
                  colostrum.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Day 3-5</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Milk &quot;comes in&quot; for breastfeeding mothers (breasts
                  become fuller). Baby may cluster feed intensely. 4-6 wet
                  diapers. Stools becoming yellow and seedy. Some weight loss
                  is normal (up to 7-10% of birth weight).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Day 5-7</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Feeding should be more established. 6+ wet diapers per day.
                  3-4+ yellow seedy stools per day. Weight loss should stop and
                  gain should begin. First pediatrician check-up typically
                  happens around days 3-5.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Output */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Tracking intake: The diaper count
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Since you cannot measure how much a breastfed baby is drinking,
            diaper output is the best indicator that baby is getting enough.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-alt border-b border-[#E8E2D9]">
                  <th className="text-left px-5 py-3 font-bold text-foreground">Age</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Wet Diapers</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Stools</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Day 1</td>
                  <td className="px-5 py-3 text-muted">1-2</td>
                  <td className="px-5 py-3 text-muted">1-2 (black meconium)</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Day 2</td>
                  <td className="px-5 py-3 text-muted">2-3</td>
                  <td className="px-5 py-3 text-muted">1-2 (dark green/brown)</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="px-5 py-3 font-semibold text-foreground">Day 3-4</td>
                  <td className="px-5 py-3 text-muted">3-4</td>
                  <td className="px-5 py-3 text-muted">3+ (transitioning to yellow)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-foreground">Day 5+</td>
                  <td className="px-5 py-3 text-primary font-semibold">6+</td>
                  <td className="px-5 py-3 text-muted">3-4+ (yellow, seedy)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cluster Feeding */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Cluster feeding: What to expect
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <p className="text-sm text-muted leading-relaxed mb-3">
              Cluster feeding is when your baby wants to feed very frequently
              (sometimes every 30-60 minutes) for several hours, typically in
              the evenings. This is completely normal and does not mean you do
              not have enough milk.
            </p>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Most common in the first 6 weeks
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Often happens during growth spurts (2-3 weeks, 6 weeks)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Helps build and regulate milk supply
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Often followed by a longer sleep stretch
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Get comfortable, have water and snacks ready, and let baby feed
              </li>
            </ul>
          </div>
        </section>

        {/* When to Get Help */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to contact your pediatrician
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Baby has lost more than 10% of birth weight
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Fewer than 6 wet diapers per day after day 5
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                No stool for more than 24 hours in the first month
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Baby is excessively sleepy and difficult to wake for feeds
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Baby is always fussy and never seems satisfied after feeding
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Signs of dehydration: dry mouth, sunken fontanelle, no tears
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Breastfeeding is persistently painful after the first week
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Yellow skin (jaundice) that is not improving
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="In the first 4 weeks, feed your newborn 8-12 times per day on demand. Watch for hunger cues, track wet diapers to confirm adequate intake (6+ per day by day 5), and do not worry about strict schedules. Cluster feeding is normal. If your baby regains birth weight by 2 weeks and has plenty of wet diapers, they are getting enough. You are doing great." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
