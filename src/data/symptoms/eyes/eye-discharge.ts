import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'eye-discharge',
  title: 'Eye Discharge (Sticky Eyes) in Babies',
  bodySystem: 'eyes',
  description: 'Eye discharge in babies is very common, especially in newborns. It appears as sticky, crusty, or watery material around the eyes. The most frequent cause is a blocked tear duct (dacryostenosis), which affects up to 20% of newborns and usually resolves on its own by 12 months. However, eye discharge can also indicate infection requiring treatment.',
  possibleCauses: [
    { cause: 'Blocked tear duct (dacryostenosis)', likelihood: 'common' },
    { cause: 'Viral conjunctivitis (pink eye)', likelihood: 'common' },
    { cause: 'Bacterial conjunctivitis', likelihood: 'uncommon' },
    { cause: 'Allergic conjunctivitis (in older infants/toddlers)', likelihood: 'uncommon' },
    { cause: 'Chemical irritation (from birth eye drops)', likelihood: 'common' },
    { cause: 'Neonatal chlamydia or gonorrhea conjunctivitis', likelihood: 'rare' },
    { cause: 'Foreign body in the eye', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-1 month', normalVariation: 'Mild discharge in the first few days after birth can be from antibiotic eye drops given at delivery. Blocked tear ducts commonly present at this age with one-sided watery or mildly mucoid discharge.', whenToWorry: 'Heavy yellow/green discharge with eyelid swelling in the first 2-4 weeks of life. Neonatal conjunctivitis from chlamydia or gonorrhea requires urgent treatment to prevent vision loss.' },
    { ageRange: '1-6 months', normalVariation: 'Blocked tear duct discharge is very common \u2014 typically white or slightly yellow, often worse in the morning or during colds. The white of the eye is not red.', whenToWorry: 'Red eye (conjunctival injection) with thick green/yellow discharge, eyelid swelling or redness, fever with eye discharge, or baby unable to open eye.' },
    { ageRange: '6-12 months', normalVariation: 'Blocked tear ducts usually resolve by 12 months. Intermittent tearing and mild discharge during colds remains normal.', whenToWorry: 'Persistent blocked tear duct beyond 12 months (may need probing), recurrent infections around the tear duct area, or sudden onset of significant discharge.' },
    { ageRange: '1-3 years', normalVariation: 'Viral pink eye is common in toddlers, especially in daycare. Produces watery to slightly mucoid discharge and is very contagious.', whenToWorry: 'Discharge with pain, light sensitivity, vision changes, eyelid swelling that is spreading to the cheek (periorbital cellulitis), or discharge following eye injury.' },
  ],
  urgencyLevels: {
    emergency: [
      'Newborn (under 4 weeks) with rapidly worsening eye discharge and eyelid swelling',
      'Eye discharge with eyelid swelling spreading to the face (periorbital/orbital cellulitis)',
      'Eye discharge or redness following chemical exposure or trauma',
      'Baby cannot open eye due to swelling',
    ],
    urgent: [
      'Thick green/yellow discharge with red eye and eyelid swelling',
      'Eye discharge with fever in an infant under 3 months',
      'Pain or extreme light sensitivity with discharge',
      'Eye discharge following injury or foreign body',
    ],
    sameDay: [
      'New onset of red eye with discharge in a toddler (likely viral, but may need evaluation)',
      'Worsening discharge from a known blocked tear duct (possible secondary infection)',
      'Eye discharge not improving after several days of home care',
    ],
    monitor: [
      'Mild watery or white discharge from one eye with no redness (likely blocked tear duct)',
      'Slight morning crusting that wipes away easily',
      'Known blocked tear duct with typical mild discharge pattern',
    ],
  },
  homeRemedies: [
    'Clean discharge with a warm, damp cotton ball \u2014 wipe from inner corner outward',
    'Use a fresh cotton ball for each eye to prevent spreading infection',
    'For blocked tear duct: gentle lacrimal sac massage 2-3 times daily (press gently at inner corner of eye and stroke downward)',
    'Breastmilk drops on the eye \u2014 some evidence supports antibacterial properties (though not a substitute for medical treatment)',
    'Warm compress on closed eyelid for comfort',
    'Wash hands before and after touching baby\'s face',
    'Do not share towels or washcloths if conjunctivitis is suspected',
  ],
  triageSlug: 'eye-discharge',
  relatedSymptomSlugs: ['swollen-eyelid', 'watery-eyes', 'fever'],
  relatedIllnessSlugs: ['conjunctivitis', 'blocked-tear-duct', 'periorbital-cellulitis'],
  relatedConcernSlugs: ['baby-sticky-eye', 'baby-goopy-eye', 'blocked-tear-duct-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Conjunctivitis (Pink Eye) in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Conjunctivitis-Pink-Eye.aspx' },
    { org: 'AAO', citation: 'American Academy of Ophthalmology. Blocked Tear Duct in Babies.', url: 'https://www.aao.org/eye-health/diseases/blocked-tear-duct-children' },
    { org: 'NHS', citation: 'NHS. Sticky eye in newborns.', url: 'https://www.nhs.uk/conditions/sticky-eye/' },
  ],
};
