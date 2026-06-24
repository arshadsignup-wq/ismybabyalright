import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'peripartum-cardiomyopathy-underdiagnosed',
  title: 'Peripartum Cardiomyopathy - An Underdiagnosed Heart Condition',
  category: 'maternal',
  searchTerms: [
    'peripartum cardiomyopathy',
    'postpartum heart failure',
    'shortness of breath after pregnancy',
    'heart failure pregnancy',
    'PPCM symptoms',
    'postpartum cardiomyopathy signs',
    'swelling after pregnancy heart',
    'heart condition after birth',
    'can pregnancy cause heart failure',
    'peripartum cardiomyopathy underdiagnosed',
  ],
  quickAnswer:
    'Peripartum cardiomyopathy (PPCM) is a rare but potentially life-threatening form of heart failure that develops in the last month of pregnancy or within 5 months after delivery. It affects approximately 1 in 1,000-4,000 pregnancies and is frequently misdiagnosed because its symptoms (shortness of breath, swelling, fatigue, rapid heartbeat) overlap with normal pregnancy and postpartum complaints. PPCM is a leading cause of maternal mortality and is disproportionately diagnosed late. Early diagnosis and treatment significantly improve outcomes, with about 50% of women recovering normal heart function.',
  byAge: [
    {
      ageRange: 'Third trimester',
      context:
        'PPCM can begin in the last month of pregnancy. Symptoms that may be dismissed as "normal pregnancy discomfort" but could indicate PPCM include: new or worsening shortness of breath (especially when lying flat or with minimal exertion), inability to sleep flat without propping up on pillows, persistent cough (especially at night), rapid or irregular heartbeat, swelling of the legs, ankles, or feet that is worse than typical pregnancy edema, and dizziness or lightheadedness. Risk factors include age over 30, African American race, multiple pregnancies, preeclampsia, and gestational hypertension.',
    },
    {
      ageRange: 'Postpartum (0-5 months)',
      context:
        'Most PPCM cases are diagnosed in the first few months postpartum. Because new mothers are expected to be tired and short of breath, symptoms are often dismissed by both women and their healthcare providers. Key warning signs that distinguish PPCM from normal postpartum recovery: inability to climb a flight of stairs without stopping to catch your breath, waking at night gasping for air, heart pounding at rest, swelling that worsens rather than improves after delivery, and needing to sit upright to breathe. An echocardiogram is the primary diagnostic test. If you feel something is wrong with your heart, trust your instincts and insist on evaluation.',
    },
    {
      ageRange: 'Recovery and future pregnancies',
      context:
        'With appropriate treatment (heart failure medications, sometimes devices), about 50% of women with PPCM recover normal heart function within 6-12 months. Treatment typically includes beta-blockers, ACE inhibitors (after delivery or weaning), diuretics, and anticoagulants. Breastfeeding is generally encouraged. Women with a history of PPCM have a significant risk of recurrence (30-50%) with subsequent pregnancies, and future pregnancy decisions should be made in close consultation with a cardiologist. Women whose heart function does not fully recover are at higher risk of complications with future pregnancies.',
    },
  ],
  whenNormal: [
    'You have mild shortness of breath during pregnancy that is relieved by rest and does not worsen over time.',
    'You have some ankle swelling during pregnancy that improves with elevation and resolves after delivery.',
    'Your postpartum fatigue is gradually improving over weeks.',
  ],
  whenToMention: [
    'You have persistent or worsening shortness of breath that seems out of proportion to your activity level.',
    'You have significant swelling of your legs or feet that is not improving after delivery.',
    'You have a rapid or irregular heartbeat at rest that is not related to anxiety.',
    'You have a persistent cough, especially at night, that is not related to a cold.',
  ],
  whenToActNow: [
    'You experience sudden, severe shortness of breath, chest pain, or inability to breathe when lying flat.',
    'You have a rapid, irregular heartbeat with lightheadedness or fainting.',
    'You are coughing up pink or frothy sputum, which can indicate pulmonary edema.',
    'You have sudden severe swelling of your face, hands, and legs with difficulty breathing.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'intrahepatic-cholestasis-pregnancy',
    'hyperemesis-gravidarum-severe-morning-sickness',
    'postpartum-body-recovery-timeline',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Peripartum Cardiomyopathy: Current State of Knowledge. Circulation, 2019.',
      url: 'https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.118.037145',
    },
    {
      org: 'ACOG',
      citation:
        'ACOG. Pregnancy-Associated Cardiomyopathy. Practice Bulletin, 2019.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/04/pregnancy-associated-cardiomyopathy',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Peripartum Cardiomyopathy: National Heart, Lung, and Blood Institute.',
      url: 'https://www.nhlbi.nih.gov/health/cardiomyopathy/peripartum',
    },
  ],
};
