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
  title:
    "Starting Solid Foods: Complete Guide for Parents",
  description:
    "Evidence-based guide to introducing solid foods to your baby. Covers readiness signs, first foods, textures by age, baby-led weaning vs purees, choking prevention, and AAP/WHO guidelines.",
  alternates: { canonical: "/feeding/solid-foods" },
  openGraph: {
    title: "Starting Solid Foods: Complete Guide for Parents",
    description:
      "Everything you need to know about introducing solid foods to your baby, based on AAP and WHO recommendations.",
  },
};

const faqItems = [
  {
    question: "When should I start solid foods?",
    answer:
      "The AAP and WHO recommend introducing solid foods around 6 months of age, when your baby shows signs of readiness: sitting with minimal support, good head control, showing interest in food, and loss of the tongue-thrust reflex. Some pediatricians may recommend starting between 4-6 months for certain babies.",
  },
  {
    question: "What are the best first foods for babies?",
    answer:
      "Good first foods include iron-fortified infant cereal, pureed meats, mashed beans, pureed sweet potato, avocado, and banana. Iron-rich foods are especially important since iron stores from birth begin to deplete around 6 months. There is no required order for introducing foods.",
  },
  {
    question: "How do I know if my baby is ready for solids?",
    answer:
      "Key readiness signs include: sitting up with minimal support, good head and neck control, showing interest in food (reaching for it, opening mouth when food approaches), ability to move food to the back of the mouth and swallow, and loss of the tongue-thrust reflex that pushes food out of the mouth.",
  },
  {
    question: "Is baby-led weaning safe?",
    answer:
      "Yes, baby-led weaning (BLW) is considered safe for healthy, full-term babies who show readiness signs. Research shows that when done correctly, BLW does not increase choking risk compared to spoon-feeding. Offer soft, appropriately sized finger foods, always supervise meals, and learn to distinguish gagging (normal) from choking (emergency).",
  },
  {
    question: "What foods should I avoid in the first year?",
    answer:
      "Avoid honey (botulism risk until 12 months), whole cow's milk as a main drink (before 12 months), added salt and sugar, whole nuts and hard foods (choking hazard), unpasteurized foods, and excessive juice. Avoid low-fat or reduced-fat foods for babies under 2.",
  },
  {
    question: "How much solid food should my baby eat?",
    answer:
      "At 6 months, start with 1-2 tablespoons once or twice daily. By 8-9 months, aim for 3 meals plus snacks. Breast milk or formula remains the primary nutrition source until 12 months. Let your baby guide how much they eat - watch for fullness cues like turning away or closing the mouth.",
  },
];

const takeaways = [
  "The AAP recommends introducing solid foods around 6 months of age when babies show developmental readiness signs.",
  "Iron-rich foods (fortified cereal, pureed meat, beans) should be among the first foods introduced since iron stores deplete around 6 months.",
  "Both purees and baby-led weaning are safe approaches - you can also combine them.",
  "Introduce common allergens (peanut, egg, dairy) early and often, starting around 6 months, to reduce allergy risk.",
  "Breast milk or formula remains the primary nutrition source through the first 12 months, with solids gradually increasing.",
];

