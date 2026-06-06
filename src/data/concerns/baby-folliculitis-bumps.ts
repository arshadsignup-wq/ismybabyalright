import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-folliculitis-bumps',
  title: 'Hair Follicle Inflammation (Folliculitis) in Baby',
  category: 'skin',
  searchTerms: [
    'baby folliculitis',
    'baby hair follicle bumps',
    'baby pimples around hair',
    'infant folliculitis',
    'baby red bumps with hair center',
    'baby inflamed hair follicles',
    'toddler folliculitis',
    'baby small pimple like bumps',
    'baby folliculitis treatment',
    'baby scalp folliculitis',
  ],
  quickAnswer:
    'Folliculitis is inflammation of hair follicles that causes small red bumps or pus-filled pimples, each centered around a hair. In babies, it can be caused by friction, sweat, bacterial infection, or yeast. Mild folliculitis typically resolves with gentle cleansing and keeping the area clean and dry. If it persists or worsens, see your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Folliculitis in newborns is uncommon. Neonatal pustular conditions can look similar but may have different causes. If a newborn develops clusters of pus-filled bumps, have them evaluated to distinguish from more serious neonatal skin infections.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Mild folliculitis may develop in areas of friction from clothing or in moist skin folds. Keeping the skin clean and dry is usually sufficient treatment. Avoid using heavy lotions that can block hair follicles on the affected area.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active and sweat more, folliculitis on the scalp, back, and buttocks can occur. Hot tub folliculitis from contaminated water is also possible at any age. If bumps are widespread or your baby has been in a hot tub or pool, mention this to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop folliculitis from sweating during active play, wearing tight clothing, or from friction. A warm compress applied several times daily can help mild cases drain naturally. If folliculitis is recurrent, your pediatrician may recommend a dilute bleach wash or antibacterial cleanser.',
    },
  ],
  whenNormal: [
    'A few scattered small red bumps that resolve with gentle cleansing within a few days',
    'Mild folliculitis in areas of friction that clears with keeping the area dry',
  ],
  whenToMention: [
    'Folliculitis is spreading, recurrent, or not improving with gentle care',
    'Bumps are becoming larger, more painful, or developing into boils',
    'Widespread folliculitis after swimming or hot tub use',
  ],
  whenToActNow: [
    'A folliculitis bump progresses to a large, painful abscess',
    'Widespread pustular bumps with fever in a young infant',
    'Red streaks spreading from a folliculitis site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Folliculitis: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/folliculitis',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Folliculitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK547754/',
    },
  ],
  relatedConcernSlugs: ['baby-skin-abscess-boil', 'baby-raised-bumps-on-skin', 'baby-acne'],
};
