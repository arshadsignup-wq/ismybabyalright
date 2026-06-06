import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-pedal-tricycle',
  title: 'My Toddler Can\'t Pedal a Tricycle',
  category: 'physical',
  searchTerms: [
    'toddler can\'t pedal tricycle',
    'toddler won\'t pedal',
    'when can toddler pedal',
    'toddler pedaling milestone',
    'toddler can\'t ride tricycle',
    'teaching toddler to pedal',
    'toddler push bike vs pedal',
    'toddler tricycle age',
    'toddler leg coordination pedaling',
    'toddler ride on toy pedaling',
  ],
  quickAnswer:
    'Pedaling a tricycle is a complex motor skill that most children do not master until age 3. It requires alternating leg movements, balance, and coordination that develop over time. If your toddler is under 3 and cannot pedal, this is completely normal. Push-along ride-on toys and balance bikes are great precursors.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Toddlers at this age typically enjoy push-along ride-on toys that they move with their feet on the ground. Pedaling is too complex for most children at this age. If your child enjoys scooting around on a ride-on toy, they are building the leg strength and coordination they will eventually need for pedaling.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Some children start to pedal a tricycle around age 2.5, but many cannot until age 3. If your child pushes the tricycle with their feet instead of pedaling, that is developmentally appropriate. You can help by placing their feet on the pedals and gently pushing to give them the feel of the motion.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children can pedal a tricycle by age 3. If your child is still unable to pedal by their third birthday, continued practice usually helps. If they seem to have significant difficulty with the alternating leg motion despite practice, mention it to your pediatrician, as it may indicate coordination challenges.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By age 4, most children can pedal well. If your child still cannot pedal any ride-on toy, evaluation of leg coordination and motor planning may be helpful. Some children with coordination difficulties benefit from occupational or physical therapy.',
    },
  ],
  whenNormal: [
    'Your child is under 3 and moves ride-on toys by pushing with feet on the ground.',
    'Your child puts feet on pedals but cannot coordinate the circular motion yet.',
    'Your child can pedal briefly but loses the rhythm.',
    'Your child is developing other motor skills on time.',
  ],
  whenToMention: [
    'Your child is over 3.5 and cannot pedal despite regular practice.',
    'Your child seems to have difficulty with other alternating leg movements.',
    'Your child has general coordination difficulties alongside pedaling challenges.',
  ],
  whenToActNow: [
    'Your child has lost motor skills they previously had, including pedaling.',
    'Your child has sudden leg weakness or coordination changes.',
  ],
  relatedMilestones: [
    'gross-motor-running',
    'gross-motor-climbing',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'toddler-cant-climb-stairs', 'toddler-bike-riding-readiness'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 3 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'NIH',
      citation:
        'Gallahue DL, Ozmun JC. Understanding Motor Development: Infants, Children, Adolescents, Adults. McGraw-Hill. 2006',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
