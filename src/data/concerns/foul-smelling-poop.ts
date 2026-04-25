import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'foul-smelling-poop',
  title: 'Baby Poop Smells Really Bad',
  category: 'digestive',
  searchTerms: [
    'baby poop smells bad',
    'baby poop smells terrible',
    'foul smelling baby poop',
    'baby stool smells awful',
    'why does my baby\'s poop smell so bad',
    'baby poop smells like rotten eggs',
    'stinky baby poop',
    'baby poop smell changed',
    'formula fed baby smelly poop',
    'baby poop smells worse after starting solids',
  ],
  quickAnswer:
    'Baby poop smell changes significantly based on what they eat. Breastfed baby poop usually has a mild, slightly sweet smell, while formula-fed baby poop tends to smell stronger. Once your baby starts solid foods, poop will naturally start to smell more like adult stool. A sudden change to an unusually foul smell, especially with other symptoms, is worth mentioning to your doctor.',
  byAge: [
    {
      ageRange: '0-6 months (breastfed)',
      context:
        'Breastfed baby poop typically has a mild, yeasty, or slightly sweet smell that most parents find inoffensive. A sudden shift to very foul-smelling stools in a breastfed baby can sometimes indicate a food sensitivity (often to dairy or soy in the mother\'s diet) or a mild infection. However, some variation in smell is completely normal.',
    },
    {
      ageRange: '0-6 months (formula-fed)',
      context:
        'Formula-fed babies generally produce poop that smells stronger than breastfed babies. This is normal and simply reflects how formula is digested differently from breast milk. Switching formula brands or types can change the smell. Hydrolyzed or amino acid-based formulas in particular can produce stronger-smelling stools.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solid foods is the biggest factor in poop smell changes. Meat, eggs, and certain vegetables like broccoli and cauliflower can make stools smell noticeably stronger. This is completely normal and expected as your baby\'s gut adjusts to processing a wider variety of foods.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By this age, your toddler\'s poop will smell much more like adult stool. Very foul-smelling, greasy, or pale stools that float could rarely indicate malabsorption issues like celiac disease or fat malabsorption. If the smell is consistently extreme and accompanied by large, bulky stools, discuss this with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby\'s poop smells stronger after switching from breast milk to formula or vice versa',
    'Poop smells change after starting solid foods, especially meats and vegetables',
    'Your formula-fed baby has stronger-smelling stools than a breastfed baby you know',
    'The smell varies from day to day depending on what your baby ate',
    'Your baby recently took antibiotics and their stool smells different for a few days',
  ],
  whenToMention: [
    'Your baby\'s stool has an extremely foul, rotten egg-like smell that is new and persistent',
    'Foul-smelling stools are accompanied by diarrhea, mucus, or increased gas',
    'Your baby produces consistently large, greasy, foul-smelling stools that float',
  ],
  whenToActNow: [
    'Extremely foul-smelling watery diarrhea with signs of dehydration, fever, or blood in stool',
    'Your baby has foul-smelling stools along with failure to gain weight or weight loss',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Celiac Disease in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease',
    },
  ],
};
