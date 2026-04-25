import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'head-lag',
  title: 'My Baby Has Head Lag',
  category: 'physical',
  searchTerms: [
    'baby head lag',
    'baby head falls back when pulled up',
    'baby can\'t hold head up',
    'baby poor head control',
    'head lag when pulling baby to sit',
    'baby head flops back',
    'baby neck not strong enough',
    'when should baby hold head up',
    'baby head lag at 4 months',
    'baby not supporting head',
  ],
  quickAnswer:
    'Head lag  -  when your baby\'s head falls backward as you gently pull them from lying down to sitting  -  is normal in young babies. Most babies develop enough neck strength to keep their head in line with their body during this movement by about 4 months. If significant head lag persists past 4 months, it\'s worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Head lag is completely normal and expected in newborns. Your baby\'s neck muscles are still very weak, and you should always support their head when picking them up or holding them. You might notice your baby briefly lifting their head during tummy time  -  even a second or two counts as great practice.',
    },
    {
      ageRange: '6 weeks to 3 months',
      context:
        'Head control develops gradually during this period. Your baby should be starting to lift their head during tummy time and may hold it steady for brief moments when held upright on your shoulder. Some head lag when pulling to sit is still normal, but you should see your baby making an effort to keep their head forward rather than it falling completely back.',
    },
    {
      ageRange: '4-5 months',
      context:
        'By 4 months, most babies have minimal head lag when gently pulled to sitting  -  their head should come up with their body or only lag slightly. During tummy time, they should be lifting their head well and may be pushing up on their forearms. If your baby still has significant head lag at 4 months, mention it to your pediatrician so they can assess muscle tone and strength.',
    },
    {
      ageRange: '6+ months',
      context:
        'Head lag should not be present at this age. If your baby\'s head still falls backward when pulled to sit, or if they have difficulty holding their head steady when held upright, your pediatrician will want to evaluate them. This may indicate low muscle tone or other conditions that benefit from early intervention, particularly physical therapy.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and has some head lag  -  their neck muscles are still strengthening.',
    'Your baby\'s head bobs a bit when held upright but they can mostly keep it steady  -  head control is still refining.',
    'Your baby lifts their head well during tummy time even if they still have mild lag when pulled to sit  -  tummy time strength often develops first.',
    'Your baby was premature  -  use adjusted age for head control milestones and expect head control to develop later.',
  ],
  whenToMention: [
    'Your baby is over 4 months and still has noticeable head lag when gently pulled from lying to sitting.',
    'Your baby struggles to hold their head up during tummy time by 3-4 months despite regular practice.',
    'Your baby seems to have periods of better and worse head control throughout the day.',
    'Head control seems very different from other babies the same age.',
  ],
  whenToActNow: [
    'Your baby had good head control and has lost it  -  any regression in motor skills needs urgent evaluation.',
    'Your baby has severe head lag combined with a weak cry, difficulty feeding, or overall floppiness  -  see your pediatrician promptly.',
    'Your baby is over 6 months with significant head lag and other motor delays.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-tummy-time',
    'gross-motor-sitting',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 4 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: Birth to 3 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Back to Sleep, Tummy to Play',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
  ],
};
