import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'high-risk-pregnancy-anxiety',
  title: 'Coping with a High-Risk Pregnancy Diagnosis',
  category: 'maternal',
  searchTerms: ['high risk pregnancy', 'high risk pregnancy anxiety', 'high risk pregnancy coping', 'maternal fetal medicine', 'perinatologist', 'complicated pregnancy', 'bed rest pregnancy anxiety', 'high risk pregnancy support', 'scared high risk pregnancy'],
  quickAnswer: 'Being told your pregnancy is "high risk" can be frightening, but it simply means you need closer monitoring. Many high-risk pregnancies result in healthy babies and healthy parents. The term covers a wide range of conditions, and modern maternal-fetal medicine has excellent tools for managing most of them. Having extra support does not mean something will go wrong - it means you are being well cared for.',
  byAge: [
    { ageRange: 'First trimester', context: 'A high-risk designation may come from pre-existing conditions (diabetes, hypertension, autoimmune disorders), age, multiple pregnancies, or pregnancy history. You may be referred to a maternal-fetal medicine (MFM) specialist. This specialist works alongside your OB to provide additional expertise. Ask questions about what your specific diagnosis means for your pregnancy.' },
    { ageRange: 'Second trimester', context: 'Additional monitoring may include more frequent ultrasounds, blood tests, and appointments. This can feel overwhelming but is designed to catch and address any issues early. Develop a relationship with your care team where you feel comfortable asking questions. Consider joining a support group for high-risk pregnancy.' },
    { ageRange: 'Third trimester', context: 'As delivery approaches, your care team will work with you on a delivery plan that addresses your specific needs. This may include hospital-based delivery, availability of specialized care for you or the baby, and specific timing. Knowledge is empowering - understand your condition, your monitoring plan, and when to seek care.' },
  ],
  whenNormal: ['Feeling scared, anxious, or overwhelmed by the high-risk label', 'Grieving the "normal" pregnancy experience you expected', 'Finding the extra appointments and tests stressful', 'Needing time to process and adjust'],
  whenToMention: ['Anxiety about your condition is significantly affecting your well-being', 'You need help understanding your diagnosis and what it means', 'You want emotional support resources (therapy, support groups)', 'You feel your concerns are not being heard by your care team'],
  whenToActNow: ['Any symptoms your care team has told you to watch for urgently', 'Severe anxiety or depression that is impairing your ability to function', 'Thoughts of self-harm or feeling unable to cope'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Definition of High-Risk Pregnancy. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being' },
    { org: 'NIH', citation: 'National Institutes of Health. What Is a High-Risk Pregnancy? NICHD, 2023.', url: 'https://www.nichd.nih.gov/health/topics/high-risk' },
    { org: 'March of Dimes', citation: 'March of Dimes. High-Risk Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/high-risk-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-anxiety', 'twin-pregnancy-concerns', 'prenatal-testing-anxiety'],
};
