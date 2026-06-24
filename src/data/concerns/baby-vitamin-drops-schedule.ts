import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-vitamin-drops-schedule',
  title: 'Vitamin Drops for Babies: What, When, and How Much',
  category: 'feeding',
  searchTerms: [
    'baby vitamin drops',
    'vitamin D drops baby',
    'iron drops baby',
    'baby vitamin supplement',
    'when to give baby vitamins',
    'vitamin D breastfed baby',
    'baby multivitamin',
    'vitamin drops schedule baby',
    'how much vitamin D baby',
    'baby needs vitamins',
  ],
  quickAnswer:
    'The AAP recommends that all breastfed babies receive 400 IU of vitamin D daily starting within the first few days of life. Formula-fed babies who drink less than 32 ounces per day also need vitamin D supplementation. Iron supplementation (1 mg/kg/day) is recommended for exclusively breastfed babies starting at 4 months until iron-rich foods are established. Most formula-fed babies get adequate iron and vitamin D from fortified formula.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Start vitamin D drops (400 IU daily) within the first few days of life for breastfed babies. Breast milk, while the ideal nutrition, contains very little vitamin D. Vitamin D is essential for calcium absorption and bone development, and deficiency can lead to rickets. Give the drops directly into your baby\'s mouth or on the nipple/pacifier before a feed. Most infant vitamin D drops come with a dropper calibrated to the correct dose. Formula-fed babies receiving at least 32 ounces of vitamin D-fortified formula daily do not need additional supplementation.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Continue vitamin D supplementation. At 4 months, the AAP also recommends starting iron supplementation (1 mg/kg/day) for exclusively breastfed babies. Iron stores from birth begin to deplete around 4-6 months, and breast milk has low iron content. Iron is critical for brain development. Your pediatrician may check iron levels at the 9-12 month well visit. Formula-fed babies typically get adequate iron from iron-fortified formula. Combined vitamin D and iron drops are available for convenience.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solid foods, iron-rich foods (iron-fortified cereals, pureed meats, beans, lentils) become important. Continue vitamin D drops until your baby is drinking at least 32 ounces of vitamin D-fortified formula or whole milk (after 12 months). Iron supplementation for breastfed babies can be reduced or stopped once iron-rich solid foods are well established, per your pediatrician\'s guidance. Fluoride supplementation may be recommended after 6 months if your water supply is not fluoridated.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, if your toddler drinks at least 16 ounces of vitamin D-fortified whole milk daily, they may not need separate vitamin D drops. However, many toddlers are picky eaters and may benefit from a multivitamin. Your pediatrician can assess your child\'s diet and recommend supplements if needed. Common nutrients of concern for toddlers include vitamin D, iron, and omega-3 fatty acids. Avoid giving more than the recommended daily amount of any vitamin, particularly fat-soluble vitamins (A, D, E, K).',
    },
  ],
  whenNormal: [
    'You are giving your breastfed baby 400 IU of vitamin D daily as recommended.',
    'Your formula-fed baby drinks enough fortified formula that additional supplements are not needed.',
    'Your baby is eating iron-rich solid foods by 6-8 months and your pediatrician confirms adequate iron status.',
  ],
  whenToMention: [
    'You are unsure whether your baby needs vitamin D, iron, or other supplements based on their diet.',
    'Your baby refuses to take vitamin drops and you need alternative strategies.',
    'You are considering a multivitamin for your toddler and want guidance on appropriate products.',
  ],
  whenToActNow: [
    'Your baby shows signs of vitamin D deficiency: bowed legs, soft skull bones, poor growth, muscle weakness, or seizures.',
    'Your baby or toddler shows signs of iron deficiency: extreme pallor, fatigue, poor appetite, pica (eating non-food items), or developmental delays.',
    'Your child has accidentally ingested a large amount of iron supplements, which can be toxic - call Poison Control (1-800-222-1222) immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-solids', 'baby-spoon-feeding-vs-self-feeding', 'baby-probiotics-evidence-safety'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Vitamin D: On the Double. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Iron Needs of Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Iron-Needs-of-Babies-and-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Iron and Iron Deficiency.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
  ],
};
