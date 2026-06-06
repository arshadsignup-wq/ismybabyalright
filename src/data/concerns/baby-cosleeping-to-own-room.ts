import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cosleeping-to-own-room',
  title: 'Moving Baby from Co-Sleeping to Their Own Room',
  category: 'sleep',
  searchTerms: ['baby cosleeping to own room','moving baby to nursery','baby own room transition','when to move baby to own room','baby sleeping in own room','co sleeping to crib own room','transitioning baby to nursery','moving baby out of parents room','baby room sharing to own room','when should baby sleep alone'],
  quickAnswer: 'The AAP recommends room-sharing (but not bed-sharing) for at least the first 6 months, ideally 12 months. When you are ready to move your baby to their own room, a gradual transition works best. Start with naps in the nursery, then nighttime. Most babies adjust within 1-2 weeks, and many families find that everyone sleeps better with the separation.',
  byAge: [
    { ageRange: '0-6 months', context: 'The AAP recommends room-sharing for at least the first 6 months as it is associated with reduced SIDS risk. Your baby should sleep on a separate, firm surface (crib or bassinet) in your room. If you are bed-sharing, the transition to a separate sleep surface in your room is the first priority before moving to another room.' },
    { ageRange: '6-9 months', context: 'Many families transition at 6 months. By this age, the highest risk period for SIDS has passed. Start by having your baby nap in their nursery for a few days to get used to the space. Then begin nighttime sleep there. Some parents find that their baby sleeps better in their own room because there are fewer disturbances from parental movements and sounds.' },
    { ageRange: '9-12 months', context: 'If separation anxiety is peaking (around 8-10 months), you may want to wait for it to subside before making this change. Alternatively, doing it during a calmer period can be wise. A familiar sleep sack, the same white noise, and a consistent routine help your baby feel secure in the new space. Spend time playing in the nursery during the day so it feels familiar.' },
    { ageRange: '12-24 months', context: 'Transitioning at this age is still very common. Your toddler may be more aware of the change and protest initially. Spend time in the nursery during the day, let them explore, and create positive associations. Keep the bedtime routine identical. Some families do a few nights of sleeping in the nursery themselves (on a mattress on the floor) before leaving the toddler alone.' },
  ],
  whenNormal: ['Your baby protests for a few nights but adjusts within 1-2 weeks','Your baby sleeps better once in their own room with fewer wakings','You feel anxious initially but a video monitor provides reassurance','Your baby naps well in the nursery before transitioning nighttime sleep'],
  whenToMention: ['Your baby has been in their own room for 3+ weeks and sleep has significantly worsened','You are anxious about SIDS risk and need reassurance about safe sleep setup','Your baby has health conditions requiring proximity during sleep'],
  whenToActNow: ['Your baby has breathing difficulties, apnea, or other conditions that require close monitoring','You are falling asleep while holding your baby due to exhaustion from the transition'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Room Sharing with Baby. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/co-sleeping' },
  ],
  relatedConcernSlugs: ['cosleeping-to-crib-transition','baby-room-sharing-duration','toddler-bed-sharing-breaking-habit'],
};
