import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-mixing-temperatures',
  title: 'Can I Mix Fresh and Frozen Breast Milk?',
  category: 'feeding',
  searchTerms: ['mixing breast milk temperatures', 'combine fresh and frozen breast milk', 'adding fresh milk to frozen', 'mixing pumped breast milk', 'breast milk from different sessions', 'combining breast milk batches', 'can I add warm milk to cold', 'mixing breast milk safe', 'breast milk layering sessions', 'pooling breast milk'],
  quickAnswer: 'You can combine breast milk from different pumping sessions, but there are guidelines. Cool freshly expressed milk in the refrigerator before adding it to already cold or frozen milk. Never add warm milk directly to frozen milk as it can partially thaw the frozen portion. Milk from different days can be combined as long as storage time is counted from the oldest milk.',
  byAge: [
    { ageRange: '0-3 months', context: 'When building a supply, you may want to combine small amounts from multiple pump sessions. Refrigerate fresh milk first, then combine with previously refrigerated milk. For freezing, cool all milk before combining and freeze within 24 hours of the earliest expression.' },
    { ageRange: '4-6 months', context: 'If pumping at work, you can combine milk from different sessions into one container once all portions are the same temperature. Label with the date and time of the first expression.' },
    { ageRange: '6-9 months', context: 'The same combining rules apply. Some mothers find it helpful to pump into separate containers at work and combine at home after everything is refrigerated.' },
    { ageRange: '9-12 months', context: 'Continue following safe combining practices. As pumping frequency may decrease, combining sessions becomes less frequent.' },
    { ageRange: '12-24 months', context: 'Same guidelines apply if you are still pumping and storing.' },
  ],
  whenNormal: ['You combine milk from the same day after cooling to the same temperature', 'You add cooled fresh milk to a refrigerated container', 'Combined milk is used within the storage timeline of the oldest portion'],
  whenToMention: ['You are unsure about safe combining practices for your specific situation', 'You have been mixing warm and cold milk and want to know if it is still safe', 'You need guidance on combining milk for a premature baby who may need stricter protocols'],
  whenToActNow: ['Baby becomes ill after drinking combined milk that may have been improperly stored', 'Combined milk smells spoiled or looks abnormal'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-storage-rules', 'breast-milk-thawing-rules', 'breast-milk-freezer-stash-building'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk. 2023.', url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Storing and Preparing Expressed Breast Milk. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
  ],
};
