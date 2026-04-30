import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-water',
  title: 'Baby or Toddler Refusing to Drink Water',
  category: 'feeding',
  searchTerms: ['baby won\'t drink water', 'toddler refusing water', 'toddler only wants milk not water', 'how to get toddler to drink water', 'baby not drinking water', 'toddler dehydrated won\'t drink', 'when to give baby water', 'toddler hates water', 'getting toddler to drink more water', 'toddler not drinking enough fluids'],
  quickAnswer: 'Babies under 6 months should not have water at all - breast milk or formula provides all the hydration they need. After 6 months, small sips of water with meals can be introduced, but milk remains the primary fluid. Many toddlers prefer milk or juice over plain water, which is normal. Offering water in fun cups, adding fruit slices for flavor, and modeling water drinking yourself can help. Most toddlers get adequate hydration from milk and water-rich foods even if they do not drink much plain water.',
  byAge: [
    { ageRange: '0-6 months', context: 'Do not give water to babies under 6 months. Their kidneys cannot handle extra water, and it can cause dangerous electrolyte imbalances (water intoxication). Breast milk and formula are 80-90% water and provide complete hydration. Even in hot weather, extra breast milk or formula feeds are the right approach, not water.' },
    { ageRange: '6-12 months', context: 'Once solids begin, offer small sips of water (2-4 oz per day) in an open cup or straw cup with meals. Your baby may reject it at first, which is fine - they are still getting most hydration from breast milk or formula. Do not add sweeteners or juice to make water more appealing. Let them practice with water during mealtimes without pressure.' },
    { ageRange: '1-3 years', context: 'Toddlers should drink about 1-4 cups of water daily depending on activity level and climate. Many toddlers prefer milk. Limit milk to 16-24 oz per day and juice to 4 oz or less to leave room for water. Try offering water before milk at meals, using fun cups or straws, and keeping water accessible throughout the day. Water-rich foods like watermelon, cucumbers, and oranges also contribute to hydration.' },
  ],
  whenNormal: ['A baby under 6 months not drinking any water (they should not be given water)', 'A toddler preferring milk over water', 'A toddler drinking small amounts of water throughout the day rather than large cups', 'Fluctuating water intake day to day based on activity and weather'],
  whenToMention: ['Your toddler drinks very little fluid of any kind (milk or water)', 'Your toddler\'s urine is consistently dark yellow', 'Your child has persistent constipation that may be related to low fluid intake', 'Your toddler only wants juice or sweetened drinks and refuses all water and milk'],
  whenToActNow: ['Your child shows signs of dehydration: no tears, dry mouth, sunken eyes, no wet diapers for 6+ hours', 'Your child is refusing all fluids during an illness', 'Your child is drinking excessively large amounts of water (possible diabetes sign)'],
  relatedMilestones: ['6-months', '12-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['dehydration-signs-baby', 'baby-water-when-to-introduce', 'toddler-only-drinking-milk', 'constipation'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Recommended Drinks for Children Ages 5 & Under.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Water and Juice. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Water-and-Juice.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Water and Healthier Drinks.', url: 'https://www.cdc.gov/healthy-weight-growth/healthy-drinks/index.html' },
  ],
};
