import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'crossed-eyes',
  title: 'Crossed Eyes (Strabismus) in Babies',
  bodySystem: 'eyes',
  description: 'Strabismus is a condition where the eyes do not align properly \u2014 one or both eyes may turn inward (esotropia), outward (exotropia), upward, or downward. Intermittent eye crossing in newborns under 3-4 months is normal as eye muscles mature. Persistent or constant misalignment after 4 months needs evaluation, as early treatment is important to prevent amblyopia (lazy eye).',
  possibleCauses: [
    { cause: 'Normal newborn eye muscle immaturity (under 4 months)', likelihood: 'common' },
    { cause: 'Pseudostrabismus (wide nasal bridge creating illusion of crossing)', likelihood: 'common' },
    { cause: 'Infantile esotropia (true inward turning)', likelihood: 'uncommon' },
    { cause: 'Accommodative esotropia (farsightedness causing crossing)', likelihood: 'uncommon' },
    { cause: 'Cranial nerve palsy', likelihood: 'rare' },
    { cause: 'Retinoblastoma (eye tumor)', likelihood: 'rare' },
    { cause: 'Brain tumor or neurological condition', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Intermittent eye crossing is very common and normal in newborns. Eyes may briefly cross or drift outward as the visual system matures. A wide flat nasal bridge can make eyes appear crossed when they are not (pseudostrabismus).', whenToWorry: 'Constant, fixed eye crossing (never straightens), one eye always deviated, or abnormal red reflex (white pupil in photos instead of red).' },
    { ageRange: '3-6 months', normalVariation: 'By 4 months, eyes should be well-aligned most of the time. Occasional brief drift may still occur but should be infrequent.', whenToWorry: 'Any persistent misalignment after 4 months of age requires evaluation. Also concerning: one eye consistently turns in or out, eyes do not track together.' },
    { ageRange: '6-12 months', normalVariation: 'Eyes should be consistently aligned. Baby should be tracking objects with both eyes moving together smoothly.', whenToWorry: 'Any eye turning noticed at this age is abnormal and needs referral to pediatric ophthalmologist. Constant head tilting to see may indicate eye alignment issues.' },
    { ageRange: '1-3 years', normalVariation: 'Eyes should remain well-aligned. Children at this age are developing depth perception and fine visual skills.', whenToWorry: 'New-onset eye crossing (especially if sudden), squinting, head tilting, or closing one eye in sunlight. Accommodative esotropia commonly presents between 2-3 years.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden onset of eye misalignment with vomiting, headache, or lethargy (possible neurological emergency)',
      'White pupil reflex (leukocoria) noticed in one or both eyes',
      'New strabismus after head injury',
    ],
    urgent: [
      'Sudden onset of constant eye crossing in a child who previously had straight eyes',
      'Eye deviation with drooping eyelid (ptosis) or unequal pupil size',
      'New onset double vision (child reports "seeing two" or covers one eye)',
    ],
    sameDay: [
      'Persistent eye crossing in a baby over 4 months of age',
      'Parents noticing one eye frequently drifting in or out',
      'Constant head tilt that may indicate eye misalignment',
    ],
    monitor: [
      'Intermittent brief eye crossing in a baby under 4 months (normal development)',
      'Wide nasal bridge making eyes appear crossed (pseudostrabismus \u2014 normal)',
      'Already under ophthalmology care with stable alignment',
    ],
  },
  homeRemedies: [
    'Take photos when you notice misalignment to show the doctor',
    'Use the flashlight test: shine a small light at baby\'s face and check that the reflection appears in the same spot on both pupils',
    'Encourage visual tracking with toys moved slowly side to side',
    'Do not delay evaluation \u2014 early treatment prevents vision loss from amblyopia',
    'If prescribed, ensure patching therapy is followed consistently',
    'Ensure good lighting during play to observe eye alignment',
  ],
  triageSlug: 'crossed-eyes',
  relatedSymptomSlugs: ['swollen-eyelid', 'watery-eyes'],
  relatedIllnessSlugs: ['strabismus', 'amblyopia'],
  relatedConcernSlugs: ['baby-eyes-crossing', 'baby-eye-alignment', 'newborn-crossed-eyes'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Strabismus (Crossed Eyes). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Strabismus.aspx' },
    { org: 'AAO', citation: 'American Academy of Ophthalmology. Strabismus in Children.', url: 'https://www.aao.org/eye-health/diseases/strabismus-crossed-eyes' },
    { org: 'AAPOS', citation: 'American Association for Pediatric Ophthalmology and Strabismus. Strabismus.', url: 'https://aapos.org/glossary/strabismus' },
  ],
};
