import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'furniture-tip-over-prevention',
  title: 'Furniture and TV Tip-Over Risks for Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'furniture tip over baby',
    'dresser fell on toddler',
    'TV fell on baby',
    'anchor furniture to wall baby',
    'anti tip furniture baby proofing',
    'bookshelf fell on child',
    'furniture tip over prevention',
    'CPSC furniture anchoring',
    'toddler climbing dresser danger',
    'heavy furniture baby safety',
  ],
  quickAnswer:
    'Furniture and TV tip-overs are a leading cause of injury and death in young children, with nearly 80% of fatalities involving children under 5. Dressers, bookshelves, and flat-screen TVs can topple when a child climbs, pulls open drawers, or leans on them. Anchoring all tall and heavy furniture to the wall with anti-tip straps is a simple, inexpensive step that can save your child\'s life.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies begin pulling themselves up on furniture during this period. Any unstable piece of furniture becomes a tip-over risk as soon as your baby can pull to stand. Anchor dressers, bookshelves, and TV stands to the wall before your baby reaches this milestone. Anti-tip brackets cost $5-25 and take minutes to install.',
    },
    {
      ageRange: '1-2 years',
      context:
        'This is the peak danger period. Toddlers love to climb, pull open dresser drawers to use as steps, and grab at objects on top of furniture. A dresser with open drawers acts as a ladder that becomes top-heavy. Keep heavy items low, TVs mounted to walls, and all tall furniture anchored. Remove items from the top of dressers that might tempt a child to climb.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Children become stronger and more determined climbers. Even furniture you think is too heavy to tip can be pulled over by a climbing child. Continue to keep furniture anchored and teach children that climbing on furniture is not safe. Regularly check that anti-tip devices remain securely attached.',
    },
  ],
  whenNormal: [
    'You have anchored all dressers, bookshelves, and TV stands to the wall and your child plays safely in the room',
    'Your toddler briefly pulled on a securely anchored piece of furniture and it did not budge',
  ],
  whenToMention: [
    'You need guidance on which furniture to anchor and how to do it properly',
    'Your child had a minor bump from a small piece of furniture shifting but has no visible injury or behavioral changes',
  ],
  whenToActNow: [
    'A piece of furniture or TV fell on your child — call 911 immediately if the child is trapped, unconscious, having difficulty breathing, or if a heavy item struck the head, chest, or abdomen',
    'After a furniture tip-over, your child is vomiting, excessively sleepy, has unequal pupils, or seems confused — seek emergency care immediately for possible head or internal injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Anchor It! Protect Children from Tip-Over Incidents.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Tipover-Information-Center',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. TV and Furniture Tip-Overs: A Hidden Hazard. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Preventing-Furniture-and-TV-Tip-Overs.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Furniture Tip-Over Fatality and Injury Data.',
      url: 'https://www.cpsc.gov/Safety-Education/Anchor-It',
    },
  ],
};
