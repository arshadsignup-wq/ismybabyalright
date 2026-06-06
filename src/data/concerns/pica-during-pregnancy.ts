import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pica-during-pregnancy',
  title: 'Craving Non-Food Items During Pregnancy (Pica)',
  category: 'maternal',
  searchTerms: [
    'pica pregnancy',
    'craving dirt pregnant',
    'craving chalk pregnant',
    'eating non-food items pregnant',
    'craving ice pregnancy',
    'pica during pregnancy',
    'craving laundry starch pregnant',
    'craving clay pregnant',
    'eating strange things pregnant',
    'pagophagia pregnancy',
  ],
  quickAnswer:
    'Pica is the craving and sometimes consumption of non-food items during pregnancy, such as ice, dirt, clay, chalk, or laundry starch. It affects an estimated 28% of pregnant people worldwide and may be associated with iron deficiency or other nutritional deficiencies. It should always be discussed with your provider.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Pica can begin at any point in pregnancy. If you notice cravings for non-food substances, let your provider know. They will likely check your iron levels and other nutritional markers. Craving and chewing ice (pagophagia) is the most common form and is strongly associated with iron-deficiency anemia.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Pica cravings may intensify or persist. It is important not to consume non-food items, as they can contain harmful substances, cause intestinal blockages, or interfere with nutrient absorption. If you are struggling with pica urges, tell your provider without shame - it is a recognized medical condition, not a personal failing.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Continued pica, especially consumption of non-food items, needs medical attention. Treatment typically involves addressing underlying nutritional deficiencies, especially iron. Pica usually resolves after delivery or once deficiencies are corrected. Behavioral strategies and support can help manage urges.',
    },
  ],
  whenNormal: [
    'There is no form of consuming non-food items that is considered normal, but the cravings themselves are common and should not cause shame',
    'Craving ice frequently is the most common form and is usually benign but should be mentioned to your provider',
  ],
  whenToMention: [
    'You have cravings for non-food items, even if you have not acted on them',
    'You are chewing ice frequently or excessively',
    'You are craving dirt, clay, chalk, laundry starch, or other non-food substances',
  ],
  whenToActNow: [
    'You have consumed non-food items and are experiencing abdominal pain, vomiting, or constipation',
    'You have consumed potentially toxic substances like paint chips, cleaning products, or other chemicals',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Nutrition During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/nutrition-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pica in Pregnancy: New Ideas About an Old Condition. Annual Review of Nutrition, 2010.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20420523/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Nutritional Deficiencies and Pica. WHO, 2023.',
      url: 'https://www.who.int/health-topics/anaemia',
    },
  ],
  relatedConcernSlugs: ['pregnancy-cravings-unusual', 'pregnancy-anemia'],
};
