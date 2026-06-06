import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'peripartum-cardiomyopathy',
  title: 'Heart Issues Around Birth (Peripartum Cardiomyopathy)',
  category: 'maternal',
  searchTerms: ['peripartum cardiomyopathy', 'heart failure pregnancy', 'heart problems pregnancy', 'PPCM', 'heart enlargement pregnancy', 'cardiac pregnancy', 'shortness of breath heart pregnancy', 'cardiomyopathy postpartum', 'heart disease pregnancy'],
  quickAnswer: 'Peripartum cardiomyopathy (PPCM) is a rare but serious form of heart failure that can develop in the last month of pregnancy or up to 5 months after delivery. It occurs in approximately 1 in 1,000-4,000 pregnancies. Early recognition and treatment are critical, as most people recover with proper medical care.',
  byAge: [
    { ageRange: 'Third trimester', context: 'PPCM typically presents in the last month of pregnancy. Symptoms include shortness of breath (beyond normal pregnancy breathlessness), persistent cough, swelling in the legs and feet, rapid weight gain from fluid retention, and palpitations. Because these symptoms overlap with normal pregnancy, PPCM can be missed. If breathlessness is severe, progressive, or occurs while lying flat, seek evaluation.' },
    { ageRange: 'Postpartum', context: 'PPCM most commonly presents in the first month after delivery. Symptoms include extreme fatigue, inability to lie flat without breathing difficulty, persistent cough, swelling, and rapid heartbeat. Risk factors include age over 30, multiple pregnancies, African American descent, and preeclampsia history. With treatment (heart failure medications), about half of people fully recover heart function.' },
  ],
  whenNormal: ['Mild shortness of breath with exertion in late pregnancy', 'Mild ankle swelling that improves with elevation', 'Occasional palpitations lasting seconds'],
  whenToMention: ['Shortness of breath that is worsening or more severe than expected for your stage of pregnancy', 'Swelling that is rapid or does not improve with rest', 'Heart palpitations that are frequent or prolonged'],
  whenToActNow: ['Severe shortness of breath, especially when lying down or at rest', 'Chest pain with breathing difficulty', 'Persistent rapid heartbeat with dizziness or fainting', 'Coughing up frothy or pink-tinged sputum'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Pregnancy and Heart Disease. ACOG Practice Bulletin, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/05/pregnancy-and-heart-disease' },
    { org: 'NIH', citation: 'National Library of Medicine. Peripartum Cardiomyopathy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549867/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Heart Conditions and Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/heart-conditions-and-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['postpartum-cardiomyopathy', 'pregnancy-shortness-of-breath'],
};
