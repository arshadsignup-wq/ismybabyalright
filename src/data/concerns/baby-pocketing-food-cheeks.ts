import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-pocketing-food-cheeks',
  title: 'My Baby Stores Food in Their Cheeks',
  category: 'feeding',
  searchTerms: [
    'baby pocketing food in cheeks',
    'baby storing food in mouth',
    'baby not swallowing food cheeks',
    'baby hoarding food in mouth',
    'baby chipmunk cheeks food',
    'toddler holding food in cheeks',
    'baby food stuck in cheeks',
    'baby won\'t swallow food keeps in mouth',
    'baby packing cheeks with food',
    'baby pouching food',
  ],
  quickAnswer:
    'Pocketing food in the cheeks is relatively common and can be caused by reduced oral awareness, difficulty with the tongue movements needed to move food to the back of the mouth for swallowing, or sensory sensitivities. While occasional pocketing is normal as babies learn to eat, persistent pocketing should be discussed with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable as babies are not eating solids at this age.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When first starting purees, some babies may let food sit in their mouth before figuring out how to swallow. This is normal as they learn the coordination of moving food from front to back. Thin, smooth purees are easiest to manage.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As textures are introduced, some babies may store small pieces of food in their cheeks rather than chewing and swallowing. They are learning to use their tongue to move food laterally. Offer foods that dissolve easily and watch to make sure baby clears their cheeks before offering more food.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If pocketing continues frequently, it may indicate your baby needs more practice with lateral tongue movements. Try offering foods on alternating sides of the mouth to encourage tongue movement. Check baby\'s mouth after meals to make sure no food remains stored in the cheeks, as this can be a choking risk.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Persistent food pocketing in toddlers can be related to sensory processing differences, oral motor delays, or reduced oral awareness. If your toddler frequently stores food in their cheeks for extended periods, a feeding evaluation can help identify the cause and provide targeted strategies.',
    },
  ],
  whenNormal: [
    'Baby occasionally holds food in their cheeks while learning to manage new textures',
    'Baby swallows the pocketed food within a minute or two',
    'Pocketing happens mainly with new or challenging textures',
  ],
  whenToMention: [
    'Baby regularly pockets food for long periods and seems unaware it is there',
    'You frequently find food stored in baby\'s cheeks after meals are over',
    'Baby pockets food with most textures, not just challenging ones',
  ],
  whenToActNow: [
    'Baby falls asleep with food stored in their cheeks, creating a choking risk',
    'Baby has choked on food that was pocketed and then dislodged unexpectedly',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-holding-food-in-mouth', 'baby-swallowing-food-whole', 'sensory-food-aversion'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Motor Development and Feeding Skills. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Pocketing Food in Children: Causes and Interventions. Journal of Pediatric Gastroenterology and Nutrition, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
