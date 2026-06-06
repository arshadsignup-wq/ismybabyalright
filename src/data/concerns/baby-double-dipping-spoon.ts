import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-double-dipping-spoon',
  title: 'Is Double-Dipping the Spoon a Problem?',
  category: 'feeding',
  searchTerms: [
    'baby double dipping spoon',
    'feeding baby from same spoon',
    'baby spoon hygiene',
    'baby food contamination spoon',
    'reusing spoon baby food jar',
    'baby food bacteria spoon',
    'sharing spoon with baby',
    'feeding baby hygiene tips',
    'baby double dipping puree',
    'baby food jar contamination',
  ],
  quickAnswer:
    'When you dip a spoon that has been in baby\'s mouth back into the food container, bacteria from saliva can contaminate the remaining food. This does not usually cause illness immediately, but it shortens the safe storage time of the food. The best practice is to spoon portions into a separate bowl and feed from that, keeping the original container clean for later use.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable as babies are not eating solid foods.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, develop the habit of spooning a portion into a separate dish before feeding. This preserves the rest for future meals and teaches good food hygiene habits from the start.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby eats more, portion control becomes important. Scoop what you think baby will eat into a bowl. You can always get more. Any food remaining in the feeding bowl after the meal should be discarded.',
    },
    {
      ageRange: '9-12 months',
      context: 'With finger foods and self-feeding becoming more common, hygiene practices shift. Make sure baby\'s hands are clean before eating. Discard any food baby has handled but not eaten if you would normally save it.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers eat family foods and standard food hygiene applies. While it is impractical to prevent all sharing, try to use separate serving utensils and discard leftovers from the toddler\'s plate rather than returning them to serving dishes.',
    },
  ],
  whenNormal: [
    'You occasionally double-dip during a single meal and baby eats the remaining food right away',
    'Baby is healthy and has no issues from normal feeding practices',
  ],
  whenToMention: [
    'You are concerned about your food preparation and feeding hygiene practices',
    'Baby frequently has stomach upset and you suspect food contamination',
  ],
  whenToActNow: [
    'Baby has signs of food poisoning such as vomiting, diarrhea, or fever',
    'Baby has a compromised immune system and you need specific hygiene guidance',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sharing-utensils-bacteria', 'baby-food-storage-duration', 'baby-food-reheating-safety'],
  sources: [
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Food Safety for Infants After Opening. 2023.',
      url: 'https://www.cdc.gov/foodsafety/communication/infants-and-toddlers.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Storing and Preparing Expressed Breast Milk and Baby Food. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
