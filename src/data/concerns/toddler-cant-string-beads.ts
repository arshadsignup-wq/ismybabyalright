import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-string-beads',
  title: 'My Toddler Has Difficulty Threading and Stringing',
  category: 'physical',
  searchTerms: ['toddler can\'t string beads', 'toddler threading difficulty', 'toddler lacing skills', 'toddler can\'t thread beads', 'stringing beads age', 'toddler fine motor threading', 'toddler bead stringing delay', 'when can toddler thread beads', 'toddler lacing cards', 'toddler bilateral fine motor'],
  quickAnswer: 'Stringing large beads is an advanced fine motor skill that typically develops between 2 and 3 years. It requires bilateral coordination, pincer grasp precision, and hand-eye coordination. If your toddler under 2.5 cannot string beads, this is age-appropriate. The skill develops with practice.',
  byAge: [
    { ageRange: '12-18 months', context: 'Bead stringing is too advanced at this age. Your toddler is still developing the pincer grasp and bilateral coordination needed. Stacking rings and simple insert puzzles are more appropriate fine motor activities.' },
    { ageRange: '18-24 months', context: 'Some toddlers may begin to thread very large beads onto a stiff string or dowel. Most cannot yet. If your toddler enjoys trying, that is a great sign of emerging skill. If not, other fine motor activities are more appropriate at this age.' },
    { ageRange: '2-3 years', context: 'Most children can string large beads by age 2.5-3. Start with large beads and a stiff cord. If your child cannot string any beads by age 3, mention it to your pediatrician, as it may indicate fine motor coordination challenges.' },
    { ageRange: '3-4 years', context: 'Bead stringing should be manageable with large beads. Smaller beads and more complex lacing activities develop later. If your child still cannot string large beads, occupational therapy can help develop the coordination needed.' },
  ],
  whenNormal: ['Your toddler is under 2.5 and cannot string beads.', 'Your toddler can string large beads but not small ones.', 'Your toddler is working on other fine motor skills successfully.', 'Bead stringing is improving with practice.'],
  whenToMention: ['Your child is over 3 and cannot string large beads.', 'Your child has difficulty with multiple fine motor tasks.', 'Your child avoids fine motor activities.'],
  whenToActNow: ['Your child has lost fine motor skills.', 'Your child\'s hand coordination is declining.'],
  relatedMilestones: ['fine-motor-pincer', 'fine-motor-bilateral', 'fine-motor-coordination'],
  showSelfReferral: true,
  relatedConcernSlugs: ['fine-motor-delay-general', 'poor-hand-eye-coordination', 'toddler-difficulty-with-buttons'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Fine Motor Development', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 3 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html' },
    { org: 'NIH', citation: 'Case-Smith J. Fine Motor Outcomes in Preschool Children. Am J Occup Ther. 2000;54(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/10906126/' },
  ],
};
