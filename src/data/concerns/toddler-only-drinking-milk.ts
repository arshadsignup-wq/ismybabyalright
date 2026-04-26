import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-only-drinking-milk',
  title: 'Toddler Only Wanting to Drink Milk',
  category: 'feeding',
  searchTerms: [
    'toddler only drinks milk',
    'toddler won\'t eat only wants milk',
    'toddler addicted to milk',
    'toddler drinking too much milk',
    'how much milk is too much for toddler',
    'toddler refuses food only drinks milk',
    'milk anemia toddler',
    'toddler milk intake',
    'toddler replacing meals with milk',
    'toddler won\'t eat dinner wants milk instead',
  ],
  quickAnswer:
    'While milk is an excellent source of calcium and vitamin D, too much milk can actually be harmful for toddlers. When a toddler fills up on milk, they have little appetite left for the iron-rich foods and variety they need. Excessive milk intake (more than 24 ounces per day) is one of the most common causes of iron-deficiency anemia in toddlers. The good news is that with some simple adjustments to when and how much milk is offered, most toddlers begin eating more solid foods.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'The transition from formula or breast milk to cow\'s milk at 12 months can create a pattern where toddlers prefer drinking milk over eating food. At this age, aim for 16 to 24 ounces of whole milk per day. Offer milk at meals rather than between meals, and offer water at other times. If your toddler is drinking milk from a bottle, transitioning to a cup can naturally reduce the amount they consume because the comfort-sucking component is removed.',
    },
    {
      ageRange: '18-24 months',
      context:
        'If your toddler is filling up on milk and refusing meals, try offering milk only at meals and limiting it to about 4 to 6 ounces per sitting. Offer food first at mealtimes before pouring the milk. Do not use milk as a between-meal drink; offer water instead. It may take a few days for your toddler to adjust, but hunger will eventually motivate them to eat more solid foods.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age two, your child needs about 16 ounces (two cups) of milk per day, or the equivalent from other dairy sources like yogurt and cheese. If your toddler is still consuming large amounts of milk at this age, talk to your pediatrician about checking iron levels. Gradually reducing milk intake while offering appealing solid food alternatives and maintaining a consistent mealtime schedule usually resolves this pattern.',
    },
  ],
  whenNormal: [
    'Your toddler prefers milk but still eats some solid foods each day',
    'Your toddler drinks 16 to 24 ounces of milk per day and eats meals in addition',
    'Your toddler goes through brief phases of preferring milk over food but returns to eating normally',
    'Your toddler counts yogurt and cheese as part of their dairy intake alongside a moderate amount of milk',
  ],
  whenToMention: [
    'Your toddler consistently drinks more than 24 ounces of milk per day and refuses most solid foods',
    'Your toddler appears pale, is unusually tired, or craves non-food items like ice, which can be signs of iron deficiency',
    'Your toddler is constipated, which can be worsened by excessive dairy intake',
  ],
  whenToActNow: [
    'Your toddler is extremely pale, lethargic, or has rapid breathing, which could indicate severe anemia',
    'Your toddler is losing weight or has fallen off their growth curve',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Iron Deficiency in Young Children.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
  ],
};
