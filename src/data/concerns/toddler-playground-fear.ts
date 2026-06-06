import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-playground-fear',
  title: 'My Toddler Is Afraid of Playground Equipment',
  category: 'physical',
  searchTerms: ['toddler afraid playground', 'toddler scared of playground', 'toddler won\'t play on equipment', 'toddler playground anxiety', 'toddler afraid to climb', 'toddler scared of slides', 'toddler playground refusal', 'toddler fear of movement', 'gravitational insecurity toddler', 'toddler movement sensitivity'],
  quickAnswer: 'Some wariness of playground equipment is normal for toddlers, especially with new or large equipment. However, extreme fear of all movement experiences (slides, swings, climbing) may indicate gravitational insecurity, a sensory processing difference where the child feels unsafe when their feet leave the ground. An occupational therapist can help if this significantly limits your child\'s play.',
  byAge: [
    { ageRange: '12-18 months', context: 'Many toddlers are cautious about playground equipment at first, and this is healthy caution rather than a concern. Your toddler may prefer to explore equipment while you hold them. Gradually building comfort with gentle exposure is the best approach.' },
    { ageRange: '18-24 months', context: 'Your toddler should be gaining confidence with playground activities, even if they still prefer smaller equipment. If your child is terrified of all playground equipment and will not attempt any activity, even with support, this is worth monitoring.' },
    { ageRange: '2-3 years', context: 'Most children enjoy some playground activities by now. If your child is still extremely fearful and avoids all movement experiences including gentle swings and low slides, discuss sensory processing with your pediatrician. Occupational therapy can help build vestibular tolerance gradually.' },
    { ageRange: '3-4 years', context: 'Persistent extreme fear of all playground equipment and movement activities at this age may significantly limit your child\'s physical development and social participation. An occupational therapy evaluation is recommended.' },
  ],
  whenNormal: ['Your toddler is cautious but willing to try with encouragement.', 'Your toddler likes some equipment but not others.', 'Your toddler is gradually becoming more comfortable.', 'Your toddler is under 2 and still building confidence.'],
  whenToMention: ['Your child is over 2 and terrified of all playground equipment.', 'Your child becomes hysterical with any movement off the ground.', 'Fear of movement limits your child\'s physical activity and play.'],
  whenToActNow: ['Your child has suddenly developed fear of movement after a head injury or illness.', 'Your child has dizziness or balance changes along with movement fear.'],
  relatedMilestones: ['gross-motor-climbing', 'gross-motor-balance', 'sensory-vestibular'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-swing-fear', 'toddler-sensory-motor-play-avoidance', 'poor-balance-toddler'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Sensory Processing in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Bundy AC, et al. Playfulness and Sensory Processing. Am J Occup Ther. 2007;61(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Physical Activity for Toddlers', url: 'https://www.cdc.gov/physicalactivity/basics/children/index.htm' },
  ],
};
