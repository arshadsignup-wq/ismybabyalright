import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'w-sitting',
  title: 'My Toddler Sits in a W Position',
  category: 'physical',
  searchTerms: [
    'w sitting',
    'toddler w sitting',
    'baby sits in w position',
    'is w sitting bad',
    'w sitting harmful',
    'toddler legs in w shape when sitting',
    'w sitting and development',
    'should I stop w sitting',
    'w sitting causes problems',
    'why does my toddler w sit',
    'w sitting autism',
  ],
  quickAnswer:
    'W-sitting  -  when a child sits with their bottom on the floor and legs splayed out to each side forming a "W" shape  -  is very common in toddlers and is usually not harmful in moderation. It becomes a concern only if it\'s the only way your child sits, if they can\'t sit in other positions, or if it\'s accompanied by other motor difficulties.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Many toddlers discover W-sitting when they transition from crawling to sitting. It provides a very stable base that lets them use their hands for play without worrying about balance. At this age, occasional W-sitting is completely normal and doesn\'t need to be corrected unless it\'s their exclusive sitting position.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers at this age may still W-sit, especially during focused play. If your toddler also sits cross-legged, with legs to one side, or in a long-sit (legs straight in front), there\'s no concern. Gently encouraging variety  -  "Can you sit like a pretzel?"  -  is fine, but there\'s no need to anxiously correct them every time.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If W-sitting is still the predominant sitting position by age 2-3 and your child has difficulty sitting other ways, it may indicate low core strength, hip joint differences, or increased flexibility. A conversation with your pediatrician is worthwhile, especially if you notice other motor concerns like clumsiness or difficulty with stairs.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistent exclusive W-sitting past age 3 should be evaluated, particularly if accompanied by motor coordination difficulties, in-toeing when walking, or if your child complains of hip or leg pain. A pediatric physical therapist can assess core strength, hip rotation, and recommend exercises to encourage alternative sitting positions.',
    },
  ],
  whenNormal: [
    'Your toddler W-sits sometimes but also uses other sitting positions throughout the day.',
    'Your child moves in and out of the W position easily and uses it mainly during focused tabletop play.',
    'Your child has no difficulty with walking, running, climbing, or other motor activities despite occasional W-sitting.',
    'Your child can comfortably sit cross-legged, side-sit, or long-sit when encouraged.',
  ],
  whenToMention: [
    'W-sitting is the only way your child sits and they seem unable or unwilling to use other positions.',
    'Your child complains of leg or hip pain, or you notice in-toeing (pigeon toes) when they walk.',
    'Your child seems clumsier than peers, trips frequently, or has difficulty with balance activities.',
    'Your child has difficulty transitioning from sitting to standing or seems to need the W position for stability.',
  ],
  whenToActNow: [
    'Your child suddenly starts W-sitting exclusively after previously using various sitting positions  -  any change in motor patterns deserves attention.',
    'W-sitting is accompanied by signs of pain, limping, or refusal to walk.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-walking',
    'gross-motor-running',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Is W-Sitting Harmful to My Child?',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/W-Sitting.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones by Age',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Common Orthopedic Problems in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
  ],
};
