import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-pulling-up',
  title: 'My Baby Isn\'t Pulling to Stand',
  category: 'physical',
  searchTerms: [
    'baby not pulling up',
    'baby not pulling to stand',
    'when do babies pull themselves up',
    'baby not pulling up at 9 months',
    'baby not pulling up at 10 months',
    'baby not pulling up at 12 months',
    'baby won\'t pull up on furniture',
    'when should baby pull to stand',
    'baby not interested in standing',
    'baby won\'t stand holding furniture',
  ],
  quickAnswer:
    'Most babies begin pulling themselves up to stand between 8 and 10 months, but the typical range extends to about 12 months. Pulling to stand requires a combination of upper body strength, core stability, leg strength, and motivation  -  and some babies simply take a little longer to put all those pieces together.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'It is completely normal for babies this age to not yet pull to stand. Many are still working on sitting steadily and beginning to get mobile on the floor. You might see early signs like your baby trying to push up while you hold their hands, or grabbing at furniture  -  these are all great building blocks.',
    },
    {
      ageRange: '9-10 months',
      context:
        'This is the most common window for pulling to stand. If your baby isn\'t doing it yet but is sitting well, rolling, and showing interest in upright positions (like bouncing when you hold them standing), they\'re building the foundations. Plenty of tummy time and floor play near stable furniture gives them opportunities to practice.',
    },
    {
      ageRange: '11-12 months',
      context:
        'If your baby isn\'t pulling to stand by 11 or 12 months, it\'s a good idea to mention it to your pediatrician at the next visit. This doesn\'t necessarily mean something is wrong  -  some babies focus on fine motor or language skills first  -  but your doctor can check muscle tone, strength, and overall development to make sure everything is on track.',
    },
    {
      ageRange: '13-15 months',
      context:
        'By this age, most babies should be pulling to stand and many are cruising along furniture. If your baby still isn\'t pulling up, a referral to a pediatric physical therapist is a sensible next step. Early intervention for motor skills is very effective, and a therapist can give you specific exercises and activities to do at home.',
    },
    {
      ageRange: '16+ months',
      context:
        'If your baby isn\'t pulling to stand by 16 months, please talk to your pediatrician soon if you haven\'t already. An evaluation can help identify whether there are factors like low muscle tone, hip concerns, or sensory preferences that are contributing, and targeted therapy can make a meaningful difference.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months and is sitting well, rolling, and showing interest in being upright when you hold them.',
    'Your baby pulls up on you but hasn\'t figured out furniture yet  -  people are more motivating than coffee tables.',
    'Your baby was premature  -  use their adjusted age, which can shift this milestone by several months.',
    'Your baby briefly pulled up once or twice but doesn\'t do it consistently yet  -  they\'re working on it.',
    'Your baby is mobile on the floor (crawling, scooting, rolling) and is actively exploring, just not vertically yet.',
  ],
  whenToMention: [
    'Your baby is 12 months or older and isn\'t pulling to stand on anything, even with encouragement.',
    'Your baby doesn\'t seem to bear weight on their legs at all when you hold them in a standing position.',
    'Your baby seems to have difficulty gripping or holding on to furniture edges when trying to pull up.',
    'Your baby was pulling up and has stopped doing it.',
  ],
  whenToActNow: [
    'Your baby has lost the ability to pull up or stand after previously doing so  -  any loss of motor skills needs prompt evaluation.',
    'Your baby\'s legs seem stiff, scissored, or consistently turned in or out, making standing difficult.',
    'Your baby is over 15 months with no interest in standing or bearing weight on their legs, combined with other motor delays.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-standing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Multicentre Growth Reference Study  -  Motor Development Milestones: Standing with assistance achieved between 4.8 and 11.4 months',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
