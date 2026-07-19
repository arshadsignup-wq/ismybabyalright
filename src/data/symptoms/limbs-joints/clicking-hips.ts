import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'clicking-hips',
  title: 'Clicking Hips (Developmental Dysplasia of the Hip) in Babies',
  bodySystem: 'limbs-joints',
  description: 'Hip clicking, clunking, or instability in babies can be a sign of developmental dysplasia of the hip (DDH), where the hip joint does not develop properly and the ball does not sit securely in the socket. Soft clicks from ligaments/tendons are common and benign, but a distinct "clunk" (the feeling of a joint moving in or out) needs urgent evaluation. DDH affects approximately 1-3% of newborns and is best treated early — ideally in the first 6 weeks of life with a Pavlik harness.',
  possibleCauses: [
    { cause: 'Benign soft tissue clicks (ligaments, tendons — normal)', likelihood: 'common' },
    { cause: 'Developmental dysplasia of the hip (DDH)', likelihood: 'uncommon' },
    { cause: 'Hip joint laxity from maternal hormones (relaxin)', likelihood: 'common' },
    { cause: 'Hip subluxation or dislocation', likelihood: 'uncommon' },
    { cause: 'Acetabular dysplasia (shallow hip socket)', likelihood: 'uncommon' },
    { cause: 'Neuromuscular condition affecting hip stability', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Soft "clicks" from ligaments and tendons are extremely common and usually benign. Mild hip laxity from maternal hormones is common and typically self-resolves. Hips checked at birth and 6-8 week check.', whenToWorry: 'Distinct "clunk" felt during hip examination (Ortolani or Barlow positive). Asymmetric thigh skin folds. Apparent leg length discrepancy. Limited abduction (cannot spread legs equally for diaper change). Risk factors: breech presentation, family history of DDH, first-born female.' },
    { ageRange: '2-6 months', normalVariation: 'Mild hip clicks from ligaments are still common and usually benign. Hip laxity should be improving as maternal hormones clear.', whenToWorry: 'Limited hip abduction (one or both sides). Asymmetric thigh creases. One leg appearing shorter. Clicking becoming more pronounced rather than resolving. Difficulty with diaper changes due to tight hips.' },
    { ageRange: '6-12 months', normalVariation: 'Hips should be stable. Clicking sounds from normal movement joints are common.', whenToWorry: 'Late presentation of DDH: limping when starting to walk, leg length discrepancy, waddling gait. Limited range of hip movement. One side consistently less mobile.' },
    { ageRange: '1-3 years', normalVariation: 'Occasional joint sounds during normal play and movement. Toddler joints are flexible and may pop.', whenToWorry: 'Limping or waddling gait. Leg length discrepancy. Pain with hip movement. Walking on toes on one side (compensating for short leg). Late walking combined with hip stiffness.' },
  ],
  urgencyLevels: {
    emergency: [
      'Hip dislocation after trauma (severe pain, inability to move leg, deformity)',
    ],
    urgent: [
      'Distinct hip "clunk" detected in newborn (needs ultrasound within 2 weeks)',
      'Newborn with risk factors and clinical signs of DDH (limited abduction, leg length difference)',
      'Failed or missed newborn hip screening with current concerns',
    ],
    sameDay: [
      'Asymmetric thigh folds or apparent leg length difference noticed by parent',
      'Limited hip abduction (cannot spread legs equally)',
      'Hip click or clunk persisting beyond the newborn period',
      'Walking with a limp or waddle at onset of walking',
    ],
    monitor: [
      'Soft clicks without limitation of movement or asymmetry (common and benign)',
      'Known DDH under treatment with Pavlik harness — routine monitoring',
      'Mild laxity detected at birth with planned follow-up ultrasound',
      'Normal hip examination with family history of DDH (screening ultrasound at 4-6 weeks)',
    ],
  },
  homeRemedies: [
    'Important: hip clicking needs professional assessment — this is not a "wait and see" situation',
    'Avoid tight swaddling of the legs — hips should be free to flex and abduct (spread apart)',
    'Use "hip-healthy" swaddling: snug around arms/chest but loose around hips and legs',
    'When carrying baby, encourage legs in "M" position (knees above hips, spread apart)',
    'Use baby carriers that support hips in flexed, spread position (avoid narrow-based carriers that hold legs together)',
    'If Pavlik harness is prescribed: wear it as directed (usually 23 hours/day), keep skin clean and dry underneath',
    'Double diapering is NOT a treatment for DDH despite past recommendations',
    'Attend all follow-up ultrasound and orthopedic appointments — early treatment prevents surgery',
    'Risk factors to share with doctor: breech presentation, family history, first-born, female sex, oligohydramnios',
  ],
  relatedSymptomSlugs: ['limping', 'bowed-legs', 'not-using-arm'],
  relatedIllnessSlugs: ['developmental-dysplasia-hip', 'hip-dislocation'],
  relatedConcernSlugs: ['baby-hip-clicking', 'baby-legs-different-length', 'hip-dysplasia-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Clinical Practice Guideline: Early Detection of Developmental Dysplasia of the Hip. Pediatrics. 2000;105(4).', url: 'https://publications.aap.org/pediatrics/article/105/4/896/64024' },
    { org: 'NHS', citation: 'NHS. Developmental dysplasia of the hip.', url: 'https://www.nhs.uk/conditions/developmental-dysplasia-of-the-hip/' },
    { org: 'NIH', citation: 'National Library of Medicine. Developmental Dysplasia of the Hip. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK563157/' },
  ],
};
