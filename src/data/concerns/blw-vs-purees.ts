import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'blw-vs-purees',
  title: 'Baby-Led Weaning vs. Purees',
  category: 'feeding',
  searchTerms: [
    'baby led weaning vs purees',
    'BLW or purees which is better',
    'should I do baby led weaning',
    'is baby led weaning safe',
    'starting solids purees or finger food',
    'baby led weaning choking risk',
    'combination feeding baby led weaning and purees',
    'when to start BLW',
  ],
  quickAnswer:
    'Both baby-led weaning and traditional purees are safe and effective ways to introduce solids. Research shows no significant difference in nutritional outcomes or choking risk when either approach is done correctly. Many families find success with a combination approach, offering purees alongside soft finger foods.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this young are not ready for any solid food. Exclusive breastmilk or formula is recommended for the first four to six months. This is a good time to start learning about different feeding approaches so you feel prepared when the time comes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies show signs of readiness for solids between four and six months: sitting with minimal support, good head control, loss of the tongue-thrust reflex, and showing interest in food. Whether you choose purees, baby-led weaning, or a combination, wait until your baby shows these readiness signs. The AAP recommends introducing solids around six months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the prime window for introducing solids. With purees, you progress from smooth to mashed to chunky textures over several weeks. With baby-led weaning, you offer soft, appropriately sized finger foods from the start. Both approaches can include early allergen introduction. Gagging is normal with either method as your baby learns to manage food in their mouth. Never leave your baby unattended while eating regardless of the approach.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 months, most babies should be eating a variety of textures including soft table foods, regardless of which approach you started with. If your baby was primarily puree-fed, this is an important time to progress to more textured foods. Babies who have not been exposed to varied textures by around 10 months may show more resistance to lumpy or chunky foods.',
    },
  ],
  whenNormal: [
    'Your baby gags occasionally when trying new textures with either approach, which is a normal protective reflex',
    'Your baby shows a preference for one approach over the other and eats different amounts day to day',
    'Your baby makes a mess and seems to play with food more than eating it in the early weeks of solids',
    'Your baby eats very small amounts of solid food at first, since breastmilk or formula remains the primary nutrition until around 12 months',
  ],
  whenToMention: [
    'Your baby consistently refuses all solid foods after several weeks of trying, regardless of the approach',
    'Your baby gags or vomits on every texture, including very smooth purees, with no improvement over time',
    'Your baby seems unable to move food from the front to the back of the mouth by seven to eight months',
  ],
  whenToActNow: [
    'Your baby has a true choking episode where they cannot breathe, cry, or cough (call 911 immediately)',
    'Your baby develops hives, facial swelling, or difficulty breathing after trying a new food, which may indicate a severe allergic reaction',
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
        'Fangupo LJ, et al. A Baby-Led Approach to Eating Solids and Risk of Choking. Pediatrics, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27647717/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bite-Sized Milestones: Signs of Solid Food Readiness. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bite-Size-Milestones-Signs-of-Solid-Food-Readiness.aspx',
    },
  ],
};
