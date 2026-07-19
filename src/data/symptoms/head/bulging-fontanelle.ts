import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'bulging-fontanelle',
  title: 'Bulging Fontanelle (Soft Spot) in Babies',
  bodySystem: 'head',
  description: 'A bulging fontanelle is when the soft spot on the top of a baby\'s head appears to be swelling outward or feels tense and firm when the baby is upright and calm. While brief bulging during crying or straining is normal, a persistently bulging fontanelle can indicate increased intracranial pressure and requires prompt medical evaluation.',
  possibleCauses: [
    { cause: 'Crying or straining (temporary, resolves when calm)', likelihood: 'common' },
    { cause: 'Vomiting or coughing (temporary)', likelihood: 'common' },
    { cause: 'Meningitis or encephalitis', likelihood: 'uncommon' },
    { cause: 'Hydrocephalus (fluid buildup in the brain)', likelihood: 'uncommon' },
    { cause: 'Intracranial hemorrhage', likelihood: 'rare' },
    { cause: 'Brain tumor', likelihood: 'rare' },
    { cause: 'Hypervitaminosis A (excess vitamin A)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'The anterior fontanelle is typically soft and flat or slightly concave when baby is upright and calm. It may pulse slightly with heartbeat. It commonly bulges during crying.', whenToWorry: 'Fontanelle remains bulging when baby is upright and calm, especially if accompanied by fever, vomiting, irritability, or lethargy. Seek emergency care immediately.' },
    { ageRange: '3-6 months', normalVariation: 'Fontanelle is still open and soft. Slight pulsing remains normal. Brief bulging with straining or lying flat is expected.', whenToWorry: 'Persistent bulging with fever, high-pitched crying, excessive sleepiness, vomiting, or seizures. Rapid head growth (crossing percentile lines).' },
    { ageRange: '6-12 months', normalVariation: 'Fontanelle begins to gradually get smaller. Still normally soft and flat when baby is calm and upright.', whenToWorry: 'Fontanelle that becomes tense or bulging, especially with irritability, poor feeding, vomiting, or abnormal eye movements (sunset sign).' },
    { ageRange: '1-2 years', normalVariation: 'Anterior fontanelle typically closes between 12-18 months. Some close as late as 24 months and this can be normal.', whenToWorry: 'Bulging fontanelle at this age is more concerning and always warrants prompt medical evaluation, particularly with any neurological symptoms.' },
  ],
  urgencyLevels: {
    emergency: [
      'Fontanelle is bulging and baby has fever',
      'Bulging fontanelle with seizures',
      'Bulging fontanelle with inconsolable high-pitched crying',
      'Bulging fontanelle with vomiting and lethargy',
      'Bulging fontanelle after a head injury or fall',
      'Baby is unresponsive or extremely difficult to wake with bulging fontanelle',
    ],
    urgent: [
      'Fontanelle appears consistently full or tense when baby is calm and upright',
      'Rapid increase in head circumference',
      'Baby has bulging fontanelle with poor feeding or unusual irritability',
      'Eyes appearing to deviate downward (sunset sign)',
    ],
    sameDay: [
      'Fontanelle seems slightly fuller than usual but baby is acting normally',
      'Mildly tense fontanelle with no other symptoms',
    ],
    monitor: [
      'Fontanelle bulges only during crying or straining (this is normal)',
      'Slight pulsation visible at the fontanelle (this is normal)',
    ],
  },
  homeRemedies: [
    'Check fontanelle when baby is calm and in an upright position for accurate assessment',
    'Know that brief bulging during crying, coughing, or straining is normal',
    'Keep track of head circumference measurements at well-child visits',
    'Note any changes in feeding patterns, alertness, or behavior',
    'Do not press hard on the fontanelle \u2014 gentle touching will not harm the baby',
  ],
  triageSlug: 'bulging-fontanelle',
  relatedSymptomSlugs: ['sunken-fontanelle', 'fever', 'lethargy'],
  relatedIllnessSlugs: ['meningitis', 'hydrocephalus'],
  relatedConcernSlugs: ['baby-soft-spot-bulging', 'baby-head-size'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fontanelles (Soft Spots). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/default.aspx' },
    { org: 'MedlinePlus', citation: 'U.S. National Library of Medicine. Fontanelles - bulging.', url: 'https://medlineplus.gov/ency/article/003310.htm' },
    { org: 'NHS', citation: 'NHS. Your baby\'s soft spot (fontanelle).', url: 'https://www.nhs.uk/conditions/baby/health/your-babys-soft-spot-fontanelle/' },
  ],
};
