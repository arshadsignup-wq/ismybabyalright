import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Nutrition for Healthy Baby Growth',
  description:
    'Evidence-based guide to baby nutrition for healthy growth: calorie needs by age, essential vitamins and minerals, protein requirements, and when supplements are needed.',
  alternates: { canonical: '/growth/nutrition' },
};

const faqItems = [
  {
    question: 'How many calories does my baby need per day?',
    answer:
      'Caloric needs vary by age: approximately 100-120 kcal/kg/day from birth to 3 months, 90-100 kcal/kg/day from 3 to 6 months, and 80-90 kcal/kg/day from 6 to 12 months. For a 6-month-old weighing 7.5 kg, that is approximately 675-750 calories daily. Breast milk and formula provide about 20 calories per ounce. These are estimates; your baby\'s actual needs depend on activity level, growth rate, and metabolism.',
  },
  {
    question: 'Does my breastfed baby need vitamin D supplements?',
    answer:
      'Yes. The AAP recommends 400 IU of vitamin D daily for all breastfed and partially breastfed infants starting within the first few days of life. Breast milk contains very little vitamin D regardless of the mother\'s intake. Formula-fed babies who drink at least 32 ounces (1 liter) of formula daily get adequate vitamin D from the formula and do not need additional supplementation.',
  },
  {
    question: 'When should my baby start iron-rich foods?',
    answer:
      'Iron-rich foods should be among the first complementary foods introduced at 6 months. Full-term breastfed babies begin depleting their iron stores around 4 to 6 months. Iron-fortified cereals, pureed meats, beans, and lentils are all good sources. The AAP recommends 11 mg of iron daily for babies 7 to 12 months. Iron from animal sources (heme iron) is absorbed more efficiently than plant-based (non-heme) iron.',
  },
  {
    question: 'Can I give my baby too much protein?',
    answer:
      'Yes, in theory. Very high protein intake in infancy has been associated with accelerated weight gain and increased obesity risk. However, this is primarily a concern with formulas containing excessive protein (older formulations) or when cow\'s milk is introduced before 12 months. Breast milk naturally contains the right amount of protein that decreases over time. Following normal feeding guidelines and age-appropriate foods provides appropriate protein without excess.',
  },
  {
    question: 'What foods support healthy growth after 6 months?',
    answer:
      'Foods that support growth include iron-rich options (meat, fish, beans, iron-fortified cereals), healthy fats (avocado, olive oil, nut butters), protein sources (eggs, dairy, legumes), and a variety of fruits and vegetables for vitamins and minerals. Calorie-dense foods are particularly important for babies with slower weight gain. There is no ideal first food; variety and nutrient density are more important than order of introduction.',
  },
];

const takeaways = [
  'Breast milk or formula provides complete nutrition for the first 6 months of life',
  'All breastfed babies need 400 IU of vitamin D daily; iron supplementation may be needed from 4 months',
  'Caloric needs decrease per kilogram as babies grow: approximately 100 to 120 kcal/kg/day in early infancy down to 80 to 90 kcal/kg/day by 12 months',
  'Iron is the nutrient most likely to be deficient in the second half of the first year',
  'After 6 months, complementary foods add calories and nutrients but milk remains the primary source until 12 months',
];

