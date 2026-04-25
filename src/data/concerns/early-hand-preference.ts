import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'early-hand-preference',
  title: 'My Baby Prefers One Hand Too Early',
  category: 'physical',
  searchTerms: [
    'baby prefers one hand too early',
    'baby only reaches with one hand',
    'early handedness in babies',
    'baby always uses right hand',
    'baby always uses left hand',
    'hand preference before 1 year',
    'when should babies develop handedness',
    'baby ignores one hand completely',
    'baby one hand dominant too soon',
    'early hand preference cerebral palsy',
  ],
  quickAnswer:
    'True hand preference should not develop until at least 18 months to 2 years of age. If your baby consistently uses only one hand and ignores or avoids using the other before 18 months, it may indicate that the less-used hand or arm has reduced strength or coordination. This is different from a slight preference and is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-5 months',
      context:
        'At this age, babies should use both hands fairly equally, though movements are still developing and may look uncoordinated. Watch for whether your baby opens both hands from a fisted position, bats at objects with both hands, and brings both hands to their mouth. If one hand remains tightly fisted while the other opens freely, or if your baby only reaches and bats with one arm, this is a significant observation to share with your pediatrician.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies should be actively reaching, grasping, and transferring objects between both hands. It is normal for a baby to sometimes prefer one hand for a particular task, but they should be capable and willing to use both. If your baby consistently avoids using one hand, always reaches across their body to use the preferred hand, or one hand seems much weaker or clumsier, evaluation is recommended.',
    },
    {
      ageRange: '9-14 months',
      context:
        'Babies are refining their fine motor skills, developing the pincer grasp, and using their hands for self-feeding and play. A slight hand preference may emerge and is normal, but the key question is whether your baby can effectively use both hands. If one hand is clearly weaker, if your baby avoids using it even when objects are placed on that side, or if one hand moves differently than the other, discuss this with your pediatrician.',
    },
    {
      ageRange: '15-18 months',
      context:
        'A mild hand preference is becoming more acceptable at this age, as true handedness can begin to emerge after 18 months. However, one hand should not be dramatically dominant over the other. Your child should still use both hands for activities like stacking blocks, holding food, and clapping. If one hand is clearly the "strong" hand and the other seems to just assist or is avoided, an occupational therapy evaluation may be beneficial.',
    },
  ],
  whenNormal: [
    'Your baby uses one hand slightly more often but can and does use both hands effectively for grasping and play.',
    'Your toddler over 18 months is developing a natural hand preference but can still use both hands well.',
    'Your baby alternates which hand they prefer depending on which side the object is on.',
    'Your baby uses both hands together for activities like clapping, holding a bottle, and banging toys.',
  ],
  whenToMention: [
    'Your baby under 12 months strongly favors one hand and rarely uses the other for reaching or grasping.',
    'One hand seems weaker or less coordinated, dropping objects more or having difficulty grasping.',
    'Your baby avoids using one hand even when you deliberately place toys on that side.',
  ],
  whenToActNow: [
    'Your baby previously used both hands equally and has stopped using one hand, as loss of function requires urgent evaluation.',
    'One hand is consistently fisted and cannot open to grasp while the other hand works normally, particularly after 4 months of age.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-transferring',
    'fine-motor-pincer-grasp',
    'fine-motor-self-feeding',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By 9 Months.',
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
