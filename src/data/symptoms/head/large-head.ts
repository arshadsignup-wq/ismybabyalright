import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'large-head',
  title: 'Large Head (Macrocephaly) in Babies',
  bodySystem: 'head',
  description: 'Macrocephaly means a head circumference above the 97th percentile or more than 2 standard deviations above the mean for age and sex. Many cases are benign familial macrocephaly (parents also have larger heads), but it can occasionally indicate conditions requiring evaluation such as hydrocephalus or increased intracranial pressure.',
  possibleCauses: [
    { cause: 'Benign familial macrocephaly (genetic large head)', likelihood: 'common' },
    { cause: 'Catch-up growth in premature infants', likelihood: 'common' },
    { cause: 'Benign enlargement of subarachnoid spaces', likelihood: 'uncommon' },
    { cause: 'Hydrocephalus (excess cerebrospinal fluid)', likelihood: 'uncommon' },
    { cause: 'Subdural effusion or hematoma', likelihood: 'rare' },
    { cause: 'Megalencephaly (abnormally large brain)', likelihood: 'rare' },
    { cause: 'Storage disorders or metabolic conditions', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Head grows approximately 2 cm per month. Normal range is broad. Average head circumference at birth is 33-36 cm. Fontanelles are open and soft.', whenToWorry: 'Head circumference crossing two or more percentile lines upward, bulging fontanelle when upright and calm, splayed cranial sutures, or sunset sign (eyes deviated downward).' },
    { ageRange: '3-12 months', normalVariation: 'Growth rate slows to about 1 cm per month. Head size often reflects parental head size. Some catch-up growth is normal after birth.', whenToWorry: 'Rapidly accelerating head growth, persistent vomiting, lethargy, bulging fontanelle, prominent scalp veins, or developmental regression.' },
    { ageRange: '1-3 years', normalVariation: 'Head growth slows further to about 2 cm per year. If tracking steadily along a high percentile with normal development, likely benign.', whenToWorry: 'Sudden increase in head growth rate, persistent headaches (holding head, irritability), changes in gait or coordination, or new onset vomiting.' },
  ],
  urgencyLevels: {
    emergency: [
      'Bulging fontanelle with lethargy or persistent vomiting',
      'Sunset sign (eyes forced downward, unable to look up)',
      'Seizures with rapidly enlarging head',
      'Sudden change in consciousness or unresponsiveness',
    ],
    urgent: [
      'Head circumference crossing two or more percentile lines in a short period',
      'Bulging fontanelle when baby is upright and calm',
      'Prominent scalp veins with a tense fontanelle',
      'Persistent vomiting with irritability and large head',
    ],
    sameDay: [
      'Head circumference above 97th percentile at routine visit with normal exam',
      'Mild increase in growth rate over one measurement interval',
      'Large head with developmental concerns',
    ],
    monitor: [
      'Both parents have large heads and baby is developing normally',
      'Head tracking along a high percentile without crossing lines',
      'Premature infant with catch-up head growth and normal development',
    ],
  },
  homeRemedies: [
    'Measure head circumference monthly and track on a growth chart',
    'Note parental head sizes as a reference (measure with a tape)',
    'Monitor developmental milestones regularly',
    'Take photos of head shape over time to track changes',
    'Keep a log of feeding, sleep, and behavior for doctor visits',
    'There are no home treatments for macrocephaly itself—monitoring is key',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['bulging-fontanelle', 'head-injury', 'vomiting'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['baby-head-shape', 'baby-head-size'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Palpalian CS, et al. Evaluation of Macrocephaly in Infants. Pediatrics in Review. 2012;33(8):e46-e51.', url: 'https://publications.aap.org/pediatricsinreview' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Hydrocephalus - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/hydrocephalus/symptoms-causes/syc-20373604' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. WHO Growth Standards Are Recommended for Use in the U.S. for Infants and Children 0 to 2 Years of Age.', url: 'https://www.cdc.gov/growthcharts/who_charts.htm' },
  ],
};
