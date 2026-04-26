import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'perioral-dermatitis-baby',
  title: 'Perioral Dermatitis in Babies',
  category: 'skin',
  searchTerms: [
    'perioral dermatitis baby',
    'rash around baby mouth',
    'bumps around baby lips',
    'baby rash around mouth and nose',
    'red bumps around baby mouth',
    'baby facial rash near mouth',
    'drool rash vs perioral dermatitis',
    'baby mouth rash not going away',
    'perioral rash infant',
    'baby pimples around mouth',
  ],
  quickAnswer:
    'Perioral dermatitis causes small red or pink bumps around the mouth, nose, and sometimes eyes. In babies, it is often confused with drool rash or eczema. While drool rash typically clears with barrier cream, perioral dermatitis may need specific treatment from your pediatrician. It is not harmful and does not scar, but it can take time to resolve.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rashes around a newborn\'s mouth are more commonly baby acne, milia, or eczema rather than true perioral dermatitis. Newborn skin goes through many normal changes in the first weeks. If you see small bumps around the mouth area, keep the area clean and dry, and avoid applying heavy products. Mention it at your next well visit if it does not clear.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As drooling increases, it can be hard to distinguish drool rash from perioral dermatitis. Drool rash is flat redness where drool sits, while perioral dermatitis has distinct small bumps often with a clear zone right against the lip border. If a rash around the mouth does not respond to barrier cream and gentle care within 2 weeks, bring it up with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Perioral dermatitis can be triggered by the use of topical steroids on the face (even low-potency ones), thick ointments, or fluoride toothpaste. If your baby has been prescribed a steroid cream for eczema and develops new bumps around the mouth, let your doctor know. Treatment may involve stopping the steroid and using a gentle alternative.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, perioral dermatitis may come and go. Avoid using steroid creams on the face without doctor guidance, and use only mild, fragrance-free products. Treatment options your pediatrician may suggest include topical antibiotics or gentle anti-inflammatory creams. The condition is cosmetic and not contagious.',
    },
  ],
  whenNormal: [
    'Mild redness around the mouth from drool that clears with barrier cream',
    'Small bumps that come and go without other symptoms',
    'Rash that does not seem to bother your baby',
    'Slight irritation after eating messy foods that resolves quickly',
  ],
  whenToMention: [
    'Bumps around the mouth persist for more than 2 weeks and do not respond to gentle home care',
    'The rash seems to be spreading or getting worse, especially if you have been using steroid cream',
    'Bumps are present around the mouth, nose, and eyes in a distinct pattern',
  ],
  whenToActNow: [
    'The rash becomes blistered, weepy, or crusted with honey-colored scabs suggesting a bacterial infection like impetigo',
    'Your baby develops mouth sores, fever, or refuses to eat along with the facial rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Perioral Dermatitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000864.htm',
    },
  ],
};
