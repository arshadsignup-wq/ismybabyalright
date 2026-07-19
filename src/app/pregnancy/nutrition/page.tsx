import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Pregnancy Nutrition Guide',
  description:
    'What to eat during pregnancy, foods to avoid, and supplements you need. Evidence-based nutrition guidance based on ACOG and WHO recommendations.',
  alternates: { canonical: '/pregnancy/nutrition' },
  openGraph: {
    title: 'Pregnancy Nutrition Guide | Is My Baby Alright?',
    description: 'What to eat, what to avoid, and essential supplements during pregnancy.',
  },
};

const faqItems = [
  {
    question: 'How many extra calories do I need during pregnancy?',
    answer: 'ACOG recommends no extra calories in the first trimester, about 340 extra calories per day in the second trimester, and about 450 extra calories per day in the third trimester. These are general guidelines — your needs depend on your pre-pregnancy weight, activity level, and whether you are carrying multiples.',
  },
  {
    question: 'Can I eat sushi during pregnancy?',
    answer: 'Raw fish carries a risk of parasites and bacteria. ACOG recommends avoiding raw or undercooked seafood during pregnancy. Cooked sushi (like California rolls with imitation crab, or cooked shrimp rolls) is generally considered safe. Aim for 8-12 oz of low-mercury cooked fish per week.',
  },
  {
    question: 'Do I need a prenatal vitamin if I eat well?',
    answer: 'Yes. Even with a balanced diet, it is difficult to get adequate folic acid (400-800 mcg) and iron (27 mg) from food alone during pregnancy. Prenatal vitamins fill critical nutritional gaps. Start taking one before conception if possible.',
  },
  {
    question: 'Is coffee safe during pregnancy?',
    answer: 'ACOG considers up to 200 mg of caffeine per day (about one 12-oz cup of coffee) to be safe during pregnancy. Higher amounts have been associated with increased miscarriage risk in some studies. Remember that tea, chocolate, and sodas also contain caffeine.',
  },
  {
    question: 'What helps with nausea and morning sickness?',
    answer: 'Eat small, frequent meals. Keep crackers by your bed for before you get up. Ginger (tea, candies) may help. Avoid fatty, spicy, or strong-smelling foods. Stay hydrated. Vitamin B6 (25 mg three times daily) is a first-line treatment per ACOG. Talk to your provider if you cannot keep food or fluids down.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Nutrition' },
];

