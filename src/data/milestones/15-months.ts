import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '15-months',
  label: '15 Months',
  ageInMonths: 15,
  categories: {
    grossMotor: [
      {
        id: 'gm-15-walking',
        name: 'Walking Independently',
        plainDescription:
          'Your toddler walks on their own without holding onto furniture or your hand.',
        whatItLooksLike:
          'Your child takes steps independently with a wide, unsteady gait. They may hold their arms up for balance, fall frequently, and prefer to crawl when they need to get somewhere quickly. Walking looks wobbly and "drunken"  -  that is completely normal at this stage.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 12,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'The normal range for walking is very wide  -  from 9 to 17 months. Many healthy toddlers are not walking confidently at 15 months. If your child is cruising and taking a few steps, they are well on their way.',
        whenToMention:
          'If your child is not walking independently by 16-17 months, mention it at your next visit. Your pediatrician may want to watch for another month or two.',
        whenToCallNow:
          'If your child cannot stand even with support, walks only on their toes all the time, or has stopped walking after previously being able to, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Walking alone  -  99% of children achieve by 17.6 months',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-walking', 'late-walker', 'toe-walking'],
      },
      {
        id: 'gm-15-stooping-and-recovering',
        name: 'Stooping and Recovering',
        plainDescription:
          'Your toddler bends down to pick something up off the floor and stands back up without falling.',
        whatItLooksLike:
          'Your child sees a toy on the floor, bends at the waist or squats down to grab it, and then straightens back up to standing. They may wobble but they manage it.',
        typicalRange: {
          earlyMonths: 11,
          averageMonths: 14,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Being able to bend down and stand back up requires balance and core strength. If your child is just starting to walk, they probably cannot do this yet, and that is fine  -  it comes with practice.',
        whenToMention:
          'If your child cannot bend and stand back up by 17-18 months (assuming they are walking), mention it at your next visit.',
        whenToCallNow:
          'If your child frequently loses balance and falls more than expected for their level of walking, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Motor Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['balance-concerns', 'not-walking'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-15-stacking-blocks',
        name: 'Stacking Two Blocks',
        plainDescription:
          'Your toddler places one block on top of another to build a small tower.',
        whatItLooksLike:
          'Your child picks up a block and carefully places it on top of another block. The tower may only be two blocks tall before it falls, but they are deliberately stacking, not just banging.',
        typicalRange: {
          earlyMonths: 12,
          averageMonths: 14,
          lateNormalMonths: 17,
          concernThresholdMonths: 20,
        },
        whenNormal:
          'Stacking two blocks requires precise hand control and the ability to let go at just the right moment. If your child is still mainly knocking towers down rather than building them, give them a little more time.',
        whenToMention:
          'If your child cannot stack any blocks by 18 months, mention it at your next checkup.',
        whenToCallNow:
          'If your child cannot hold small objects or has lost the ability to pick things up, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Fine Motor Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay'],
      },
      {
        id: 'fm-15-self-feeding',
        name: 'Self-Feeding with Fingers',
        plainDescription:
          'Your toddler feeds themselves finger foods, picking up pieces of food and putting them in their mouth.',
        whatItLooksLike:
          'Your child picks up small pieces of cut-up food  -  banana, cheese, pasta  -  and brings them to their mouth. It is messy, but they are doing it intentionally. They may also try to use a spoon, though most of the food will miss their mouth.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 12,
          lateNormalMonths: 15,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Messy self-feeding is a great sign. Your child is practicing fine motor skills, hand-eye coordination, and independence. Let them get messy  -  it is how they learn.',
        whenToMention:
          'If your child shows no interest in self-feeding or cannot get food to their mouth by 15-16 months, let your doctor know.',
        whenToCallNow:
          'If your child cannot hold objects or chokes frequently on age-appropriate foods, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'feeding-difficulties'],
      },
      {
        id: 'fm-15-scribbling-emerging',
        name: 'Scribbling (Emerging)',
        plainDescription:
          'Your toddler holds a crayon or marker and makes marks on paper  -  or on your walls.',
        whatItLooksLike:
          'Your child grabs a crayon in their fist and moves it back and forth on paper, making random marks and scribbles. There is no shape or letter  -  just joyful mark-making. They may use a whole-hand grip.',
        typicalRange: {
          earlyMonths: 12,
          averageMonths: 15,
          lateNormalMonths: 18,
          concernThresholdMonths: 21,
        },
        whenNormal:
          'Scribbling is one of the first steps toward drawing and eventually writing. At this stage, it is all about the experience of making marks, not creating anything recognizable.',
        whenToMention:
          'If your child shows no interest in making marks with crayons or similar tools by 18 months, mention it at your next visit.',
        whenToCallNow:
          'If your child cannot hold a crayon or small object at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Fine Motor Development',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay'],
      },
    ],
    language: [
      {
        id: 'lang-15-three-to-five-words',
        name: 'Using 3 to 5 Words',
        plainDescription:
          'Your toddler uses about 3 to 5 words regularly, though they may not say them clearly.',
        whatItLooksLike:
          'Your child consistently says a few words  -  things like "mama," "dada," "no," "ball," "more," "dog," or "bye-bye." The words may not sound perfect ("ba" for ball, "muh" for more), but they use them intentionally.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Word counts vary enormously at this age. Some 15-month-olds say a dozen words while others say two. What matters most is that your child is trying to communicate  -  through words, gestures, or both.',
        whenToMention:
          'If your child is not saying any words at all by 16 months, mention it at your next visit. If they have lots of gestures and good understanding, that is reassuring.',
        whenToCallNow:
          'If your child has no words, no gestures, and does not seem to understand what you say, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-talking', 'late-talker', 'language-delay'],
      },
      {
        id: 'lang-15-follows-simple-commands',
        name: 'Following Simple Commands',
        plainDescription:
          'Your toddler follows simple one-step directions, especially when you use a gesture too, like "bring me the ball" or "put it in the box."',
        whatItLooksLike:
          'You say "give me the cup" and point to the cup, and your child picks it up and hands it to you. You say "come here" and they walk over. They may not follow directions every time, especially if they are busy or uninterested.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Following directions requires understanding words, processing a request, and then acting on it  -  that is a lot of steps for a little person. It is normal for toddlers to ignore directions sometimes, especially when they are focused on something else.',
        whenToMention:
          'If your child does not seem to understand simple instructions, even with gestures, by 16-17 months, bring it up at your next visit.',
        whenToCallNow:
          'If your child does not respond to language at all and seems to not understand any words, contact your pediatrician. A hearing test may be recommended.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Language Milestones, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-understanding-words',
          'hearing-concerns',
          'language-delay',
        ],
      },
      {
        id: 'lang-15-looks-at-familiar-objects',
        name: 'Looks at Named Objects',
        plainDescription:
          'When you say the name of a familiar object or person, your toddler looks at it or turns toward them.',
        whatItLooksLike:
          'You say "Where is the dog?" and your child turns to look at the dog. You say "Where is daddy?" and they look toward their other parent. They understand many more words than they can say.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 12,
          lateNormalMonths: 15,
          concernThresholdMonths: 17,
        },
        whenNormal:
          'Receptive language  -  understanding words  -  develops ahead of expressive language  -  saying words. Your child likely understands dozens of words by now, even if they only say a few.',
        whenToMention:
          'If your child does not seem to recognize the names of familiar people or everyday objects by 15-16 months, let your doctor know.',
        whenToCallNow:
          'If your child does not respond to their own name or to any familiar words, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Language Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-responding-to-name',
          'hearing-concerns',
          'not-understanding-words',
        ],
      },
    ],
    socialEmotional: [
      {
        id: 'se-15-imitation-of-adults',
        name: 'Imitating Everyday Actions',
        plainDescription:
          'Your toddler copies things they see you do around the house, like sweeping, talking on the phone, or feeding a baby doll.',
        whatItLooksLike:
          'Your child picks up a broom and pushes it around, holds a phone to their ear and babbles, or pretends to drink from an empty cup. They are watching you closely and trying to do what you do.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Imitation is how toddlers learn about the world. When your child copies you, it means they are paying attention, understanding actions, and trying them out. It is flattering  -  and sometimes hilarious.',
        whenToMention:
          'If your child does not try to imitate your actions at all by 16-17 months, mention it at your next visit.',
        whenToCallNow:
          'If your child does not seem aware of what others are doing, does not watch other people, and does not try to copy any actions, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-imitating', 'autism-concerns'],
      },
      {
        id: 'se-15-shows-affection',
        name: 'Showing Affection',
        plainDescription:
          'Your toddler hugs you, snuggles against you, or gives kisses.',
        whatItLooksLike:
          'Your child wraps their arms around your neck, leans into you for a cuddle, or presses their face against yours for a "kiss." They may also show affection to stuffed animals or other family members.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Showing affection is a beautiful sign of healthy attachment. Some toddlers are naturally more cuddly than others  -  a child who shows affection in their own way (leaning against you, bringing you toys) is doing just fine.',
        whenToMention:
          'If your child never seeks physical comfort from you or shows no signs of affection toward familiar people, mention it at your next visit.',
        whenToCallNow:
          'If your child actively avoids physical contact, does not make eye contact, and does not seem comforted by your presence, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-attachment', 'autism-concerns'],
      },
      {
        id: 'se-15-explores-with-parent-nearby',
        name: 'Exploring with a Caregiver Nearby',
        plainDescription:
          'Your toddler feels confident exploring their surroundings but checks back with you regularly  -  looking at you, coming back for a quick touch, then heading out again.',
        whatItLooksLike:
          'At a playground or playgroup, your child toddles off to explore but keeps glancing back at you. They may come back to you periodically for a hug or reassurance before heading off again. You are their "home base."',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'This behavior  -  exploring and checking back  -  is a sign of healthy, secure attachment. Your child trusts that you will be there, so they feel safe to explore. It is one of the best signs in child development.',
        whenToMention:
          'If your child never checks back with you and wanders away without looking back, or if they are too anxious to leave your side at all, mention it at your next visit.',
        whenToCallNow:
          'If your child seems completely unaware of your presence and shows no interest in where you are, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-attachment', 'autism-concerns', 'anxiety'],
      },
    ],
    cognitive: [
      {
        id: 'cog-15-functional-play',
        name: 'Using Objects Correctly',
        plainDescription:
          'Your toddler uses everyday objects the right way  -  drinking from a cup, brushing their hair, or pushing a toy car along the floor.',
        whatItLooksLike:
          'Instead of just banging or mouthing a toy phone, your child holds it to their ear. They push a toy car along the floor instead of just throwing it. They try to brush their own hair with a brush.',
        typicalRange: {
          earlyMonths: 11,
          averageMonths: 14,
          lateNormalMonths: 17,
          concernThresholdMonths: 20,
        },
        whenNormal:
          'Using objects the "right" way shows your child is learning what things are for. It is an early form of pretend play and a sign that they are paying attention to how you use things.',
        whenToMention:
          'If your child only mouths, bangs, or throws objects without ever using them functionally by 17-18 months, bring it up at your next visit.',
        whenToCallNow:
          'If your child shows no interest in objects or only does repetitive movements with them (like spinning wheels endlessly), contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay', 'autism-concerns'],
      },
      {
        id: 'cog-15-points-to-ask',
        name: 'Pointing to Ask for Things or Show Interest',
        plainDescription:
          'Your toddler points at things to show you something interesting or to tell you what they want.',
        whatItLooksLike:
          'Your child points at a plane in the sky and looks at you excitedly. They point at a cookie on the counter because they want one. They point at a picture in a book. They use pointing as a primary communication tool.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'Pointing is a critical milestone because it shows "joint attention"  -  your child wants to share their experience with you. This is the foundation of communication and language.',
        whenToMention:
          'If your child is not pointing to share interest (not just to request things) by 16 months, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child does not point, does not follow your point, and does not try to direct your attention in any way by 16 months, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 15 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-pointing',
          'not-gesturing',
          'autism-concerns',
        ],
      },
      {
        id: 'cog-15-finds-hidden-objects',
        name: 'Finding Hidden Objects',
        plainDescription:
          'Your toddler can find a toy you have hidden, even if you moved it from one hiding spot to another while they watched.',
        whatItLooksLike:
          'You put a toy under a cup. Your child lifts the cup and finds it. Then you move the toy to a different cup while they watch, and they look under the correct cup. They can follow the movement and remember where it went.',
        typicalRange: {
          earlyMonths: 10,
          averageMonths: 13,
          lateNormalMonths: 16,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'This is a more advanced version of the peekaboo and hide-and-find games they enjoyed as a baby. Their memory and understanding are growing  -  they can track objects across multiple locations.',
        whenToMention:
          'If your child cannot find a toy hidden under a cloth right in front of them by 16-17 months, mention it at your next visit.',
        whenToCallNow:
          'If your child shows no interest in searching for hidden objects and does not seem to understand that things exist when out of sight, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not walk or attempt to walk',
      action:
        'Mention at your next visit. If not walking by 18 months, your pediatrician may recommend evaluation.',
    },
    {
      description: 'Does not point to show you things or to request',
      action:
        'Bring this up with your pediatrician. Pointing is an important communication milestone.',
    },
    {
      description: 'Does not use at least 1-2 words',
      action:
        'Mention at your next visit. If there are also no gestures, this is more concerning.',
    },
    {
      description: 'Does not seem to understand simple words like "no" or "give me"',
      action:
        'Let your pediatrician know. A hearing evaluation may be helpful.',
    },
    {
      description: 'Does not imitate actions or sounds',
      action: 'Mention to your pediatrician at the next visit.',
    },
    {
      description: 'Does not notice or seem to care when a caregiver leaves or returns',
      action: 'Bring this up with your pediatrician.',
    },
    {
      description: 'Has lost skills they previously had',
      action:
        'Call your pediatrician right away. Loss of skills always warrants prompt evaluation.',
    },
  ],
  notes:
    'At 15 months, your toddler is becoming their own little person  -  with opinions, preferences, and a growing sense of independence. Development at this age can feel uneven: your child might be an early walker but a late talker, or the other way around. That is normal. Toddlers often focus their energy on one area at a time. If your child just learned to walk, their language might plateau for a bit while they practice moving. The CDC recommends developmental screening at 9, 18, and 30 months  -  and many pediatricians also do a check around 15 months. If you have concerns, you do not need to wait for a scheduled screening. Asking questions early gives you and your child the best chance for a great outcome.',
};
