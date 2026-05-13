import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'feeding-schedule-twins',
  title: 'Feeding Schedule for Twins',
  category: 'feeding',
  searchTerms: [
    'feeding twins schedule',
    'how to feed twins at the same time',
    'tandem breastfeeding twins',
    'bottle feeding twins simultaneously',
    'twin feeding routine',
    'feeding multiples newborn',
    'one twin eating more than the other',
    'twins different feeding needs',
    'twin feeding log',
  ],
  quickAnswer:
    'Feeding twins is one of the biggest logistical challenges of early parenthood with multiples. Whether you breastfeed, bottle-feed, or do a combination, the key is finding a rhythm that keeps both babies well-nourished while protecting your own well-being. It is normal for twins to have different feeding patterns, appetites, and preferences.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn twins typically need to eat every 2-3 hours, which means feeding can feel nearly constant. Many parents find it helpful to wake the second twin to feed when the first wakes, keeping them on a synchronized schedule. Tandem breastfeeding with a twin nursing pillow is possible but takes practice  -  it is also completely fine to feed one at a time. Track each baby\'s intake and output individually, as their needs may differ.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, many twins begin to settle into a more predictable feeding pattern, especially if you have been working to synchronize their schedules. Feeding intervals may stretch to every 3-4 hours. It is common for one twin to be a more efficient feeder than the other. If one twin is consistently gaining less weight, discuss individual feeding strategies with your pediatrician rather than assuming both babies need the same approach.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introducing solid foods to twins adds another layer of complexity. You can offer the same foods to both babies, but be prepared for different reactions  -  one may love avocado while the other refuses it. Introduce new foods one at a time and watch both babies for allergic reactions individually. Many parents of twins find that a shared mealtime helps build routine, even if each baby is progressing at a slightly different pace with solids.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As twins transition to more table foods and begin self-feeding, mealtimes become both easier and messier. Twins often influence each other\'s eating  -  one may try a new food because they see their sibling eating it. Continue to respect each child\'s individual appetite and preferences. If one twin is significantly smaller or a much pickier eater than the other, mention this to your pediatrician to rule out any underlying issues.',
    },
  ],
  whenNormal: [
    'Your twins have different appetites  -  one consistently eats more than the other at each feeding',
    'One twin is breastfed while the other receives pumped milk or formula due to latching difficulties',
    'Your twins\' feeding schedule is not perfectly synchronized  -  you are still finding a rhythm that works',
    'You feel overwhelmed by the logistics of feeding two babies  -  this is one of the most demanding aspects of caring for multiples',
  ],
  whenToMention: [
    'One twin is gaining weight significantly slower than the other despite similar feeding opportunities',
    'One or both twins are frequently refusing feeds, arching during feeding, or showing signs of reflux',
    'You are struggling to produce enough breast milk for both babies and want to discuss supplementation options',
    'You are feeling burned out or depressed from the constant demands of feeding two babies  -  your well-being matters too',
  ],
  whenToActNow: [
    'Either twin has fewer than 6 wet diapers in 24 hours, shows signs of dehydration (sunken fontanelle, dry mouth, no tears), or is lethargic  -  seek medical attention promptly',
    'Either twin is losing weight or has not regained their birth weight by two weeks of age',
    'Either twin is choking, gagging excessively, or turning blue during feeds',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding Multiples. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Breastfeeding-Multiples.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Breastfeeding Twins and Multiples.',
      url: 'https://llli.org/breastfeeding-info/twins/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Feed. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/how-much-and-how-often.html',
    },
  ],
};
