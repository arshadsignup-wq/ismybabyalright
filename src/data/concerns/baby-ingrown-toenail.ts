import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ingrown-toenail',
  title: 'Baby Ingrown Toenail',
  category: 'skin',
  searchTerms: [
    'baby ingrown toenail',
    'infant ingrown toenail',
    'baby toe swollen red',
    'baby toenail growing into skin',
    'toddler ingrown toenail',
    'baby ingrown nail treatment',
    'newborn ingrown toenail',
    'baby toe nail curved',
    'baby big toe red and swollen',
    'how to treat baby ingrown nail',
  ],
  quickAnswer:
    'Ingrown toenails are fairly common in babies and toddlers, especially on the big toe. Baby toenails are soft and can easily curve into the surrounding skin. Most mild cases improve with warm soaks and gentle care. If the toe becomes very red, swollen, or shows signs of infection, your pediatrician can help with treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn toenails are very soft and often look ingrown even when they are not. The nail may appear to curve under at the edges, which is a normal shape for infant nails. True ingrown nails at this age are uncommon. If the skin around the nail looks a bit puffy but is not red or painful, it is likely just the normal appearance of newborn toes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As nails become slightly firmer, they may occasionally dig into the surrounding skin fold. Tight socks or snug footie pajamas can contribute by pressing the nail into the skin. Soak the foot in warm water for a few minutes, then gently push the skin away from the nail edge with a cotton-tipped applicator. Keep the area clean and dry.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes more active with crawling and pulling up, pressure on the toes can worsen an ingrown nail. Make sure shoes and socks are not too tight. Trim toenails straight across rather than curved to reduce the risk of ingrown nails. If redness or swelling develops, warm soaks twice daily can help.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers in shoes that are too small or too narrow are at higher risk for ingrown toenails. Check shoe fit regularly as toddler feet grow rapidly. Cut toenails straight across and not too short. If an ingrown nail becomes infected (red, swollen, draining), your pediatrician may prescribe an antibiotic or perform a simple in-office procedure.',
    },
  ],
  whenNormal: [
    'Toenails that look slightly curved at the edges but the skin is not red or painful',
    'Mild puffiness around the nail that improves with warm soaks',
    'Temporary redness after tight socks that resolves once pressure is removed',
  ],
  whenToMention: [
    'The toe is persistently red, swollen, or tender and home care does not help',
    'You see pus or discharge around the nail',
    'Your baby seems to be in pain when the toe is touched or when wearing shoes',
  ],
  whenToActNow: [
    'The toe is very swollen, hot, and red with spreading redness up the foot, suggesting a worsening infection',
    'Your baby has a fever along with an infected-looking ingrown toenail',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ingrown Toenail. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ingrown-Toenail.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing the Right Shoes for Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Choosing-the-Right-Shoes.aspx',
    },
  ],
};
