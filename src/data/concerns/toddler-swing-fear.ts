import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-swing-fear',
  title: 'My Toddler Is Afraid of Swings',
  category: 'physical',
  searchTerms: ['toddler afraid of swings', 'toddler scared of swinging', 'toddler won\'t go on swing', 'toddler swing anxiety', 'toddler vestibular sensitivity', 'toddler hates swings', 'toddler cries on swing', 'toddler swing fear', 'baby hates swinging', 'toddler motion sensitivity'],
  quickAnswer: 'Fear of swings is fairly common and can indicate vestibular sensitivity (the sensory system for movement and balance). Some children feel insecure when they cannot control their movement. Gentle, gradual exposure often helps. If swing fear is part of a broader pattern of avoiding all movement activities, an occupational therapy evaluation may be helpful.',
  byAge: [
    { ageRange: '6-12 months', context: 'Some babies dislike the sensation of swinging, which is normal. Start very gently with small movements while holding your baby securely. Some babies prefer being held in a rocking motion on your lap over a baby swing.' },
    { ageRange: '12-18 months', context: 'Many toddlers are still warming up to swings. Sit with your toddler on your lap on an adult swing to start. Bucket swings provide more security. If your child is terrified of all gentle swinging motion, note this for your pediatrician.' },
    { ageRange: '18-24 months', context: 'If your toddler still dislikes swings but enjoys other movement activities, this may simply be a preference. If they fear all movement experiences, discuss vestibular sensitivity with your pediatrician.' },
    { ageRange: '2-3 years', context: 'Most children enjoy swings by this age. If your child still has extreme fear, especially alongside other sensory sensitivities, occupational therapy with a focus on vestibular activities can gradually build tolerance and enjoyment.' },
  ],
  whenNormal: ['Your toddler is cautious but tolerates gentle swinging.', 'Your toddler dislikes swings but likes other movement activities.', 'Your toddler is under 2 and still building vestibular tolerance.', 'Your toddler is gradually becoming more comfortable.'],
  whenToMention: ['Your child is over 2 and terrified of all swinging motion.', 'Your child has broad fear of movement including swings, slides, and being picked up.', 'Vestibular sensitivity is affecting daily life and play.'],
  whenToActNow: ['Your child has sudden onset fear of movement after illness or injury.', 'Fear of movement is accompanied by dizziness, vomiting, or balance changes.'],
  relatedMilestones: ['sensory-vestibular', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-playground-fear', 'toddler-sensory-motor-play-avoidance'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Sensory Processing', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Lane SJ. Sensory Over-Responsivity. In: Bundy AC, Lane SJ, Murray EA, eds. Sensory Integration: Theory and Practice. 2002', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Child Development: Positive Parenting', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
};
