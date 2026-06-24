import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-puzzle-skills-age',
  title: 'When Should My Toddler Be Able to Do Puzzles?',
  category: 'physical',
  searchTerms: [
    'toddler puzzle skills age',
    'when can toddler do puzzles',
    'toddler puzzle milestones',
    'toddler can\'t do puzzles',
    'best puzzles for toddler age',
    'toddler puzzle piece count',
    'toddler shape sorter age',
    'toddler puzzle development',
    'toddler fine motor puzzles',
    'toddler problem solving puzzles',
  ],
  quickAnswer:
    'Puzzle skills develop gradually and reflect the growth of fine motor control, visual-spatial reasoning, and problem-solving abilities. Around 12 months, toddlers can typically manage simple shape sorters and single-piece puzzles with knobs. By age 2, most can complete 3-4 piece puzzles, and by age 3, many children can manage 8-12 piece puzzles. There is significant individual variation, and interest level plays a big role — a toddler who rarely does puzzles will naturally be less skilled than one who practices often.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, toddlers are learning to fit shapes into corresponding holes (shape sorters) and can manage simple puzzles with large knobs and single cutout shapes. They are developing the hand-eye coordination and spatial awareness needed for more complex puzzles later. You may notice your toddler trying to force pieces into wrong spots — this is trial-and-error learning in action. Offer chunky puzzles with 2-3 pieces that have large knobs for easy grasping. Demonstrate how pieces fit and celebrate their efforts.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers become more purposeful with puzzle pieces, starting to rotate pieces to find the correct orientation. They can typically manage puzzles with 3-5 large pieces. Shape sorters become easier, and your toddler may enjoy nesting cups and stacking rings, which develop similar spatial reasoning skills. If your toddler shows no interest in puzzles, that is fine — these skills can be developed through other activities like building with blocks, playing with containers, or sorting objects by shape and color.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, many children can complete puzzles with 6-12 interlocking pieces, though some children prefer simpler puzzles and that is normal. Problem-solving strategies improve — your toddler may look at the picture, match colors, or try edge pieces first. Puzzles at this age support cognitive development including categorization, spatial reasoning, and persistence. If your child cannot complete even the simplest 2-3 piece puzzle by age 3, or seems to have difficulty understanding how pieces relate to each other, mention it to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your toddler can do simple shape sorters and single-piece puzzles by around 12-15 months',
    'Your toddler is more interested in dumping puzzle pieces out than putting them in — this is normal exploratory behavior',
    'Your toddler\'s puzzle abilities vary by day and by their mood, tiredness, and interest level',
    'Your toddler prefers other types of play over puzzles — not all children are equally drawn to puzzles',
  ],
  whenToMention: [
    'Your toddler cannot fit shapes into a shape sorter by 18 months despite practice',
    'Your toddler shows no understanding of how puzzle pieces relate to the puzzle board by age 2',
    'Your toddler seems to have difficulty with spatial concepts in general — cannot stack blocks, nest cups, or sort shapes',
  ],
  whenToActNow: [
    'Your toddler has lost fine motor skills they previously had — can no longer grasp or manipulate objects they used to handle',
    'Your toddler\'s hand trembles significantly or they seem unable to control their hand movements',
    'Your toddler avoids using one hand entirely, which could suggest a motor issue on that side',
  ],
  relatedMilestones: [
    'fine-motor-manipulation',
    'cognitive-problem-solving',
    'cognitive-spatial-reasoning',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-drawing-scribbling-milestones',
    'toddler-scissors-use-when',
    'weak-grip-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 2 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Developmental-Milestones-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tips on Playing with Babies and Toddlers.',
      url: 'https://www.zerotothree.org/resource/tips-on-playing/',
    },
  ],
};
