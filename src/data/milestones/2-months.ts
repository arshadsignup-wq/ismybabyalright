import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '2-months',
  label: '2 Months',
  ageInMonths: 2,
  categories: {
    grossMotor: [
      {
        id: 'gm-2m-head-up-45',
        name: 'Holds head up at 45-degree angle during tummy time',
        plainDescription:
          'When placed on their tummy, your baby can lift their head up and hold it for several seconds.',
        whatItLooksLike:
          'During tummy time your baby pushes up on their forearms and lifts their head at roughly a 45-degree angle. They can hold it there for a few seconds before lowering it down again. You may see them looking around while they hold their head up.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'By about 2 months, most babies can lift their head at a 45-degree angle during tummy time. Some babies do this earlier, especially those who get regular tummy time. The key is steady improvement in head control over time.',
        whenToMention:
          'If your baby cannot lift their head at all during tummy time by about 3 months, or seems to have no improvement in head control, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby suddenly loses head control they previously had, or if their head always tilts sharply to one side and they cannot straighten it, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['no-head-control', 'hates-tummy-time', 'head-tilt'],
      },
      {
        id: 'gm-2m-smoother-movements',
        name: 'Movements become smoother and less jerky',
        plainDescription:
          'Your baby\'s arm and leg movements are starting to look less like startled jerks and more like smooth, flowing motions.',
        whatItLooksLike:
          'Compared to a few weeks ago, your baby\'s kicks and arm waves look more graceful and rhythmic. You may notice them moving their arms and legs in a cycling or pedaling motion while lying on their back.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'The transition from jerky, reflexive movements to smoother, more controlled ones is a gradual process that unfolds over the first few months. By about 2 months most parents notice the change.',
        whenToMention:
          'If your baby\'s movements still look mostly jerky and uncontrolled at 3 to 4 months, or if the movements seem very asymmetric (one side moves much more than the other), bring it up with your pediatrician.',
        whenToCallNow:
          'If your baby has sudden jerking or shaking episodes that look rhythmic and repetitive  -  especially if their eyes roll or they become unresponsive during these episodes  -  seek medical attention right away, as these could be seizures.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['jerky-movements', 'asymmetric-movement', 'possible-seizure'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-2m-hands-open-more',
        name: 'Hands open more often',
        plainDescription:
          'Your baby\'s hands are starting to relax and open up instead of always being in fists.',
        whatItLooksLike:
          'You will notice your baby\'s fingers are uncurling more often. Their hands may be open about half the time now, especially when they are calm and awake. They may start to bat at things near their hands.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'It is normal for fists to gradually relax over the first 2 to 3 months. Your baby does not need to have their hands open all the time  -  it is about the trend toward more openness.',
        whenToMention:
          'If your baby\'s hands are still tightly fisted almost all the time at 3 months, especially with the thumbs tucked inside the fingers, mention it to your pediatrician.',
        whenToCallNow:
          'If one hand is always tightly fisted while the other is open, or if you cannot gently open your baby\'s hands at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['always-fisted-hands', 'cortical-thumb', 'hand-stiffness'],
      },
      {
        id: 'fm-2m-brings-hands-midline',
        name: 'Brings hands together near midline',
        plainDescription:
          'Your baby is beginning to bring their hands together in front of their body.',
        whatItLooksLike:
          'While lying on their back, your baby may bring both hands toward the center of their chest. They might clasp their hands briefly or bat them together. This is an early step toward using both hands together.',
        typicalRange: {
          earlyMonths: 1.5,
          averageMonths: 2.5,
          lateNormalMonths: 3.5,
          concernThresholdMonths: 4.5,
        },
        whenNormal:
          'Bringing hands to midline is an important early fine motor skill that develops over the first 2 to 3 months. It is a building block for later skills like reaching, grasping, and eventually feeding themselves.',
        whenToMention:
          'If your baby never brings their hands together or always seems to keep them to the sides by about 4 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems unable to move one arm toward the center of their body at all, contact your pediatrician to evaluate for possible injury or neurological concern.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-using-both-hands', 'asymmetric-movement', 'not-reaching'],
      },
    ],
    language: [
      {
        id: 'lang-2m-coos',
        name: 'Begins to coo and make gurgling sounds',
        plainDescription:
          'Your baby starts making soft, vowel-like sounds  -  "oooh," "aaah," and "goo"  -  especially when happy.',
        whatItLooksLike:
          'During quiet, alert moments, your baby may make soft, musical sounds like "ooo" and "aah." These sounds often come when they are looking at you or when you are talking to them. It can sound like the beginning of a conversation.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'Cooing usually begins around 6 to 8 weeks. These early vowel sounds are your baby\'s first experiments with their voice beyond crying. Talking, singing, and responding to your baby\'s sounds encourages more cooing.',
        whenToMention:
          'If your baby has not started making any sounds other than crying by about 3 to 4 months, mention it at your next visit. Some quiet babies are perfectly fine, but your pediatrician can help determine if further evaluation is needed.',
        whenToCallNow:
          'If your baby was cooing and has suddenly stopped making any sounds at all, contact your pediatrician, as this could indicate a hearing change or other concern.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-cooing', 'not-making-sounds', 'hearing-concern'],
      },
      {
        id: 'lang-2m-turns-toward-sound',
        name: 'Turns head toward sounds',
        plainDescription:
          'Your baby moves their head toward a sound, like your voice or a rattle.',
        whatItLooksLike:
          'When you speak from the side or shake a rattle nearby, your baby may slowly turn their head in the direction of the sound. They are learning to locate where sounds come from.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3.5,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'Turning toward sounds develops gradually. At first, your baby may just still their body; then they begin to turn their head. By 3 to 4 months, most babies can reliably turn toward a sound source.',
        whenToMention:
          'If your baby does not seem to react to sounds on one side, or never turns toward your voice by about 4 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby stops responding to sounds entirely  -  no turning, no startling, no stilling  -  contact your pediatrician for a hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['hearing-concern', 'does-not-react-to-sound', 'one-sided-hearing'],
      },
      {
        id: 'lang-2m-different-cries',
        name: 'Uses different cries for different needs',
        plainDescription:
          'You can start to tell the difference between your baby\'s hungry cry, tired cry, and uncomfortable cry.',
        whatItLooksLike:
          'The hunger cry may be rhythmic and repetitive. The pain cry tends to be sudden and sharp. The tired cry may be whiny and fussy. These differences become clearer to you over time.',
        typicalRange: {
          earlyMonths: 0.5,
          averageMonths: 1.5,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'Babies develop varied cries over the first couple of months. Do not worry if you cannot always tell them apart  -  many parents learn gradually, and some babies are harder to read than others.',
        whenToMention:
          'If your baby only has one type of cry that never varies, or if their cry sounds very unusual (extremely high-pitched, hoarse, or weak), mention it at your next visit.',
        whenToCallNow:
          'A sudden change to a very high-pitched, continuous cry or a weak, moaning cry can indicate pain or illness. Contact your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['weak-cry', 'high-pitched-cry', 'excessive-crying'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-2m-social-smile',
        name: 'Smiles at people (social smile)',
        plainDescription:
          'Your baby smiles in response to your smile, voice, or face  -  not just from gas or reflexes.',
        whatItLooksLike:
          'When you smile at your baby and talk to them, they break into a wide, real smile that lights up their whole face and often reaches their eyes. This is different from the brief, sleep-related smiles you may have seen in the first weeks.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'The social smile is one of the most exciting milestones of early infancy. It typically appears between 6 and 8 weeks. Some babies smile a little earlier, some a little later  -  both are fine. Your baby is telling you they recognize you and enjoy being with you.',
        whenToMention:
          'If your baby has not smiled at you or other caregivers by about 3 months, let your pediatrician know. They can evaluate social development and rule out vision concerns.',
        whenToCallNow:
          'If your baby was smiling socially and has stopped, or if they seem withdrawn and unresponsive to social interaction, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-social-smile', 'no-eye-contact', 'not-responding-to-people'],
      },
      {
        id: 'se-2m-self-soothe',
        name: 'May briefly calm themselves (self-soothing)',
        plainDescription:
          'Your baby might briefly calm down on their own by sucking on their fingers or fist.',
        whatItLooksLike:
          'When mildly fussy, your baby may find their fist or fingers and suck on them, which helps them settle for a short time. They are not able to fully soothe themselves yet, but these are the earliest attempts.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'Self-soothing is a skill that develops very gradually. At this age, your baby may only be able to calm themselves for a minute or two. They still need you for most of their soothing  -  that is completely normal and healthy.',
        whenToMention:
          'If your baby seems unable to bring their hands to their mouth at all by about 3 months, mention it to your pediatrician, as this involves both motor and self-regulation skills.',
        whenToCallNow:
          'If your baby is inconsolable for extended periods and also has other symptoms like fever, vomiting, or unusual lethargy, seek medical attention.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['inconsolable-crying', 'not-bringing-hands-to-mouth', 'colic'],
      },
      {
        id: 'se-2m-looks-at-parent',
        name: 'Looks at parent while being fed',
        plainDescription:
          'Your baby gazes at your face during feeding, whether breast or bottle.',
        whatItLooksLike:
          'While nursing or bottle-feeding, your baby stares up at your face with focused attention. They may pause feeding briefly to look at you and then resume. These feeding moments are deeply connecting.',
        typicalRange: {
          earlyMonths: 0.5,
          averageMonths: 1.5,
          lateNormalMonths: 2.5,
          concernThresholdMonths: 3.5,
        },
        whenNormal:
          'This is one of the sweetest parts of feeding. Your baby is building their bond with you through these moments of shared gaze. Some babies do this more than others, and that is okay.',
        whenToMention:
          'If your baby never looks at your face during feeding or at any other time by about 3 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby is not feeding well and also not making any eye contact, contact your pediatrician to evaluate both feeding and visual development.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-eye-contact', 'feeding-difficulties', 'not-bonding'],
      },
    ],
    cognitive: [
      {
        id: 'cog-2m-follows-with-eyes',
        name: 'Follows things with eyes and recognizes people at a distance',
        plainDescription:
          'Your baby can track a moving object or person with their eyes, following it as it moves across their field of vision.',
        whatItLooksLike:
          'If you slowly move a toy or your face from one side to the other in front of your baby, they will follow it with their eyes and may turn their head to keep watching. They can also start to recognize familiar people from a few feet away.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'Visual tracking develops over the first 2 to 3 months. At first, your baby may only follow objects briefly and with jerky eye movements. By 2 to 3 months, tracking becomes smoother and they can follow objects across a wider arc.',
        whenToMention:
          'If your baby does not follow a slowly moving object with their eyes by about 3 months, mention it to your pediatrician. A vision check is a good idea.',
        whenToCallNow:
          'If your baby\'s eyes seem to shake rapidly (nystagmus), or if one eye turns noticeably inward or outward all the time, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-tracking-objects', 'vision-concern', 'crossed-eyes'],
      },
      {
        id: 'cog-2m-boredom-fussing',
        name: 'Begins to act bored if activity does not change',
        plainDescription:
          'Your baby may fuss or cry when there is nothing interesting to look at or do for a while.',
        whatItLooksLike:
          'After staring at the same thing for a while, your baby may start to fuss or look away. When you change what they are looking at  -  a new toy, a different position, or your face  -  they perk up and show interest again.',
        typicalRange: {
          earlyMonths: 1.5,
          averageMonths: 2,
          lateNormalMonths: 3,
          concernThresholdMonths: 4,
        },
        whenNormal:
          'This is actually a sign of healthy brain development. Your baby is learning to process their environment and is starting to want stimulation and variety. It means their brain is growing and demanding new input.',
        whenToMention:
          'If your baby seems completely uninterested in their surroundings  -  never fussing for attention, never looking at new things with curiosity  -  mention it to your pediatrician.',
        whenToCallNow:
          'If your baby is extremely lethargic and shows no interest in anything  -  not feeding well, not looking around, not responding  -  contact your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-visual-interest', 'lethargy', 'not-engaging'],
      },
      {
        id: 'cog-2m-attention-faces',
        name: 'Pays attention to faces',
        plainDescription:
          'Your baby stares at faces with increasing interest and for longer periods.',
        whatItLooksLike:
          'Your baby locks onto faces  -  yours, your partner\'s, siblings\'  -  and studies them intently. They may gaze at your face for 10 to 20 seconds or longer during quiet, alert moments.',
        typicalRange: {
          earlyMonths: 0.5,
          averageMonths: 1.5,
          lateNormalMonths: 2.5,
          concernThresholdMonths: 3.5,
        },
        whenNormal:
          'Babies are born with a preference for faces, and this fascination only grows. By 2 months, your baby may stare at you with an intensity that feels like they are memorizing every detail of your face  -  because they are.',
        whenToMention:
          'If your baby never shows interest in faces by about 3 months, let your pediatrician know so they can evaluate vision and early social development.',
        whenToCallNow:
          'If your baby seems to look through you rather than at you, and is also not responding to your voice, seek evaluation from your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-eye-contact', 'vision-concern', 'no-social-response'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not respond to loud sounds',
      action:
        'Request a hearing evaluation from your pediatrician. Early identification of hearing issues leads to better outcomes.',
    },
    {
      description: 'Does not watch things as they move',
      action:
        'Mention this at your next visit. Your pediatrician can check vision and visual tracking.',
    },
    {
      description: 'Does not smile at people',
      action:
        'If your baby has not shown a social smile by the end of 2 months, let your pediatrician know. The social smile is an important developmental marker.',
    },
    {
      description: 'Does not bring hands to mouth',
      action:
        'Talk to your pediatrician about this. It involves both motor skills and body awareness.',
    },
    {
      description: 'Cannot hold head up when pushing up on tummy',
      action:
        'If there is no improvement in head control by 3 months, your pediatrician should evaluate muscle tone and strength.',
    },
  ],
  notes:
    'Two months is an age when your baby starts to become more social and interactive. The social smile is often the biggest milestone parents notice, and it is truly special  -  your baby is telling you they know you and are happy to see you. Brain development is happening at an incredible pace right now, with your baby forming more than a million neural connections every second. The best things you can do are talk to your baby, respond to their cues, give them tummy time, and let them study your face. Every baby has their own timeline, and there is a wide range of what is considered normal. If you have concerns, your pediatrician is your best resource  -  they want to hear from you.',
};
