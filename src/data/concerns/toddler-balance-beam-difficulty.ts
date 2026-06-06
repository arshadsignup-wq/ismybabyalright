import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-balance-beam-difficulty',
  title: 'My Toddler Has Poor Balance Skills',
  category: 'physical',
  searchTerms: [
    'toddler poor balance',
    'toddler can\'t balance',
    'toddler balance beam',
    'toddler balance problems',
    'toddler can\'t stand on one foot',
    'toddler wobbly balance',
    'toddler balance delay',
    'toddler can\'t walk on line',
    'toddler balance skills',
    'when do toddlers develop balance',
  ],
  quickAnswer:
    'Balance develops gradually throughout the toddler and preschool years. Standing on one foot briefly does not typically develop until age 3-4, and walking along a balance beam is a 4-5 year skill. Toddlers naturally have less developed balance than older children, and most apparent balance concerns are simply age-appropriate.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'New walkers have limited balance, which is completely normal. Your toddler uses a wide stance, arms up, and careful stepping to maintain balance. Falls are frequent and expected. Balance improves rapidly with walking practice during this period.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Balance is improving but still developing. Your toddler may be able to briefly stand on tiptoes and is getting steadier when walking. They should be able to walk without constantly falling. Challenging balance activities like walking on uneven surfaces are still difficult, and that is normal.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Your child should be able to walk on a variety of surfaces, go up and down small slopes, and start to briefly stand on one foot. Walking along a line on the floor or a wide balance beam may be emerging. If your child seems significantly more unsteady than peers, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children can stand on one foot for a few seconds by age 3-4 and walk along a wide line. If your child has persistent balance difficulties that interfere with play and daily activities, an evaluation may be helpful. Balance problems can sometimes indicate inner ear issues, vision problems, or coordination disorders.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and has balance typical for their age.',
    'Your toddler\'s balance is gradually improving over time.',
    'Your toddler is steady during regular walking but wobbly with challenging balance tasks.',
    'Your toddler can recover from stumbles without always falling.',
  ],
  whenToMention: [
    'Your child is over 3 and has noticeably worse balance than peers.',
    'Your child avoids physical activities due to balance concerns.',
    'Your child frequently falls during simple walking on flat surfaces after age 2.',
  ],
  whenToActNow: [
    'Your child\'s balance has suddenly worsened.',
    'Your child has dizziness, tilts their head, or seems disoriented along with balance problems.',
  ],
  relatedMilestones: [
    'gross-motor-balance',
    'gross-motor-walking',
    'gross-motor-running',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['poor-balance-toddler', 'toddler-clumsy-coordination', 'toddler-tripping-falling-often'],
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
        'Assaiante C, Amblard B. An Ontogenetic Model for the Sensorimotor Organization of Balance Control in Humans. Hum Mov Sci. 1995;14(1):13-43',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
