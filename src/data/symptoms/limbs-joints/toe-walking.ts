import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'toe-walking',
  title: 'Toe Walking in Babies & Toddlers',
  bodySystem: 'limbs-joints',
  description: 'Toe walking (walking on tiptoes) is common when children first start walking and is usually a normal phase that resolves by age 2-3. It is called "idiopathic toe walking" when no underlying cause is found. However, persistent toe walking beyond age 2, or toe walking that is always present (never flat-footed), may indicate tight Achilles tendons, sensory processing issues, cerebral palsy, or muscular dystrophy and warrants evaluation.',
  possibleCauses: [
    { cause: 'Idiopathic toe walking (habitual, no underlying cause)', likelihood: 'common' },
    { cause: 'Normal early walking phase (first 3-6 months of walking)', likelihood: 'common' },
    { cause: 'Tight Achilles tendon (shortened heel cord)', likelihood: 'uncommon' },
    { cause: 'Sensory processing differences', likelihood: 'uncommon' },
    { cause: 'Autism spectrum disorder (associated with toe walking)', likelihood: 'uncommon' },
    { cause: 'Cerebral palsy (spastic type)', likelihood: 'rare' },
    { cause: 'Muscular dystrophy', likelihood: 'rare' },
    { cause: 'Leg length discrepancy', likelihood: 'rare' },
    { cause: 'Spinal cord abnormality (tethered cord)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Not applicable — babies are not walking. Pointing toes when held upright is normal primitive stepping reflex.', whenToWorry: 'Persistent stiffness or rigidity of legs. Legs that cross like scissors when held upright. Very tight muscles that resist passive stretching.' },
    { ageRange: '2-6 months', normalVariation: 'Bearing weight on toes when bounced is normal. Babies enjoy standing on tiptoes when supported.', whenToWorry: 'Legs always stiff and extended. Inability to bring feet flat when weight-bearing. Marked preference for extension postures. Asymmetric tone or posturing.' },
    { ageRange: '6-12 months', normalVariation: 'Standing on toes when pulling to stand or cruising is normal as balance develops. Most babies alternate between flat feet and tiptoes.', whenToWorry: 'Always on toes and never flat-footed. Very tight calf muscles. Unable to achieve flat-foot position even passively. Asymmetric (one side only). Stiff gait pattern.' },
    { ageRange: '1-3 years', normalVariation: 'Intermittent toe walking in the first 6 months of independent walking is common and usually resolves. Child should be able to walk flat-footed when asked or when barefoot.', whenToWorry: 'Persistent toe walking beyond age 2. Inability to bring heels to ground when requested. Walking on toes more than 50% of the time. Toe walking with developmental delays, speech delay, or social concerns (autism screening). Progressive toe walking. Toe walking with clumsiness, frequent falls, or difficulty climbing stairs.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden onset toe walking with back pain, leg weakness, or loss of bladder/bowel control (spinal cord concern)',
    ],
    urgent: [
      'New onset toe walking after previously walking flat-footed (regression)',
      'Toe walking with progressive weakness or frequent falls (muscular dystrophy)',
      'Toe walking with pain or refusal to bear weight fully',
    ],
    sameDay: [
      'Persistent toe walking beyond age 2-3 years — needs orthopedic evaluation',
      'Toe walking with developmental concerns',
      'Inability to achieve flat-foot position',
      'Toe walking with increasing tightness of heel cords',
    ],
    monitor: [
      'Intermittent toe walking in new walker under age 2',
      'Child who CAN walk flat-footed but sometimes chooses toes',
      'Toe walking less than 25% of time with normal development',
      'Known idiopathic toe walking under professional monitoring',
    ],
  },
  homeRemedies: [
    'Encourage barefoot walking on varied surfaces (grass, sand, carpet) to promote heel-striking',
    'Play games that encourage flat-footed activities: squatting to pick up toys, walking up slopes',
    'Gentle calf stretches: with child sitting, gently flex foot toward shin and hold 20-30 seconds',
    'Avoid walkers and bouncers which may encourage toe walking patterns',
    'Supportive shoes with firm heel counter when wearing shoes (not soft-soled when toe walking)',
    'Do not constantly correct the child verbally as this may cause anxiety without fixing the pattern',
    'Activities like riding tricycles, climbing, and walking uphill encourage heel-down pattern',
    'If persistent, ask about referral to pediatric physical therapy',
  ],
  relatedSymptomSlugs: ['stiffness', 'limping', 'bowed-legs'],
  relatedIllnessSlugs: ['cerebral-palsy', 'muscular-dystrophy', 'autism-spectrum-disorder'],
  relatedConcernSlugs: ['toddler-toe-walking', 'baby-stiff-legs', 'toddler-walking-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toe Walking in Children. Pediatrics. 2021;148(3).', url: 'https://publications.aap.org/pediatrics' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Toe walking in children — When to worry.', url: 'https://www.mayoclinic.org/diseases-conditions/toe-walking/symptoms-causes/syc-20378410' },
    { org: 'NIH', citation: 'National Library of Medicine. Idiopathic Toe Walking: A Review. Journal of Children\'s Orthopaedics.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3971827/' },
  ],
};
