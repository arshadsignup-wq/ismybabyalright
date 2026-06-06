import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-diaper-rash-first-weeks',
  title: 'Early Diaper Rash in Newborns',
  category: 'skin',
  searchTerms: ['newborn diaper rash', 'baby first diaper rash', 'diaper rash first weeks', 'newborn red bottom', 'baby rash diaper area', 'diaper rash treatment newborn', 'newborn diaper rash prevention', 'baby bottom red and sore', 'diaper rash cream newborn', 'newborn skin irritation diaper'],
  quickAnswer:
    'Diaper rash in the first weeks is common and usually caused by prolonged contact with wet or dirty diapers. Frequent diaper changes, gentle cleaning, barrier cream, and air drying time can help. Most mild diaper rashes improve within a few days with these simple measures.',
  byAge: [
    { ageRange: '0-1 month', context: 'Diaper rash is very common in newborns because their skin is sensitive and they have frequent wet and dirty diapers. The rash appears as redness, sometimes with bumps, in the diaper area. Prevention and treatment involve changing diapers frequently (every 2-3 hours or immediately after bowel movements), gently cleaning with warm water and soft cloths (avoiding wipes with fragrance or alcohol), allowing the skin to air dry, and applying a thick layer of zinc oxide or petroleum jelly as a barrier. Avoid using baby powder.' },
    { ageRange: '1-3 months', context: 'Diaper rash may continue to occur, especially during periods of frequent stools (common in breastfed babies). If a rash persists despite good diaper care, it may have become a yeast (Candida) infection, which appears as bright red with satellite lesions (small dots around the edges) and needs antifungal treatment. Stool changes related to diet changes in breastfeeding mothers or formula switches can sometimes trigger rashes.' },
    { ageRange: '3-6 months', context: 'Diaper rash patterns may change as stool frequency changes. Introduction of solid foods around 6 months can cause more acidic stools that irritate the skin. Continue barrier cream use during periods of frequent stools.' },
    { ageRange: '6-12 months', context: 'Diet changes with solid foods, teething (which can cause looser stools), and increased activity can contribute to diaper rash. Continue preventive measures. Any rash that does not improve with standard care should be evaluated.' },
  ],
  whenNormal: ['Mild redness in the diaper area that improves with frequent changes and barrier cream', 'Rash that appears after a period of infrequent diaper changes or during diarrhea', 'Baby is not excessively bothered by the rash', 'Improvement within 2-3 days of treatment'],
  whenToMention: ['Rash persists for more than 3 days despite good diaper care', 'Bright red rash with satellite lesions suggesting yeast infection', 'Rash in skin folds (which is more common with yeast than irritant dermatitis)'],
  whenToActNow: ['Open sores, bleeding, or signs of secondary bacterial infection (pus, increasing redness, warmth, or fever)', 'Baby is in significant pain and unable to tolerate diaper changes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Diaper Rash. Patient Care and Health Information.', url: 'https://www.mayoclinic.org/diseases-conditions/diaper-rash/symptoms-causes/syc-20371636' },
  ],
  relatedConcernSlugs: ['newborn-yeast-diaper-rash', 'newborn-urate-crystals-diaper'],
};
