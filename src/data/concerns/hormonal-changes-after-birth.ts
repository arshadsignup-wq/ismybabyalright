import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hormonal-changes-after-birth',
  title: 'Hormonal Changes After Birth',
  category: 'maternal',
  searchTerms: [
    'hormonal changes after birth',
    'postpartum hormones',
    'mood swings after delivery',
    'baby blues hormones',
    'estrogen drop after birth',
    'postpartum hormone imbalance',
    'feeling emotional after having baby',
    'when do hormones regulate after birth',
    'crying for no reason postpartum',
  ],
  quickAnswer:
    'After birth, your body undergoes one of the most dramatic hormonal shifts in human physiology. Estrogen and progesterone, which were at their highest levels during pregnancy, plummet within the first 24 to 48 hours after delivery. These rapid changes are responsible for many common postpartum experiences, including mood swings, night sweats, and the "baby blues," and most symptoms stabilize within the first few months.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'The most dramatic hormonal changes happen in the first few days after delivery. Estrogen and progesterone levels drop sharply, while prolactin rises if you are breastfeeding. Up to 80% of new mothers experience the "baby blues" during this time, with weepiness, mood swings, irritability, and anxiety that typically peak around day three to five and resolve by two weeks postpartum.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Your hormones are still adjusting during this period. If you are breastfeeding, prolactin and oxytocin levels remain elevated, while estrogen stays lower than pre-pregnancy levels. You may notice changes in your skin, hair, appetite, and libido. If mood symptoms from the baby blues have not improved or are worsening beyond two weeks, this may indicate postpartum depression and should be discussed with your provider.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Hormonal levels continue to stabilize, though breastfeeding mothers will experience a different hormonal profile than those who are not breastfeeding. Lower estrogen levels can cause vaginal dryness, reduced libido, and changes in skin texture. These are normal effects of the postpartum hormonal state and not a sign that something is wrong.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Many women begin to feel their hormones leveling out during this period. If you have stopped breastfeeding, your menstrual cycle may return, signaling that estrogen and progesterone are cycling normally again. If you are still breastfeeding, the hormonal profile associated with lactation continues, and your period may stay away for months longer.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'For most women, hormonal balance has largely returned to pre-pregnancy levels by this stage, particularly if breastfeeding has ended or significantly decreased. The return of your menstrual cycle is a reliable sign that your reproductive hormones are cycling again. If you continue to feel that something is off, a blood test can check thyroid function and other hormone levels.',
    },
  ],
  whenNormal: [
    'Mood swings, tearfulness, and irritability in the first two weeks after delivery (baby blues)',
    'Hot flashes, night sweats, and changes in appetite in the early postpartum weeks',
    'Reduced libido and vaginal dryness, especially while breastfeeding',
    'Skin changes such as acne or dryness as hormones fluctuate',
  ],
  whenToMention: [
    'Mood symptoms such as persistent sadness, hopelessness, or anxiety that continue beyond two weeks postpartum',
    'You feel detached from your baby or have intrusive, frightening thoughts',
    'Extreme fatigue, weight changes, or feeling cold that could indicate a thyroid problem',
    'You feel that your mood or emotional state is significantly interfering with your ability to function or care for your baby',
  ],
  whenToActNow: [
    'You have thoughts of harming yourself or your baby',
    'You feel unable to care for yourself or your baby due to overwhelming depression, anxiety, or confusion',
    'You experience sudden severe mood changes with disorientation, hallucinations, or paranoia, which could indicate postpartum psychosis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Depression. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/postpartum-depression',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Perinatal Depression. NIMH, 2023.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum. ACOG Clinical Practice Guideline, 2023.',
      url: 'https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum',
    },
  ],
};