export default function NutritionPage() {
  const contentSchema = getContentPageSchema({
    name: 'Nutrition for Healthy Baby Growth',
    description:
      'Evidence-based guide to baby nutrition for healthy growth including calorie needs, vitamins, minerals, and supplementation guidelines.',
    path: '/growth/nutrition',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'AAP Pediatric Nutrition Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'WHO Complementary Feeding Guidelines', url: 'https://www.who.int/health-topics/complementary-feeding' },
      { name: 'Dietary Guidelines for Americans', url: 'https://www.dietaryguidelines.gov/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Nutrition' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Nutrition' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Nutrition for Healthy Baby Growth
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Proper nutrition is the foundation of healthy growth. Understanding your baby&apos;s caloric needs,
          essential nutrients, and when supplementation is necessary helps ensure they have everything they
          need to grow and develop optimally.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO', 'DGA']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Calorie needs by age
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Infant caloric needs are highest per kilogram of body weight during the early months when growth
            is fastest, then gradually decrease as the growth rate slows:
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm text-muted border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D9]">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Age</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">kcal/kg/day</th>
                  <th className="text-left py-2 font-semibold text-foreground">Approximate total daily calories</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">0 to 3 months</td><td className="py-2 pr-4">100-120</td><td className="py-2">400-600 kcal</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">3 to 6 months</td><td className="py-2 pr-4">90-100</td><td className="py-2">550-700 kcal</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">6 to 9 months</td><td className="py-2 pr-4">80-95</td><td className="py-2">650-800 kcal</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">9 to 12 months</td><td className="py-2 pr-4">80-90</td><td className="py-2">750-900 kcal</td></tr>
                <tr><td className="py-2 pr-4">12 to 24 months</td><td className="py-2 pr-4">75-85</td><td className="py-2">900-1,100 kcal</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Breast milk provides approximately 20 calories per ounce (67 kcal/100 mL). Standard infant
            formulas also provide 20 calories per ounce. A baby consuming 24 to 32 ounces of milk daily
            gets approximately 480 to 640 calories from milk alone.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Essential nutrients for growth
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Iron</h3>
              <p className="mt-1">
                Iron is critical for brain development and oxygen transport. Full-term babies are born with
                iron stores that last approximately 4 to 6 months. After this, dietary iron becomes essential.
                The RDA for iron is 0.27 mg/day for 0 to 6 months (met by breast milk and formula) and 11 mg/day
                for 7 to 12 months. The AAP recommends iron supplementation (1 mg/kg/day) for exclusively
                breastfed infants starting at 4 months until iron-rich complementary foods are established.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Vitamin D</h3>
              <p className="mt-1">
                Vitamin D is essential for calcium absorption and bone growth. The AAP recommends 400 IU daily
                for all infants from birth. Breast milk contains only 25 to 78 IU per liter, far below what
                babies need. Formula-fed babies consuming at least 32 ounces daily get adequate vitamin D from
                formula (formula contains approximately 400 IU per liter).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Protein</h3>
              <p className="mt-1">
                Protein needs for growth are approximately 1.5 g/kg/day from 0 to 6 months and 1.2 g/kg/day
                from 7 to 12 months. Breast milk provides about 1 to 1.2 g of protein per 100 mL (decreasing
                over time), which is perfectly matched to infant needs. Standard formulas provide 1.4 to 1.6 g
                per 100 mL. After 6 months, protein-rich complementary foods (meat, legumes, dairy, eggs)
                supplement milk protein.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Zinc</h3>
              <p className="mt-1">
                Zinc supports immune function and cell growth. Like iron, zinc stores from birth are depleted
                by approximately 6 months. The RDA is 3 mg/day for 7 to 12 months. Good sources include meat,
                legumes, fortified cereals, and dairy products. Zinc deficiency can contribute to poor growth
                and increased susceptibility to infections.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Calcium and phosphorus</h3>
              <p className="mt-1">
                These minerals are essential for bone development. Breast milk and formula provide adequate
                amounts for the first year. After 12 months, dairy products (whole milk, yogurt, cheese)
                become important calcium sources. The adequate intake for calcium is 200 mg/day for 0 to 6
                months and 260 mg/day for 7 to 12 months.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Essential fatty acids (DHA and ARA)</h3>
              <p className="mt-1">
                DHA (docosahexaenoic acid) is critical for brain and retinal development. Breast milk naturally
                contains DHA, with levels depending on maternal diet (fatty fish consumption increases DHA content).
                Most formulas are now supplemented with DHA and ARA. After 6 months, fatty fish (salmon, sardines)
                can be introduced as a food source.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Nutrition by feeding stage
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">0 to 6 months: Exclusive milk feeding</h3>
              <p className="mt-1">
                Breast milk or formula alone provides complete nutrition for the first 6 months (with the
                exception of vitamin D supplementation for breastfed babies and possibly iron supplementation
                from 4 months). No water, juice, or solid foods are needed. The WHO and AAP both recommend
                exclusive breastfeeding for 6 months as the ideal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">6 to 12 months: Complementary feeding</h3>
              <p className="mt-1">
                Solid foods are introduced alongside continued breast milk or formula. Milk remains the primary
                calorie source (providing 60 to 70% of calories at 6 to 8 months, decreasing to 40 to 50% by
                12 months). Iron-rich foods should be introduced first. Offer a variety of textures, tastes, and
                food groups. Common allergens (peanut, egg, dairy, wheat, fish) can be introduced from 6 months
                with no evidence that delaying reduces allergy risk.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">12 to 24 months: Transitional nutrition</h3>
              <p className="mt-1">
                Whole cow&apos;s milk can be introduced at 12 months (16 to 24 ounces per day maximum). Table
                foods become the primary calorie source. Three meals plus 2 to 3 snacks daily is typical.
                Toddlers need approximately 1,000 to 1,200 calories daily. Fat should not be restricted before
                age 2 (whole milk, full-fat dairy, healthy oils are important for brain development).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When supplements are needed
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Vitamin D (all breastfed babies):</strong> 400 IU daily from birth until the baby gets enough from fortified milk or food</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Iron (breastfed babies from 4 months):</strong> 1 mg/kg/day until iron-rich foods are established in the diet</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Premature babies:</strong> Additional iron (2 mg/kg/day), possibly higher vitamin D, and multivitamins per neonatologist guidance</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Vitamin B12 (vegan mothers who breastfeed):</strong> Supplementation essential as breast milk B12 depends entirely on maternal status</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Fluoride (after 6 months):</strong> Only if local water is not fluoridated; discuss with your pediatrician</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Signs of nutritional inadequacy
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Signs that nutrition may not be supporting adequate growth include: slow weight gain or weight loss,
            poor feeding (low volume or short duration), fewer than 6 wet diapers per day after the first week,
            pallor (may indicate iron deficiency anemia), soft or deformed bones (may indicate vitamin D or calcium
            deficiency), poor wound healing, or frequent infections (may indicate zinc deficiency). If you notice
            any of these signs, discuss them with your pediatrician who can assess nutritional status and recommend
            appropriate interventions.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="For the first 6 months, breast milk or formula provides everything your baby needs (plus vitamin D for breastfed babies). After 6 months, introducing nutrient-dense complementary foods, especially iron-rich options, supports continued healthy growth. Focus on variety, responsive feeding, and appropriate supplementation rather than calorie counting." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
