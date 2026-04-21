import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '9-months',
  label: '9 Months',
  ageInMonths: 9,
  categories: {
    grossMotor: [
      {
        id: 'gm-9-crawling',
        name: 'Crawling',
        plainDescription:
          'Your baby moves across the floor on hands and knees, or scoots on their bottom or belly. Any style of getting around counts.',
        whatItLooksLike:
          'Baby gets up on hands and knees and rocks, then starts moving forward or backward. Some babies army-crawl on their belly or scoot on their bottom instead — all of these are normal.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Lots of babies are still figuring out crawling at 9 months. Some skip it entirely and go straight to pulling up or cruising — that is completely fine.',
        whenToMention:
          'If your baby is not moving around in any way by 10-11 months — not crawling, scooting, rolling, or creeping — mention it at your next well-child visit.',
        whenToCallNow:
          'If your baby seems stiff or floppy in their legs, only uses one side of their body, or has lost movement skills they used to have, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for six gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-crawling', 'not-moving'],
      },
      {
        id: 'gm-9-sitting-unsupported',
        name: 'Sitting Without Support',
        plainDescription:
          'Your baby can sit on their own without needing to prop themselves up with their hands or lean against something.',
        whatItLooksLike:
          'Baby sits steadily on the floor and can reach for toys or look around without toppling over. They may still fall sometimes, but they can sit for a minute or more on their own.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 7,
          lateNormalMonths: 9,
          concernThresholdMonths: 10,
        },
        whenNormal:
          'Most babies sit well without support by 9 months. Some wobbliness is still normal, especially when they reach for something.',
        whenToMention:
          'If your baby still cannot sit without support by 9 months, let your pediatrician know at the next visit.',
        whenToCallNow:
          'If your baby has lost the ability to sit up after previously being able to, or seems to slump or fall to one side consistently, call your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Sitting without support',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-sitting', 'low-muscle-tone'],
      },
      {
        id: 'gm-9-pulling-to-stand',
        name: 'Pulling to Stand (Emerging)',
        plainDescription:
          'Your baby grabs onto furniture or your hands and pulls themselves up to a standing position.',
        whatItLooksLike:
          'Baby reaches up to a couch, coffee table, or your leg and pulls themselves from sitting to standing. They may be wobbly and hold on tightly. Some babies are just starting to try this at 9 months.',
        typicalRange: {
          earlyMonths: 7,
          averageMonths: 9,
          lateNormalMonths: 11,
          concernThresholdMonths: 13,
        },
        whenNormal:
          'Some babies pull to stand by 9 months, but many are not doing this yet. It is very common for this to develop over the next couple of months.',
        whenToMention:
          'If your baby shows no interest in pulling up by 12 months, bring it up at their next checkup.',
        whenToCallNow:
          'If your baby cannot bear any weight on their legs when you hold them in a standing position, or their legs seem very stiff or very floppy, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-pulling-up', 'not-standing', 'low-muscle-tone'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-9-pincer-grasp',
        name: 'Pincer Grasp (Emerging)',
        plainDescription:
          'Your baby is starting to pick up small things using their thumb and pointer finger, like a small piece of cereal or a puff.',
        whatItLooksLike:
          'Instead of raking small items with their whole hand, baby starts using just their thumb and index finger to pick up small foods or objects. At 9 months this is often still developing — they may use a "raking" motion first.',
        typicalRange: {
          earlyMonths: 7,
          averageMonths: 9,
          lateNormalMonths: 11,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'The pincer grasp often starts rough and clumsy around 9 months and gets refined over the next few months. Your baby might still use their whole hand — that is okay.',
        whenToMention:
          'If your baby is not picking up small objects at all by 11-12 months, mention it at your next visit.',
        whenToCallNow:
          'If your baby cannot hold objects in either hand or seems to have a very weak grip, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-grasping', 'fine-motor-delay'],
      },
      {
        id: 'fm-9-transfers-objects',
        name: 'Transferring Objects Between Hands',
        plainDescription:
          'Your baby passes a toy or object from one hand to the other.',
        whatItLooksLike:
          'Baby holds a block or rattle in one hand, then moves it to the other hand. They may do this to free up a hand to grab something else, or just as part of exploring the toy.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 7,
          lateNormalMonths: 9,
          concernThresholdMonths: 11,
        },
        whenNormal:
          'Most babies transfer objects easily by 9 months. This is a skill that has usually been developing for a few months already.',
        whenToMention:
          'If your baby strongly prefers one hand and never uses the other, mention it at your next visit. True hand preference this early can sometimes indicate something worth checking.',
        whenToCallNow:
          'If your baby cannot grasp objects or has lost the ability to hold things, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 6 and 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'hand-preference-early'],
      },
      {
        id: 'fm-9-banging-toys',
        name: 'Banging and Clapping Toys Together',
        plainDescription:
          'Your baby bangs two objects together or claps toys against each other.',
        whatItLooksLike:
          'Baby holds a block in each hand and bangs them together, or hits a spoon on the table. They love the sound and sensation this creates.',
        typicalRange: {
          earlyMonths: 7,
          averageMonths: 9,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Most babies love banging things together at this age. It is a great sign of developing coordination and cause-and-effect understanding.',
        whenToMention:
          'If your baby shows little interest in exploring toys — not holding, banging, or mouthing them — bring it up at your next checkup.',
        whenToCallNow:
          'If your baby does not reach for or hold objects, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'not-exploring-toys'],
      },
    ],
    language: [
      {
        id: 'lang-9-babbling-consonants',
        name: 'Babbling with Consonant Sounds',
        plainDescription:
          'Your baby makes strings of sounds using consonants and vowels together, like "bababa," "mamama," or "dadada."',
        whatItLooksLike:
          'Baby babbles in repeated syllables — "babababa" or "mamamama." They may not mean "mama" or "dada" yet, but they are practicing the sounds that will become real words. You might hear them babbling to themselves, to toys, or to you.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 7,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Babbling at this age can sound like a little conversation in a made-up language. It is a wonderful sign that your baby is building the foundation for real words.',
        whenToMention:
          'If your baby is mostly quiet and not making consonant sounds like "b," "d," "m," or "g" by 10 months, mention it at your next appointment.',
        whenToCallNow:
          'If your baby has stopped making sounds they used to make, or does not make any sounds at all, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Child Development Guidelines — Language Development',
            url: 'https://www.who.int/tools/child-growth-standards',
          },
        ],
        relatedConcerns: ['not-babbling', 'not-talking', 'hearing-concerns'],
      },
      {
        id: 'lang-9-responds-to-name',
        name: 'Responds to Own Name',
        plainDescription:
          'Your baby looks at you or reacts when you say their name.',
        whatItLooksLike:
          'When you say your baby\'s name, they turn to look at you or pause what they are doing. They may not respond every single time — especially if they are deeply focused on something — but they clearly recognize their name.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 7,
          lateNormalMonths: 9,
          concernThresholdMonths: 10,
        },
        whenNormal:
          'It is completely normal for babies to sometimes ignore their name when they are focused on something interesting. The key is that they respond at least some of the time in calm, quiet settings.',
        whenToMention:
          'If your baby rarely or never looks up when you say their name in a quiet room, bring it up at your next well-child visit.',
        whenToCallNow:
          'If your baby does not respond to their name and also does not seem to react to sounds around them, contact your pediatrician — a hearing check may be helpful.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-responding-to-name',
          'hearing-concerns',
          'autism-concerns',
        ],
      },
      {
        id: 'lang-9-understands-no',
        name: 'Understands "No"',
        plainDescription:
          'Your baby pauses or reacts when you say "no," even if they do not always obey.',
        whatItLooksLike:
          'When you say "no" firmly, baby may pause, look at you, or briefly stop what they are doing. They might then go right back to it — they understand the word but are not yet able to consistently stop themselves.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Understanding "no" does not mean obeying every time. At 9 months, it is enough that your baby shows some reaction — pausing, looking at you, or even smiling mischievously.',
        whenToMention:
          'If your baby shows no reaction at all to "no" or other familiar words by 10-11 months, let your doctor know.',
        whenToCallNow:
          'If your baby does not seem to hear or respond to any sounds, call your pediatrician for a hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-understanding-words',
          'hearing-concerns',
          'not-responding-to-name',
        ],
      },
    ],
    socialEmotional: [
      {
        id: 'se-9-stranger-anxiety',
        name: 'Stranger Anxiety',
        plainDescription:
          'Your baby may become clingy, fussy, or cry when unfamiliar people approach or try to hold them.',
        whatItLooksLike:
          'Baby clings to you, buries their face, or cries when a stranger (or even a relative they do not see often) comes close. They may be fine once they warm up, or they may want to stay close to you the whole time.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 12,
          concernThresholdMonths: 14,
        },
        whenNormal:
          'Stranger anxiety is a healthy, normal sign that your baby knows the difference between familiar and unfamiliar people. It usually peaks around 9-12 months and gradually fades. It does not mean your baby is "spoiled" or that something is wrong.',
        whenToMention:
          'If your baby shows no preference for you or familiar caregivers — seeming equally comfortable with anyone — mention it at a visit. Some social wariness is actually a good sign.',
        whenToCallNow:
          'If your baby does not seem to recognize you at all or shows no attachment to any caregiver, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Social-Emotional Milestones, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-attachment', 'autism-concerns'],
      },
      {
        id: 'se-9-looks-when-you-point',
        name: 'Looks Where You Point',
        plainDescription:
          'When you point at something, your baby follows your finger and looks at what you are pointing to.',
        whatItLooksLike:
          'You point at a dog across the room and say "Look!" and your baby turns to look at the dog instead of just staring at your hand. This ability to follow someone else\'s attention is an important social milestone.',
        typicalRange: {
          earlyMonths: 7,
          averageMonths: 9,
          lateNormalMonths: 11,
          concernThresholdMonths: 13,
        },
        whenNormal:
          'Following a point is a big deal — it means your baby understands that you are trying to show them something. It develops gradually, and some babies take a few more months to get it consistently.',
        whenToMention:
          'If your baby never follows your point or gaze by 12 months, mention it at your next visit.',
        whenToCallNow:
          'If your baby does not make eye contact, does not look at your face, and does not respond to social interaction, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Milestone Checklist, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-pointing',
          'not-following-gaze',
          'autism-concerns',
        ],
      },
      {
        id: 'se-9-interactive-games',
        name: 'Enjoys Interactive Games',
        plainDescription:
          'Your baby enjoys back-and-forth games like peekaboo, pat-a-cake, or being gently bounced.',
        whatItLooksLike:
          'Baby laughs, smiles, or squeals during peekaboo. They might try to pull a cloth off your face or put their hands up in anticipation. They clearly enjoy the social back-and-forth.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Enjoying interactive games is a wonderful sign that your baby is connecting with you and learning about taking turns, which is the foundation of conversation.',
        whenToMention:
          'If your baby seems uninterested in any back-and-forth social play by 10-11 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby rarely smiles, does not make eye contact, and shows no interest in social interaction, call your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Social-Emotional Milestones, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-social-engagement', 'autism-concerns'],
      },
    ],
    cognitive: [
      {
        id: 'cog-9-object-permanence',
        name: 'Object Permanence',
        plainDescription:
          'Your baby knows that something still exists even when they cannot see it, and will look for hidden toys.',
        whatItLooksLike:
          'You hide a toy under a blanket and your baby pulls the blanket off to find it. They know it did not just vanish — it is still there, just out of sight.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'Finding hidden toys is a sign of growing memory and understanding. Your baby is learning that the world continues even when things are out of view — this is also why peekaboo is so exciting for them.',
        whenToMention:
          'If your baby does not look for a toy you hide right in front of them by 10-11 months, bring it up at your next visit.',
        whenToCallNow:
          'If your baby shows no interest in objects at all — does not reach for, look at, or interact with toys — call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Cognitive Milestones, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay', 'not-exploring-toys'],
      },
      {
        id: 'cog-9-cause-and-effect',
        name: 'Exploring Cause and Effect',
        plainDescription:
          'Your baby does things on purpose to see what happens, like dropping food off the highchair or pressing buttons on a toy.',
        whatItLooksLike:
          'Baby drops a spoon off the highchair and watches it fall, then looks at you expectantly. They press a button on a toy to make it light up or play music, then press it again. They are experimenting and learning.',
        typicalRange: {
          earlyMonths: 6,
          averageMonths: 8,
          lateNormalMonths: 10,
          concernThresholdMonths: 12,
        },
        whenNormal:
          'When your baby drops things over and over, it can feel frustrating, but it means their brain is working hard. They are learning that their actions have results — a huge cognitive step.',
        whenToMention:
          'If your baby does not seem curious about how things work — never bangs, shakes, or explores toys — mention it at your next visit.',
        whenToCallNow:
          'If your baby is very passive, does not interact with objects, and does not respond to interesting sights or sounds, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." — Cognitive Milestones, 9 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay', 'not-exploring-toys'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not bear weight on legs when held in standing position',
      action: 'Mention to your pediatrician at the next visit.',
    },
    {
      description: 'Does not sit with help or support',
      action: 'Call your pediatrician to discuss.',
    },
    {
      description: 'Does not babble — no "mama," "baba," "dada" sounds',
      action: 'Call your pediatrician. A hearing evaluation may be recommended.',
    },
    {
      description: 'Does not respond to own name in a quiet setting',
      action:
        'Bring this up with your pediatrician. It is worth checking hearing and development.',
    },
    {
      description: 'Does not recognize familiar people or seem to know caregivers',
      action: 'Call your pediatrician to discuss.',
    },
    {
      description:
        'Does not look where you point or follow your gaze',
      action: 'Mention to your pediatrician at the next visit.',
    },
    {
      description: 'Has lost skills they once had (rolling, sitting, babbling)',
      action:
        'Call your pediatrician right away. Loss of skills always warrants prompt evaluation.',
    },
  ],
  notes:
    'Every baby develops at their own pace, and there is a wide range of normal. At 9 months, your baby is going through enormous changes — learning to move, communicate, and understand the world. Some babies are early movers but late talkers, or vice versa. What matters most is that your baby is making steady progress over time, not that they hit every milestone on a specific date. If something feels off to you as a parent, trust your instincts and talk to your pediatrician. You know your baby best, and asking questions is always the right thing to do.',
};
