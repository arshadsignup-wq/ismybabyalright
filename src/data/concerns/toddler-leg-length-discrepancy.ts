import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-leg-length-discrepancy',
  title: 'My Child May Have One Leg Shorter Than the Other',
  category: 'physical',
  searchTerms: ['toddler leg length discrepancy', 'toddler one leg shorter', 'baby uneven leg length', 'leg length difference toddler', 'toddler walks unevenly', 'toddler limps one leg shorter', 'asymmetric legs baby', 'toddler one leg longer', 'leg length inequality child', 'toddler lopsided walk'],
  quickAnswer: 'Small leg length differences (less than 2cm) are very common and often not noticeable. Larger discrepancies may cause a limp or uneven gait. Your pediatrician can measure leg lengths and determine if a difference is present. Causes range from normal variation to treatable conditions, and many children compensate well.',
  byAge: [
    { ageRange: '0-12 months', context: 'Leg length differences may be noticed during diaper changes or when your baby\'s thigh creases seem uneven. Your pediatrician checks for hip dysplasia, which can cause apparent leg length differences. If you notice asymmetry, mention it at your next visit.' },
    { ageRange: '12-24 months', context: 'As your child starts walking, a leg length discrepancy may become more apparent. A slight limp or uneven gait may be noticed. Your pediatrician can measure leg lengths and determine if imaging is needed.' },
    { ageRange: '2-3 years', context: 'If a leg length discrepancy is confirmed, your pediatrician will monitor it over time. Small differences often do not need treatment. Larger differences may benefit from a shoe lift or orthopedic evaluation.' },
    { ageRange: '3-5 years', context: 'Ongoing monitoring ensures the discrepancy is not increasing with growth. A pediatric orthopedist can project whether the difference will increase and recommend appropriate treatment.' },
  ],
  whenNormal: ['Very small difference (less than 1cm) which is common.', 'Your child walks comfortably with no limp.', 'No pain or functional limitation.'],
  whenToMention: ['You notice a consistent limp.', 'Thigh creases are uneven.', 'Your child seems to tilt or lean to one side when standing.'],
  whenToActNow: ['Sudden onset limping.', 'Leg length discrepancy with pain or refusal to walk.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-limping', 'hip-dysplasia', 'toddler-limping-after-nap'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Limping Child', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Gurney B. Leg Length Discrepancy. Gait Posture. 2002;15(2):195-206', url: 'https://pubmed.ncbi.nlm.nih.gov/11869914/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
