import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'unplanned-pregnancy-emotions',
  title: 'Processing an Unplanned Pregnancy',
  category: 'maternal',
  searchTerms: ['unplanned pregnancy', 'unexpected pregnancy', 'surprise pregnancy emotions', 'unplanned pregnancy feelings', 'not ready to be pregnant', 'ambivalent about pregnancy', 'unplanned pregnancy what to do', 'accidental pregnancy emotions', 'mixed feelings about pregnancy'],
  quickAnswer: 'An unplanned pregnancy can trigger a wide range of emotions - shock, fear, anxiety, confusion, and sometimes anger or grief alongside excitement. About 45% of pregnancies in the US are unplanned. Whatever you are feeling is valid. Give yourself permission to process without judgment, and know that support is available to help you navigate your options and emotions.',
  byAge: [
    { ageRange: 'First trimester', context: 'The first trimester is often when the reality sets in and emotions are most intense. You may feel pressure to make decisions quickly, but you have time. If you plan to continue the pregnancy, starting prenatal care and prenatal vitamins as soon as possible is important. If you are unsure, a compassionate counselor can help you explore your feelings without pressure.' },
    { ageRange: 'Second trimester', context: 'If you have chosen to continue the pregnancy, mixed feelings may persist and that is okay. Not every pregnant person feels immediate bonding or excitement. Ambivalence does not mean you will not be a good parent. Seek support from trusted people and consider counseling to process your emotions. Practical planning (finances, living situation, childcare) can help you feel more in control.' },
    { ageRange: 'Third trimester', context: 'As the baby\'s arrival approaches, anxiety about readiness may increase. Many people who had unplanned pregnancies find that love and readiness grow over time. Focus on building your support network and preparing at whatever pace feels right for you. Parenting classes and connecting with other new parents can help.' },
  ],
  whenNormal: ['Shock and disbelief upon discovering the pregnancy', 'Mixed emotions including both positive and negative feelings', 'Grief about changes to your life plans', 'Gradual adjustment and growing acceptance over time'],
  whenToMention: ['You need support processing your emotions', 'You want to discuss your options without judgment', 'Mixed feelings are persistent and causing distress', 'Your relationship or living situation makes the pregnancy more complicated'],
  whenToActNow: ['You are in an unsafe relationship and the pregnancy increases danger', 'You are having thoughts of self-harm', 'You need immediate support - call 988 (Suicide and Crisis Lifeline) or contact a crisis center'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Unintended Pregnancy. ACOG, 2022.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2022/12/increasing-access-to-contraceptive-implants-and-intrauterine-devices-to-reduce-unintended-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Psychological Outcomes of Unintended Pregnancy. Best Practice & Research Clinical Obstetrics & Gynaecology, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/32014401/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Planning Your Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/planning-your-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-anxiety', 'prenatal-depression', 'teen-pregnancy-concerns'],
};
