import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-food-aversions',
  title: 'Strong Food Aversions During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'food aversions pregnancy',
    'can\'t stand food smells pregnant',
    'food makes me sick pregnant',
    'pregnancy food aversion',
    'smell sensitivity pregnancy',
    'can\'t eat meat pregnant',
    'food disgusts me pregnant',
    'hyperosmia pregnancy',
    'heightened smell pregnancy',
    'only want certain foods pregnant',
  ],
  quickAnswer:
    'Food aversions affect up to 60-85% of pregnant people and are caused by hormonal changes that heighten the sense of smell and taste. Common aversions include meat, eggs, coffee, and strongly flavored or scented foods. While inconvenient, food aversions are a normal part of pregnancy and usually ease by the second trimester.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Food aversions are most common and intense in the first trimester, often going hand in hand with morning sickness. You may suddenly find foods you normally love repulsive. This is normal and may be an evolutionary protective mechanism. Eat whatever you can tolerate. Focus on staying hydrated and getting some nutrition in, even if your diet is limited.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Food aversions often improve in the second trimester as nausea decreases and hormones stabilize. You may be able to reintroduce foods you previously could not tolerate. If aversions persist, work with your provider to ensure you are getting adequate nutrition, possibly with supplements.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Most food aversions resolve by the third trimester, though some may persist. If you are still struggling with specific food groups, a prenatal vitamin and discussing dietary alternatives with your provider can help ensure adequate nutrition for you and your baby.',
    },
  ],
  whenNormal: [
    'Strong aversion to specific foods or smells that developed with pregnancy',
    'Aversions are most intense in the first trimester and improve over time',
    'You are able to eat other foods and maintain hydration',
    'Aversions do not prevent you from getting adequate overall nutrition',
  ],
  whenToMention: [
    'Food aversions are so severe that you cannot maintain adequate nutrition',
    'You are losing weight because of inability to eat',
    'Aversions persist throughout pregnancy and significantly limit your diet',
  ],
  whenToActNow: [
    'You cannot keep any food or fluids down and are becoming dehydrated',
    'You are losing significant weight (more than 5% of pre-pregnancy weight)',
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
        'March of Dimes. Nutrition and Food Safety. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/nutrition-and-food-safety.aspx',
    },
  ],
  relatedConcernSlugs: ['morning-sickness-severity', 'pregnancy-cravings-unusual', 'hyperemesis-gravidarum'],
};
