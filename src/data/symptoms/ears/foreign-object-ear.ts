import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'foreign-object-ear',
  title: 'Foreign Object in Ear in Babies & Toddlers',
  bodySystem: 'ears',
  description: 'Young children commonly insert small objects into their ears out of curiosity. Common items include beads, small toy parts, food (beans, popcorn kernels), paper, cotton, foam, and button batteries. Some foreign bodies cause immediate symptoms while others may go unnoticed for days or weeks until they cause pain, discharge, or odor. Button batteries are a medical emergency as they can cause tissue damage within hours.',
  possibleCauses: [
    { cause: 'Self-insertion of small toys, beads, or food items (curiosity)', likelihood: 'common' },
    { cause: 'Insects entering the ear canal', likelihood: 'uncommon' },
    { cause: 'Broken pieces of cotton swabs', likelihood: 'uncommon' },
    { cause: 'Button batteries (disc batteries)', likelihood: 'rare' },
    { cause: 'Small magnets', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-12 months', normalVariation: 'Infants rarely insert objects themselves before developing fine motor skills. If a foreign object is found, consider how it got there.', whenToWorry: 'Any suspected foreign body should be evaluated. Pain, discharge, bleeding, or button battery suspected—seek immediate care.' },
    { ageRange: '1-3 years', normalVariation: 'Peak age for inserting objects into ears. Children experiment with placing things in body openings. They may not report doing it.', whenToWorry: 'Unexplained foul-smelling ear discharge, sudden ear pain, blood from ear, hearing decrease in one ear, or visible object in ear canal. Button battery is always an emergency.' },
    { ageRange: '3-5 years', normalVariation: 'Children may still insert objects but are more likely to report it. They may be embarrassed and not tell parents.', whenToWorry: 'Same as younger children. Additionally, if child reports "something stuck" in ear, do not attempt forceful removal at home.' },
  ],
  urgencyLevels: {
    emergency: [
      'Button battery (disc battery) in the ear—can cause burns within 2 hours',
      'Object causing severe pain, significant bleeding, or signs of infection spreading to surrounding tissue',
      'Hearing loss or vertigo after foreign body insertion',
    ],
    urgent: [
      'Visible foreign object that child is in distress about',
      'Sharp object in the ear canal',
      'Insect in the ear causing significant pain',
      'Foreign body with purulent (pus) discharge or fever',
    ],
    sameDay: [
      'Foreign object visible in ear but child is comfortable',
      'Suspected foreign body with mild discharge or odor',
      'Object inserted hours ago without severe symptoms',
    ],
    monitor: [
      'Child reports putting something in ear but nothing visible and no symptoms',
      'Very superficial object at ear opening that can be easily removed without instruments',
    ],
  },
  homeRemedies: [
    'If the object is clearly visible at the ear opening, gently try to remove it with fingers or tweezers—only if child is cooperative',
    'Tilt the child\'s head with affected ear down and gently shake—gravity may dislodge loose objects',
    'For a live insect: put a few drops of warm mineral oil or olive oil in the ear to kill it, then seek removal',
    'Do NOT use cotton swabs or try to dig out an object—this usually pushes it deeper',
    'Do NOT irrigate (flush with water) if the object is organic (food, seed)—water can cause it to swell',
    'Do NOT irrigate if you suspect a perforated eardrum',
    'If initial attempt fails, stop and seek medical help—multiple attempts increase the risk of injury',
    'Keep small objects, button batteries, and magnets out of reach of young children',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-pain', 'ear-discharge', 'ear-smell', 'not-responding-sounds'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['toddler-put-something-in-ear', 'object-stuck-in-ear'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Foreign Bodies in Ears and Nose. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Foreign-Bodies.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Button Battery Injuries in Children. Pediatrics. 2015;136(1):186-197.', url: 'https://publications.aap.org/pediatrics/article/136/1/186/73847' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Foreign object in the ear: First aid.', url: 'https://www.mayoclinic.org/first-aid/first-aid-foreign-objects-in-the-ear/basics/art-20056698' },
  ],
};
