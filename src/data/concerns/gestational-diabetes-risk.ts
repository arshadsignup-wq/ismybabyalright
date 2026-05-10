import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gestational-diabetes-risk',
  title: 'Gestational Diabetes Risk',
  category: 'medical',
  searchTerms: [
    'gestational diabetes',
    'gestational diabetes risk factors',
    'high blood sugar pregnancy',
    'glucose test pregnancy failed',
    'gestational diabetes diet',
    'pregnancy diabetes risk to baby',
    'GDM pregnancy',
    'gestational diabetes symptoms',
    'sugar in urine pregnant',
    'glucose tolerance test failed',
  ],
  quickAnswer:
    'Gestational diabetes develops when your body cannot produce enough insulin during pregnancy to handle the increased blood sugar levels. It affects about 6-9% of pregnancies and is very manageable with diet, exercise, and sometimes medication. Most women with gestational diabetes deliver healthy babies with proper monitoring and care.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Gestational diabetes is typically not diagnosed in the first trimester, but early screening may be offered if you have risk factors such as obesity, a history of GDM in a prior pregnancy, PCOS, or a strong family history of type 2 diabetes. If you are flagged early, your provider may order an early glucose tolerance test between weeks 8-12.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Most women are screened for gestational diabetes between 24-28 weeks with a glucose challenge test. If you fail the one-hour screen, a three-hour glucose tolerance test confirms the diagnosis. Being diagnosed at this stage is very common and gives you plenty of time to manage blood sugar levels through diet and lifestyle changes.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'During the third trimester, managing gestational diabetes becomes increasingly important as the baby grows rapidly. Your provider will likely monitor your blood sugar closely, and the baby may be monitored via non-stress tests and ultrasounds to track growth. Uncontrolled GDM can lead to a larger baby (macrosomia), but controlled GDM typically results in normal delivery outcomes.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Gestational diabetes usually resolves after delivery. However, your blood sugar will be checked after birth and again at 6-12 weeks postpartum. Women who had gestational diabetes have a higher lifetime risk of developing type 2 diabetes, so ongoing screening every 1-3 years is recommended along with maintaining a healthy diet and exercise habits.',
    },
  ],
  whenNormal: [
    'You failed the one-hour glucose screen but passed the three-hour test (this is common and does not mean you have GDM)',
    'Your blood sugar is well-controlled with diet and exercise modifications alone',
    'Your baby is growing within the normal range on ultrasound despite your GDM diagnosis',
    'You have occasional slightly elevated readings but your average blood sugar is within target',
  ],
  whenToMention: [
    'You are consistently getting blood sugar readings above your target range despite dietary changes',
    'You are experiencing excessive thirst, frequent urination, or blurry vision during pregnancy',
    'Your baby is measuring large for gestational age on ultrasound',
  ],
  whenToActNow: [
    'You have very high blood sugar readings (above 200 mg/dL) that do not come down',
    'You develop signs of diabetic ketoacidosis: nausea, vomiting, fruity-smelling breath, confusion, or rapid breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Gestational Diabetes. ACOG Practice Bulletin No. 190, 2018.',
      url: 'https://www.acog.org/womens-health/faqs/gestational-diabetes',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Gestational Diabetes. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Gestational diabetes - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/gestational-diabetes/symptoms-causes/syc-20355339',
    },
  ],
};
