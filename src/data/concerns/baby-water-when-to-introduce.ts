import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-water-when-to-introduce',
  title: 'When Can Babies Drink Water Safely',
  category: 'feeding',
  searchTerms: [
    'when can babies drink water',
    'can I give my baby water',
    'water for baby age',
    'baby water intoxication',
    'is water safe for newborn',
    'how much water for 6 month old',
    'baby water intake guidelines',
    'when to introduce water to baby',
    'giving water to infant',
    'baby dehydrated can I give water',
    'water for baby in hot weather',
    'baby water before 6 months',
  ],
  quickAnswer:
    'Babies under 6 months should NOT be given water. Breast milk or formula provides all the hydration they need, even in hot weather. Giving water to a young baby can cause water intoxication, a dangerous condition where sodium levels drop to dangerous levels, potentially causing seizures. After 6 months, when solids begin, small sips of water (2-4 oz per day) can be offered in a cup. By 12 months, water becomes a regular part of the diet alongside whole milk.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Do not give water to babies under 6 months. Their kidneys are immature and cannot process extra water efficiently. Even small amounts of water can dilute the sodium in their blood to dangerous levels (hyponatremia), which can cause seizures, brain swelling, and in severe cases, death. Breast milk is 87% water and provides all the hydration your baby needs. Formula already contains the correct amount of water when mixed according to directions. In hot weather, offer more frequent breast or formula feeds rather than water.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Once your baby starts eating solid foods, you can begin offering small amounts of water - about 2-4 oz per day from an open cup or straw cup. This helps your baby learn to drink from a cup and provides a small amount of additional hydration to help with the transition to solids. Water at this age is for practice, not primary hydration - breast milk or formula remains the main fluid. You do not need to worry if your baby only takes a few sips.',
    },
    {
      ageRange: '9-12 months',
      context:
        'You can gradually increase water offered at mealtimes. Aim for about 4-8 oz per day total. Continue breast milk or formula as the primary beverage. Water should be offered in a cup, not a bottle, as this supports oral motor development and helps with the eventual transition away from bottles. If you live in an area with fluoridated tap water, this also provides dental benefits.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, water becomes a regular drink alongside whole milk. Toddlers generally need about 1-4 cups of water per day depending on activity, climate, and how much water-rich food they eat. Avoid juice and sugary drinks - water and milk are the best beverages for toddlers. If your toddler is drinking so much water that it replaces milk and food, or seems excessively thirsty, mention it to your pediatrician as this can occasionally indicate a medical condition.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months is getting all fluids from breast milk or formula with no water supplements',
    'Your 6-12 month old takes a few sips of water at mealtimes and still drinks breast milk or formula as their main fluid',
    'Your toddler drinks water throughout the day and has pale yellow urine, indicating good hydration',
  ],
  whenToMention: [
    'You are unsure about how much water to offer at different ages',
    'Your baby seems excessively thirsty and drinks much more water than expected for their age',
    'You are concerned about constipation and wondering if more water would help',
  ],
  whenToActNow: [
    'Your baby under 6 months has accidentally been given a significant amount of water and is showing symptoms like lethargy, irritability, swelling, or seizure-like activity - seek emergency care',
    'Your child is showing signs of dehydration (no wet diapers for 8+ hours, no tears, dry mouth, sunken fontanelle) and is unable to keep fluids down',
  ],
  relatedMilestones: [
    'feeding-solids-introduction',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['dehydration-signs-baby', 'baby-not-drinking-enough-milk', 'introducing-cows-milk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Water and Healthier Drinks for Infants.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/water-background.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
