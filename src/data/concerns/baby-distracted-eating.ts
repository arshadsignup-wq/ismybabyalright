import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-distracted-eating',
  title: 'My Baby Is Too Distracted to Eat',
  category: 'feeding',
  searchTerms: ['baby distracted eating', 'baby won\'t focus on food', 'baby distracted at meals', 'baby looks around while eating', 'baby won\'t sit still to eat', 'distracted nursing', 'baby too busy to eat', 'toddler distracted at meals', 'baby eating while looking around', 'baby not paying attention eating'],
  quickAnswer: 'Distracted eating is extremely common, especially between 4-9 months when babies become more aware of their surroundings. Reducing visual stimulation during meals, eating in a quiet space, and keeping mealtimes to 15-20 minutes can help. For breastfed babies, nursing in a dimmer, quieter room may improve focus. This is a normal developmental phase that usually improves.',
  byAge: [
    { ageRange: '0-3 months', context: 'Young babies are generally focused during feeds. If baby seems distracted, they may simply not be hungry. Watch for hunger cues before offering a feed.' },
    { ageRange: '4-6 months', context: 'This is peak distraction age. Babies discover the world around them and everything is more interesting than eating. Nurse or bottle feed in a quiet, dimly lit room. For solids, minimize toys and distractions at the table.' },
    { ageRange: '6-9 months', context: 'Distracted eating continues as baby becomes increasingly mobile and curious. Keep mealtimes to 15-20 minutes. Remove toys from the eating area. Make eye contact and talk calmly during meals. If baby is too distracted, end the meal and try again later.' },
    { ageRange: '9-12 months', context: 'Babies may be so eager to explore that eating takes a backseat. Ensure baby is hungry at mealtimes by not offering snacks too close to meals. Turn off TV and screens during meals.' },
    { ageRange: '12-24 months', context: 'Toddlers are naturally active and may resist sitting for meals. Keep mealtimes short (15-20 minutes), offer food without screens or toys, and do not chase your toddler with food. If they leave the table, the meal is over.' },
  ],
  whenNormal: ['Baby looks around during feeding but eventually eats an adequate amount', 'Baby eats better in some environments than others', 'Distracted eating is worse during developmental milestones'],
  whenToMention: ['Baby is so distracted they are not eating enough and growth is affected', 'Baby refuses to sit for any meals and is losing weight', 'Distraction at meals is accompanied by difficulty focusing in other areas of life'],
  whenToActNow: ['Baby is not eating enough to maintain weight due to extreme distraction', 'Baby has signs of dehydration from not eating or drinking enough'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['tv-during-meals-effects', 'baby-not-interested-in-food', 'toddler-meal-skipping-frequent'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Mealtime Tips for Infants. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Mealtime for Infants and Toddlers. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/index.html' },
  ],
};
