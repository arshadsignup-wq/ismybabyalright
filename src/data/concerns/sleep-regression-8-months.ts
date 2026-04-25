import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-8-months',
  title: '8-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '8 month sleep regression',
    'baby sleep regression 8 months',
    '8 month old suddenly not sleeping',
    'why is my 8 month old waking up at night',
    '8 month sleep regression how long',
    'sleep regression at 9 months',
    '8 month old fighting sleep',
    'baby standing in crib at night',
    '8 month sleep regression separation anxiety',
    'how to survive 8 month sleep regression',
  ],
  quickAnswer:
    'The 8-month sleep regression is usually driven by major developmental leaps in mobility, cognition, and attachment. Your baby is learning to sit, crawl, pull up, and is developing object permanence and separation anxiety. These exciting milestones can temporarily disrupt sleep, but most babies settle within 2-4 weeks.',
  byAge: [
    {
      ageRange: '7-8 months',
      context:
        'Around this age, your baby is experiencing explosive growth in motor skills. Many babies are learning to sit independently, crawl, or pull themselves up to standing. At night, they may wake up and practice these skills in their crib, unable to settle back down easily. The cognitive effort of mastering these movements can make it harder to transition between sleep cycles.',
    },
    {
      ageRange: '8-9 months',
      context:
        'Separation anxiety typically peaks during this window. Your baby now understands object permanence, meaning they know you exist even when you\'re not visible, which can cause distress when they wake at night and you\'re not there. They may wake more frequently seeking reassurance, resist bedtime, or cry when you leave the room. This is cognitively normal and actually a sign of secure attachment.',
    },
    {
      ageRange: '9-10 months',
      context:
        'Most babies begin to adjust to their new skills and the intensity of separation anxiety often lessens slightly, though it may continue for several more months. You might notice your baby can now settle themselves after pulling up or rolling around in their crib. Consistent, calm responses to night wakings help your baby build confidence that you\'ll return.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If sleep difficulties persist, they may be related to schedule changes (many babies drop to 2 naps around 8-9 months), teething molars, or continued separation anxiety. Some babies also begin walking during this time, which can bring another brief sleep disruption. Generally, sleep consolidates well again by 12 months if the environment and routine remain consistent.',
    },
  ],
  whenNormal: [
    'Your baby wakes frequently at night and wants to practice sitting, crawling, or standing in their crib',
    'Bedtime becomes a battle, with your baby crying when you leave the room',
    'Your baby who previously slept well suddenly starts waking 3-4 times per night',
    'Changes coincide with new motor milestones or increased clinginess during the day',
    'Your baby settles when you provide comfort but becomes upset again when you leave',
  ],
  whenToMention: [
    'Sleep regression lasts longer than 6 weeks with no signs of improvement',
    'Your baby seems excessively tired during the day, is cranky, or has stopped progressing with developmental milestones',
    'Separation anxiety is so severe that your baby can\'t tolerate being put down at all, even when awake and playing',
    'You notice snoring, mouth breathing, or pauses in breathing during sleep',
  ],
  whenToActNow: [
    'Your baby has stopped breathing, is gasping for air, or has a blue or grey color around the lips',
    'Your baby is unresponsive, extremely lethargic, or difficult to wake',
    'Sleep disruption is accompanied by high fever, vomiting, or other signs of acute illness',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'cognitive-object-permanence',
    'social-separation-anxiety',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 8 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-8-Months.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Regressions in Babies. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/sleep-regressions',
    },
  ],
};
