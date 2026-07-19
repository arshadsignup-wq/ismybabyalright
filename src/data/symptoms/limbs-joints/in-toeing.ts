import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'in-toeing',
  title: 'In-Toeing (Pigeon Toes) in Babies & Toddlers',
  bodySystem: 'limbs-joints',
  description: 'In-toeing (pigeon toes) occurs when a child\'s feet point inward rather than straight ahead when walking. It is one of the most common orthopedic concerns parents bring to pediatricians and is almost always a normal variant that self-corrects with growth. The three causes are: metatarsus adductus (foot curved inward), internal tibial torsion (shin bone rotated), and femoral anteversion (thigh bone rotated). The vast majority resolve without treatment by age 8-10.',
  possibleCauses: [
    { cause: 'Metatarsus adductus (curved forefoot from uterine positioning)', likelihood: 'common' },
    { cause: 'Internal tibial torsion (inward twist of shinbone)', likelihood: 'common' },
    { cause: 'Femoral anteversion (inward twist of thighbone)', likelihood: 'common' },
    { cause: 'Normal variant of gait in new walkers', likelihood: 'common' },
    { cause: 'Clubfoot (talipes equinovarus — rigid, not positional)', likelihood: 'rare' },
    { cause: 'Neurological condition causing muscle imbalance', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Metatarsus adductus is common at birth — the foot has a curved "bean" shape from intrauterine positioning. Flexible metatarsus adductus (foot can be straightened with gentle pressure) resolves in 90% of cases by age 1.', whenToWorry: 'Rigid foot deformity that cannot be corrected to neutral (clubfoot). Foot turned inward AND downward with deep creases. Stiff, rigid foot that resists gentle manipulation.' },
    { ageRange: '2-6 months', normalVariation: 'Metatarsus adductus is still visible but should be flexible. Internal tibial torsion is present from positioning and will become apparent later when walking begins.', whenToWorry: 'Foot becoming more rigid over time (not less). Foot that cannot be passively corrected to midline. Asymmetric deformity. Any associated hip abnormality.' },
    { ageRange: '6-12 months', normalVariation: 'As baby begins to stand and cruise, internal tibial torsion becomes visible as feet turn inward. This is common and expected.', whenToWorry: 'Very rigid in-toeing preventing normal standing. Pain or discomfort with standing. Significant asymmetry between sides. Associated hip clicking or instability.' },
    { ageRange: '1-3 years', normalVariation: 'In-toeing is very common in new walkers (ages 1-3). Internal tibial torsion is the most common cause at this age. Children may trip over their own feet occasionally. This typically improves significantly by age 3-4.', whenToWorry: 'In-toeing causing functional problems (falling much more than peers, unable to keep up). Pain with walking. Progressive worsening rather than improvement. Severe in-toeing at age 3+ without improvement. In-toeing with stiffness or neurological concerns.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden onset foot deformity after injury (fracture)',
    ],
    urgent: [
      'Rigid foot deformity in newborn that cannot be corrected (clubfoot — early treatment needed)',
      'In-toeing with pain, swelling, or new neurological symptoms',
    ],
    sameDay: [
      'Rigid metatarsus adductus in infant (may need serial casting)',
      'In-toeing causing significant functional impairment or frequent falls in a child over 3',
      'In-toeing with leg length discrepancy',
    ],
    monitor: [
      'Flexible metatarsus adductus in infant (resolves in 90% by age 1)',
      'Mild-moderate in-toeing in toddler under age 3 (normal developmental variant)',
      'Internal tibial torsion without pain or functional limitation',
      'Femoral anteversion in child age 3-6 (typically resolves by 8-10)',
    ],
  },
  homeRemedies: [
    'Reassurance: the vast majority of in-toeing resolves without any intervention',
    'Do NOT use special shoes, braces, inserts, or orthotic devices — studies show they do not help and are not recommended',
    'Allow child to sit cross-legged ("criss-cross applesauce") — discourage W-sitting if femoral anteversion is present',
    'Encourage activities that promote external rotation: riding bicycles, swimming, ballet, ice skating',
    'For flexible metatarsus adductus in infants: gentle stretching with diaper changes (stroke outer border of foot)',
    'Avoid rigid-soled shoes in early walkers — flexible or barefoot is better for natural correction',
    'Photography every 3-6 months from the same angle to document improvement',
    'Note: correction is gradual over years — it is not a quick fix, but most children have straight feet by school age',
  ],
  relatedSymptomSlugs: ['bowed-legs', 'toe-walking', 'limping'],
  relatedIllnessSlugs: ['metatarsus-adductus', 'internal-tibial-torsion', 'clubfoot'],
  relatedConcernSlugs: ['baby-feet-turned-in', 'toddler-pigeon-toed', 'baby-curved-foot'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pigeon Toes (In-toeing). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Pigeon-Toes-Intoeing.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. In-toeing Gait in Children. American Family Physician.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5574881/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Pigeon toes (in-toeing).', url: 'https://www.mayoclinic.org/diseases-conditions/pigeon-toes/symptoms-causes/syc-20376262' },
  ],
};
