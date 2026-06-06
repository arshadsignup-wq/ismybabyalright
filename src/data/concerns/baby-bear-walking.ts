import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bear-walking',
  title: 'My Baby Walks on Hands and Feet',
  category: 'physical',
  searchTerms: [
    'baby bear walking',
    'baby walking on hands and feet',
    'baby bear crawl',
    'baby walks like a bear',
    'baby bottom in air crawling',
    'baby crawling with straight legs',
    'toddler hands and feet walking',
    'baby not using knees to crawl',
    'bear walk normal baby',
    'baby crawling with feet flat',
  ],
  quickAnswer:
    'Bear walking, where a baby walks on their hands and feet with their bottom up in the air, is a normal movement pattern. It shows excellent upper body strength and coordination. Many babies bear walk as a transitional movement before walking upright, and it is not a cause for concern.',
  byAge: [
    {
      ageRange: '8-10 months',
      context:
        'Bear walking at this age shows impressive strength and coordination. Your baby is experimenting with different ways to move and building the strength they need for walking. Some babies bear walk as their primary form of mobility, and that is perfectly fine. It is actually a great sign of core and upper body strength.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Bear walking is common at this age as babies transition between crawling and walking. Many babies bear walk because they have figured out it is faster than hands-and-knees crawling. Your baby may be close to pulling up to stand and taking independent steps. Bear walking is a positive sign of motor development.',
    },
    {
      ageRange: '12-15 months',
      context:
        'If your baby is still bear walking but also pulling to stand and cruising, they are developing typically. Some children bear walk right up until they start walking independently. If your baby is bear walking but not showing interest in upright movement or pulling to stand, discuss this with your pediatrician.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Most toddlers have transitioned to upright walking by now. If your child still prefers bear walking over walking upright, it is worth mentioning to your pediatrician, especially if they seem unable rather than unwilling to walk upright. A physical therapy evaluation can determine if there is any reason for the continued preference.',
    },
  ],
  whenNormal: [
    'Your baby bear walks as one of several movement patterns and is also crawling or cruising.',
    'Your baby is under 15 months and bear walking is their preferred but not only way to move.',
    'Your baby has good strength in all four limbs and uses both sides equally.',
    'Your baby is also pulling up to stand and showing interest in upright movement.',
  ],
  whenToMention: [
    'Your baby is over 15 months and exclusively bear walks with no interest in upright walking.',
    'Your baby seems to avoid putting weight through their knees when on the ground.',
    'Your baby has difficulty transitioning from bear walking to other positions.',
  ],
  whenToActNow: [
    'Your baby was walking upright and has gone back to bear walking or lost other motor skills.',
    'Your baby seems to have pain in their knees, hips, or legs that causes them to avoid kneeling.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-crawling', 'not-walking', 'baby-army-crawling-only'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby at 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'Pediatrics in Review - Normal Motor Development. 2019;40(2):72-76',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/2/72/35209',
    },
  ],
};
