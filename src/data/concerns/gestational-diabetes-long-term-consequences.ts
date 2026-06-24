import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gestational-diabetes-long-term-consequences',
  title: 'Gestational Diabetes: Long-Term Consequences for Mother and Baby',
  category: 'maternal',
  searchTerms: [
    'gestational diabetes long term effects',
    'gestational diabetes after pregnancy',
    'gestational diabetes baby effects long term',
    'gestational diabetes type 2 diabetes risk',
    'GDM consequences',
    'gestational diabetes future health',
    'gestational diabetes child obesity risk',
    'gestational diabetes postpartum',
    'blood sugar after gestational diabetes',
    'gestational diabetes next pregnancy',
  ],
  quickAnswer:
    'Gestational diabetes mellitus (GDM) affects approximately 2-10% of pregnancies and has implications beyond the pregnancy itself. Women who have had GDM have a 50% or higher lifetime risk of developing type 2 diabetes, with the highest risk in the first 5 years postpartum. Children born to mothers with GDM have an increased risk of obesity and metabolic syndrome later in life. Postpartum glucose screening, healthy lifestyle modifications, breastfeeding, and regular follow-up can significantly reduce these long-term risks.',
  byAge: [
    {
      ageRange: 'Postpartum (0-12 weeks)',
      context:
        'After delivery, blood sugar typically normalizes quickly. However, ACOG and the ADA recommend a 75-gram oral glucose tolerance test (OGTT) at 4-12 weeks postpartum to screen for persistent diabetes or prediabetes. Unfortunately, only about 50% of women complete this recommended screening. Breastfeeding is strongly encouraged, as it improves glucose metabolism and is associated with a reduced risk of developing type 2 diabetes. Continue any prescribed postpartum care visits and discuss contraception, as another pregnancy with uncontrolled blood sugar could affect the baby\'s development.',
    },
    {
      ageRange: 'First year postpartum',
      context:
        'If your postpartum glucose test was normal, ongoing annual monitoring is recommended because the risk of developing type 2 diabetes remains elevated for years. Lifestyle modifications -- maintaining a healthy weight, regular physical activity (at least 150 minutes per week), and a balanced diet -- can reduce type 2 diabetes risk by up to 58%, according to the Diabetes Prevention Program study. Some women may benefit from metformin for diabetes prevention if they have prediabetes on screening. Discuss this with your healthcare provider.',
    },
    {
      ageRange: 'Future pregnancies and beyond',
      context:
        'If you had GDM, your risk of developing it again in future pregnancies is 30-70%. Pre-pregnancy counseling, weight management, and early glucose screening in subsequent pregnancies are important. For your child, research shows an increased risk of obesity and insulin resistance, particularly during adolescence and adulthood. Promoting healthy eating habits, regular physical activity, and maintaining a healthy weight from early childhood can help mitigate these risks. Annual diabetes screening for the mother should continue lifelong, as type 2 diabetes risk persists for decades.',
    },
  ],
  whenNormal: [
    'Your blood sugar returned to normal after delivery and your postpartum glucose test was normal.',
    'You are following up annually for diabetes screening and maintaining healthy lifestyle habits.',
    'Your baby was born at a healthy weight and is growing along their growth curve normally.',
  ],
  whenToMention: [
    'You had GDM and have not had your postpartum glucose tolerance test.',
    'You are experiencing symptoms of diabetes: increased thirst, frequent urination, unexplained weight loss, or fatigue.',
    'You are planning another pregnancy and want to discuss preconception glucose management.',
  ],
  whenToActNow: [
    'You have symptoms of diabetic ketoacidosis: nausea, vomiting, abdominal pain, fruity-smelling breath, and confusion.',
    'Your postpartum glucose test shows diabetes (not just GDM recurrence) and you need immediate treatment.',
    'You are pregnant again and have uncontrolled high blood sugar early in pregnancy.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['gestational-diabetes-baby-effects', 'childhood-obesity-new-icd-codes-severity', 'early-complementary-food-obesity-risk'],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Gestational Diabetes Mellitus. Practice Bulletin 190, 2018.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/02/gestational-diabetes-mellitus',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Gestational Diabetes. CDC.',
      url: 'https://www.cdc.gov/diabetes/basics/gestational.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Gestational Diabetes. NIDDK.',
      url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational',
    },
  ],
};
