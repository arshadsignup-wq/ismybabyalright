import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-food-reheating-safety',
  title: 'Is Reheating Baby Food Safe?',
  category: 'feeding',
  searchTerms: [
    'reheating baby food safe',
    'microwave baby food',
    'warming up baby food',
    'baby food reheat how many times',
    'reheating homemade baby food',
    'baby food hot spots microwave',
    'heating baby food properly',
    'can you reheat baby puree',
    'warming leftover baby food',
    'baby food reheating rules',
  ],
  quickAnswer:
    'Reheating baby food is safe when done properly. Reheat food to at least 165 degrees Fahrenheit (74 degrees Celsius) to kill bacteria. If using a microwave, stir well and test the temperature before serving to avoid hot spots. Only reheat food once. Never reheat food that baby has already eaten from, as saliva introduces bacteria.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable as babies are not eating solid foods.',
    },
    {
      ageRange: '4-6 months',
      context: 'When warming cold purees, use a water bath or microwave in short intervals. Stir thoroughly and test on your wrist before serving. Baby food should be warm, not hot. Many babies also accept room temperature or cool food.',
    },
    {
      ageRange: '6-9 months',
      context: 'The same reheating principles apply. If microwaving, remove the lid, heat in 15-second intervals, and stir well between intervals. Always test temperature before serving. Discard any food that has been reheated and not eaten.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby eats more varied foods including meats and mixed dishes, ensure all reheated food reaches a safe internal temperature. Cut or mash reheated food as needed for baby\'s ability level.',
    },
    {
      ageRange: '12-24 months',
      context: 'Standard food reheating safety applies. Reheat leftovers once, heat thoroughly, and stir to distribute temperature evenly. Toddlers can eat food at various temperatures and many prefer room temperature food.',
    },
  ],
  whenNormal: [
    'You reheat baby food once and serve it warm',
    'You stir reheated food and test the temperature before serving',
    'Baby eats reheated food without any issues',
  ],
  whenToMention: [
    'Baby frequently refuses reheated food and you are struggling to provide enough variety',
    'You are unsure about proper reheating techniques for specific foods',
  ],
  whenToActNow: [
    'Baby has symptoms of food poisoning after eating reheated food',
    'Baby has burned their mouth on food that was too hot',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-storage-duration', 'baby-homemade-puree-safety', 'food-temperature-preferences'],
  sources: [
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Leftovers and Food Safety. 2023.',
      url: 'https://www.cdc.gov/foodsafety/communication/infants-and-toddlers.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Food Safety for Your Family. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Safety-for-Your-Family.aspx',
    },
  ],
};
