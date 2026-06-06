import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-shortness-of-breath',
  title: 'Breathing Difficulty in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'shortness of breath pregnancy',
    'can\'t breathe pregnant',
    'breathing difficulty pregnancy',
    'dyspnea pregnancy',
    'out of breath pregnant',
    'hard to breathe third trimester',
    'breathless pregnancy',
    'pregnancy breathing exercises',
    'winded easily pregnant',
    'shortness of breath climbing stairs pregnant',
  ],
  quickAnswer:
    'Shortness of breath affects up to 75% of pregnant people. It is caused by hormonal changes (progesterone increases respiratory drive), increased oxygen demand, and the growing uterus pushing the diaphragm upward. While usually normal, sudden or severe breathlessness should be evaluated promptly.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Breathlessness can begin surprisingly early due to progesterone, which increases your breathing rate and depth. You may feel more aware of your breathing even without exertion. This is normal and does not mean you or your baby are not getting enough oxygen.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Shortness of breath may continue as blood volume increases and oxygen demands rise. Regular gentle exercise like walking or swimming can actually improve your cardiovascular fitness and help manage breathlessness. Good posture and sleeping slightly propped up can also help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Breathlessness is often worst in the third trimester as the uterus pushes the diaphragm up by about 4 centimeters. You may feel winded doing simple activities like talking or climbing stairs. In the final weeks, when the baby drops into the pelvis (lightening), many people experience relief. Sitting up straight, sleeping propped up, and pacing activities can help.',
    },
  ],
  whenNormal: [
    'Gradual onset of breathlessness that worsened as pregnancy progressed',
    'Feeling winded with activities that previously felt easy',
    'Breathlessness that improves with rest or changing position',
    'No chest pain, wheezing, coughing, or blue lips accompanying the breathlessness',
  ],
  whenToMention: [
    'Shortness of breath is significantly limiting your daily activities',
    'You have a history of asthma that is worsening during pregnancy',
    'Breathlessness is accompanied by persistent cough or wheezing',
  ],
  whenToActNow: [
    'Sudden severe shortness of breath, especially with chest pain, rapid heartbeat, or calf swelling, which could indicate a pulmonary embolism',
    'Difficulty breathing with blue or gray lips, fingertips, or face',
    'Shortness of breath with fever and cough, suggesting possible pneumonia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pregnancy FAQs. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Dyspnea in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430956/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-blood-clot-risk', 'pregnancy-anemia'],
};
