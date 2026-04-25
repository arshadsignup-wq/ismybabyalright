import type { AgeCheckpoint } from './types';

export const checkpoint: AgeCheckpoint = {
  id: '4-months',
  label: '4 Months',
  ageInMonths: 4,
  categories: {
    grossMotor: [
      {
        id: 'gm-4m-head-steady',
        name: 'Holds head steady without support',
        plainDescription:
          'When you hold your baby upright, their head stays steady and does not wobble or flop.',
        whatItLooksLike:
          'When you hold your baby against your shoulder or sitting upright in your lap, they keep their head centered and steady. They can look around without their head falling forward or to the side.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3,
          lateNormalMonths: 4.5,
          concernThresholdMonths: 5,
        },
        whenNormal:
          'Most babies have steady head control by 3 to 4 months. You will notice they can sit in a supported position and look around freely. Tummy time has been building up to this  -  all those little push-ups paid off.',
        whenToMention:
          'If your baby\'s head still wobbles or flops when held upright by about 4 to 5 months, mention it to your pediatrician. They can assess muscle tone and neck strength.',
        whenToCallNow:
          'If your baby had steady head control and suddenly loses it, or if their head always falls to one side and they cannot straighten it, contact your pediatrician right away.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['no-head-control', 'head-tilt', 'floppy-baby'],
      },
      {
        id: 'gm-4m-pushes-up-elbows',
        name: 'Pushes up on elbows during tummy time',
        plainDescription:
          'When on their tummy, your baby props themselves up on their elbows and lifts their chest off the floor.',
        whatItLooksLike:
          'During tummy time, your baby pushes up onto their forearms, lifting their head and chest well off the surface. They may look around in this position and seem proud of their new vantage point. Some babies can hold this position for a minute or more.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3.5,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'This "mini push-up" is an important stepping stone toward crawling. It builds upper body strength and gives your baby a new view of the world. Babies who get regular tummy time tend to achieve this earlier.',
        whenToMention:
          'If your baby cannot push up on their forearms at all by about 5 months, discuss it with your pediatrician.',
        whenToCallNow:
          'If your baby seems to have significant weakness in their arms or cannot bear any weight on them, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['hates-tummy-time', 'weak-arms', 'not-pushing-up'],
      },
      {
        id: 'gm-4m-may-roll-tummy-back',
        name: 'May begin to roll from tummy to back',
        plainDescription:
          'Your baby might surprise you by rolling from their tummy onto their back during tummy time.',
        whatItLooksLike:
          'While on their tummy, your baby may push up, shift their weight to one side, and topple over onto their back. It may look accidental at first. Some babies do it once and then not again for weeks  -  that is normal.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 6,
          concernThresholdMonths: 7,
        },
        whenNormal:
          'Rolling from tummy to back is usually the first direction babies learn to roll, because pushing up on their arms creates the momentum. Not all babies roll at 4 months  -  many do not roll consistently until 5 to 6 months. Both are normal.',
        whenToMention:
          'If your baby shows no interest in rolling and cannot shift their weight to either side by about 6 months, bring it up with your pediatrician.',
        whenToCallNow:
          'If your baby seems unable to move one side of their body, or if you notice a sudden change in their ability to move, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
          {
            org: 'WHO',
            citation:
              'WHO Motor Development Study: Windows of achievement for gross motor milestones',
            url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones',
          },
        ],
        relatedConcerns: ['not-rolling-over', 'asymmetric-movement', 'not-shifting-weight'],
      },
    ],
    fineMotor: [
      {
        id: 'fm-4m-reaches-toys',
        name: 'Reaches for toys with one hand',
        plainDescription:
          'Your baby extends their arm to reach for a toy they want, even if they cannot always grab it yet.',
        whatItLooksLike:
          'When a toy is within reach, your baby extends one arm toward it, sometimes swatting at it. Their aim is improving but still not precise  -  they may bat the toy, knock it over, or sometimes grab it successfully.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'Reaching is an amazing coordination of vision, attention, and motor control. Your baby has to see the toy, want it, and coordinate their arm muscles to reach for it  -  that is a lot of brain work. Placing toys within arm\'s reach during play time encourages this skill.',
        whenToMention:
          'If your baby does not reach for objects at all by about 5 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby only reaches with one arm and seems unable to move the other arm, or if they cannot open their hand to grasp at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-reaching', 'not-grasping', 'one-sided-reaching'],
      },
      {
        id: 'fm-4m-grasps-toy',
        name: 'Can hold a toy and shake it',
        plainDescription:
          'Your baby can wrap their fingers around a rattle or small toy and hold onto it.',
        whatItLooksLike:
          'When you place a rattle in your baby\'s hand, they grip it and may wave it around or bring it to their mouth. They may shake it and discover it makes a sound. They will drop it after a while  -  that is normal.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'Grasping and holding objects is a major fine motor milestone. At this age, your baby uses their whole hand (palmar grasp) rather than individual fingers. They will drop objects frequently  -  their release control is still developing.',
        whenToMention:
          'If your baby does not hold onto toys placed in their hand by about 5 months, or if they never seem to bring objects to their mouth, discuss it with your pediatrician.',
        whenToCallNow:
          'If your baby\'s hands remain tightly fisted and they cannot hold any object at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-grasping', 'always-fisted-hands', 'not-mouthing-objects'],
      },
      {
        id: 'fm-4m-hands-to-mouth',
        name: 'Brings hands to mouth',
        plainDescription:
          'Your baby reliably brings their hands  -  and everything they hold  -  to their mouth.',
        whatItLooksLike:
          'Your baby frequently chews on their fingers, fist, or any toy they are holding. They explore textures and shapes with their mouth. You will find everything your baby holds ends up in their mouth.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3.5,
          lateNormalMonths: 5,
          concernThresholdMonths: 5.5,
        },
        whenNormal:
          'Mouthing objects is a crucial way babies learn about the world  -  their mouth has more nerve endings than their fingers at this age. This is not a bad habit; it is healthy development. Just make sure objects are safe and clean.',
        whenToMention:
          'If your baby never brings their hands or objects to their mouth by about 5 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems unable to coordinate bringing their hands to their face at all, contact your pediatrician for a motor skill evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-bringing-hands-to-mouth', 'not-mouthing-objects', 'motor-delay'],
      },
    ],
    language: [
      {
        id: 'lang-4m-babbles',
        name: 'Babbles with expression  -  copies sounds heard',
        plainDescription:
          'Your baby experiments with sounds, stringing together vowels and sometimes consonant-like sounds like "ba" or "ga."',
        whatItLooksLike:
          'Your baby "talks" in long strings of sounds: "ah-goo," "eh-eh-eh," "ba-ba." They may raise and lower their pitch as if having a real conversation. When you talk to them, they may respond with their own string of sounds.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 6,
          concernThresholdMonths: 7,
        },
        whenNormal:
          'This early babbling is your baby practicing the building blocks of language. They are experimenting with their voice, learning how their mouth and tongue make different sounds. Talking back to your baby encourages more babbling.',
        whenToMention:
          'If your baby is not making any varied sounds beyond crying by about 6 months  -  no cooing, squealing, or babbling  -  mention it to your pediatrician.',
        whenToCallNow:
          'If your baby was babbling and has suddenly gone silent, or if they do not respond to sounds at all, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-babbling', 'not-making-sounds', 'hearing-concern'],
      },
      {
        id: 'lang-4m-copies-sounds',
        name: 'Tries to copy sounds you make',
        plainDescription:
          'When you make a sound, your baby tries to repeat it back to you.',
        whatItLooksLike:
          'If you say "ooooh" to your baby, they may pause, study your face, and then try to make a similar sound back. It will not be a perfect copy  -  but the intention to imitate is what matters.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4.5,
          lateNormalMonths: 6,
          concernThresholdMonths: 7,
        },
        whenNormal:
          'Sound imitation is a critical language skill that develops over the first 4 to 6 months. Your baby is learning the back-and-forth rhythm of conversation, even before they understand words. These early "conversations" are some of the most important interactions you can have.',
        whenToMention:
          'If your baby never seems to try to respond to your sounds by about 6 months, bring it up at your next visit.',
        whenToCallNow:
          'If your baby is completely unresponsive to your voice  -  no looking, no sound attempts, no reaction at all  -  contact your pediatrician to discuss hearing and social development.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-babbling', 'not-imitating', 'hearing-concern'],
      },
      {
        id: 'lang-4m-cries-differently',
        name: 'Cries in different ways for hunger, pain, and tiredness',
        plainDescription:
          'Your baby\'s cries now clearly differ depending on whether they are hungry, in pain, or tired.',
        whatItLooksLike:
          'You can usually distinguish your baby\'s hunger cry (rhythmic, building) from their pain cry (sudden, intense, high-pitched) and their overtired cry (fussy, whiny, accompanied by eye-rubbing). This is your baby communicating increasingly clearly.',
        typicalRange: {
          earlyMonths: 1,
          averageMonths: 3,
          lateNormalMonths: 4,
          concernThresholdMonths: 5,
        },
        whenNormal:
          'By this age, most parents have become fluent in their baby\'s cry language. Each baby is unique, though  -  some are louder, some are quieter. The variety of cries is what matters.',
        whenToMention:
          'If your baby\'s cry never varies or has an unusual quality, bring it up with your pediatrician.',
        whenToCallNow:
          'Any sudden, unusual, persistent, or inconsolable crying that is different from normal warrants a call to your pediatrician to rule out illness or injury.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Developmental Milestones',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['unusual-cry', 'inconsolable-crying', 'high-pitched-cry'],
      },
    ],
    socialEmotional: [
      {
        id: 'se-4m-spontaneous-smile',
        name: 'Smiles spontaneously, especially at people',
        plainDescription:
          'Your baby smiles freely and often  -  especially when they see familiar faces.',
        whatItLooksLike:
          'Your baby grins broadly when you walk into the room, when they see themselves in a mirror, or when a sibling makes a funny face. Their smile is clearly social and intentional. They may even laugh or squeal with delight.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3.5,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'By 4 months, most babies are generous with their smiles. They smile at parents, siblings, and sometimes even strangers. This is your baby\'s way of engaging with the social world. Some babies are naturally more smiley than others.',
        whenToMention:
          'If your baby rarely smiles at people, or only smiles at objects but not faces, let your pediatrician know.',
        whenToCallNow:
          'If your baby has never smiled at anyone and also does not make eye contact or respond to your voice, contact your pediatrician for evaluation.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['no-social-smile', 'no-eye-contact', 'not-responding-to-people'],
      },
      {
        id: 'se-4m-copies-expressions',
        name: 'Copies some facial expressions (smiling, frowning)',
        plainDescription:
          'Your baby mirrors some of the facial expressions they see  -  if you smile, they smile; if you stick out your tongue, they may try to copy it.',
        whatItLooksLike:
          'When you make exaggerated facial expressions  -  a big smile, wide eyes, or mouth opening  -  your baby watches intently and may attempt to copy the expression. They might open their mouth wide when you do, or furrow their brow.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3.5,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'Facial imitation is an amazing social skill. Your baby is learning by watching and copying, which is how they will learn many things in the months and years to come. The more expressions you show, the more they practice.',
        whenToMention:
          'If your baby does not seem to watch your facial expressions or make any attempt to copy them by about 5 to 6 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby shows no interest in faces at all and seems to look through people rather than at them, seek evaluation from your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-imitating', 'no-social-response', 'no-eye-contact'],
      },
      {
        id: 'se-4m-likes-play',
        name: 'Enjoys playing with people and may cry when playing stops',
        plainDescription:
          'Your baby clearly enjoys interactive play and may fuss or cry when you stop playing with them.',
        whatItLooksLike:
          'During peek-a-boo or gentle bouncing, your baby laughs, smiles, and looks excited. When the game ends, they may fuss, whimper, or look disappointed. They might kick or wave their arms to signal they want more.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'This is a wonderful sign that your baby is developing social engagement. They understand cause and effect in social interactions  -  that their reactions can keep the fun going. Play is one of the most important things you can do with your baby.',
        whenToMention:
          'If your baby seems uninterested in social play and never shows excitement or disappointment during interactive games by about 6 months, let your pediatrician know.',
        whenToCallNow:
          'If your baby seems extremely withdrawn, does not respond to any social interaction, and is also not making sounds, contact your pediatrician promptly.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-engaging', 'not-responding-to-people', 'no-social-response'],
      },
    ],
    cognitive: [
      {
        id: 'cog-4m-reaches-one-hand',
        name: 'Uses eyes and hands together to reach for a toy',
        plainDescription:
          'Your baby sees a toy, reaches for it, and can often grab it  -  their eyes and hands are working together.',
        whatItLooksLike:
          'Your baby spots a toy, fixes their gaze on it, and reaches out with one or both hands to grab it. This is eye-hand coordination in action. They may need several attempts, but the intentional reaching is the milestone.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'Eye-hand coordination is one of the most important cognitive-motor connections your baby develops. It requires their brain to process visual information and translate it into a motor command  -  an incredible feat of engineering for a tiny brain.',
        whenToMention:
          'If your baby does not seem to use their eyes to guide their reaching by about 5 to 6 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby cannot see objects in front of them or seems unable to coordinate any purposeful movement, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-reaching', 'not-grasping', 'vision-concern'],
      },
      {
        id: 'cog-4m-tracks-moving',
        name: 'Follows moving things with eyes smoothly',
        plainDescription:
          'Your baby can smoothly track a moving toy or person with their eyes from side to side.',
        whatItLooksLike:
          'When you slowly move a toy in an arc in front of your baby, they follow it smoothly with their eyes and head, tracking it all the way from one side to the other. The eye movement is much smoother than a few months ago.',
        typicalRange: {
          earlyMonths: 2,
          averageMonths: 3,
          lateNormalMonths: 4.5,
          concernThresholdMonths: 5,
        },
        whenNormal:
          'By 4 months, visual tracking should be fairly smooth. Your baby can now follow objects across a wide arc and may even track things that move up and down. This is a sign of maturing visual and brain development.',
        whenToMention:
          'If your baby still has very jerky eye movements when tracking objects, or if their eyes do not move together, mention it to your pediatrician.',
        whenToCallNow:
          'If you notice one eye consistently turning in or out, or if your baby\'s eyes seem to shake (nystagmus), contact your pediatrician or a pediatric ophthalmologist.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['not-tracking-objects', 'crossed-eyes', 'vision-concern'],
      },
      {
        id: 'cog-4m-recognizes-familiar',
        name: 'Recognizes familiar people and objects at a distance',
        plainDescription:
          'Your baby can recognize you and other familiar people from across the room.',
        whatItLooksLike:
          'When you walk into the room, your baby perks up, smiles, or kicks excitedly  -  even before you speak. They can distinguish familiar people from strangers and may show a clear preference for their primary caregivers.',
        typicalRange: {
          earlyMonths: 3,
          averageMonths: 4,
          lateNormalMonths: 5,
          concernThresholdMonths: 6,
        },
        whenNormal:
          'Your baby\'s distance vision has improved dramatically. They can now see across the room and recognize the people who matter most to them. This recognition is a sign of both visual development and memory.',
        whenToMention:
          'If your baby does not seem to recognize familiar people or shows no difference in response to caregivers versus strangers by about 6 months, mention it to your pediatrician.',
        whenToCallNow:
          'If your baby seems unable to see objects or people at any distance, or if you notice any changes in their eyes, contact your pediatrician.',
        sources: [
          {
            org: 'CDC',
            citation:
              'CDC "Learn the Signs. Act Early." Milestone Checklist  -  4 Months',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
          },
        ],
        relatedConcerns: ['vision-concern', 'not-recognizing-people', 'no-social-response'],
      },
    ],
  },
  redFlags: [
    {
      description: 'Does not watch things as they move',
      action:
        'Let your pediatrician know. Visual tracking should be well-established by this age, and a vision check is recommended.',
    },
    {
      description: 'Does not smile at people',
      action:
        'If your baby still has not shown social smiles by 4 months, your pediatrician should evaluate social and emotional development.',
    },
    {
      description: 'Cannot hold head steady',
      action:
        'Head control should be well-developed by 4 months. Discuss with your pediatrician  -  they may recommend a physical therapy evaluation.',
    },
    {
      description: 'Does not coo or make sounds',
      action:
        'If your baby is not making any sounds besides crying, ask your pediatrician about a hearing evaluation and speech-language assessment.',
    },
    {
      description: 'Does not bring things to mouth',
      action:
        'Bringing hands and objects to mouth is expected by this age. Let your pediatrician know if this is not happening.',
    },
    {
      description: 'Does not push down with legs when feet are placed on a hard surface',
      action:
        'Your baby should push down with their legs when held in a standing position on a firm surface. If they do not, mention it to your pediatrician.',
    },
    {
      description: 'Has difficulty moving one or both eyes in all directions',
      action:
        'Contact your pediatrician or a pediatric ophthalmologist for evaluation of eye movement.',
    },
  ],
  notes:
    'Four months is often described as the "golden age" of babyhood. Your baby is more alert, more social, and more interactive than ever. They are laughing, babbling, reaching for toys, and lighting up when they see you. This is also a time when you really start to feel like you are getting to know your baby\'s personality. Some babies are more active, some are more observational  -  there is no right way to be a baby. Sleep patterns may be starting to consolidate (though plenty of babies are still waking at night, and that is okay). If your baby was premature, remember to consider their adjusted age when looking at milestones. As always, talk to your pediatrician if anything concerns you  -  they are there to help and will never judge you for asking.',
};
