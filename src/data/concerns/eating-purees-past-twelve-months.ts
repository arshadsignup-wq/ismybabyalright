import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eating-purees-past-twelve-months',
  title: 'Still on Purees Past 12 Months',
  category: 'feeding',
  searchTerms: [
    'toddler still eating purees',
    'baby won\'t eat solid food only purees',
    '12 month old only eats purees',
    'toddler refuses lumpy food',
    'baby won\'t progress past purees',
    'toddler gags on textured food',
    'how to transition from purees to solids',
    'stuck on baby food pouches',
    'toddler only eats smooth food',
  ],
  quickAnswer:
    'While most babies begin eating textured and soft table foods between 8 and 10 months, some toddlers continue to prefer purees past their first birthday. A prolonged preference for purees can sometimes reflect oral motor delays, sensory sensitivities, or simply a lack of exposure to varied textures. Gradually introducing thicker textures and soft finger foods is important for developing chewing skills.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Between six and eight months, babies typically progress from smooth purees to mashed foods and then to soft finger foods. Research suggests that introducing lumpy textures by around nine to ten months is important, as babies who are not exposed to varied textures during this window may be more resistant later. If your baby gags on any texture beyond smooth purees, continue offering them gently without pressure.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A toddler who is still primarily eating purees at this age may benefit from a more structured approach to texture progression. Try offering soft, easily dissolvable foods such as puffs, soft-cooked vegetables, ripe banana, or well-cooked pasta alongside familiar purees. Avoid replacing meals entirely with pouches, as squeezing food directly into the mouth bypasses important oral motor practice. If there is no progress after a few weeks of consistent effort, consider a feeding evaluation.',
    },
    {
      ageRange: '24-36 months',
      context:
        'If your child is still heavily reliant on purees at this age, it is important to discuss this with your pediatrician. Persistent difficulty with textures beyond age two can be associated with oral motor delays or sensory processing differences that may benefit from occupational or speech therapy. Early intervention can make a significant difference in expanding your child\'s diet.',
    },
  ],
  whenNormal: [
    'Your baby prefers purees but will tolerate some mashed or soft finger foods, even in small amounts',
    'Your baby gags on new textures initially but gradually improves with repeated exposure',
    'Your toddler eats some purees and some table foods, preferring purees when tired or unwell',
  ],
  whenToMention: [
    'Your toddler over 12 months refuses all food that is not completely smooth',
    'Your child gags or vomits on any food with lumps or texture, even after consistent exposure',
    'Your toddler relies almost entirely on pouches and will not eat from a spoon or pick up food',
    'Your child\'s diet is very limited in variety and you are concerned about nutritional adequacy',
  ],
  whenToActNow: [
    'Your child is losing weight or falling off their growth curve',
    'Your child becomes extremely distressed or panicked around any textured food, suggesting significant sensory or feeding difficulties',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Coulthard H, Harris G, Emmett P. Delayed Introduction of Lumpy Foods to Children During the Complementary Feeding Period Affects Child\'s Food Acceptance and Feeding at 7 Years of Age. Maternal & Child Nutrition, 2009.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19220672/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
  ],
};
