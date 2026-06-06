import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-bike-riding-readiness',
  title: 'Is My Toddler Ready for a Balance Bike or Tricycle?',
  category: 'physical',
  searchTerms: ['toddler balance bike age', 'toddler tricycle readiness', 'toddler bike riding age', 'when can toddler ride bike', 'toddler pedaling ability', 'balance bike age toddler', 'toddler cycling readiness', 'toddler bike with training wheels', 'when to start balance bike', 'toddler cant pedal'],
  quickAnswer: 'Most toddlers can start using a balance bike (no pedals) between ages 18 months and 2 years if they can walk confidently. Tricycles are typically appropriate around age 2-3 when children develop the coordination to pedal. Pedal bikes with training wheels are usually appropriate around age 3-4. Every child develops at their own pace, and there is no rush. Balance bikes are excellent for building the balance skills that lead to riding a pedal bike later.',
  byAge: [
    { ageRange: '18-24 months', context: 'If your toddler walks confidently and can straddle a small balance bike with feet flat on the ground, they may be ready to start. They will likely walk with the bike between their legs at first. This is a great way to build balance and coordination. Always use a properly fitted helmet.' },
    { ageRange: '2-3 years', context: 'Most children can learn to glide on a balance bike during this period. Some can begin to pedal a tricycle. Pedaling requires bilateral coordination that many toddlers are still developing. If your child cannot pedal yet, this is normal. Continued practice with a balance bike is excellent preparation.' },
    { ageRange: '3-4 years', context: 'Most children can pedal a tricycle confidently by this age. Some are ready for a pedal bike with training wheels. Children who have used balance bikes often transition directly to pedal bikes without training wheels, as they have already developed balance skills.' },
    { ageRange: '4-5 years', context: 'Many children are ready to ride a pedal bike, especially if they have experience with a balance bike. Some children are not ready until age 5-6, and this is perfectly normal. Readiness depends on balance, coordination, leg strength, and confidence.' },
  ],
  whenNormal: ['Your toddler walks a balance bike rather than gliding.', 'Your 2-year-old cannot pedal a tricycle yet.', 'Your child prefers a balance bike or scooter over a pedal bike.', 'Your child needs practice to develop bike-riding confidence.'],
  whenToMention: ['Your child has persistent balance difficulties beyond age 3.', 'Your child cannot coordinate leg movements to pedal by age 4.', 'Your child shows fear of movement or balance activities.'],
  whenToActNow: ['Your child has lost balance or coordination abilities.', 'Your child has persistent one-sided weakness affecting riding.', 'Balance difficulties are worsening rather than improving.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-cant-pedal-tricycle', 'toddler-balance-beam-difficulty', 'toddler-sports-readiness'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Bicycle Safety', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Bicycle-Safety-Myths-and-Facts.aspx' },
    { org: 'NIH', citation: 'Shim AL, et al. The Effects of Balance Training on Stability and Motor Skill Development in Preschool Children. J Mot Learn Dev. 2017;5(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Physical Activity for Preschoolers', url: 'https://www.cdc.gov/physicalactivity/basics/children/index.htm' },
  ],
};
