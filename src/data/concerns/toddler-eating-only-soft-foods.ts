import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-only-soft-foods',
  title: 'My Toddler Only Eats Soft Foods',
  category: 'feeding',
  searchTerms: [
    'toddler only eats soft food',
    'toddler refuses hard food',
    'toddler won\'t chew',
    'toddler soft food preference',
    'toddler won\'t eat anything chewy',
    'toddler can\'t chew food properly',
    'toddler still eating baby food',
    'toddler mashed food only',
    'toddler texture avoidance',
    'toddler puree only diet',
  ],
  quickAnswer:
    'A preference for soft foods can be related to delayed chewing skills, oral motor development, sensory preferences, or simply comfort with familiar textures. While some preference is normal, a toddler who cannot manage any firmer textures may benefit from an oral motor or feeding evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'All foods at this stage should be smooth purees. A soft food preference is entirely appropriate.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies are transitioning from purees to mashed and soft foods. Some babies take longer to accept firmer textures. Continue progressing textures gradually.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, babies should be managing some soft table foods and beginning to practice chewing. If your baby still only accepts very soft or pureed foods, continue offering soft finger foods that are easy to gum like banana, avocado, and steamed vegetables.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler still only eats very soft foods and avoids anything requiring chewing, they may have underdeveloped chewing skills or oral motor concerns. Try offering slightly firmer versions of liked foods. If they consistently avoid all chewy textures, mention it to your pediatrician as a feeding or occupational therapy evaluation may be helpful.',
    },
  ],
  whenNormal: [
    'Toddler prefers softer foods but can chew when motivated',
    'Toddler is gradually accepting slightly firmer textures over time',
    'Toddler eats soft proteins like eggs and fish even if they avoid tough meats',
  ],
  whenToMention: [
    'Toddler over 15 months cannot chew any foods and relies entirely on purees or very soft textures',
    'Toddler gags or vomits on any food that is not very soft',
    'Toddler avoids all meats and foods requiring chewing',
  ],
  whenToActNow: [
    'Toddler is not gaining weight because their limited texture acceptance restricts intake',
    'Toddler appears to have difficulty moving food in their mouth or pain when attempting to chew',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-eat-lumpy-food', 'sensory-food-aversion', 'toddler-eating-only-crunchy-foods'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Motor Skills and Feeding Development. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Chewing Development and Texture Acceptance in Young Children. Journal of Texture Studies, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
