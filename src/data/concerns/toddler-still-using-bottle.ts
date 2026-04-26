import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-still-using-bottle',
  title: 'Toddler Still Using a Bottle',
  category: 'feeding',
  searchTerms: [
    'toddler still using bottle',
    'when to stop bottle',
    'toddler won\'t give up bottle',
    'how to wean off bottle',
    'baby bottle weaning age',
    'bottle affecting teeth toddler',
    'toddler addicted to bottle',
    'when should baby stop using bottle',
    'bottle at bedtime toddler',
    'transitioning from bottle to cup',
  ],
  quickAnswer:
    'The AAP recommends weaning from the bottle by 12 to 18 months of age. Prolonged bottle use, especially with milk or juice at bedtime, can contribute to tooth decay, ear infections, and excessive calorie intake. But if your toddler is still attached to their bottle, you are not alone. Many families find this transition challenging, and there are gentle strategies that can help make the switch to cups.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'This is a great time to introduce an open cup or straw cup alongside bottle feeds. Letting your baby practice with water at meals helps build the cup-drinking skills they will need when it is time to wean the bottle. Even small sips count as practice. You do not need to remove the bottle yet, but early exposure to cups makes the later transition much smoother.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Begin gradually replacing one bottle per day with a cup, starting with the feed your baby seems least attached to. Many babies do best when the midday bottle goes first. Use a cup with handles, a straw cup, or even an open cup with help. Continue offering the morning and bedtime bottles while building cup skills during the day.',
    },
    {
      ageRange: '12-18 months',
      context:
        'The AAP recommends completing the bottle-to-cup transition by 18 months at the latest. If your toddler is resistant, try offering their favorite milk only in a cup and water in the bottle to make the cup more appealing. Going cold turkey works well for some families, while others prefer a gradual approach. The bedtime bottle is usually the hardest to drop; try replacing it with a new bedtime routine involving a book, song, or sippy cup of milk at storytime instead.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'If your toddler is still on the bottle past 18 months, it is not too late to make the switch. Be consistent and confident in the transition. Some parents find success with a "bottle fairy" or a special event to mark the transition. Toddlers may fuss for a few days but typically adjust within a week. If your toddler is drinking milk from a bottle at bedtime, this is especially important to stop to protect their teeth.',
    },
  ],
  whenNormal: [
    'Your 9 to 12 month old is still using bottles alongside practicing cup drinking at meals',
    'Your toddler takes a few days of fussing before accepting a cup instead of a bottle',
    'Your toddler drinks slightly less milk during the transition but eats solid foods well',
    'Your toddler wants the bottle mainly at bedtime for comfort rather than nutrition',
  ],
  whenToMention: [
    'Your toddler is over 18 months and drinks large volumes of milk from a bottle throughout the day, which may be displacing solid food intake',
    'Your toddler falls asleep with a bottle of milk in their mouth regularly, which can lead to severe tooth decay',
    'Your toddler refuses all cups and you are struggling to find an alternative',
  ],
  whenToActNow: [
    'Your child\'s dentist has identified bottle-related tooth decay that requires treatment',
    'Your toddler is drinking so much milk from the bottle that they are becoming iron-deficient or failing to eat solid foods',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sippy Cups: Transitioning from the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Sippy-Cups.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Cups.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-cups.html',
    },
  ],
};
