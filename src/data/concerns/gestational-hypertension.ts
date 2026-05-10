import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gestational-hypertension',
  title: 'Gestational Hypertension',
  category: 'medical',
  searchTerms: [
    'gestational hypertension',
    'high blood pressure pregnancy no protein',
    'pregnancy induced hypertension',
    'PIH pregnancy',
    'blood pressure elevated pregnant',
    'gestational hypertension vs preeclampsia',
    'high BP during pregnancy',
    'hypertension after 20 weeks',
    'pregnancy high blood pressure treatment',
  ],
  quickAnswer:
    'Gestational hypertension is high blood pressure that develops after 20 weeks of pregnancy without protein in the urine or other signs of organ damage. It affects about 6-8% of pregnancies. With regular monitoring, most women with gestational hypertension have healthy pregnancies and deliveries. However, close follow-up is important because it can progress to preeclampsia in some cases.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Gestational hypertension does not develop in the first trimester. High blood pressure before 20 weeks is classified as chronic hypertension, which is a different condition with its own management plan. If you have a history of hypertension, your provider may adjust or change your medications to pregnancy-safe options and establish baseline blood pressure readings.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Gestational hypertension may begin to develop in the late second trimester. Blood pressure readings of 140/90 or higher on two separate occasions at least 4 hours apart establish the diagnosis. Your provider will test for protein in your urine and order blood work to rule out preeclampsia. You may be asked to monitor your blood pressure at home and report any elevations.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'The third trimester is when gestational hypertension most commonly presents. If your blood pressure remains mildly elevated (below 160/110), management typically includes regular monitoring, activity modification, and possible antihypertensive medication. Your provider will watch for signs of preeclampsia at each visit. Delivery is generally recommended by 37 weeks if hypertension persists, or earlier if it worsens.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Blood pressure typically returns to normal within 12 weeks after delivery. Your provider will continue to monitor your blood pressure postpartum. Some women may need continued blood pressure medication for a short period. Women who had gestational hypertension have an increased lifetime risk of chronic hypertension and cardiovascular disease, so ongoing monitoring is recommended.',
    },
  ],
  whenNormal: [
    'A single mildly elevated blood pressure reading that returns to normal on recheck (white coat hypertension is common)',
    'Blood pressure readings that are consistently within normal range at prenatal visits',
    'Mild swelling of feet and ankles without elevated blood pressure (normal in pregnancy)',
    'Blood pressure slightly higher than your usual baseline but still below 140/90',
  ],
  whenToMention: [
    'Your home blood pressure readings are consistently 130/80 or higher',
    'You are experiencing headaches, swelling of hands or face, or visual changes along with elevated readings',
    'You have risk factors such as obesity, first pregnancy, age over 35, or family history of hypertension',
  ],
  whenToActNow: [
    'Your blood pressure is 160/110 or higher on any reading',
    'You have severe headache, vision changes, upper abdominal pain, or sudden significant swelling with elevated blood pressure, which may indicate progression to preeclampsia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Gestational Hypertension and Preeclampsia. ACOG Practice Bulletin No. 222, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/gestational-hypertension-and-preeclampsia',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. High Blood Pressure in Pregnancy. NIH, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/high-blood-pressure/pregnancy',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. High blood pressure and pregnancy. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy/art-20046098',
    },
  ],
};
