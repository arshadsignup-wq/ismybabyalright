import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'intrauterine-growth-restriction',
  title: 'Intrauterine Growth Restriction (IUGR)',
  category: 'medical',
  searchTerms: [
    'IUGR pregnancy',
    'baby measuring small on ultrasound',
    'intrauterine growth restriction',
    'fetal growth restriction',
    'baby not growing enough in womb',
    'small for gestational age',
    'low fetal weight',
    'baby below 10th percentile ultrasound',
    'FGR pregnancy',
    'placenta not working properly',
  ],
  quickAnswer:
    'Intrauterine growth restriction (IUGR) means a baby is growing slower than expected in the womb, typically measuring below the 10th percentile for gestational age. Many small babies are simply constitutionally small and perfectly healthy. When IUGR is caused by placental or other issues, close monitoring and timely delivery planning help ensure the best outcomes.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'IUGR is rarely diagnosed in the first trimester. However, early factors like poor nutrition, smoking, infections (such as CMV or toxoplasmosis), or chromosomal abnormalities can begin to affect growth from the start. Dating ultrasounds help establish accurate gestational age so that growth can be tracked properly as the pregnancy progresses.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'IUGR may be suspected during routine anatomy scans around 18-22 weeks if the baby is measuring smaller than expected. Your provider may order serial growth ultrasounds every 2-4 weeks and Doppler studies of the umbilical artery to assess blood flow to the baby. Symmetrical IUGR (the whole baby is proportionally small) is sometimes detected at this stage.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'The third trimester is when IUGR is most commonly diagnosed, often through asymmetric growth where the head is normal-sized but the abdomen is smaller. This typically indicates a placental cause. Monitoring becomes more intensive with non-stress tests, biophysical profiles, and Doppler flow studies. Your provider will weigh the risks of prematurity against the risks of continuing the pregnancy with poor growth.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Babies born with IUGR may need extra care after birth, including blood sugar monitoring and temperature regulation. Most IUGR babies experience catch-up growth in the first 1-2 years of life. Your pediatrician will track growth milestones closely. Long-term outcomes are generally excellent, especially when the IUGR was detected and managed during pregnancy.',
    },
  ],
  whenNormal: [
    'Your baby is measuring slightly below average but remains on a consistent growth curve',
    'You and your partner are smaller in stature, and your baby is constitutionally small',
    'Doppler studies show normal blood flow through the umbilical cord',
    'Your baby is active with reassuring fetal movement patterns',
  ],
  whenToMention: [
    'Your baby drops from their growth curve or crosses percentile lines downward on serial ultrasounds',
    'You notice a significant decrease in fetal movement',
    'You have risk factors such as chronic hypertension, preeclampsia, smoking, or a history of IUGR in a previous pregnancy',
  ],
  whenToActNow: [
    'You experience a sudden absence or significant decrease in fetal movement',
    'Doppler studies show absent or reversed end-diastolic flow in the umbilical artery, indicating the placenta is failing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Fetal Growth Restriction. ACOG Practice Bulletin No. 204, 2019.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/02/fetal-growth-restriction',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Intrauterine growth restriction. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/intrauterine-growth-restriction.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Fetal Growth Restriction. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/001500.htm',
    },
  ],
};
