import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-sitting-independently',
  title: 'Baby Not Sitting Independently by 9 Months',
  category: 'physical',
  searchTerms: [
    'baby not sitting independently 9 months',
    'baby can\'t sit up alone 9 months',
    'baby not sitting without support',
    '9 month old not sitting by themselves',
    'baby still can\'t sit unsupported',
    'when to worry about baby not sitting',
    'late sitting baby',
    'baby needs help sitting at 9 months',
    'baby falls over when sitting 9 months',
    'baby not sitting up on their own',
    'delayed sitting milestone',
  ],
  quickAnswer:
    'Most babies learn to sit independently between 6 and 9 months, but some take a little longer. If your baby is not sitting independently by 9 months, it is a good idea to discuss this with your pediatrician, but it does not automatically mean something is wrong. Premature babies should be assessed based on their adjusted age, and some babies who are focused on other skills like crawling may simply come to independent sitting a bit later.',
  byAge: [
    {
      ageRange: '5-6 months',
      context:
        'Most babies begin sitting with support or in a "tripod" position at this age, using their hands in front of them for balance. Brief moments of unsupported sitting may occur, but toppling is frequent. It is completely normal for a 5-6 month old to not yet sit independently. Lots of floor time and practice in supported sitting positions helps build the core strength needed.',
    },
    {
      ageRange: '6-8 months',
      context:
        'This is the most common window for babies to achieve independent sitting. They gradually need less hand support and can sit for longer periods without falling over. Many babies are sitting well by 7 months, but some are not yet steady until 8 months, and that is fine. As long as your baby is making progress toward independent sitting - needing less support, sitting for longer - they are likely on track.',
    },
    {
      ageRange: '8-10 months',
      context:
        'If your baby cannot sit independently by 9 months, your pediatrician will likely want to assess their motor development more closely. This does not mean there is definitely a problem, but it is an important milestone to track. Your doctor will look at your baby\'s overall muscle tone, core strength, and whether they are progressing in other areas. A referral for physical therapy may be recommended to help build the core strength and balance needed for sitting.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If your baby has not achieved independent sitting by 10 months, your pediatrician will likely recommend a developmental evaluation. Delayed sitting at this age can be associated with low muscle tone, core weakness, or other developmental differences that benefit from early intervention. Physical therapy is often very effective, and many babies who start therapy make excellent progress.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 months and is making progress toward independent sitting, even if they are not there yet.',
    'Your baby can sit independently for short periods but still topples when reaching for toys or looking to the side.',
    'Your premature baby is sitting within the expected range for their adjusted age rather than their birth age.',
    'Your baby is very active and focused on crawling or pulling to stand, and seems to prefer moving to sitting still.',
    'Your baby sits well when placed in position but has not yet figured out how to get into sitting on their own.',
  ],
  whenToMention: [
    'Your baby is 9 months old (adjusted age for preemies) and cannot sit independently for even a few seconds.',
    'Your baby seems to have poor core strength and slumps or leans significantly to one side when sitting with support.',
    'Your baby is also delayed in other motor milestones like rolling, reaching, or bearing weight on their legs.',
  ],
  whenToActNow: [
    'Your baby was sitting independently and has lost this ability, as regression in motor skills requires immediate medical evaluation.',
    'Your baby has no ability to sit even with support by 9 months and shows significant weakness or floppiness overall.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-head-control',
    'gross-motor-rolling',
    'gross-motor-core-strength',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Babies 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Motor Development Study: Windows of Achievement for Six Gross Motor Development Milestones. Acta Paediatrica, 2006.',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
