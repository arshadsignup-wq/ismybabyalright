import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'prenatal-depression',
  title: 'Depression During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'depression during pregnancy',
    'prenatal depression',
    'antenatal depression',
    'sad during pregnancy',
    'crying all the time pregnant',
    'feeling hopeless pregnant',
    'no motivation pregnancy',
    'depressed while pregnant',
    'pregnancy depression treatment',
    'antidepressants safe pregnancy',
    'don\'t feel happy about pregnancy',
  ],
  quickAnswer:
    'Depression during pregnancy (prenatal or antenatal depression) affects approximately 10-20% of pregnant people. It is a real medical condition caused by a combination of hormonal changes, life stressors, and individual risk factors. It is not a character flaw, and it is treatable. Getting help during pregnancy is important for both your health and your baby\'s well-being.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Depression may begin or worsen in the first trimester due to hormonal changes, physical discomfort, and the emotional adjustment to pregnancy. Symptoms include persistent sadness, loss of interest in activities, changes in appetite or sleep beyond normal pregnancy changes, difficulty concentrating, and feelings of worthlessness. If you had depression before pregnancy, talk to your provider early about managing it during pregnancy.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'While many people feel better physically in the second trimester, depression does not always follow the same pattern. If you are feeling persistently sad, numb, or disconnected from your pregnancy, this is not something you should try to push through alone. Talk therapy (especially cognitive behavioral therapy), support groups, exercise, and sometimes medication can help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Depression in the third trimester can be compounded by anxiety about birth, physical discomfort, and sleep deprivation. Untreated prenatal depression is a strong risk factor for postpartum depression. Getting treatment now helps protect your postpartum mental health. There are antidepressant medications that are considered safe during pregnancy.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'If you experienced depression during pregnancy, you have a higher risk of postpartum depression. Having a support plan in place before delivery is important. Talk to your provider about monitoring, treatment continuation, and postpartum support resources. You are not alone, and help is available.',
    },
  ],
  whenNormal: [
    'Occasional mood swings or tearfulness related to hormonal changes',
    'Brief periods of feeling overwhelmed that pass relatively quickly',
    'Mixed emotions about pregnancy that include both excitement and worry',
    'Emotional reactions that are manageable and do not interfere with daily life',
  ],
  whenToMention: [
    'Persistent sadness, emptiness, or numbness lasting more than two weeks',
    'Loss of interest or pleasure in activities you normally enjoy',
    'Changes in sleep or appetite that go beyond typical pregnancy symptoms',
    'Feelings of guilt, worthlessness, or being a burden to others',
    'Difficulty bonding with or feeling connected to your pregnancy',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or ending your life - call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room',
    'You are having thoughts of harming your baby',
    'You are unable to care for yourself or function in daily activities',
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
        'March of Dimes. Depression During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/depression-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-anxiety', 'postpartum-depression-in-partners'],
};
