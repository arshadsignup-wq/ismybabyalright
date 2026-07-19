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
  title: "Baby Food Allergies: Introducing Allergens Safely",
  description:
    "Evidence-based guide to introducing common allergens to babies. Covers when and how to introduce peanuts, eggs, dairy, and other top allergens, recognizing allergic reactions, and managing food allergies in infants.",
  alternates: { canonical: "/feeding/food-allergies" },
  openGraph: {
    title: "Baby Food Allergies: Introducing Allergens Safely",
    description:
      "Learn how to introduce allergens safely and recognize allergic reactions in babies, based on AAP and NIAID guidelines.",
  },
};

const faqItems = [
  {
    question: "When should I introduce allergenic foods to my baby?",
    answer:
      "Current guidelines recommend introducing common allergens around 6 months of age (or when baby starts solids), not delaying them. The LEAP study showed that early introduction of peanut (between 4-11 months) reduced peanut allergy risk by up to 81% in high-risk infants. Introduce one new allergen every 2-3 days so you can identify any reactions.",
  },
  {
    question: "What are the top allergens to introduce to babies?",
    answer:
      "The top 9 allergens (responsible for 90% of food allergies) are: peanuts, tree nuts, milk (dairy), eggs, wheat, soy, fish, shellfish, and sesame. You do not need to introduce them in any specific order, but peanut and egg are often prioritized since early introduction has the strongest evidence for allergy prevention.",
  },
  {
    question: "How do I introduce peanuts to my baby safely?",
    answer:
      "Never give whole peanuts or chunky peanut butter (choking hazard). Instead, mix a small amount of smooth peanut butter (about 1/2 teaspoon) with breast milk, formula, or pureed fruit to thin it. Peanut puffs dissolved in saliva are also safe. Offer a small amount first, wait 10-15 minutes, then give more if no reaction occurs. Continue offering 2-3 times per week.",
  },
  {
    question: "What does a food allergy reaction look like in babies?",
    answer:
      "Mild reactions include: hives (red raised bumps), facial swelling, vomiting, increased fussiness, or eczema flare-up within minutes to 2 hours of eating. Severe reactions (anaphylaxis, rare in babies) include: difficulty breathing, throat swelling, widespread hives, loss of consciousness, or pale/blue coloring. Call 911 immediately for severe reactions.",
  },
  {
    question: "Should I avoid allergens if my baby has eczema?",
    answer:
      "No - in fact, babies with moderate to severe eczema are at higher risk for food allergies, and early introduction is even more important for them. The AAP and NIAID guidelines recommend introducing peanut as early as 4-6 months for high-risk babies (those with severe eczema or egg allergy), potentially after allergy testing. Talk to your pediatrician.",
  },
  {
    question: "Is there a difference between food allergy and food intolerance?",
    answer:
      "Yes. A food allergy involves the immune system and can be life-threatening (reactions include hives, swelling, breathing difficulty). A food intolerance involves the digestive system and causes discomfort but is not dangerous (symptoms include gas, bloating, loose stools). Cow's milk protein allergy is immune-mediated; lactose intolerance is digestive.",
  },
];

const takeaways = [
  "Introduce common allergens (peanut, egg, dairy, etc.) early - around 6 months - to reduce allergy risk, not increase it.",
  "The LEAP study showed early peanut introduction reduced peanut allergy by up to 81% in high-risk infants.",
  "Introduce one new allergen every 2-3 days so you can identify which food caused any reaction.",
  "Babies with moderate-to-severe eczema are at higher allergy risk and may benefit from earlier introduction (4-6 months) with pediatrician guidance.",
  "Know the difference between mild reactions (hives, vomiting) and anaphylaxis (breathing difficulty, widespread swelling) - call 911 for severe reactions.",
];

