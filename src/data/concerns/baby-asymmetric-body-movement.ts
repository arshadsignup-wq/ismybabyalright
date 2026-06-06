import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-asymmetric-body-movement', title: 'One Side of My Baby\'s Body Moves Differently', category: 'physical',
  searchTerms: ['baby one side moves differently', 'baby asymmetric body movement', 'baby favors one side body', 'baby one arm weaker', 'baby one leg stiffer', 'baby unequal movement sides', 'hemiplegia signs baby', 'baby left right difference', 'baby one side weaker', 'asymmetric movement baby body'],
  quickAnswer: 'Babies should generally use both sides of their body equally. If one side consistently moves differently, is weaker, stiffer, or less coordinated, this warrants evaluation. Asymmetric movement can indicate hemiplegia (cerebral palsy affecting one side), brachial plexus injury, or other neurological conditions that benefit from early therapy.',
  byAge: [
    { ageRange: '0-3 months', context: 'Some asymmetry in newborns can be positional and resolves over weeks. However, if one arm or leg consistently moves less, is stiffer, or one hand is always fisted while the other is open, mention it to your pediatrician.' },
    { ageRange: '3-6 months', context: 'By now, both sides should be fairly equal in movement. If your baby reaches with only one arm, or one leg kicks less, evaluation is recommended. Early identification of asymmetry leads to much better outcomes with therapy.' },
    { ageRange: '6-12 months', context: 'Asymmetric crawling, consistent preference for one hand, or one side seeming weaker should be evaluated. Physical therapy started at this age is very effective.' },
    { ageRange: '12-24 months', context: 'Asymmetric walking, persistent one-hand preference, or one-sided weakness that affects daily activities should be thoroughly evaluated by a pediatric neurologist.' },
  ],
  whenNormal: ['Mild preference for one hand during some activities.', 'Both sides can move well even if one is slightly preferred.', 'Your baby is over 18 months and developing normal hand preference.'],
  whenToMention: ['Consistent weakness or stiffness on one side.', 'Strong hand preference before 12 months.', 'One hand always fisted while the other is open.'],
  whenToActNow: ['Sudden weakness on one side (stroke symptoms).', 'Progressive loss of movement on one side.'],
  relatedMilestones: ['gross-motor-crawling', 'fine-motor-grasp'], showSelfReferral: true,
  relatedConcernSlugs: ['asymmetric-movement', 'baby-not-using-one-arm', 'early-hand-preference'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hemiplegic Cerebral Palsy', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx' },
    { org: 'NIH', citation: 'Eyre JA, et al. Constrained and Unconstrained Movements in Young Infants. Lancet. 2007', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
