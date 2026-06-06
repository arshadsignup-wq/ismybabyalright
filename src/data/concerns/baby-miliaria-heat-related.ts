import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-miliaria-heat-related',
  title: 'Heat-Related Skin Bumps (Miliaria) in Baby',
  category: 'skin',
  searchTerms: [
    'baby miliaria',
    'baby heat bumps',
    'baby sweat rash bumps',
    'baby prickly heat bumps',
    'miliaria crystallina baby',
    'miliaria rubra baby',
    'baby tiny clear bumps heat',
    'baby heat rash with bumps',
    'baby blocked sweat glands',
    'baby overheated skin bumps',
  ],
  quickAnswer:
    'Miliaria (heat rash) occurs when sweat glands become blocked, causing tiny bumps on the skin. Miliaria crystallina causes tiny clear blisters, while miliaria rubra (prickly heat) causes red, itchy bumps. Both are harmless and resolve quickly once the baby is cooled down. The best treatment is prevention by avoiding overheating.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially prone to miliaria because their sweat glands are immature. Overdressing, swaddling in warm environments, or high room temperatures commonly trigger it. Tiny clear vesicles (crystallina) or red bumps (rubra) appear on the head, neck, and trunk. Cool the baby by removing layers and using a fan.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Heat rash can occur in skin folds, on the chest, and wherever clothing traps heat and moisture. Dress your baby in one more layer than you are wearing, not more. In warm weather, loose-fitting, lightweight clothing is best. Air conditioning or fans help prevent miliaria.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Active babies may sweat more, especially on their back when lying in a car seat or carried in a carrier. Heat rash on the back and shoulders is common. Ensuring good airflow and taking breaks from car seats and carriers in warm weather helps prevent it.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers running and playing in warm weather may develop miliaria on the trunk, neck, and skin folds. The bumps usually resolve within hours of cooling down. If heat-related bumps become red, tender, or develop pus, a secondary bacterial infection may have developed and needs medical attention.',
    },
  ],
  whenNormal: [
    'Tiny clear or red bumps that appear when the baby is warm and resolve with cooling',
    'Heat rash in skin folds or areas covered by clothing during warm weather',
    'Bumps that are not painful and clear quickly',
  ],
  whenToMention: [
    'Heat rash is recurrent and you need guidance on prevention',
    'Bumps persist after cooling and do not resolve within 24 to 48 hours',
    'You are unsure whether the bumps are heat rash or another condition',
  ],
  whenToActNow: [
    'Heat bumps become large, red, painful, and pus-filled suggesting an infection',
    'Signs of heat exhaustion or heat stroke including hot dry skin, lethargy, or vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heat Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Heat-Rash.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Heat Rash (Miliaria).',
      url: 'https://www.aad.org/public/diseases/a-z/heat-rash',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Miliaria. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537176/',
    },
  ],
  relatedConcernSlugs: ['heat-rash', 'heat-rash-prickly-heat', 'baby-rash-only-at-night'],
};
