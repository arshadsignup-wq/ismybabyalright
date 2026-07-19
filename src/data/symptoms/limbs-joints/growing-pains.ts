import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'growing-pains',
  title: 'Growing Pains in Toddlers & Young Children',
  bodySystem: 'limbs-joints',
  description: 'Growing pains are a common cause of recurrent leg pain in children, affecting 10-35% of children aged 3-12 years. Despite the name, they are not actually caused by growth. They typically present as bilateral (both legs), deep aching pain in the thighs, shins, or calves, occurring in the late afternoon or evening and often waking the child at night. The child is completely fine by morning with normal activity, and physical examination and tests are normal.',
  possibleCauses: [
    { cause: 'Growing pains (benign recurrent limb pain of childhood)', likelihood: 'common' },
    { cause: 'Muscle fatigue from daytime activity', likelihood: 'common' },
    { cause: 'Overuse/muscle strain from active play', likelihood: 'common' },
    { cause: 'Hypermobility-related pain', likelihood: 'uncommon' },
    { cause: 'Juvenile idiopathic arthritis', likelihood: 'uncommon' },
    { cause: 'Osteomyelitis or bone infection', likelihood: 'rare' },
    { cause: 'Leukemia or bone tumor', likelihood: 'rare' },
    { cause: 'Restless leg syndrome', likelihood: 'rare' },
    { cause: 'Vitamin D deficiency', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Growing pains do not occur at this age. Pain or irritability with limb movement should be investigated.', whenToWorry: 'Any apparent limb pain in an infant needs evaluation (fracture, infection, or other cause).' },
    { ageRange: '2-6 months', normalVariation: 'Growing pains do not occur at this age.', whenToWorry: 'Apparent limb pain (crying with movement, not using limb) is never growing pains in infancy and needs investigation.' },
    { ageRange: '6-12 months', normalVariation: 'Growing pains do not typically occur under age 2-3. Occasional night waking with discomfort may be related to teething or other causes.', whenToWorry: 'Limb pain, swelling, or disuse at this age is not growing pains — seek evaluation.' },
    { ageRange: '1-3 years', normalVariation: 'Growing pains can begin as early as age 2-3. Classic features: bilateral leg pain (shins, calves, thighs), evening/night occurrence, completely normal by morning, no limp, no swelling, and relieved by massage or comfort. Episodes last 30 minutes to 2 hours.', whenToWorry: 'Unilateral (one side) pain only. Pain still present in the morning. Pain causing a limp or refusal to walk. Joint swelling, redness, or warmth. Fever with pain. Pain worsening over time. Pain in bones rather than muscles. Night pain that wakes child AND is present in morning too.' },
  ],
  urgencyLevels: {
    emergency: [
      'Severe bone pain with fever and child appearing very unwell',
      'Limb pain with inability to move or bear weight and systemic illness',
    ],
    urgent: [
      'Persistent unilateral leg pain with limp',
      'Bone pain with fever (osteomyelitis or malignancy)',
      'Pain with joint swelling or heat',
      'Night pain with associated weight loss, pallor, or bruising',
      'Back pain with limb pain (spinal concern)',
    ],
    sameDay: [
      'Leg pain that is present in the morning or causing daytime limping',
      'Pain that is progressive over weeks',
      'Leg pain with reduced activity or not wanting to play',
      'Pain in single specific location (same spot every time)',
    ],
    monitor: [
      'Classic growing pains: bilateral, evening/night, gone by morning, child completely well between episodes',
      'Episodes responding well to massage and simple pain relief',
      'Infrequent episodes (once or twice per week or less) not impacting daily life',
    ],
  },
  homeRemedies: [
    'Massage the affected legs — gentle rubbing of thighs and calves often provides rapid relief',
    'Apply a warm heat pack or warm towel to sore areas',
    'Stretching exercises before bed: gentle calf, hamstring, and quadriceps stretches',
    'Give age-appropriate pain relief (ibuprofen or acetaminophen) if pain is distressing',
    'Reassure the child that the pain will go away and is not dangerous',
    'Ensure adequate hydration throughout the day',
    'Maintain regular exercise — activity does not worsen growing pains',
    'Check vitamin D levels if episodes are very frequent (discuss with doctor)',
    'Keep a pain diary to identify patterns and share with doctor if needed',
    'Growing pains are a "diagnosis of exclusion" — mention to your pediatrician at the next visit for confirmation',
  ],
  relatedSymptomSlugs: ['limping', 'swollen-joint', 'irritability'],
  relatedIllnessSlugs: ['growing-pains', 'juvenile-arthritis', 'vitamin-d-deficiency'],
  relatedConcernSlugs: ['toddler-leg-pain-night', 'child-waking-with-leg-pain', 'toddler-growing-pains'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Growing Pains. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Growing-Pains.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Growing pains - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/growing-pains/symptoms-causes/syc-20354349' },
    { org: 'NIH', citation: 'National Library of Medicine. Growing Pains: A Clinical Review. Pediatrics in Review.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6898848/' },
  ],
};
