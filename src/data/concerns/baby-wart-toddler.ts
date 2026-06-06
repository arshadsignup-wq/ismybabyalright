import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wart-toddler',
  title: 'Warts in Toddlers',
  category: 'skin',
  searchTerms: ['toddler warts', 'baby wart', 'child wart', 'toddler wart on hand', 'toddler wart on finger', 'toddler common wart', 'warts young child', 'HPV wart toddler', 'toddler bumpy growth skin', 'wart treatment toddler'],
  quickAnswer: 'Warts are caused by the human papillomavirus (HPV) and are very common in children. They appear as small, rough, flesh-colored bumps, most often on the hands and fingers. Warts in toddlers are harmless but can be persistent. Most warts eventually go away on their own, though it can take months to years. Treatment options are available if they bother your child.',
  byAge: [
    { ageRange: '0-3 months', context: 'Warts are extremely rare in babies this young. If a rough, bumpy growth is present at birth or appears in the first few months, it is more likely a different type of skin lesion and should be evaluated by your pediatrician.' },
    { ageRange: '3-6 months', context: 'Warts remain very uncommon at this age. Bumpy skin growths in infants are more likely to be milia, molluscum contagiosum, or skin tags. If a suspicious growth appears, have your pediatrician examine it to determine what it is.' },
    { ageRange: '6-12 months', context: 'While still uncommon, warts can begin to appear toward the end of the first year as babies have more contact with surfaces and other children. Common warts on the fingers are the most typical presentation. They are not painful unless on the sole of the foot.' },
    { ageRange: '12-24 months', context: 'Toddlers may develop warts from contact at daycare or play areas. The most common locations are the hands, fingers, and around the nails. Treatment is usually not necessary at this age unless the wart is painful, growing rapidly, or spreading. Over-the-counter salicylic acid treatments can be used under your pediatrician\'s guidance.' },
  ],
  whenNormal: ['A small, rough, flesh-colored bump on the hand or finger of a toddler that is not painful', 'A wart that remains stable and does not spread rapidly', 'A single wart that is not interfering with hand use or causing distress'],
  whenToMention: ['Warts are spreading to multiple areas or are increasing in number', 'A wart is in a location that causes discomfort, like the sole of the foot', 'You want to discuss treatment options for a persistent wart'],
  whenToActNow: ['A growth appears in a young infant that does not look like a typical wart', 'A wart becomes very painful, bleeds frequently, or shows signs of infection', 'Warts appear on the face or genital area, which requires medical evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Warts. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Warts.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Warts: Overview.', url: 'https://www.aad.org/public/diseases/a-z/warts-overview' },
    { org: 'NIH', citation: 'National Library of Medicine. Cutaneous Warts. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK431047/' },
  ],
  relatedConcernSlugs: ['molluscum', 'baby-verruca-foot-wart'],
};
