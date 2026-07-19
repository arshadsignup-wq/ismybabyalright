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
  title: "Safe Sleep Guidelines for Babies (AAP 2024)",
  description:
    "Complete AAP safe sleep guidelines for infants. Covers back sleeping, firm surfaces, room-sharing, swaddling safety, and SIDS risk reduction. Updated to reflect the latest AAP recommendations.",
  alternates: { canonical: "/sleep/safe-sleep" },
  openGraph: {
    title: "Safe Sleep Guidelines for Babies (AAP 2024)",
    description:
      "Everything you need to know about safe infant sleep based on the latest AAP guidelines and SIDS research.",
  },
};

const faqItems = [
  {
    question: "When can my baby sleep on their stomach?",
    answer:
      "Once your baby can independently roll from back to tummy AND tummy to back (typically around 4 to 6 months), you do not need to reposition them if they roll to their stomach during sleep. However, always place them on their back at the start of every sleep. The ability to roll both ways indicates sufficient strength to reposition if needed.",
  },
  {
    question: "Is it safe to use a blanket in the crib?",
    answer:
      "The AAP recommends no loose bedding in the crib for at least the first 12 months. Instead of blankets, use a wearable blanket (sleep sack) to keep your baby warm. After 12 months, the risk of SIDS drops significantly and a thin blanket may be introduced, though many families continue with sleep sacks through toddlerhood.",
  },
  {
    question: "Can I use a dock-a-tot or baby lounger for sleep?",
    answer:
      "No. Infant loungers, nests, and docks (including DockATot, Snuggle Me, and similar products) are not safe for sleep. They do not meet CPSC safe sleep standards due to soft sides and risk of suffocation. These products are marketed for supervised lounging only. In 2022, CPSC issued new rules requiring all infant sleep products to meet the same safety standards as cribs and bassinets.",
  },
  {
    question: "Should I use a baby monitor with breathing detection?",
    answer:
      "The AAP does not recommend home cardiorespiratory monitors (including wearable monitors like Owlet or Snuza) as a strategy to reduce SIDS risk. While these devices may provide reassurance, there is no evidence they prevent SIDS, and false alarms can increase parental anxiety. The most effective SIDS prevention strategies are safe sleep practices.",
  },
  {
    question: "Is room-sharing the same as co-sleeping?",
    answer:
      "No. Room-sharing means your baby sleeps on their own separate, safe surface (crib or bassinet) in your bedroom. Co-sleeping typically refers to bed-sharing, where the baby sleeps on the same surface as an adult. The AAP recommends room-sharing for at least 6 months but advises against bed-sharing due to increased risk of sleep-related death.",
  },
];

const takeaways = [
  "Always place babies on their back to sleep, for every sleep, until age 1.",
  "Use a firm, flat mattress with only a fitted sheet -- nothing else in the crib.",
  "Room-share (baby in your room, own surface) for at least 6 months, ideally 12.",
  "No blankets, pillows, bumpers, stuffed animals, or inclined surfaces for sleep.",
  "Swaddling is safe until baby shows signs of rolling (typically around 8 weeks).",
  "Pacifier use at sleep time is associated with reduced SIDS risk.",
];

