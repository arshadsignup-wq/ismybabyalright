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
  title: "Feeding a Baby with Reflux (GERD): Practical Guide",
  description:
    "Evidence-based guide to feeding babies with reflux or GERD. Covers feeding positions, smaller frequent feeds, thickening feeds, when to see a doctor, and the difference between normal spit-up and GERD.",
  alternates: { canonical: "/feeding/reflux-feeding" },
  openGraph: {
    title: "Feeding a Baby with Reflux (GERD): Practical Guide",
    description:
      "Practical tips for feeding a baby with reflux including positioning, pacing, and when to seek medical help.",
  },
};

const faqItems = [
  {
    question: "What is the difference between reflux and GERD in babies?",
    answer:
      "Reflux (GER) is the normal, painless spitting up that most babies do - it is messy but harmless and typically resolves by 12-18 months. GERD (gastroesophageal reflux disease) is when reflux causes painful symptoms like poor weight gain, feeding refusal, persistent crying during feeds, arching, or breathing problems. About 50% of babies have reflux; only 5-10% have GERD.",
  },
  {
    question: "What is the best feeding position for a baby with reflux?",
    answer:
      "Feed baby in an upright or semi-upright position (at least 30-45 degrees). After feeding, keep baby upright for 20-30 minutes. Avoid putting baby in a car seat right after feeding as the slumped position increases abdominal pressure. For breastfeeding, a koala hold or laid-back position can help.",
  },
  {
    question: "Should I switch to a special formula for reflux?",
    answer:
      "Talk to your pediatrician before switching. Options may include: extensively hydrolyzed formula (if cow's milk protein allergy is suspected), thickened formulas (marketed as 'AR' or anti-reflux), or adding rice cereal to formula (only under medical guidance). For breastfed babies, eliminating dairy from mom's diet sometimes helps if CMPA is the underlying cause.",
  },
  {
    question: "Does thickening feeds help with reflux?",
    answer:
      "Thickened feeds can reduce visible spit-up but may not reduce actual acid reflux episodes. The AAP notes that while rice cereal thickening reduces regurgitation, it increases caloric density and is only recommended under medical supervision. Some anti-reflux (AR) formulas come pre-thickened and may be easier to use.",
  },
  {
    question: "When does baby reflux typically resolve?",
    answer:
      "Most reflux improves significantly between 6-12 months as the lower esophageal sphincter matures and baby begins sitting upright and eating solids. By 12-18 months, the vast majority of babies have outgrown reflux completely. If symptoms persist or worsen after 12 months, consult a pediatric GI specialist.",
  },
];

const takeaways = [
  "Most reflux (GER) is normal, harmless spit-up that resolves by 12-18 months. GERD involves pain, poor weight gain, or feeding refusal.",
  "Keep baby upright during and for 20-30 minutes after every feed to reduce reflux episodes.",
  "Smaller, more frequent feeds (every 2-2.5 hours) place less pressure on the stomach than large, infrequent ones.",
  "Do not thicken feeds or switch formulas without consulting your pediatrician first.",
  "About 40-65% of babies with diagnosed GERD have an underlying cow's milk protein allergy - ask your doctor about a trial elimination.",
];

