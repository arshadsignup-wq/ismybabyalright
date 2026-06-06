import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-not-stacking-two-blocks',
  title: 'My Toddler Can\'t Stack Blocks',
  category: 'physical',
  searchTerms: ['toddler can\'t stack blocks', 'toddler won\'t stack', 'when should toddler stack blocks', 'toddler block stacking delay', 'toddler stacking milestone', 'toddler can\'t stack 2 blocks', 'toddler knocks blocks down', 'block stacking age', 'toddler tower building', 'stacking toy milestone'],
  quickAnswer: 'Stacking 2 blocks typically develops around 13-15 months. By 18 months, most toddlers can stack 2-4 blocks, and by 2 years, 6 or more. Many toddlers prefer knocking towers down before learning to build them, which is normal play behavior. If your child cannot stack 2 blocks by 18 months, mention it at your next visit.',
  byAge: [
    { ageRange: '10-13 months', context: 'Most babies at this age prefer knocking down towers you build rather than building their own. They may place one block on top of another briefly before it falls. This is the precursor to stacking and is completely normal.' },
    { ageRange: '13-18 months', context: 'Most toddlers can stack 2-3 blocks during this period. Initial stacking is wobbly and may require several attempts. If your toddler prefers to knock towers down, encourage stacking by making it fun and celebrating their attempts.' },
    { ageRange: '18-24 months', context: 'Your toddler should be able to stack at least 3-4 blocks. If they cannot stack 2 blocks by 18 months, mention it to your pediatrician. Difficulty stacking can relate to fine motor control, hand-eye coordination, or attention.' },
    { ageRange: '2-3 years', context: 'Most children can build towers of 6-8 blocks by age 2. If your child cannot stack blocks at all by this age, evaluation of fine motor skills and coordination is recommended.' },
  ],
  whenNormal: ['Your toddler is under 15 months and is still learning to stack.', 'Your toddler can stack but prefers to knock towers down.', 'Your toddler stacks 2 blocks but the tower is wobbly.', 'Your toddler recently started stacking and is improving.'],
  whenToMention: ['Your child is over 18 months and cannot stack 2 blocks.', 'Your child has difficulty placing objects precisely.', 'Your child has other fine motor delays alongside stacking difficulty.'],
  whenToActNow: ['Your child has lost fine motor skills they had.', 'Your child\'s hand coordination is declining.'],
  relatedMilestones: ['fine-motor-stacking', 'fine-motor-release', 'fine-motor-coordination'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-stacking-blocks', 'fine-motor-delay-general', 'poor-hand-eye-coordination'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills: 1 Year Old', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Hand-and-Finger-Skills-1-Year-Old.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Bayley N. Bayley Scales of Infant and Toddler Development. 3rd ed. Pearson. 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
