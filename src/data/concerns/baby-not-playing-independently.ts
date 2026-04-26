import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-playing-independently',
  title: 'Baby Not Playing Independently',
  category: 'behavior',
  searchTerms: [
    'baby won\'t play alone',
    'baby needs constant attention',
    'baby cries when put down',
    'toddler can\'t play independently',
    'toddler always wants me to play',
    'baby clingy won\'t play alone',
    'how to teach baby independent play',
    'toddler follows me everywhere',
    'baby wants to be held all the time',
    'is it normal baby won\'t play alone',
  ],
  quickAnswer:
    'Needing a lot of parental interaction during play is completely normal for babies and young toddlers. Independent play is a skill that develops gradually, and expecting too much too soon can backfire. Most babies under 12 months genuinely need your presence to feel safe enough to explore. By 18-24 months, short stretches of independent play (5-15 minutes) begin to emerge, gradually lengthening through the toddler years. Your child is not spoiled or overly dependent - they are doing exactly what developing brains are designed to do.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies at this age are not developmentally capable of independent play. They need close interaction with caregivers for learning and emotional regulation. Brief moments of looking at a mobile or batting at a play gym are early precursors to independent play, but expecting a baby this age to entertain themselves is unrealistic. Your presence and responsiveness are building the foundation of secure attachment that will eventually enable independent play.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some babies begin to explore toys on their own for brief periods (2-5 minutes) when a parent is nearby and visible. Others want to be held or need direct interaction for almost all waking time. Both are within the range of normal. You can support emerging independence by creating a safe play space, placing interesting objects within reach, and being present but not directing their play. Narrating what they are doing without taking over helps build confidence.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Independent play skills begin to grow but are still limited. Your toddler may play alone for 5-15 minutes at a time, especially if they can see or hear you. Parallel play (playing near you while you do something else) is a great stepping stone. Start with short periods and gradually increase. If your toddler protests when you step away, come back calmly and try again later rather than insisting they manage alone.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, many children can play independently for 15-30 minutes or more, depending on their temperament and the activity. Some children are naturally more social and always prefer company - this is temperament, not a problem. If your child cannot engage with any toy or activity without your direct participation for even a few minutes, and seems unable to focus or explore on their own at all, mention it to your pediatrician at a well-visit.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and wants you close during all playtime',
    'Your toddler plays independently for short stretches but frequently checks in with you or comes back for reassurance',
    'Independent play is shorter on days when your child is tired, sick, or going through a developmental leap',
    'Your child will play near you while you do household tasks but prefers not to be in a separate room',
    'Your child has a naturally social temperament and has always preferred interactive play',
  ],
  whenToMention: [
    'Your child is over 2 and cannot engage with any toy or activity for even 2-3 minutes without direct adult involvement',
    'Inability to play independently is accompanied by other developmental concerns such as limited interest in toys, repetitive play patterns, or delayed communication',
  ],
  whenToActNow: [
    'Your child shows no interest in toys, objects, or exploration at any time and seems passive or withdrawn even during interactive play',
    'Sudden loss of the ability to play independently or engage with toys after previously being able to do so',
  ],
  relatedMilestones: [
    'social-emotional-independence',
    'cognitive-problem-solving',
    'fine-motor-manipulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development in Young Children. Pediatrics, 2018.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/fitness/Pages/Caution-Children-at-Play.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By One Year.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. The Power of Play: How Play Helps Children Learn and Grow.',
      url: 'https://www.zerotothree.org/resource/the-power-of-play/',
    },
  ],
};
