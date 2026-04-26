import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cows-milk-transition-issues',
  title: 'Cow\'s Milk Transition Issues at 12 Months',
  category: 'digestive',
  searchTerms: [
    'cow\'s milk transition issues',
    'switching to whole milk at 12 months',
    'baby won\'t drink cow\'s milk',
    'cow\'s milk tummy ache baby',
    'transitioning from formula to milk',
    'when to start whole milk',
    'baby diarrhea from cow\'s milk',
    'cow\'s milk constipation toddler',
    'how to introduce cow\'s milk',
    'baby vomiting after cow\'s milk',
    'whole milk vs formula at 1 year',
  ],
  quickAnswer:
    'The transition to whole cow\'s milk at 12 months is a big change for your baby\'s digestive system. It is normal for some babies to experience mild digestive adjustment like loose stools or slight constipation for the first week or two. A gradual transition - mixing increasing amounts of milk with formula or breast milk - can help your baby\'s system adapt smoothly.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Cow\'s milk should not be given as a primary drink before 12 months. Young babies cannot properly digest the high protein and mineral content, and it can cause intestinal irritation, iron deficiency, and nutritional problems. Breast milk or iron-fortified formula is the appropriate primary nutrition at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Small amounts of cow\'s milk in cooking or mixed into foods is generally fine after 6 months, but it should not replace breast milk or formula as the main drink. As you approach 12 months, you can start planning the transition. There is no need to rush - you can begin mixing small amounts of whole milk into formula or expressed breast milk.',
    },
    {
      ageRange: '12-18 months',
      context:
        'At 12 months, you can introduce whole cow\'s milk as a drink. Try mixing 25% milk with 75% formula, gradually increasing the ratio over 1-2 weeks. Offer milk in a cup rather than a bottle. Some digestive adjustment is normal. Aim for 16-24 ounces of whole milk per day - more than this can cause iron deficiency by filling your toddler up and displacing iron-rich foods.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By this age, most toddlers are fully transitioned to cow\'s milk. If your child has persistent digestive issues with milk (chronic diarrhea, constipation, cramping, or rash), discuss with your pediatrician. Some children have a cow\'s milk protein sensitivity or lactose intolerance that may require an alternative. The AAP recommends whole milk until age 2 for brain development.',
    },
    {
      ageRange: '2-3 years',
      context:
        'After age 2, your pediatrician may recommend switching to reduced-fat (2%) milk depending on your child\'s growth and dietary fat intake. If your child still has issues with cow\'s milk, fortified soy milk is the best nutritional alternative. Other plant milks (oat, almond, rice) are generally lower in protein and fat, so discuss options with your doctor.',
    },
  ],
  whenNormal: [
    'Mild changes in stool consistency during the first 1-2 weeks of transition',
    'Your child initially rejects the taste but gradually accepts it when mixed with familiar milk',
    'Slightly increased gas or mild fussiness as the digestive system adjusts',
    'Your toddler drinks less milk than formula at first',
  ],
  whenToMention: [
    'Persistent diarrhea, vomiting, or severe constipation lasting more than 2 weeks after starting cow\'s milk',
    'Your toddler develops a rash, hives, or eczema flares after starting cow\'s milk',
    'Your child completely refuses all milk and you are concerned about calcium and vitamin D intake',
  ],
  whenToActNow: [
    'Your child has a severe allergic reaction to cow\'s milk - swelling of face or lips, difficulty breathing, or widespread hives (call 911)',
    'Bloody stools or significant vomiting after drinking cow\'s milk',
  ],
  relatedMilestones: [],
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
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 & Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
  ],
};
