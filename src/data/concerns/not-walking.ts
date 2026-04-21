import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-walking',
  title: 'My Baby Isn\'t Walking',
  searchTerms: [
    'baby not walking',
    'when do babies walk',
    'baby not walking at 14 months',
    'baby not walking at 15 months',
    'baby not walking at 18 months',
    'late walker baby',
    'toddler not walking yet',
    'when should I worry about baby not walking',
    'baby cruising but not walking',
    'baby won\'t take steps',
  ],
  quickAnswer:
    'The normal range for first independent steps is huge — anywhere from 9 to 18 months, and all of it is considered typical development. Many parents feel pressure when they see other babies walking early, but a baby who walks at 15 months is just as healthy as one who walks at 10 months.',
  byAge: [
    {
      ageRange: '9-11 months',
      context:
        'Only a small percentage of babies walk this early. If yours isn\'t walking yet, that is completely expected. Most babies at this age are working on pulling to stand, cruising along furniture, and building the balance and confidence they\'ll need. This is an exciting stage, not a worrying one.',
    },
    {
      ageRange: '12-14 months',
      context:
        'Many babies take their first independent steps around 12 months, but just as many don\'t. If your baby is pulling up, cruising, and maybe standing independently for a few seconds, they\'re right on track. Walking is a skill that requires strength, balance, and — believe it or not — the courage to let go. Some babies are simply more cautious, and that\'s a personality trait, not a deficit.',
    },
    {
      ageRange: '15-17 months',
      context:
        'Your baby is still within the normal range, but this is a good time to mention it at your next doctor\'s visit if you haven\'t already. Many babies who walk at 15-17 months were busy mastering other skills (fine motor, language) first. If your baby is cruising confidently and standing independently, walking is likely just around the corner.',
    },
    {
      ageRange: '18 months',
      context:
        'Eighteen months is the point where pediatricians typically want to evaluate a baby who isn\'t walking. This doesn\'t mean something is wrong — but an evaluation can help identify whether your baby needs any support. Early intervention for motor skills is very effective, and many children who start therapy at this age walk independently within weeks to months.',
    },
    {
      ageRange: '19+ months',
      context:
        'If your baby isn\'t walking by 19 months, please talk to your pediatrician if you haven\'t already. An evaluation with a pediatric physical therapist can help figure out what\'s going on and provide targeted support. Many children who walk late have easily addressable factors like low muscle tone or hypermobile joints, and they do beautifully with a little help.',
    },
  ],
  whenNormal: [
    'Your baby is under 18 months and is pulling to stand, cruising furniture, or taking a few steps with hand support.',
    'Your baby stands independently but seems nervous about letting go — cautious babies often walk later, and confidence builds with time.',
    'Your baby was premature — use adjusted age, which can shift the walking timeline significantly.',
    'Your baby has been focused on language or fine motor skills — some babies prioritize one area at a time.',
    'Your baby walks while holding your hands or pushing a walker toy but won\'t walk independently yet.',
  ],
  whenToMention: [
    'Your baby is 15-18 months and not yet taking independent steps — worth discussing at the next well visit.',
    'Your baby only walks on their toes consistently and doesn\'t seem able to put their feet flat.',
    'Your baby falls frequently to one particular side, or their gait seems very asymmetric once they do start walking.',
    'Your baby doesn\'t seem interested in standing or bearing weight on their legs at all by 12 months.',
  ],
  whenToActNow: [
    'Your baby was walking independently and has stopped — loss of motor skills requires prompt evaluation.',
    'Your baby\'s legs seem stiff, scissored, or consistently turned inward, or one leg seems significantly weaker than the other.',
    'Your baby is over 18 months and not pulling to stand or showing any interest in upright mobility.',
  ],
  relatedMilestones: [
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-walking',
    'gross-motor-standing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker — Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Movement Milestones: 8 to 12 Months and Beyond',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Multicentre Growth Reference Study — Motor Development Milestones: Walking Alone achieved between 8.2 and 17.6 months across populations',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