export default function RefluxFeedingPage() {
  const contentSchema = getContentPageSchema({
    name: "Feeding a Baby with Reflux (GERD): Practical Guide",
    description:
      "Evidence-based guide to feeding babies with reflux or GERD covering positions, frequency, and medical options.",
    path: "/feeding/reflux-feeding",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Reflux & GERD Feeding" },
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
          { label: "Reflux & GERD Feeding" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Feeding a Baby with Reflux or GERD
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Reflux makes feeding stressful for both you and your baby. While
          most spit-up is normal and harmless, some babies have GERD that
          requires feeding adjustments. This guide covers practical strategies
          to make feeding more comfortable and when to seek medical help.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NASPGHAN", "CDC"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* GER vs GERD */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Normal reflux (GER) vs GERD
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-safe mb-2">
                Normal reflux (GER) - &quot;Happy spitter&quot;
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Spits up but is otherwise happy and content
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Gaining weight normally
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  No pain or distress during feeds
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Typically starts around 2-3 weeks, peaks at 4 months
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Resolves by 12-18 months
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  A laundry problem, not a medical problem
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
              <h3 className="text-base font-bold text-coral-foreground mb-2">
                GERD - Needs medical attention
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Cries or arches during or after feeds
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Poor weight gain or weight loss
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Refuses to feed or eats very little
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Forceful or projectile vomiting
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Breathing problems, chronic cough, or wheezing
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Blood in spit-up or stool
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feeding Strategies */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Feeding strategies for reflux
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Feed upright</strong> - Hold baby at a 30-45 degree
                angle during the entire feed (koala hold for breastfeeding)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Keep upright after feeds</strong> - Hold baby upright
                for 20-30 minutes after feeding. Avoid tummy time immediately
                after eating
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Smaller, more frequent feeds</strong> - Offer less milk
                more often (every 2-2.5 hours) to reduce stomach volume and
                pressure
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Burp frequently</strong> - Pause to burp every 1-2
                ounces for bottle feeding, or when switching breasts
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Pace bottle feeds</strong> - Use slow-flow nipples
                and paced feeding technique to prevent baby from gulping air
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Keep feedings calm</strong> - Feed in a quiet
                environment before baby is overly hungry (crying causes air
                swallowing)
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Avoid tight clothing</strong> - Loose diapers and
                clothing around the abdomen reduce pressure on the stomach
              </li>
            </ol>
          </div>
        </section>

        {/* Breastfeeding with Reflux */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Breastfeeding a baby with reflux
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Try laid-back or koala positioning</strong> - Baby is
              more upright, using gravity to help keep milk down
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Offer one breast per feed</strong> - If you have
              oversupply, feeding from one side reduces the fast letdown that
              can worsen reflux
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Consider dairy elimination</strong> - About 40-65% of
              GERD babies have underlying cow&apos;s milk protein allergy.
              A 2-4 week trial of dairy-free diet may help (discuss with your doctor)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Do not stop breastfeeding</strong> - Breast milk is
              actually easier to digest than formula and clears from the
              stomach faster
            </li>
          </ul>
        </section>

        {/* Formula Feeding with Reflux */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Formula feeding with reflux
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Anti-reflux (AR) formulas</strong> - Pre-thickened
              formulas that reduce visible spit-up (ask your pediatrician)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Hydrolyzed formulas</strong> - If cow&apos;s milk protein
              allergy is suspected, an extensively hydrolyzed formula may be
              recommended
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Do not add cereal without guidance</strong> - Only
              thicken formula if your pediatrician specifically recommends it
              with dosing instructions
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Smaller bottles more often</strong> - Instead of 6 oz
              every 4 hours, try 3-4 oz every 2-2.5 hours
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Use slow-flow nipples</strong> - Prevent gulping and
              air swallowing with the slowest nipple flow baby will tolerate
            </li>
          </ul>
        </section>

        {/* Starting Solids with Reflux */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Starting solids with reflux
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Many parents find that reflux improves once solids are introduced
            (around 6 months), as thicker food stays down more easily.
          </p>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Start with thicker purees rather than runny ones
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Offer small amounts and avoid over-filling the stomach
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Good first foods: oatmeal, sweet potato, avocado, banana
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Avoid acidic foods initially (tomatoes, citrus) if they seem
                to worsen symptoms
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Continue upright positioning during and after solid meals
              </li>
            </ul>
          </div>
        </section>

        {/* Medical Treatments */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Medical treatments for GERD
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            If lifestyle changes are not enough, your pediatrician may
            recommend medical treatment. These decisions should be made with
            your doctor.
          </p>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Acid suppressants (PPIs or H2 blockers)</strong> - Reduce
              stomach acid production; used for diagnosed GERD with
              complications
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Trial of hypoallergenic formula</strong> - 2-4 week
              trial to rule out cow&apos;s milk protein allergy
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Referral to pediatric GI</strong> - For severe cases,
              persistent symptoms, or when diagnosis is uncertain
            </li>
          </ul>
          <p className="text-xs text-muted mt-4 leading-relaxed">
            Note: The AAP and NASPGHAN advise against routine use of acid
            suppressants for uncomplicated reflux (happy spitters) as they
            do not reduce spit-up and may have side effects.
          </p>
        </section>

        {/* When to Call Doctor */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to call your pediatrician
          </h2>
          <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
            <ul className="space-y-2 ml-5">
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Baby is not gaining weight or is losing weight
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Projectile vomiting (especially if getting worse)
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Blood in vomit or stool
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Green (bilious) vomit
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Baby refuses most feeds or intake has dropped significantly
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Difficulty breathing, choking, or apnea episodes
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Severe irritability and arching during every feed
              </li>
              <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                Symptoms worsening rather than improving after 6 months
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Most reflux is normal spit-up that resolves by 12-18 months. For babies with painful reflux (GERD), feeding upright, offering smaller/more frequent feeds, burping often, and keeping baby upright after feeding can make a significant difference. If your baby is in pain, not gaining weight, or refusing feeds, see your pediatrician - effective treatments are available." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
