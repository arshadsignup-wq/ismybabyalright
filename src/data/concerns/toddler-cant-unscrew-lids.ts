import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-unscrew-lids',
  title: 'My Toddler Can\'t Twist or Unscrew Lids',
  category: 'physical',
  searchTerms: ['toddler can\'t unscrew lids', 'toddler can\'t twist off caps', 'toddler unscrewing milestone', 'toddler wrist turning weakness', 'toddler can\'t open jars', 'toddler twisting lid difficulty', 'toddler hand strength lids', 'when can toddler unscrew', 'toddler fine motor twisting', 'unscrewing skill toddler age'],
  quickAnswer: 'Unscrewing lids is an advanced fine motor skill that combines wrist rotation, grip strength, and bilateral hand coordination. Most children learn to unscrew loose lids between 2 and 3 years. If your toddler is under 2 and cannot unscrew lids, this is completely normal.',
  byAge: [
    { ageRange: '12-18 months', context: 'Toddlers at this age cannot unscrew lids and are not expected to. They are still developing the wrist rotation and grip strength needed. Offering containers with loose lids to practice can build these skills.' },
    { ageRange: '18-24 months', context: 'Some toddlers begin to unscrew very loose lids with assistance. The bilateral coordination of holding the container while turning the lid is challenging. Practice with play dough container lids and large bottle caps helps develop this skill.' },
    { ageRange: '2-3 years', context: 'Most children can unscrew loose lids by age 2-3. If your child cannot unscrew any lid by age 3, mention it to your pediatrician. They may benefit from occupational therapy to develop hand strength and coordination.' },
    { ageRange: '3-4 years', context: 'Unscrewing should be manageable for loose-to-moderate lids. Tight lids are still difficult and require adult strength. If your child cannot unscrew loose lids, evaluation of hand function is recommended.' },
  ],
  whenNormal: ['Your toddler is under 2 and cannot unscrew lids.', 'Your toddler can unscrew with help or with loose lids.', 'Your toddler is developing wrist rotation with other activities.', 'Unscrewing ability is improving with practice.'],
  whenToMention: ['Your child is over 3 and cannot unscrew any lids.', 'Your child has generalized hand weakness.', 'Your child has difficulty with other twisting and turning tasks.'],
  whenToActNow: ['Your child has lost hand function or strength.', 'Your child has pain or swelling affecting hand use.'],
  relatedMilestones: ['fine-motor-manipulation', 'fine-motor-bilateral'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-turn-doorknob', 'fine-motor-delay-general', 'weak-grip-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Developmental Milestones: Fine Motor', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 3 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html' },
    { org: 'NIH', citation: 'Exner CE. Development of Hand Skills in Children. In: Occupational Therapy for Children. 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
