import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-milk-consumption-how-much',
  title: 'How Much Milk Should My Toddler Drink?',
  category: 'feeding',
  searchTerms: [
    'how much milk for toddler',
    'toddler milk intake',
    'how much milk should 2 year old drink',
    'toddler drinking too much milk',
    'toddler won\'t drink milk',
    'how many ounces of milk for toddler',
    'whole milk for toddler amount',
    'toddler milk recommendation',
    'when to switch to 2 percent milk',
    'toddler milk before bed',
  ],
  quickAnswer:
    'The AAP recommends that toddlers ages 12-24 months drink 16-24 ounces (2-3 cups) of whole milk per day, and children ages 2-5 years drink 16-20 ounces (2-2.5 cups) of milk per day. Too much milk can fill toddlers up, reduce their appetite for nutritious solid foods, and interfere with iron absorption. Too little means they may miss out on important calcium, vitamin D, and fat for brain development.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At age 12 months, your pediatrician will typically recommend transitioning from formula or breast milk to whole cow\'s milk. Whole milk is recommended until age 2 because the fat content supports brain development. Introduce milk in a cup rather than a bottle, and aim for 16-24 ounces per day. Offer milk with meals and snacks rather than as a constant sip-all-day drink. If your toddler refuses cow\'s milk initially, try mixing it with familiar formula or breast milk and gradually increasing the ratio.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Many toddlers love milk and would happily drink it all day if allowed. However, excessive milk intake (more than 24 ounces per day) is a common cause of iron deficiency anemia in toddlers because milk is low in iron and the calcium in milk can interfere with iron absorption. If your toddler is drinking too much milk, try offering water between meals and limiting milk to mealtimes and one snack. If your toddler still uses a bottle, transitioning to a cup can naturally reduce milk intake.',
    },
    {
      ageRange: '2-5 years',
      context:
        'After age 2, you can transition to reduced-fat (2%) or low-fat (1%) milk unless your pediatrician recommends otherwise. The daily recommendation drops slightly to about 16-20 ounces. If your child does not drink milk, they can get calcium and vitamin D from other sources such as yogurt, cheese, fortified orange juice, and fortified plant-based milks. Your pediatrician may recommend a vitamin D supplement if your child\'s dietary intake is low.',
    },
  ],
  whenNormal: [
    'Your toddler drinks 16-24 ounces of whole milk per day and eats a variety of solid foods',
    'Your toddler\'s milk intake varies from day to day — some days more, some days less',
    'Your toddler prefers water or other beverages and gets calcium from yogurt, cheese, or other dairy products instead of milk',
  ],
  whenToMention: [
    'Your toddler drinks more than 24 ounces of milk per day and has a poor appetite for solid foods',
    'Your toddler refuses all dairy products and you are concerned about calcium and vitamin D intake',
    'Your toddler appears pale or tired, which could indicate iron deficiency from excessive milk consumption',
  ],
  whenToActNow: [
    'Your toddler is extremely pale, lethargic, or eating non-food items (like dirt or ice), which are signs of severe iron deficiency anemia',
    'Your toddler has blood in their stool, which can occur with cow\'s milk protein intolerance',
    'Your toddler refuses all food and liquids for more than 24 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'too-much-cow-milk-iron-absorption',
    'toddler-milk-allergy-alternatives',
    'toddler-sippy-cup-vs-open-cup',
    'grazing-all-day-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cow\'s Milk and Milk Alternatives.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html',
    },
  ],
};
