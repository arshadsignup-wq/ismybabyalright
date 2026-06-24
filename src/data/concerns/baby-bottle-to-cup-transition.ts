import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bottle-to-cup-transition',
  title: 'Transitioning My Baby from Bottle to Cup',
  category: 'feeding',
  searchTerms: [
    'baby bottle to cup transition',
    'when to stop bottle feeding',
    'toddler refuses cup',
    'weaning off bottle',
    'bottle weaning tips',
    'best cup for baby transition',
    'AAP bottle weaning age',
    'toddler still on bottle',
    'how to switch from bottle to sippy cup',
    'baby wont drink milk from cup',
    'straw cup vs sippy cup baby',
  ],
  quickAnswer:
    'The AAP recommends beginning to introduce a cup around 6 months and weaning off bottles by 12-18 months. Prolonged bottle use is associated with tooth decay, iron deficiency, and excess calorie intake. The transition can be gradual - start by offering a cup at one meal, then slowly replace more bottle feeds. Open cups and straw cups are preferred over sippy cups as they promote better oral motor development.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'This is a great age to introduce a cup alongside bottle feeds. Start with a small open cup or a straw cup with water during meals. Your baby will be messy and may only take a few sips - this is completely normal and expected. The goal at this stage is exposure and practice, not replacing bottle feeds. Some babies take to cups quickly while others need weeks of practice. Offer the cup consistently at mealtimes without pressure.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Begin gradually replacing bottle feeds with cup feeds. Many pediatricians suggest eliminating one bottle at a time, starting with the one your baby seems least attached to (often a daytime bottle). Offer breast milk or formula in a cup at meals and snacks. By 12 months, aim to have your baby primarily using cups. The bedtime bottle is often the hardest to eliminate - try moving it earlier in the routine so it is not the last thing before sleep, and brush teeth afterward.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The AAP recommends bottles be fully discontinued by 18 months at the latest. If your toddler is still attached to their bottle, a cold-turkey approach often works better than prolonged gradual weaning at this age. You can mark a specific day, let your child help "give away" their bottles, and offer cups as the only option. Expect a few days of resistance. Toddlers who continue using bottles beyond 18 months are at increased risk for dental caries and may drink too much milk, displacing iron-rich foods.',
    },
  ],
  whenNormal: [
    'Your 6-9 month old makes a mess with a cup and only drinks small amounts - this is part of learning.',
    'Your baby prefers the bottle to the cup initially - most babies have a transition period of several weeks.',
    'Your toddler drinks less total milk after switching to a cup - this is actually appropriate as solid food intake increases.',
  ],
  whenToMention: [
    'Your toddler is over 18 months and still relies primarily on bottles for nutrition.',
    'Your child refuses all cups and is not getting adequate fluid intake.',
    'You notice your child\'s teeth are showing signs of decay that may be related to bottle use, especially with nighttime bottles.',
  ],
  whenToActNow: [
    'Your toddler is refusing both bottles and cups and showing signs of dehydration - fewer than 4 wet diapers a day, dry lips, lethargy.',
    'Your child has significant dental damage from prolonged bottle use and needs dental evaluation.',
    'Your child is falling off their growth curve because they are drinking too much milk from bottles and refusing solid foods.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cup-drinking-when-to-start',
    'baby-bottle-sterilization-methods',
    'baby-finger-foods-best-first',
    'bottle-preference',
  ],
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
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 12 to 23 Months Old.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-for-12-to-23-months-old.html',
    },
  ],
};
