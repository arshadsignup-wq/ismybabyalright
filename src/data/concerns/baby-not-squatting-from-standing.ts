import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-squatting-from-standing',
  title: 'My Baby Can\'t Squat Down from Standing',
  category: 'physical',
  searchTerms: [
    'baby can\'t squat from standing',
    'toddler won\'t squat to pick up toy',
    'baby can\'t bend down standing',
    'baby falls when bending down',
    'toddler squatting milestone',
    'baby can\'t squat and stand back up',
    'toddler doesn\'t squat',
    'baby can\'t lower to floor from standing',
    'squatting balance toddler',
    'when do babies squat',
  ],
  quickAnswer:
    'Squatting down from standing and returning to standing is a skill that typically develops around 12-15 months. It requires good leg strength, balance, and coordination. If your toddler is newly walking, they may plop down rather than squat gracefully, which is normal. Most children squat well by 18 months.',
  byAge: [
    { ageRange: '10-12 months', context: 'Babies at this age who are just pulling to stand typically plop down or lower themselves by holding onto furniture. True squatting is not expected yet. Your baby is building the leg strength and balance needed for this skill.' },
    { ageRange: '12-15 months', context: 'As walking becomes more stable, squatting begins to develop. Your toddler may initially squat while holding onto furniture and gradually learn to do it independently. Early squats may be more like controlled falls, and that is fine.' },
    { ageRange: '15-18 months', context: 'Most toddlers can squat to pick up a toy and return to standing by 18 months. If your child consistently falls when trying to bend down, they may need more practice or may have balance or strength issues worth discussing with your pediatrician.' },
    { ageRange: '18-24 months', context: 'Squatting should be well established. If your toddler cannot squat at all, evaluation of leg strength, balance, and joint flexibility is recommended. Some toddlers with tight Achilles tendons have difficulty squatting with heels on the floor.' },
  ],
  whenNormal: [
    'Your baby is under 15 months and plops down rather than squatting.',
    'Your toddler squats while holding onto furniture for support.',
    'Your child can squat briefly but loses balance sometimes.',
    'Squatting ability is improving over time.',
  ],
  whenToMention: [
    'Your child is over 18 months and cannot squat to pick up a toy.',
    'Your child always falls backward when trying to squat.',
    'Your child seems to have stiff ankles or cannot get heels flat.',
  ],
  whenToActNow: [
    'Your child could squat previously and has lost this ability.',
    'Your child has sudden leg weakness or difficulty with other leg movements.',
  ],
  relatedMilestones: ['gross-motor-standing', 'gross-motor-walking', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['poor-balance-toddler', 'toe-walking', 'baby-walking-stiff-legged'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Movement: 18 Months to 2 Years', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-18-Months-to-2-Years.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Adolph KE, Berger SE. Motor Development. Handbook of Child Psychology. 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
