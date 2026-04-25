import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '6-months',
  label: '6 Months',
  ageInMonths: 6,
  categories: {
    grossMotor: [
      {
        id: 'gm-6m-rolls-both',
        name: 'Rolls over in both directions (front to back, back to front)',
        plainDescription:
          'Your baby can roll from their tummy to their back and from their back to their tummy.',
        whatItLooksLike:
          'Your baby rolls confidently from front to back and is learning (or has learned) to roll from back to front as well. They may use rolling as a way to get around  -  you put them down in one spot and find them somewhere else.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Most babies can roll both ways by 6 months, though some figure out one direction long before the other. Back-to-front rolling usually comes a bit later than front-to-back. Once your baby can roll, never leave them unattended on a raised surface like a changing table.',
        whenToMention:
          'If your baby cannot roll in either direction by about 7 months, mention it to your pediatrician. They can check muscle tone and recommend exercises or a physical therapy referral if needed.',
        whenToCallNow:
          'If your baby suddenly cannot roll when they could before, or if they seem to have weakness or pain when trying to move, contact your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-rolling-over', 'only-rolls-one-way', 'asymmetric-movement'],
      },
      {
        id: 'gm-6m-sits-support',
        name: 'Begins to sit without support',
        plainDescription:
          'Your baby can sit on their own for a few seconds, or longer with some support.',
        whatItLooksLike:
          'Your baby can sit on the floor with their hands planted in front of them for balance (tripod sitting), and may be starting to sit independently without using their hands. They might topple over after a few seconds  -  keep pillows around them.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 6,
          lateNormalMonths: 8,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'Independent sitting is a major milestone that typically develops between 5 and 7 months. At first, babies use their hands for balance ("tripod sit"). Over the next few weeks, they learn to sit hands-free. Some babies sit independently as early as 5 months; others take until 7 or 8 months.',
        whenToMention:
          'If your baby cannot sit even with support by about 8 months, discuss it with your pediatrician. They may suggest a physical therapy evaluation.',
        whenToCallNow:
          'If your baby had been sitting and suddenly cannot, or if they seem to have significant weakness or rigidity in their trunk, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for sitting without support',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-sitting', 'poor-trunk-control', 'floppy-baby'],
      },
      {
        id: 'gm-6m-bears-weight-legs',
        name: 'Supports weight on legs when held standing',
        plainDescription:
          'When you hold your baby in a standing position, they push down with their legs and bear their own weight.',
        whatItLooksLike:
          'When you hold your baby upright with their feet on a firm surface, they straighten their legs and support their weight. They may bounce up and down excitedly. Some babies love this and could "stand" (with your support) all day.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Weight-bearing on legs is a normal developmental step that does not cause bow legs or early walking problems  -  that is a myth. Letting your baby "stand" with support when they want to is great exercise for their leg muscles.',
        whenToMention:
          'If your baby\'s legs buckle every time you try to hold them in a standing position by about 7 to 8 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby\'s legs seem very stiff and scissor (cross over each other) when you hold them upright, contact your pediatrician. This can be a sign of increased muscle tone that should be evaluated.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-bearing-weight', 'leg-stiffness', 'scissoring-legs'],
      },
      {
        id: 'gm-6m-rocks-crawl',
        name: 'May rock back and forth on hands and knees',
        plainDescription:
          'Your baby gets into a hands-and-knees position and rocks forward and backward, getting ready to crawl.',
        whatItLooksLike:
          'On the floor, your baby gets up on their hands and knees and rocks their body forward and backward. They look like they are about to take off but cannot quite figure out how to move their limbs yet. Some babies rock for weeks before crawling.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6.5,
          lateNormalMonths: 8,
          concernThresholdMonths: 10,
        },
        whenNormal:
          'Rocking on hands and knees is a pre-crawling behavior that not all babies do  -  some skip straight to crawling, scooting, or even cruising. There is no single "right" way to get mobile. Some perfectly healthy babies never crawl in the traditional sense.',
        whenToMention:
          'If your baby shows no interest in moving toward objects (rolling, scooting, or any movement) by about 9 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby cannot get onto their hands and knees and also has difficulty sitting or holding their head up, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for hands-and-knees crawling',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-crawling', 'not-mobile', 'poor-trunk-control'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-6m-raking-grasp',
        name: 'Rakes small objects toward self',
        plainDescription:
          'Your baby uses their whole hand to sweep small objects toward themselves, like scooping up a piece of cereal.',
        whatItLooksLike:
          'When a small object like a puff or piece of cereal is on a flat surface, your baby reaches for it and rakes it toward themselves using all their fingers at once. They may not be able to pick it up cleanly yet  -  that comes later with the pincer grasp.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'The raking grasp is an important step between the whole-hand palmar grasp and the precise pincer grasp that develops around 9 months. It shows your baby is developing more refined hand control.',
        whenToMention:
          'If your baby is not attempting to pick up small objects by about 7 to 8 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby cannot grasp objects at all  -  neither large nor small  -  contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-grasping', 'not-picking-up-objects', 'fine-motor-delay'],
      },
      {
        id: 'fm-6m-transfers-hands',
        name: 'Passes toys from one hand to the other',
        plainDescription:
          'Your baby can move a toy from one hand to the other.',
        whatItLooksLike:
          'Your baby holds a toy in one hand, brings the other hand over to grab it, and transfers it across. They may do this back and forth, exploring the object with each hand. This is a sign of improving hand coordination and midline crossing.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6,
          lateNormalMonths: 7.5,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'Transferring objects between hands is a milestone that shows your baby\'s brain is coordinating both sides of their body. It is an essential building block for later skills like using utensils and getting dressed.',
        whenToMention:
          'If your baby always uses only one hand and never transfers objects by about 8 months, let your pediatrician know. Strong hand preference before 12 months can sometimes indicate an issue with the other side.',
        whenToCallNow:
          'If your baby cannot use one hand at all, or if one hand always seems fisted or weak compared to the other, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-using-both-hands', 'early-hand-preference', 'one-sided-weakness'],
      },
      {
        id: 'fm-6m-mouths-everything',
        name: 'Brings everything to mouth to explore',
        plainDescription:
          'Your baby puts just about everything they can grab into their mouth.',
        whatItLooksLike:
          'Every toy, teether, book, and random object your baby gets their hands on goes straight into their mouth. They are using their lips, tongue, and gums to explore textures, shapes, and temperatures. This is messy but completely healthy.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Mouthing is one of the primary ways babies explore the world at this age. Their mouth has more nerve endings than their fingers, making it their most sensitive tool for learning about objects. Make sure objects are safe (no small parts, no sharp edges) and reasonably clean.',
        whenToMention:
          'If your baby never brings objects to their mouth, mention it to your pediatrician. It could indicate an oral sensitivity issue or motor planning difficulty.',
        whenToCallNow:
          'If your baby gags frequently or seems to have difficulty swallowing when mouthing objects, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-mouthing-objects', 'oral-sensitivity', 'gagging'],
      },
    ],
    language: [
      {
        id: 'lang-6m-consonant-babble',
        name: 'Babbles with consonant sounds (ma, da, ba)',
        plainDescription:
          'Your baby starts making consonant-vowel combinations like "ma," "da," "ba," and "ga."',
        whatItLooksLike:
          'Your baby strings together consonant-vowel combos: "ba-ba-ba," "ma-ma-ma," "da-da-da." They may say these in long chains. Do not get too excited yet  -  at this stage, "mama" and "dada" are just fun sounds to make, not intentional words.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 6,
          lateNormalMonths: 8,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'Canonical babbling (consonant-vowel combinations) is a critical language milestone. It shows your baby\'s brain is learning to control the mouth, tongue, and voice together. Babies who hear more language tend to babble more  -  so keep talking, singing, and reading to your baby.',
        whenToMention:
          'If your baby is still only making vowel sounds ("oooh," "aaah") and has not added any consonant sounds by about 8 to 9 months, let your pediatrician know. A hearing evaluation may be recommended.',
        whenToCallNow:
          'If your baby has stopped babbling entirely, or if they do not respond to your voice or other sounds, contact your pediatrician for hearing and developmental evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-babbling', 'no-consonant-sounds', 'hearing-concern'],
      },
      {
        id: 'lang-6m-responds-name',
        name: 'Responds to own name',
        plainDescription:
          'Your baby turns to look at you when you say their name.',
        whatItLooksLike:
          'When you say your baby\'s name from a few feet away, they stop what they are doing, turn toward you, and make eye contact. They may smile or reach for you. They are beginning to understand that this particular sound means them.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6,
          lateNormalMonths: 8,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'Most babies start responding to their name between 5 and 7 months. At first, they may only respond when they are not distracted by something else. Consistently responding to their name  -  even when busy  -  comes a bit later.',
        whenToMention:
          'If your baby does not turn toward you when you say their name by about 9 months, mention it to your pediatrician. They may want to evaluate hearing and social development.',
        whenToCallNow:
          'If your baby does not respond to their name and also does not respond to sounds in general, contact your pediatrician for a hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-responding-to-name', 'hearing-concern', 'not-responding-to-voice'],
      },
      {
        id: 'lang-6m-responds-emotions',
        name: 'Responds to emotions in voices',
        plainDescription:
          'Your baby reacts to the tone of your voice  -  they may look worried when you sound upset or smile when you sound happy.',
        whatItLooksLike:
          'When you speak in a happy, singsong voice, your baby smiles and seems excited. When you use a stern or worried tone, they may pause, look concerned, or even cry. They are reading the emotion in your voice before understanding the words.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Responding to emotional tone is an important social-communication skill. Your baby does not understand your words yet, but they understand how you feel through your voice. This is one of the earliest forms of emotional intelligence.',
        whenToMention:
          'If your baby does not seem to respond differently to happy versus upset voices by about 8 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems completely unaware of voices and sounds  -  no response to tone, volume, or direction  -  contact your pediatrician for urgent hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['hearing-concern', 'not-responding-to-voice', 'no-social-response'],
      },
      {
        id: 'lang-6m-makes-sounds-mirror',
        name: 'Makes sounds to get attention or express feelings',
        plainDescription:
          'Your baby uses sounds  -  squeals, growls, raspberries, and shrieks  -  to get your attention or show how they feel.',
        whatItLooksLike:
          'Your baby may squeal with delight, growl when frustrated, blow raspberries for fun, or shriek to get your attention from across the room. They are learning that their voice is a tool for communication, not just for crying.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'This vocal experimentation is wonderful and sometimes loud. Your baby is discovering the range and power of their voice. Respond to these sounds as if they are trying to talk to you  -  because they are.',
        whenToMention:
          'If your baby is very quiet and rarely makes sounds to express themselves by about 7 to 8 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby was vocal and has suddenly stopped making sounds, contact your pediatrician to rule out hearing loss or other concerns.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-making-sounds', 'not-babbling', 'very-quiet-baby'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-6m-knows-familiar',
        name: 'Knows familiar faces and begins to know if someone is a stranger',
        plainDescription:
          'Your baby clearly recognizes familiar people and may be wary of people they do not know.',
        whatItLooksLike:
          'Your baby lights up when they see parents, grandparents, or regular caregivers. When a stranger approaches, they may stare seriously, turn away, cling to you, or even cry. This is the beginning of stranger awareness.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6,
          lateNormalMonths: 8,
          concernThresholdMonths: 10,
        },
        whenNormal:
          'Stranger wariness is a healthy sign that your baby has formed strong attachments and can distinguish between people they know and people they do not. Not all babies show dramatic stranger anxiety  -  some are naturally more social. Both are normal.',
        whenToMention:
          'If your baby does not seem to recognize familiar people or shows no preference for caregivers over strangers by about 9 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems completely indifferent to all people  -  no preference for anyone, no distress when separated from caregivers  -  mention it to your pediatrician at your earliest opportunity.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-recognizing-people', 'no-stranger-awareness', 'indiscriminate-friendliness'],
      },
      {
        id: 'se-6m-likes-mirror',
        name: 'Likes to look at self in a mirror',
        plainDescription:
          'Your baby is fascinated by their reflection and enjoys looking at themselves in a mirror.',
        whatItLooksLike:
          'When you hold your baby in front of a mirror, they stare at their reflection, smile, reach for it, and may babble at it. They do not yet realize it is themselves  -  they just see an interesting, responsive "baby" who copies everything they do.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Mirror play is both fun and developmentally rich. It helps with visual tracking, social development, and eventually self-recognition (which comes much later, around 18 months). A baby-safe mirror during tummy time is a great toy.',
        whenToMention:
          'If your baby shows no interest in their reflection or in looking at faces in general by about 7 to 8 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby avoids looking at faces  -  both real and reflected  -  and also does not make eye contact, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-eye-contact', 'no-social-response', 'not-interested-in-faces'],
      },
      {
        id: 'se-6m-laughs',
        name: 'Laughs out loud',
        plainDescription:
          'Your baby laughs with a real, hearty laugh  -  not just smiles, but genuine laughter.',
        whatItLooksLike:
          'During playful interactions  -  peek-a-boo, tickling, silly sounds  -  your baby bursts into laughter. It is a full, belly laugh that is unmistakably different from cooing or squealing. It is one of the most joyful sounds you will ever hear.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4.5,
          lateNormalMonths: 6,
          concernThresholdMonths: 7,
        },
        whenNormal:
          'Most babies laugh for the first time between 3 and 5 months. By 6 months, laughter should be a regular part of your baby\'s repertoire. Some babies are more giggly than others  -  personality plays a role here.',
        whenToMention:
          'If your baby has never laughed by about 6 to 7 months, mention it to your pediatrician. It is worth checking hearing and social development.',
        whenToCallNow:
          'If your baby never laughs, never smiles, and does not seem to engage with people socially at all, contact your pediatrician for a developmental evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-laughter', 'no-social-smile', 'not-responding-to-people'],
      },
    ],
    cognitive: [
      {
        id: 'cog-6m-curious',
        name: 'Looks at things nearby and reaches for them',
        plainDescription:
          'Your baby is curious about things around them and actively reaches for objects they want to explore.',
        whatItLooksLike:
          'Your baby spots a toy, a spoon, your phone, or anything interesting and immediately reaches for it with clear intent. They study objects by turning them over, shaking them, banging them, and (of course) putting them in their mouth.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5.5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'By 6 months, your baby should be actively curious about their environment. They are little scientists  -  testing, exploring, and learning about every object they encounter. Give them safe objects with different textures, weights, and sounds.',
        whenToMention:
          'If your baby seems uninterested in reaching for or exploring objects by about 7 to 8 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby is very passive, does not reach for anything, and shows no curiosity about their surroundings, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-reaching', 'no-curiosity', 'not-exploring-objects'],
      },
      {
        id: 'cog-6m-mouths-explore',
        name: 'Brings things to mouth to explore',
        plainDescription:
          'Your baby uses their mouth as a primary tool for learning about objects  -  everything gets tasted and chewed.',
        whatItLooksLike:
          'Your baby picks up a toy, immediately brings it to their mouth, and explores it with their lips, tongue, and gums. They are gathering information about texture, shape, temperature, and taste. This is serious scientific research, baby-style.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 5,
          lateNormalMonths: 7,
          concernThresholdMonths: 8,
        },
        whenNormal:
          'Oral exploration peaks around 6 to 9 months and gradually decreases as your baby\'s hand skills improve. It is a normal and important way for babies to learn. Ensure all objects within reach are safe for mouthing.',
        whenToMention:
          'If your baby avoids putting things in their mouth entirely, it could indicate oral sensitivity. Mention it to your pediatrician, especially if they are also having feeding difficulties.',
        whenToCallNow:
          'If your baby frequently chokes or gags when putting things in their mouth, or if they seem to have difficulty swallowing, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['oral-sensitivity', 'gagging', 'not-mouthing-objects'],
      },
      {
        id: 'cog-6m-cause-effect',
        name: 'Begins to understand cause and effect',
        plainDescription:
          'Your baby is starting to figure out that their actions make things happen  -  shaking a rattle makes noise, dropping a toy makes you pick it up.',
        whatItLooksLike:
          'Your baby shakes a rattle, hears the sound, pauses, and then shakes it again on purpose. They may drop a toy off their high chair, watch it fall, and look at you expectantly. When they push a button on a toy and it lights up, they do it again and again.',
        typicalRange: {
          earlyMonths: 4,
          averageMonths: 6,
          lateNormalMonths: 8,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'Understanding cause and effect is a fundamental cognitive milestone. Your baby is learning that they have the power to make things happen in the world  -  this is the beginning of problem-solving. The repetitive "drop the toy" game is them practicing this concept.',
        whenToMention:
          'If your baby does not seem to notice the effects of their actions  -  never repeating an action that produced an interesting result  -  by about 8 to 9 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems completely disengaged from their environment, does not interact with toys at all, and does not respond to changes around them, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-exploring-objects', 'no-curiosity', 'not-engaging'],
      },
      {
        id: 'cog-6m-looks-fallen',
        name: 'Tries to get things that are out of reach',
        plainDescription:
          'Your baby sees something they want that is not within arm\'s reach and makes an effort to get to it.',
        whatItLooksLike:
          'Your baby spots a toy just out of reach and stretches their body, reaches their arm as far as it can go, or even begins to scoot or roll toward it. They may fuss in frustration if they cannot get to it. This motivation to move toward desired objects is a precursor to crawling.',
        typicalRange: {
          earlyMonths: 5,
          averageMonths: 6,
          lateNormalMonths: 7.5,
          concernThresholdMonths: 9,
        },
        whenNormal:
          'The desire to get things that are out of reach is what motivates babies to learn to crawl, scoot, and eventually walk. Place interesting toys just beyond your baby\'s reach during floor time to encourage this motivation.',
        whenToMention:
          'If your baby never seems to want to get things that are out of reach and shows no motivation to move toward objects by about 8 to 9 months, discuss it with your pediatrician.',
        whenToCallNow:
          'If your baby seems unable to move toward objects at all and is very passive in their environment, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  6 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-reaching', 'not-mobile', 'no-motivation-to-move'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not try to get things that are in reach',
      action:
        'Let your pediatrician know. By 6 months, babies should be actively reaching for objects.',
    },
    {
      description: 'Shows no affection for caregivers',
      action:
        'If your baby does not seem to respond differently to you than to strangers, discuss this with your pediatrician.',
    },
    {
      description: 'Does not respond to sounds around them',
      action:
        'Request a hearing evaluation. Hearing is essential for language development, and early detection of hearing loss makes a significant difference.',
    },
    {
      description: 'Has difficulty getting things to mouth',
      action:
        'Mention this to your pediatrician. This involves coordination of reaching, grasping, and arm movement.',
    },
    {
      description: 'Does not make vowel sounds (ah, eh, oh)',
      action:
        'If your baby is not making any vowel sounds by 6 months, your pediatrician should evaluate hearing and speech development.',
    },
    {
      description: 'Does not roll over in either direction',
      action:
        'While some babies are later rollers, not rolling at all by 6 months warrants a conversation with your pediatrician about muscle tone and strength.',
    },
    {
      description: 'Seems very stiff with tight muscles, or very floppy like a rag doll',
      action:
        'Unusual muscle tone  -  either too high or too low  -  should be evaluated by your pediatrician. They may refer you to a neurologist or physical therapist.',
    },
  ],
  notes:
    'Six months is a thrilling time. Your baby is becoming a little person with clear likes, dislikes, and a personality all their own. They are sitting up, reaching for everything, babbling with consonants, and laughing at your jokes. Many families start solid foods around this time, which is an exciting (and messy) new adventure. Your baby\'s brain is developing at an astonishing rate  -  they are forming connections that will support learning for years to come. Remember that developmental milestones describe a range, not a deadline. Some babies hit milestones early, others later, and the order can vary too. If your baby was born prematurely, use their adjusted age (age from their due date, not their birth date) when comparing to milestone charts. As always, you know your baby best. If something does not feel right, trust your instincts and talk to your pediatrician. Early intervention, when needed, can make a world of difference  -  and asking questions is always the right call.',
};
