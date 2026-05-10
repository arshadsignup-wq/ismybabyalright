import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dacryocystitis-tear-duct-infection',
  title: 'Dacryocystitis (Tear Duct Infection)',
  category: 'medical',
  searchTerms: [
    'dacryocystitis baby',
    'tear duct infection baby',
    'swollen tear duct baby',
    'red bump near baby eye nose',
    'infected blocked tear duct',
    'baby eye swollen near nose',
    'tear duct abscess baby',
    'dacryocystitis treatment infant',
  ],
  quickAnswer:
    'Dacryocystitis is an infection of the tear sac (lacrimal sac) located between the inner corner of the eye and the nose. It often develops as a complication of a blocked tear duct (nasolacrimal duct obstruction), which is common in infants. Signs include redness, swelling, and tenderness over the inner corner of the eye near the nose, along with yellow-green discharge and tearing. Dacryocystitis requires prompt medical treatment with antibiotics, as the infection can spread to surrounding tissues.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'About 6-20% of newborns have a blocked tear duct, and a small percentage of these develop dacryocystitis. Signs include a firm, tender, red swelling between the inner corner of the eye and the nose. This is different from simple blocked tear duct symptoms (watery eyes and mild discharge). Acute dacryocystitis in newborns (dacryocystitis of the newborn or dacryocystocele) may present as a bluish swelling at birth and needs prompt evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a blocked tear duct has not resolved and becomes infected, dacryocystitis can develop. Treatment typically includes oral antibiotics and warm compresses. Gentle lacrimal sac massage (Crigler massage) may help promote drainage. If the infection is severe or does not respond to antibiotics, the baby may need hospitalization for intravenous antibiotics.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If a blocked tear duct persists and recurrent dacryocystitis occurs, a probing procedure to open the blocked duct may be recommended, typically performed between 6 and 12 months of age. The probing is done under brief anesthesia and has a high success rate (about 90%). This prevents future episodes of dacryocystitis.',
    },
    {
      ageRange: '12 months+',
      context:
        'If probing has not been performed and the blocked duct persists, the risk of recurrent dacryocystitis continues. After age 12 months, the success rate of simple probing decreases, and more advanced procedures such as balloon dacryoplasty or silicone tube intubation may be needed. Chronic or recurrent dacryocystitis should be managed by a pediatric ophthalmologist.',
    },
  ],
  whenNormal: [
    'Your baby has mild tearing and occasional clear mucus from a blocked tear duct without redness or swelling',
    'Gentle tear duct massage and warm compresses are keeping symptoms manageable',
    'The blocked tear duct symptoms are improving on their own over time',
    'Your baby\'s eye has mild crusting in the morning but the area is not red, warm, or swollen',
  ],
  whenToMention: [
    'Discharge from the eye has become yellow or green and thicker than before',
    'You notice persistent redness at the inner corner of the eye near the nose',
    'The blocked tear duct has not resolved by 6 months and you want to discuss probing',
  ],
  whenToActNow: [
    'There is a red, firm, tender swelling between the inner corner of the eye and the nose, as this indicates acute dacryocystitis requiring prompt antibiotic treatment',
    'The swelling is spreading to the eyelid, cheek, or forehead, or your baby has a fever, which could indicate the infection is spreading and may require urgent care or hospitalization',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Blocked Tear Ducts.',
      url: 'https://aapos.org/glossary/nasolacrimal-duct-obstruction',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Dacryocystitis.',
      url: 'https://www.aao.org/eye-health/diseases/dacryocystitis',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blocked Tear Ducts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Tear-Duct-Blocked.aspx',
    },
  ],
};
