import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'plant-based-diet-baby-safety',
  title: 'Plant-Based Diet Safety for Babies',
  category: 'feeding',
  searchTerms: [
    'vegan baby diet safe',
    'vegetarian baby nutrition',
    'plant based diet infant',
    'vegan toddler health risks',
    'vitamin B12 deficiency vegan baby',
    'vegan baby growth concerns',
    'plant based milk for baby',
    'vegetarian baby getting enough nutrients',
  ],
  quickAnswer:
    'A well-planned vegetarian or vegan diet can support healthy growth in babies and toddlers, but it requires careful attention to key nutrients that are more challenging to obtain from plant foods alone. These include vitamin B12, iron, zinc, calcium, vitamin D, omega-3 fatty acids (DHA), and adequate calories and protein. The AAP and the Academy of Nutrition and Dietetics both state that appropriately planned plant-based diets are healthy for all stages of life, including infancy, but supplementation and regular monitoring are essential.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breast milk from a well-nourished vegan or vegetarian mother provides complete nutrition for infants. However, vegan mothers must take a B12 supplement (at least 150 mcg/day or a weekly dose of 2500 mcg), as breast milk B12 levels depend entirely on maternal intake and stores. B12 deficiency in infants can cause irreversible neurological damage. Soy-based infant formulas are a safe alternative if formula-feeding is needed. Standard infant formulas, even non-plant-based ones, are considered acceptable by most vegetarian families.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue breastfeeding with maternal B12 supplementation or use a suitable infant formula. Begin planning for complementary feeding at 6 months by identifying plant-based iron, zinc, and protein sources. All breastfed infants should receive 400 IU of vitamin D daily. Vegan infants may also need a DHA supplement derived from algal oil if the mother is not supplementing with DHA.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When introducing solids, prioritize nutrient-dense plant foods: iron-fortified cereals, pureed legumes (lentils, chickpeas, beans), tofu, nut butters (spread thinly), and a variety of fruits and vegetables. Plant-based iron (non-heme iron) is less well absorbed than heme iron from meat, so pair iron-rich foods with vitamin C sources to enhance absorption. Zinc-rich foods include legumes, seeds, and whole grains. If the infant is vegan, a B12 supplement should be started directly. Your pediatrician should monitor growth and consider blood work to check iron, B12, and zinc levels.',
    },
    {
      ageRange: '12 months+',
      context:
        'Vegan toddlers should receive supplements for vitamin B12 (essential), vitamin D, and potentially DHA, iron, and zinc depending on dietary intake. Do not use rice milk, almond milk, or other unfortified plant milks as a primary beverage, as they are too low in calories, protein, and fat. If not breastfeeding, use a calcium- and vitamin D-fortified soy milk, which is the closest plant-based equivalent to cow milk in terms of protein content. Regular well-child visits with growth monitoring and periodic lab work are strongly recommended.',
    },
  ],
  whenNormal: [
    'Your baby is growing along their growth curve on a well-planned plant-based diet with appropriate supplementation',
    'Your vegan or vegetarian baby is meeting developmental milestones and has good energy levels',
    'You are working with a pediatrician or registered dietitian to ensure nutritional adequacy of a plant-based diet',
    'Your breastfed baby\'s mother takes B12, vitamin D, and DHA supplements and the baby receives vitamin D drops',
  ],
  whenToMention: [
    'Your plant-based baby or toddler is not growing well or has fallen off their growth curve',
    'Your vegan baby or toddler shows signs of fatigue, irritability, poor appetite, or developmental delays',
    'You are unsure about which supplements your plant-based baby needs and at what doses',
  ],
  whenToActNow: [
    'Your vegan baby shows neurological symptoms such as poor muscle tone, lethargy, developmental regression, or seizures, which may indicate severe B12 deficiency',
    'Your baby or toddler on a restrictive diet shows extreme pallor, rapid breathing, or weakness suggesting severe anemia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vegetarian Diets for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/teen/nutrition/Pages/Vegetarian-Diets-for-Teens.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Vitamin B12 Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Complementary Feeding: Family Foods for Breastfed Children.',
      url: 'https://www.who.int/publications/i/item/9241590076',
    },
  ],
};
