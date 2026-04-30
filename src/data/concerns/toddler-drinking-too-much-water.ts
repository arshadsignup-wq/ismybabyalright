import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-drinking-too-much-water',
  title: 'Toddler Drinking Too Much Water',
  category: 'feeding',
  searchTerms: ['toddler drinking too much water', 'baby drinking excessive water', 'toddler excessive thirst', 'toddler always thirsty', 'baby water intoxication', 'how much water toddler', 'toddler polydipsia', 'toddler drinking water constantly', 'baby overhydration', 'toddler craves water'],
  quickAnswer: 'The right amount of water for toddlers ages 1-3 is about 1-4 cups (8-32 ounces) per day, in addition to milk. Babies under 6 months should not drink water at all, and babies 6-12 months need only small sips. While most toddlers drink an appropriate amount, excessive water drinking (significantly more than 32 oz per day in a toddler, or a sudden increase in thirst) can occasionally indicate an underlying condition such as diabetes or a kidney issue, and should be discussed with your pediatrician. Water intoxication (hyponatremia) is a risk in young babies who are given too much water.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 6 months should NOT drink water - breast milk or formula provides all the hydration they need. Even in hot weather, offering extra breast milk or formula is preferred over water. Giving water to young babies can cause dangerous water intoxication (hyponatremia), which dilutes the sodium in their blood. From 6-12 months, small sips of water (2-4 oz per day) from a cup with meals are fine as solids are introduced, but breast milk or formula should remain the primary drink.' },
    { ageRange: '1-3 years', context: 'Toddlers ages 1-3 should drink about 1-4 cups of water per day, along with about 16 oz (2 cups) of whole milk. Some toddlers drink more during hot weather, after active play, or when eating salty or dry foods - this is normal. However, if your toddler is suddenly and persistently drinking significantly more water than usual, having many more wet diapers, and/or losing weight, see your pediatrician promptly. Excessive thirst (polydipsia) combined with excessive urination (polyuria) can be an early sign of type 1 diabetes, which can appear in toddlers.' },
  ],
  whenNormal: ['Increased thirst during hot weather or after active play', 'Your toddler drinking more water on days they eat salty or dry foods', 'A toddler who prefers water over milk (as long as milk intake is adequate)', 'Variable water intake from day to day'],
  whenToMention: ['Your toddler seems to drink significantly more water than peers', 'Excessive thirst combined with increased urination or more wet diapers', 'Your toddler wakes at night asking for water frequently', 'You want guidance on appropriate fluid intake for your child\'s age'],
  whenToActNow: ['Sudden onset of extreme thirst with frequent urination, especially with weight loss (possible type 1 diabetes - needs urgent evaluation)', 'A baby under 6 months was given a large amount of water (risk of water intoxication)', 'Signs of water intoxication in a baby: irritability, drowsiness, low body temperature, facial puffiness, or seizures'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-water', 'toddler-eating-too-much-salt', 'frequent-urination-baby', 'dehydration-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Recommended Drinks for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Water and Juice. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Water-and-Juice.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Water Intoxication in Infants.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