export default function FoodAllergiesPage() {
  const contentSchema = getContentPageSchema({
    name: "Baby Food Allergies: Introducing Allergens Safely",
    description:
      "Evidence-based guide to introducing common allergens to babies and managing food allergies in infants.",
    path: "/feeding/food-allergies",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Feeding", url: "/feeding" },
    { name: "Food Allergies" },
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
          { label: "Food Allergies" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Introducing Allergens &amp; Managing Food Allergies in Babies
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Current evidence shows that early introduction of common allergens
          reduces allergy risk. This guide covers which allergens to introduce,
          how to do it safely, what reactions look like, and what to do if
          your baby has a food allergy.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={["AAP", "NIAID", "CDC", "ACAAI"]} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        {/* Top Allergens */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The top 9 food allergens
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            These nine foods account for approximately 90% of all food
            allergies. Introduce them one at a time, with 2-3 days between
            each new allergen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Peanuts", how: "Thin peanut butter mixed into puree, or peanut puffs" },
              { name: "Eggs", how: "Well-cooked scrambled egg, starting with a small amount" },
              { name: "Cow's milk (dairy)", how: "Plain whole-milk yogurt or cheese (not milk as a drink before 12mo)" },
              { name: "Tree nuts", how: "Thin almond/cashew butter mixed into puree" },
              { name: "Wheat", how: "Infant cereal, soft bread strips, or pasta" },
              { name: "Soy", how: "Pureed tofu or foods made with soy" },
              { name: "Fish", how: "Well-cooked, flaked salmon or white fish" },
              { name: "Shellfish", how: "Well-cooked, finely minced shrimp" },
              { name: "Sesame", how: "Tahini mixed into puree or hummus" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-[#E8E2D9] bg-white p-4">
                <h3 className="text-sm font-bold text-foreground">{item.name}</h3>
                <p className="text-xs text-muted mt-1">{item.how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Introduce */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to introduce allergens safely
          </h2>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <ol className="space-y-3 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Choose a calm day</strong> - Introduce new allergens at home
                (not at daycare or a restaurant) when baby is healthy and happy
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Start small</strong> - Offer a tiny amount (1/4 to 1/2
                teaspoon) mixed into a food baby already tolerates
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Wait and watch</strong> - Observe for 10-15 minutes after
                the first taste. Most allergic reactions occur within minutes to
                2 hours
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Increase if no reaction</strong> - If tolerated, offer a
                larger portion and continue the meal
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Continue offering regularly</strong> - Give the allergen
                2-3 times per week to maintain tolerance. Stopping can increase
                risk of developing an allergy later
              </li>
              <li className="text-sm text-foreground leading-relaxed list-decimal">
                <strong>Introduce early in the day</strong> - This way you can
                monitor for delayed reactions while baby is awake
              </li>
            </ol>
          </div>
        </section>

        {/* Recognizing Reactions */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Recognizing allergic reactions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
              <h3 className="text-base font-bold text-foreground mb-2">
                Mild to moderate reactions
              </h3>
              <p className="text-xs text-muted mb-3">Usually appear within minutes to 2 hours. Contact your pediatrician.</p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Hives (red, raised, itchy bumps) on face or body
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Mild swelling of lips, eyes, or face
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Vomiting (single episode)
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Redness or rash around the mouth
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Eczema flare-up
                </li>
                <li className="text-sm text-foreground leading-relaxed list-disc">
                  Runny nose or sneezing
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-coral/20 bg-coral-light p-5">
              <h3 className="text-base font-bold text-coral-foreground mb-2">
                Severe reactions (anaphylaxis) - Call 911
              </h3>
              <p className="text-xs text-coral-foreground mb-3">Rare in babies but requires immediate emergency care.</p>
              <ul className="space-y-1.5 ml-5">
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Difficulty breathing, wheezing, or persistent cough
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Swelling of tongue or throat
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Widespread hives covering most of the body
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Pale or blue coloring
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Sudden limpness or loss of consciousness
                </li>
                <li className="text-sm text-coral-foreground leading-relaxed list-disc">
                  Repeated vomiting with other symptoms
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* High-Risk Babies */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            High-risk babies: What to know
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Your baby may be at higher risk for food allergies if they have:
          </p>
          <ul className="space-y-2 ml-5 mb-4">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              Moderate to severe eczema (especially if it appeared before 6 months)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              A diagnosed egg allergy
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              A sibling or parent with food allergies
            </li>
          </ul>
          <div className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h3 className="text-base font-bold text-foreground mb-2">
              NIAID guidelines for high-risk infants
            </h3>
            <ul className="space-y-1.5 ml-5">
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Consider introducing peanut as early as 4-6 months
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Discuss allergy testing (skin prick or blood test) with your
                pediatrician before introduction
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Some high-risk babies may have their first exposure in a
                medical setting
              </li>
              <li className="text-sm text-foreground leading-relaxed list-disc">
                Even with confirmed allergy risk, early supervised introduction
                often reduces long-term allergy development
              </li>
            </ul>
          </div>
        </section>

        {/* Managing a Diagnosed Allergy */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            If your baby is diagnosed with a food allergy
          </h2>
          <ul className="space-y-2 ml-5">
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Work with an allergist</strong> - They can confirm the
              diagnosis and develop a management plan
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Learn to read labels</strong> - Allergens can appear
              under many names (e.g., casein = milk, albumin = egg)
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Create an action plan</strong> - Know exactly what to
              do in case of accidental exposure
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Carry epinephrine if prescribed</strong> - Ask about
              an EpiPen Jr. for severe allergies
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Inform all caregivers</strong> - Daycare, grandparents,
              and babysitters all need to know about the allergy
            </li>
            <li className="text-sm text-foreground leading-relaxed list-disc">
              <strong>Many children outgrow allergies</strong> - Milk, egg,
              wheat, and soy allergies are often outgrown by age 5; peanut
              and tree nut allergies are more likely to persist
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Introduce common allergens early (around 6 months) and often to reduce allergy risk - do not delay. Start with small amounts at home, one new allergen every 2-3 days, and continue offering regularly. If your baby has eczema or family history of allergies, early introduction is even more important. Talk to your pediatrician about the best approach for your baby." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
