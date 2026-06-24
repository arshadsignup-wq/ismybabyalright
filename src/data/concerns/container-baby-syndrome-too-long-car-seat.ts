import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'container-baby-syndrome-too-long-car-seat',
  title: 'Container Baby Syndrome: Too Much Time in Car Seats and Bouncers',
  category: 'physical',
  searchTerms: [
    'container baby syndrome',
    'baby in car seat too long',
    'baby always in bouncer',
    'too much time in swing baby',
    'baby not getting enough tummy time',
    'flat head from car seat',
    'baby in container all day',
    'how long can baby sit in car seat',
    'baby movement restriction',
    'baby needs floor time',
    'positional plagiocephaly car seat',
  ],
  quickAnswer:
    'Container baby syndrome refers to developmental delays and physical problems that can occur when infants spend too much time in "containers" -- car seats, bouncers, swings, strollers, and other restrictive devices. While these items are useful, excessive use limits the free movement babies need for motor development and can contribute to flat head (positional plagiocephaly), torticollis, and delayed milestones. Babies need supervised floor time and tummy time every day.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Car seats should be used only for travel, not as general seating or sleeping surfaces. The AAP recommends limiting car seat time to when the car is moving, and removing the baby from the seat upon arrival. At this age, babies need supervised tummy time starting from day one, beginning with short intervals (3-5 minutes) several times a day. Back-lying on a flat surface allows free arm and leg movement that supports motor development. Overuse of containers can contribute to flat head syndrome and delayed head control.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies work on rolling, reaching, and strengthening core muscles, floor time becomes increasingly important. Spending extended periods in bouncers, swings, or car seats restricts the movement patterns babies need to develop these skills. Aim for at least 30-60 minutes of tummy time spread throughout the day. Vary your baby\'s positions frequently: back, tummy, side-lying, and held upright. If you notice your baby has a flat spot on their head or a head-turning preference, increase floor time and discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a critical period for motor milestones including sitting, crawling, pulling up, and cruising. Babies who spend too much time in containers may show delays in these milestones because they lack opportunities to practice. Exersaucers and jumpers, while engaging, do not promote natural weight-bearing patterns and should be limited to 15-20 minutes at a time. A baby-proofed floor area where your baby can explore freely is the best developmental "toy" at this age.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers need to walk, climb, squat, and explore to refine their gross motor skills. Extended time in strollers or high chairs limits these opportunities. While strollers are necessary for outings, balance them with free walking and play. If your child shows delays in walking, climbing, or overall physical coordination, their pediatrician may recommend an evaluation for container baby syndrome and refer to physical therapy if needed.',
    },
  ],
  whenNormal: [
    'Your baby uses a car seat for travel and is removed from it upon arrival at your destination.',
    'Your baby gets supervised floor time and tummy time multiple times throughout the day.',
    'Your baby is meeting motor milestones on schedule with a head shape that is symmetrical.',
  ],
  whenToMention: [
    'Your baby has a noticeably flat spot on their head or a preferred head-turning direction.',
    'Your baby seems behind on motor milestones like head control, rolling, or sitting.',
    'You realize your baby spends most of their awake time in containers and want guidance on increasing floor time.',
  ],
  whenToActNow: [
    'Your baby is significantly delayed in multiple motor milestones and has been spending most of their time in containers.',
    'Your baby has severe positional plagiocephaly (very noticeable flat spot) with facial asymmetry.',
    'Your baby has limited head movement or neck stiffness suggesting torticollis that needs evaluation.',
  ],
  relatedMilestones: [
    'head-control',
    'rolling',
    'sitting',
    'crawling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['flat-head', 'not-sitting-up', 'not-pulling-up', 'stiff-baby-hypertonia'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Car Seats: Information for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Positional Plagiocephaly and Developmental Delay. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20100760/',
    },
  ],
};
