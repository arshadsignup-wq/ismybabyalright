import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'swollen-eyelid',
  title: 'Swollen Eyelid in Babies & Toddlers',
  bodySystem: 'eyes',
  description: 'A swollen eyelid in a baby or toddler can range from mild puffiness after sleep to significant swelling indicating infection. The most common causes are insect bites, allergies, and conjunctivitis. However, periorbital cellulitis (infection of the tissue around the eye) is a serious condition that requires urgent medical treatment to prevent spread to the eye socket.',
  possibleCauses: [
    { cause: 'Insect bite or sting near the eye', likelihood: 'common' },
    { cause: 'Allergic reaction (contact or environmental)', likelihood: 'common' },
    { cause: 'Conjunctivitis (viral or bacterial)', likelihood: 'common' },
    { cause: 'Chalazion or stye (meibomian gland blockage)', likelihood: 'uncommon' },
    { cause: 'Preseptal (periorbital) cellulitis', likelihood: 'uncommon' },
    { cause: 'Orbital cellulitis (deep tissue infection)', likelihood: 'rare' },
    { cause: 'Blocked tear duct with secondary infection (dacryocystitis)', likelihood: 'uncommon' },
    { cause: 'Nephrotic syndrome (bilateral eyelid swelling)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Mild eyelid puffiness after sleep or crying is normal. Some newborns have puffy eyelids for the first few days of life.', whenToWorry: 'Red, warm, or progressive eyelid swelling especially with fever. In newborns, any significant eyelid swelling with discharge needs urgent evaluation (possible neonatal conjunctivitis or periorbital cellulitis).' },
    { ageRange: '3-12 months', normalVariation: 'Minor puffiness after naps or crying episodes is normal. Mild swelling with a cold (nasal congestion can cause puffiness around eyes).', whenToWorry: 'Swelling that is red, warm, tender, or spreading. Fever with eyelid swelling. Eye appearing to bulge forward. Baby unable to open the eye.' },
    { ageRange: '1-3 years', normalVariation: 'Insect bites near the eye commonly cause dramatic but harmless swelling. Allergic reactions can cause bilateral puffy eyelids.', whenToWorry: 'Progressive redness and swelling that is worsening over hours, pain with eye movement, fever, or swelling following a sinus infection. One-sided swelling that is warm and tender.' },
    { ageRange: 'Any age', normalVariation: 'Brief puffiness in the morning that resolves within an hour is normal.', whenToWorry: 'Bilateral persistent eyelid swelling may indicate kidney problems (nephrotic syndrome) \u2014 look for swollen ankles or decreased urination as well.' },
  ],
  urgencyLevels: {
    emergency: [
      'Eye swelling with eye bulging forward (proptosis) \u2014 possible orbital cellulitis',
      'Eyelid swelling with pain on eye movement or limited eye movement',
      'Eyelid swelling with high fever and the child appearing very unwell',
      'Rapid spread of redness from eyelid to cheek or forehead',
      'Swelling after significant eye trauma',
    ],
    urgent: [
      'Red, warm, tender eyelid swelling with fever (possible periorbital cellulitis)',
      'Eyelid swelling following recent sinus infection',
      'Progressive eyelid swelling that is worsening over hours',
      'Baby unable to open eye due to swelling with discharge',
    ],
    sameDay: [
      'Eyelid swelling that appears after an insect bite but is not improving after 24 hours',
      'Stye or chalazion that is growing larger or becoming more painful',
      'Mild eyelid swelling with conjunctivitis not responding to home care',
    ],
    monitor: [
      'Mild eyelid puffiness from insect bite with no redness spreading (usually resolves in 1-3 days)',
      'Allergic eye swelling that responds to antihistamine',
      'Small painless bump on eyelid (chalazion) that is stable',
      'Morning puffiness that resolves within the day',
    ],
  },
  homeRemedies: [
    'Apply cool compress to reduce swelling (clean cloth with cool water, 10 minutes several times daily)',
    'For insect bites: oral antihistamine (diphenhydramine/cetirizine) if age-appropriate per doctor guidance',
    'For styes: warm compress for 10-15 minutes 3-4 times daily to promote drainage',
    'Do not squeeze or attempt to pop a stye or chalazion',
    'Keep the area clean \u2014 gently clean eyelid margin with diluted baby shampoo on cotton ball',
    'Monitor for signs of spreading redness or worsening \u2014 mark the border of redness with a pen to track',
    'Elevate head slightly during sleep if swelling is significant',
  ],
  triageSlug: 'swollen-eyelid',
  relatedSymptomSlugs: ['eye-discharge', 'watery-eyes', 'hives', 'fever'],
  relatedIllnessSlugs: ['conjunctivitis', 'periorbital-cellulitis', 'allergic-reaction'],
  relatedConcernSlugs: ['baby-swollen-eye', 'bug-bite-near-eye-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eye Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx' },
    { org: 'AAO', citation: 'American Academy of Ophthalmology. Periorbital Cellulitis vs Orbital Cellulitis.', url: 'https://www.aao.org/education/disease-review/periorbital-orbital-cellulitis' },
    { org: 'UpToDate', citation: 'Patient Education: Periorbital (preseptal) and orbital cellulitis in children.', url: 'https://www.uptodate.com/contents/periorbital-preseptal-and-orbital-cellulitis' },
  ],
};
