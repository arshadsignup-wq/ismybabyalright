import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-drinking-enough-water',
  title: 'Baby Not Drinking Enough Water',
  category: 'feeding',
  searchTerms: [
    'baby not drinking water',
    'when to give baby water',
    'how much water does baby need',
    'baby refuses water cup',
    'toddler not drinking enough water',
    'dehydration signs baby',
    'water for breastfed baby',
    'baby water intake 6 months',
  ],
  quickAnswer:
    'Babies under 6 months do not need water at all because breast milk and formula provide all the hydration they need. In fact, giving water to young infants can be dangerous as it can cause electrolyte imbalances. After 6 months, small sips of water (2-4 ounces per day) can be introduced with meals as solids are started. By 12 months, toddlers should drink about 1-4 cups of water daily alongside their milk intake.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Do not give water to babies under 6 months. Breast milk is about 88% water, and formula is mixed with the appropriate amount of water. Giving additional water can fill up the baby\'s small stomach, reducing milk intake and potentially causing weight loss. In rare cases, excessive water intake in young infants can lead to water intoxication (hyponatremia), a dangerous condition where sodium levels drop too low, causing seizures.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to avoid offering water. Even in hot weather, breastfed or formula-fed babies get sufficient hydration from their milk. If you are concerned about dehydration in hot weather, offer more frequent breast or formula feeds instead of water. Signs of adequate hydration include 6-8 wet diapers per day, moist mouth and lips, and tears when crying.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When complementary foods are introduced around 6 months, you can begin offering small amounts of water in an open cup or straw cup during meals. About 2-4 ounces (60-120 mL) per day is typically sufficient at this stage, as breast milk or formula remains the primary source of hydration. Use plain water without fluoride drops unless recommended by your pediatrician in an area without fluoridated water. The goal is to familiarize your baby with drinking water, not to replace milk feeds.',
    },
    {
      ageRange: '12 months+',
      context:
        'As toddlers transition from formula or decrease breastfeeding, water becomes an increasingly important source of hydration. Aim for approximately 1-4 cups (8-32 ounces) of water per day in addition to 16-24 ounces of whole milk. Offer water throughout the day, especially during and between meals, after physical activity, and in hot weather. If your toddler resists plain water, try an open cup, a straw cup, or adding a splash of fruit for subtle flavor. Avoid water substitutes like juice or sweetened drinks.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months does not drink water and is well-hydrated from breast milk or formula with 6-8 wet diapers per day',
    'Your baby over 6 months drinks small sips of water with meals but still relies primarily on breast milk or formula for hydration',
    'Your toddler prefers milk or water over other beverages and has consistent wet diapers or urination throughout the day',
    'Your baby or toddler has clear to light yellow urine, moist lips, and tears when crying',
  ],
  whenToMention: [
    'Your toddler refuses to drink any water and you are relying solely on milk for hydration',
    'Your baby or toddler seems to have decreased urine output, fewer than 4-6 wet diapers per day',
    'You live in a hot climate and are concerned about whether your baby is getting enough fluids',
  ],
  whenToActNow: [
    'Your baby or toddler has signs of dehydration: no tears when crying, dry mouth and lips, sunken fontanelle (soft spot), very dark urine, no wet diaper for 6-8 hours, or extreme lethargy',
    'Your young infant (under 6 months) has accidentally consumed a large amount of water and shows symptoms like swelling, irritability, drowsiness, or seizures (possible water intoxication)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Water and Juice. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Water-and-Juice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Water and Healthier Drinks for Infants and Toddlers.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/water-and-healthier-drinks.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding: Model Chapter for Textbooks for Medical Students and Allied Health Professionals.',
      url: 'https://www.who.int/publications/i/item/9789241597494',
    },
  ],
};
