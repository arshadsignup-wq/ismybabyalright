import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-menstruation-return-irregular',
  title: 'Irregular Periods After Baby: What to Expect',
  category: 'maternal',
  searchTerms: [
    'irregular periods after baby',
    'postpartum period irregular',
    'periods after birth heavy',
    'first period after baby',
    'irregular cycle postpartum',
    'menstruation after delivery',
    'period changes after pregnancy',
    'postpartum menstrual cycle different',
    'heavy periods after birth',
    'period cramps worse after baby',
  ],
  quickAnswer:
    'It is completely normal for your menstrual cycle to be irregular when it first returns after childbirth. Hormonal fluctuations, breastfeeding, sleep disruption, and stress all affect your cycle. The first few periods may be heavier, longer, or more painful than what you experienced before pregnancy. Most cycles regulate within six to twelve months of returning, though some people notice permanent changes in their cycle pattern.',
  byAge: [
    {
      ageRange: '0-6 months postpartum',
      context:
        'If you are not breastfeeding, your period may return as early as six to eight weeks postpartum. If you are exclusively breastfeeding, menstruation is often delayed for six months or longer due to elevated prolactin levels suppressing ovulation. It is important to distinguish your first true period from postpartum lochia (bleeding that occurs in the first six weeks after delivery). Lochia typically changes from red to pink to white and gradually stops, while a period begins as fresh red bleeding after lochia has resolved.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'This is when most people see their period return, particularly as breastfeeding frequency decreases or solids are introduced. Your first several cycles may be irregular in timing, flow, and duration. Periods may be heavier or lighter than before pregnancy, and cycle length may vary from month to month. This irregularity is normal as your hormones recalibrate. Ovulation may occur before your first period, so contraception is important if you want to avoid pregnancy.',
    },
    {
      ageRange: '12-18 months postpartum',
      context:
        'By twelve to eighteen months postpartum, most people have established a more regular cycle, though it may differ from your pre-pregnancy pattern. Some people find their periods are actually less painful after childbirth, while others experience worsened symptoms. If you are still breastfeeding frequently, irregularity may continue until you wean or significantly reduce feeding frequency. Persistent irregularity may also be related to thyroid dysfunction, which is common in the postpartum period.',
    },
    {
      ageRange: '18+ months postpartum',
      context:
        'If your cycles remain very irregular more than eighteen months postpartum, or if you have weaned from breastfeeding and periods still have not returned, it is worth discussing with your provider. Conditions to consider include postpartum thyroiditis, polycystic ovary syndrome (PCOS), or other hormonal imbalances. Stress, significant weight changes, and excessive exercise can also affect menstrual regularity. A simple blood test can check thyroid function and hormone levels.',
    },
  ],
  whenNormal: [
    'Your first few periods after birth are heavier, longer, or more crampy than your pre-pregnancy periods',
    'Cycles are irregular in length for the first several months after your period returns',
    'Your period has not returned while you are exclusively breastfeeding',
    'You notice small clots in your first few postpartum periods',
  ],
  whenToMention: [
    'Periods are extremely heavy, soaking through a pad or tampon every one to two hours for several hours',
    'Your period has not returned within three months of stopping breastfeeding',
    'Periods are accompanied by severe pain that interferes with daily activities',
    'You are experiencing bleeding between periods or after intercourse',
  ],
  whenToActNow: [
    'You are soaking through more than one pad per hour for more than two hours, which may indicate hemorrhage',
    'You pass large clots (bigger than a golf ball) accompanied by dizziness or lightheadedness',
    'You develop a fever with abnormal vaginal bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-period-breastfeeding-return',
    'postpartum-fertility-return-breastfeeding',
    'postpartum-thyroiditis-symptoms',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Changing Body: Puberty, Periods, and Beyond. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-changing-body',
    },
    {
      org: 'NIH',
      citation:
        'Jackson E, Glasier A. Return of Ovulation and Menses in Postpartum Nonlactating Women. Obstetrics & Gynecology, 2011.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21422856/',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Your Body After the Birth. NHS, 2024.',
      url: 'https://www.nhs.uk/conditions/baby/support-and-services/your-body-after-the-birth/',
    },
  ],
};
