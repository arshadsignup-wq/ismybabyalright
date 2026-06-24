import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'exclusive-breastfeeding-micronutrient-gaps',
  title: 'Micronutrient Gaps in Exclusively Breastfed Babies',
  category: 'feeding',
  searchTerms: [
    'breastfed baby vitamin D',
    'breastfed baby iron deficiency',
    'breast milk nutrient gaps',
    'vitamin D drops breastfed baby',
    'iron supplement breastfed baby',
    'breast milk vitamin deficiency',
    'does breast milk have enough vitamins',
    'breastfed baby supplements needed',
    'vitamin D deficiency breastfed',
    'breast milk iron content',
    'breastfed baby nutrient needs',
  ],
  quickAnswer:
    'While breast milk is the optimal nutrition for infants, exclusively breastfed babies need supplemental vitamin D (400 IU daily) from birth and may need supplemental iron starting at 4 months. Breast milk is naturally low in vitamin D regardless of the mother\'s intake, and iron stores from birth begin to deplete around 4-6 months. These supplements are specifically recommended by the AAP and do not indicate that breast milk is inadequate -- they simply fill known nutritional gaps.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'The AAP recommends that all breastfed infants receive 400 IU of vitamin D daily, starting within the first few days of life. This is because breast milk contains very little vitamin D (about 25 IU per liter), and vitamin D deficiency can lead to rickets, weak bones, and impaired immune function. Vitamin D drops designed for infants are the easiest way to supplement. Iron supplementation is generally not needed during the first 4 months, as full-term babies are born with adequate iron stores that last approximately 4-6 months.',
    },
    {
      ageRange: '4-6 months',
      context:
        'At 4 months, the AAP recommends that exclusively breastfed infants begin receiving supplemental iron (1 mg/kg/day) until iron-rich complementary foods are introduced. This is because breast milk iron content, while highly bioavailable, is insufficient to meet the growing baby\'s needs beyond 4-6 months. Iron deficiency in infancy can affect brain development and cognitive function. Formula-fed babies do not need iron supplements because formula is iron-fortified. Continue vitamin D supplementation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once iron-rich complementary foods are being consumed regularly (pureed meats, iron-fortified cereals, beans), iron supplementation can typically be discontinued. However, zinc becomes another nutrient of concern, as breast milk zinc content decreases significantly after 6 months. Good complementary food sources of zinc include meat, poultry, beans, and fortified cereals. Continue vitamin D supplementation (400 IU daily) for as long as your baby is breastfeeding unless they are consuming at least 32 oz of vitamin D-fortified formula or milk daily.',
    },
  ],
  whenNormal: [
    'You are giving your breastfed baby 400 IU of vitamin D daily starting from the first days of life.',
    'Your baby is growing well, meeting milestones, and your pediatrician is satisfied with their development.',
    'You introduce iron-rich foods at around 6 months alongside continued breastfeeding.',
  ],
  whenToMention: [
    'You are unsure whether your breastfed baby needs vitamin or mineral supplements.',
    'Your baby is exclusively breastfed past 6 months and you are struggling to introduce iron-rich solids.',
    'Your baby was premature, which increases the risk of iron and other nutrient deficiencies.',
  ],
  whenToActNow: [
    'Your baby shows signs of severe vitamin D deficiency: bowed legs, widening of the wrists, soft skull bones, or failure to grow.',
    'Your baby shows signs of iron deficiency anemia: extreme pallor, fatigue, poor feeding, or delayed development.',
    'Your baby has been diagnosed with rickets or severe anemia and needs urgent treatment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-zinc-supplement-when-needed', 'breastfeeding-feeling-inadequate-supply', 'early-complementary-food-obesity-risk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamin D and Iron Supplements for Babies: AAP Recommendations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamin-D-and-Iron-Supplements-for-Babies.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Wagner CL, Greer FR. Prevention of Rickets and Vitamin D Deficiency in Infants, Children, and Adolescents. Pediatrics, 2008.',
      url: 'https://publications.aap.org/pediatrics/article/122/5/1142/72641/Prevention-of-Rickets-and-Vitamin-D-Deficiency-in',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Exclusive Breastfeeding for Optimal Growth, Development and Health. WHO.',
      url: 'https://www.who.int/tools/elena/interventions/exclusive-breastfeeding',
    },
  ],
};
