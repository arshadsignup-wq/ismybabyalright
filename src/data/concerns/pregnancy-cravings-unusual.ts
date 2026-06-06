import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-cravings-unusual',
  title: 'Unusual Food Cravings During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'pregnancy cravings',
    'food cravings pregnant',
    'weird cravings pregnancy',
    'craving pickles pregnant',
    'craving sweets pregnant',
    'why do I crave strange foods pregnant',
    'pregnancy craving meaning',
    'intense food cravings pregnant',
    'craving salty food pregnant',
    'craving ice pregnant',
  ],
  quickAnswer:
    'Food cravings during pregnancy are very common, affecting 50-90% of pregnant people. They are thought to be caused by hormonal changes, nutritional needs, and heightened senses. Most cravings are harmless, but intense cravings for non-food items (pica) should be discussed with your provider.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Cravings often begin in the first trimester alongside food aversions. You may intensely want specific foods, often those that are salty, sweet, or sour. Moderate indulgence of food cravings is fine as long as you are maintaining a generally balanced diet. Cravings do not necessarily indicate a nutritional deficiency.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Cravings may peak in the second trimester. Enjoy your cravings in moderation. If you are craving ice (pagophagia), this can be a sign of iron-deficiency anemia and should be mentioned to your provider. Try to balance cravings with nutrient-rich foods.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Cravings often continue but may shift in the third trimester. Be mindful of excessive sugar or sodium intake, which can affect blood pressure and blood sugar levels. If cravings feel uncontrollable or you are craving non-food items like dirt, chalk, or laundry detergent, talk to your provider about pica.',
    },
  ],
  whenNormal: [
    'Strong desire for specific foods like pickles, chocolate, fruit, or salty snacks',
    'Cravings that can be satisfied and do not dominate your entire diet',
    'Food preferences that shifted with pregnancy',
    'Cravings that you can moderate and balance with healthy eating',
  ],
  whenToMention: [
    'You are craving ice constantly, which can be a sign of iron-deficiency anemia',
    'Cravings are so intense that you are eating excessively and gaining weight rapidly',
    'You are craving very specific unusual combinations that concern you',
  ],
  whenToActNow: [
    'You are craving and consuming non-food items like dirt, clay, chalk, laundry starch, or soap (pica), which can be dangerous',
    'You are unable to control eating and are consuming large quantities of foods that are unsafe during pregnancy',
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
        'National Library of Medicine. Food Cravings and Aversions During Pregnancy. Frontiers in Psychology, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25426088/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Cravings During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/cravings-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pica-during-pregnancy', 'pregnancy-food-aversions', 'pregnancy-weight-gain-concerns'],
};