export default function PregnancyNutritionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Pregnancy Nutrition Guide',
          description: 'What to eat during pregnancy, foods to avoid, and essential supplements. Evidence-based guidance from ACOG and WHO.',
          path: '/pregnancy/nutrition',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Nutrition During Pregnancy', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'WHO Maternal Nutrition Guidelines', url: 'https://www.who.int/publications/i/item/9789241549912' },
            { name: 'CDC Folic Acid Recommendations', url: 'https://www.cdc.gov/ncbddd/folicacid/' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[
        { label: 'Pregnancy', href: '/pregnancy' },
        { label: 'Nutrition' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Pregnancy Nutrition Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        Good nutrition during pregnancy supports your baby's growth and helps you stay healthy. Here is what you need to know about eating well, based on ACOG and WHO guidelines.
      </p>

      <KeyTakeaways
        takeaways={[
          'Take a prenatal vitamin with 400-800 mcg folic acid daily (ideally starting before conception)',
          'You need about 340-450 extra calories per day in the 2nd and 3rd trimesters',
          'Aim for 8-12 oz of low-mercury fish per week for omega-3 fatty acids (DHA)',
          'Avoid raw/undercooked meat, unpasteurized dairy, high-mercury fish, and alcohol',
          'Iron needs increase to 27 mg per day — pair iron-rich foods with vitamin C for better absorption',
          'Limit caffeine to 200 mg per day (about one 12-oz cup of coffee)',
        ]}
      />

      <div className="space-y-6">
        <Section title="Essential nutrients during pregnancy">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Folic acid (400-800 mcg/day):</strong> Critical for neural tube development. Take from before conception through the first trimester at minimum. Found in leafy greens, fortified cereals, and prenatal vitamins.</li>
            <li><strong>Iron (27 mg/day):</strong> Supports increased blood volume and oxygen delivery. Found in lean red meat, beans, spinach, and fortified cereals. Pair with vitamin C for better absorption.</li>
            <li><strong>Calcium (1,000 mg/day):</strong> Builds baby's bones and teeth. Found in dairy, fortified plant milks, tofu, and dark leafy greens.</li>
            <li><strong>DHA/Omega-3s (200-300 mg/day):</strong> Supports brain and eye development. Found in fatty fish (salmon, sardines), walnuts, and supplements.</li>
            <li><strong>Vitamin D (600 IU/day):</strong> Supports bone health and immune function. Found in fortified milk, fatty fish, egg yolks, and sunlight.</li>
            <li><strong>Choline (450 mg/day):</strong> Supports brain development. Found in eggs, meat, fish, and soybeans. Often not included in prenatal vitamins.</li>
            <li><strong>Iodine (220 mcg/day):</strong> Supports thyroid function and brain development. Found in iodized salt, dairy, and seafood.</li>
          </ul>
        </Section>

        <Section title="Foods to eat during pregnancy">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Fruits and vegetables:</strong> Aim for variety and color. 5+ servings daily.</li>
            <li><strong>Whole grains:</strong> Brown rice, oats, whole wheat bread, quinoa</li>
            <li><strong>Lean protein:</strong> Poultry, lean meat, fish, eggs, beans, tofu</li>
            <li><strong>Dairy or alternatives:</strong> Milk, yogurt, cheese (pasteurized), fortified plant milks</li>
            <li><strong>Healthy fats:</strong> Avocado, nuts, seeds, olive oil</li>
            <li><strong>Low-mercury fish:</strong> Salmon, tilapia, shrimp, canned light tuna (2-3 servings per week)</li>
          </ul>
        </Section>

        <Section title="Foods and substances to avoid">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700"><strong>Alcohol:</strong> No amount is considered safe during pregnancy (ACOG, CDC)</li>
              <li className="text-orange-700"><strong>Raw/undercooked meat, eggs, fish:</strong> Risk of listeria, salmonella, and parasites</li>
              <li className="text-orange-700"><strong>High-mercury fish:</strong> Shark, swordfish, king mackerel, tilefish, bigeye tuna</li>
              <li className="text-orange-700"><strong>Unpasteurized dairy and juice:</strong> Risk of listeria</li>
              <li className="text-orange-700"><strong>Deli meats and hot dogs:</strong> Unless heated to steaming (165 degrees F) due to listeria risk</li>
              <li className="text-orange-700"><strong>Raw sprouts:</strong> Risk of bacterial contamination</li>
              <li className="text-orange-700"><strong>Excessive caffeine:</strong> Limit to 200 mg/day</li>
              <li className="text-orange-700"><strong>Herbal supplements:</strong> Many are not tested for pregnancy safety — ask your provider</li>
            </ul>
          </div>
        </Section>

        <Section title="Managing common nutrition challenges">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Morning sickness:</strong> Small, frequent meals. Bland foods (crackers, toast). Ginger. Vitamin B6 (25 mg 3x/day per ACOG).</li>
            <li><strong>Heartburn:</strong> Avoid spicy/fatty foods. Eat smaller meals. Do not lie down right after eating.</li>
            <li><strong>Constipation:</strong> High-fiber foods, plenty of water, physical activity. Iron supplements can worsen constipation.</li>
            <li><strong>Food aversions:</strong> Very common. Find alternatives in the same nutrient group. Your prenatal vitamin fills gaps.</li>
            <li><strong>Cravings:</strong> Generally fine to indulge in moderation unless craving non-food items (pica) — tell your provider.</li>
          </ul>
        </Section>

        <Section title="Weight gain during pregnancy">
          <p>ACOG weight gain recommendations based on pre-pregnancy BMI:</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border border-[#E8E2D9] rounded-lg">
              <thead>
                <tr className="bg-card-alt">
                  <th className="text-left p-3 font-semibold">Pre-pregnancy BMI</th>
                  <th className="text-left p-3 font-semibold">Recommended gain</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3">Underweight (below 18.5)</td>
                  <td className="p-3">28-40 lbs</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3">Normal weight (18.5-24.9)</td>
                  <td className="p-3">25-35 lbs</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3">Overweight (25.0-29.9)</td>
                  <td className="p-3">15-25 lbs</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3">Obese (30.0 and above)</td>
                  <td className="p-3">11-20 lbs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">These are general guidelines. Your provider will give personalized recommendations based on your health history.</p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Focus on nutrient-dense foods, take your prenatal vitamin, stay hydrated, and avoid the major risks (alcohol, raw meats, high-mercury fish). Perfect nutrition is not the goal — a generally balanced diet with supplements to fill gaps is what matters."
        supportiveMessage="If morning sickness makes eating difficult, do your best and lean on your prenatal vitamin. Talk to your provider if you cannot keep food or fluids down. This phase does pass for most people."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy/prenatal-tests" className="text-sm text-primary font-semibold hover:underline">&larr; Prenatal Tests</Link>
        <Link href="/pregnancy/exercise" className="text-sm text-primary font-semibold hover:underline">Exercise &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
