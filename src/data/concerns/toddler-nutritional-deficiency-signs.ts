import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-nutritional-deficiency-signs',
  title: 'Signs of Nutritional Deficiency in Toddlers',
  category: 'feeding',
  searchTerms: ['toddler nutritional deficiency signs','toddler iron deficiency','toddler vitamin D deficiency','picky eater nutritional concerns','toddler not getting enough nutrients','signs of malnutrition toddler','toddler pale and tired iron','toddler vitamin deficiency symptoms','toddler anemia signs','toddler brittle nails nutritional','toddler low iron symptoms','when to worry about picky eater nutrition'],
  quickAnswer: 'The most common nutritional deficiencies in toddlers are iron, vitamin D, zinc, and calcium - especially in picky eaters and children who drink excessive amounts of milk. Signs of iron deficiency (the most common) include pallor, fatigue, irritability, poor appetite, and slow weight gain. Most picky toddlers get adequate nutrition despite their limited diets, but if your child eats fewer than 10-15 foods total or avoids entire food groups, a nutritional evaluation may be helpful.',
  byAge: [
    { ageRange: '6-12 months', context: 'Iron stores from birth begin to deplete around 6 months, making iron-rich foods critical. The AAP recommends iron-fortified cereal, pureed meats, beans, and iron-rich vegetables as early solids. Breastfed babies should receive 400 IU of vitamin D daily from birth. Formula-fed babies get vitamin D from formula but may need iron supplementation if intake is low. Signs of iron deficiency at this age include pallor, poor feeding, irritability, and slowed growth.' },
    { ageRange: '12-24 months', context: 'This is the highest risk period for iron deficiency because toddlers often transition from iron-fortified formula to cow\'s milk. Drinking more than 16-24 oz of cow\'s milk daily can cause iron deficiency by reducing appetite for iron-rich foods and interfering with iron absorption. Common deficiency signs include pale skin (especially inside lower eyelids and nail beds), fatigue, irritability, cold hands and feet, and craving non-food items (pica). The AAP recommends screening for iron deficiency at 12 months.' },
    { ageRange: '2-3 years', context: 'Picky eating peaks during this period, and parents often worry about nutrition. Most toddlers who eat a limited variety still get adequate calories and basic nutrients. Red flags for actual deficiency include: persistent fatigue or low energy, poor growth, frequent infections, unusual cravings for non-food items (ice, dirt, paper), brittle nails, hair thinning, and slow wound healing. A daily multivitamin with iron can provide insurance, but food sources are better absorbed.' },
    { ageRange: '3+ years', context: 'If your child continues to eat a very restricted diet (fewer than 15 foods), avoids entire food groups, or has not expanded their food repertoire despite gentle exposure, a feeding evaluation may be helpful. Occupational therapists and feeding specialists can address sensory-based food refusal. A simple blood test can check iron levels, vitamin D, and other nutrients. Most children grow out of extreme pickiness, but some have underlying sensory or oral motor issues that benefit from professional support.' },
  ],
  whenNormal: ['Your toddler is picky but eats some foods from most food groups and is growing normally','Your toddler\'s appetite varies day to day but averages out over a week','Your child prefers certain foods but will occasionally try new ones','Your toddler is active, alert, and meeting developmental milestones despite limited food choices'],
  whenToMention: ['Your toddler eats fewer than 15 foods or eliminates entire food groups','Your child looks pale, is unusually tired, or is irritable beyond normal toddler behavior','Your toddler drinks more than 24 oz of milk per day and has a poor appetite for solids','Your child craves non-food items like ice, dirt, or paper - this can be a sign of iron deficiency'],
  whenToActNow: ['Your child is losing weight or has fallen off their growth curve','Your toddler is extremely lethargic, very pale, and bruises easily','Your child is eating non-food items (dirt, paint chips, plaster) which could contain lead or other toxins'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-wont-eat-vegetables','baby-not-eating-after-illness','baby-growing-too-slow'],
  sources: [
    { org: 'AAP', citation: 'Baker RD, Greer FR, et al. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children. Pediatrics. 2010.', url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65343/Diagnosis-and-Prevention-of-Iron-Deficiency-and' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vitamin D: On the Double. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Iron Fact Sheet for Health Professionals.', url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/' },
  ],
};
