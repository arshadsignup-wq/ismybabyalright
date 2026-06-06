import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walking-on-outside-feet',
  title: 'My Baby Walks on the Outside of Their Feet',
  category: 'physical',
  searchTerms: [
    'baby walking on outside of feet',
    'baby walks on outer edge of foot',
    'supination walking baby',
    'baby foot rolls outward',
    'toddler walks on outside feet',
    'baby feet turning outward walking',
    'foot supination toddler',
    'baby ankle rolling out',
    'walking on outside edge of foot baby',
    'baby shoe wear outside edge',
  ],
  quickAnswer:
    'Walking on the outside edges of the feet (supination) can be normal in early walkers as they develop balance and foot positioning. However, persistent supination should be evaluated, as it may indicate tight muscles, foot alignment issues, or neurological differences that benefit from early treatment.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'New walkers often experiment with foot positioning, and some walking on the outside edges is normal as your baby figures out how to distribute weight. As long as your baby can also place their feet flat and the position seems to vary, this is part of the learning process.',
    },
    {
      ageRange: '14-18 months',
      context:
        'If your toddler consistently walks on the outside of their feet, watch whether it is improving. Many toddlers gradually develop more neutral foot positioning as they get more practice. If the pattern is constant and not improving, mention it at your next pediatric visit.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Persistent walking on the outside of the feet by this age warrants evaluation. Your pediatrician may refer to a pediatric orthopedist to check foot alignment and ankle mobility. Supportive shoes or orthotics may be recommended if the pattern is affecting balance or causing abnormal wear patterns.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If your child continues to walk on the outer edges of their feet, evaluation is important. Persistent supination can lead to ankle instability and frequent tripping. Treatment may include physical therapy, orthotics, or supportive footwear. Early intervention is effective for most foot alignment issues.',
    },
  ],
  whenNormal: [
    'Your baby is a new walker and the foot positioning varies throughout the day.',
    'Your baby can place their feet flat when standing still.',
    'The pattern is improving over weeks as your baby gets more walking practice.',
    'Your baby is not tripping or falling more than typical for their age.',
  ],
  whenToMention: [
    'Your child consistently walks on the outside of their feet for more than 2-3 months.',
    'Your child trips or falls frequently and the foot position seems to contribute.',
    'Your child\'s shoes wear down heavily on one side.',
  ],
  whenToActNow: [
    'Your child suddenly starts walking on the outside of their feet after previously walking normally.',
    'Your child has pain in their feet or ankles or refuses to walk.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['pigeon-toed', 'flat-feet', 'baby-walking-wide-gait'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Common Foot Problems in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Foot-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Hallemans A, et al. Changes in foot function parameters in children between 1.5 and 5 years. Gait & Posture. 2006;23(4):397-403',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16023345/',
    },
    {
      org: 'AAP',
      citation:
        'Pediatrics in Review - Pediatric Foot Deformities. 2015;36(5):221-224',
      url: 'https://publications.aap.org/pediatricsinreview/article/36/5/221/32765',
    },
  ],
};
