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
  title: "Bottle Feeding Guide: Paced Feeding, Bottles & Tips",
  description:
    "Complete guide to bottle feeding your baby. Covers paced bottle feeding technique, choosing the right bottle and nipple, warming milk safely, preventing gas, and combining breast and bottle feeding.",
  alternates: { canonical: "/feeding/bottle-feeding" },
  openGraph: {
    title: "Bottle Feeding Guide: Paced Feeding, Bottles & Tips",
    description:
      "Learn paced bottle feeding, how to choose bottles, and safe preparation techniques for breast milk and formula.",
  },
};

const faqItems = [
  {
    question: "What is paced bottle feeding and why does it matter?",
    answer:
      "Paced bottle feeding is a technique where you hold the bottle more horizontally and allow the baby to control the pace of feeding, rather than gravity forcing milk into their mouth. This mimics breastfeeding flow, reduces overfeeding, prevents gas, and makes transitioning between breast and bottle easier.",
  },
  {
    question: "How do I choose the right bottle nipple flow?",
    answer:
      "Start with the slowest flow nipple (usually labeled 'preemie' or 'slow flow/size 0-1'). If your baby is getting frustrated, collapsing the nipple from sucking too hard, or taking over 30 minutes to finish a bottle, try the next flow level. If milk is dripping out the sides or baby is gulping/choking, go back down a level.",
  },
  {
    question: "Can I switch between breastfeeding and bottle feeding?",
    answer:
      "Yes. To minimize nipple confusion, most lactation consultants recommend waiting until breastfeeding is well established (around 3-4 weeks) before introducing a bottle. Use paced feeding and a slow-flow nipple to keep the bottle experience similar to breastfeeding.",
  },
  {
    question: "How long can a bottle sit out after baby starts drinking?",
    answer:
      "Once a baby has started drinking from a bottle, use the milk within 1 hour for formula and within 2 hours for breast milk, then discard the remainder. Bacteria from baby's mouth can grow in the milk. Never re-refrigerate a partially consumed bottle.",
  },
  {
    question: "How do I reduce gas and spit-up during bottle feeding?",
    answer:
      "Use paced feeding, keep baby semi-upright (45-degree angle), burp every 2-3 ounces, ensure a good seal around the nipple to reduce air swallowing, try anti-colic bottles with venting systems, and avoid shaking the bottle vigorously (swirl instead to mix formula).",
  },
];

const takeaways = [
  "Paced bottle feeding helps prevent overfeeding and reduces gas by letting baby control the pace of the feed.",
  "Start with the slowest flow nipple and only increase when baby shows signs of frustration or feeds take too long.",
  "Hold baby semi-upright at a 45-degree angle during bottle feeding - never prop a bottle or feed a baby lying flat.",
  "Whether feeding expressed breast milk or formula, safe preparation and temperature are critical for baby's safety.",
  "Burp baby every 2-3 ounces (or mid-feed and at the end) to reduce trapped air and discomfort.",
];

