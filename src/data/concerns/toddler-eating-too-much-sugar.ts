import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-too-much-sugar',
  title: 'Toddler Eating Too Much Sugar',
  category: 'feeding',
  searchTerms: ['toddler too much sugar', 'baby sugar intake', 'toddler addicted to sweets', 'toddler sugar limit', 'toddler only wants sweets', 'toddler juice too much', 'baby sugar in food', 'toddler craving sugar', 'how much sugar for toddler', 'toddler candy'],
  quickAnswer: 'The AAP and WHO recommend that children under 2 years have no added sugar, and children ages 2 and older have less than 25 grams (6 teaspoons) per day. Added sugar is found in many foods marketed to children: fruit juice, flavored yogurt, granola bars, cereals, crackers, and sauces. Natural sugars in whole fruits, plain milk, and plain yogurt are fine and nutritious. Excessive added sugar can contribute to tooth decay, establish strong sweet preferences, displace nutritious foods, and is associated with childhood obesity. You do not need to eliminate sugar entirely - focus on minimizing added sugar and offering whole foods.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 year should have no added sugar or honey. Breast milk and formula naturally contain lactose (milk sugar), which is appropriate for their development. When introducing solids, offer pureed fruits for sweetness rather than adding sugar. Avoid fruit juice before age 1 (the AAP recommends no juice before 12 months). Commercial baby foods sometimes contain added sugars or fruit juice concentrates - check ingredient labels. Babies do not need sweetened foods and offering them can establish an early preference for sweet tastes.' },
    { ageRange: '1-3 years', context: 'Limit juice to 4 ounces per day (diluted is even better) and choose 100% fruit juice over juice drinks. Common sources of hidden added sugar include: flavored yogurt, breakfast cereal, granola bars, ketchup, pasta sauce, and "toddler snacks." Offer whole fruits instead of fruit snacks, plain yogurt with fresh fruit instead of flavored yogurt, and water instead of juice. If your toddler already has a strong sweet preference, gradually reduce sugar rather than eliminating it suddenly. A toddler who refuses all food except sweets may benefit from a feeding evaluation.' },
  ],
  whenNormal: ['Your toddler prefers sweet foods - this is a natural biological preference in young children', 'Your child eats some sugar-containing foods as part of an otherwise balanced diet', 'Occasional treats at parties or special occasions'],
  whenToMention: ['Your toddler refuses to eat anything that is not sweet', 'Sugar intake is displacing nutritious foods in your child\'s diet', 'You want guidance on reading food labels and reducing hidden sugars', 'Your child has dental cavities that may be sugar-related'],
  whenToActNow: ['Your child consumed a large amount of sugar-free candy or products with sugar alcohols (can cause severe diarrhea)', 'Signs of tooth infection: facial swelling, fever, or severe tooth pain from sugar-related cavities'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'toddler-eating-too-much-salt', 'baby-bottle-rot-cavities', 'baby-starting-solids-when-ready'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Reducing Added Sugars in Children\'s Diets. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/How-to-Reduce-Added-Sugar-in-Your-Childs-Diet.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Sugars Intake for Adults and Children.', url: 'https://www.who.int/publications/i/item/9789241549028' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fruit Juice and Your Child\'s Diet. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Fruit-Juice-and-Your-Childs-Diet.aspx' },
  ],
};
