import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-jump-two-feet',
  title: 'My Toddler Can\'t Jump with Both Feet',
  category: 'physical',
  searchTerms: [
    'toddler can\'t jump',
    'toddler won\'t jump',
    'when should toddler jump',
    'toddler not jumping yet',
    '2 year old can\'t jump',
    'toddler jump milestone',
    'toddler can\'t get both feet off ground',
    'late jumper toddler',
    'toddler jumping delay',
    'when do toddlers learn to jump',
  ],
  quickAnswer:
    'Jumping with both feet off the ground is a milestone that typically develops between 24 and 30 months. Many toddlers cannot jump until closer to their third birthday. Jumping requires significant leg strength, balance, and coordination, so it is one of the later gross motor milestones to develop.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers cannot jump yet at this age, and that is completely normal. Your toddler may try to jump by bending their knees and going up on their toes, but they may not actually get both feet off the ground. This is a precursor to jumping and shows they are working on the skill.',
    },
    {
      ageRange: '24-30 months',
      context:
        'This is the typical window for learning to jump. Many toddlers start by "jumping" off a low step and progress to jumping in place on flat ground. If your child is not jumping yet but is attempting it, they are developing normally. Some children simply need more time to build the leg strength and coordination required.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Most children can jump with both feet off the ground by age 3. If your child is still unable to jump by their third birthday, mention it to your pediatrician. It may indicate low muscle tone, weak leg muscles, or coordination difficulties that can be addressed with physical therapy.',
    },
    {
      ageRange: '3-4 years',
      context:
        'If your child cannot jump at all by age 3, an evaluation is recommended. However, keep in mind that jumping skill varies widely. Your child should be able to jump in place and jump forward a few inches. Jumping from heights and hopping on one foot develop later, around age 4.',
    },
  ],
  whenNormal: [
    'Your toddler is under 30 months and is attempting to jump but can\'t get airborne yet.',
    'Your toddler can climb, squat, and kick, showing good leg strength.',
    'Your toddler bends knees and rises onto toes as a jumping attempt.',
    'Your toddler is meeting other motor milestones like running and climbing stairs.',
  ],
  whenToMention: [
    'Your child is over 30 months and shows no interest in or ability to jump.',
    'Your child seems to have weak legs or difficulty with other leg-strength activities.',
    'Your child cannot squat and return to standing easily.',
  ],
  whenToActNow: [
    'Your child was previously able to jump and has lost this ability.',
    'Your child seems to have leg weakness that is affecting multiple motor skills.',
  ],
  relatedMilestones: [
    'gross-motor-jumping',
    'gross-motor-climbing',
    'gross-motor-running',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'low-muscle-tone', 'toddler-cant-climb-stairs'],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 30 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-Year-Olds.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Gross motor development milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
