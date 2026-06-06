import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-muscle-wasting-signs', title: 'Signs of Muscle Loss in My Baby', category: 'physical',
  searchTerms: ['baby muscle wasting', 'baby muscle loss', 'baby muscles getting smaller', 'baby muscle atrophy', 'baby losing muscle mass', 'baby thin limbs', 'baby limbs getting thinner', 'baby muscle deterioration', 'baby weak muscles atrophy', 'baby legs getting thinner'],
  quickAnswer: 'Muscle wasting (atrophy) in babies is always a concern that requires prompt evaluation. It can indicate neuromuscular conditions, disuse from pain or immobilization, or nutritional deficiency. If you notice your baby\'s muscles are getting smaller or their limbs are becoming thinner, contact your pediatrician for evaluation.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies should be steadily gaining weight and muscle mass. If your baby\'s limbs seem to be getting thinner or muscles feel less firm, this is concerning. Contact your pediatrician for evaluation, especially if accompanied by weakness or developmental delays.' },
    { ageRange: '6-12 months', context: 'Muscle wasting at this age is not normal and warrants prompt evaluation. Your pediatrician may check for conditions such as spinal muscular atrophy or other neuromuscular conditions. Early diagnosis is critical for many of these conditions.' },
    { ageRange: '12-24 months', context: 'If you notice muscle loss alongside motor regression (losing skills), urgent evaluation is needed. Modern treatments for conditions like SMA are most effective when started early.' },
    { ageRange: '2-4 years', context: 'Visible muscle wasting at any age needs evaluation. If combined with progressive weakness, difficulty rising from the floor, or frequent falling, a neuromuscular evaluation is essential.' },
  ],
  whenNormal: ['Lean but proportional body build with good strength.', 'Slim limbs with normal muscle function.'],
  whenToMention: ['You notice limbs are getting thinner over time.', 'Your baby seems weaker than before.', 'Muscles feel softer or less firm.'],
  whenToActNow: ['Visible muscle wasting with progressive weakness.', 'Muscle loss with difficulty breathing or swallowing.', 'Rapid loss of motor skills.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-crawling', 'gross-motor-walking'], showSelfReferral: true,
  relatedConcernSlugs: ['low-muscle-tone', 'floppy-baby-syndrome', 'toddler-regression-motor-skills'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Neuromuscular Disorders', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Darras BT, et al. Spinal Muscular Atrophy. GeneReviews. 2015', url: 'https://pubmed.ncbi.nlm.nih.gov/20301526/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
