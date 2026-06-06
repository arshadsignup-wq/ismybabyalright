import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-turn-doorknob',
  title: 'My Toddler Can\'t Turn a Doorknob',
  category: 'physical',
  searchTerms: ['toddler can\'t turn doorknob', 'toddler fine motor turning', 'toddler wrist rotation', 'toddler can\'t twist things', 'doorknob turning age toddler', 'toddler hand coordination twisting', 'toddler supination pronation', 'toddler wrist weakness', 'when can toddler open doors', 'toddler twisting motion'],
  quickAnswer: 'Turning a doorknob requires wrist rotation (supination/pronation) that typically develops between 2-3 years. Most toddlers under 2 cannot turn a doorknob, and this is completely normal. This is an advanced fine motor skill that requires hand strength and wrist mobility.',
  byAge: [
    { ageRange: '12-18 months', context: 'Toddlers at this age do not have the wrist rotation or hand strength to turn a doorknob. They may reach for knobs and try to turn them. This interest is a good sign even if they cannot accomplish the task.' },
    { ageRange: '18-24 months', context: 'Some toddlers begin to develop the wrist rotation needed, but most cannot turn a round doorknob. Lever-style handles are easier. If your toddler can turn large knobs or dials, wrist rotation is developing well.' },
    { ageRange: '2-3 years', context: 'Most children learn to turn doorknobs during this period. If your child cannot turn any knobs or dials by age 3, evaluation of hand strength and wrist mobility may be helpful.' },
    { ageRange: '3-4 years', context: 'Doorknob turning should be mastered. If your child has persistent difficulty with twisting and turning motions, an occupational therapist can assess and address wrist and hand function.' },
  ],
  whenNormal: ['Your toddler is under 2.5 years and cannot turn a doorknob.', 'Your toddler can turn large dials and knobs but not doorknobs.', 'Your toddler is developing wrist rotation skills with other activities.', 'Your toddler shows interest in turning things even if not yet successful.'],
  whenToMention: ['Your child is over 3 and cannot turn any knobs or twist objects.', 'Your child seems to have limited wrist rotation in general.', 'Your child has difficulty with other fine motor tasks involving hand rotation.'],
  whenToActNow: ['Your child has lost wrist or hand function.', 'Your child has pain or swelling in their hands or wrists.'],
  relatedMilestones: ['fine-motor-manipulation', 'fine-motor-wrist-rotation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-unscrew-lids', 'fine-motor-delay-general', 'weak-grip-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand Skills: 2 Year Olds', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 3 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html' },
    { org: 'NIH', citation: 'Exner CE. Development of Hand Skills. In: Case-Smith J, ed. Occupational Therapy for Children. 6th ed. 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
