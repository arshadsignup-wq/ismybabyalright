import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'water-intoxication-baby',
  title: 'Water Intoxication in Babies Under 6 Months',
  category: 'medical',
  searchTerms: [
    'baby water intoxication',
    'giving baby water dangerous',
    'water poisoning infant',
    'baby seizure from water',
    'can babies drink water',
    'water intoxication newborn',
    'hyponatremia baby water',
    'diluted formula danger',
    'baby too much water',
    'when can babies have water',
  ],
  quickAnswer:
    'Babies under 6 months should not be given plain water. Their immature kidneys cannot process extra water, which dilutes sodium in the blood (hyponatremia) and can cause seizures, brain swelling, and in rare cases can be fatal. Breast milk or properly prepared formula provides all the hydration a young baby needs, even in hot weather.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'This is the critical period when water intoxication is a real danger. Never give plain water to a baby this age, even in small amounts. Do not dilute formula beyond manufacturer instructions. In hot weather, offer more frequent breast or formula feeds instead of water. Even a few ounces of water can be dangerous for a small baby because their kidneys are not mature enough to excrete the excess fluid.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby starts solid foods around 6 months, small sips of water with meals are safe — typically 2-4 ounces per day. Water should complement, not replace, breast milk or formula. Avoid giving large amounts of water at once. If your baby seems excessively thirsty, offer breast milk or formula first.',
    },
    {
      ageRange: '12 months+',
      context:
        'After 12 months, your toddler can drink water more freely as their kidneys are more mature. Water becomes an important part of hydration alongside whole milk and solid foods. There is still no need to force large quantities, but the risk of water intoxication is much lower at this age.',
    },
  ],
  whenNormal: [
    'Your baby over 6 months takes a few sips of water with meals — this is safe and appropriate',
    'Your breastfed or formula-fed baby under 6 months seems satisfied after regular feeds without added water',
    'You are offering extra breast or formula feeds during hot weather instead of water',
  ],
  whenToMention: [
    'Someone gave your baby under 6 months a small amount of water and you are concerned',
    'You have been over-diluting formula and want to confirm the correct preparation ratio',
    'You are unsure when and how much water to introduce with solid foods',
  ],
  whenToActNow: [
    'Your baby under 6 months consumed a significant amount of plain water and is showing symptoms such as irritability, drowsiness, swelling of the face, low body temperature, or seizures — call 911 immediately',
    'Your baby has been given diluted formula over multiple feedings and seems lethargic, is vomiting, or is not acting like themselves',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When Can Babies Drink Water? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/when-can-babies-drink-water.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Water and Healthier Drinks for Infants.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/water.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
