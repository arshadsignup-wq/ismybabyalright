import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-diabetes-diet-management',
  title: 'Managing Gestational Diabetes with Diet',
  category: 'maternal',
  searchTerms: ['gestational diabetes diet', 'GDM meal plan', 'blood sugar diet pregnancy', 'gestational diabetes food', 'carb counting pregnancy diabetes', 'GDM nutrition', 'gestational diabetes management', 'blood sugar monitoring pregnancy', 'gestational diabetes recipes'],
  quickAnswer: 'Gestational diabetes (GDM) can often be managed through diet modifications, with about 70-85% of people achieving blood sugar control through nutrition and exercise alone. The key is balancing carbohydrates with protein and healthy fats, eating at regular intervals, and monitoring blood sugar levels to understand how foods affect you.',
  byAge: [
    { ageRange: 'Second trimester', context: 'GDM is typically diagnosed between 24-28 weeks. After diagnosis, you will likely meet with a diabetes educator or dietitian. A typical GDM meal plan includes 3 meals and 2-3 snacks per day, limiting carbohydrates to about 175 grams per day, pairing carbs with protein, choosing complex carbs over simple sugars, and monitoring blood sugar 4 times daily (fasting and after meals).' },
    { ageRange: 'Third trimester', context: 'As pregnancy progresses, insulin resistance naturally increases, and blood sugar may become harder to control with diet alone. This does not mean you failed - it is a normal progression of GDM. If diet and exercise are not maintaining target blood sugars, medication (metformin or insulin) may be needed. Continue working with your care team on nutrition.' },
    { ageRange: 'Postpartum', context: 'Blood sugar levels usually return to normal after delivery. You will be tested 6-12 weeks postpartum. A healthy diet and regular exercise after pregnancy can significantly reduce your risk of developing type 2 diabetes later in life. Breastfeeding also helps improve blood sugar control.' },
  ],
  whenNormal: ['Occasional blood sugar reading slightly above target', 'Learning curve as you figure out which foods affect your blood sugar', 'Blood sugar well-controlled with diet and exercise'],
  whenToMention: ['Blood sugar readings are frequently above target despite following your meal plan', 'You are struggling to follow the recommended diet or need additional support', 'You have questions about specific foods or portions'],
  whenToActNow: ['Very high blood sugar readings (above 200 mg/dL)', 'Symptoms of very high blood sugar: extreme thirst, frequent urination, blurred vision', 'Symptoms of low blood sugar: shaking, sweating, confusion, rapid heartbeat'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Gestational Diabetes. ACOG Practice Bulletin No. 190, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/02/gestational-diabetes-mellitus' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Gestational Diabetes. NIDDK, 2023.', url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Gestational Diabetes. CDC, 2023.', url: 'https://www.cdc.gov/diabetes/basics/gestational.html' },
  ],
  relatedConcernSlugs: ['gestational-diabetes-risk', 'pregnancy-insulin-concerns', 'gestational-diabetes-baby-effects'],
};
