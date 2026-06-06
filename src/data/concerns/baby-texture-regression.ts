import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-texture-regression',
  title: 'My Baby Is Going Backwards with Food Textures',
  category: 'feeding',
  searchTerms: [
    'baby texture regression',
    'baby went backwards with textures',
    'baby used to eat lumps now won\'t',
    'baby refusing textures again',
    'baby regressing with solids',
    'baby won\'t eat textures anymore',
    'baby went back to purees',
    'baby stopped eating chunky food',
    'baby texture regression after illness',
    'baby food texture setback',
  ],
  quickAnswer:
    'It is not uncommon for babies to temporarily regress with food textures, especially after illness, teething, or during developmental leaps. This is usually temporary and resolves with patience and continued gentle exposure to textures they previously accepted.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This concern does not apply to babies who are not yet eating solids.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies just starting solids may seem to accept textures one day and refuse them the next. This is part of normal learning and not true regression. Consistency and patience are key at this early stage.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Temporary texture regression can happen during teething, illness, or growth spurts. If your baby was eating lumpy foods and now refuses them, continue offering previously accepted textures alongside smoother options. Avoid going back entirely to smooth purees, as this can prolong the regression.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Regression at this age is often linked to teething pain, ear infections, or throat discomfort. After illness, babies may temporarily prefer softer foods because their throat is sore. Gradually reintroduce textures once they are feeling better. If regression lasts more than two to three weeks after recovery, mention it to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may regress with textures during periods of emotional stress, transitions, or developmental leaps. This is usually temporary. Continue offering a variety of textures without pressure. If your toddler has been refusing textures for more than a month, or if the regression is severe, a feeding evaluation may be helpful.',
    },
  ],
  whenNormal: [
    'Baby temporarily prefers softer textures during teething or illness',
    'Baby goes back and forth between accepting and refusing certain textures',
    'Regression lasts only a few days to a couple of weeks',
  ],
  whenToMention: [
    'Texture regression lasts more than three weeks with no improvement',
    'Baby seems fearful or distressed when presented with textures they used to eat',
    'Baby is losing weight or not growing well due to limited texture acceptance',
  ],
  whenToActNow: [
    'Baby has sudden difficulty swallowing that was not present before',
    'Baby is choking on foods they previously handled well, or drooling excessively and unable to manage saliva',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-eat-lumpy-food', 'baby-gagging-on-textures', 'sensory-food-aversion'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition Tips: Your 1-Year-Old. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Factors Influencing Acceptance of Complementary Foods in Infants. Appetite, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
