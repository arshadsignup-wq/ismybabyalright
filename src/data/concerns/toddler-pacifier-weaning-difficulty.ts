import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-pacifier-weaning-difficulty', title: 'Difficulty Weaning Toddler from Pacifier', category: 'behavior',
  searchTerms: ['toddler pacifier weaning','getting rid of pacifier toddler','toddler addicted to pacifier','when to stop pacifier','pacifier weaning difficulty','toddler wont give up pacifier','how to wean pacifier toddler','pacifier at age 3','pacifier dental problems','stopping pacifier tips'],
  quickAnswer: 'The American Academy of Pediatrics recommends weaning from the pacifier between ages 2-4, and ideally by age 2 for dental reasons. However, many toddlers are deeply attached and weaning can be challenging. The pacifier provides genuine comfort and is a legitimate coping tool - your child is not being stubborn. Gentle, gradual approaches work better than abruptly taking it away. Most children do eventually give it up.',
  byAge: [
    { ageRange: '12-18 months', context: 'This is a good time to start limiting pacifier use to sleep and stressful situations. Gradually reducing access is easier at this age because your child is less verbally persistent. Offer alternative comfort items like a lovey. If your child is not ready, do not force it.' },
    { ageRange: '18-24 months', context: 'The AAP suggests considering weaning by age 2. Gradual approaches work best: first limit to nap and bedtime, then just bedtime. Make the pacifier less satisfying by cutting the tip (check with your pediatrician first). Offer lots of alternative comfort and praise.' },
    { ageRange: '2-3 years', context: 'Your child is more verbal and may resist giving up the pacifier. Creative approaches: the "pacifier fairy" who takes pacifiers to babies who need them, a special exchange for a desired toy, or a ceremony marking their transition to being a "big kid." Expect 2-5 hard nights.' },
    { ageRange: '3-4 years', context: 'If your child still uses a pacifier, you can use reason and motivation. Let them be part of the decision. Do not shame them. Talk to your dentist about any dental changes. Most dental effects from pacifier use at this age are reversible once the pacifier is stopped.' },
  ],
  whenNormal: ['Difficulty giving up the pacifier - it is a significant comfort item','A few rough nights after removing the pacifier','Asking for it back for a week or two after weaning','Being sad about losing the pacifier - that is a real loss for them'],
  whenToMention: ['Your child is over age 4 and heavily dependent on the pacifier','Your dentist has identified dental changes from pacifier use','Your child cannot sleep or calm down without the pacifier at age 3+','Pacifier weaning causes extreme prolonged distress beyond the first week'],
  whenToActNow: ['The pacifier is causing significant dental problems that need intervention','Your child is choking on pacifier parts due to deterioration'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pacifiers: Satisfying Your Baby\'s Needs. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers-Satisfying-Your-Babys-Needs.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Wean a Pacifier-Dependent Child. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Weaning-From-the-Pacifier.aspx' },
    { org: 'NIH', citation: 'Warren JJ et al. Effects of nonnutritive sucking habits on occlusal characteristics in the mixed dentition. Pediatr Dent. 2005;27(6):445-450.', url: 'https://pubmed.ncbi.nlm.nih.gov/16532883/' },
  ],
  relatedConcernSlugs: ['toddler-comfort-object-dependency','baby-pacifier-falling-out-sleep','toddler-self-regulation-timeline','toddler-emotional-regulation-skills'],
};
