import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iron-deficiency-anemia-baby',
  title: 'Iron Deficiency Anemia in Babies',
  category: 'feeding',
  searchTerms: [
    'iron deficiency baby',
    'baby anemia symptoms',
    'low iron in infant',
    'baby pale skin iron',
    'iron rich foods for baby',
    'when to start iron supplement baby',
    'breastfed baby iron deficiency',
    'baby not getting enough iron',
  ],
  quickAnswer:
    'Iron deficiency is the most common nutritional deficiency in young children. Babies are born with iron stores that last about 4-6 months, after which they need dietary iron from breast milk (with supplementation), formula, or iron-rich foods. Untreated iron deficiency can affect brain development and cognitive function, so early detection and treatment are important.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Full-term babies are born with sufficient iron stores from the mother, typically lasting 4-6 months. Premature babies or those with low birth weight may have lower iron stores and are at higher risk of early deficiency. The AAP recommends that exclusively breastfed preterm infants begin iron supplementation (2 mg/kg/day) by 2 weeks of age. Formula-fed babies receive adequate iron from iron-fortified formula.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Iron stores from birth begin to deplete during this period. The AAP recommends exclusively breastfed full-term infants start supplemental iron (1 mg/kg/day) at 4 months of age and continue until iron-rich complementary foods are introduced. Formula-fed babies typically get adequate iron from standard iron-fortified formulas. Watch for early signs such as increased pallor or unusual fatigue.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a critical window for iron intake. Once solids are introduced around 6 months, iron-rich foods such as pureed meats, iron-fortified cereals, lentils, and beans should be prioritized. Babies who are exclusively breastfed without iron-rich complementary foods are at significant risk of deficiency. Vitamin C-rich foods given alongside iron-rich foods improve absorption. Your pediatrician may screen for anemia around 9-12 months.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who drink excessive amounts of cow milk (more than 24 ounces per day) are at high risk for iron deficiency because cow milk is low in iron and can interfere with iron absorption. Additionally, it can cause microscopic intestinal blood loss. The AAP recommends limiting cow milk to 16-24 ounces per day and offering a variety of iron-rich foods at each meal. Screening for iron deficiency is recommended at the 12-month well-child visit.',
    },
  ],
  whenNormal: [
    'Your baby is eating iron-fortified cereal or meats regularly after 6 months and growing well',
    'Your formula-fed baby is drinking standard iron-fortified formula and has good energy levels',
    'Your breastfed baby is receiving iron supplementation as recommended by your pediatrician',
    'Your toddler eats a varied diet that includes iron-rich foods and drinks a moderate amount of milk',
  ],
  whenToMention: [
    'Your baby appears unusually pale, especially in the nail beds, palms, or inner eyelids',
    'Your baby seems unusually tired, irritable, or has a poor appetite compared to peers',
    'Your toddler drinks more than 24 ounces of cow milk per day and eats very few solid foods',
  ],
  whenToActNow: [
    'Your baby has extreme pallor, rapid breathing, or a fast heartbeat at rest, which may indicate severe anemia',
    'Your baby is eating non-food items such as ice, dirt, or paint chips, which may indicate severe iron deficiency (pica)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Baker RD, Greer FR; Committee on Nutrition. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children. Pediatrics. 2010;126(5):1040-1050.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65344/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Iron Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Iron Deficiency Anaemia: Assessment, Prevention and Control. A Guide for Programme Managers.',
      url: 'https://www.who.int/publications/m/item/iron-children-6to23--archived-iron-deficiency-anaemia-assessment-prevention-and-control',
    },
  ],
};
