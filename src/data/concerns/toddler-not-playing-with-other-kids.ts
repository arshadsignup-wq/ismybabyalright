import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-playing-with-other-kids',
  title: 'Toddler Not Playing With Other Children',
  category: 'behavior',
  searchTerms: ['toddler not playing with other kids', 'toddler plays alone', 'toddler doesn\'t interact with peers', 'toddler won\'t play with children', 'toddler parallel play', 'toddler prefers adults', 'toddler loner', 'toddler no interest in other children', 'toddler antisocial', 'toddler shy with peers'],
  quickAnswer: 'It is completely normal for toddlers to not play cooperatively with other children. Most toddlers engage in "parallel play" - playing alongside other children rather than with them. True cooperative play (sharing toys, taking turns, playing together toward a common goal) does not typically develop until ages 3-4. A toddler who plays near other children, watches what they are doing, and occasionally interacts is developing normally. Toddlers who prefer playing alone or who are shy around peers are usually showing normal temperament variation, not a social development problem.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies do not engage in peer play. They may show interest in other babies by watching, reaching toward them, or smiling, but interactive play with peers is not a developmental expectation at this age. Babies learn social skills primarily through interactions with caregivers. If your baby attends daycare, being near other babies provides exposure, but do not expect interactive play.' },
    { ageRange: '1-3 years', context: 'The progression of social play in toddlers follows a predictable pattern: solitary play (playing alone, 12-18 months), onlooker play (watching other children play, 18-24 months), parallel play (playing next to but not with other children, 2-3 years), and finally cooperative play (playing together with shared goals, 3-4+ years). A 2-year-old who plays next to other children but not with them is exactly on track. Toddlers who are shy or slow to warm up may take longer to engage with peers but usually do so with gentle encouragement and repeated exposure.' },
  ],
  whenNormal: ['Your toddler plays alongside other children (parallel play) at age 2-3', 'Your toddler watches other children with interest but does not join in', 'Your toddler is shy at first but warms up with time', 'Your toddler prefers playing with familiar adults over unfamiliar peers'],
  whenToMention: ['Your toddler shows no interest in other children at all by age 2', 'Your child actively avoids or moves away from other children consistently', 'Your toddler does not watch, imitate, or show awareness of peers', 'Your child has no interest in sharing enjoyment with anyone (not just peers)'],
  whenToActNow: ['Complete disinterest in all people (adults and children) combined with communication delays', 'Loss of previously developed social interest or skills', 'Your child is distressed by the presence of other children (beyond normal shyness)'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-aggressive-at-daycare', 'separation-anxiety', 'not-responding-to-name', 'no-pointing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Help Your Child Socialize. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Social-Development-2-Year-Olds.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Social Development Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Peer Interaction Development in Early Childhood.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
