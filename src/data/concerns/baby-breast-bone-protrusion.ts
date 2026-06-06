import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-breast-bone-protrusion', title: 'My Baby\'s Breastbone Sticks Out (Pectus Carinatum)', category: 'physical',
  searchTerms: ['baby breastbone sticking out', 'pectus carinatum baby', 'baby pigeon chest', 'baby sternum protrudes', 'baby chest sticks out', 'baby breastbone prominent', 'pectus carinatum infant', 'baby chest wall protrusion', 'baby bird chest', 'toddler breastbone sticking out'],
  quickAnswer: 'Pectus carinatum (protruding breastbone or "pigeon chest") is less common than pectus excavatum. In babies and toddlers, a slightly prominent sternum is often normal. True pectus carinatum typically becomes more noticeable during adolescent growth spurts. If present in infancy, your pediatrician should monitor it.',
  byAge: [
    { ageRange: '0-12 months', context: 'A slightly prominent sternum in babies is common and usually normal. The thin chest wall makes bony structures more visible. Your pediatrician can evaluate whether the prominence is within normal range.' },
    { ageRange: '12-24 months', context: 'If the prominence is stable and your child has no breathing or activity problems, monitoring at well visits is sufficient. In toddlers, pectus carinatum is rarely significant.' },
    { ageRange: '2-5 years', context: 'Pectus carinatum may become more noticeable with growth. If it is progressive or your child has other skeletal differences, evaluation by a pediatric surgeon may be recommended.' },
    { ageRange: '5+ years', context: 'Pectus carinatum typically becomes most prominent during the adolescent growth spurt. Bracing is the most common non-surgical treatment for cosmetically significant cases.' },
  ],
  whenNormal: ['Mild sternal prominence in a thin baby.', 'No breathing problems.', 'Prominence is stable.', 'Normal growth and development.'],
  whenToMention: ['Prominence is increasing.', 'Your child has chest pain or breathing concerns.', 'Other skeletal abnormalities are present.'],
  whenToActNow: ['Chest wall deformity with breathing difficulty.', 'Rapid change in chest wall shape.'],
  relatedMilestones: ['growth-weight'], showSelfReferral: false,
  relatedConcernSlugs: ['baby-chest-indentation-pectus', 'baby-rib-flaring'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Chest Wall Deformities', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/default.aspx' },
    { org: 'NIH', citation: 'Martinez-Ferro M, et al. Treatment of Pectus Carinatum. J Pediatr Surg. 2008;43(9)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Birth Defects', url: 'https://www.cdc.gov/ncbddd/birthdefects/index.html' },
  ],
};
