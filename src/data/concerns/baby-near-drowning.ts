import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-near-drowning',
  title: 'Near-Drowning or Water Submersion in Baby',
  category: 'medical',
  searchTerms: ['baby near drowning', 'toddler fell in pool', 'baby underwater', 'toddler submerged in water', 'baby inhaled water', 'toddler almost drowned', 'baby drowning signs', 'secondary drowning baby', 'dry drowning baby', 'baby water safety'],
  quickAnswer: 'Any submersion or near-drowning event in a baby or toddler is a medical emergency requiring immediate evaluation, even if your child appears fine afterward. Drowning is the leading cause of death in children ages 1-4. If your child was submerged and is not breathing, call 911 and begin CPR immediately. Even if your child was briefly submerged and seems completely normal afterward, they should be evaluated in the emergency room because complications (pulmonary edema) can develop hours later. There is no safe amount of unsupervised time near water for young children.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies can drown in as little as 1-2 inches of water. Bathtubs, buckets, toilets, and even pet water bowls are hazards. Never leave a baby unattended in or near water, even for a moment. Bath seats and rings are NOT safety devices - babies have drowned in them when a caregiver stepped away. If your baby has a submersion event: if not breathing, start CPR and call 911. If breathing, still go to the emergency room for evaluation. Watch for coughing, difficulty breathing, lethargy, or behavior changes in the hours following any water incident.' },
    { ageRange: '1-3 years', context: 'Toddlers are at the highest risk for drowning due to their mobility, curiosity, and lack of judgment. Pools, bathtubs, and natural bodies of water are the most common drowning locations. If your toddler has a near-drowning event: call 911 if they are not breathing and begin CPR. Even if your child was only briefly submerged and seems fine, seek emergency medical evaluation. Warning signs to watch for in the hours after any submersion event include: persistent coughing, difficulty breathing, chest pain, vomiting, unusual sleepiness, or behavior changes. These may indicate water in the lungs that needs treatment.' },
  ],
  whenNormal: ['There is no "normal" or "wait and see" situation after a submersion event - always seek medical evaluation'],
  whenToMention: ['Any submersion event should be evaluated in the emergency room, not at a routine office visit'],
  whenToActNow: ['Your child was submerged in water and is not breathing - call 911 and begin CPR immediately', 'Your child was submerged and is now coughing, gagging, or having any difficulty breathing', 'Your child was submerged and is lethargic, vomiting, or acting abnormally', 'Any submersion event, even if your child seems completely fine afterward - go to the ER for monitoring'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-liquids', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Water Safety. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Drowning Prevention.', url: 'https://www.cdc.gov/drowning/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Drowning Prevention. Pediatrics.', url: 'https://publications.aap.org/pediatrics/' },
  ],
};
