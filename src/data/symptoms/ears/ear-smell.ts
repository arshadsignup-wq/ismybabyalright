import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ear-smell',
  title: 'Ear Smell (Odor from Ear) in Babies',
  bodySystem: 'ears',
  description: 'A noticeable odor from a baby\'s ear is not normal and usually indicates an underlying issue requiring evaluation. The most common causes are infection (from a ruptured ear infection or outer ear infection), accumulated moisture or debris, or a foreign object. While mild cerumen (wax) has a faint smell, a distinctly foul or strong odor typically suggests infection or trapped material that needs medical attention.',
  possibleCauses: [
    { cause: 'Otitis media with perforation (ruptured ear infection draining)', likelihood: 'common' },
    { cause: 'Otitis externa (outer ear infection from moisture)', likelihood: 'common' },
    { cause: 'Accumulated moisture and debris behind the ear or in skin folds', likelihood: 'common' },
    { cause: 'Foreign body in the ear canal (causing secondary infection)', likelihood: 'uncommon' },
    { cause: 'Chronic suppurative otitis media', likelihood: 'uncommon' },
    { cause: 'Cholesteatoma (abnormal skin growth in middle ear)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Mild milky smell behind the ears from milk or formula dripping during feeds is common and resolves with cleaning. Wax at the ear opening has a slight natural scent.', whenToWorry: 'Foul smell from within the ear canal, smell with discharge (yellow/green), smell with fever, or persistent odor despite cleaning behind the ears.' },
    { ageRange: '6-24 months', normalVariation: 'Slight odor from wax or moisture is not concerning. Behind-the-ear odor from sweat and skin oil is common.', whenToWorry: 'Distinctly foul or fishy smell from the ear canal, odor with discharge or crustiness, smell following an ear infection, or odor developing after baby was playing with small objects.' },
    { ageRange: '2-3 years', normalVariation: 'Same as younger children. Some children produce more pungent wax—this alone is not a concern.', whenToWorry: 'Strong foul odor from one ear (suggests foreign body or unilateral infection), odor with hearing changes, persistent smell despite treatment of ear infection, or odor with granulation tissue visible.' },
  ],
  urgencyLevels: {
    emergency: [
      'Foul ear smell with high fever, spreading redness, or swelling behind the ear (possible mastoiditis)',
      'Ear odor with neurological symptoms (facial weakness, severe headache)',
    ],
    urgent: [
      'Foul-smelling discharge with significant pain and fever',
      'Ear smell with redness and swelling behind the ear',
      'Suspected button battery or foreign object causing odor',
    ],
    sameDay: [
      'Persistent foul smell from ear canal without emergency features',
      'Odor with mild discharge following a known ear infection',
      'Strong smell from one ear suggesting possible foreign body',
    ],
    monitor: [
      'Mild odor from behind the ears (from milk, sweat) that resolves with cleaning',
      'Slight wax odor without discharge or pain',
      'Temporary smell during a cold that resolves',
    ],
  },
  homeRemedies: [
    'Clean behind the ears daily with a warm damp washcloth during bath time',
    'Dry behind the ears thoroughly after baths—moisture in skin folds causes odor',
    'If milk pools behind ears during feeding, wipe the area afterward',
    'Do NOT insert anything into the ear canal to clean it',
    'Keep ears dry after swimming or baths; tilt head to drain water',
    'If odor persists despite external cleaning, the smell is likely from inside and needs medical evaluation',
    'Do not use ear drops, hydrogen peroxide, or home remedies without medical guidance',
    'Check for and remove any crusting around the ear opening with a warm damp cloth',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-discharge', 'ear-pain', 'ear-pulling', 'foreign-object-ear'],
  relatedIllnessSlugs: ['ear-infection', 'swimmers-ear', 'cholesteatoma'],
  relatedConcernSlugs: ['baby-ear-smells', 'baby-ear-stinks', 'smelly-ear-discharge'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ear Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Ear infection (middle ear) - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/ear-infections/symptoms-causes/syc-20351616' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Chronic Suppurative Otitis Media. Pediatrics in Review. 2012;33(5):217-227.', url: 'https://publications.aap.org/pediatricsinreview' },
  ],
};
