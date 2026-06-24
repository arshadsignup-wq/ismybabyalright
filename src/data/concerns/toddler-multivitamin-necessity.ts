import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-multivitamin-necessity',
  title: 'Does My Toddler Need a Multivitamin?',
  category: 'feeding',
  searchTerms: [
    'toddler multivitamin necessary',
    'does my toddler need vitamins',
    'best multivitamin for toddler',
    'toddler vitamin D supplement',
    'toddler iron supplement',
    'picky eater toddler vitamins',
    'do toddlers need supplements',
    'toddler vitamin recommendation',
    'toddler not eating enough need vitamins',
    'toddler vitamin deficiency signs',
  ],
  quickAnswer:
    'Most toddlers who eat a reasonably varied diet do not need a daily multivitamin. However, the AAP recommends vitamin D supplementation (400 IU daily) for children who drink less than 32 ounces of vitamin D-fortified milk per day. Picky eaters, children on restricted diets (vegan, dairy-free, or multiple food allergies), and children with certain medical conditions may benefit from targeted supplementation. Talk to your pediatrician before starting any supplement.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As your baby transitions from breast milk or formula to whole milk and solid foods, some nutritional gaps can occur. Iron is a common concern, especially if your toddler is a picky eater or drinks excessive amounts of cow\'s milk (which is low in iron). Vitamin D supplementation is recommended if your toddler drinks less than about 32 ounces of fortified milk daily. Your pediatrician will typically check iron levels at the 12-month well-child visit and can advise on whether supplementation is needed.',
    },
    {
      ageRange: '18 months - 2 years',
      context:
        'This is often when picky eating intensifies, and parents worry about nutritional adequacy. Most toddlers, even picky ones, get sufficient nutrients if they eat from a variety of food groups over the course of a week (not necessarily every day). If your toddler eats very few foods or avoids entire food groups, a multivitamin with iron can serve as nutritional insurance. Choose a vitamin specifically formulated for toddlers and avoid giving adult vitamins, as the doses are too high.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Children on restricted diets (vegan, dairy-free, or with multiple food allergies) are at higher risk for deficiencies in vitamin B12, calcium, iron, zinc, and omega-3 fatty acids. A pediatric dietitian can assess your child\'s diet and recommend specific supplements rather than a one-size-fits-all multivitamin. Be cautious with gummy vitamins, which often lack iron and can be a choking hazard. Store all vitamins out of reach — iron-containing supplements can be toxic in overdose.',
    },
  ],
  whenNormal: [
    'Your toddler eats a reasonably varied diet including some fruits, vegetables, protein, grains, and dairy (or alternatives)',
    'Your toddler is growing well along their growth curve and has good energy',
    'Your toddler\'s pediatrician has not identified any nutritional concerns at well-child visits',
  ],
  whenToMention: [
    'Your toddler eats a very restricted diet (fewer than 20 foods) and you are concerned about nutritional adequacy',
    'Your toddler is on a vegan, dairy-free, or otherwise restricted diet and you need guidance on supplementation',
    'Your toddler appears pale, tired, or is not growing as expected, which could indicate a deficiency',
  ],
  whenToActNow: [
    'Your toddler has ingested too many vitamins or supplements — call Poison Control (1-800-222-1222) immediately, especially if the supplement contains iron',
    'Your toddler shows signs of severe nutritional deficiency: extreme fatigue, brittle hair and nails, frequent infections, or poor wound healing',
    'Your toddler is eating non-food items (pica), which can be a sign of iron or zinc deficiency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-picky-eater-strategies',
    'too-much-cow-milk-iron-absorption',
    'toddler-milk-consumption-how-much',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamin D: On the Double. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Where We Stand: Vitamins. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Where-We-Stand-Vitamins.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Dietary Supplements for Children. Office of Dietary Supplements.',
      url: 'https://ods.od.nih.gov/factsheets/MVMS-Consumer/',
    },
  ],
};
