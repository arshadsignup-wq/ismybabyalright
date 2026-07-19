import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ComparisonTable from "@/components/shared/ComparisonTable";
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
  title:
    "Crib vs Bassinet: Which Is Safer and Better for Your Baby?",
  description:
    "Compare cribs and bassinets side by side. Covers safety standards, age limits, portability, cost, and AAP safe sleep recommendations to help you choose the right sleep surface.",
  alternates: { canonical: "/sleep/crib-vs-bassinet" },
  openGraph: {
    title:
      "Crib vs Bassinet: Which Is Safer and Better for Your Baby?",
    description:
      "Side-by-side comparison of cribs and bassinets with safety standards, cost, and AAP recommendations.",
  },
};

const faqItems = [
  {
    question:
      "Can a newborn sleep in a full-size crib from day one?",
    answer:
      "Yes. A full-size crib that meets current CPSC safety standards is a safe sleep surface from birth. While bassinets are popular for the newborn period because of their portability and smaller size, a crib is equally safe and can be used from birth through toddlerhood.",
  },
  {
    question: "When should I transition my baby from a bassinet to a crib?",
    answer:
      "Most bassinets have a weight limit of 15 to 20 pounds, and manufacturers recommend transitioning when your baby begins to push up on hands and knees, roll over, or reaches the weight limit. This typically happens around 4 to 6 months of age. Always check your specific bassinet's guidelines.",
  },
  {
    question: "Are bedside bassinets safe for co-sleeping?",
    answer:
      "Bedside bassinets (also called co-sleepers) that attach to the side of an adult bed can be safe when they meet CPSC/ASTM standards and are used according to the manufacturer's instructions. The baby sleeps on a separate, firm surface next to the parent. This is different from bed-sharing, which the AAP advises against.",
  },
  {
    question:
      "Do I need both a crib and a bassinet?",
    answer:
      "You do not need both. If space or budget is limited, a crib alone covers all your needs from birth onward. A bassinet is a convenience item that makes the first few months easier for nighttime feeds and room-sharing but is not a necessity. Some families start with a bassinet and purchase a crib when the baby outgrows it.",
  },
];

const takeaways = [
  "Both cribs and bassinets are safe for newborns when they meet current CPSC safety standards.",
  "Bassinets are portable and ideal for room-sharing during the first 4 to 6 months.",
  "Cribs offer longer usability, typically lasting from birth through age 2 to 3 years.",
  "The AAP recommends room-sharing (not bed-sharing) for at least the first 6 months, which either option can support.",
  "Always use a firm, flat mattress with a fitted sheet and nothing else in the sleep space.",
];

const comparisonRows = [
  [
    "Safety Standard",
    "CPSC certified; must meet federal crib safety standards (16 CFR 1219/1220)",
    "CPSC and ASTM certified (ASTM F2194); must meet federal bassinet standards",
  ],
  [
    "Age Range",
    "Birth to toddlerhood (until child climbs out, typically 2-3 years)",
    "Birth to approximately 5-6 months or when baby begins to push up/roll",
  ],
  [
    "Portability",
    "Stationary; heavy and designed to stay in one room",
    "Easily moved between rooms; lightweight, often has wheels or is collapsible",
  ],
  [
    "Size",
    "Larger footprint (approximately 28\" x 52\" interior); requires dedicated space",
    "Compact (approximately 16\" x 32\" interior); fits next to the bed or in smaller rooms",
  ],
  [
    "Cost",
    "$100-$500+ depending on style and features",
    "$50-$250 for most models; some premium options cost more",
  ],
  [
    "AAP Position",
    "Recommended as a safe sleep surface for all ages; meets room-sharing guidelines when placed in parents' room",
    "Recommended for the first 6 months; supports room-sharing which the AAP recommends",
  ],
  [
    "Longevity",
    "2-3 years of use; many convert to toddler beds for additional years",
    "4-6 months of use before baby must transition to a crib",
  ],
  [
    "Mattress",
    "Firm, fitted mattress with a tight-fitting sheet; no additional bedding",
    "Firm, fitted mattress or pad with a tight-fitting sheet; no additional bedding",
  ],
];

export default function CribVsBassinetPage() {
  const breadcrumbSchemaItems = [
    { name: "Home", url: "/" },
    { name: "Sleep", url: "/sleep" },
    { name: "Crib vs Bassinet" },
  ];

  const contentSchema = getContentPageSchema({
    name: "Crib vs Bassinet: Which Is Safer and Better for Your Baby?",
    description:
      "Side-by-side comparison of cribs and bassinets with safety standards, cost, and AAP recommendations.",
    path: "/sleep/crib-vs-bassinet",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbSchemaItems);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Sleep", href: "/sleep" },
          { label: "Crib vs Bassinet" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Crib vs Bassinet: Which Is Safer and Better for Your Baby?
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Cribs and bassinets are both safe sleep surfaces for
          newborns when used correctly. This comparison covers safety
          standards, age limits, portability, cost, and what the AAP
          recommends to help you choose.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'CPSC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <ComparisonTable
          caption="Crib vs bassinet comparison"
          headers={["Factor", "Crib", "Bassinet"]}
          rows={comparisonRows}
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Safe sleep practices for both cribs and bassinets
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Regardless of whether you choose a crib or bassinet, the
            AAP&apos;s safe sleep guidelines are the same. Always
            place your baby on their back to sleep on a firm, flat
            surface. Use only a fitted sheet designed for that
            specific sleep surface. Keep the sleep area free of
            blankets, pillows, bumpers, stuffed animals, and loose
            bedding. Maintain a comfortable room temperature (68-72
            degrees F) and dress your baby in a sleep sack instead of
            loose blankets. Room-sharing, where the baby sleeps in
            the same room as the parents but on their own surface, is
            recommended for at least the first 6 months and ideally
            the first year.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to transition from bassinet to crib
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The transition from bassinet to crib should happen before
            your baby reaches the bassinet&apos;s weight limit or
            begins showing signs of increased mobility. Key signs
            that it is time to move include rolling over (or
            attempting to), pushing up on hands and knees, and
            appearing cramped in the bassinet. Most babies are ready
            between 4 and 6 months. To make the transition smoother,
            you can start with naps in the crib before moving
            nighttime sleep there. Place the crib in your room if
            possible so the environment stays familiar. Many parents
            find that the transition goes more smoothly than expected
            since the crib offers more room for the baby to move
            comfortably.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to avoid when choosing a sleep surface
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The CPSC and AAP recommend against several types of sleep
            products. Inclined sleepers (any product with an incline
            greater than 10 degrees) have been linked to infant
            deaths and have been recalled. Crib bumpers, including
            mesh liners, are not recommended. Second-hand cribs
            should be checked against CPSC recall lists and must meet
            current safety standards (drop-side cribs, for example,
            were banned in 2011). Never use a product for sleep that
            was not designed and tested for that purpose, such as a
            car seat, swing, or bouncer.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Both cribs and bassinets are safe for newborns when they meet current safety standards and are used according to AAP guidelines. A bassinet offers portability and convenience for the first several months, while a crib provides a longer-term sleep surface that grows with your baby. The most important factor is not which one you choose, but that you follow safe sleep practices consistently." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
