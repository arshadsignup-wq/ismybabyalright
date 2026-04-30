import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-broken-bone-fracture-signs',
  title: 'Signs of a Broken Bone or Fracture in Baby',
  category: 'medical',
  searchTerms: ['baby broken bone', 'toddler fracture', 'baby fracture signs', 'toddler broken arm', 'baby broken leg', 'toddler limping fracture', 'baby bone break symptoms', 'toddler broken wrist', 'baby fracture from fall', 'toddler fracture signs'],
  quickAnswer: 'Children\'s bones are more flexible than adults\' and often bend or partially break (greenstick fracture) rather than snapping completely. Signs of a possible fracture include: swelling, deformity (the limb looks bent or crooked), inability or refusal to use the limb, severe pain when the area is touched, and a snapping or popping sound at the time of injury. If you suspect a broken bone, immobilize the area (do not try to straighten it), apply ice wrapped in a cloth, and take your child to the emergency room or urgent care for an X-ray.',
  byAge: [
    { ageRange: '0-12 months', context: 'Fractures in non-mobile babies are uncommon from normal handling but can occur from falls off beds, changing tables, or being dropped. Clavicle (collarbone) fractures can occur during a difficult delivery. Signs in a baby include: crying when the area is touched or moved, not using one arm or leg, swelling, and visible deformity. A baby who stops using one arm or cries when the arm is moved may have a nursemaid\'s elbow (a pulled elbow) or a fracture. Any suspected fracture in a baby needs prompt medical evaluation. Fractures in non-mobile babies without a clear mechanism of injury should be evaluated carefully.' },
    { ageRange: '1-3 years', context: 'Toddler fractures are common, especially of the tibia (shinbone) - called a "toddler\'s fracture." This often happens from a fall, twist, or trip and may cause the toddler to limp or refuse to walk. Other common fractures include the forearm (from falls onto an outstretched hand) and clavicle (from falls). Signs include: swelling, bruising, pain with movement, refusal to use the limb, limping or refusal to bear weight, and visible deformity. If your toddler suddenly refuses to walk after a fall, even without visible swelling, they may have a subtle fracture that needs an X-ray.' },
  ],
  whenNormal: ['Your child cries after a fall but resumes normal use of all limbs within 30 minutes', 'Mild bruising after a bump without swelling or movement limitation'],
  whenToMention: ['Your child is favoring one limb or limping slightly after a fall', 'Mild swelling that is not improving', 'Your child flinches when a specific area is touched'],
  whenToActNow: ['Visible deformity of a limb (bent at an unnatural angle)', 'Significant swelling at an injury site', 'Your child refuses to use an arm or bear weight on a leg after a fall', 'A snapping sound was heard during the injury', 'Bone is visible through the skin (open fracture - call 911)', 'Pale, blue, or cold fingers or toes below an injury site (circulation concern)', 'A suspected fracture in a baby under 12 months with no clear cause'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fell-down-stairs', 'baby-fell-off-bed', 'baby-dislocated-elbow-nursemaids', 'baby-concussion-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Broken Bones. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Fractures.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toddler Fractures. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Fractures. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK554673/' },
  ],
};