export default function SolidFoodsPage() {
  const contentSchema = getContentPageSchema({
    name: "Starting Solid Foods: Complete Guide for Parents",
    description:
      "Evidence-based guide to introducing solid foods to your baby covering readiness signs, first foods, textures, and safety.",
    path: "/feeding/solid-foods",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Starting Solid Foods" },
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
          { label: "Starting Solid Foods" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Starting Solid Foods: A Complete Guide
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Introducing solid foods is an exciting milestone. This guide covers
          when to start, what to offer first, how to progress textures safely,
          and how to make mealtimes a positive experience for your baby.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Readiness Signs */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Signs your baby is ready for solids
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Age alone does not determine readiness. Look for these
            developmental signs, which typically appear around 6 months:
          </p>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Sits with minimal support</strong> - Can hold their
              head steady and sit upright in a high chair
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Good head control</strong> - Holds head steady without
              wobbling
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Shows interest in food</strong> - Reaches for food,
              watches others eat intently, opens mouth when food approaches
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Lost tongue-thrust reflex</strong> - No longer
              automatically pushes food out of the mouth with tongue
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Can move food to back of mouth</strong> - Demonstrates
              a swallowing motion rather than just pushing food forward
            </li>
          </ul>
        </section>

        {/* First Foods */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Best first foods to introduce
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            There is no single &quot;right&quot; first food. The AAP
            recommends prioritizing iron-rich foods since babies&apos; iron
            stores from birth begin to deplete around 6 months.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              Iron-rich first foods
            </h3>
            <ul className="space-y-1.5 ml-5 mb-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Iron-fortified infant cereal (rice, oat, or multigrain)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pureed or finely shredded meat (chicken, beef, turkey)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Mashed beans or lentils
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pureed tofu
              </li>
            </ul>
            <h3 className="text-base font-bold text-foreground mb-3">
              Other great starter foods
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Mashed avocado or banana
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pureed sweet potato, squash, or carrots
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pureed peas or green beans
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Plain whole-milk yogurt (after 6 months)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Mashed ripe pear or peach
              </li>
            </ul>
          </div>
        </section>

        {/* Texture Progression */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Texture progression by age
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                6 months: Smooth purees
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Start with thin, smooth purees (single-ingredient). Gradually
                thicken as baby learns to swallow. Offer 1-2 tablespoons,
                1-2 times per day.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                7-8 months: Thicker textures and soft lumps
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Progress to mashed foods with small soft lumps. Introduce
                soft finger foods like well-cooked pasta, ripe banana pieces,
                or steamed vegetable sticks. Offer 2-3 meals per day.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                9-12 months: Chopped and finger foods
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Move to finely chopped table foods and a wider variety of
                finger foods. Baby should be practicing self-feeding with
                fingers and beginning to use a spoon. Offer 3 meals plus
                1-2 snacks per day.
              </p>
            </div>
          </div>
        </section>

        {/* Baby-Led Weaning vs Purees */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Baby-led weaning vs traditional purees
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Both approaches are safe and effective. Many families use a
            combination of both. Here is what the evidence shows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Baby-led weaning (BLW)
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Baby self-feeds soft finger foods from the start
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Encourages independence and motor skill development
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  May promote better self-regulation of appetite
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  More gagging initially (gagging is normal and different
                  from choking)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Can be messier but exposes baby to more textures early
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Traditional spoon-feeding
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Parent controls pace and amount
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Easier to ensure adequate iron intake early on
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Gradual texture progression from smooth to lumpy
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Less mess during meals
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Important to progress textures by 9-10 months
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Choking Prevention */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Choking prevention and safety
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <h3 className="text-base font-bold text-coral-foreground mb-3">
              Foods to avoid (choking hazards)
            </h3>
            <ul className="space-y-1.5 ml-5 mb-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Whole grapes, cherry tomatoes, or berries (cut lengthwise)
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Hot dogs or sausages (cut lengthwise, then into small pieces)
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Whole nuts, seeds, or large chunks of nut butter
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Raw carrots, apples, or other hard fruits and vegetables
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Popcorn, chips, or hard candy
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Large chunks of cheese or meat
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Sticky foods like large globs of peanut butter
              </li>
            </ul>
            <h3 className="text-base font-bold text-foreground mb-3">
              Safety rules for every meal
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Always supervise your baby during meals
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Seat baby upright in a high chair (never reclined)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Never offer food in a moving car
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Learn the difference between gagging (loud, face may redden)
                and choking (silent, unable to breathe)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Take an infant CPR course before starting solids
              </li>
            </ul>
          </div>
        </section>

        {/* Foods to Avoid First Year */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Foods to avoid in the first year
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Honey</strong> - Risk of botulism until 12 months
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Cow&apos;s milk as a main drink</strong> - Can be used
              in cooking, but not as a replacement for breast milk or formula
              before 12 months
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Added salt and sugar</strong> - Baby&apos;s kidneys
              cannot handle excess sodium; added sugars offer no nutritional
              value
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Unpasteurized dairy or juice</strong> - Risk of harmful
              bacteria
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Excessive juice</strong> - AAP recommends no juice
              before 12 months
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Low-fat or diet foods</strong> - Babies need healthy
              fats for brain development
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Start solids around 6 months when your baby shows readiness signs. Prioritize iron-rich foods, introduce allergens early, and progress textures gradually. Whether you choose purees, baby-led weaning, or a combination - follow your baby's cues and make mealtimes enjoyable." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
