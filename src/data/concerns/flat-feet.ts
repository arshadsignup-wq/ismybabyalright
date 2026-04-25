import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'flat-feet',
  title: 'Toddler Flat Feet (Pes Planus)',
  category: 'medical',
  searchTerms: [
    'toddler flat feet',
    'baby has no arch in feet',
    'toddler flat feet normal',
    'baby feet look flat',
    'when do arches develop in children',
    'toddler flat feet treatment',
    'flat feet in kids',
    'baby walks with feet turned out',
    'toddler ankles roll in',
    'do toddlers need arch support',
  ],
  quickAnswer:
    'Flat feet in babies and toddlers are completely normal. All babies are born with flat feet because the arch has not yet developed, and a fat pad fills the arch area. The arch gradually forms between ages 3-6, and most children develop normal arches without any treatment or special shoes.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'All babies have flat feet. This is entirely normal. The bones and ligaments of the foot are still developing, and a thick fat pad underneath the arch gives the appearance of complete flatness. No evaluation or treatment is needed at this age.',
    },
    {
      ageRange: '12-24 months',
      context:
        'New walkers naturally have flat feet. Their foot muscles and ligaments are still strengthening, and the arch is not expected to be visible yet. You may notice your toddler\'s ankles seem to roll inward slightly, which is also normal at this stage. Barefoot walking on various surfaces actually helps foot development better than supportive shoes.',
    },
    {
      ageRange: '2-4 years',
      context:
        'The arch may begin to become visible, especially when your child stands on tiptoe or when the foot is not bearing weight. However, many children still have flat feet at this age, and this is normal. Flexible flat feet (where the arch appears when not standing but flattens under weight) are almost always benign and do not require treatment.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Most children develop a visible arch by age 6. If your child still has flat feet at this age but they are flexible (the arch appears when sitting or on tiptoe) and painless, they are generally not a concern. Rigid flat feet (where no arch appears even when not bearing weight) or flat feet causing pain should be evaluated by a specialist.',
    },
  ],
  whenNormal: [
    'Your baby or toddler has flat feet, which is the normal foot shape at this age',
    'The arch appears when your child stands on tiptoe or when the foot is dangling (flexible flat foot)',
    'Your child walks, runs, and plays without foot or leg pain',
    'The flat feet are symmetrical, affecting both feet equally',
    'Your child\'s ankles roll slightly inward when standing, which is typical for young children',
  ],
  whenToMention: [
    'Your child complains of foot pain, leg pain, or tires easily during physical activity',
    'Only one foot appears significantly flatter than the other',
    'Your child is over age 6 and the arches have not begun to develop at all',
    'Your child walks on the outside edges of their feet or has an unusual gait pattern',
  ],
  whenToActNow: [
    'Your child has rigid flat feet (no arch appears even when not standing or on tiptoe) along with pain or stiffness, which could indicate a tarsal coalition or other structural issue',
    'Your child has a sudden change in foot shape or develops foot pain that limits their ability to walk or play',
  ],
  relatedMilestones: [
    'walking',
    'running',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Flat Feet and Fallen Arches.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Flat-Feet-Fallen-Arches.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pediatric Flat Feet. Pediatric Orthopaedic Society of North America.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Flat-Feet-Fallen-Arches.aspx',
    },
  ],
};
