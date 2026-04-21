import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '30-months',
  label: '30 Months (2.5 Years)',
  ageInMonths: 30,
  categories: {
    grossMotor: [
      {
        id: 'gm-30-jump-forward',
        name: 'Jumps Forward',
        plainDescription:
          'Your toddler can jump forward with both feet, not just straight up.',
        whatItLooksLike:
          'They bend their knees and leap forward, landing on both feet. It might only be a few inches, but the forward motion is intentional.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 34,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Forward jumping is harder than jumping in place. Most kids figure it out between 24 and 30 months, but some need a bit more time. Lots of practice (and soft landing spots) helps.',
        whenToMention:
          'If by 34-36 months your child can\'t jump forward at all, or still can\'t jump with both feet leaving the ground, mention it to your pediatrician.',
        whenToCallNow:
          'If your child has lost the ability to jump or is having new difficulty with walking or balance, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['balance', 'coordination', 'leg-strength'],
      },
      {
        id: 'gm-30-climb',
        name: 'Climbs on Playground Structures',
        plainDescription:
          'Your toddler can climb up playground ladders or steps with support.',
        whatItLooksLike:
          'They use both hands and feet to climb up short ladders, low climbing walls, or playground steps. They may still need a hand for confidence on taller structures.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 28,
          lateNormalMonths: 32,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Climbing develops steadily from around 2 years. Cautious children may take longer, and that\'s fine -- temperament plays a big role in how eagerly kids tackle climbing.',
        whenToMention:
          'If by 36 months your child can\'t climb stairs using alternating feet (even with a railing), mention it at your next checkup.',
        whenToCallNow:
          'If your child has suddenly become unable to climb or shows new weakness in their arms or legs, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['upper-body-strength', 'coordination', 'confidence'],
      },
      {
        id: 'gm-30-stands-on-tiptoes',
        name: 'Stands on Tiptoes',
        plainDescription: 'Your toddler can stand up on their tiptoes for a few seconds.',
        whatItLooksLike:
          'They rise up on the balls of their feet, often to reach something on a counter or shelf. They might hold the position for a few seconds before coming back down.',
        typicalRange: {
          earlyMonths: 22,
          averageMonths: 28,
          lateNormalMonths: 32,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Standing on tiptoes requires good balance and ankle strength. Most toddlers can do this by 30 months. Some love walking on tiptoes, which is also usually normal at this age.',
        whenToMention:
          'If your child ONLY walks on tiptoes and never puts their heels down, mention it to your pediatrician, as persistent toe-walking after 2 can sometimes warrant evaluation.',
        whenToCallNow:
          'If your child is unable to put their heels on the ground or their calves seem very tight, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['toe-walking', 'balance', 'ankle-strength'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-30-draw-lines',
        name: 'Draws Lines and Circles',
        plainDescription:
          'Your toddler can copy simple lines and attempt to draw a circle.',
        whatItLooksLike:
          'When you draw a straight line, they can imitate it. They might also try to draw a circle -- it won\'t be perfect (more of a wobbly oval), and that\'s just right for this age.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 34,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Drawing develops from scribbles to intentional shapes. By 30 months most kids can make a recognizable vertical line and attempt a circle. Perfection is absolutely not expected.',
        whenToMention:
          'If by 36 months your child still only scribbles and can\'t imitate a line or circle at all, bring it up with your doctor.',
        whenToCallNow:
          'If your child has lost the ability to hold a crayon or use their hands for activities they used to do, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['fine-motor-control', 'hand-eye-coordination', 'pre-writing'],
      },
      {
        id: 'fm-30-unscrew-lids',
        name: 'Unscrews Lids',
        plainDescription: 'Your toddler can twist lids off jars and bottles.',
        whatItLooksLike:
          'They grip a jar or bottle with one hand and twist the lid with the other. They love this newfound power -- you may need to childproof more containers!',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 28,
          lateNormalMonths: 32,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Twisting motions develop between 24 and 30 months. This requires both hand strength and the coordination to rotate the wrist -- a surprisingly complex skill.',
        whenToMention:
          'If by 36 months your child can\'t twist or turn objects, or seems to have difficulty using both hands together, mention it to your pediatrician.',
        whenToCallNow:
          'If your child has new difficulty using their hands or has lost the ability to grip objects, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['wrist-rotation', 'grip-strength', 'bilateral-coordination'],
      },
      {
        id: 'fm-30-string-beads',
        name: 'Strings Large Beads',
        plainDescription: 'Your toddler can thread large beads onto a string or lace.',
        whatItLooksLike:
          'They hold a stiff lace or string in one hand and guide it through the hole of a large bead with the other. It takes concentration, and they might only get a few on before losing interest.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 34,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Bead-stringing is excellent practice for hand-eye coordination. Most kids can manage large beads (1-inch or bigger) by 30 months. Smaller beads come later.',
        whenToMention:
          'If by 36 months your child can\'t thread large beads or has difficulty with any tasks requiring hand-eye coordination, bring it up at your next visit.',
        whenToCallNow:
          'If your child has lost fine motor skills or you notice tremors or unusual hand movements, call your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Child Development Fact Sheet',
            url: 'https://www.who.int/news-room/fact-sheets/detail/early-child-development',
          },
        ],
        relatedConcerns: ['hand-eye-coordination', 'fine-motor-control', 'concentration'],
      },
    ],
    language: [
      {
        id: 'lang-30-short-sentences',
        name: 'Uses Short Sentences',
        plainDescription:
          'Your toddler speaks in short sentences of about 2-4 words.',
        whatItLooksLike:
          'They say things like "I want juice," "Daddy go work," or "Where kitty go?" The grammar won\'t be perfect, and that\'s completely expected.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 28,
          lateNormalMonths: 33,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Sentence length grows rapidly between 2 and 3 years. At 30 months, 2-3 word sentences are typical. Lots of grammatical "mistakes" (like "me go" instead of "I want to go") are a normal part of learning.',
        whenToMention:
          'If by 33-36 months your child is still mostly using single words, or if you can\'t understand at least half of what they say, talk to your pediatrician about a speech evaluation.',
        whenToCallNow:
          'If your child has stopped using words they previously used, or seems unable to communicate basic needs, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['speech-delay', 'expressive-language', 'grammar-development'],
      },
      {
        id: 'lang-30-names-objects',
        name: 'Names Things in Books',
        plainDescription:
          'Your toddler can name objects when they see pictures of them in books.',
        whatItLooksLike:
          'While reading together, they point at pictures and say what they are: "dog," "tree," "car." They might also ask "what\'s that?" constantly -- which is wonderful (even if exhausting).',
        typicalRange: {
          earlyMonths: 22,
          averageMonths: 28,
          lateNormalMonths: 33,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Naming things in pictures shows that your child understands the connection between a 2D image and the real world. This develops alongside their growing vocabulary.',
        whenToMention:
          'If by 36 months your child can\'t name at least a few familiar objects in pictures, or shows no interest in looking at books, mention it to your doctor.',
        whenToCallNow:
          'If your child has lost the ability to name things they previously could, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['vocabulary', 'picture-recognition', 'expressive-language'],
      },
      {
        id: 'lang-30-200-words',
        name: 'Uses 200+ Words',
        plainDescription: 'Your toddler\'s vocabulary has grown to around 200 or more words.',
        whatItLooksLike:
          'They have words for all sorts of things -- animals, foods, people, actions, descriptions. They might start using words like "big," "hot," "mine," and "more."',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 34,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Vocabulary grows explosively between 2 and 3. At 30 months, 200+ words is typical, but there\'s a wide range of normal. Kids who understand lots of words but say fewer are often catching up quickly.',
        whenToMention:
          'If by 34-36 months your child uses fewer than 100 words, or if their vocabulary doesn\'t seem to be growing, talk to your pediatrician.',
        whenToCallNow:
          'If your child is losing words or has stopped trying to communicate, contact your doctor promptly.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Child Development: Communication',
            url: 'https://www.who.int/news-room/fact-sheets/detail/early-child-development',
          },
        ],
        relatedConcerns: ['vocabulary', 'speech-delay', 'hearing'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-30-parallel-play',
        name: 'Plays Next to Other Children',
        plainDescription:
          'Your toddler plays alongside other children, even if they\'re not quite playing together yet.',
        whatItLooksLike:
          'Two kids might sit side by side in a sandbox, each doing their own thing but clearly aware of each other. They might watch, copy, or briefly interact before going back to their own play.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 28,
          lateNormalMonths: 33,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'This is called "parallel play" and it\'s a totally normal and important stage. True cooperative play (playing together with shared goals) doesn\'t really emerge until closer to 3-4 years.',
        whenToMention:
          'If by 36 months your child shows no interest in other children at all, or actively avoids being near peers, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child seems completely unaware of other people or has stopped making eye contact, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['social-skills', 'peer-interaction', 'autism-screening'],
      },
      {
        id: 'se-30-shows-defiance',
        name: 'Shows Defiant Behavior',
        plainDescription:
          'Your toddler says "no" a lot and resists what you ask them to do. This is normal.',
        whatItLooksLike:
          'They refuse to put on shoes, say "no" when you offer lunch, run the other way when you call them. They are learning they are a separate person with their own will.',
        typicalRange: {
          earlyMonths: 18,
          averageMonths: 27,
          lateNormalMonths: 36,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Defiance is actually a healthy sign of growing independence. It peaks around 2.5-3 years and gradually improves as language skills give them better tools to express what they want.',
        whenToMention:
          'If defiant behavior is so intense that it interferes with daily routines every single day, or if your child is aggressive (hitting, biting) most of the time, talk to your pediatrician.',
        whenToCallNow:
          'If you feel unsafe, or if your child is regularly harming themselves or others, please call your doctor or a crisis helpline.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Positive Parenting Tips: Toddlers',
            url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
          },
        ],
        relatedConcerns: ['behavior', 'emotional-regulation', 'independence'],
      },
      {
        id: 'se-30-routine-changes',
        name: 'Gets Upset with Routine Changes',
        plainDescription:
          'Your toddler may get very upset when routines change or things don\'t happen in the expected order.',
        whatItLooksLike:
          'Meltdowns when you take a different route to daycare, insistence on the same cup, or distress when bedtime steps happen out of order. They\'re building a mental map of how the world works.',
        typicalRange: {
          earlyMonths: 20,
          averageMonths: 28,
          lateNormalMonths: 36,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Rigidity about routines is very common at this age. It\'s how toddlers create a sense of safety and predictability. It usually eases as they develop more flexibility and language.',
        whenToMention:
          'If inflexibility is extreme -- your child is inconsolable for long periods over minor changes, or it significantly impacts family life -- mention it to your pediatrician.',
        whenToCallNow:
          'If routine rigidity is accompanied by other concerns like no eye contact, no pretend play, or loss of language, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['flexibility', 'emotional-regulation', 'autism-screening'],
      },
    ],
    cognitive: [
      {
        id: 'cog-30-names-colors',
        name: 'Begins to Name Colors',
        plainDescription:
          'Your toddler is starting to identify and name at least one or two colors.',
        whatItLooksLike:
          'They might say "red car" or correctly answer "what color is this?" for one or two colors. They\'ll mix up others, and that\'s expected.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 36,
          concernThresholdMonths: 40,
        },
        whenNormal:
          'Color naming develops gradually. Most kids learn 1-2 colors by 30 months and many more by 36 months. Knowing the concept of "color" is more important than naming all of them.',
        whenToMention:
          'If by 40 months your child can\'t name any colors at all, or doesn\'t seem to understand the concept of same/different colors, mention it at your next visit.',
        whenToCallNow:
          'If your child seems unable to see colors differently or has vision concerns, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['color-recognition', 'categorization', 'vision'],
      },
      {
        id: 'cog-30-pretend-sequences',
        name: 'Pretend Play with Sequences',
        plainDescription:
          'Your toddler\'s pretend play now involves a sequence of steps, not just single actions.',
        whatItLooksLike:
          'Instead of just feeding a doll, they might feed the doll, burp the doll, and put the doll to bed. They string pretend actions together into little stories.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 34,
          concernThresholdMonths: 36,
        },
        whenNormal:
          'Sequential pretend play is a sign of growing imagination and planning ability. It builds naturally from the simple pretend play that started around 18-24 months.',
        whenToMention:
          'If by 36 months your child doesn\'t engage in any pretend play, or only uses toys in repetitive, non-imaginative ways (like always lining them up), discuss it with your pediatrician.',
        whenToCallNow:
          'If your child has lost pretend play skills or shows significant regression in play abilities, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 30 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html',
          },
        ],
        relatedConcerns: ['imaginative-play', 'sequencing', 'cognitive-development'],
      },
      {
        id: 'cog-30-counts-to-three',
        name: 'Begins Counting',
        plainDescription:
          'Your toddler is starting to count, at least up to 2 or 3 items.',
        whatItLooksLike:
          'They might count "one, two, three!" while climbing steps or counting crackers. They might not always get the number right when counting objects, but they understand the idea.',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 30,
          lateNormalMonths: 36,
          concernThresholdMonths: 40,
        },
        whenNormal:
          'Early counting is partly memorization and partly understanding. At 30 months, most kids can recite "1, 2, 3" but may not accurately count objects. That\'s perfectly normal -- accurate one-to-one counting develops later.',
        whenToMention:
          'If by 40 months your child can\'t say any number words or shows no interest in counting games, mention it to your doctor.',
        whenToCallNow:
          'If your child has lost previously learned concepts or seems to be regressing cognitively, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['number-concepts', 'memory', 'cognitive-development'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not speak in sentences of at least 2 words',
      action:
        'Talk to your pediatrician about a speech-language evaluation. Early intervention for speech is very effective.',
    },
    {
      description: 'Does not know how to use everyday objects like a toothbrush or spoon',
      action: 'Mention this to your pediatrician at your next visit.',
    },
    {
      description: 'Does not copy actions or words',
      action:
        'Discuss with your pediatrician. Imitation is important for learning and social development.',
    },
    {
      description: 'Does not engage in any pretend play',
      action:
        'Bring this up with your doctor. Pretend play is an important developmental milestone by this age.',
    },
    {
      description: 'Cannot follow simple 2-step instructions',
      action:
        'Talk to your pediatrician. It may be helpful to have hearing checked as well.',
    },
    {
      description: 'Loses skills they once had',
      action:
        'Contact your pediatrician promptly. Loss of skills at any age warrants evaluation.',
    },
  ],
  notes:
    'At 2.5 years, your child is becoming their own little person with strong opinions. The combination of growing independence and limited language can make this a challenging time for everyone. Remember: they\'re not giving you a hard time, they\'re having a hard time. Their brain is doing incredible work right now.',
};
