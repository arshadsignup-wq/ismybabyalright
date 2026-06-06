import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-standing-legs-crossed',
  title: 'My Baby Crosses Their Legs When Standing',
  category: 'physical',
  searchTerms: [
    'baby crosses legs standing',
    'baby legs cross when standing',
    'baby scissoring legs',
    'baby legs crossing when held up',
    'baby scissor legs standing',
    'legs crossing baby concern',
    'baby adductor tightness',
    'baby legs overlap standing',
    'scissoring legs baby',
    'baby inner thigh muscles tight',
  ],
  quickAnswer:
    'Leg scissoring or crossing when a baby is held in a standing position can be a sign of increased muscle tone (hypertonia) in the leg muscles. While occasional leg crossing is not always concerning, persistent scissoring should be evaluated by your pediatrician, as it can indicate spasticity or other neuromuscular conditions that benefit from early therapy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some leg stiffness and crossing in newborns can be normal, especially in babies who were in a breech position. However, persistent scissoring when held upright should be mentioned to your pediatrician at the next visit. Your doctor can assess whether the tone is within normal range.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby consistently crosses their legs when held in standing, this warrants evaluation. Normal babies at this age should be able to bear weight with legs apart. Scissoring can indicate tight adductor muscles or increased lower extremity tone that benefits from early intervention.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Persistent leg scissoring at this age is concerning and should be evaluated promptly. Your baby should be able to stand with support with legs apart by now. Your pediatrician may refer to a pediatric neurologist or physical therapist for further assessment.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If leg crossing persists, thorough evaluation is important. Early physical therapy and stretching can make a significant difference in outcomes for children with increased muscle tone. Do not wait to address this concern.',
    },
  ],
  whenNormal: [
    'Your baby occasionally crosses legs but can easily be repositioned with legs apart.',
    'Your newborn was breech and has mild, resolving leg positioning.',
    'Leg crossing only happens briefly and your baby can bear weight with legs apart.',
  ],
  whenToMention: [
    'Your baby consistently crosses or scissors their legs when held in standing.',
    'Your baby\'s legs feel stiff or resist being separated.',
    'Scissoring is present every time your baby is held upright.',
    'Your baby also has stiffness in other parts of their body.',
  ],
  whenToActNow: [
    'Your baby\'s leg scissoring is worsening or new neurological symptoms are appearing.',
    'Your baby has lost motor skills alongside the leg crossing.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-weight-bearing',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['stiff-baby-hypertonia', 'baby-spasticity-signs', 'baby-legs-stiff-when-held-standing'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Cerebral Palsy',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx',
    },
    {
      org: 'NIH',
      citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1):e89-e97',
      url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Developmental Monitoring and Screening',
      url: 'https://www.cdc.gov/ncbddd/actearly/screening.html',
    },
  ],
};
