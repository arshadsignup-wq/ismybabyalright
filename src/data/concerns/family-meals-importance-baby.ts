import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'family-meals-importance-baby',
  title: 'Why Are Family Meals Important for My Baby?',
  category: 'feeding',
  searchTerms: ['family meals baby', 'eating together baby benefits', 'baby at dinner table', 'family dinner important', 'baby watching family eat', 'eating as a family', 'meal together benefits baby', 'family mealtime', 'shared meals toddler', 'family eating habits baby'],
  quickAnswer: 'Research consistently shows that eating together as a family improves children\'s eating habits, reduces picky eating, supports language development, and strengthens family bonds. Babies learn about food by watching others eat. Even before they eat solids, having baby at the table during family meals is beneficial. Start as early as possible to establish this positive habit.',
  byAge: [
    { ageRange: '0-3 months', context: 'Baby can sit in a bouncer or be held while the family eats. They benefit from the social interaction and begin learning about mealtime routines even before eating solids.' },
    { ageRange: '4-6 months', context: 'As solids are introduced, have baby join the family table in a high chair. Baby watching you eat models eating behavior and builds interest in food.' },
    { ageRange: '6-9 months', context: 'Family meals provide rich opportunities for baby to see, smell, and eventually taste the foods the family enjoys. Babies who eat with the family tend to accept a wider variety of foods.' },
    { ageRange: '9-12 months', context: 'Baby can eat modified versions of family food, making meal preparation simpler. The social environment of shared meals encourages eating and language development.' },
    { ageRange: '12-24 months', context: 'Toddlers who eat regular family meals are less likely to be picky eaters and have better nutrition overall. Even 3-4 family meals per week makes a difference. The conversation and social interaction are as important as the food itself.' },
  ],
  whenNormal: ['Your family eats together at least a few times per week', 'Baby watches the family eat with interest', 'Mealtimes are generally pleasant with some typical toddler challenges', 'You cannot eat together every meal due to scheduling and that is okay'],
  whenToMention: ['Mealtime is consistently stressful and you need strategies to make it more positive', 'Family schedules make shared meals very difficult and you want alternatives', 'You are concerned that your mealtime environment is negatively affecting your child\'s eating'],
  whenToActNow: ['Mealtimes have become a source of significant family conflict that affects everyone\'s well-being', 'You or your child have developed severe anxiety about mealtimes'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-schedule-rigidity', 'responsive-feeding-approach', 'tv-during-meals-effects'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Family Meals and Children\'s Health. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Mealtime-as-Family-Time.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Frequency of Family Meals and Diet Quality. Pediatrics, 2011.', url: 'https://pubmed.ncbi.nlm.nih.gov/21536618/' },
  ],
};
