import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-refusing-meat',
  title: "My Toddler Won't Eat Meat or Protein",
  category: 'feeding',
  searchTerms: [
    'toddler refusing meat',
    'toddler won\'t eat meat',
    'toddler refuses chicken',
    'toddler doesn\'t like protein',
    'toddler won\'t eat any meat',
    'toddler vegetarian by choice',
    'toddler spits out meat',
    'toddler meat texture aversion',
    'toddler protein sources without meat',
    'toddler iron without eating meat',
  ],
  quickAnswer:
    'Meat refusal is one of the most common food rejections in toddlers. Meat can be challenging to chew and has a texture many toddlers find difficult. There are many other protein sources including beans, lentils, eggs, cheese, yogurt, nut butters, and tofu. As long as your toddler gets protein from other sources and has adequate iron, meat refusal alone is not a nutritional crisis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When starting solids, pureed meats are actually an excellent early food due to their iron content. But many babies prefer other flavors first, which is fine.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Continue offering pureed or very finely minced meats. Some babies accept meat better when mixed with vegetables or fruit purees. Iron-fortified cereals can supplement iron needs if baby refuses meat.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Many babies begin to refuse meat at this stage because the texture is harder to manage than softer foods. Try offering meat in different forms: shredded, ground, meatballs, strips for sucking on, or mixed into sauces. Pair with familiar liked foods.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Meat refusal is very common in toddlers. Focus on alternative protein and iron sources. Ensure your toddler eats iron-rich foods like beans, fortified cereals, eggs, and tofu. Pair iron-rich foods with vitamin C sources to enhance absorption. If you are concerned about iron levels, your pediatrician can do a simple blood test.',
    },
  ],
  whenNormal: [
    'Toddler refuses meat but eats other protein sources like eggs, beans, or dairy',
    'Toddler dislikes the texture of meat but will eat meat when very finely ground in sauces',
    'Toddler is growing well and has good energy despite not eating meat',
  ],
  whenToMention: [
    'Toddler refuses all protein sources, not just meat',
    'Toddler shows signs of iron deficiency such as pallor, fatigue, or poor appetite',
    'Toddler\'s diet is extremely limited overall and meat refusal is part of a larger pattern',
  ],
  whenToActNow: [
    'Toddler has extreme pallor, eats ice or non-food items, or is extremely lethargic, which may indicate severe iron deficiency anemia',
    'Toddler is losing weight due to very restricted diet',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['iron-rich-foods-for-baby', 'toddler-iron-deficiency-risk', 'picky-eating'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Iron Needs of Babies and Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Iron-Needs-of-Babies-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Iron Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Iron Deficiency Anaemia: Assessment, Prevention and Control. 2001.',
      url: 'https://www.who.int/publications/m/item/iron-children-6to23--archived',
    },
  ],
};
