import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walker-jumper-developmental-delay',
  title: 'Baby Walkers and Jumpers: Developmental Concerns',
  category: 'physical',
  searchTerms: [
    'baby walker developmental delay',
    'are baby walkers safe',
    'baby walker bad for development',
    'baby jumper too long',
    'baby walker banned',
    'baby walker delayed walking',
    'exersaucer too much time',
    'jolly jumper safe baby',
    'baby walker AAP recommendation',
    'baby walker injury risk',
  ],
  quickAnswer:
    'The AAP strongly recommends against baby walkers, which have been associated with thousands of injuries annually including falls down stairs, burns, and drownings. Baby walkers can also delay motor development because they reinforce incorrect movement patterns and prevent babies from learning natural balance and coordination. Stationary activity centers and jumpers are safer alternatives but should also be limited to 15-20 minutes at a time, as excessive use can affect hip development and walking patterns.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies this young should not be placed in walkers, jumpers, or exersaucers. They do not yet have adequate trunk control or head stability. The best developmental activities at this age are tummy time, floor play, and being held or carried. These allow natural muscle development in the proper sequence. Equipment that places babies in an upright position before they can sit independently on their own skips important developmental stages.',
    },
    {
      ageRange: '4-8 months',
      context:
        'This is when many parents introduce stationary activity centers or jumpers. If you choose to use one, limit time to 15-20 minutes per session and no more than twice a day. Your baby should have adequate head control and trunk support before using any standing-type equipment. Prioritize floor time for natural motor development: rolling, sitting practice, reaching, and pre-crawling movements. Avoid traditional mobile baby walkers entirely - they are a leading cause of infant injury, and Canada has banned their sale.',
    },
    {
      ageRange: '8-14 months',
      context:
        'This is the critical window for learning to cruise (walking while holding furniture) and eventually walking independently. Studies show that babies who spend significant time in walkers may walk later than those who do not. Natural development occurs through pulling to stand, cruising along furniture, and eventual independent steps. Encourage these natural progressions with safe furniture to hold onto and supervised walking practice. Push toys (that the baby pushes while walking) are a safer alternative to walkers for babies who are already pulling to stand.',
    },
  ],
  whenNormal: [
    'Your baby uses a stationary activity center for brief periods (15-20 minutes) and spends most of the day on the floor.',
    'Your baby is developing motor skills through natural floor play without equipment.',
    'Your baby is cruising along furniture and taking steps at their own pace.',
  ],
  whenToMention: [
    'Your baby has been using a walker extensively and seems to be delayed in walking.',
    'Your baby prefers to toe-walk or has unusual gait patterns that may be related to equipment use.',
    'You are unsure about what equipment is safe and how long to use it.',
  ],
  whenToActNow: [
    'Your baby has been injured from falling in a walker (down stairs, into water, against a hot stove).',
    'Your baby is over 18 months and not walking at all, regardless of equipment use.',
    'Your baby has hip clicking, uneven leg length, or pain when weight-bearing that may be related to equipment use.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-standing', 'w-sitting', 'baby-tummy-time-how-long', 'baby-tummy-time-refuses'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby Walkers: A Dangerous Choice. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/5/e20183220/37465/Injuries-Associated-With-Infant-Walkers',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby Walkers Are Dangerous. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Baby-Walkers-A-Dangerous-Choice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
