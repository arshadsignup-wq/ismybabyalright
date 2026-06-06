import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-wont-put-feet-down',
  title: 'My Baby Pulls Their Feet Up When Held Standing',
  category: 'physical',
  searchTerms: [
    'baby won\'t put feet down',
    'baby pulls legs up when standing',
    'baby refuses to bear weight',
    'baby lifts feet when held up',
    'baby tucks legs up standing',
    'baby won\'t stand on feet',
    'baby curls legs up when held',
    'baby won\'t weight bear on legs',
    'baby lifts legs off ground',
    'baby avoids putting feet down',
  ],
  quickAnswer:
    'Some babies go through a phase where they pull their legs up and refuse to bear weight. This is often normal, especially around 4-6 months, and many babies simply are not interested in standing yet. However, if your baby never bears weight on their legs by 9 months or seems unable rather than unwilling, it should be evaluated.',
  byAge: [
    {
      ageRange: '3-5 months',
      context:
        'Many babies at this age will bear weight if held standing, but some prefer to pull their legs up. This is usually normal and not a sign of weakness. Your baby may simply prefer other positions. As long as your baby kicks their legs actively when lying down, their leg strength is developing.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies enjoy bouncing and bearing weight when held standing by now. If your baby still pulls their feet up every time, try gently encouraging weight bearing by holding them over your legs while sitting. If your baby actively kicks and moves their legs in other positions but just does not want to stand, this is likely a preference.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By 7-9 months, most babies bear weight enthusiastically when held in standing. If your baby still consistently refuses to put their feet down, mention it to your pediatrician. They can check for low muscle tone, foot sensitivity, or other factors.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby will not bear weight at all by 9 months, evaluation is important. This could indicate low muscle tone, sensory sensitivity in the feet, or neurological concerns. Early physical therapy can address many of these issues effectively.',
    },
  ],
  whenNormal: [
    'Your baby is under 7 months and sometimes bears weight, sometimes pulls legs up.',
    'Your baby kicks vigorously in other positions, showing good leg strength.',
    'Your baby will bear weight briefly before pulling legs up.',
    'Your baby seems uninterested rather than unable to bear weight.',
  ],
  whenToMention: [
    'Your baby never bears weight on their legs by 7-9 months.',
    'Your baby seems to have weak legs or floppy muscle tone.',
    'Your baby cries or seems distressed when feet touch surfaces.',
  ],
  whenToActNow: [
    'Your baby was previously bearing weight and has stopped.',
    'Your baby seems to have increasing weakness in their legs.',
  ],
  relatedMilestones: [
    'gross-motor-weight-bearing',
    'gross-motor-standing',
    'gross-motor-pulling-to-stand',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-bearing-weight-on-legs', 'low-muscle-tone', 'floppy-baby-syndrome'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'NIH',
      citation: 'Barela JA, et al. Development of Weight-Bearing in Infants. Infant Behav Dev. 1999',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
