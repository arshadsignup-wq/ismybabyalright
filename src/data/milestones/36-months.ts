import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '36-months',
  label: '36 Months (3 Years)',
  ageInMonths: 36,
  categories: {
    grossMotor: [
      {
        id: 'gm-36-runs-well',
        name: 'Runs Well',
        plainDescription:
          'Your child runs smoothly with good coordination and can stop and change direction.',
        whatItLooksLike:
          'They run with a natural-looking gait, arms swinging. They can stop on purpose, change direction, and run around obstacles without falling. They still trip sometimes -- all kids do.',
        typicalRange: {
          earlyMonths: 26,
          averageMonths: 32,
          lateNormalMonths: 36,
          concernThresholdMonths: 40,
        },
        whenNormal:
          'By 3, most children run with confidence. Some are natural sprinters while others prefer a careful pace. Both styles are normal -- not every child wants to race.',
        whenToMention:
          'If by 40 months your child still runs very awkwardly, falls frequently, or seems significantly less coordinated than peers, bring it up at your next visit.',
        whenToCallNow:
          'If your child was running well and has suddenly developed difficulty with coordination, limping, or weakness, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Motor Development Study',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['coordination', 'balance', 'muscle-tone'],
      },
      {
        id: 'gm-36-pedal-tricycle',
        name: 'Pedals a Tricycle',
        plainDescription: 'Your child can pedal a tricycle or similar ride-on toy.',
        whatItLooksLike:
          'They sit on a tricycle and push the pedals to move forward. Steering is still wobbly, but they can make it go. Some kids prefer balance bikes, and that\'s equally great.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Pedaling is a complex skill -- the feet go in circles while the hands steer. Many kids get it around 3, but some don\'t master it until closer to 4. Practice and opportunity matter a lot.',
        whenToMention:
          'If by 42 months your child can\'t coordinate pedaling at all, or has difficulty with other activities that require alternating leg movements, mention it to your doctor.',
        whenToCallNow:
          'If your child has new difficulty with leg coordination or seems to have weakness on one side, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['coordination', 'leg-strength', 'bilateral-coordination'],
      },
      {
        id: 'gm-36-climb-stairs-alternating',
        name: 'Climbs Stairs Alternating Feet',
        plainDescription:
          'Your child walks up stairs using one foot per step, like an adult, instead of both feet on each step.',
        whatItLooksLike:
          'Going upstairs, they put the left foot on one step, then the right foot on the next -- alternating feet. They may still need to hold the railing. Going down may still be two feet per step.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Alternating feet on stairs requires balance and confidence. Most kids can do it going up by 3, but going down takes longer. Using a railing is smart, not a sign of delay.',
        whenToMention:
          'If by 42 months your child still puts both feet on every step going up, or avoids stairs entirely, mention it to your pediatrician.',
        whenToCallNow:
          'If your child has lost the ability to climb stairs or shows sudden changes in coordination, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['balance', 'leg-strength', 'coordination'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-36-scissors',
        name: 'Uses Scissors (with Supervision)',
        plainDescription:
          'Your child can hold child-safe scissors and make snips in paper.',
        whatItLooksLike:
          'They hold scissors in one hand and paper in the other, and make deliberate snipping cuts. They might not cut a straight line yet, but they can open and close the scissors on purpose.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Scissor skills develop slowly. At 3, most kids can snip paper but can\'t cut along a line. Some kids need help figuring out how to hold scissors, and left-handed kids need left-handed scissors.',
        whenToMention:
          'If by 42 months your child can\'t open and close scissors at all, or has difficulty with other two-handed tasks, mention it to your doctor.',
        whenToCallNow:
          'If your child has lost the ability to use their hands for tasks they previously could do, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['hand-strength', 'bilateral-coordination', 'fine-motor-control'],
      },
      {
        id: 'fm-36-draws-person',
        name: 'Draws a Simple Person',
        plainDescription:
          'Your child draws a person with at least a head and one or two other body parts.',
        whatItLooksLike:
          'A big circle for a head with eyes, and maybe legs sticking out of the head (the classic "tadpole person"). It\'s charming and exactly what\'s expected.',
        typicalRange: {
          earlyMonths: 30,
          averageMonths: 36,
          lateNormalMonths: 42,
          concernThresholdMonths: 48,
        },
        whenNormal:
          'The "tadpole person" (a circle with sticks for legs) is a classic early drawing. By 3, most kids can draw at least a head with some features. Adding a body comes later.',
        whenToMention:
          'If by 42-48 months your child can\'t draw any recognizable shapes or shows no interest in drawing, mention it at your next checkup.',
        whenToCallNow:
          'If your child has lost the ability to draw or write things they previously could, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['drawing-skills', 'visual-perception', 'fine-motor-control'],
      },
      {
        id: 'fm-36-copies-circle',
        name: 'Copies a Circle',
        plainDescription: 'Your child can look at a circle you drew and draw one that looks similar.',
        whatItLooksLike:
          'You draw a circle, and they draw something round. It won\'t be perfectly round -- it might look like a lumpy potato -- but it\'s clearly a closed, circular shape.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 38,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Copying shapes is an important pre-writing skill. By 3, most kids can copy a circle. Copying a square comes around 4, and a triangle around 5. Every shape builds on the last.',
        whenToMention:
          'If by 42 months your child can\'t copy a circle at all (even a messy one), bring it up with your pediatrician.',
        whenToCallNow:
          'If your child has lost previously learned drawing abilities or shows new difficulty controlling a crayon, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['pre-writing', 'hand-eye-coordination', 'visual-motor-integration'],
      },
    ],
    language: [
      {
        id: 'lang-36-sentences',
        name: 'Speaks in Sentences',
        plainDescription:
          'Your child speaks in sentences of 3-5 words and can carry on a simple conversation.',
        whatItLooksLike:
          'They say things like "I don\'t want that," "Where did it go?" or "Mommy has big shoes." Strangers can understand about 75% of what they say.',
        typicalRange: {
          earlyMonths: 27,
          averageMonths: 34,
          lateNormalMonths: 38,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'By 3, most children speak in sentences and can have back-and-forth conversations. Grammar will still be imperfect ("I goed to park"), and that\'s a normal part of learning language rules.',
        whenToMention:
          'If by 38-42 months your child isn\'t using 3-word sentences, or if strangers can\'t understand most of what they say, talk to your pediatrician about a speech evaluation.',
        whenToCallNow:
          'If your child has lost language skills, stutters severely, or has stopped talking, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
          {
            org: 'WHO',
            citation: 'WHO Child Development: Communication',
            url: 'https://www.who.int/news-room/fact-sheets/detail/early-child-development',
          },
        ],
        relatedConcerns: ['expressive-language', 'speech-clarity', 'grammar'],
      },
      {
        id: 'lang-36-asks-why',
        name: 'Asks "Why?" and "What?"',
        plainDescription:
          'Your child asks "why?" and "what?" questions constantly. Welcome to the "why" phase.',
        whatItLooksLike:
          '"Why is it raining?" "What\'s that?" "Why do dogs bark?" "But why?" The questions are endless, and while exhausting, they show incredible cognitive growth.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Asking "why" shows curiosity, language skill, and an understanding that things have causes. Some kids ask why about everything starting at 2.5, while others start closer to 3.5. Both are normal.',
        whenToMention:
          'If by 42 months your child never asks questions of any kind, or doesn\'t seem curious about how things work, mention it to your doctor.',
        whenToCallNow:
          'If your child has stopped communicating or doesn\'t seem to understand questions directed at them, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['curiosity', 'language-development', 'cognitive-development'],
      },
      {
        id: 'lang-36-says-name',
        name: 'Says First Name',
        plainDescription: 'Your child can tell someone their first name when asked.',
        whatItLooksLike:
          'When someone asks "What\'s your name?" they can answer with their first name. They might also know their age and say "I\'m three!" (with or without holding up fingers).',
        typicalRange: {
          earlyMonths: 24,
          averageMonths: 32,
          lateNormalMonths: 38,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Most kids know and can say their first name by 3. Shy children might not answer when strangers ask but will tell family members. That\'s more about temperament than ability.',
        whenToMention:
          'If by 42 months your child doesn\'t seem to know their own name, or doesn\'t respond when their name is called, discuss it with your pediatrician.',
        whenToCallNow:
          'If your child doesn\'t respond to their name at all, even at home, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['self-identity', 'receptive-language', 'social-communication'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-36-takes-turns',
        name: 'Takes Turns',
        plainDescription:
          'Your child is beginning to take turns in games and activities, though they still need reminders.',
        whatItLooksLike:
          'They can wait (briefly) for their turn on a slide, trade toys with a friend, or alternate turns in a simple game. They won\'t always be happy about it, but they can do it with encouragement.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Turn-taking is hard! At 3, most kids understand the concept but still struggle to wait. Needing reminders and sometimes refusing to share is completely age-appropriate.',
        whenToMention:
          'If by 42 months your child cannot take turns even with direct help, or shows no understanding of the concept of sharing or waiting, mention it to your doctor.',
        whenToCallNow:
          'If your child seems completely unaware of other children, never interacts with peers, or has no interest in any social play, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['social-skills', 'impulse-control', 'peer-interaction'],
      },
      {
        id: 'se-36-shows-affection',
        name: 'Shows Affection for Friends',
        plainDescription:
          'Your child shows affection for friends without being told to.',
        whatItLooksLike:
          'They hug a friend, say "I like you," hold hands, or get excited when a particular friend arrives. They might also talk about friends at home.',
        typicalRange: {
          earlyMonths: 26,
          averageMonths: 33,
          lateNormalMonths: 38,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Friendships start to become meaningful around age 3. Some kids are very affectionate while others show they care in quieter ways. Introverted kids may have one close friend rather than many, and that\'s perfectly healthy.',
        whenToMention:
          'If by 42 months your child has no interest in other children whatsoever, or actively rejects all social interaction, discuss it with your pediatrician.',
        whenToCallNow:
          'If your child seems unaware of other people or has stopped engaging socially with family, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['social-engagement', 'peer-relationships', 'emotional-development'],
      },
      {
        id: 'se-36-separates-from-caregivers',
        name: 'Separates from Caregivers More Easily',
        plainDescription:
          'Your child can separate from you at daycare or preschool without extreme distress.',
        whatItLooksLike:
          'Drop-offs might still involve a few tears, but they settle quickly. They may wave goodbye, say "see you later," and transition into an activity. Some harder days are normal.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Separation anxiety comes and goes throughout early childhood. Some regression is normal during transitions (new school, new sibling). A child who sometimes has hard drop-offs is not a child with a problem.',
        whenToMention:
          'If by 42 months your child is still inconsolable for 30+ minutes after you leave, every time, or has extreme anxiety about any separation, talk to your pediatrician.',
        whenToCallNow:
          'If your child has suddenly developed severe separation anxiety they didn\'t have before, or seems fearful in a way that concerns you, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Positive Parenting Tips: Preschoolers',
            url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html',
          },
        ],
        relatedConcerns: ['separation-anxiety', 'attachment', 'anxiety'],
      },
    ],
    cognitive: [
      {
        id: 'cog-36-understands-why',
        name: 'Understands "Why" Concepts',
        plainDescription:
          'Your child is beginning to understand simple cause-and-effect explanations.',
        whatItLooksLike:
          'When you say "We need to wear a coat because it\'s cold," they understand the connection. They can also start explaining simple "why" things themselves: "He\'s crying because he fell down."',
        typicalRange: {
          earlyMonths: 30,
          averageMonths: 36,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Understanding cause and effect deepens significantly around age 3. They\'re building a mental model of how the world works, which is why they ask "why" so often -- they\'re genuinely trying to understand.',
        whenToMention:
          'If by 42 months your child seems unable to understand simple explanations or can\'t connect cause and effect at all, bring it up with your pediatrician.',
        whenToCallNow:
          'If your child has lost the ability to understand concepts they previously grasped, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['reasoning', 'comprehension', 'cognitive-development'],
      },
      {
        id: 'cog-36-puzzles',
        name: 'Completes Simple Puzzles',
        plainDescription:
          'Your child can complete puzzles with 3-4 pieces.',
        whatItLooksLike:
          'They can fit pieces into a puzzle board or put together a simple jigsaw puzzle. They try different orientations and figure out where pieces go through trial and error.',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'Puzzle skills vary widely and depend partly on experience. A child who has done lots of puzzles will naturally be faster. What matters more is the problem-solving process -- trying, adjusting, and figuring it out.',
        whenToMention:
          'If by 42 months your child can\'t complete a simple 3-4 piece puzzle, or shows no interest in problem-solving activities, mention it to your doctor.',
        whenToCallNow:
          'If your child has lost interest in all play or seems to have regressed in their thinking abilities, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['problem-solving', 'spatial-reasoning', 'persistence'],
      },
      {
        id: 'cog-36-understands-counting',
        name: 'Understands Counting to 3',
        plainDescription:
          'Your child can count to 3 and actually understand what the numbers mean.',
        whatItLooksLike:
          'If you ask for 2 crackers, they can give you 2 (not just a handful). They can count 3 objects by pointing to each one and saying a number. They grasp that numbers mean "how many."',
        typicalRange: {
          earlyMonths: 28,
          averageMonths: 34,
          lateNormalMonths: 40,
          concernThresholdMonths: 42,
        },
        whenNormal:
          'There\'s a big difference between reciting numbers and truly counting. By 3, most kids can do meaningful counting up to about 3. Counting higher with understanding develops over the next year.',
        whenToMention:
          'If by 42 months your child can\'t count even 2 objects accurately, or doesn\'t understand "give me one" versus "give me two," mention it to your pediatrician.',
        whenToCallNow:
          'If your child has lost number understanding or other cognitive skills, contact your doctor.',
        sources: [
          {
            org: 'CDC',
            citation: 'CDC Milestone Checklist: 3 Years',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
          },
        ],
        relatedConcerns: ['number-concepts', 'mathematical-thinking', 'cognitive-development'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Falls down a lot or has trouble with stairs',
      action:
        'Mention this to your pediatrician. They may want to evaluate muscle tone and coordination.',
    },
    {
      description: 'Drools or has very unclear speech',
      action:
        'Talk to your pediatrician about a speech-language evaluation. Speech therapy can help enormously at this age.',
    },
    {
      description: 'Cannot work simple toys (shape sorters, simple puzzles, turning handles)',
      action:
        'Bring this up at your next visit. It could indicate a need for fine motor or cognitive evaluation.',
    },
    {
      description: 'Does not speak in sentences',
      action:
        'Talk to your pediatrician about a speech evaluation. By 3, most children use sentences.',
    },
    {
      description: 'Does not understand simple instructions',
      action:
        'Discuss with your doctor. Hearing should be checked, and a developmental evaluation may be helpful.',
    },
    {
      description: 'Does not engage in pretend play',
      action:
        'Mention this to your pediatrician. Pretend play is an important milestone by age 3.',
    },
    {
      description: 'Does not want to play with other children or with toys',
      action:
        'Talk to your doctor about this. Social engagement is important for development.',
    },
    {
      description: 'Does not make eye contact',
      action: 'Contact your pediatrician. This can be evaluated as part of a developmental screening.',
    },
    {
      description: 'Loses skills they once had',
      action:
        'Contact your pediatrician promptly. Loss of skills always warrants evaluation, regardless of age.',
    },
  ],
  notes:
    'Three-year-olds are wonderful, frustrating, hilarious, and exhausting -- often all in the same five minutes. They are building the foundations for school readiness: language, social skills, self-control, and curiosity. If you have concerns, trust your instincts. You know your child best, and early support makes a real difference. There is no downside to asking your doctor about something that worries you.',
};
