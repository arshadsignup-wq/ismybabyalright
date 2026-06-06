import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sitting-falling-backward',
  title: 'My Baby Falls Backward When Sitting',
  category: 'physical',
  searchTerms: [
    'baby falls backward sitting',
    'baby tips over backward',
    'baby no back balance sitting',
    'baby falls back when sitting',
    'baby sitting falling back head',
    'baby doesn\'t catch self falling back',
    'baby topples backward',
    'baby sitting protective reaction',
    'baby loses balance sitting backward',
    'baby sitting safety falling',
  ],
  quickAnswer:
    'Falling backward when sitting is common as babies develop balance. Babies typically develop forward and side protective reactions (catching themselves) before backward protective reactions. Backward protective reactions usually develop around 9-10 months. Using pillows behind your baby while they are learning to sit is a smart safety strategy.',
  byAge: [
    {
      ageRange: '5-7 months',
      context:
        'Babies who are learning to sit frequently fall in all directions, including backward. This is completely normal. Their balance reactions are still developing. Place pillows or cushions behind your baby during sitting practice to prevent head bumps. Your baby will gradually develop better balance.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Your baby should be developing better sitting balance, but backward falls may still occur, especially when they reach for something or look up. Forward and side protective reactions (putting hands out to catch themselves) develop before backward reactions. Continued falling backward at this age is still within normal range.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Backward protective reactions should be developing around 9-10 months. If your baby still frequently falls backward without any attempt to catch themselves, mention it to your pediatrician. They may want to assess balance reactions and core strength.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By this age, your child should have good sitting balance and rarely fall backward. If backward falling is still a frequent problem, evaluation of balance reactions, core strength, and muscle tone is recommended.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months and is still developing sitting balance.',
    'Your baby falls backward occasionally but can sit well for several minutes.',
    'Your baby falls backward only when reaching, looking up, or being startled.',
    'Your baby is starting to put hands behind them to catch themselves.',
  ],
  whenToMention: [
    'Your baby is over 9 months and frequently falls backward without trying to catch themselves.',
    'Your baby has very poor sitting balance overall.',
    'Your baby seems to have weak trunk muscles.',
  ],
  whenToActNow: [
    'Your baby was sitting well and has started falling backward more frequently.',
    'Your baby hits their head frequently due to backward falls and seems affected by the impacts.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-sitting-up', 'baby-sitting-always-propped', 'poor-trunk-control'],
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
      citation: 'Harbourne RT, Stergiou N. Movement Variability and the Use of Nonlinear Tools. Phys Ther. 2009;89(3)',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19131667/',
    },
  ],
};
