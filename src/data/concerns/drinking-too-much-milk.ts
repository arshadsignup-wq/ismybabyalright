import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'drinking-too-much-milk',
  title: 'Toddler Drinking Too Much Milk',
  category: 'feeding',
  searchTerms: [
    'toddler drinking too much milk',
    'toddler only wants milk',
    'toddler won\'t eat just drinks milk',
    'how much milk should toddler drink',
    'toddler addicted to milk',
    'toddler refusing food but drinks milk all day',
    'too much cow\'s milk toddler',
    'milk anemia toddler',
    'toddler milk belly',
    'how to reduce toddler milk intake',
  ],
  quickAnswer:
    'While milk is nutritious, toddlers who drink too much can fill up on milk and refuse solid foods, which can lead to iron deficiency anemia and nutritional gaps. The AAP recommends no more than 16 to 24 ounces (2 to 3 cups) of whole milk per day for toddlers ages 1 to 2, and 16 ounces (2 cups) of low-fat milk for children over 2. If your toddler is drinking more than this, gradually reducing their intake and offering water and food instead can make a big difference.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'The transition from breast milk or formula to cow\'s milk and solid foods is one of the biggest feeding shifts of early childhood. Many toddlers love milk and would happily drink it all day. Offering milk at meals and snacks rather than on demand, and using a cup instead of a bottle, naturally helps limit intake. Bottles of milk, especially at bedtime, make it easy to overconsume.',
    },
    {
      ageRange: '18-24 months',
      context:
        'If your toddler is drinking more than 24 ounces of milk daily, they are likely displacing important nutrients from solid foods, particularly iron and fiber. Excess milk is one of the most common causes of iron deficiency anemia in toddlers because calcium in milk inhibits iron absorption and a full belly of milk means fewer iron-rich foods. Gradually reduce milk portions and offer water between meals.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, the AAP recommends switching to low-fat or skim milk and keeping intake to about 16 ounces per day. Children this age who still rely heavily on milk are at risk for constipation, iron deficiency, and picky eating because they simply are not hungry for solid foods. Offering milk only at meals and water at all other times is a straightforward strategy.',
    },
  ],
  whenNormal: [
    'Your toddler drinks 16 to 24 ounces of milk daily and also eats a reasonable variety of solid foods',
    'Your toddler temporarily increases milk intake during illness when they may not want solid food',
    'Your toddler prefers milk at certain meals but eats well at others',
  ],
  whenToMention: [
    'Your toddler is drinking more than 24 ounces of milk daily and refusing most solid foods',
    'Your toddler appears pale, is unusually tired, or has been eating non-food items like dirt or ice, which could suggest iron deficiency',
    'Your toddler has chronic constipation which can be worsened by excess dairy intake',
    'You are struggling to reduce your toddler\'s milk intake despite trying',
  ],
  whenToActNow: [
    'Your toddler is extremely pale, lethargic, or has been diagnosed with or shows signs of severe anemia',
    'Your child is losing weight because they refuse all solid food and are only drinking milk',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'independence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk? and Recommended Drinks for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 & Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cow\'s Milk and Milk Alternatives.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html',
    },
  ],
};
