import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oligohydramnios-low-amniotic-fluid',
  title: 'Oligohydramnios (Low Amniotic Fluid)',
  category: 'medical',
  searchTerms: [
    'low amniotic fluid',
    'oligohydramnios',
    'amniotic fluid too low',
    'low AFI pregnancy',
    'not enough amniotic fluid',
    'amniotic fluid level low ultrasound',
    'oligohydramnios causes',
    'low fluid around baby',
    'dehydration and amniotic fluid',
    'low amniotic fluid risk to baby',
  ],
  quickAnswer:
    'Oligohydramnios, or low amniotic fluid, affects about 4-8% of pregnancies and can range from mild to severe. Mild cases, especially near term, are common and often managed with close monitoring. The amniotic fluid level can fluctuate, and hydration may help in some cases. Your provider will determine the cause and create a monitoring plan to ensure the best outcome.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Low amniotic fluid in the first trimester is uncommon but can indicate issues such as a ruptured membrane or fetal abnormality. Most amniotic fluid at this stage comes from the placenta and maternal tissues. If low fluid is detected this early, your provider will investigate the cause and may recommend genetic testing or detailed ultrasound.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'In the second trimester, the baby\'s kidneys begin producing urine, which becomes the primary source of amniotic fluid. Low fluid at this stage can be caused by premature rupture of membranes, fetal kidney problems, or placental insufficiency. Your provider may measure the amniotic fluid index (AFI) or single deepest pocket (SDP) on ultrasound and may recommend serial monitoring.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Low amniotic fluid is most commonly diagnosed in the third trimester. Near term (37+ weeks), a mildly low AFI is relatively common and may prompt earlier delivery if conditions are favorable. Causes include membrane leaks, placental insufficiency, certain medications, and post-term pregnancy. Your provider will likely increase monitoring with non-stress tests and biophysical profiles.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, the cause of oligohydramnios may be further evaluated by examining the placenta. Babies born after pregnancies complicated by low fluid are usually healthy, though they may need monitoring for conditions related to the underlying cause. If cord compression was a concern, the baby will be monitored closely after birth.',
    },
  ],
  whenNormal: [
    'Your AFI is borderline low (5-8 cm) near term and your baby is otherwise healthy and active',
    'Your amniotic fluid levels fluctuate slightly between ultrasound measurements',
    'Your provider attributes the low fluid to mild dehydration and recommends increased fluid intake',
    'Your baby has reassuring heart rate patterns and normal movement',
  ],
  whenToMention: [
    'You are leaking fluid from your vagina, which could indicate premature rupture of membranes',
    'Your baby\'s movement has decreased compared to usual',
    'You have been diagnosed with low amniotic fluid and want to discuss your monitoring and delivery plan',
  ],
  whenToActNow: [
    'You have a sudden gush of fluid from your vagina, especially before 37 weeks, which may indicate your water has broken',
    'You notice your baby has stopped moving or movement has decreased dramatically, along with previously diagnosed low fluid',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Oligohydramnios. ACOG Practice Bulletin, 2022.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2022/02/assessment-of-amniotic-fluid-volume',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Oligohydramnios. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/oligohydramnios.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Low amniotic fluid (oligohydramnios). Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/expert-answers/low-amniotic-fluid/faq-20057964',
    },
  ],
};
