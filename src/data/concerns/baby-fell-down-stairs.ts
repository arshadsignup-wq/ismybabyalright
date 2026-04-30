import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fell-down-stairs',
  title: 'Baby or Toddler Fell Down the Stairs',
  category: 'medical',
  searchTerms: ['baby fell down stairs', 'toddler fell down stairs', 'baby tumbled stairs', 'toddler fell down steps', 'baby stair fall', 'toddler stair accident', 'baby fell down stairs when to worry', 'toddler fell bump on head stairs', 'baby fell down stairs concussion', 'baby stair safety'],
  quickAnswer: 'Falls down stairs are a common injury in babies and toddlers. Most stair falls, especially from just a few steps, do not result in serious injury. However, any fall down stairs warrants careful observation. After a fall, check your child from head to toe for signs of injury. If your child cried immediately, is consolable, is moving all limbs normally, and has no visible signs of serious injury, observe them closely for 24-48 hours. Any fall from a significant height, loss of consciousness, persistent vomiting, excessive sleepiness, or signs of a broken bone require immediate medical evaluation.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies who fall down stairs are at higher risk for serious injury because they cannot protect themselves during a fall. Their heads are proportionally larger, making head injuries more likely. After any stair fall in a baby under 1: check for responsiveness, movement of all limbs, and visible injuries. If your baby cried immediately and seems normal, still watch closely for 24 hours for vomiting, excessive sleepiness, change in feeding, or unusual behavior. Babies under 3 months who fall should be evaluated by a doctor regardless of how they appear, as signs of head injury can be subtle.' },
    { ageRange: '1-3 years', context: 'Toddlers fall down stairs frequently as they learn to navigate them independently. Most falls from a few stairs result in bumps and bruises. After a fall: comfort your child, check for bumps, bruising, swelling, and ability to move all limbs. Apply ice to bumps. Watch for these red flags over the next 24-48 hours: vomiting more than once, excessive sleepiness or difficulty waking, unsteady walking (beyond what is normal for their age), crossing eyes or unequal pupils, clear fluid from nose or ears, and personality changes. If any of these occur, seek medical care immediately.' },
  ],
  whenNormal: ['Your child cried immediately after the fall and was consolable within a few minutes', 'A small bump or bruise on the forehead (the forehead is designed to take impacts)', 'Your child returned to normal activity shortly after the fall', 'The fall was from a small number of stairs (2-3 steps)'],
  whenToMention: ['Your child fell from more than 3-4 stairs', 'There is significant swelling or a large bump', 'You want reassurance after any stair fall', 'Your child is limping or not using an arm or leg normally after the fall'],
  whenToActNow: ['Loss of consciousness, even briefly', 'Vomiting more than once after the fall', 'Excessive sleepiness or difficulty waking your child', 'Seizure after the fall', 'Clear fluid leaking from the nose or ears', 'Unequal pupil sizes or crossed eyes', 'Not moving an arm or leg, or crying when a body part is touched (possible fracture)', 'A baby under 3 months who has fallen from any height', 'A fall from a full flight of stairs'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-bump-on-head', 'baby-fell-off-bed', 'baby-concussion-signs', 'baby-broken-bone-fracture-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Falls. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Falls.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Head Injuries. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Head Trauma.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557846/' },
  ],
};
