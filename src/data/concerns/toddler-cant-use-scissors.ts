import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-use-scissors',
  title: 'My Toddler Can\'t Use Scissors',
  category: 'physical',
  searchTerms: ['toddler can\'t use scissors', 'toddler scissor skills', 'when can toddler cut with scissors', 'toddler cutting skills delay', 'toddler scissors age', 'preschooler can\'t cut', 'toddler scissor grasp', 'teaching toddler scissors', 'scissor skill development', 'toddler fine motor cutting'],
  quickAnswer: 'Scissor use is one of the most advanced fine motor skills and typically begins developing around age 2.5-3. Most children cannot make snips until around age 2.5 and cannot cut along a line until age 4-5. If your toddler under 3 cannot use scissors, this is completely age-appropriate.',
  byAge: [
    { ageRange: '18-24 months', context: 'Scissor use is not expected at this age. Your toddler is developing the hand strength and bilateral coordination they will need later. Tearing paper and using playdough tools are great precursor activities.' },
    { ageRange: '2-3 years', context: 'Some children begin making random snips with child-safe scissors around age 2.5. Many children need to be shown how to hold scissors and require practice. If your child cannot make a single snip by age 3, occupational therapy activities can help.' },
    { ageRange: '3-4 years', context: 'Most children can snip across a piece of paper and begin cutting along thick lines. If your child cannot open and close scissors at all, evaluation of hand strength and coordination is recommended.' },
    { ageRange: '4-5 years', context: 'Cutting along lines, cutting out simple shapes, and more precise scissor control develop. If your child still cannot use scissors at all by age 4, an occupational therapy evaluation is helpful.' },
  ],
  whenNormal: ['Your child is under 3 and cannot use scissors.', 'Your child can snip but cannot cut along a line.', 'Your child needs help positioning scissors.', 'Your child is improving with practice.'],
  whenToMention: ['Your child is over 3 and cannot make any cuts with scissors.', 'Your child has difficulty opening and closing scissors.', 'Your child has other fine motor delays alongside scissor difficulty.'],
  whenToActNow: ['Your child has lost hand function or strength.', 'Your child\'s fine motor skills are declining.'],
  relatedMilestones: ['fine-motor-manipulation', 'fine-motor-bilateral'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-poor-pencil-grip', 'fine-motor-delay-general', 'toddler-difficulty-with-buttons'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Fine Motor Development in Preschoolers', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/default.aspx' },
    { org: 'NIH', citation: 'Case-Smith J. Fine Motor Outcomes in Preschool Children Who Receive OT. Am J Occup Ther. 2000;54(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/10906126/' },
    { org: 'CDC', citation: 'CDC - Positive Parenting Tips for Preschoolers', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
  ],
};
