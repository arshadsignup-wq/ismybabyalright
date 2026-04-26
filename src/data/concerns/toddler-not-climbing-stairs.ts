import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-climbing-stairs',
  title: 'Toddler Not Climbing Stairs',
  category: 'physical',
  searchTerms: [
    'toddler not climbing stairs',
    'toddler won\'t go up stairs',
    'when do toddlers climb stairs',
    'child afraid of stairs',
    'toddler can\'t do steps',
    '2 year old not climbing stairs',
    'toddler won\'t walk up stairs',
    'delayed stair climbing toddler',
    'toddler struggles with stairs',
    'when should child climb stairs',
  ],
  quickAnswer:
    'Stair climbing is a complex skill that develops gradually between 12 and 36 months. Most toddlers begin crawling up stairs around 12 to 18 months, walk up with a hand held around 18 to 24 months, and walk up holding a railing by 2 to 3 years. Alternating feet on stairs typically does not happen until age 3 or later. If your toddler is not yet climbing stairs, they may simply need more practice and confidence.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most toddlers at this age approach stairs by crawling up on hands and knees. Some may pull themselves up using the railing or a wall. Going down stairs is harder and many toddlers scoot down on their bottoms or back down on their tummies. It is completely normal for toddlers in this age range to show no interest in stairs, especially if they do not have regular access to them at home.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Many toddlers can walk up stairs while holding an adult\'s hand or the railing, placing both feet on each step before moving to the next one. Some toddlers are cautious about stairs and may still prefer crawling up. If your toddler is walking well on flat ground but hesitant about stairs, this is often about confidence rather than ability. Regular, supervised practice on safe stairs can help build comfort.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, most children can walk up stairs holding a railing, one step at a time (both feet on each step). By age 3, many children begin alternating feet on stairs, though some still use the two-feet-per-step method. If your child is 2.5 years or older and cannot walk up stairs at all even while holding your hand, mention this to your pediatrician. Difficulty with stairs at this age may reflect overall leg strength or coordination concerns.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most 3-year-olds can walk up and down stairs independently, though they may still hold the railing. Alternating feet becomes more common. If your child is over 3 and still cannot manage stairs with support, a gross motor evaluation can help identify whether targeted exercises or physical therapy would help build the strength and coordination needed.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months and prefers crawling up stairs or avoids them entirely.',
    'Your toddler can walk up stairs while holding your hand but is not yet ready to use the railing independently.',
    'Your toddler walks up stairs with both feet on each step rather than alternating feet, which is normal until about age 3.',
    'Your toddler is cautious about going down stairs and scoots on their bottom, as descending is harder than ascending.',
    'Your toddler does not have regular access to stairs and has simply not had enough practice yet.',
  ],
  whenToMention: [
    'Your child is over 2.5 years and cannot walk up stairs even while holding your hand.',
    'Your child seems to have significantly more difficulty with stairs than same-age peers, along with trouble running or climbing other structures.',
    'Your child has one leg that seems weaker than the other when climbing stairs.',
  ],
  whenToActNow: [
    'Your child was previously climbing stairs and has suddenly lost the ability or refuses to walk, which may indicate pain or a neurological concern.',
    'Your child cannot bear weight on their legs at all or has progressive weakness that is getting worse over time.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-climbing',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Children Ages 2 to 3. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-to-3-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
