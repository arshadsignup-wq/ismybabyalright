import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-anxiety',
  title: 'Anxiety During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'anxiety during pregnancy',
    'worried about baby',
    'pregnancy anxiety',
    'prenatal anxiety',
    'panic attacks pregnant',
    'can\'t stop worrying pregnant',
    'anxiety first pregnancy',
    'health anxiety pregnancy',
    'pregnancy worries normal',
    'scared something wrong with baby',
    'antenatal anxiety',
  ],
  quickAnswer:
    'Some worry during pregnancy is completely normal, but anxiety that is persistent, intense, or interfering with your daily life affects approximately 15-20% of pregnant people. Prenatal anxiety is treatable, and getting support early benefits both you and your baby. You deserve to feel better.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Anxiety is common in the first trimester, especially about miscarriage risk, the pregnancy being healthy, and adjusting to the news. Hormonal changes can amplify anxious feelings. Some worry is normal - it shows you care. But if anxiety is constant, overwhelming, or causing physical symptoms like racing heart, difficulty breathing, or inability to eat or sleep, talk to your provider.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Anxiety may ease for some as the pregnancy feels more established, especially after hearing the heartbeat or passing prenatal screenings. For others, anxiety continues or shifts to new worries about the baby\'s development, anatomy scan findings, or being a good parent. Mindfulness, prenatal yoga, and talking about your worries can help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Anxiety often increases in the third trimester as birth approaches. Worries about labor, delivery, the baby\'s health, and readiness for parenthood are common. Birth preparation classes, creating a birth plan, and having honest conversations with your provider and support people can help manage these fears.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Prenatal anxiety is a significant risk factor for postpartum anxiety and depression. If you experienced anxiety during pregnancy, be proactive about postpartum mental health support. Let your provider know so they can help monitor and support you after delivery.',
    },
  ],
  whenNormal: [
    'Occasional worries about the baby\'s health or the upcoming birth that come and go',
    'Mild nervousness before prenatal appointments or tests',
    'Worries that you can manage and that do not dominate your day',
    'Anxiety that improves with reassurance, relaxation techniques, or talking to loved ones',
  ],
  whenToMention: [
    'Anxiety is persistent and present most days for more than two weeks',
    'You are having difficulty sleeping, eating, or concentrating due to worry',
    'Anxiety is causing you to avoid certain activities, appointments, or social situations',
    'You are having physical symptoms of anxiety like racing heart, shortness of breath, or nausea unrelated to morning sickness',
  ],
  whenToActNow: [
    'You are having panic attacks (sudden intense fear with physical symptoms like chest pain, difficulty breathing, or feeling of doom)',
    'Anxiety has become so severe that you cannot function in daily life',
    'You are having thoughts of harming yourself or your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum. ACOG Clinical Practice Guideline No. 4, 2023.',
      url: 'https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Perinatal Depression. NIMH, 2023.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Anxiety During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/anxiety-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['prenatal-depression', 'tokophobia-fear-of-childbirth', 'pregnancy-insomnia'],
};
