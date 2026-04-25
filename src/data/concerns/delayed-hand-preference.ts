import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'delayed-hand-preference',
  title: 'My Baby Shows an Early Hand Preference',
  category: 'physical',
  searchTerms: [
    'baby only uses one hand',
    'early hand preference baby',
    'baby favors one hand',
    'baby right hand dominant early',
    'baby left hand dominant early',
    'when do babies develop handedness',
    'baby always uses same hand',
    'baby ignores one hand',
    'hand preference before 18 months',
    'baby one hand stronger than other',
  ],
  quickAnswer:
    'True handedness  -  consistently preferring one hand over the other  -  should not develop until at least 18 months to 2 years of age, and often not until age 3-4. If your baby strongly favors one hand before 18 months, it may indicate that the other hand or arm is weaker or has decreased coordination, which is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies naturally alternate between hands and should use both sides of their body equally. If you notice your baby consistently keeping one hand fisted while the other hand opens and grasps freely, this is an important observation to share with your pediatrician. It can sometimes indicate a difference in muscle tone between the two sides of the body.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age should be reaching, grasping, and transferring objects with both hands, though you might notice a slight preference emerging. It\'s normal for a baby to use their right hand more often than their left (or vice versa), but they should still be capable of using both hands effectively. If one hand is clearly dominant and the other is rarely used, mention it to your doctor.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Some preference is emerging but your toddler should still use both hands for play, self-feeding, and exploration. If your child almost exclusively uses one hand and avoids using the other, or if the non-preferred hand seems weaker or clumsier, an evaluation is recommended. Early identification of asymmetry leads to better outcomes.',
    },
    {
      ageRange: '18+ months',
      context:
        'True handedness can begin to emerge after 18 months and is completely normal. The key distinction is: does your child prefer one hand but CAN use the other effectively? If so, that\'s typical handedness developing. If one hand is significantly weaker or less coordinated, that\'s different and should be evaluated.',
    },
  ],
  whenNormal: [
    'Your baby is over 18 months and uses one hand more often but can use both hands well  -  true handedness is starting to develop naturally.',
    'Your baby alternates which hand they prefer depending on the activity or which side an object is on.',
    'Your baby uses both hands together for activities like banging toys, holding a bottle, or clapping.',
    'Your child reaches with whichever hand is closer to the object rather than always crossing the body to use the same hand.',
  ],
  whenToMention: [
    'Your baby under 12 months consistently reaches with only one hand and rarely uses the other.',
    'One of your baby\'s hands seems weaker or clumsier than the other.',
    'Your baby avoids using one hand during play even when objects are placed on that side.',
    'You notice that one hand seems tighter or more fisted than the other past 3-4 months of age.',
  ],
  whenToActNow: [
    'Your baby used to use both hands equally and has stopped using one  -  any loss of function requires prompt evaluation.',
    'One hand is consistently fisted while the other moves freely, especially after 4 months of age  -  this can indicate neurological differences that benefit from early therapy.',
    'Your baby has no use of one arm or hand and cannot grasp with it at all.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-transferring',
    'fine-motor-pincer-grasp',
    'fine-motor-midline-play',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hand and Finger Skills Milestones',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Your Child By 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'Palpalano S, Bhatt A. Early Hand Preference and Neurodevelopmental Outcomes. Pediatrics in Review. 2020.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
  ],
};
