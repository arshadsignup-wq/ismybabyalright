import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-arching-back',
  title: 'My Baby Arches Their Back',
  category: 'behavior',
  searchTerms: [
    'baby arching back',
    'newborn arching back',
    'baby arches back when held',
    'baby arches back and cries',
    'infant back arching',
    'why does my baby arch their back',
    'baby arching back during feeding',
    'baby arching back reflux',
    'baby arching back stiff',
    'baby arching back in sleep',
  ],
  quickAnswer:
    'Back arching is very common in babies and usually a normal way of expressing frustration, discomfort, or just stretching and moving. Most babies arch their backs when upset, tired, or trying to see something. However, persistent arching with crying, especially during feeding, can be a sign of reflux or discomfort that should be discussed with your pediatrician.',
  byAge: [
    {
      ageRange: 'Newborn - 3 months',
      context:
        'Newborns often arch their backs when crying, stretching, or passing gas. It is also common during tummy time as they build neck and back strength. However, frequent arching during or after feeding, especially with crying or spitting up, may indicate reflux or another feeding issue. If arching is accompanied by stiffness, always turning to one side, or seems painful, mention it to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age may arch their backs when frustrated, trying to roll over, or resisting being held in a certain position. Back arching can also be a way to communicate "I\'m done" or "I want to see something else." Some babies arch when overstimulated. If your baby arches frequently during feedings and seems uncomfortable, or if the arching is very stiff and accompanied by other unusual movements, consult your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies often arch their backs during tantrums or when they want to be put down (or picked up). This is a normal expression of frustration or preference. Arching while trying to see something or reach for a toy is also typical. Continued arching with feeding, especially if your baby is not gaining weight well, should be evaluated. Stiff arching or arching with unusual eye movements or loss of awareness may warrant urgent evaluation.',
    },
    {
      ageRange: '12+ months',
      context:
        'Toddlers may arch their backs during tantrums or when resisting diaper changes, car seats, or other unwanted activities. This is normal toddler behavior. If arching seems involuntary, is very stiff, or is paired with other concerning symptoms (seizures, developmental regression, extreme irritability), contact your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby arches their back when upset, frustrated, or having a tantrum and calms down afterward',
    'Arching happens during stretching, playing, or practicing new motor skills like rolling',
    'Your baby is feeding well, gaining weight, and meeting developmental milestones',
    'Arching is flexible (your baby can be repositioned) and not accompanied by stiffness or pain',
    'Your baby is otherwise happy, engaged, and developing typically',
  ],
  whenToMention: [
    'Your baby frequently arches during or after feeding and seems uncomfortable or cries',
    'Arching is paired with poor weight gain, frequent spitting up, or refusal to eat',
    'Your baby seems stiff when arching, or you have difficulty bending their body gently',
    'Arching is constant or very frequent and does not seem to be related to frustration or normal movement',
  ],
  whenToActNow: [
    'Your baby arches their back and becomes stiff, unresponsive, or has unusual eye movements or jerking  -  this could be a seizure',
    'Arching is accompanied by a high-pitched cry, fever, or your baby seems to be in severe pain',
    'Your baby arches their back and has difficulty breathing, turns blue, or becomes limp',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Reflux. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Infant-Reflux.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Muscle Tone and Movement Differences in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Muscle-Tone.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Spasms and Movement Disorders. MedlinePlus.',
      url: 'https://medlineplus.gov/movementdisorders.html',
    },
  ],
};
