import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cup-drinking-when-to-start',
  title: 'When Can My Baby Start Drinking from a Cup?',
  category: 'feeding',
  searchTerms: [
    'when to introduce cup baby',
    'baby first cup age',
    'open cup baby when',
    'straw cup vs sippy cup',
    'baby drinking from cup milestone',
    'teach baby to use cup',
    'cup training baby',
    'what cup for 6 month old',
    'baby open cup practice',
    'best first cup for baby',
  ],
  quickAnswer:
    'You can begin introducing an open cup or straw cup around 6 months of age when your baby starts solids. Initially, offer just small sips of water during meals for practice. Babies do not need to be proficient cup drinkers right away - it is a skill that develops gradually. Speech-language pathologists and feeding therapists generally recommend open cups or straw cups over traditional sippy cups, as they promote better oral motor development.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Start by offering a small open cup (like a tiny shot glass or a specially designed baby open cup) with just a tablespoon or two of water during mealtimes. Guide the cup to your baby\'s lips and tilt slowly. Expect spilling - this is part of the learning process. You can also introduce a straw cup by teaching your baby to draw liquid up through the straw. Some parents use a technique of placing a straw in liquid, covering the top with their finger to trap the liquid, and releasing it into the baby\'s mouth to teach the concept.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, many babies can hold and drink from an open cup with some assistance, though spills are still expected. Straw drinking may be more proficient. Offer water in a cup at all meals and snacks. You can begin offering breast milk or formula in a cup at one meal per day to begin the bottle-weaning process. This is a motor skill - some babies get it quickly while others need more practice. The key is regular, pressure-free exposure.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12-15 months, most toddlers can drink from a straw cup independently and are working on open cup skills with some spillage. The AAP recommends weaning from bottles by 12-18 months, so this is the time to make cups the primary drinking vessel. Offer cow\'s milk (or alternative) in a cup rather than a bottle. Most toddlers master open cup drinking with minimal spilling by 18-24 months. Regular sippy cups with spill-proof valves are not ideal for oral motor development, though they can be convenient for on-the-go use.',
    },
  ],
  whenNormal: [
    'Your 6-9 month old mostly dribbles water when you offer a cup - they are just learning the mechanics.',
    'Your baby can drink from a straw cup but still spills from an open cup at 12 months.',
    'Your toddler prefers a straw cup over an open cup - both are developmentally appropriate.',
    'Your baby initially rejects the cup and only takes small sips - it takes time and repeated exposure.',
  ],
  whenToMention: [
    'Your baby is over 12 months and refuses all cups, only accepting bottles.',
    'Your child consistently chokes or coughs when drinking from any cup past 12 months.',
    'Your toddler is over 18 months and cannot manage any form of cup drinking despite regular practice.',
  ],
  whenToActNow: [
    'Your baby is choking or aspirating (liquid going into lungs) when drinking from any vessel, including bottles.',
    'Your child is showing signs of dehydration because they refuse all cups and you are weaning from bottles.',
    'Your child has persistent difficulty swallowing liquids that seems to be getting worse rather than better.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-bottle-to-cup-transition',
    'baby-finger-foods-best-first',
    'baby-fine-motor-delay-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 6 to 24 Months Old.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
  ],
};
