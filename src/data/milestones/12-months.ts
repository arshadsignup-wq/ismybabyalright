import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '12-months',
  label: '12 Months',
  ageInMonths: 12,
  categories: {
    grossMotor: [
      {
        id: 'gm-12-pulling-to-stand',
        name: 'Pulling to Stand',
        plainDescription:
          'Your baby grabs onto furniture and pulls themselves up from sitting to standing.',
        whatItLooksLike:
          'Baby grabs the edge of a couch, coffee table, or your hands and hauls themselves up to standing. They stand there holding on, looking proud. They may plop back down or slowly lower themselves.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 12,
          concernThresholdMonths: 14,
        },
        whenNormal:
          'By 12 months, most babies are pulling to stand. Some are already cruising along furniture. If your baby just started doing this, they are right on track.',
        whenToMention:
          'If your baby is not pulling to stand by 12-13 months, mention it at your next well-child visit.',
        whenToCallNow:
          'If your baby cannot bear weight on their legs at all, or has lost the ability to pull up, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Standing with assistance',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-pulling-up', 'not-standing', 'low-muscle-tone'],
      },
      {
        id: 'gm-12-cruising',
        name: 'Cruising Along Furniture',
        plainDescription:
          'Your baby walks sideways while holding onto furniture for support.',
        whatItLooksLike:
          'Baby stands at the couch and takes sideways steps while holding on, moving along the length of the furniture. They might move from one piece of furniture to another if things are close together.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Cruising is a bridge between standing and walking independently. Some babies cruise for weeks before taking their first solo steps, and others barely cruise at all before walking.',
        whenToMention:
          'If your baby is not cruising or showing interest in moving while standing by 13-14 months, bring it up with your doctor.',
        whenToCallNow:
          'If your baby was cruising and has stopped, or cannot stand even with support, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-walking', 'not-standing', 'low-muscle-tone'],
      },
      {
        id: 'gm-12-first-steps',
        name: 'First Steps (Emerging)',
        plainDescription:
          'Your baby may take a few wobbly steps on their own, or they may not be there yet  -  both are normal at 12 months.',
        whatItLooksLike:
          'Baby lets go of the furniture and takes one or two unsteady steps before grabbing on again or sitting down. They might only do this occasionally. Many 12-month-olds are not doing this yet.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 12,
          lateNormalMonths: 15,
          concernThresholdMonths: 18,
        },
        whenNormal:
          'The average age for first independent steps is around 12 months, but the normal range extends well past 15 months. Many perfectly healthy babies do not walk until 14 or 15 months. This is not a race.',
        whenToMention:
          'If your baby is not walking at all by 15-16 months, bring it up at their next visit.',
        whenToCallNow:
          'If your baby cannot stand even with support by 12 months, or has lost the ability to stand or cruise, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Walking alone  -  normal range 8.2 to 17.6 months',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-walking', 'late-walker'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-12-pincer-grasp-refined',
        name: 'Refined Pincer Grasp',
        plainDescription:
          'Your baby neatly picks up small items like cereal or peas between their thumb and pointer finger.',
        whatItLooksLike:
          'Baby uses the tips of their thumb and index finger to carefully pick up small pieces of food, a cheerio, or a tiny toy. The grasp is more precise than a few months ago.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 11,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'A neat pincer grasp is a sign of growing fine motor control. You will notice your baby can pick up smaller and smaller objects as this skill develops.',
        whenToMention:
          'If your baby still uses their whole hand to grab small objects by 13 months, let your doctor know.',
        whenToCallNow:
          'If your baby cannot hold objects or has lost the ability to grasp, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'not-grasping'],
      },
      {
        id: 'fm-12-puts-things-in-container',
        name: 'Putting Things In and Out of Containers',
        plainDescription:
          'Your baby drops objects into a cup, bowl, or box and then dumps them out again.',
        whatItLooksLike:
          'Baby picks up blocks or toys and drops them into a bucket, then tips the bucket over to dump them out. They may repeat this over and over. They are learning about "in" and "out."',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 11,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'This in-and-out game is both a fine motor skill and a cognitive one. It shows your baby understands containers and is developing the hand control to deliberately place objects.',
        whenToMention:
          'If your baby is not interested in putting objects in containers or exploring how things fit by 13-14 months, mention it at your next visit.',
        whenToCallNow:
          'If your baby does not interact with objects at all  -  never reaches, grasps, or explores toys  -  contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'cognitive-delay'],
      },
      {
        id: 'fm-12-pointing',
        name: 'Pointing with Index Finger',
        plainDescription:
          'Your baby extends their pointer finger to touch things, poke at small objects, or point at things they want or find interesting.',
        whatItLooksLike:
          'Baby sticks out their index finger to poke at buttons, pictures in books, or food on their tray. They may also point toward things they want or things that catch their eye.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 11,
          lateNormalMonths: 14,
          concernThresholdMonths: 16,
        },
        whenNormal:
          'Pointing is one of the most important early communication milestones. It means your baby is deliberately trying to share their interest or make a request. Some babies point earlier and some later  -  both are fine.',
        whenToMention:
          'If your baby is not pointing at all by 14-15 months, bring it up at your next appointment. This is an important one to track.',
        whenToCallNow:
          'If your baby does not point, does not gesture, and does not seem to try to communicate wants in any way by 14 months, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-pointing',
          'not-gesturing',
          'autism-concerns',
        ],
      },
    ],
    language: [
      {
        id: 'lang-12-first-words',
        name: 'First Words',
        plainDescription:
          'Your baby says one or two real words like "mama," "dada," or "uh-oh," and uses them to mean something specific.',
        whatItLooksLike:
          'Baby says "mama" when looking at you, or "dada" when their other parent walks in. They might say "ba" for bottle or "da" for dog consistently. The key is that they use a specific sound for a specific thing or person.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 12,
          lateNormalMonths: 14,
          concernThresholdMonths: 16,
        },
        whenNormal:
          'First words can be hard to recognize because they often do not sound exactly like adult words. "Ba" for ball, "nana" for banana, or "guh" for dog all count as words if your baby uses them consistently and on purpose.',
        whenToMention:
          'If your baby is not saying any words by 14-15 months, bring it up at your next visit. Some late talkers catch up quickly, but it is worth tracking.',
        whenToCallNow:
          'If your baby is not babbling at all, makes very few sounds, and does not try to communicate with gestures either, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Child Development Guidelines  -  Language milestones',
            url: 'https://www.who.int/tools/child-growth-standards',
          },
        ],
        relatedConcerns: ['not-talking', 'late-talker', 'hearing-concerns'],
      },
      {
        id: 'lang-12-gestures',
        name: 'Using Gestures to Communicate',
        plainDescription:
          'Your baby waves bye-bye, shakes their head for "no," reaches up to be picked up, or points at things they want.',
        whatItLooksLike:
          'Baby waves when someone leaves, holds their arms up to be lifted, shakes their head when they do not want something, or points to the snack shelf. These gestures are their way of "talking" before they have many words.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Gestures are just as important as words at this age. A baby who waves, points, and reaches is communicating even if they are not saying many words yet.',
        whenToMention:
          'If your baby does not use any gestures  -  no waving, pointing, reaching, or head-shaking  -  by 12-13 months, let your doctor know.',
        whenToCallNow:
          'If your baby does not wave, point, or use any gestures, and also does not seem to understand your gestures, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-waving',
          'not-pointing',
          'not-gesturing',
          'autism-concerns',
        ],
      },
      {
        id: 'lang-12-understands-simple-requests',
        name: 'Understands Simple Requests',
        plainDescription:
          'Your baby understands simple phrases like "give me the ball" or "where is your cup?" especially with gestures.',
        whatItLooksLike:
          'When you say "give it to me" and hold out your hand, baby hands over the toy. When you say "where is the doggy?" they may look toward the dog. They understand much more than they can say.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Babies understand far more words than they can speak. At 12 months, they may understand 50 or more words even if they only say one or two. This gap between understanding and speaking is perfectly normal.',
        whenToMention:
          'If your baby does not seem to understand any simple words or phrases by 12-13 months, mention it at your next checkup.',
        whenToCallNow:
          'If your baby does not respond to any words and does not seem to understand language at all, contact your pediatrician. A hearing evaluation may be helpful.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-understanding-words',
          'hearing-concerns',
          'language-delay',
        ],
      },
    ],
    socialEmotional: [
      {
        id: 'se-12-waving',
        name: 'Waving Bye-Bye',
        plainDescription:
          'Your baby waves when someone says "bye-bye" or when they see someone leaving.',
        whatItLooksLike:
          'Baby opens and closes their hand, or moves their whole arm, when someone says goodbye. They might wave on their own when they see someone heading for the door, or they might need a prompt.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Waving is a social gesture that shows your baby understands social routines. Some babies wave enthusiastically, and some give a subtle hand movement  -  both count.',
        whenToMention:
          'If your baby is not waving or using any social gestures by 13 months, mention it at your next visit.',
        whenToCallNow:
          'If your baby does not use any gestures and does not seem to engage socially  -  no eye contact, no smiling at people, no interest in back-and-forth games  -  call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-waving',
          'not-gesturing',
          'autism-concerns',
        ],
      },
      {
        id: 'se-12-shows-you-things',
        name: 'Showing or Giving You Things',
        plainDescription:
          'Your baby holds up a toy or object to show it to you, or hands you things.',
        whatItLooksLike:
          'Baby picks up a toy, holds it out toward you, and looks at your face  -  they want you to see it too. They might hand you a book because they want you to read it, or offer you a bite of their food.',
        typicalRange: {
          earlyMonths: 9,
          averageMonths: 11,
          lateNormalMonths: 14,
          concernThresholdMonths: 16,
        },
        whenNormal:
          'Showing and giving objects is a way your baby shares their world with you. It is an early form of conversation  -  they are saying "look at this!" without words.',
        whenToMention:
          'If your baby never holds up toys to show you or does not try to share experiences with you by 14 months, bring it up with your doctor.',
        whenToCallNow:
          'If your baby does not interact with you, avoids eye contact, and does not try to share attention in any way, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-sharing-attention',
          'autism-concerns',
          'no-social-engagement',
        ],
      },
      {
        id: 'se-12-separation-anxiety',
        name: 'Separation Anxiety',
        plainDescription:
          'Your baby may cry or become upset when you leave the room or when they are left with a less familiar caregiver.',
        whatItLooksLike:
          'Baby cries when you walk out of sight, clings to you at daycare drop-off, or fusses when grandma tries to hold them. This can feel intense but it is a normal part of development.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 18,
          concernThresholdMonths: 24,
        },
        whenNormal:
          'Separation anxiety peaks around 10-18 months and then gradually lessens. It is a sign of a strong, healthy attachment to you. Your baby loves you so much that they protest when you leave  -  it is hard, but it is healthy.',
        whenToMention:
          'If your baby shows no reaction at all when you leave  -  never looking for you or seeming to notice  -  mention it at your next visit.',
        whenToCallNow:
          'If your baby shows no attachment to any caregivers and seems equally indifferent to everyone, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-attachment', 'autism-concerns'],
      },
    ],
    cognitive: [
      {
        id: 'cog-12-simple-problem-solving',
        name: 'Simple Problem-Solving',
        plainDescription:
          'Your baby figures out simple problems, like pulling a blanket to get a toy that is on top of it, or moving an obstacle out of the way.',
        whatItLooksLike:
          'A toy is sitting on a blanket just out of reach. Instead of just reaching and fussing, baby pulls the blanket toward them to get the toy. They might also try to open a box to get something inside.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Simple problem-solving shows that your baby is starting to think ahead and plan. This is a big cognitive leap. They are figuring out how to make things happen.',
        whenToMention:
          'If your baby does not try different approaches to get something they want  -  just fusses without trying  -  by 13-14 months, bring it up at your next visit.',
        whenToCallNow:
          'If your baby seems very passive, does not explore their environment, and does not show curiosity about objects, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay'],
      },
      {
        id: 'cog-12-explores-objects-differently',
        name: 'Exploring Objects in Different Ways',
        plainDescription:
          'Your baby tries different things with objects  -  shaking, banging, throwing, dropping, and poking at them.',
        whatItLooksLike:
          'Instead of just mouthing everything, baby now shakes a rattle, bangs a spoon on the table, drops a ball and watches it bounce, pokes buttons, and turns things over to examine them.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Trying different actions on objects is how your baby learns about the physical world. Every shake, bang, and drop is a little science experiment.',
        whenToMention:
          'If your baby only does one thing with objects (like only mouthing) and does not try different approaches by 13 months, let your doctor know.',
        whenToCallNow:
          'If your baby shows no interest in objects and does not reach for, hold, or explore toys, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay', 'not-exploring-toys'],
      },
      {
        id: 'cog-12-imitates-actions',
        name: 'Imitating Simple Actions',
        plainDescription:
          'Your baby copies things they see you do, like clapping, stirring with a spoon, or talking on a phone.',
        whatItLooksLike:
          'You clap your hands and baby claps too. You pretend to drink from a cup and baby copies you. You talk on the phone and baby holds a toy up to their ear. They are learning by watching and copying.',
        typicalRange: {
          earlyMonths: 8,
          averageMonths: 10,
          lateNormalMonths: 13,
          concernThresholdMonths: 15,
        },
        whenNormal:
          'Imitation is one of the most powerful ways babies learn. When your baby copies you, it shows they are paying attention, understanding actions, and able to reproduce them  -  all impressive cognitive skills.',
        whenToMention:
          'If your baby does not try to copy any of your actions or gestures by 13-14 months, bring it up at your next visit.',
        whenToCallNow:
          'If your baby does not watch your actions, does not make eye contact, and shows no interest in what you are doing, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 12 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-imitating',
          'cognitive-delay',
          'autism-concerns',
        ],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not crawl, scoot, or move around in any way',
      action: 'Call your pediatrician to discuss a motor development evaluation.',
    },
    {
      description: 'Cannot stand even when supported or held',
      action: 'Call your pediatrician to discuss.',
    },
    {
      description: 'Does not say any words like "mama" or "dada" (even unclearly)',
      action:
        'Mention at your next visit. Many 12-month-olds are just starting, but it is worth tracking.',
    },
    {
      description: 'Does not point at things or use any gestures (waving, reaching)',
      action:
        'Bring this up with your pediatrician. Gestures are key communication milestones.',
    },
    {
      description: 'Does not search for things they see you hide',
      action: 'Mention at your next visit.',
    },
    {
      description: 'Does not look at you when you talk or show excitement',
      action: 'Mention to your pediatrician at the next visit.',
    },
    {
      description: 'Has lost skills they previously had',
      action:
        'Call your pediatrician right away. Any loss of skills should be evaluated promptly.',
    },
  ],
  notes:
    'Twelve months is a magical time  -  your baby is transforming from an infant into a toddler. But remember, the "first birthday" is not a deadline. Walking, talking, and other milestones all have wide normal ranges that extend well past 12 months. Some 12-month-olds are walking and saying a few words; others are still cruising and babbling. Both are perfectly normal. Focus on the overall trend: Is your baby learning new things, even if slowly? Are they curious and engaged? Those are the most important signs. And always remember  -  you are doing a great job. The fact that you care enough to check says everything.',
};
