import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'drinking-milk-from-bottle-only',
  title: 'Only Drinks Milk from a Bottle',
  category: 'feeding',
  searchTerms: [
    'toddler only drinks milk from bottle',
    'won\'t drink milk from cup',
    'toddler refuses milk in sippy cup',
    'how to wean toddler off bottle',
    'toddler addicted to bottle',
    'bottle weaning tips',
    'toddler won\'t give up bottle',
    'milk only from bottle toddler',
    'when to stop bottle feeding',
  ],
  quickAnswer:
    'Many toddlers resist giving up their bottle, especially for milk, because they associate the bottle with comfort and the familiar sucking motion. The AAP recommends weaning from bottles by 12 to 15 months, as prolonged bottle use can contribute to tooth decay, excess calorie intake, and delayed cup-drinking skills. The transition can feel difficult, but most toddlers adjust within one to two weeks.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'This is a good time to begin introducing milk (breastmilk or formula) in a cup alongside bottle feeds. Start with small amounts in a sippy cup, straw cup, or open cup during meals. The goal is not to eliminate the bottle yet but to build familiarity with cup drinking so the eventual transition is smoother. Many babies accept water from a cup before they accept milk.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The AAP recommends eliminating bottles by 12 to 15 months. If your toddler refuses milk from a cup, try offering milk in different types of cups, serving it at a slightly different temperature, or transitioning gradually by diluting bottle milk with water while offering full-strength milk in a cup. Some families find success going cold turkey and removing all bottles at once. Your toddler may drink less milk initially, which is normal. They can get calcium from yogurt, cheese, and other dairy products.',
    },
    {
      ageRange: '24-36 months',
      context:
        'If your toddler is still using a bottle past age two, it becomes increasingly important to wean, as prolonged bottle use is linked to early childhood cavities, iron deficiency from excess milk intake, and picky eating. Talk to your pediatrician about a weaning plan. Some children at this age are very attached to the bedtime bottle, which is the hardest to drop. Replacing the bottle with a new bedtime routine involving a cup and a book can help.',
    },
  ],
  whenNormal: [
    'Your toddler initially refuses milk from a cup but accepts it after a few days to a week of consistent offering',
    'Your toddler drinks less total milk after transitioning to a cup, which is typically fine since toddlers only need 16 to 24 ounces of milk per day',
    'Your toddler accepts water and other liquids from a cup but is slow to accept milk from one',
  ],
  whenToMention: [
    'Your toddler over 15 months refuses all liquids from any cup and will only drink from a bottle',
    'Your toddler is drinking more than 24 ounces of milk per day from a bottle, which may displace solid food intake',
    'Your toddler has visible tooth decay that may be related to bottle use, especially nighttime bottles',
    'Your child over two years has made no progress transitioning away from bottles despite consistent efforts',
  ],
  whenToActNow: [
    'Your toddler is refusing all liquids from any source and showing signs of dehydration such as dry mouth, fewer wet diapers, or lethargy',
    'Your toddler has significant tooth damage or pain from prolonged bottle use',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Beverages.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html',
    },
  ],
};
