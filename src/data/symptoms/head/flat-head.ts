import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'flat-head',
  title: 'Flat Head (Plagiocephaly) in Babies',
  bodySystem: 'head',
  description: 'Positional plagiocephaly is a flattening of one side of a baby\'s head, or brachycephaly is flattening at the back. It is very common, affecting up to 47% of infants, and typically results from spending time in one position. It is usually cosmetic and improves with repositioning, though severe cases may require a helmet.',
  possibleCauses: [
    { cause: 'Positional preference (always sleeping in same direction)', likelihood: 'common' },
    { cause: 'Back sleeping position (safe but can cause flattening)', likelihood: 'common' },
    { cause: 'Torticollis (tight neck muscle limiting head rotation)', likelihood: 'common' },
    { cause: 'Premature birth (softer skull bones)', likelihood: 'uncommon' },
    { cause: 'Multiple birth (limited space in utero)', likelihood: 'uncommon' },
    { cause: 'Craniosynostosis (premature fusion of skull sutures)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Some head molding from birth is normal and resolves within weeks. Slight flattening from back sleeping is very common and typically not concerning at this age.', whenToWorry: 'A ridge along a suture line, very abnormal head shape present at birth, or rapidly worsening asymmetry. These could indicate craniosynostosis.' },
    { ageRange: '2-4 months', normalVariation: 'This is the peak age for developing positional plagiocephaly as babies spend most time on their backs. Mild flattening is extremely common.', whenToWorry: 'Severe asymmetry with facial features shifting (ear or forehead misalignment), or baby unable to turn head to one side (possible torticollis). Mention at well-visit.' },
    { ageRange: '4-8 months', normalVariation: 'Once baby starts rolling and spending more time upright, the head shape often begins to improve naturally.', whenToWorry: 'No improvement despite repositioning and tummy time. If head shape is significantly asymmetric, this is the optimal window for helmet therapy if needed.' },
    { ageRange: '8-18 months', normalVariation: 'Head shape continues to round out as skull grows. Most positional flattening resolves significantly by 2 years.', whenToWorry: 'Severe plagiocephaly that has not improved. After 12-14 months, helmet therapy is less effective as skull growth slows.' },
  ],
  urgencyLevels: {
    emergency: [
      'Head shape abnormality noted at birth with visible ridge along suture (possible craniosynostosis)',
      'Rapidly changing head shape with signs of increased intracranial pressure (bulging fontanelle, vomiting)',
    ],
    urgent: [
      'Severe asymmetry with facial features affected (ear misalignment, forehead prominence)',
      'Baby cannot turn head to one side at all (significant torticollis)',
    ],
    sameDay: [
      'Moderate flattening that is worsening despite repositioning efforts',
      'Concern about possible craniosynostosis (ridge felt along skull)',
    ],
    monitor: [
      'Mild positional flattening with good head rotation to both sides',
      'Flattening that is stable or improving with repositioning and tummy time',
      'Baby under 4 months with common back-of-head flattening',
    ],
  },
  homeRemedies: [
    'Supervised tummy time starting from birth \u2014 aim for 30-60 minutes total per day by 3 months',
    'Alternate which direction baby\'s head faces during sleep (alternating ends of crib)',
    'Alternate which arm you hold baby in during feedings',
    'Limit time in car seats, bouncers, and swings when not in the car',
    'Encourage baby to look to the less-preferred side using toys and voices',
    'Hold baby upright when awake to reduce pressure on the back of the head',
    'If torticollis is present, gentle stretching exercises as directed by a physical therapist',
    'Continue placing baby on back for sleep \u2014 do NOT use positioning devices',
  ],
  relatedSymptomSlugs: ['head-banging', 'bulging-fontanelle'],
  relatedIllnessSlugs: ['torticollis', 'craniosynostosis'],
  relatedConcernSlugs: ['flat-head-baby', 'baby-head-shape', 'tummy-time-tips'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Prevention and Management of Positional Skull Deformities in Infants. Pediatrics. 2011.', url: 'https://publications.aap.org/pediatrics/article/128/6/1236/30883' },
    { org: 'AAP', citation: 'HealthyChildren.org. Baby Helmet Therapy: Parent FAQs.', url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Baby-Helmet-Therapy.aspx' },
    { org: 'NHS', citation: 'NHS. Plagiocephaly and brachycephaly (flat head syndrome).', url: 'https://www.nhs.uk/conditions/plagiocephaly-brachycephaly/' },
  ],
};
