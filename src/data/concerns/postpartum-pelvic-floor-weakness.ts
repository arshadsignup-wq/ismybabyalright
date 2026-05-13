import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-pelvic-floor-weakness',
  title: 'Pelvic Floor Weakness After Birth',
  category: 'maternal',
  searchTerms: [
    'pelvic floor weakness after birth',
    'weak pelvic floor postpartum',
    'pelvic floor exercises after delivery',
    'heaviness in pelvis after baby',
    'pelvic organ prolapse postpartum',
    'kegels after birth',
    'pelvic floor recovery after baby',
    'feeling of pressure down below after birth',
  ],
  quickAnswer:
    'Pelvic floor weakness after birth is extremely common, affecting the majority of women who deliver vaginally and many who deliver by cesarean. The muscles, ligaments, and nerves of the pelvic floor are stretched and sometimes injured during pregnancy and delivery. With targeted pelvic floor exercises and time, most women see significant improvement within the first year postpartum.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the earliest days after delivery, your pelvic floor is still recovering from the significant strain of pregnancy and birth. You may feel heaviness, pressure, or a sensation of looseness in the pelvic area. This is normal and not a time to start intensive exercise. Gentle pelvic floor awareness, such as very light Kegel contractions if comfortable, can help reconnect you to these muscles.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'As initial healing progresses, you may begin to notice symptoms more clearly, such as mild urinary leaking when you cough, sneeze, or laugh. Your postpartum checkup around 6 weeks is a good time to discuss pelvic floor concerns with your provider. Gentle pelvic floor exercises (Kegels) can typically be started during this period if you feel ready.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'After your provider clears you for exercise, a more structured pelvic floor rehabilitation program can begin. Consistent daily Kegel exercises have been shown to significantly improve pelvic floor strength. If you feel a persistent bulge or heaviness in the vaginal area, bring this up with your provider, as it could indicate mild pelvic organ prolapse that benefits from physiotherapy.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Many women notice meaningful improvement in pelvic floor strength by this stage with consistent exercise. A pelvic floor physical therapist can provide personalized guidance if you are not seeing progress on your own. Returning to higher-impact exercise like running should be gradual and guided by how your pelvic floor responds.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'The pelvic floor continues to heal and strengthen throughout the first year. Most women who have been doing regular pelvic floor exercises report significant improvement by this time. If symptoms such as leaking, pressure, or heaviness persist despite consistent effort, a referral to a pelvic floor specialist is recommended.',
    },
  ],
  whenNormal: [
    'Some feeling of heaviness or looseness in the pelvic area in the first weeks after delivery',
    'Mild urinary leaking with coughing, sneezing, or laughing that gradually improves over weeks',
    'Reduced sensation or awareness of pelvic floor muscles initially that returns with practice',
    'Gradual improvement in strength and control with consistent Kegel exercises',
  ],
  whenToMention: [
    'Urinary leaking that is not improving after 6-8 weeks of consistent pelvic floor exercises',
    'A feeling of heaviness, bulging, or something coming down in the vaginal area',
    'Difficulty controlling gas or bowel movements that was not present before pregnancy',
    'Pain during intercourse that persists beyond the initial return to sexual activity',
  ],
  whenToActNow: [
    'You can see or feel tissue protruding from the vaginal opening',
    'You are unable to control your bladder or bowels at all and it is affecting your daily life',
    'You experience sudden severe pelvic pain along with fever or other signs of infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pelvic Support Problems. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/pelvic-support-problems',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Pelvic Floor Disorders. NICHD, 2023.',
      url: 'https://www.nichd.nih.gov/health/topics/pelvicfloor',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Physical Activity and Exercise After Pregnancy. ACOG Committee Opinion, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period',
    },
  ],
};
