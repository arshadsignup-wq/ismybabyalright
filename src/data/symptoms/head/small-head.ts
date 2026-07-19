import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'small-head',
  title: 'Small Head (Microcephaly) in Babies',
  bodySystem: 'head',
  description: 'Microcephaly is defined as a head circumference below the 3rd percentile or more than 2 standard deviations below the mean for age and sex. It can be congenital (present at birth) or acquired (develops after birth). While some babies simply have smaller heads genetically, microcephaly can indicate problems with brain growth and development.',
  possibleCauses: [
    { cause: 'Constitutional (familial small head with normal development)', likelihood: 'common' },
    { cause: 'Intrauterine growth restriction (IUGR)', likelihood: 'common' },
    { cause: 'Premature craniosynostosis (early fusion of skull sutures)', likelihood: 'uncommon' },
    { cause: 'Congenital infections (TORCH: toxoplasmosis, CMV, Zika, rubella)', likelihood: 'uncommon' },
    { cause: 'Fetal alcohol spectrum disorders', likelihood: 'uncommon' },
    { cause: 'Genetic syndromes (trisomy 13, 18, or other chromosomal abnormalities)', likelihood: 'rare' },
    { cause: 'Hypoxic-ischemic injury', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborn head circumference varies; at birth, normal range is approximately 32-37 cm. A small baby may have a proportionally small head. Parental head size matters.', whenToWorry: 'Head circumference below 3rd percentile with abnormal neurological exam, failure to grow at expected rate, ridged or raised suture lines, or missing developmental milestones.' },
    { ageRange: '3-12 months', normalVariation: 'Head should grow approximately 1 cm per month. If tracking along a low percentile with normal milestones, may be constitutional.', whenToWorry: 'Head growth falling away from growth curve, delayed motor or cognitive milestones, seizures, feeding difficulties, or unusual head shape from fused sutures.' },
    { ageRange: '1-3 years', normalVariation: 'Head growth slows to about 2 cm per year. Steady tracking along a low percentile with normal development may be benign.', whenToWorry: 'Developmental regression, no head growth over several months, progressive spasticity, or new onset seizures.' },
  ],
  urgencyLevels: {
    emergency: [
      'Seizures in a baby with a small head',
      'Sudden unresponsiveness or lethargy',
      'Severe feeding difficulty with dehydration signs',
    ],
    urgent: [
      'Head circumference dropping across percentile lines over weeks',
      'Small head with missed developmental milestones and abnormal tone',
      'Ridged suture lines preventing normal head growth',
      'Microcephaly detected at birth with neurological concerns',
    ],
    sameDay: [
      'Head circumference just below 3rd percentile at routine visit',
      'Small head noted with mild developmental concerns',
      'Small head with parental concern about milestones',
    ],
    monitor: [
      'Parents have small heads and baby is developing normally',
      'Head tracking steadily along a low percentile with normal milestones',
      'Mild smallness consistent with overall small stature',
    ],
  },
  homeRemedies: [
    'Track head circumference monthly on a growth chart',
    'Monitor and document developmental milestones',
    'Measure parental head circumferences for comparison',
    'Provide tummy time and developmental stimulation',
    'There is no home treatment for microcephaly—early intervention services may be recommended',
    'Keep records of any concerns to discuss at well-child visits',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['large-head', 'seizures'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['baby-head-shape', 'baby-head-size'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Facts about Microcephaly.', url: 'https://www.cdc.gov/birth-defects/about/microcephaly.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Microcephaly in Infants and Children: Etiology and Evaluation. Palpalian CS. Pediatrics in Review. 2012.', url: 'https://publications.aap.org/pediatricsinreview' },
    { org: 'WHO', citation: 'World Health Organization. Screening, assessment and management of neonates and infants with complications associated with Zika virus exposure in utero. 2016.', url: 'https://www.who.int/publications/i/item/screening-assessment-and-management-of-neonates-and-infants-with-complications-associated-with-zika-virus-exposure-in-utero' },
  ],
};
