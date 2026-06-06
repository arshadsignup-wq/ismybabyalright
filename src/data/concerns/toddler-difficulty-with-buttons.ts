import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-difficulty-with-buttons',
  title: 'My Toddler Can\'t Do Buttons or Zippers',
  category: 'physical',
  searchTerms: ['toddler can\'t do buttons', 'toddler can\'t zip zipper', 'toddler dressing difficulty', 'toddler buttoning skills', 'when can toddler button clothes', 'toddler self-dressing delay', 'toddler can\'t fasten clothing', 'toddler zipper skills', 'toddler dressing fine motor', 'buttoning age milestone'],
  quickAnswer: 'Buttoning and zipping are advanced fine motor skills. Most children cannot unbutton large buttons until age 2.5-3, and buttoning does not develop until age 3-4. Zippers are learned around age 3. If your toddler under 3 cannot do buttons or zippers, this is completely normal.',
  byAge: [
    { ageRange: '18-24 months', context: 'Toddlers at this age are just beginning to participate in dressing by pulling off shoes and socks. Buttons and zippers are too advanced. Letting your toddler practice pulling off easy clothing builds the foundation.' },
    { ageRange: '2-3 years', context: 'Your child may begin to unbutton large buttons and pull down large zippers. Buttoning (pushing through the buttonhole) comes later. Practice with dress-up clothes that have large fasteners helps develop these skills.' },
    { ageRange: '3-4 years', context: 'Most children can manage large buttons and zippers by age 3-4. Small buttons remain challenging. If your child cannot manage any fasteners by age 4, occupational therapy can help develop the fine motor coordination needed.' },
    { ageRange: '4-5 years', context: 'Most children can button and zip independently. Snaps and small buttons may still be difficult. If your child has persistent difficulty with all fasteners, evaluation of fine motor skills is recommended.' },
  ],
  whenNormal: ['Your toddler is under 3 and cannot do buttons or zippers.', 'Your toddler can unbutton but not button.', 'Your toddler manages large buttons but not small ones.', 'Your child is improving with practice.'],
  whenToMention: ['Your child is over 4 and cannot manage any clothing fasteners.', 'Your child has difficulty with multiple self-care fine motor tasks.', 'Your child avoids dressing tasks due to frustration.'],
  whenToActNow: ['Your child has lost fine motor abilities.', 'Your child has hand weakness or coordination decline.'],
  relatedMilestones: ['fine-motor-manipulation', 'fine-motor-bilateral', 'self-care-dressing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['fine-motor-delay-general', 'toddler-cant-use-scissors', 'toddler-cant-string-beads'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Self-Dressing Skills', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 4 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html' },
    { org: 'NIH', citation: 'Shepherd J. Self-Care and Adaptations for Independent Living. In: Occupational Therapy for Children. 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
