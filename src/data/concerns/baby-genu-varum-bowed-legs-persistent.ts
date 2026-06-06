import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-genu-varum-bowed-legs-persistent',
  title: 'My Baby\'s Bowed Legs Are Not Straightening',
  category: 'physical',
  searchTerms: ['baby bowed legs persistent', 'bowed legs not straightening', 'genu varum baby', 'baby bowed legs getting worse', 'persistent bow legs toddler', 'Blount disease', 'bowed legs concerning', 'bowed legs after 2 years', 'pathological bow legs', 'rickets bowed legs baby'],
  quickAnswer: 'Physiological bowing (normal bowed legs) should begin straightening after age 18-24 months. If bowing persists beyond age 2, worsens, or is asymmetric (more on one side), it may indicate Blount disease, rickets, or other conditions that benefit from treatment. Most persistent bowing is treatable when caught early.',
  byAge: [
    { ageRange: '0-12 months', context: 'All babies have some bowing of the legs from their curled position in the womb. This is completely normal and not a concern. The bowing will naturally begin to straighten as your baby grows.' },
    { ageRange: '12-18 months', context: 'Bowed legs are still common and expected in new walkers. The wide-based gait of new walkers can make bowing look more pronounced. Normal bowing should be symmetric (equal on both sides).' },
    { ageRange: '18-24 months', context: 'Bowing should start to improve. If legs are straightening, normal physiological bowing is resolving as expected. If bowing is worsening, especially on one side, evaluation is recommended.' },
    { ageRange: '2-3 years', context: 'By age 2, legs should be significantly straighter. If bowing persists beyond age 2 or is worsening, X-rays may be needed to evaluate for Blount disease or rickets. Both conditions are treatable, especially when caught early.' },
  ],
  whenNormal: ['Bowing is symmetric and improving over time.', 'Your child is under 2 years.', 'Your child walks normally without pain.', 'Bowing is mild and expected for age.'],
  whenToMention: ['Bowing is not improving after age 18 months.', 'Bowing is worse on one side than the other.', 'Bowing seems to be getting worse.'],
  whenToActNow: ['Progressive worsening of bowing.', 'Pain or difficulty walking due to bowed legs.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: true,
  relatedConcernSlugs: ['bowlegged-baby', 'toddler-genu-valgum-knock-knees-severe'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Bowlegs and Knock-Knees', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Bowlegs-and-Knock-Knees.aspx' },
    { org: 'NIH', citation: 'Sabharwal S. Blount Disease. J Bone Joint Surg Am. 2009;91(7)', url: 'https://pubmed.ncbi.nlm.nih.gov/19571098/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
