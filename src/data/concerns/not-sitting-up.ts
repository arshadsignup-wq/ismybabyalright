import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-sitting-up',
  title: 'Not Sitting Up',
  category: 'physical',
  searchTerms: [
    'baby not sitting up',
    'when do babies sit up on their own',
    'baby can\'t sit up at 6 months',
    'baby not sitting independently',
    'when should baby sit unsupported',
    'baby won\'t sit up by themselves',
    'late to sit up baby',
    'baby sitting up milestones',
    'baby falls over when sitting',
    'how to help baby learn to sit',
  ],
  quickAnswer:
    'Most babies learn to sit independently between 6 and 9 months, with a wide range of normal. Before independent sitting, babies typically progress through sitting with support, then sitting with hands propped in front (tripod sitting), then sitting freely.',
  byAge: [
    {
      ageRange: '3-4 months',
      context:
        'At this age, babies are working on head control and may sit briefly when well-supported, such as in a Bumbo seat or propped with pillows. They are not expected to sit on their own. Core strengthening through tummy time is laying the groundwork for sitting later.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Many babies begin sitting with support or in a "tripod" position, leaning forward on their hands for balance. Some babies may sit briefly unsupported by 6 months, but many are not yet ready, and that is perfectly normal. Lots of floor time and supported sitting practice helps.',
    },
    {
      ageRange: '6-7 months',
      context:
        'This is when many babies achieve independent sitting, though they may still topple over sometimes. Some babies are more interested in rolling or scooting and come to sitting a bit later. As long as your baby is showing progress in their core strength and balance, they are likely on track.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Most babies are sitting well independently by this range and can reach for toys without falling over. Some babies, especially those who were premature, may take until 9 months. If your baby is not yet sitting with support by 8 months, a check-in with your doctor is a good idea.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby is not sitting independently by 9-10 months, it is worth discussing with your doctor or health visitor. This does not necessarily mean something is wrong, as some babies are simply later developers, but an assessment can identify whether any support like physiotherapy would be helpful.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and not yet sitting independently, as this is earlier than most babies achieve this skill',
    'Your baby is sitting with support or in a tripod position and making gradual progress toward independent sitting',
    'Your baby can sit independently for short periods but still topples sometimes, showing they are building balance',
    'Your baby was premature and is reaching sitting milestones in line with their adjusted age rather than birth age',
    'Your baby prefers rolling or moving on their tummy and seems less interested in sitting still, but has the strength to sit when placed',
  ],
  whenToMention: [
    'Your baby is 8-9 months and cannot sit even with minimal support',
    'Your baby seems to have difficulty holding their trunk upright and consistently slumps to one side',
    'Your baby was sitting independently but seems to have lost this ability',
    'Your baby is not sitting independently and also seems delayed in other motor milestones like rolling or reaching',
  ],
  whenToActNow: [
    'Your baby has a sudden loss of sitting ability or other motor skills they previously had',
    'Your baby cannot hold their head up or support their upper body at all by 6 months',
  ],
  relatedMilestones: [
    'head-control',
    'rolling',
    'sitting',
    'crawling',
    'core-strength',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-9mo.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Motor Development Study: Windows of Achievement for Six Gross Motor Development Milestones. Acta Paediatrica, 2006.',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Babies 4 to 7 Months.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
  ],
};
