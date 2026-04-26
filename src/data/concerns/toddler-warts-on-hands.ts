import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-warts-on-hands',
  title: 'Toddler Warts on Hands',
  category: 'skin',
  searchTerms: [
    'toddler warts on hands',
    'child wart finger',
    'baby wart treatment',
    'toddler verruca',
    'common warts toddler',
    'wart on child hand',
    'HPV wart child',
    'toddler bumps on hands',
    'are warts contagious children',
    'how to remove wart toddler',
  ],
  quickAnswer:
    'Warts are caused by the human papillomavirus (HPV) and are very common in children. They appear as small, firm, rough-textured bumps, often on the hands and fingers. Warts are harmless and most go away on their own within 1-2 years as the immune system fights the virus. Treatment is optional but available if warts are bothersome.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Warts are rare in babies under 12 months. If you notice a bump on your baby\'s hand, it is more likely a different type of skin growth such as a cyst, molluscum contagiosum, or a normal skin variation. Have your pediatrician look at any unusual bumps on a young baby to confirm what they are.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Warts can begin to appear in toddlers as they have more contact with surfaces and other children. They are spread by direct contact with the virus, which enters through tiny breaks in the skin. Toddlers who bite their nails or pick at hangnails are more susceptible. Most warts at this age can be left alone - they typically resolve on their own.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Common warts (verruca vulgaris) are most frequently seen on the fingers, hands, and around the nails. They are not a sign of poor hygiene or a serious health problem. If your child is bothered by the wart or it is spreading, over-the-counter salicylic acid treatments can be used for children over 2 (ask your pediatrician first). Freezing treatment is another option but can be uncomfortable.',
    },
  ],
  whenNormal: [
    'A small, firm, rough-textured bump on the hand or finger',
    'The wart is skin-colored or slightly gray with tiny black dots (clotted blood vessels)',
    'One or a few warts that are not painful or spreading rapidly',
    'Warts that persist for several months - this is typical as the immune system works to clear the virus',
  ],
  whenToMention: [
    'Warts are spreading to many areas or multiplying quickly',
    'Your child is bothered by the appearance or the wart interferes with hand use',
    'You are unsure whether the bump is a wart or something else',
  ],
  whenToActNow: [
    'A growth is rapidly changing size, color, or shape, or looks different from a typical wart',
    'The wart area becomes red, warm, painful, or shows signs of infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Warts.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. HPV and Warts.',
      url: 'https://www.cdc.gov/hpv/index.html',
    },
  ],
};
