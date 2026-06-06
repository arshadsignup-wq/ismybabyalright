import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'booster-seat-readiness',
  title: 'When Is My Child Ready for a Booster Seat at the Table?',
  category: 'feeding',
  searchTerms: ['booster seat dining', 'when use booster seat table', 'booster seat age', 'transition high chair booster', 'toddler booster seat meal', 'when stop high chair', 'booster seat for eating', 'toddler sit at table', 'booster seat safety dining', 'too big for high chair'],
  quickAnswer: 'Most children are ready for a dining booster seat between 18 months and 3 years, when they have outgrown their high chair and can sit well independently. Choose a booster with safety straps that secures to the chair. Ensure the child\'s feet reach a footrest or the seat is at the right height for the table. Good posture supports better eating.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable. Baby needs to be in parent arms or in a reclined position for feeding.' },
    { ageRange: '4-6 months', context: 'Baby should be in a high chair with proper support once ready for solids.' },
    { ageRange: '6-9 months', context: 'A high chair remains the best option for babies this age.' },
    { ageRange: '9-12 months', context: 'Most babies still need a high chair. Some larger babies may transition to a restaurant-style booster but a high chair provides the best support.' },
    { ageRange: '12-24 months', context: 'Between 18-24 months, many toddlers are ready for a booster seat at the table. Look for one that straps to the chair and has its own safety harness. Make sure feet are supported. Being at the table with the family promotes social eating and models good eating behavior.' },
  ],
  whenNormal: ['Toddler sits well in a booster seat and can reach the table comfortably', 'Toddler participates in family meals at the table', 'Toddler occasionally wants to get down from the booster which is normal behavior'],
  whenToMention: ['Toddler cannot sit upright in a booster seat and keeps slumping', 'Toddler falls from a booster seat despite having straps', 'You are unsure what seating arrangement is safest for your toddler'],
  whenToActNow: ['Toddler has fallen from a chair and is injured', 'Toddler is trapped in a booster seat'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['high-chair-safety-concerns', 'family-meals-importance-baby', 'toddler-independent-eating-expectations'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Seating Safety for Children. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Injury Prevention. 2023.', url: 'https://www.cdc.gov/injury/wisqars/index.html' },
  ],
};
