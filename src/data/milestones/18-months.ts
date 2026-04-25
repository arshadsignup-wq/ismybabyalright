import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '18-months',
  label: '18 Months',
  ageInMonths: 18,
  categories: {
    grossMotor: [
      {
        id: 'gm-18-walks-well',
        name: 'Walking Confidently',
        plainDescription:
          'Your toddler walks steadily without falling much and can start and stop on their own.',
        whatItLooksLike:
          'Your child walks across the room without holding onto anything, navigates around furniture, and rarely falls. Their gait is still wide and their arms may still be held up for balance, but walking is now their primary way of getting around.',
        typicalRange: {
          earlyMonths: 11,
          averageMonths: 14,
          lateNormalMonths: 17,
          concernThresholdMonths: 19,
        },
        whenNormal:
          'By 18 months, most toddlers are walking on their own. Walking is still new for many of them, so wobbling and occasional falls are expected. Confidence builds over the next few months.',
        whenToMention:
          'If your child is not walking independently by 18 months, bring it up with your pediatrician. An evaluation may be recommended.',
        whenToCallNow:
          'If your child was walking and has stopped, walks only on their toes persistently, or has a very uneven gait (always favoring one side), call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Walking alone  -  upper limit of normal window is 17.6 months',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-walking', 'toe-walking', 'balance-concerns'],
      },
      {
        id: 'gm-18-running-attempts',
        name: 'Running (or Trying To)',
        plainDescription:
          'Your toddler tries to run, though it may look more like fast, stiff walking.',
        whatItLooksLike:
          'Your child walks faster and faster until it turns into a kind of run  -  stiff-legged, arms out for balance, not very coordinated. They may fall when they try to stop. It is a run in their mind even if it looks like an enthusiastic toddle.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 20,
          concernThresholdMonths: 24,
        },
        whenNormal:
          'Not all 18-month-olds can run, and that is perfectly fine. Running develops after confident walking is established. If your child is still getting steady on their feet, running will come in time.',
        whenToMention:
          'If your child cannot walk quickly or attempt to run by 20-21 months, mention it at your next visit.',
        whenToCallNow:
          'If your child seems to have difficulty with all movement or has lost motor abilities they once had, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Motor Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-walking', 'motor-delay', 'balance-concerns'],
      },
      {
        id: 'gm-18-climbing',
        name: 'Climbing on Furniture',
        plainDescription:
          'Your toddler climbs onto chairs, couches, or up small stairs (with help).',
        whatItLooksLike:
          'Your child pulls themselves onto the couch, climbs up onto a chair, or crawls up stairs on hands and knees. They are fearless explorers, which can be nerve-wracking for parents but is developmentally healthy.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 16,
          lateNormalMonths: 19,
          concernThresholdMonths: 22,
        },
        whenNormal:
          'Climbing is a normal and healthy part of development. Your child is building strength, coordination, and spatial awareness. It is important to make sure their environment is safe for climbing rather than trying to prevent it entirely.',
        whenToMention:
          'If your child shows no interest in climbing or cannot navigate stairs on hands and knees by 20 months, mention it at your next visit.',
        whenToCallNow:
          'If your child seems to have significant difficulty with physical activities that other toddlers their age do easily, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Motor Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['motor-delay', 'low-muscle-tone'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-18-scribbling',
        name: 'Scribbling with a Crayon',
        plainDescription:
          'Your toddler holds a crayon and scribbles on paper (or anything else they can reach).',
        whatItLooksLike:
          'Your child grabs a crayon in their fist and makes back-and-forth marks on paper. The scribbles are random  -  big sweeping lines, dots, and zigzags. They may press hard or lightly and enjoy the process of making marks.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 16,
          lateNormalMonths: 19,
          concernThresholdMonths: 22,
        },
        whenNormal:
          'Scribbling is great for developing hand control and creativity. Do not worry about what the scribbles look like  -  the important thing is that your child is making intentional marks with a tool.',
        whenToMention:
          'If your child shows no interest in crayons or markers and does not make any marks when given the chance by 20 months, mention it at your next visit.',
        whenToCallNow:
          'If your child cannot hold a crayon or other small objects, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Fine Motor Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay'],
      },
      {
        id: 'fm-18-stacking-three-four-blocks',
        name: 'Stacking 3-4 Blocks',
        plainDescription:
          'Your toddler carefully stacks three or four blocks into a tower.',
        whatItLooksLike:
          'Your child places blocks one on top of another, making a tower three or four blocks high before it topples. They may celebrate when it stands or enjoy knocking it down. They are much more deliberate than a few months ago.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 20,
          concernThresholdMonths: 23,
        },
        whenNormal:
          'Tower-building is improving quickly now. Your child is learning to control the release of each block and to place it carefully. Knocking the tower down is just as important  -  it teaches cause and effect.',
        whenToMention:
          'If your child cannot stack any blocks by 20-21 months, mention it at your next visit.',
        whenToCallNow:
          'If your child cannot pick up small objects or has lost the ability to manipulate toys, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Fine Motor Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'cognitive-delay'],
      },
      {
        id: 'fm-18-spoon-use',
        name: 'Using a Spoon (with Spilling)',
        plainDescription:
          'Your toddler tries to feed themselves with a spoon. It is messy but they are getting the idea.',
        whatItLooksLike:
          'Your child dips a spoon into a bowl and brings it to their mouth. A lot of food falls off along the way, and they may turn the spoon upside down before it reaches their mouth. It is a work in progress.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 16,
          lateNormalMonths: 20,
          concernThresholdMonths: 24,
        },
        whenNormal:
          'Spoon-feeding is a complex skill that takes many months to master. At 18 months, most of the food will end up on your child, the floor, or the dog. That is all part of the learning process.',
        whenToMention:
          'If your child shows no interest in trying to use a spoon or fork by 20-21 months, mention it at your next visit.',
        whenToCallNow:
          'If your child cannot bring food to their mouth at all (even with fingers), contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['fine-motor-delay', 'feeding-difficulties'],
      },
    ],
    language: [
      {
        id: 'lang-18-ten-to-twenty-words',
        name: 'Using 10 to 20 Words',
        plainDescription:
          'Your toddler uses somewhere between 10 and 20 words, though they may not all be perfectly clear to everyone.',
        whatItLooksLike:
          'Your child has a growing vocabulary of words they use regularly. These might include names (mama, dada, the dog\'s name), objects (ball, cup, shoe), actions (up, more, go), and social words (hi, bye, no). They count even if only you can understand them.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 17,
          lateNormalMonths: 20,
          concernThresholdMonths: 22,
        },
        whenNormal:
          'There is huge variation in vocabulary size at 18 months. Some toddlers say 50 words, while others say 10  -  both can be normal. The 18-month visit includes a developmental screening that will help assess whether your child\'s language is on track.',
        whenToMention:
          'If your child uses fewer than 5-6 words by 18 months, mention it at your well-child visit. Early intervention for language can be very effective.',
        whenToCallNow:
          'If your child has no words at all and does not try to communicate through gestures either, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Milestone Checklist, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Child Development Guidelines  -  Language milestones at 18 months',
            url: 'https://www.who.int/tools/child-growth-standards',
          },
        ],
        relatedConcerns: ['not-talking', 'late-talker', 'language-delay'],
      },
      {
        id: 'lang-18-identifies-body-parts',
        name: 'Identifying Body Parts',
        plainDescription:
          'Your toddler can point to a few body parts when you ask, like their nose, eyes, tummy, or toes.',
        whatItLooksLike:
          'You ask "Where is your nose?" and your child points to their nose  -  or yours. They may know 2-5 body parts. They might also enjoy "head, shoulders, knees, and toes" games.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 20,
          concernThresholdMonths: 23,
        },
        whenNormal:
          'Identifying body parts shows that your child understands specific words and can connect them to real things. It is a fun, easy skill to practice during bath time or diaper changes.',
        whenToMention:
          'If your child cannot point to any body parts by 20-21 months, mention it at your next visit.',
        whenToCallNow:
          'If your child does not seem to understand any words you say, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Language Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'not-understanding-words',
          'language-delay',
          'cognitive-delay',
        ],
      },
      {
        id: 'lang-18-tries-to-say-new-words',
        name: 'Trying to Say New Words',
        plainDescription:
          'Your toddler attempts to repeat words they hear you say, even if the result does not sound quite right.',
        whatItLooksLike:
          'You say "banana" and your child says "nana." You say "water" and they say "wawa." They are listening to new words and trying to reproduce them, which is how vocabulary grows.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 21,
          concernThresholdMonths: 24,
        },
        whenNormal:
          'Toddler pronunciation is supposed to be imperfect. Simplifying words ("nana" for banana, "goggy" for doggy) is a normal part of language development and will improve with time. You do not need to correct them  -  just model the right pronunciation naturally.',
        whenToMention:
          'If your child does not try to repeat or imitate words at all by 20-21 months, let your doctor know.',
        whenToCallNow:
          'If your child has stopped saying words they used to say, or is using fewer words over time instead of more, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Language Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-talking', 'late-talker', 'language-regression'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-18-parallel-play',
        name: 'Parallel Play',
        plainDescription:
          'Your toddler plays near other children but not really with them  -  they play side by side, each doing their own thing.',
        whatItLooksLike:
          'At a playgroup, your child sits next to another toddler. Both are playing with blocks, but they are building their own towers, not working together. They may watch each other and copy, but true cooperative play comes later.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 22,
          concernThresholdMonths: 26,
        },
        whenNormal:
          'Parallel play is completely appropriate at 18 months. Toddlers are not developmentally ready for true cooperative play yet. Playing beside another child, watching them, and occasionally imitating is exactly what they should be doing.',
        whenToMention:
          'If your child shows no interest in other children at all  -  does not watch them, does not want to be near them  -  mention it at your next visit.',
        whenToCallNow:
          'If your child actively avoids all other people (both children and adults), does not make eye contact, and does not engage socially, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'no-social-engagement',
          'autism-concerns',
          'social-delay',
        ],
      },
      {
        id: 'se-18-simple-pretend-play',
        name: 'Simple Pretend Play',
        plainDescription:
          'Your toddler pretends during play  -  feeding a doll, making a stuffed animal "walk," or pretending to cook.',
        whatItLooksLike:
          'Your child holds a toy phone to their ear and babbles, "feeds" a doll with a spoon, or puts a blanket over a teddy bear and says "night-night." These are early signs of imagination.',
        typicalRange: {
          earlyMonths: 14,
          averageMonths: 17,
          lateNormalMonths: 21,
          concernThresholdMonths: 24,
        },
        whenNormal:
          'Pretend play at 18 months is simple and imitative  -  your child acts out things they have seen you do. More elaborate imaginary play develops over the next year or two.',
        whenToMention:
          'If your child does not engage in any pretend play by 21-22 months, mention it at your next visit.',
        whenToCallNow:
          'If your child only lines up toys, spins objects, or does the exact same thing with toys over and over without any pretend element, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional and Cognitive Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'no-pretend-play',
          'autism-concerns',
          'cognitive-delay',
        ],
      },
      {
        id: 'se-18-saying-no',
        name: 'Expressing Independence ("No!")',
        plainDescription:
          'Your toddler says "no," shakes their head, pushes things away, or resists things they do not want to do.',
        whatItLooksLike:
          'Your child says "no!" when you try to put on their shoes, pushes away food they do not want, or shakes their head emphatically when you suggest something. They are asserting their will  -  loudly and frequently.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 16,
          lateNormalMonths: 19,
          concernThresholdMonths: 22,
        },
        whenNormal:
          'Saying "no" is a sign of healthy development, even though it can be exasperating. Your child is learning that they are a separate person with their own preferences. This is the beginning of independence.',
        whenToMention:
          'If your child never expresses preferences or resistance  -  always going along with whatever happens without reacting  -  mention it at your next visit.',
        whenToCallNow:
          'If your child is very passive, does not express wants or needs, and shows no reactions to what happens around them, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Social-Emotional Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-social-engagement', 'cognitive-delay'],
      },
    ],
    cognitive: [
      {
        id: 'cog-18-sorting-shapes',
        name: 'Sorting Shapes',
        plainDescription:
          'Your toddler can put a round shape into a round hole on a shape sorter  -  they might not get all the shapes right, but they understand the idea.',
        whatItLooksLike:
          'Your child picks up a circle shape and tries different holes on a shape sorter until it fits. They may get the circle right but struggle with squares and triangles. They understand that different shapes go in different places.',
        typicalRange: {
          earlyMonths: 15,
          averageMonths: 18,
          lateNormalMonths: 22,
          concernThresholdMonths: 26,
        },
        whenNormal:
          'Shape sorting requires understanding that shapes have different properties and that the shape needs to match the hole. Most 18-month-olds can manage the circle and maybe one other shape. Mastering all shapes comes later.',
        whenToMention:
          'If your child shows no interest in shape sorters or puzzles and does not try to match shapes by 22-23 months, mention it at your next visit.',
        whenToCallNow:
          'If your child does not seem to understand how everyday objects work and does not try to figure out simple problems, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay'],
      },
      {
        id: 'cog-18-pretend-with-objects',
        name: 'Using Objects as Something Else',
        plainDescription:
          'Your toddler starts to use one object to represent another  -  like using a block as a phone or a banana as a pretend telephone.',
        whatItLooksLike:
          'Your child holds a banana up to their ear and "talks" on it, or uses a block as a car and pushes it along saying "vroom." They are starting to understand that one thing can stand for another  -  the beginning of symbolic thinking.',
        typicalRange: {
          earlyMonths: 15,
          averageMonths: 18,
          lateNormalMonths: 22,
          concernThresholdMonths: 26,
        },
        whenNormal:
          'Symbolic pretend play is a huge cognitive leap. It shows your child can hold two ideas in mind at once: "this is a block" and "I am pretending it is a car." Not all 18-month-olds do this yet, and that is okay.',
        whenToMention:
          'If your child does not engage in any pretend play by 22-24 months, mention it at your next visit.',
        whenToCallNow:
          'If your child has rigid, repetitive play patterns and does not use objects in varied or imaginative ways, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: [
          'no-pretend-play',
          'autism-concerns',
          'cognitive-delay',
        ],
      },
      {
        id: 'cog-18-knows-what-objects-are-for',
        name: 'Knowing What Everyday Objects Are For',
        plainDescription:
          'Your toddler understands the purpose of familiar objects  -  a phone is for talking, a brush is for hair, a cup is for drinking.',
        whatItLooksLike:
          'Your child picks up a hairbrush and brushes their hair (or yours). They hold a cup to their mouth and pretend to drink. They put a hat on their head. They know what these objects do because they have watched you use them.',
        typicalRange: {
          earlyMonths: 13,
          averageMonths: 16,
          lateNormalMonths: 20,
          concernThresholdMonths: 23,
        },
        whenNormal:
          'Using objects correctly shows that your child is connecting what they observe with their own actions. Each time they use an object "the right way," they are demonstrating understanding of the world around them.',
        whenToMention:
          'If your child does not show understanding of how common objects are used by 20-21 months, bring it up at your next visit.',
        whenToCallNow:
          'If your child only mouths objects or uses them in repetitive, non-functional ways (like spinning everything), contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early."  -  Cognitive Milestones, 18 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['cognitive-delay', 'autism-concerns'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not walk independently',
      action:
        'Talk to your pediatrician. The CDC recommends evaluation if a child is not walking by 18 months.',
    },
    {
      description: 'Does not point to show you things',
      action:
        'Bring this up with your pediatrician. Lack of pointing by 18 months should be evaluated.',
    },
    {
      description: 'Uses fewer than 5 words',
      action:
        'Mention at your 18-month well-child visit. A developmental screening is recommended at this age.',
    },
    {
      description: 'Does not know what familiar objects are used for',
      action: 'Mention to your pediatrician at your next visit.',
    },
    {
      description: 'Does not copy or imitate others',
      action: 'Bring this up with your pediatrician.',
    },
    {
      description: 'Does not notice or react when a caregiver leaves or returns',
      action:
        'Mention to your pediatrician. This is relevant to both attachment and social development.',
    },
    {
      description: 'Does not gain new words or has lost words they used to say',
      action:
        'Call your pediatrician. Loss of language is always worth discussing promptly.',
    },
    {
      description: 'Does not engage in any pretend play',
      action: 'Mention to your pediatrician at your 18-month visit.',
    },
    {
      description: 'Has lost any skills they previously had (words, walking, social skills)',
      action:
        'Call your pediatrician right away. Loss of skills at any age should be evaluated promptly.',
    },
  ],
  notes:
    'The 18-month well-child visit is one of the most important checkups in early childhood. The CDC and the American Academy of Pediatrics recommend formal developmental and autism screening at 18 months. This is not because something is likely wrong  -  it is because early identification leads to early support, and early support leads to the best outcomes. If your pediatrician does not bring up screening, it is okay to ask for it. At 18 months, your toddler is a whirlwind of energy, curiosity, and big feelings. Tantrums are normal. Saying "no" to everything is normal. Wanting to do things themselves is normal. Your child is becoming an independent person, and that process is messy and loud and wonderful. If you have concerns about your child\'s development, trust yourself. Parents notice things early, and early action is always better than waiting and worrying. Early intervention services are available in every state and are often free or low-cost  -  ask your pediatrician about your options.',
};
