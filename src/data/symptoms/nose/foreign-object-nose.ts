import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'foreign-object-nose',
  title: 'Foreign Object in Nose in Babies & Toddlers',
  bodySystem: 'nose',
  description: 'Children between ages 1-5 commonly insert small objects into their noses. Common items include beads, small toy pieces, food (peas, beans, popcorn kernels), tissue paper, foam, crayon pieces, and button batteries. The classic presentation is persistent one-sided foul-smelling nasal discharge. Some foreign bodies are discovered immediately, while others may go unnoticed for days or weeks. Button batteries in the nose are a medical emergency requiring immediate removal.',
  possibleCauses: [
    { cause: 'Self-insertion of small objects by curious toddlers', likelihood: 'common' },
    { cause: 'Food items pushed into nose during eating', likelihood: 'common' },
    { cause: 'Small toy parts or craft materials', likelihood: 'uncommon' },
    { cause: 'Button batteries (disc batteries)', likelihood: 'rare' },
    { cause: 'Small magnets', likelihood: 'rare' },
    { cause: 'Insects entering the nostril', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-12 months', normalVariation: 'Infants rarely insert nasal foreign bodies before developing the fine motor skills and intent to do so. If found in this age, consider the possibility another child placed it.', whenToWorry: 'Any suspected foreign body in a baby requires medical evaluation. Unilateral nasal discharge or obstruction in this age group is unusual.' },
    { ageRange: '1-3 years', normalVariation: 'Peak age for nasal foreign bodies. Children explore body openings with curiosity. They may not report the insertion.', whenToWorry: 'Unilateral foul-smelling nasal discharge (classic sign), one-sided nasal obstruction, bloody discharge from one nostril, visible object in nostril, or button battery suspected.' },
    { ageRange: '3-5 years', normalVariation: 'Still common in preschoolers. Children may be embarrassed and not tell parents. May present days later with symptoms.', whenToWorry: 'Same as younger children: one-sided symptoms, foul smell, and bloody or purulent discharge are the hallmarks.' },
  ],
  urgencyLevels: {
    emergency: [
      'Button battery (disc battery) in the nose—can cause septal perforation within 2-4 hours',
      'Object causing complete bilateral nasal obstruction with breathing difficulty',
      'Severe uncontrollable bleeding after foreign body insertion',
      'Object has been aspirated (inhaled into airway)',
    ],
    urgent: [
      'Visible foreign body that is causing significant distress',
      'Sharp object lodged in the nose',
      'Object causing significant pain or bleeding',
      'Suspected button battery or magnet even without visible confirmation',
    ],
    sameDay: [
      'Suspected foreign body with one-sided discharge but child is comfortable',
      'Known foreign body insertion that cannot be removed at home',
      'Foul-smelling unilateral discharge suggesting retained foreign body',
    ],
    monitor: [
      'Child says they put something in nose but nothing is visible and no symptoms present',
      'Object was completely removed and child has no ongoing symptoms',
    ],
  },
  homeRemedies: [
    'Try the "Mother\'s Kiss" technique: close the unaffected nostril, seal your mouth over child\'s mouth, and give a short puff of air—this may pop the object out',
    'Have the child try to blow their nose (if old enough) while you occlude the unaffected nostril',
    'If the object is visible and superficial, try carefully removing with tweezers—only attempt once',
    'Do NOT push fingers or cotton swabs up the nose—this usually pushes the object deeper',
    'Do NOT use water to irrigate the nose if the object might swell (food, seeds, sponge)',
    'Tilting the head forward (not back) helps if there is drainage',
    'If the first gentle attempt at removal fails, stop and go to the doctor',
    'Prevent recurrence by keeping small objects out of reach and supervising play with small items',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-colored', 'nosebleed', 'congestion'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['toddler-stuck-something-in-nose', 'object-stuck-in-nose', 'one-sided-nasal-discharge'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Foreign Bodies in the Nose. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Foreign-Bodies.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Button Battery Injuries: Emergency Management. Pediatrics. 2015.', url: 'https://publications.aap.org/pediatrics/article/136/1/186/73847' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Foreign object in the nose: First aid.', url: 'https://www.mayoclinic.org/first-aid/first-aid-foreign-object-in-the-nose/basics/art-20056610' },
  ],
};
