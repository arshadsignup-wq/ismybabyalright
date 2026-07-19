import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'eye-not-tracking',
  title: 'Eye Not Tracking (Vision Concerns) in Babies',
  bodySystem: 'eyes',
  description: 'Babies develop the ability to track objects gradually over the first few months of life. Newborns can see about 8-12 inches clearly and may not consistently follow objects. By 2-3 months, most babies can track a moving object smoothly with their eyes. Failure to track by 3-4 months or loss of previously established tracking ability should be evaluated.',
  possibleCauses: [
    { cause: 'Normal developmental immaturity (under 2-3 months)', likelihood: 'common' },
    { cause: 'Intermittent strabismus (normal eye wandering in newborns)', likelihood: 'common' },
    { cause: 'Refractive error (nearsightedness, farsightedness)', likelihood: 'uncommon' },
    { cause: 'Strabismus (persistent eye misalignment)', likelihood: 'uncommon' },
    { cause: 'Amblyopia (lazy eye)', likelihood: 'uncommon' },
    { cause: 'Congenital cataracts', likelihood: 'rare' },
    { cause: 'Retinopathy of prematurity', likelihood: 'rare' },
    { cause: 'Cortical visual impairment (brain-related)', likelihood: 'rare' },
    { cause: 'Retinoblastoma (eye cancer)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 weeks', normalVariation: 'Newborns see best at 8-12 inches. They may briefly fixate on faces but inconsistent tracking is normal. Eyes may occasionally cross or wander independently.', whenToWorry: 'Complete lack of any visual response to faces or light, constant eye deviation in one direction, white pupil reflex, or nystagmus (constant rhythmic eye movements).' },
    { ageRange: '6 weeks - 3 months', normalVariation: 'Baby should begin to follow faces and high-contrast objects with increasing consistency. Brief episodes of eye wandering are still normal.', whenToWorry: 'No social smile or face recognition by 6-8 weeks, constant eye crossing or turning (not intermittent), no visual fixation on objects at all, or eyes that constantly jiggle.' },
    { ageRange: '3-6 months', normalVariation: 'Baby should consistently track objects across midline and reach for things. Eyes should be aligned most of the time.', whenToWorry: 'Inability to follow moving objects, one eye consistently turning in or out, no reaching for objects, persistent head turning to one side to look at things, or loss of previously established tracking.' },
    { ageRange: '6-12 months', normalVariation: 'Baby should have good tracking in all directions, reach accurately for objects, and recognize familiar people from across a room.', whenToWorry: 'New onset eye crossing or wandering, holding objects very close to face, not recognizing caregivers at a distance, or bumping into objects consistently.' },
  ],
  urgencyLevels: {
    emergency: [
      'White pupil reflex (leukocoria) noticed in photos or in person',
      'Sudden loss of visual tracking with other neurological symptoms',
      'New onset bulging eye with eye movement limitation',
    ],
    urgent: [
      'Constant fixed eye deviation (esotropia or exotropia) at any age',
      'No visual fixation or tracking by 3 months of age',
      'Constant nystagmus (rhythmic involuntary eye movements)',
      'Loss of previously established visual tracking ability',
    ],
    sameDay: [
      'Intermittent eye crossing persisting beyond 4 months',
      'Concerns about tracking ability at well-child visit',
      'Baby seems to not see well, squints, or holds objects very close',
    ],
    monitor: [
      'Occasional eye wandering in newborn under 3 months',
      'Inconsistent tracking in a baby under 6 weeks',
      'Baby preferring one eye (tilting head) but otherwise tracking well',
    ],
  },
  homeRemedies: [
    'Hold objects 8-12 inches from newborn face for best visibility',
    'Use high-contrast black and white patterns for young infants',
    'Slowly move a toy or your face side to side to encourage tracking practice',
    'Provide adequate lighting when interacting with baby',
    'Alternate which side you approach baby from to encourage both-eye use',
    'Limit screen time; the AAP recommends no screens under 18 months except video chat',
    'Attend all recommended well-child visits which include vision screening',
    'If concerned, take flash photos to check for equal red reflex in both eyes',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['unequal-pupils', 'white-pupil-reflex', 'eye-rubbing'],
  relatedIllnessSlugs: ['strabismus', 'cataracts'],
  relatedConcernSlugs: ['baby-not-tracking', 'baby-crossed-eyes', 'baby-vision'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults by Pediatricians. Pediatrics. 2022;150(1):e2022058477.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022058477/188180' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Warning Signs of Vision Problems in Infants and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Lazy eye (amblyopia) - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/lazy-eye/symptoms-causes/syc-20352391' },
  ],
};