export default function BottleFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "Bottle Feeding Guide: Paced Feeding, Bottles & Tips",
    description:
      "Complete guide to bottle feeding covering paced feeding technique, choosing bottles, and safe preparation.",
    path: "/feeding/bottle-feeding",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Bottle Feeding" },
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
          { label: "Bottle Feeding" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Bottle Feeding Guide: Paced Feeding &amp; Best Practices
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Whether you are feeding expressed breast milk or formula, proper
          bottle feeding technique matters. This guide covers paced feeding,
          choosing the right bottle setup, and making bottle feeding a
          comfortable experience for both you and your baby.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "CDC", "ABM"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Paced Feeding */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to do paced bottle feeding
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Paced bottle feeding mimics the flow of breastfeeding and helps
            prevent overfeeding. It is especially important for breastfed
            babies who also take bottles, but benefits all bottle-fed babies.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Hold baby semi-upright</strong> - Support baby at a
                45-degree angle, never lying flat
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Hold bottle horizontally</strong> - The nipple should
                be only partially filled with milk, not fully flooded
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Let baby draw the nipple in</strong> - Touch the
                nipple to baby&apos;s lips and wait for them to open wide and
                latch on
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Pause frequently</strong> - After every 20-30 sucks or
                every ounce, tip the bottle down or remove it briefly to give
                baby a break
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Watch for fullness cues</strong> - Slowing down,
                turning away, pushing bottle away, or falling asleep means
                baby is done (even if the bottle is not empty)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Switch sides</strong> - Halfway through the feed, move
                baby to your other arm to promote eye development and mimic
                breastfeeding
              </li>
            </ol>
          </div>
        </section>

        {/* Choosing Bottles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Choosing the right bottle and nipple
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Nipple flow rates
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Preemie/Size 0</strong> - Slowest flow, for premature
                  babies or newborns
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Size 1 (slow)</strong> - Most newborns and young
                  babies; recommended for breastfed babies at any age
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Size 2 (medium)</strong> - Typically 3-6 months;
                  only move up if baby shows signs of frustration
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Size 3+ (fast)</strong> - Older babies who need
                  faster flow; many breastfed babies never need to move past
                  size 1
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Bottle features to consider
              </h3>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Anti-colic venting</strong> - Reduces air
                  swallowing; helpful for gassy babies
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Wide vs narrow neck</strong> - Wide neck may be
                  easier for breastfed babies; narrow bottles are easier to
                  grip
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Material</strong> - Glass (durable, no chemicals),
                  plastic (lightweight, less breakable), silicone (flexible,
                  mimics breast)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Shape</strong> - Angled bottles may reduce air
                  intake; straight bottles are simpler to clean
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safe Preparation */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Safe bottle preparation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Formula preparation
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Wash hands thoroughly before preparing
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Follow exact water-to-powder ratio on the label
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Use room temperature or warm water (not hot)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Swirl gently to mix (shaking creates air bubbles)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Test temperature on inner wrist before feeding
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Use within 1 hour of preparation at room temperature
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Warming breast milk
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Thaw frozen milk in the refrigerator overnight or under
                  warm running water
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Warm by placing bottle in a bowl of warm water for a few
                  minutes
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Never microwave breast milk (creates hot spots and destroys
                  nutrients)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Gently swirl to mix separated fat layer
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Use thawed milk within 24 hours; never re-freeze
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Much to Feed */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How much to put in the bottle
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Newborn (0-2 weeks)</strong> - 1-2 oz (30-60 ml)
                per feed, 8-12 times per day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>2 weeks - 2 months</strong> - 2-4 oz (60-120 ml)
                per feed, 6-8 times per day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>2-4 months</strong> - 4-6 oz (120-180 ml) per feed,
                5-6 times per day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>4-6 months</strong> - 6-8 oz (180-240 ml) per feed,
                4-5 times per day
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Breastfed babies</strong> - Typically take 3-4 oz
                (90-120 ml) per bottle regardless of age due to breast milk
                composition changes
              </li>
            </ul>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              These are averages. Let your baby guide intake by following
              hunger and fullness cues rather than forcing a set amount.
            </p>
          </div>
        </section>

        {/* Reducing Gas */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Reducing gas and discomfort
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Use paced feeding to slow the flow and reduce air swallowing
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Burp after every 2-3 oz and at the end of the feed
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Ensure baby has a good seal around the nipple with lips flanged
              outward
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Try anti-colic bottles with venting systems if gas persists
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Swirl formula instead of shaking to reduce air bubbles
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Hold baby upright for 15-20 minutes after feeding
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Keep baby calm before feeding - crying can cause air swallowing
            </li>
          </ul>
        </section>

        {/* Never Do */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Important safety reminders
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Never prop a bottle</strong> - Always hold baby and
                bottle during feeds; propping increases choking risk and ear
                infections
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Never microwave</strong> - Microwaving creates hot
                spots that can burn baby&apos;s mouth
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Never add cereal to a bottle</strong> - Unless
                specifically directed by your pediatrician for medical
                reasons (like reflux)
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Never force baby to finish</strong> - Respect fullness
                cues; overfeeding causes discomfort and can lead to unhealthy
                feeding patterns
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                <strong>Never dilute formula or add extra powder</strong> -
                Always follow exact label instructions
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Paced bottle feeding is the gold standard technique for all bottle-fed babies. Use the slowest flow nipple that works, hold baby semi-upright, pause frequently, and always respect fullness cues. Whether feeding breast milk or formula, responsive bottle feeding supports healthy development and a positive feeding relationship." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
