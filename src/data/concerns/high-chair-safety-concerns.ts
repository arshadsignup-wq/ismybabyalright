import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'high-chair-safety-concerns',
  title: 'High Chair Safety for My Baby',
  category: 'feeding',
  searchTerms: ['high chair safety', 'high chair age baby', 'baby falling from high chair', 'high chair straps', 'safe high chair', 'when use high chair', 'high chair posture baby', 'high chair foot rest', 'baby leaning in high chair', 'high chair tipping over'],
  quickAnswer: 'High chair safety is important since thousands of children are injured in high chair falls each year. Always use the safety straps, ensure the chair is on a stable surface, never leave baby unattended, and make sure baby can sit upright with feet supported. A footrest improves posture and feeding efficiency. Choose a high chair with a wide base to prevent tipping.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies are not ready for a high chair until they can sit with minimal support, typically around 6 months.' },
    { ageRange: '4-6 months', context: 'When baby can sit with support and shows readiness for solids, introduce the high chair. Use the 3- or 5-point harness every time. Make sure baby\'s feet are supported and not dangling.' },
    { ageRange: '6-9 months', context: 'Always strap baby in. Keep the high chair away from walls, tables, and counters that baby could push off from. Never leave baby unattended in the high chair. Remove the tray for cleaning after every meal.' },
    { ageRange: '9-12 months', context: 'As baby becomes more active, they may try to stand in the high chair or lean to reach things. Continue using all safety straps. Ensure the high chair is recalled-model free by checking the CPSC website.' },
    { ageRange: '12-24 months', context: 'Toddlers may resist being strapped in. Continue to use restraints as toddlers can climb and fall. When your toddler outgrows the high chair, transition to a booster seat with straps on a regular chair.' },
  ],
  whenNormal: ['Baby sits well in the high chair with proper support and straps', 'Baby occasionally resists the straps but is kept in them for safety', 'You clean the high chair after meals and inspect for damage regularly'],
  whenToMention: ['Baby consistently slumps to one side in the high chair, which may indicate core strength issues', 'Baby seems unable to sit in the high chair despite being the right age', 'You need guidance on the right high chair setup for your baby\'s needs'],
  whenToActNow: ['Baby has fallen from a high chair and hit their head', 'Baby is trapped or injured by a high chair malfunction', 'Your high chair model has been recalled'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['booster-seat-readiness', 'baby-choking-on-food', 'baby-starting-solids-when-ready'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. High Chair Safety. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/High-Chair-Safety.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Injury Prevention. 2023.', url: 'https://www.cdc.gov/injury/wisqars/index.html' },
  ],
};
