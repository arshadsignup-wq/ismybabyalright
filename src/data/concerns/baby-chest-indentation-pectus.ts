import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-chest-indentation-pectus', title: 'My Baby Has a Sunken Chest (Pectus Excavatum)', category: 'physical',
  searchTerms: ['baby sunken chest', 'pectus excavatum baby', 'baby chest dip', 'baby breastbone sunken', 'baby chest indent', 'baby funnel chest', 'baby sternum indent', 'pectus excavatum infant', 'baby chest caved in', 'baby chest depression'],
  quickAnswer: 'Pectus excavatum (sunken chest) is the most common chest wall deformity, affecting about 1 in 300-400 births. Mild cases are typically cosmetic and do not affect heart or lung function. It may become more noticeable with growth. Most cases do not need treatment, but your pediatrician should monitor it.',
  byAge: [
    { ageRange: '0-6 months', context: 'Pectus excavatum may be noticed at birth or become apparent in the early months. A mild depression in the sternum is common. Your pediatrician should note it and monitor over time.' },
    { ageRange: '6-12 months', context: 'The indentation may become more visible as your baby grows. If breathing seems normal and your baby is gaining weight and developing well, the condition is likely mild.' },
    { ageRange: '12-24 months', context: 'Continue monitoring. If the indentation seems to deepen or your child has breathing concerns during activity, mention it to your pediatrician.' },
    { ageRange: '2-5 years', context: 'Pectus excavatum may become more prominent during growth spurts. If it is moderate to severe, a pediatric surgeon can evaluate whether intervention is needed. Most mild cases require no treatment.' },
  ],
  whenNormal: ['Mild, stable indentation.', 'Normal breathing and activity tolerance.', 'Normal growth and development.', 'No heart or lung symptoms.'],
  whenToMention: ['Indentation seems to be deepening.', 'Your child gets short of breath with activity.', 'Heart racing or chest pain during exercise.'],
  whenToActNow: ['Severe chest indentation with breathing difficulty.', 'New onset breathing problems.'],
  relatedMilestones: ['growth-weight'], showSelfReferral: false,
  relatedConcernSlugs: ['baby-breast-bone-protrusion', 'baby-rib-flaring'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Pectus Excavatum', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Pectus-Excavatum-Sunken-Chest.aspx' },
    { org: 'NIH', citation: 'Kelly RE, et al. Pectus Excavatum: Historical Context and Current Treatment. J Thorac Cardiovasc Surg. 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Birth Defects', url: 'https://www.cdc.gov/ncbddd/birthdefects/index.html' },
  ],
};
