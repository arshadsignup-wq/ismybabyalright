import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swollen-finger-toe',
  title: 'Baby Has a Swollen Finger or Toe',
  category: 'medical',
  searchTerms: ['baby swollen finger', 'toddler swollen toe', 'baby finger swelling', 'baby toe swollen', 'baby red swollen finger', 'toddler swollen thumb', 'baby finger infection', 'baby toe red swollen', 'toddler ingrown toenail', 'baby hangnail infection'],
  quickAnswer: 'A swollen finger or toe in a baby or toddler can have several causes: an injury (jammed, pinched, or fractured finger), an infection (paronychia - infection around the nail, or felon - fingertip abscess), a hair tourniquet (a strand of hair wrapped tightly around the digit cutting off circulation), an insect bite, or rarely, an ingrown toenail. The most important things to check immediately are: Is the finger or toe turning blue or white (circulation being cut off)? Is there redness, warmth, and pus (infection)? Check carefully for a hair wrapped around the base of the digit, as this is a common and easily missed cause in babies.',
  byAge: [
    { ageRange: '0-12 months', context: 'In babies, the most important cause to rule out immediately is a hair tourniquet - a strand of hair or thread that wraps around a finger, toe, or (in boys) the penis, acting like a tourniquet and cutting off blood flow. This can cause significant damage quickly if not removed. Look very carefully at the base of the swollen digit for any embedded hair or thread. The hair may be hard to see if it has cut into the skin. If the digit is turning blue, white, or is severely swollen, seek immediate medical care. Paronychia (infection around the nail) is also common in babies who suck their fingers.' },
    { ageRange: '1-3 years', context: 'Common causes of a swollen finger or toe in toddlers include: jamming a finger in a drawer or door (common - can cause a fracture or bruising), hangnail infections (paronychia), insect bites, splinters, ingrown toenails, and hair tourniquets (less common than in babies but still possible). If your toddler has a swollen finger after an injury, apply ice and check if they can bend it. If they refuse to use the finger or it looks deformed, an X-ray is needed. For infections around the nail, warm water soaks and keeping the area clean may help mild cases, but increasing redness, swelling, or pus needs medical evaluation.' },
  ],
  whenNormal: ['Mild swelling after bumping or jamming a finger that improves with ice within a few hours', 'A small hangnail with minor redness that resolves with warm soaks'],
  whenToMention: ['A finger or toe that is swollen, red, and tender suggesting infection', 'A jammed finger that is still swollen after 24 hours', 'An ingrown toenail that keeps recurring', 'Pus around a fingernail or toenail that is not resolving with home care'],
  whenToActNow: ['A finger or toe that is turning blue, white, or purple (check for a hair tourniquet - this is urgent)', 'A swollen finger that the child cannot bend at all after an injury (possible fracture)', 'Red streaks extending from an infected finger or toe (spreading infection)', 'Fever along with a finger or toe infection', 'A swollen finger or toe in a baby with no obvious cause - check carefully for a hair tourniquet'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-hair-tourniquet', 'baby-broken-bone-fracture-signs', 'insect-bites-baby', 'baby-cut-bleeding-wound'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Finger and Toe Injuries. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hair Tourniquet. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Paronychia in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
