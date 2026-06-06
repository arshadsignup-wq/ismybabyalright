import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-storage-rules',
  title: 'How Long Can Breast Milk Be Stored?',
  category: 'feeding',
  searchTerms: ['breast milk storage', 'how long breast milk lasts', 'breast milk room temperature', 'breast milk refrigerator time', 'breast milk freezer how long', 'pumped milk storage guidelines', 'breast milk storage rules', 'stored breast milk safe', 'breast milk expiration', 'CDC breast milk storage'],
  quickAnswer: 'Follow the CDC rule of 4: breast milk is safe at room temperature for up to 4 hours, in the refrigerator for up to 4 days, and in the freezer for about 6-12 months (best within 6 months). Always label milk with the date pumped and use the oldest milk first. Thawed milk should be used within 24 hours and should not be refrozen.',
  byAge: [
    { ageRange: '0-3 months', context: 'Proper storage is especially important for newborns whose immune systems are still developing. Follow storage guidelines carefully. If baby is premature or in the NICU, the hospital may have stricter storage rules.' },
    { ageRange: '4-6 months', context: 'As you may begin pumping for work or outings, consistent labeling and storage practices become important. Invest in breast milk storage bags or containers and a reliable cooler bag for transport.' },
    { ageRange: '6-9 months', context: 'Storage guidelines remain the same. If building a freezer stash, rotate stock by using oldest milk first. Frozen milk stored at the back of the freezer stays colder and lasts longer.' },
    { ageRange: '9-12 months', context: 'Same storage rules apply. Breast milk can be mixed into solid foods like oatmeal or purees as another way to use stored milk.' },
    { ageRange: '12-24 months', context: 'If you have a freezer stash remaining after weaning, breast milk can still be used in cooking, baking, or mixed into foods.' },
  ],
  whenNormal: ['You follow the 4-4-6 storage guideline', 'Stored milk separates into layers and looks different from fresh milk', 'Thawed milk has a slightly different smell than fresh milk'],
  whenToMention: ['You are unsure about the safety of stored milk that has been out for an extended period', 'Stored milk smells or tastes soapy or metallic which may indicate high lipase', 'You need guidance on storage for a premature or medically fragile baby'],
  whenToActNow: ['Baby has become ill after drinking stored breast milk that may have been improperly stored', 'You suspect stored milk has been contaminated'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-thawing-rules', 'breast-milk-mixing-temperatures', 'breast-milk-high-lipase'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk. 2023.', url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Storing and Preparing Expressed Breast Milk. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
  ],
};
