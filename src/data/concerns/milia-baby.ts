import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'milia-baby',
  title: 'Tiny White Bumps on My Newborn\'s Face',
  category: 'skin',
  searchTerms: [
    'milia baby',
    'white bumps on newborn face',
    'baby white dots on nose',
    'newborn face white bumps',
    'milia newborn',
    'baby whiteheads',
    'tiny white dots baby skin',
    'when does milia go away',
    'milia vs baby acne',
    'white bumps on baby cheeks',
  ],
  quickAnswer:
    'Milia are tiny, white, pearl-like bumps that appear on a newborn\'s nose, chin, or cheeks. They are caused by trapped skin cells in tiny pockets on the skin surface and are completely harmless. Milia require no treatment and disappear on their own within a few weeks to months.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Milia are very common in newborns and are usually present at birth or appear in the first few days of life. They look like tiny white or yellowish pinpoint bumps, most often clustered on the nose, chin, forehead, or cheeks. Nearly half of all newborns have milia. They do not hurt, itch, or bother your baby.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'Milia may become more noticeable during this period as your baby\'s skin adjusts to life outside the womb. The bumps remain small and do not enlarge or spread. Never try to squeeze, scrub, or pop milia, as this can irritate the skin and lead to infection. Simply wash your baby\'s face gently with water and pat dry.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'Most milia begin to clear during this time as the trapped skin cells naturally work their way to the surface and shed. The bumps gradually disappear without leaving any marks or scarring. If small white bumps persist beyond 3 months, they are still harmless but can be mentioned at your baby\'s next well visit.',
    },
    {
      ageRange: '3+ months',
      context:
        'By this age, most newborn milia have completely resolved. If white bumps appear for the first time at this age, they are less likely to be milia and may represent baby acne or another skin condition. Your pediatrician can help distinguish between different types of bumps and recommend care if needed.',
    },
  ],
  whenNormal: [
    'Tiny white or yellowish pinpoint bumps on the nose, chin, or cheeks present at birth or appearing in the first days of life',
    'The bumps are firm, do not have red surrounding skin, and do not seem to bother your baby',
    'Bumps remain small and do not enlarge, multiply rapidly, or spread to other body areas',
    'Your baby is feeding well, acting normally, and has no fever or signs of illness',
    'Gradual disappearance of the bumps over several weeks without any treatment',
  ],
  whenToMention: [
    'The bumps persist beyond 3-4 months without any signs of fading',
    'The bumps seem to be growing larger, turning red, or forming pustules',
    'You are unsure if the bumps are milia or another skin condition like baby acne or infection',
  ],
  whenToActNow: [
    'The bumps become infected with swelling, redness, warmth, or pus drainage',
    'Your baby develops widespread skin blistering, peeling, or a fever along with the bumps',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin: Common Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Milia: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/milia-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Milia. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001367.htm',
    },
  ],
};
