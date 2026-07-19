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
    "Breastfeeding vs Formula Feeding: An Evidence-Based Comparison",
  description:
    "Compare breastfeeding and formula feeding side by side. Covers nutrition, immunity, cost, convenience, bonding, and AAP/WHO recommendations to help you make the best choice for your family.",
  alternates: { canonical: "/feeding/breastfeeding-vs-formula" },
  openGraph: {
    title:
      "Breastfeeding vs Formula Feeding: An Evidence-Based Comparison",
    description:
      "Side-by-side comparison of breastfeeding and formula feeding with evidence-based pros and cons.",
  },
};

const faqItems = [
  {
    question: "Can I combine breastfeeding and formula feeding?",
    answer:
      "Yes. Combination feeding (also called mixed feeding) is common and can work well. Many families breastfeed when possible and supplement with formula as needed. Introducing a bottle of formula does not mean you have to stop breastfeeding entirely.",
  },
  {
    question:
      "Is formula nutritionally equivalent to breast milk?",
    answer:
      "Modern infant formulas are designed to closely match the nutritional profile of breast milk and meet all of a baby's nutritional needs. However, breast milk contains living antibodies, enzymes, and prebiotics that formula cannot replicate. Both options support healthy growth and development.",
  },
  {
    question:
      "When can I introduce formula if I am breastfeeding?",
    answer:
      "If you are breastfeeding and want to supplement, most lactation consultants recommend waiting until breastfeeding is well established, typically around 3 to 4 weeks, before introducing a bottle. However, if supplementation is medically necessary, it can be introduced at any time.",
  },
  {
    question:
      "Can I switch from formula to breastfeeding or vice versa?",
    answer:
      "You can switch in either direction. Going from formula to breastfeeding (relactation) is possible but may require support from a lactation consultant. Switching from breastfeeding to formula can be done gradually by replacing one feeding at a time to avoid engorgement and allow your supply to adjust.",
  },
];

const takeaways = [
  "Both breastfeeding and formula feeding provide the nutrition babies need to grow and thrive.",
  "Breast milk offers unique immune benefits including antibodies that formula cannot replicate.",
  "Formula feeding allows more flexibility and equal partner involvement in feeding.",
  "The AAP recommends exclusive breastfeeding for about 6 months, but supports any amount of breastfeeding as beneficial.",
  "The best feeding method is the one that works for your family's health, circumstances, and well-being.",
];

const comparisonRows = [
  [
    "Nutrition",
    "Complete nutrition that adapts to baby's changing needs; composition varies by feeding session",
    "Standardized, complete nutrition regulated by the FDA; consistent composition in every bottle",
  ],
  [
    "Immunity",
    "Contains living antibodies (IgA), white blood cells, and prebiotics that support immune development",
    "Does not contain antibodies or living immune cells; some formulas include added prebiotics",
  ],
  [
    "Cost",
    "No direct cost for milk itself; may require a pump ($0-$300+), storage bags, and nursing supplies",
    "Approximately $1,200-$3,000 per year depending on brand; plus bottles and cleaning supplies",
  ],
  [
    "Convenience",
    "Always available at the right temperature; no preparation needed, but mother must be present or pump",
    "Can be prepared by anyone, anytime; requires measuring, mixing, sterilizing, and temperature checking",
  ],
  [
    "Bonding",
    "Skin-to-skin contact during nursing supports bonding; oxytocin release benefits both mother and baby",
    "Bonding occurs through holding, eye contact, and responsive feeding; any caregiver can share this experience",
  ],
  [
    "Return to Work",
    "Requires pumping schedule, milk storage, and employer accommodation; protected under federal law",
    "Simpler logistics for working parents; no pumping breaks or milk storage needed",
  ],
  [
    "Partner Involvement",
    "Partner can bottle-feed expressed milk but cannot directly breastfeed",
    "Any caregiver can prepare and give a bottle, enabling equal feeding responsibilities",
  ],
  [
    "Night Feeding",
    "Mother handles most or all night feeds unless pumped milk is available; no preparation needed",
    "Parents can take turns; requires bottle preparation in the middle of the night",
  ],
  [
    "AAP Recommendation",
    "Recommends exclusive breastfeeding for about 6 months, continued through 2 years or beyond",
    "Recognized as a safe, nutritionally complete alternative when breastfeeding is not possible or chosen",
  ],
  [
    "WHO Recommendation",
    "Recommends exclusive breastfeeding for 6 months, continued with complementary foods to 2 years or beyond",
    "Advises that if breast milk substitutes are used, they should meet international quality standards",
  ],
];

export default function BreastfeedingVsFormulaPage() {
  const breadcrumbSchemaItems = [
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Breastfeeding vs Formula" },
  ];

  const contentSchema = getContentPageSchema({
    name: "Breastfeeding vs Formula Feeding: An Evidence-Based Comparison",
    description:
      "Side-by-side comparison of breastfeeding and formula feeding with evidence-based pros and cons.",
    path: "/feeding/breastfeeding-vs-formula",
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
          { label: "Breastfeeding vs Formula" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Breastfeeding vs Formula Feeding: An Evidence-Based
          Comparison
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Breastfeeding and formula feeding are two methods of
          providing nutrition to infants, each with distinct
          advantages. This evidence-based comparison covers nutrition,
          immunity, cost, convenience, and what major medical
          organizations recommend.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <ComparisonTable
          caption="Breastfeeding vs formula feeding comparison"
          headers={[
            "Factor",
            "Breastfeeding",
            "Formula Feeding",
          ]}
          rows={comparisonRows}
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When combination feeding makes sense
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Many families find that a combination of breastfeeding
            and formula feeding works best for their situation.
            Combination feeding can be helpful when a mother needs to
            return to work, when breast milk supply does not fully
            meet the baby&apos;s needs, or when a partner wants to
            share feeding responsibilities. Any amount of breast milk
            provides immune benefits, so supplementing with formula
            does not erase the advantages of breastfeeding. If you
            are considering combination feeding, working with a
            lactation consultant can help you find a balance that
            maintains your supply while meeting your baby&apos;s
            needs.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Making the right choice for your family
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The feeding method that works best is the one that keeps
            both baby and parent healthy, both physically and
            mentally. Factors like maternal health conditions,
            medications, work schedules, support systems, and
            personal comfort all play a role in this decision.
            Parents who struggle with breastfeeding should know that
            formula is a safe, nutritionally complete option. Parents
            who choose to breastfeed should know that support is
            available through lactation consultants, peer groups, and
            their pediatrician. Whatever you choose, responsive
            feeding, holding your baby close, and making eye contact
            during feeds all support healthy development and bonding.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What the research shows about long-term outcomes
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            While studies show short-term immune and digestive
            benefits of breastfeeding, the differences in long-term
            outcomes between breastfed and formula-fed children are
            often smaller than many parents expect. Factors like
            overall family environment, socioeconomic status,
            parental education, and genetics play significant roles
            in a child&apos;s development. The AAP supports
            breastfeeding as the optimal infant nutrition but
            emphasizes that all feeding decisions should be respected
            and supported without judgment.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Both breastfeeding and formula feeding are valid, safe ways to nourish your baby. Breast milk offers unique immune benefits, while formula provides complete nutrition with more flexibility. The best choice is the one that supports the health and well-being of both you and your baby. Fed is best." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
