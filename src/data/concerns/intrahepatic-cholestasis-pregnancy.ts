import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'intrahepatic-cholestasis-pregnancy',
  title: 'Intrahepatic Cholestasis of Pregnancy (ICP)',
  category: 'maternal',
  searchTerms: [
    'cholestasis pregnancy',
    'itching pregnancy third trimester',
    'intrahepatic cholestasis',
    'ICP pregnancy',
    'extreme itching pregnant',
    'itchy hands feet pregnant',
    'bile acid levels pregnancy',
    'cholestasis stillbirth risk',
    'pregnancy liver condition itching',
    'obstetric cholestasis',
    'cholestasis early delivery',
  ],
  quickAnswer:
    'Intrahepatic cholestasis of pregnancy (ICP) is a liver condition that occurs in 1-2% of pregnancies, typically in the third trimester, causing intense itching, especially on the palms of the hands and soles of the feet. ICP is caused by a buildup of bile acids in the blood and is associated with increased risk of preterm birth, fetal distress, and stillbirth if untreated. Treatment with ursodeoxycholic acid (UDCA) can reduce bile acid levels, and early delivery (typically at 36-37 weeks) is recommended to reduce fetal risk. ICP resolves after delivery.',
  byAge: [
    {
      ageRange: 'Second trimester (weeks 14-27)',
      context:
        'While ICP most commonly presents in the third trimester, it can occasionally begin as early as the second trimester. Early-onset ICP may indicate a more severe form. If you develop itching that is worse at night, particularly on your palms and soles, without a visible rash, request bile acid and liver function tests from your provider. Risk factors include a history of ICP in a previous pregnancy (recurrence rate 60-90%), multiple pregnancies (twins or more), hepatitis C, and family history of ICP.',
    },
    {
      ageRange: 'Third trimester (weeks 28-40)',
      context:
        'This is the most common time for ICP to present. The hallmark symptom is intense itching, especially on palms and soles, that worsens at night and may interfere with sleep. Some women also experience dark urine, light-colored stools, or mild jaundice. Diagnosis requires a blood test measuring total bile acids (levels above 10 micromol/L are considered diagnostic). Treatment with UDCA medication typically reduces itching and bile acid levels. Your provider will monitor bile acid levels and fetal wellbeing closely, and plan delivery typically between 36-37 weeks depending on severity.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'ICP symptoms resolve within days to weeks after delivery, and liver function and bile acid levels return to normal. Your baby will be monitored for signs of jaundice or meconium aspiration, which are slightly more common in ICP pregnancies. Breastfeeding is safe and encouraged. Discuss future pregnancy planning with your provider, as ICP has a high recurrence rate. Women with a history of ICP should also be aware of a slightly increased long-term risk of liver and biliary disease, and mention their ICP history to future healthcare providers.',
    },
  ],
  whenNormal: [
    'You have mild itching during pregnancy from skin stretching, which is not concentrated on palms and soles and does not worsen significantly at night.',
    'You had ICP in a previous pregnancy, delivered safely with appropriate management, and ICP resolved after delivery.',
    'Your bile acid levels were tested and are normal.',
  ],
  whenToMention: [
    'You have persistent itching on your palms and soles, especially if it worsens at night.',
    'You have itching without a visible rash during the third trimester of pregnancy.',
    'You have a family history of ICP or had ICP in a previous pregnancy.',
    'You notice dark urine or light-colored stools during pregnancy.',
  ],
  whenToActNow: [
    'You have intense, unrelenting itching on palms and soles combined with decreased fetal movement.',
    'You develop jaundice (yellowing of skin or eyes) during pregnancy.',
    'You have been diagnosed with ICP and notice a significant decrease in your baby\'s movement, which may indicate fetal distress.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'hyperemesis-gravidarum-severe-morning-sickness',
    'peripartum-cardiomyopathy-underdiagnosed',
    'newborn-jaundice-kernicterus-prevention',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Intrahepatic Cholestasis of Pregnancy. Clinical Updates in Women\'s Health Care, 2019.',
      url: 'https://www.acog.org/womens-health/faqs/liver-disease-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Intrahepatic Cholestasis of Pregnancy: Review of the Literature. Hepatology, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31975509/',
    },
    {
      org: 'RCOG',
      citation:
        'Royal College of Obstetricians and Gynaecologists. Obstetric Cholestasis (Green-top Guideline No. 43), 2011.',
      url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/obstetric-cholestasis-green-top-guideline-no-43/',
    },
  ],
};
