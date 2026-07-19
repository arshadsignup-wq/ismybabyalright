import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ear-wax',
  title: 'Ear Wax (Cerumen) in Babies',
  bodySystem: 'ears',
  description: 'Ear wax (cerumen) is a normal, protective substance produced by glands in the ear canal. It traps dust, bacteria, and debris while moisturizing the ear canal. Babies produce varying amounts of wax, and its color can range from light yellow to dark brown. Ear wax is self-cleaning—the ear naturally moves wax outward. In most cases, no cleaning is needed, and parents should never insert cotton swabs or objects into the ear canal.',
  possibleCauses: [
    { cause: 'Normal cerumen production (protective function)', likelihood: 'common' },
    { cause: 'Overproduction due to narrow ear canals in infants', likelihood: 'common' },
    { cause: 'Impaction from cotton swab use pushing wax deeper', likelihood: 'uncommon' },
    { cause: 'Wax buildup from hearing aids or ear molds', likelihood: 'uncommon' },
    { cause: 'Keratosis obturans (excessive wax and dead skin buildup)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Babies have very small ear canals. Some produce visible wax at the opening; others produce little. Yellow, orange, or brown wax at the ear opening is normal.', whenToWorry: 'Wax-like discharge with odor (may be infection, not wax), wax completely blocking the canal causing hearing concerns, or bloody or pus-like material mistaken for wax.' },
    { ageRange: '6-24 months', normalVariation: 'Wax production continues normally. Some babies produce more than others—this is genetic. Wax may be visible at the ear opening and does not need removal.', whenToWorry: 'Suspected hearing difficulties with visible wax impaction, ear pain with wax buildup, or inability to visualize eardrum at medical visits due to impacted wax.' },
    { ageRange: '2-3 years', normalVariation: 'Children may notice wax and pick at it. Wax color and consistency vary and all are normal unless accompanied by other symptoms.', whenToWorry: 'Child complaining of ear fullness or muffled hearing, pain associated with wax, or repeated unsuccessful attempts to remove impacted wax at home.' },
  ],
  urgencyLevels: {
    emergency: [
      'Ear wax is never an emergency on its own',
      'Seek emergency care only if attempts at wax removal caused bleeding, severe pain, or dizziness',
    ],
    urgent: [
      'Suspected perforated eardrum from attempted wax removal (sudden pain, bleeding, hearing loss)',
      'Severe pain after inserting an object to remove wax',
    ],
    sameDay: [
      'Suspected hearing difficulty due to wax impaction',
      'Wax buildup preventing medical examination of eardrum',
      'Wax with foul odor or suspected infection',
    ],
    monitor: [
      'Visible wax at ear opening with no symptoms',
      'Soft or dry wax that is naturally working its way out',
      'Dark colored wax (normal variant, not a sign of infection)',
      'Wax that comes out on its own during baths',
    ],
  },
  homeRemedies: [
    'Leave ear wax alone—it is protective and self-cleaning in most cases',
    'NEVER insert cotton swabs, bobby pins, or any objects into the ear canal',
    'Clean only the outer ear (pinna) with a soft washcloth during bath time',
    'If wax is visible at the opening, gently wipe with a damp washcloth on your finger',
    'A few drops of warm (body temperature) mineral oil or olive oil can soften stubborn wax if needed',
    'Do not use ear candles—they are ineffective and dangerous',
    'If wax seems excessive or is causing symptoms, ask the pediatrician to check at the next visit',
    'After swimming, tilt baby\'s head to let water drain (water behind wax can cause discomfort)',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-pulling', 'not-responding-sounds', 'ear-smell'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['baby-ear-wax', 'cleaning-baby-ears', 'baby-ear-wax-color'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ear Wax. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Earwax.aspx' },
    { org: 'AAP', citation: 'Schwartz SR, et al. Clinical Practice Guideline (Update): Earwax (Cerumen Impaction). Otolaryngology-Head and Neck Surgery. 2017;156(1_suppl):S1-S29.', url: 'https://journals.sagepub.com/doi/full/10.1177/0194599816671491' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Earwax blockage - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/earwax-blockage/symptoms-causes/syc-20353004' },
  ],
};
