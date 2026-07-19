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
  title: "Feeding Premature Babies: NICU to Home Guide",
  description:
    "Complete guide to feeding premature babies from NICU to home. Covers breast milk for preemies, fortifiers, transitioning from tube to bottle/breast, adjusted age feeding milestones, and when to introduce solids for preterm infants.",
  alternates: { canonical: "/feeding/premature-feeding" },
  openGraph: {
    title: "Feeding Premature Babies: NICU to Home Guide",
    description:
      "Specialized feeding guidance for premature babies including NICU nutrition, fortifiers, and adjusted age milestones.",
  },
};

const faqItems = [
  {
    question: "Is breast milk especially important for premature babies?",
    answer:
      "Yes. Breast milk is considered a medical intervention for premature babies. It significantly reduces the risk of necrotizing enterocolitis (NEC), a serious intestinal disease, and provides immune protection when preemies are most vulnerable. Even small amounts of colostrum in the first days provide significant benefits. If mother's own milk is unavailable, donor human milk is preferred over formula for very preterm infants.",
  },
  {
    question: "What is human milk fortifier and why does my preemie need it?",
    answer:
      "Human milk fortifier (HMF) adds extra protein, calories, calcium, phosphorus, and vitamins to breast milk to meet the higher nutritional demands of premature babies. Preemies need more calories and protein per kilogram than full-term babies to support catch-up growth. Your NICU team will determine if and when fortifier is needed based on your baby's gestational age, weight, and growth.",
  },
  {
    question: "When can my premature baby start breastfeeding directly?",
    answer:
      "Many premature babies can begin non-nutritive sucking (comfort nursing at an empty breast) around 28-30 weeks gestational age. Nutritive breastfeeding attempts usually begin around 32-34 weeks when the suck-swallow-breathe coordination develops. Every baby is different - your NICU team will assess your baby's readiness based on respiratory stability and feeding cues.",
  },
  {
    question: "When should I introduce solids to my premature baby?",
    answer:
      "Use your baby's adjusted age (corrected age), not their actual birth date, for solid food readiness. Most premature babies are ready for solids between 5-8 months actual age (which corresponds to about 4-6 months adjusted age). Wait for the same readiness signs as full-term babies: good head control, sitting with support, interest in food, and loss of tongue-thrust reflex.",
  },
  {
    question: "Why is my premature baby a slow feeder?",
    answer:
      "Premature babies often feed more slowly due to immature suck-swallow-breathe coordination, lower stamina, and developing oral motor skills. Many preemies tire easily during feeds and need frequent breaks. This improves with maturity. Allow extra time for feeds (but cap at 30 minutes to prevent caloric expenditure exceeding intake), use slow-flow nipples, and pace feeds carefully.",
  },
];

const takeaways = [
  "Breast milk is a medical priority for premature babies - it significantly reduces NEC risk and provides critical immune protection.",
  "Use adjusted (corrected) age, not birth date, for all feeding milestones including solid food readiness.",
  "Human milk fortifier may be added to breast milk to meet preemies' higher calorie and protein needs during catch-up growth.",
  "Premature babies often take longer to feed and tire easily - pace feeds, cap at 30 minutes, and follow your NICU team's guidance.",
  "The transition from tube feeding to breast/bottle is gradual - many preemies begin direct feeding around 32-34 weeks gestational age.",
];

