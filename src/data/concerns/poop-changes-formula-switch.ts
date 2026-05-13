import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'poop-changes-formula-switch',
  title: 'Poop Changes After Switching Formula',
  category: 'feeding',
  searchTerms: [
    'poop changes after switching formula',
    'baby stool different after formula change',
    'green poop after formula switch',
    'constipation after changing formula',
    'diarrhea after switching formula',
    'baby poop color formula change',
    'dark poop new formula',
    'mucus in stool after formula switch',
    'smelly poop formula change',
  ],
  quickAnswer:
    'Changes in poop color, consistency, frequency, and smell after switching formula are very common and usually harmless. Different formula types contain different protein structures and carbohydrates that naturally produce different-looking stools. Most changes settle within one to two weeks as your baby\'s digestive system adjusts to the new formula.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn digestive systems are still maturing, so stool changes after a formula switch can be more noticeable. You may see greener, darker, or firmer stools than before. As long as stools are soft and your baby is not straining excessively, these changes are normal. Stools that are very watery with mucus or contain blood are not normal stool changes and should be evaluated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, your baby\'s gut is more mature, and stool changes after a formula switch tend to be milder and resolve more quickly. A switch to a hydrolyzed formula often produces looser, greenish, and stronger-smelling stools, which is expected due to the broken-down proteins. These characteristics are a normal feature of the formula, not a sign of a problem.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby is also eating solid foods, stool changes from a formula switch may be harder to distinguish from changes caused by new foods. Formula switches at this age usually produce subtle differences. If you notice significant constipation or very watery stools that persist for more than a week, mention it to your pediatrician.',
    },
  ],
  whenNormal: [
    'Stools become slightly darker, greener, or more brownish in color after switching formula',
    'Stool consistency changes from soft to slightly firmer or vice versa, but stools are still easy to pass',
    'Stools have a stronger or different smell than before the switch',
    'Frequency changes slightly, such as one more or one fewer stool per day',
  ],
  whenToMention: [
    'Stools are consistently very hard, pellet-like, or causing your baby to strain and cry during bowel movements',
    'Watery, explosive stools persist for more than a week after the switch',
    'You see mucus in the stool that was not there before and it continues beyond a few days',
    'Your baby seems significantly more gassy, fussy, or uncomfortable than before the switch',
  ],
  whenToActNow: [
    'You see blood or dark red streaks in your baby\'s stool after switching formula',
    'Your baby has frequent watery diarrhea with signs of dehydration such as fewer wet diapers or lethargy',
    'Your baby develops vomiting along with stool changes and is unable to keep feeds down',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Baby Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
  ],
};
