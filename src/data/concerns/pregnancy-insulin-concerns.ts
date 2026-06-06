import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-insulin-concerns',
  title: 'Insulin Use During Pregnancy',
  category: 'maternal',
  searchTerms: ['insulin pregnancy', 'insulin injection pregnant', 'insulin safe pregnancy', 'gestational diabetes insulin', 'scared of insulin pregnancy', 'insulin dosing pregnancy', 'insulin side effects pregnancy', 'metformin vs insulin pregnancy'],
  quickAnswer: 'Insulin is the gold-standard treatment for gestational diabetes that cannot be controlled by diet alone. It does not cross the placenta and is therefore safe for your baby. Needing insulin is not a failure - it simply means your body needs additional help managing blood sugar, which is common as pregnancy naturally increases insulin resistance.',
  byAge: [
    { ageRange: 'Second trimester', context: 'If insulin is started after GDM diagnosis, your provider will teach you how to inject (usually in the belly or thigh), when to take it, and how to adjust doses based on blood sugar readings. Modern insulin needles are very small and most people find injections far less painful than expected. Insulin doses often need to increase throughout pregnancy.' },
    { ageRange: 'Third trimester', context: 'Insulin requirements typically increase in the third trimester as insulin resistance naturally peaks. Dose adjustments every 1-2 weeks are normal. This does not mean your diabetes is worsening - it is expected. Continue monitoring blood sugar regularly and communicating with your care team about your readings.' },
    { ageRange: 'Postpartum', context: 'Insulin is usually stopped immediately after delivery as insulin resistance drops dramatically. Your blood sugar will be monitored after birth. Most people with GDM do not need insulin after delivery. Follow up with your provider for postpartum glucose testing at 6-12 weeks.' },
  ],
  whenNormal: ['Needing insulin dose increases as pregnancy progresses', 'Occasional blood sugar readings outside target despite taking insulin', 'Mild bruising at injection sites'],
  whenToMention: ['You are struggling with the emotional aspect of needing insulin', 'You are having difficulty managing injections or timing', 'Blood sugar readings are not improving despite following insulin regimen'],
  whenToActNow: ['Signs of low blood sugar (hypoglycemia): shaking, sweating, confusion, dizziness, rapid heartbeat - eat or drink something sugary immediately', 'Very high blood sugar readings that do not come down with your prescribed dose', 'Signs of diabetic ketoacidosis: nausea, vomiting, fruity-smelling breath, confusion'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Gestational Diabetes. ACOG Practice Bulletin No. 190, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/02/gestational-diabetes-mellitus' },
    { org: 'NIH', citation: 'National Library of Medicine. Insulin Therapy in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK526077/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Managing Diabetes in Pregnancy. CDC, 2023.', url: 'https://www.cdc.gov/diabetes/basics/gestational.html' },
  ],
  relatedConcernSlugs: ['gestational-diabetes-risk', 'pregnancy-diabetes-diet-management', 'gestational-diabetes-baby-effects'],
};
