import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'seed-oils-baby-food-concern',
  title: 'Seed Oils in Baby Food: Separating Fact from Fear',
  category: 'feeding',
  searchTerms: [
    'seed oils baby food',
    'seed oils bad for baby',
    'seed oils infant formula',
    'vegetable oils baby food safe',
    'seed oil debate baby',
    'canola oil baby food',
    'soybean oil formula',
    'sunflower oil baby food',
    'inflammatory oils baby',
    'seed oils children health',
  ],
  quickAnswer:
    'The viral "seed oil" debate has created significant parental anxiety, but major medical and nutrition organizations including the AAP, AHA, and WHO do not classify common vegetable oils used in infant formula and baby food as harmful. Oils like soybean, sunflower, and canola provide essential fatty acids that are important for brain development. While the broader adult dietary debate about seed oils continues, there is no evidence that the amounts present in infant formula or baby food cause harm to babies.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infant formulas contain vegetable oils (including soybean, palm, coconut, and sunflower oils) as their primary fat source because they provide the fatty acid profile closest to breast milk when blended. These oils are regulated by the FDA and must meet specific nutritional standards. The oils in formula provide essential fatty acids including linoleic acid and alpha-linolenic acid, which are crucial for brain and eye development. Breast milk itself contains a mix of fatty acids that varies based on the parent\'s diet. There is no evidence-based reason to avoid standard infant formulas because of their oil sources.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solid foods, you may encounter commercial baby foods that contain small amounts of vegetable oils for texture, calorie content, or as cooking ingredients. These amounts are minimal and are not a health concern. When preparing homemade baby food, using small amounts of olive oil, avocado oil, or butter to add healthy fats is perfectly appropriate. Focus on overall dietary quality and variety rather than eliminating specific oil types. Fat is an essential nutrient for infant brain development, and babies need proportionally more dietary fat than adults.',
    },
    {
      ageRange: '12+ months',
      context:
        'Toddlers need fat to make up about 30-40% of their total calories for continued brain development. The type of fat matters less than social media claims suggest. The American Heart Association recommends focusing on limiting added sugars and ultra-processed foods rather than eliminating specific oil types. A balanced diet with a variety of fat sources (olive oil, butter, avocado, nut butters, fatty fish) is the healthiest approach. If you prefer to avoid specific oils, that is your choice, but it is not medically necessary.',
    },
  ],
  whenNormal: [
    'Your baby is thriving on standard infant formula that contains vegetable oils',
    'Commercial baby foods contain small amounts of vegetable oils as an ingredient',
    'You use common cooking oils in your baby\'s homemade food',
  ],
  whenToMention: [
    'You are considering switching formulas based on seed oil concerns and want guidance',
    'You are following a very restrictive diet for your baby based on social media advice and want to ensure nutritional adequacy',
    'Your child has confirmed food allergies and you need help identifying safe oil sources',
  ],
  whenToActNow: [
    'Your baby has symptoms of a genuine allergic reaction (hives, swelling, vomiting, difficulty breathing) after eating any food',
    'You have been withholding essential fats from your baby\'s diet and are concerned about nutritional deficiency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'rice-cereal-in-bottle-choking-danger',
    'rising-childhood-food-allergies',
    'allergen-introduction-timing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Nutrition and Feeding. AAP, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Dietary Fats and Cardiovascular Disease. AHA Scientific Statement, 2017.',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000510',
    },
    {
      org: 'FDA',
      citation:
        'US Food and Drug Administration. Infant Formula Requirements. FDA, 2024.',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
  ],
};
