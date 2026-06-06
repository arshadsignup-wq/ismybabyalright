import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-not-using-shape-sorter',
  title: 'My Toddler Can\'t Do a Shape Sorter',
  category: 'physical',
  searchTerms: ['toddler shape sorter', 'toddler can\'t do shape sorter', 'shape sorter age', 'toddler puzzle difficulty', 'when can toddler sort shapes', 'shape matching toddler', 'toddler can\'t put shapes in holes', 'shape sorter milestone', 'toddler spatial awareness toys', 'toddler problem solving shapes'],
  quickAnswer: 'Shape sorting combines fine motor skills, spatial awareness, and problem-solving. Most toddlers can place a circle into a shape sorter around 12-15 months and manage 2-3 shapes by 18-24 months. If your toddler cannot manage any shapes by 18 months, it may help to start with simpler puzzles and build up.',
  byAge: [
    { ageRange: '10-14 months', context: 'Most toddlers cannot use a shape sorter yet. They may bang the shapes or mouth them. Some may accidentally get the circle shape in. This is all age-appropriate play with a shape sorter.' },
    { ageRange: '14-18 months', context: 'Most toddlers can place the circle shape reliably and may start getting squares. If your toddler shows interest but cannot orient the shapes, show them how and give time. This combines multiple skills.' },
    { ageRange: '18-24 months', context: 'Your toddler should be able to place at least 2-3 shapes. If they cannot get any shapes in and show no understanding of matching shapes to holes, mention it to your pediatrician, as it may reflect fine motor or cognitive development.' },
    { ageRange: '2-3 years', context: 'Most children can complete a simple shape sorter with multiple shapes. If your child still cannot match any shapes, evaluation of fine motor, spatial, and cognitive skills may be helpful.' },
  ],
  whenNormal: ['Your toddler is under 15 months and enjoys playing with shapes even if not sorting.', 'Your toddler can do the circle but not more complex shapes.', 'Your toddler understands the concept but has difficulty with hand positioning.', 'Your toddler is improving with practice.'],
  whenToMention: ['Your child is over 18 months and cannot place any shapes.', 'Your child shows no understanding of matching shapes to openings.', 'Your child has difficulty with other problem-solving toys.'],
  whenToActNow: ['Your child has lost cognitive or motor skills they previously had.', 'Your child shows declining interest in and ability for interactive play.'],
  relatedMilestones: ['fine-motor-manipulation', 'cognitive-problem-solving'],
  showSelfReferral: true,
  relatedConcernSlugs: ['fine-motor-delay-general', 'toddler-not-stacking-two-blocks', 'poor-hand-eye-coordination'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Cognitive Development: 1 Year Old', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Cognitive-Development-One-Year-Old.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Bayley N. Bayley Scales of Infant and Toddler Development. 3rd ed. 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
