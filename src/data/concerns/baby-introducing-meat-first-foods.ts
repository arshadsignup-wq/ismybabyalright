import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-meat-first-foods',
  title: 'Introducing Meat as a First Food for My Baby',
  category: 'feeding',
  searchTerms: [
    'introducing meat to baby',
    'baby first meat when',
    'meat puree for baby',
    'baby iron rich first foods',
    'chicken for baby first food',
    'beef puree baby 6 months',
    'baby led weaning meat',
    'is meat good first food for baby',
    'how to prepare meat for baby',
    'baby needs iron from meat',
  ],
  quickAnswer:
    'Meat is an excellent first food for babies starting around 6 months of age. The AAP recommends iron-rich foods like meat as one of the first complementary foods because babies\' iron stores from birth begin to deplete around 4-6 months. Pureed or finely minced chicken, beef, turkey, pork, and lamb are all appropriate options. Meat provides highly absorbable heme iron, zinc, protein, and B vitamins that are critical for growth and brain development.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before starting solids, breast milk and iron-fortified formula provide adequate iron for most babies. However, exclusively breastfed babies may need iron supplementation starting at 4 months since breast milk is low in iron. The AAP recommends 1 mg/kg/day of supplemental iron for exclusively breastfed infants beginning at 4 months until adequate iron-containing complementary foods are introduced. Premature infants may need iron supplementation earlier. Talk to your pediatrician about your baby\'s iron needs before starting solids.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Meat can be one of the first foods introduced. For spoon-feeding, puree or finely mince well-cooked meat with breast milk, formula, or broth until smooth. For baby-led weaning, offer large strips of slow-cooked, tender meat (like pulled chicken or shredded beef) that your baby can grab and chew on — even without teeth, their gums are strong enough to work the meat. Ground meat formed into thin patties or meatballs (flattened, not round, to reduce choking risk) also works well. Always cook meat to safe internal temperatures: 165 degrees F for poultry, 160 degrees F for ground meats.',
    },
    {
      ageRange: '9-36 months',
      context:
        'As your baby develops a pincer grasp and better chewing skills, offer small, tender pieces of well-cooked meat. Aim for 2 or more servings of iron-rich foods daily. If your family follows a vegetarian or vegan diet, discuss with your pediatrician to ensure adequate iron, zinc, and vitamin B12 through fortified foods, legumes, and possible supplementation. By 12 months, your toddler can eat most of the same meats your family eats, cut into small pieces. Avoid processed meats (hot dogs, deli meat, sausage) due to high sodium, nitrates, and choking risk — if served, cut lengthwise and then into small pieces.',
    },
  ],
  whenNormal: [
    'Your baby takes time to get used to the taste and texture of meat — this is normal and repeated exposure helps.',
    'Your baby initially spits out or gags on meat textures but gradually accepts them with practice.',
    'Your baby prefers certain meats over others — offering variety over time broadens acceptance.',
  ],
  whenToMention: [
    'Your baby refuses all meat consistently and you are concerned about iron intake.',
    'Your baby has constipation after starting meat-based foods and you want dietary guidance.',
    'You follow a vegetarian or vegan diet and need guidance on meeting your baby\'s iron and protein needs without meat.',
  ],
  whenToActNow: [
    'Your baby is choking on meat — follow infant choking first aid procedures and call 911 if the airway is not cleared.',
    'Your baby shows signs of iron deficiency anemia: extreme pallor, fatigue, poor feeding, rapid heart rate, or pica (eating non-food items) — seek medical evaluation.',
    'Your baby has symptoms of food poisoning from undercooked meat: severe vomiting, bloody diarrhea, high fever, or signs of dehydration — seek medical care immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-introducing-fish-seafood', 'baby-iron-drops-constipation', 'baby-choking-on-food'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Iron-Fortified Foods and Iron Needs of Infants',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamin-Iron-Supplements.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Infant and Toddler Nutrition: Foods and Drinks',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-6-to-24-months.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization — Complementary Feeding of Young Children',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
  ],
};
