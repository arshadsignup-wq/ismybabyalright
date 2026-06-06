import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-milia-persistent',
  title: 'Persistent Milia on Baby',
  category: 'skin',
  searchTerms: [
    'baby milia persistent',
    'baby milia won\'t go away',
    'baby white bumps face lasting',
    'milia baby still there',
    'baby milia months old',
    'infant persistent milia',
    'baby tiny white bumps long lasting',
    'when do milia go away baby',
    'baby face white dots persistent',
    'milia treatment baby',
  ],
  quickAnswer:
    'Milia are tiny white or yellow bumps caused by trapped keratin under the skin surface. They are very common in newborns and usually resolve on their own within weeks to a few months. Persistent milia beyond 3 months is less common but still generally harmless. Do not try to squeeze or pop milia, as this can cause irritation or infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Up to 40% of newborns develop milia, typically on the nose, chin, cheeks, and forehead. Milia on the palate (Epstein pearls) and gums (Bohn nodules) are also normal. These resolve spontaneously without treatment. Gentle cleansing with water is all that is needed for facial milia.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most milia resolve by this age. If they persist, they are still harmless and will clear on their own. Do not use exfoliating products, acne treatments, or abrasive scrubs on baby skin, as these can cause more harm. If milia are numerous or seem to be increasing, mention them at your next well visit.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Persistent milia beyond 6 months is uncommon. If present, they should be evaluated to ensure they are truly milia and not another type of skin bump like molluscum contagiosum or other conditions. Your pediatrician can assess them.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Milia in toddlers can develop at sites of skin injury or inflammation. If new milia-like bumps appear in a toddler, they may be molluscum contagiosum (slightly larger, pearly bumps with a dimpled center) or milia en plaque, which is rare and should be evaluated.',
    },
  ],
  whenNormal: [
    'Small white or yellow bumps on a newborn\'s nose and face in the first few months',
    'Milia that are stable, not red or inflamed, and slowly resolving on their own',
    'Epstein pearls on the palate that disappear within a few weeks',
  ],
  whenToMention: [
    'Milia persist beyond 3 to 4 months and you want reassurance',
    'Bumps are growing in size, changing character, or becoming numerous',
    'You are unsure whether the bumps are milia or something else',
  ],
  whenToActNow: [
    'Bumps become red, swollen, or seem infected',
    'A newborn develops widespread pustular bumps that could indicate a neonatal infection rather than milia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Milia.',
      url: 'https://www.aad.org/public/diseases/a-z/milia',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Milia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560481/',
    },
  ],
  relatedConcernSlugs: ['baby-acne', 'molluscum', 'baby-raised-bumps-on-skin'],
};
