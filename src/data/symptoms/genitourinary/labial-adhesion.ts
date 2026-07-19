import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'labial-adhesion',
  title: 'Labial Adhesion (Fused Labia) in Baby Girls & Toddlers',
  bodySystem: 'genitourinary',
  description: 'Labial adhesion (labial fusion or synechia) occurs when the inner labia minora stick together, partially or completely covering the vaginal opening. It affects up to 2% of girls, most commonly between 3 months and 6 years of age. It is caused by low estrogen levels (normal in prepubertal girls) combined with mild inflammation. Most cases are asymptomatic, require no treatment, and resolve spontaneously with puberty.',
  possibleCauses: [
    { cause: 'Low estrogen state (normal in prepubertal girls) with mild irritation', likelihood: 'common' },
    { cause: 'Chronic vulvar irritation (diaper dermatitis, poor hygiene)', likelihood: 'common' },
    { cause: 'Post-inflammatory adhesion (after infection or skin irritation)', likelihood: 'uncommon' },
    { cause: 'Lichen sclerosus (chronic skin condition)', likelihood: 'rare' },
    { cause: 'Disorders of sex development (ambiguous genitalia — different from adhesion)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Labial adhesions are uncommon in this age group due to maternal estrogen influence. Labia may appear swollen or prominent from maternal hormones — this is normal.', whenToWorry: 'If labia appear fused at birth, evaluation for disorders of sex development may be warranted. Inability to see vaginal or urethral opening. Ambiguous genital appearance at birth.' },
    { ageRange: '2-6 months', normalVariation: 'As maternal estrogen wanes, labial adhesions can begin to develop. Mild partial adhesions are common and often found incidentally at routine checkups.', whenToWorry: 'Complete labial fusion with difficulty urinating (straining, dribbling, pooling). Urinary tract infections (urine trapped behind adhesion). Signs of discomfort with urination.' },
    { ageRange: '6-12 months', normalVariation: 'Peak onset period. Partial adhesions found incidentally are common and usually asymptomatic. Thin translucent membrane connecting the labia.', whenToWorry: 'Dense or complete adhesion blocking urinary flow. Recurrent urinary tract infections. Visible pooling or dribbling of urine. Infection or abscess behind adhesion.' },
    { ageRange: '1-3 years', normalVariation: 'Labial adhesions are common and often discovered by parents during bathing or diaper changes. Most are thin, partial, and cause no symptoms.', whenToWorry: 'Urinary symptoms: painful urination, UTIs, post-void dribbling. Complete dense adhesion that is thick and opaque. Redness, swelling, or discharge suggesting infection. Child in discomfort with wiping or bathing.' },
  ],
  urgencyLevels: {
    emergency: [
      'Complete urinary obstruction (inability to pass urine at all with distress)',
    ],
    urgent: [
      'Labial adhesion with urinary retention or severe straining to urinate',
      'Abscess or significant infection behind adhesion with fever',
    ],
    sameDay: [
      'Suspected labial adhesion with urinary symptoms (frequent UTIs, dribbling)',
      'Complete or near-complete adhesion covering both vaginal and urethral openings',
      'Labial adhesion with signs of infection (discharge, redness, pain)',
    ],
    monitor: [
      'Partial thin labial adhesion without urinary symptoms (most common presentation)',
      'Known labial adhesion that is asymptomatic — observe for spontaneous resolution',
      'Mild adhesion found incidentally at routine exam',
      'Previously treated adhesion with recurrence (common and not harmful)',
    ],
  },
  homeRemedies: [
    'Most labial adhesions require NO treatment — they resolve spontaneously with puberty or earlier',
    'Avoid aggressive wiping or forceful separation (painful and causes re-adhesion)',
    'Apply a thin layer of plain petroleum jelly or barrier cream to the vulva at diaper changes to prevent worsening',
    'If prescribed estrogen cream: apply a very thin line along the adhesion line once or twice daily as directed (usually for 4-6 weeks)',
    'Keep the vulvar area clean and dry — use plain water or gentle fragrance-free cleanser',
    'Avoid bubble baths, fragranced soaps, and tight clothing that can irritate the area',
    'After adhesion separates (naturally or with treatment): continue barrier cream for several weeks to prevent recurrence',
    'Teach proper wiping technique (front to back) when child is old enough',
    'Recurrence after separation is common (up to 40%) and usually resolves again — this is not a failure',
  ],
  relatedSymptomSlugs: ['genital-swelling', 'strong-smelling-urine', 'blood-in-urine'],
  relatedIllnessSlugs: ['labial-adhesion', 'urinary-tract-infection', 'vulvovaginitis'],
  relatedConcernSlugs: ['baby-labia-fused', 'baby-vaginal-opening-closed', 'labial-adhesion-treatment'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Labial Adhesions. Pediatrics in Review.', url: 'https://publications.aap.org/pediatricsinreview' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Labial adhesions in children.', url: 'https://www.mayoclinic.org/diseases-conditions/labial-adhesions/symptoms-causes/syc-20481267' },
    { org: 'NHS', citation: 'NHS. Labial fusion (labial adhesion).', url: 'https://www.nhs.uk/conditions/labial-fusion/' },
  ],
};
