import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '24-months',
  label: '24 Months (2 Years)',
  ageInMonths: 24,
  categories: {
    grossMotor: [
      {
        id: 'gm-24-kick-ball',
        name: 'Kicks a Ball',
        plainDescription: 'Your toddler can kick a ball forward without losing their balance.',
        whatItLooksLike:
          'They walk up to a ball on the ground and swing their foot to kick it. It might not go far, but they stay upright and clearly meant to do it.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Some kids figure out kicking as early as 18 months, but lots of two-year-olds are still working on it. If your child loves running but hasn\'t tried kicking yet, that\'s perfectly fine.',
        whenToMention:
          'If by 28-30 months your toddler can\'t kick a ball forward or seems very unsteady on one foot, it\'s worth mentioning at the next visit.',
        whenToCallNow:
          'If your child has lost the ability to walk or stand, or if one leg consistently seems weaker or stiffer than the other, call your pediatrician soon.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Motor Development Study',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['balance', 'leg-strength', 'coordination'],
      },
      {
        id: 'gm-24-run',
        name: 'Runs',
        plainDescription: 'Your toddler can run, even if it looks a little wobbly.',
        whatItLooksLike:
          'They move faster than a walk, with both feet briefly off the ground. It\'s often a cute, stiff-legged trot at first, and that\'s completely normal.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 22,
          lateNormalMonths: 26,
          concernThresholdMonths: 28,
        },
        whenNormal:
          'Many toddlers start running between 18 and 24 months. Some cautious kids take a little longer, especially if they only recently started walking confidently.',
        whenToMention:
          'If your child isn\'t attempting to run by 26-28 months, or always falls when trying, mention it at your next well-child visit.',
        whenToCallNow:
          'If your child was running and has suddenly stopped, or has new difficulty with walking, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['walking', 'balance', 'muscle-tone'],
      },
      {
        id: 'gm-24-jump',
        name: 'Jumps with Both Feet',
        plainDescription:
          'Your toddler can jump up with both feet leaving the ground at the same time.',
        whatItLooksLike:
          'They bend their knees and launch upward. Both feet leave the floor, even if only by a tiny bit. Landing might be a little clumsy.',
        typicalRange: {
          earlyMonths: 20,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Jumping is a big coordination feat! Many kids don\'t truly get both feet off the ground until closer to their second birthday, and some perfectly healthy kids take until 28 months.',
        whenToMention:
          'If your child can\'t jump with both feet by 30 months, or seems unable to bend their knees to try, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child is losing the ability to stand, squat, or bear weight on their legs, call your doctor right away.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['leg-strength', 'coordination', 'balance'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-24-stack-blocks',
        name: 'Stacks 4+ Blocks',
        plainDescription: 'Your toddler can stack at least four blocks on top of each other.',
        whatItLooksLike:
          'They carefully place one block on top of another, building a little tower of four or more before it topples. They might also love knocking it down.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 22,
          lateNormalMonths: 26,
          concernThresholdMonths: 28,
        },
        whenNormal:
          'Block stacking improves steadily from about 18 months. Some kids can stack 6+ by age 2, while others are still perfecting a tower of 4. Both are fine.',
        whenToMention:
          'If your child can\'t stack at least 4 blocks by about 28 months, or doesn\'t seem interested in building at all, mention it at your next visit.',
        whenToCallNow:
          'If your child has lost the ability to grasp objects or you notice one hand is much weaker than the other, call your pediatrician soon.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['hand-eye-coordination', 'fine-motor-control', 'grip-strength'],
      },
      {
        id: 'fm-24-turn-pages',
        name: 'Turns Book Pages',
        plainDescription: 'Your toddler can turn the pages of a book one at a time.',
        whatItLooksLike:
          'They use their fingers to flip individual pages in a board book or picture book, rather than grabbing clumps of pages.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Turning single pages takes practice. Many 2-year-olds are just getting the hang of it with regular paper. Board-book pages are easier and most kids manage those earlier.',
        whenToMention:
          'If by 30 months your toddler can\'t turn pages one at a time or has difficulty using their fingers to manipulate small objects, bring it up with your doctor.',
        whenToCallNow:
          'If your child has lost the ability to pick up small objects or their hands seem unusually stiff or floppy, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['finger-dexterity', 'pincer-grasp', 'hand-coordination'],
      },
      {
        id: 'fm-24-scribble',
        name: 'Scribbles with Purpose',
        plainDescription:
          'Your toddler holds a crayon or marker and scribbles on paper deliberately.',
        whatItLooksLike:
          'They grip a crayon (often in a fist) and make marks on paper intentionally. They might try to imitate lines or circles you draw.',
        typicalRange: {
          earlyMonths: 15,
          averageMonths: 21,
          lateNormalMonths: 26,
          concernThresholdMonths: 28,
        },
        whenNormal:
          'Most toddlers love scribbling by around 18-24 months. The grip is usually a whole-fist grip at this age, and that\'s perfectly normal -- a pencil grip develops later.',
        whenToMention:
          'If your child shows no interest in making marks with crayons or markers by 28 months, or can\'t hold a crayon at all, mention it at your next checkup.',
        whenToCallNow:
          'If your child was drawing and has lost the ability to hold objects, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['grip', 'hand-eye-coordination', 'interest-in-play'],
      },
    ],
    language: [
      {
        id: 'lang-24-two-word-phrases',
        name: 'Uses 2-Word Phrases',
        plainDescription:
          'Your toddler puts two words together to communicate, like "more milk" or "daddy go."',
        whatItLooksLike:
          'They combine two words that make sense together: "want up," "big dog," "mama bye." These aren\'t memorized chunks -- they\'re creating new combinations.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 22,
          lateNormalMonths: 27,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Two-word phrases are a huge language leap! Some chatty toddlers do this before 2, while others need a few more months. Both timelines are within the range of normal.',
        whenToMention:
          'If by 27-30 months your child isn\'t putting any two words together, talk to your pediatrician. Early speech support can make a big difference.',
        whenToCallNow:
          'If your child was using words and has stopped talking, or doesn\'t seem to understand simple instructions, call your doctor soon.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Child Development: Communication',
            url: 'https://www.who.int/news-room/fact-sheets/detail/early-child-development',
          },
        ],
        relatedConcerns: ['speech-delay', 'vocabulary', 'hearing'],
      },
      {
        id: 'lang-24-50-words',
        name: 'Says 50+ Words',
        plainDescription: 'Your toddler has a vocabulary of about 50 or more words.',
        whatItLooksLike:
          'They can name familiar objects, people, and actions. You might notice new words popping up almost daily. Words don\'t need to be perfectly pronounced to count.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Vocabulary explodes around the second birthday. Some kids say 50 words by 20 months, others reach that number closer to 28 months. Pronunciation is often rough at this stage, and that\'s expected.',
        whenToMention:
          'If your child uses fewer than 50 words by 28-30 months, or if you\'re the only one who can understand them, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child has lost words they used to say, or seems to have stopped trying to communicate, contact your doctor promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['speech-delay', 'vocabulary', 'hearing', 'language-regression'],
      },
      {
        id: 'lang-24-points-to-body-parts',
        name: 'Points to Body Parts When Named',
        plainDescription:
          'When you ask "where\'s your nose?" your toddler can point to the correct body part.',
        whatItLooksLike:
          'You say a body part name, and they touch or point to it on their own body (or yours). Most 2-year-olds can identify at least 5-6 body parts.',
        typicalRange: {
          earlyMonths: 15,
          averageMonths: 21,
          lateNormalMonths: 26,
          concernThresholdMonths: 28,
        },
        whenNormal:
          'Many kids start identifying body parts around 15-18 months and keep adding more. By 2 years, most know at least a handful. This is as much about understanding language as it is about body awareness.',
        whenToMention:
          'If by 28 months your child can\'t point to at least a few body parts when asked, mention it at the next checkup. It might suggest a need to check hearing or receptive language.',
        whenToCallNow:
          'If your child doesn\'t seem to understand any words or simple instructions at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['receptive-language', 'hearing', 'body-awareness'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-24-pretend-play',
        name: 'Pretend Play',
        plainDescription:
          'Your toddler engages in simple pretend play, like feeding a doll or talking on a toy phone.',
        whatItLooksLike:
          'They pretend to feed a stuffed animal, "cook" in a play kitchen, or hold a banana to their ear like a phone. They\'re using their imagination to make one thing stand for another.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Pretend play usually starts simply around 18-24 months. Some kids dive right in, while others are more interested in physical play. Both styles are normal.',
        whenToMention:
          'If by 30 months your child never engages in any kind of pretend play, or only lines up or sorts toys without imaginative use, mention it to your pediatrician.',
        whenToCallNow:
          'If your child has lost interest in all play, seems withdrawn, or has stopped interacting with people, call your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['imaginative-play', 'social-engagement', 'autism-screening'],
      },
      {
        id: 'se-24-tantrums',
        name: 'Tantrums and Big Emotions',
        plainDescription:
          'Tantrums are a normal part of being two. Your toddler has big feelings and very few tools to manage them.',
        whatItLooksLike:
          'Crying, screaming, throwing themselves on the floor, saying "no!" to everything. These are signs of a developing brain, not a behavior problem.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 36,
          concernThresholdMonths: 48,
        },
        whenNormal:
          'Tantrums peak around age 2-3 and are completely, utterly normal. Your child\'s prefrontal cortex (the part of the brain that manages emotions) won\'t be fully developed for years. This is hard, but it\'s not a problem.',
        whenToMention:
          'If tantrums are extremely frequent (more than 10-20 per day), last more than 25 minutes regularly, or involve self-harm like head-banging, mention it to your pediatrician.',
        whenToCallNow:
          'If your child is injuring themselves during tantrums or you are feeling overwhelmed to the point where you worry about your own responses, please reach out to your pediatrician or a helpline.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Positive Parenting Tips: Toddlers',
            url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
          },
        ],
        relatedConcerns: ['emotional-regulation', 'behavior', 'self-harm'],
      },
      {
        id: 'se-24-notices-others-emotions',
        name: 'Notices Others\' Emotions',
        plainDescription:
          'Your toddler notices when someone is upset and may try to comfort them.',
        whatItLooksLike:
          'If another child cries, your toddler might look concerned, bring them a toy, or pat their back. They might also get upset when you\'re upset.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Early empathy starts around 18-24 months. It\'s simple at first -- they might just stare when someone cries. Active comforting behavior develops gradually.',
        whenToMention:
          'If by 30 months your child never seems to notice or react to other people\'s emotions, or doesn\'t seem interested in other children at all, mention it to your doctor.',
        whenToCallNow:
          'If your child seems completely disconnected from others -- no eye contact, no response to your voice, no interest in people -- contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['empathy', 'social-engagement', 'autism-screening'],
      },
    ],
    cognitive: [
      {
        id: 'cog-24-sorting',
        name: 'Sorts Shapes and Colors',
        plainDescription:
          'Your toddler can sort objects by shape or color -- like putting all the circles together.',
        whatItLooksLike:
          'They match shapes into a shape sorter, group similar colored blocks, or put the big spoons with big spoons and little spoons with little spoons.',
        typicalRange: {
          earlyMonths: 20,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Sorting emerges around 20-24 months. Some kids naturally love organizing, while others prefer creative chaos. As long as they can do it when shown, both approaches are fine.',
        whenToMention:
          'If by 30 months your child can\'t sort objects by at least one category (shape, size, or color) even with help, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child seems unable to understand simple cause-and-effect or can\'t figure out basic toys, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['categorization', 'problem-solving', 'cognitive-development'],
      },
      {
        id: 'cog-24-simple-instructions',
        name: 'Follows Simple 2-Step Instructions',
        plainDescription:
          'Your toddler can follow a two-step instruction like "Pick up the ball and bring it to me."',
        whatItLooksLike:
          'You give two connected instructions, and they carry out both in order. They might need a moment to process, but they get the gist.',
        typicalRange: {
          earlyMonths: 20,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'Two-step instructions are tricky! Many 2-year-olds handle them well, while some still do better with one instruction at a time. That\'s perfectly OK.',
        whenToMention:
          'If by 30 months your child can\'t follow even single-step instructions ("Give me the cup"), talk to your pediatrician, especially if hearing hasn\'t been checked recently.',
        whenToCallNow:
          'If your child doesn\'t seem to understand any spoken words or has stopped responding to their name, contact your doctor promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['receptive-language', 'hearing', 'attention'],
      },
      {
        id: 'cog-24-complete-sentences-in-books',
        name: 'Completes Familiar Sentences in Books',
        plainDescription:
          'When you read a favorite book, your toddler fills in words or phrases they know are coming.',
        whatItLooksLike:
          'You pause before a familiar word in a well-loved book, and they shout it out: "Goodnight ___" → "MOON!" They might also "read" along with you.',
        typicalRange: {
          earlyMonths: 20,
          averageMonths: 24,
          lateNormalMonths: 28,
          concernThresholdMonths: 30,
        },
        whenNormal:
          'This is a memory and language skill rolled into one. It shows up when kids have heard the same books over and over -- which is exactly what they need at this age.',
        whenToMention:
          'If your child shows no interest in books at all by 30 months, or can\'t participate in reading in any way, mention it at your next visit.',
        whenToCallNow:
          'If your child has lost language skills they previously had, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 2 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
          },
        ],
        relatedConcerns: ['memory', 'language-development', 'book-interest'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not use 2-word phrases (like "drink milk" or "go car")',
      action: 'Talk to your pediatrician at the next visit. A speech evaluation may help.',
    },
    {
      description: 'Does not know what to do with common objects (brush, phone, spoon)',
      action: 'Mention this to your pediatrician. It could suggest a need for further evaluation.',
    },
    {
      description: 'Does not copy actions or words',
      action: 'Discuss with your pediatrician. Imitation is a key building block for learning.',
    },
    {
      description: 'Does not follow simple instructions',
      action:
        'Talk to your doctor, especially if hearing hasn\'t been checked. A hearing test is a good first step.',
    },
    {
      description: 'Does not walk steadily',
      action: 'Contact your pediatrician for a motor development evaluation.',
    },
    {
      description: 'Loses skills they once had',
      action:
        'This is always worth a prompt call to your doctor. Losing skills can sometimes signal a condition that benefits from early intervention.',
    },
  ],
  notes:
    'The "terrible twos" are actually a sign of healthy development. Your child is learning independence, testing boundaries, and feeling big emotions in a small body. Tantrums, saying "no," and wanting to do everything themselves are all completely normal. This is hard, but you\'re doing great.',
};
