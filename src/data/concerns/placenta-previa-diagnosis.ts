import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'placenta-previa-diagnosis',
  title: 'Placenta Previa',
  category: 'medical',
  searchTerms: [
    'placenta previa',
    'low lying placenta',
    'placenta covering cervix',
    'placenta previa bleeding',
    'low placenta ultrasound',
    'placenta previa c-section',
    'placenta moved up',
    'bleeding second trimester placenta',
    'marginal placenta previa',
    'complete placenta previa',
  ],
  quickAnswer:
    'Placenta previa means the placenta partially or completely covers the cervix. It is found in about 1 in 200 pregnancies at delivery. Many cases of low-lying placenta detected on mid-pregnancy ultrasound resolve on their own as the uterus grows. When placenta previa persists, a planned cesarean delivery is necessary, and with proper monitoring most outcomes are excellent.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'A low-lying placenta noted on first trimester ultrasound is very common and almost always resolves. As the uterus expands, the placenta appears to "migrate" upward away from the cervix. Providers generally reassure patients that this early finding is not concerning and will be re-evaluated later in pregnancy.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Placenta previa may be identified during the anatomy scan around 18-22 weeks. At this stage, about 90% of low-lying placentas will still move away from the cervix by the third trimester. A follow-up ultrasound is typically scheduled around 28-32 weeks to reassess the position. You may be advised to avoid intercourse and strenuous activity if placenta previa is diagnosed.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'If placenta previa persists into the third trimester, your provider will monitor you closely for bleeding. You may be placed on pelvic rest (no intercourse, tampons, or vaginal exams). Painless bright red vaginal bleeding is the hallmark symptom. If you have significant bleeding or the placenta fully covers the cervix, a cesarean delivery is planned, typically around 36-37 weeks.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery by cesarean for placenta previa, recovery is similar to any cesarean birth. In some cases, the placenta may have grown into the uterine wall (placenta accreta), which your provider will have screened for in advance. Postpartum hemorrhage risk is slightly higher, so your care team will monitor you closely after delivery.',
    },
  ],
  whenNormal: [
    'A low-lying placenta was noted on an early ultrasound and your provider says it will likely resolve',
    'A follow-up ultrasound shows the placenta has moved away from the cervix',
    'You have no vaginal bleeding and your baby is growing normally',
    'Your provider is monitoring the situation and has not expressed immediate concern',
  ],
  whenToMention: [
    'You have been diagnosed with placenta previa and experience any amount of vaginal spotting or bleeding',
    'You feel contractions or cramping before your scheduled delivery date',
    'You are unsure about activity restrictions or your delivery plan',
  ],
  whenToActNow: [
    'You have bright red painless vaginal bleeding that is heavy (soaking a pad in an hour) or does not stop',
    'You experience heavy bleeding with contractions, dizziness, or signs of shock (rapid heartbeat, feeling faint)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Placenta Previa. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/placenta-previa',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Placenta previa. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/placenta-previa.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Placenta previa - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/placenta-previa/symptoms-causes/syc-20352768',
    },
  ],
};
