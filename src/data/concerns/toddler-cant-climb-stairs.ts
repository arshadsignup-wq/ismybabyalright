import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-climb-stairs',
  title: 'My Toddler Can\'t Navigate Stairs',
  category: 'physical',
  searchTerms: [
    'toddler can\'t climb stairs',
    'toddler afraid of stairs',
    'when can toddler do stairs',
    'toddler stairs milestone',
    'toddler won\'t go up stairs',
    'toddler can\'t go down stairs',
    'toddler stair climbing delay',
    'teaching toddler stairs',
    'toddler stair safety',
    'when do toddlers climb stairs alone',
  ],
  quickAnswer:
    'Stair climbing develops in stages: crawling up stairs typically starts around 12-15 months, walking up with a hand held by 18-24 months, and walking up holding the rail by 2-3 years. Going down stairs is harder and develops later. Many toddlers need help with stairs well past their second birthday.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most toddlers start climbing up stairs by crawling on hands and knees at this age. Coming down is much harder and may involve scooting down on their bottom. If your toddler shows no interest in stairs yet, they may simply need more opportunity or they may be cautious. Not climbing stairs at this age is very common.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers typically learn to walk up stairs while holding a hand or railing, placing both feet on each step before moving to the next. Going down stairs remains challenging. Some toddlers are fearful of stairs, which is actually a healthy sign of appropriate caution. Gradual exposure with support helps build confidence.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, most children can walk up stairs with one hand on the rail, stepping with both feet on each step. Alternating feet on stairs does not typically develop until age 3-4. If your child cannot walk up stairs with support by age 2.5, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, children typically alternate feet going up stairs and may still use both feet per step going down. If your child cannot navigate stairs at all by age 3, evaluation for leg strength, balance, and coordination is recommended.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 and needs help with stairs or prefers crawling up.',
    'Your toddler goes up stairs but cannot come down independently.',
    'Your toddler places both feet on each step rather than alternating.',
    'Your toddler is cautious about stairs but willing to try with help.',
  ],
  whenToMention: [
    'Your child is over 2.5 years and cannot walk up stairs even with hand support.',
    'Your child seems to have significant weakness or difficulty lifting their legs to step up.',
    'Your child has suddenly become unable to do stairs they previously managed.',
  ],
  whenToActNow: [
    'Your child was climbing stairs and has lost this ability.',
    'Your child has leg weakness, pain, or refuses to bear weight on their legs.',
  ],
  relatedMilestones: [
    'gross-motor-climbing',
    'gross-motor-walking',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-jump-two-feet', 'low-muscle-tone', 'toddler-clumsy-coordination'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 30 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
    },
    {
      org: 'NIH',
      citation:
        'Berger SE, Theuring C, Adolph KE. How and When Infants Learn to Climb Stairs. Infant Behav Dev. 2007;30(1):36-49',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17292779/',
    },
  ],
};
