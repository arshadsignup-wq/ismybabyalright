import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hyperemesis-gravidarum',
  title: 'Hyperemesis Gravidarum',
  category: 'medical',
  searchTerms: [
    'hyperemesis gravidarum',
    'severe morning sickness',
    'extreme vomiting pregnancy',
    'can\'t keep anything down pregnant',
    'HG pregnancy',
    'dehydration from vomiting pregnant',
    'weight loss pregnancy nausea',
    'hyperemesis gravidarum treatment',
    'morning sickness vs hyperemesis',
    'constant nausea pregnancy',
  ],
  quickAnswer:
    'Hyperemesis gravidarum (HG) is severe nausea and vomiting during pregnancy that goes far beyond normal morning sickness. It affects about 1-3% of pregnancies and can cause dehydration, weight loss, and electrolyte imbalances. HG is not your fault and is not caused by anything you did. With appropriate treatment including IV fluids, anti-nausea medications, and nutritional support, most women with HG have healthy babies.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'HG typically begins between 4-7 weeks of pregnancy, often before a woman even has her first prenatal appointment. Unlike normal morning sickness, HG involves persistent vomiting (often more than 3-4 times per day), inability to keep food or fluids down, weight loss of more than 5% of pre-pregnancy weight, and possible dehydration. Treatment may include anti-nausea medications (ondansetron, metoclopramide, promethazine), IV fluids, and dietary modifications.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Normal morning sickness usually improves by 12-14 weeks, but HG can persist well into the second trimester or even throughout the entire pregnancy. If symptoms continue, your provider will monitor your weight, hydration status, and nutritional intake. You may need ongoing medications, vitamin supplementation (especially thiamine to prevent Wernicke encephalopathy), and sometimes home IV therapy or TPN (total parenteral nutrition) in severe cases.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Most women with HG see improvement by the third trimester, though some continue to experience symptoms throughout pregnancy. Fetal growth will be monitored to ensure the baby is developing normally despite reduced maternal nutrition. Many babies of HG mothers grow normally. Emotional support is important because HG can be isolating and distressing - consider connecting with HG support groups.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Symptoms of HG resolve quickly after delivery in most cases. Nutritional recovery may take some time. Women who had HG may have complicated feelings about pregnancy, including grief, trauma, or anxiety about future pregnancies. HG recurs in about 75-80% of subsequent pregnancies, so planning with your provider in advance can help manage it more effectively next time.',
    },
  ],
  whenNormal: [
    'Nausea with occasional vomiting in early pregnancy that allows you to keep some food and fluids down',
    'Morning sickness that improves by the end of the first trimester',
    'Feeling queasy but able to maintain your weight and stay hydrated',
    'Nausea that is managed with small meals, ginger, or mild dietary changes',
  ],
  whenToMention: [
    'You are vomiting more than 3-4 times a day or cannot keep any food or fluids down for 12-24 hours',
    'You have lost more than 5% of your pre-pregnancy body weight',
    'You are producing very little urine, your urine is dark, or you feel dizzy when standing',
  ],
  whenToActNow: [
    'You have not been able to keep any fluids down for 24 hours or more, you feel severely dehydrated (dry mouth, racing heart, confusion), or you have blood in your vomit',
    'You develop severe abdominal pain, fever, or signs of neurological problems (confusion, vision changes, difficulty walking) which may indicate complications from prolonged vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Nausea and Vomiting of Pregnancy. ACOG Practice Bulletin No. 189, 2018.',
      url: 'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Hyperemesis Gravidarum. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/001499.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Severe nausea and vomiting during pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/morning-sickness.aspx',
    },
  ],
};
