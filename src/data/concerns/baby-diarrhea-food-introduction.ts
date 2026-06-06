import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diarrhea-food-introduction',
  title: 'Diarrhea When Starting New Foods',
  category: 'digestive',
  searchTerms: [
    'baby diarrhea starting solids',
    'baby diarrhea new food',
    'baby poop change new foods',
    'baby loose stool solids',
    'baby diarrhea food introduction',
    'baby stool change new food',
    'baby food intolerance diarrhea',
    'baby reaction to new food diarrhea',
    'baby solids causing diarrhea',
    'baby food sensitivity poop',
  ],
  quickAnswer:
    'Some change in stool consistency when introducing new foods is completely normal as your baby\'s digestive system adjusts. True diarrhea (watery, much more frequent than usual) after a specific food may indicate a food intolerance or sensitivity. Introduce one new food at a time and wait 3 to 5 days to identify any reactions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Solids should not be introduced before about 4 to 6 months. If a young infant develops diarrhea, it is not related to food introduction and should be evaluated for other causes like infection or milk protein allergy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'When starting first foods around 4 to 6 months, stool changes are expected. Stools may become more formed, change color based on the food eaten, or temporarily become looser. This is normal digestion, not diarrhea. True watery diarrhea after a new food should prompt you to stop that food and try again later.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As the variety of foods increases, occasional digestive upsets are normal. High-fiber fruits like prunes and pears can cause looser stools. Juice (especially apple and pear) commonly causes diarrhea and is not recommended for babies. If a specific food consistently causes diarrhea, discuss it with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers eating a wide diet may have variable stools. If diarrhea occurs with a specific food every time it is offered, a food intolerance (lactose, fructose, or specific protein) may be present. An elimination and reintroduction approach under your pediatrician\'s guidance can help identify the trigger.',
    },
  ],
  whenNormal: [
    'Stool becoming softer, changing color, or slightly increasing in frequency when starting solids',
    'Visible pieces of undigested food in the stool, which is normal',
    'Temporary looseness after high-fiber foods like prunes that resolves quickly',
  ],
  whenToMention: [
    'A specific food consistently causes diarrhea every time it is offered',
    'You suspect a food intolerance and want guidance on which foods to eliminate',
    'Diarrhea is accompanied by a rash, which could indicate a food allergy',
  ],
  whenToActNow: [
    'Severe diarrhea with vomiting, blood in stool, or significant rash after eating a food, suggesting an allergic reaction',
    'Signs of dehydration from food-related diarrhea',
    'Persistent diarrhea with poor weight gain after starting solids',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Food Allergies and Intolerances.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/food-allergies-intolerances',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
  ],
  relatedConcernSlugs: ['diarrhea', 'baby-food-intolerance-vs-allergy', 'baby-stool-texture-changes-solids'],
};
