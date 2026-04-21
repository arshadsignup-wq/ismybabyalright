import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '1-month',
  label: '1 Month',
  ageInMonths: 1,
  categories: {
    grossMotor: [
      {
        id: 'gm-1m-head-lift-prone',
        name: 'Lifts head briefly when on tummy',
        plainDescription:
          'When placed on their stomach, your baby can briefly lift their head up before setting it back down.',
        whatItLooksLike:
          'During tummy time your baby raises their head for a second or two, wobbling, then lowers it back to the surface. The lift is small — just enough to clear the mat — and they may turn their head to one side.',
        typicalRange: {
          earlyMonths: 0.5,
          averageMonths: 1,
          lateNormalMonths: 2,
          concernThresholdMonths: 3,
        },
        whenNormal:
          'Most newborns can do this briefly by about one month. Some babies start lifting their head within the first couple of weeks, while others take a little longer. Short tummy-time sessions each day help build neck strength.',
        whenToMention:
          'If your baby has not attempted any head lifting during tummy time by around 2 months, mention it at your next well-child visit. Your pediatrician can check muscle tone and suggest supportive exercises.',
        whenToCallNow:
          'If your baby feels completely floppy — like a rag doll — when you pick them up, or if their head always falls to the same side and they seem unable to move it at all, call your pediatrician today.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['floppy-baby', 'no-head-control', 'hates-tummy-time'],
      },
      {
        id: 'gm-1m-arm-leg-movement',
        name: 'Moves arms and legs',
        plainDescription:
          'Your baby moves their arms and legs in jerky, random motions while lying on their back.',
        whatItLooksLike:
          'You will see your baby kick their legs and wave their arms in uncoordinated bursts. The movements may look startled or jerky — this is completely normal at this age.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'Newborns move their limbs from birth. The movements are reflexive and jerky at first, becoming slightly more purposeful over the coming weeks.',
        whenToMention:
          'If your baby rarely moves their arms or legs, or seems stiff and rigid when you try to gently bend their limbs, bring it up at your next pediatrician appointment.',
        whenToCallNow:
          'If your baby suddenly stops moving one arm or one leg, or if their body seems very stiff or very limp, contact your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['stiff-limbs', 'not-moving-arms', 'not-moving-legs'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-1m-grasp-reflex',
        name: 'Grasps a finger placed in palm',
        plainDescription:
          'If you place your finger in your baby\'s palm, they will automatically curl their fingers around it and squeeze.',
        whatItLooksLike:
          'When something touches the center of your baby\'s palm, their fingers close tightly around it. This is an involuntary reflex — they are not choosing to grab, but the grip can be surprisingly strong.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0,
          lateNormalMonths: 1,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'The palmar grasp reflex is present from birth and is one of the earliest reflexes your pediatrician checks. It usually starts to fade around 3 to 4 months as your baby begins to reach and grab on purpose.',
        whenToMention:
          'If your baby\'s hands are always tightly fisted and they never open them, or if the grasp reflex seems completely absent, mention it at your next visit.',
        whenToCallNow:
          'If you notice your baby cannot grip at all, or if one hand is always clenched much tighter than the other, call your pediatrician to discuss it.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['weak-grip', 'always-fisted-hands', 'asymmetric-grip'],
      },
      {
        id: 'fm-1m-hands-fisted',
        name: 'Hands mostly stay in fists',
        plainDescription:
          'Your baby\'s hands are usually curled into loose fists most of the time.',
        whatItLooksLike:
          'You will notice your baby\'s fingers are usually curled in, with the thumb tucked inside or alongside the fingers. They may briefly open their hands but return to fists at rest.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 2,
          concernThresholdMonths: 3,
        },
        whenNormal:
          'It is perfectly normal for newborns to keep their hands in fists. Over the next couple of months, your baby\'s hands will relax and open more often.',
        whenToMention:
          'If your baby\'s hands are still tightly fisted most of the time at 3 months with no signs of relaxing, bring it up with your pediatrician.',
        whenToCallNow:
          'If your baby\'s fists are so tightly clenched that you cannot gently open them, or the thumbs are always tucked inside the fingers, contact your pediatrician.',
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
    ],
    language: [
      {
        id: 'lang-1m-cries',
        name: 'Cries to communicate needs',
        plainDescription:
          'Your baby uses different cries to tell you they are hungry, tired, uncomfortable, or need comfort.',
        whatItLooksLike:
          'You may start to notice that your baby\'s cries sound a little different depending on what they need — a short, rhythmic cry for hunger versus a more intense, sharp cry for pain or discomfort.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0,
          lateNormalMonths: 1,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'All healthy newborns cry — it is their primary way to communicate. Some babies cry more than others, and that range is completely normal. Over time, you will learn what each cry means.',
        whenToMention:
          'If your baby rarely cries or has a very weak, high-pitched, or unusual-sounding cry, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby\'s cry suddenly changes to a very high-pitched, cat-like cry, or if they stop crying and become very lethargic, seek medical attention right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['weak-cry', 'high-pitched-cry', 'excessive-crying'],
      },
      {
        id: 'lang-1m-startles-sound',
        name: 'Startles at loud sounds',
        plainDescription:
          'Your baby reacts to sudden loud sounds by startling — throwing out their arms or crying.',
        whatItLooksLike:
          'When a door slams or a dog barks, your baby may fling their arms out, stiffen briefly, and then cry. This is the Moro (startle) reflex and shows that your baby can hear.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0,
          lateNormalMonths: 1,
          concernThresholdMonths: 1.5,
        },
        whenNormal:
          'Healthy newborns respond to loud sounds from birth. The startle reflex is strongest in the first month and begins to diminish around 3 to 4 months.',
        whenToMention:
          'If your baby does not seem to react to loud sounds at all — no startling, blinking, or change in activity — mention this to your pediatrician. A hearing screening can be done very early.',
        whenToCallNow:
          'If your baby had a normal newborn hearing screen but now seems unresponsive to all sounds, call your pediatrician promptly to arrange a follow-up hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Newborn hearing screening: current issues and guiding principles',
            url: 'https://www.who.int/publications/i/item/9789240020481',
          },
        ],
        relatedConcerns: ['no-startle-reflex', 'hearing-concern', 'does-not-react-to-sound'],
      },
      {
        id: 'lang-1m-recognizes-voice',
        name: 'Calms or stills to a familiar voice',
        plainDescription:
          'Your baby becomes quiet or slows their movements when they hear your voice.',
        whatItLooksLike:
          'When you talk softly near your baby, they may stop fussing, pause their movements, or appear to listen. They may turn slightly toward the sound of your voice.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'Babies begin to prefer their mother\'s voice even before birth and can recognize familiar voices within the first few weeks. This is one of the earliest signs of social bonding.',
        whenToMention:
          'If your baby never seems to quiet or respond when you speak to them by about 2 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems completely unresponsive to voice and sound in general, contact your pediatrician to discuss hearing evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['hearing-concern', 'not-responding-to-voice', 'no-social-response'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-1m-looks-at-faces',
        name: 'Looks at faces',
        plainDescription:
          'Your baby stares at faces, especially when you are holding them close.',
        whatItLooksLike:
          'When you hold your baby about 8 to 12 inches from your face, they will fix their gaze on you. They seem especially drawn to your eyes and the edges of your face. This is the distance at which newborn vision works best.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'Newborns are wired to look at faces from the very start. Your baby can see about 8 to 12 inches away, which is roughly the distance between your face and theirs during feeding. This is your baby\'s way of beginning to know you.',
        whenToMention:
          'If your baby never seems to focus on your face when you are close, or if their eyes seem to wander constantly without fixing on anything, mention it to your pediatrician.',
        whenToCallNow:
          'If you notice a white or cloudy appearance in one or both of your baby\'s pupils, or if their eyes seem to be very misaligned, call your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-eye-contact', 'wandering-eyes', 'vision-concern'],
      },
      {
        id: 'se-1m-calms-when-held',
        name: 'Calms when picked up or spoken to',
        plainDescription:
          'Your baby settles down when you hold them, rock them, or talk softly to them.',
        whatItLooksLike:
          'When your baby is fussing and you pick them up, they may reduce their crying, relax their body, or mold into your shoulder. Gentle rocking, shushing, or speaking in a calm voice often helps them settle.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2.5,
        },
        whenNormal:
          'Most newborns can be soothed by being held, rocked, or hearing a calm voice. Some babies are fussier than others and may take longer to calm — this is still within the normal range, especially during the "witching hour" in the evenings.',
        whenToMention:
          'If your baby is inconsolable for hours on end and nothing seems to help, talk to your pediatrician about possible causes like colic, reflux, or discomfort. You deserve support too.',
        whenToCallNow:
          'If your baby cries inconsolably and also has a fever, is vomiting, or seems to be in pain, call your pediatrician or go to urgent care right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist — 2 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['inconsolable-crying', 'colic', 'not-bonding'],
      },
      {
        id: 'se-1m-brief-eye-contact',
        name: 'Makes brief eye contact',
        plainDescription:
          'Your baby looks into your eyes for short moments when you hold them close.',
        whatItLooksLike:
          'During feeding or quiet alert moments, your baby locks eyes with you for a few seconds at a time. These moments may be fleeting at first but will grow longer over the coming weeks.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2.5,
        },
        whenNormal:
          'Eye contact starts as very brief glances in the newborn period and gradually increases. These moments are powerful — they are the beginning of your baby\'s social connection with you.',
        whenToMention:
          'If your baby has never made any eye contact by about 2 months, let your pediatrician know so they can evaluate vision and early social development.',
        whenToCallNow:
          'If your baby\'s eyes always appear misaligned, or if you notice anything unusual about how their eyes look or move, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-eye-contact', 'vision-concern', 'no-social-response'],
      },
    ],
    cognitive: [
      {
        id: 'cog-1m-focuses-close',
        name: 'Focuses on objects 8-12 inches away',
        plainDescription:
          'Your baby can focus on things that are close to their face, like your face during feeding.',
        whatItLooksLike:
          'Your baby can see things best at about 8 to 12 inches away. At this distance, they will stare at high-contrast patterns, your face, or a brightly colored toy. Anything farther away looks blurry to them right now.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2,
        },
        whenNormal:
          'Newborn vision is naturally limited to close-up. Your baby is not ignoring things farther away — they simply cannot see them clearly yet. Vision improves rapidly over the first few months.',
        whenToMention:
          'If your baby does not seem to focus on anything at close range by about 6 to 8 weeks, mention it to your pediatrician.',
        whenToCallNow:
          'If you notice a white reflection in your baby\'s pupil in photos or in person, contact your pediatrician immediately.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['vision-concern', 'not-focusing', 'wandering-eyes'],
      },
      {
        id: 'cog-1m-prefers-patterns',
        name: 'Prefers high-contrast patterns',
        plainDescription:
          'Your baby is drawn to bold black-and-white patterns and the edges of objects.',
        whatItLooksLike:
          'If you hold a black-and-white striped card near your baby, they may stare at it intently. They are especially attracted to sharp contrasts and the borders where light and dark meet.',
        typicalRange: {
          earlyMonths: 0,
          averageMonths: 0.5,
          lateNormalMonths: 1.5,
          concernThresholdMonths: 2.5,
        },
        whenNormal:
          'This visual preference is built-in and helps your baby make sense of a fuzzy world. High-contrast toys and books are great for this age, but your face remains the most interesting thing in their world.',
        whenToMention:
          'If your baby shows no visual interest in anything — no staring at faces, lights, or high-contrast objects — let your pediatrician know.',
        whenToCallNow:
          'If your baby never seems to react visually to anything at all, seek evaluation from your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['vision-concern', 'not-focusing', 'no-visual-interest'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not respond to loud sounds at all',
      action:
        'Contact your pediatrician to discuss a hearing evaluation. Newborn hearing screening may need to be repeated or followed up.',
    },
    {
      description: 'Never seems to focus on your face even at close range',
      action:
        'Mention this at your next well-child visit. Your pediatrician can check your baby\'s vision and refer to a specialist if needed.',
    },
    {
      description: 'Body feels very floppy or very stiff when picked up',
      action:
        'Call your pediatrician. Unusual muscle tone — either too loose or too rigid — should be evaluated.',
    },
    {
      description: 'Does not suck or feed well',
      action:
        'If your baby is not feeding well, losing weight, or seems too sleepy to eat, contact your pediatrician or a lactation consultant today.',
    },
    {
      description: 'Has a weak, high-pitched, or unusual cry',
      action:
        'A very high-pitched or unusually weak cry can sometimes indicate a medical issue. Let your pediatrician know right away.',
    },
  ],
  notes:
    'The first month is a time of enormous adjustment — for your baby and for you. Your newborn is getting used to life outside the womb, and their main jobs right now are eating, sleeping, and being close to you. Developmental milestones at this age are mostly reflexive, meaning your baby is not choosing to do them — their nervous system is wired to respond automatically. This is completely normal and expected. Every baby develops at their own pace, and there is a wide range of normal. If something worries you, trust your instincts and ask your pediatrician. No concern is too small to bring up.',
};