export default function SafeSleepPage() {
  const contentSchema = getContentPageSchema({
    name: "Safe Sleep Guidelines for Babies (AAP 2024)",
    description:
      "Complete AAP safe sleep guidelines covering back sleeping, firm surfaces, room-sharing, and SIDS risk reduction.",
    path: "/sleep/safe-sleep",
    lastModified: "2026-07-01",
    medicalGuidelines: [
      { name: "AAP Safe Sleep Policy Statement", url: "https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022" },
      { name: "NIH Safe to Sleep Campaign", url: "https://safetosleep.nichd.nih.gov/" },
      { name: "CPSC Safe Sleep Environment", url: "https://www.cpsc.gov/SafeSleep" },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Safe Sleep" },
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
          { label: "Safe Sleep" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Safe Sleep Guidelines for Babies (AAP 2024)
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Safe sleep practices are the single most effective way to reduce the risk of
          Sudden Infant Death Syndrome (SIDS) and other sleep-related infant deaths.
          This guide summarizes the current AAP recommendations, explains the evidence
          behind each guideline, and provides practical tips for implementation.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "CPSC", "NIH"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Back to sleep: the most important rule
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Since the &quot;Back to Sleep&quot; campaign launched in 1994, SIDS rates have
            dropped by more than 50%. Place your baby on their back for every sleep --
            naps and nighttime. Side sleeping is not safe for young infants as babies can
            easily roll onto their stomachs from a side position. Once your baby can roll
            both ways independently (typically 4 to 6 months), you do not need to
            reposition them, but always start on the back.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The sleep surface: firm and flat
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Your baby should sleep on a firm, flat surface that meets CPSC safety
            standards. This means a crib, bassinet, or play yard with a tight-fitting
            mattress and a single fitted sheet. The mattress should not indent when you
            press on it. Never use memory foam, pillow-top mattresses, or add padding
            under the fitted sheet.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Products NOT safe for sleep include: car seats, swings, bouncers, strollers,
            infant loungers (DockATot, Snuggle Me), inclined sleepers, and any surface
            with an incline greater than 10 degrees. If your baby falls asleep in one of
            these, move them to a flat, firm surface as soon as possible.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Nothing in the crib
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The sleep space should contain only your baby and a fitted sheet. Remove all
            blankets, pillows, stuffed animals, crib bumpers (including mesh liners),
            wedges, positioners, and loose bedding. These items pose suffocation and
            entrapment risks. For warmth, use a wearable blanket or sleep sack
            appropriate for the room temperature.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Room-sharing without bed-sharing
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The AAP recommends that infants sleep in their parents&apos; room, close to
            their parents&apos; bed, but on a separate surface designed for infants, for
            at least the first 6 months and ideally for the first year. Room-sharing
            reduces SIDS risk by up to 50% according to research. Bed-sharing, however,
            increases risk, particularly for babies under 4 months, premature babies, and
            when parents smoke, consume alcohol, or use sedating medications.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Swaddling safety
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Swaddling can help calm newborns and promote sleep in the first weeks of life.
            Safe swaddling means the swaddle is snug around the arms but allows hip
            flexion and movement. The AAP recommends stopping swaddling as soon as your
            baby shows any signs of attempting to roll, which can happen as early as 6 to
            8 weeks. A swaddled baby who rolls to their stomach is at increased risk of
            suffocation because they cannot use their arms to push up or reposition.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Transition options include arms-out swaddles, transitional sleep suits, or
            moving directly to a sleep sack.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Pacifiers and SIDS risk reduction
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Offering a pacifier at sleep time (naps and bedtime) is associated with a
            reduced risk of SIDS. The mechanism is not fully understood, but it may
            relate to maintaining airway patency or preventing deep sleep states. The
            AAP recommends offering a pacifier once breastfeeding is well established
            (usually by 3 to 4 weeks). If the pacifier falls out after the baby falls
            asleep, you do not need to replace it. Never attach a pacifier to a string,
            clip, or stuffed animal in the crib.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Additional risk-reduction strategies
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Avoid smoke exposure:</strong> Prenatal and postnatal tobacco exposure significantly increases SIDS risk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Avoid alcohol and drugs:</strong> Impaired caregivers should never bed-share.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Prenatal care:</strong> Regular prenatal visits and avoiding prenatal smoking reduce SIDS risk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Immunizations:</strong> Current evidence shows vaccinations reduce SIDS risk by up to 50%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Tummy time when awake:</strong> Supervised tummy time helps develop neck and shoulder strength needed for repositioning.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong>Do not overheat:</strong> Dress your baby in no more than one layer more than you would wear. Keep room temperature between 68 and 72 degrees F.</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When safe sleep feels hard
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Following safe sleep guidelines is especially challenging when you are
            exhausted and your baby only seems to sleep in your arms or on your chest.
            If you find yourself falling asleep while holding your baby, an adult bed
            (with blankets and pillows removed) is safer than a couch or armchair, where
            suffocation risk is significantly higher. However, the safest option is always
            to place your baby on their own firm, flat surface.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Ask for help from a partner, family member, or postpartum support so you
            can get rest. If you feel unable to stay awake during feeds, consider
            alternate feeding arrangements or take shifts with a partner.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Safe sleep practices are the most effective way to protect your baby. The core rules are simple: back to sleep, firm flat surface, nothing in the crib, and room-sharing without bed-sharing. These guidelines apply to every sleep -- naps, nighttime, and at any caregiver's home. While it can feel difficult when you are sleep-deprived, these practices significantly reduce the risk of SIDS and sleep-related death." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
