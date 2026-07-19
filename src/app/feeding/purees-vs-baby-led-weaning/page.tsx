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
    "Purees vs Baby-Led Weaning: Comparing Approaches to Starting Solids",
  description:
    "Compare purees and baby-led weaning (BLW) side by side. Covers readiness signs, choking risk, motor skill development, convenience, and what the research shows about each approach.",
  alternates: { canonical: "/feeding/purees-vs-baby-led-weaning" },
  openGraph: {
    title:
      "Purees vs Baby-Led Weaning: Comparing Approaches to Starting Solids",
    description:
      "Side-by-side comparison of purees and baby-led weaning with evidence-based pros and cons.",
  },
};

const faqItems = [
  {
    question:
      "Can I combine purees and baby-led weaning?",
    answer:
      "Yes. A combined approach is common and sometimes called \"baby-led introduction to solids\" or simply a mixed approach. You might offer purees on a preloaded spoon alongside soft finger foods, letting your baby explore both textures. Research suggests this combined method is safe and may offer the benefits of both approaches.",
  },
  {
    question:
      "Is baby-led weaning more dangerous for choking than purees?",
    answer:
      "Research has not found a significant difference in choking rates between baby-led weaning and traditional purees when safe food preparation guidelines are followed. Gagging, which is a normal protective reflex, is more common with BLW and is often mistaken for choking. Key safety rules for both approaches include avoiding hard, round, or sticky foods and always supervising mealtimes.",
  },
  {
    question:
      "What are the signs my baby is ready for solid foods?",
    answer:
      "Most babies are ready for solids around 6 months when they can sit upright with minimal support, have good head and neck control, show interest in food (reaching, opening mouth), and have lost the tongue-thrust reflex that pushes food out. These readiness signs apply whether you choose purees, BLW, or a combination.",
  },
];

const takeaways = [
  "Both purees and baby-led weaning are safe, evidence-based ways to introduce solid foods starting around 6 months.",
  "Purees allow earlier introduction (some pediatricians recommend starting at 4 months for certain babies); BLW is designed for 6 months and older.",
  "Baby-led weaning supports self-feeding skills and motor development but requires careful food preparation to reduce choking risk.",
  "Research shows comparable nutritional outcomes for both approaches when a variety of foods is offered.",
  "Many families use a combined approach, offering both purees and finger foods based on the baby's readiness.",
];

const comparisonRows = [
  [
    "Start Age",
    "4-6 months (with pediatrician guidance for earlier introduction)",
    "6 months (baby must be able to sit upright independently)",
  ],
  [
    "Choking Risk",
    "Lower with thin, smooth purees; increases as textures thicken",
    "Requires careful food preparation and supervision; soft, appropriate shapes are essential",
  ],
  [
    "Motor Skills",
    "Spoon feeding by parent; baby learns to accept food from a spoon and swallow smooth textures",
    "Self-feeding from the start; develops hand-eye coordination, pincer grasp, and chewing skills",
  ],
  [
    "Mess Level",
    "Moderate; spoon feeding is more contained but still messy as baby learns",
    "High; baby explores food by touching, squishing, and dropping, which is part of the learning process",
  ],
  [
    "Convenience",
    "Can batch-prepare and freeze; portable in pouches or jars; gradual texture progression",
    "Baby eats modified versions of family meals; less separate preparation but more supervision needed",
  ],
  [
    "Food Variety",
    "Gradual introduction of single foods then combinations; texture advances over weeks to months",
    "Wide variety of foods and textures from the start; baby chooses what and how much to eat",
  ],
  [
    "Independence",
    "Parent-led; parent controls what goes on the spoon and the pace of feeding",
    "Baby-led; baby chooses what to pick up and how much to eat, supporting appetite self-regulation",
  ],
  [
    "Evidence",
    "Well-established approach with decades of pediatric guidelines supporting its safety and effectiveness",
    "Growing research base showing comparable outcomes to purees; endorsed by many pediatric organizations",
  ],
];

export default function PureesVsBLWPage() {
  const breadcrumbSchemaItems = [
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Purees vs Baby-Led Weaning" },
  ];

  const contentSchema = getContentPageSchema({
    name: "Purees vs Baby-Led Weaning: Comparing Approaches to Starting Solids",
    description:
      "Side-by-side comparison of purees and baby-led weaning with evidence-based pros and cons.",
    path: "/feeding/purees-vs-baby-led-weaning",
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
          { label: "Feeding", href: "/feeding" },
          { label: "Purees vs Baby-Led Weaning" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Purees vs Baby-Led Weaning: Comparing Approaches to
          Starting Solids
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Purees and baby-led weaning (BLW) are two approaches to
          introducing solid foods to infants around 6 months of age.
          This comparison covers readiness signs, safety,
          developmental benefits, and what the research shows.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <ComparisonTable
          caption="Purees vs baby-led weaning comparison"
          headers={["Factor", "Purees", "Baby-Led Weaning"]}
          rows={comparisonRows}
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Understanding gagging vs choking
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            One of the biggest concerns parents have about baby-led
            weaning is choking risk. It is important to understand
            the difference between gagging and choking. Gagging is a
            normal reflex that pushes food forward in the mouth and
            is actually a safety mechanism. It is noisy, and the
            baby&apos;s face may turn red, but they can still
            breathe. Choking is silent, the baby cannot cough or cry,
            and the skin may turn blue. Gagging is common with both
            purees and BLW as babies learn to manage new textures.
            Regardless of the approach you choose, always supervise
            your baby during meals, know infant CPR, and avoid
            high-risk foods like whole grapes, whole nuts, popcorn,
            raw carrots, and chunks of hard food.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to get started with either approach
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            For purees, begin with single-ingredient foods like
            sweet potato, avocado, banana, or iron-fortified baby
            cereal. Offer one new food every 2 to 3 days to watch
            for allergic reactions. Gradually increase texture
            thickness over weeks. For baby-led weaning, start with
            soft foods cut into finger-length strips that your baby
            can grasp with a palmar grip. Good first BLW foods
            include steamed broccoli florets, ripe avocado strips,
            soft-cooked sweet potato sticks, and banana spears
            (rolled in crushed cereal to reduce slipperiness). With
            both approaches, continue offering breast milk or formula
            as the primary source of nutrition for the first year.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Iron and nutrition considerations
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Iron stores from birth begin to deplete around 6 months,
            making iron-rich foods an important part of early solids
            regardless of the approach. With purees, iron-fortified
            cereals and pureed meats are common early foods. With
            BLW, offering soft-cooked strips of meat, iron-fortified
            toast fingers, or lentil patties can help meet iron
            needs. If you are concerned about iron intake, your
            pediatrician can check levels with a simple blood test.
            Both approaches should aim to include a variety of food
            groups, including fruits, vegetables, proteins, grains,
            and healthy fats, by the time the baby is eating three
            meals a day.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Both purees and baby-led weaning are safe, effective approaches to starting solid foods. The best method is the one that fits your baby's developmental readiness, your family's lifestyle, and your comfort level. Many families successfully combine both approaches. What matters most is offering a variety of nutritious foods in a safe, supervised setting and following your baby's cues." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