export default function PrematureFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "Feeding Premature Babies: NICU to Home Guide",
    description:
      "Complete guide to feeding premature babies from NICU to home covering breast milk, fortifiers, and adjusted age milestones.",
    path: "/feeding/premature-feeding",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Feeding Premature Babies" },
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
          { label: "Feeding Premature Babies" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding Premature Babies: From NICU to Home
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Feeding a premature baby requires patience, specialized knowledge,
          and close collaboration with your medical team. This guide covers
          nutrition in the NICU, transitioning to direct feeding, and
          adjusting milestones for prematurity.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "WHO", "March of Dimes"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* NICU Feeding */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Feeding in the NICU
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                IV nutrition (first days)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Very premature babies (under 32 weeks) often receive
                intravenous (IV) nutrition called Total Parenteral Nutrition
                (TPN) in the first days while their digestive system matures.
                Trophic feeds (tiny amounts of breast milk) may begin within
                hours to days to help develop the gut.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Tube feeding (gavage)
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                Before premature babies can coordinate sucking, swallowing,
                and breathing (usually around 32-34 weeks), they receive milk
                through a small tube that goes through the nose or mouth to
                the stomach.
              </p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Breast milk is strongly preferred - start pumping as soon
                  as possible after birth
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Even drops of colostrum can be given by mouth swab
                  (&quot;oral care&quot;)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  If mother&apos;s milk is not available, donor human milk is
                  preferred for very preterm infants
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Fortifier is often added to increase caloric and protein
                  density
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Transition to oral feeding
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The transition from tube to breast or bottle is gradual and
                based on your baby&apos;s developmental readiness.
              </p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>28-30 weeks</strong> - Non-nutritive sucking
                  (pacifier, empty breast) may begin
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>32-34 weeks</strong> - First oral feeding attempts
                  (usually breastfeeding first, as it is gentler)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>34-36 weeks</strong> - Increasing oral feeds while
                  decreasing tube feeds
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  <strong>Full oral feeding</strong> - Required for NICU
                  discharge (baby takes all feeds by mouth)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Breast Milk for Preemies */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why breast milk is critical for preemies
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Reduces NEC risk by 60-80%</strong> - Necrotizing
                enterocolitis is a life-threatening intestinal disease in preemies
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Reduces infection risk</strong> - Provides antibodies
                and immune factors when baby is most vulnerable
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Easier to digest</strong> - Better tolerated by the
                immature gut than formula
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Supports brain development</strong> - Contains DHA
                and other fats critical for neurodevelopment
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Reduces retinopathy of prematurity</strong> - May
                protect developing eyes
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Shorter NICU stays</strong> - Associated with faster
                feeding progression and earlier discharge
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-4">
            <h3 className="text-base font-bold text-foreground mb-2">
              Pumping tips for NICU parents
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Begin pumping within 6 hours of birth if baby cannot nurse directly
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Pump 8-10 times per day (every 2-3 hours) to establish supply
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Use a hospital-grade double electric pump for efficiency
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Kangaroo care (skin-to-skin) before pumping can increase output
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Even small amounts are valuable - colostrum can be collected
                with a syringe
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Ask the NICU about their milk storage and labeling protocol
              </li>
            </ul>
          </div>
        </section>

        {/* Feeding at Home */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Feeding your preemie at home
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Follow discharge feeding plan</strong> - Your NICU team
                will provide specific instructions about amounts, frequency,
                and any fortification
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Feed on a schedule initially</strong> - Some preemies
                do not wake for feeds reliably. You may need to wake baby every
                3 hours until they reach a target weight
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Allow extra time</strong> - Preemies often take longer
                to feed. Cap feeds at 30 minutes to prevent calorie burn
                exceeding calorie intake
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Watch for feeding cues</strong> - Learn subtle cues
                like sucking movements, alertness, and hand-to-mouth
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Monitor weight gain closely</strong> - Follow up with
                pediatrician as scheduled (often weekly after discharge)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                <strong>Continue fortification if prescribed</strong> - Do not
                stop fortifier without medical guidance
              </li>
            </ul>
          </div>
        </section>

        {/* Adjusted Age and Solids */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Adjusted age and solid foods
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Use your baby&apos;s adjusted (corrected) age for feeding
            milestones. Adjusted age = actual age minus weeks born early.
            For example, a baby born 8 weeks early who is now 7 months old
            has an adjusted age of 5 months.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              Solid food readiness for preemies
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Wait until at least 4-6 months <em>adjusted</em> age
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                All the same readiness signs apply (head control, sitting,
                interest, lost tongue-thrust reflex)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Prioritize iron-rich foods since preemies often have lower
                iron stores
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                May need to start with smoother textures and progress more slowly
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Discuss timing with your pediatrician, especially for babies
                born before 28 weeks
              </li>
            </ul>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common feeding challenges in preemies
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Oral aversion</strong> - After prolonged tube feeding
              or medical procedures around the mouth, some preemies resist
              oral feeding. Feeding therapy can help
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Fatigue during feeds</strong> - Preemies tire easily.
              Watch for signs like turning away, going limp, or falling asleep
              after just a few minutes
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Reflux</strong> - Very common in premature babies due
              to immature digestive system. Usually improves as baby grows
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Slow weight gain</strong> - Many preemies need higher
              caloric density milk. Your doctor may recommend adding fortifier
              or using higher-calorie formula
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Coordination difficulties</strong> - Suck-swallow-breathe
              coordination continues to develop after NICU discharge
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Feeding a premature baby is a marathon, not a sprint. Breast milk provides critical protection against NEC and infection. Use adjusted age for all feeding milestones. Work closely with your NICU team and pediatrician, and do not hesitate to ask for lactation or feeding therapy support. Your baby's feeding journey may look different from full-term babies - and that is okay." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
