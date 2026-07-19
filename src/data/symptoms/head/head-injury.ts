import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'head-injury',
  title: 'Head Injury in Babies',
  bodySystem: 'head',
  description: 'Head injuries in babies and toddlers are common as they learn to roll, crawl, and walk. Most are minor bumps that resolve with comfort and ice. However, infants are at higher risk for serious injury because their skulls are thinner, their neck muscles are weaker, and they cannot describe symptoms. Any fall from a significant height or forceful impact warrants careful observation.',
  possibleCauses: [
    { cause: 'Falls from low height (rolling off bed, couch, changing table)', likelihood: 'common' },
    { cause: 'Bumping head while learning to crawl, stand, or walk', likelihood: 'common' },
    { cause: 'Falls from high chairs or shopping carts', likelihood: 'uncommon' },
    { cause: 'Being struck by a falling or thrown object', likelihood: 'uncommon' },
    { cause: 'Motor vehicle accidents', likelihood: 'rare' },
    { cause: 'Non-accidental trauma (abuse)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Babies this age cannot roll independently at first. The skull is soft with open fontanelles and is more vulnerable to injury. Scalp bruises can look dramatic due to rich blood supply.', whenToWorry: 'Any fall or head impact in this age group warrants medical evaluation. Look for bulging fontanelle, excessive sleepiness, persistent vomiting, seizures, or change in feeding behavior.' },
    { ageRange: '3-12 months', normalVariation: 'Babies start rolling and crawling; minor head bumps are very common. A brief cry followed by returning to normal activity is reassuring. Small bump or bruise (goose egg) at impact site is normal.', whenToWorry: 'Loss of consciousness (even briefly), vomiting more than twice, unusual drowsiness, unequal pupils, blood or fluid from ears or nose, bulging fontanelle, or inconsolable crying for more than an hour.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers fall frequently while learning to walk. Most result in minor bumps. A period of crying followed by return to normal behavior is reassuring.', whenToWorry: 'Confusion or disorientation, difficulty walking or coordination changes, severe headache (inconsolable crying), repeated vomiting, blood or clear fluid from ears/nose, or worsening symptoms over 24-72 hours.' },
  ],
  urgencyLevels: {
    emergency: [
      'Loss of consciousness, even briefly',
      'Seizure following head injury',
      'Blood or clear fluid leaking from ear or nose',
      'Unequal pupils or eyes not moving together',
      'Baby is limp, unresponsive, or extremely difficult to wake',
      'Visible skull deformity or depression',
      'Bulging fontanelle after head injury in infant',
    ],
    urgent: [
      'Vomiting more than twice after head injury',
      'Progressively worsening drowsiness',
      'Fall from more than 3 feet (0.9 meters) in infant under 2',
      'Large swelling or bruise in infant under 3 months',
      'Persistent high-pitched or unusual crying',
      'Fall onto hard surface (concrete, tile) from significant height',
    ],
    sameDay: [
      'Small bump (goose egg) with normal behavior afterward',
      'Single episode of vomiting right after crying hard',
      'Minor fall from low height with brief crying then return to normal',
    ],
    monitor: [
      'Very short fall (less than 2 feet) onto soft surface with normal behavior',
      'Small bump while cruising furniture with immediate return to play',
      'Toddler bumps head on table edge, cries briefly, then acts normal',
    ],
  },
  homeRemedies: [
    'Apply a cold compress or ice wrapped in a cloth for 20 minutes to reduce swelling',
    'Observe closely for at least 24-48 hours after any head injury',
    'Allow the child to sleep but wake every 2-3 hours the first night to check responsiveness',
    'Offer comfort and normal feeding; refusal to eat may be a warning sign',
    'Use acetaminophen (Tylenol) for pain relief if needed (not ibuprofen in the first 24 hours, as it may increase bleeding risk)',
    'Keep the child from vigorous activity for 24 hours',
    'Do NOT shake, jostle, or pick up the baby by their arms after a head injury',
    'Document what happened, the height of the fall, the surface landed on, and symptoms',
  ],
  triageSlug: 'head-injury',
  relatedSymptomSlugs: ['large-head', 'vomiting', 'unequal-pupils'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['baby-fell-off-bed', 'baby-hit-head'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Injury. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Traumatic Brain Injury & Concussion: Signs and Symptoms.', url: 'https://www.cdc.gov/traumatic-brain-injury/signs-and-symptoms/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Concussion - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/concussion/symptoms-causes/syc-20355594' },
  ],
};
