import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diastasis-recti-postpartum',
  title: 'Diastasis Recti (Abdominal Separation)',
  category: 'maternal',
  searchTerms: [
    'diastasis recti postpartum',
    'abdominal separation after pregnancy',
    'belly gap after birth',
    'stomach muscles separated after baby',
    'doming belly when sitting up postpartum',
    'bulge down middle of stomach after birth',
    'ab separation after c-section',
    'how to fix diastasis recti',
  ],
  quickAnswer:
    'Diastasis recti is a separation of the left and right sides of the rectus abdominis (the "six-pack" muscles) along the midline of the abdomen. It is very common during and after pregnancy, occurring in up to two-thirds of women by the third trimester. Many cases resolve on their own within the first few months postpartum, and targeted core rehabilitation exercises can help close the gap.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the immediate postpartum period, nearly all women will have some degree of abdominal separation. Your uterus is still shrinking back to its pre-pregnancy size, and the abdominal wall is stretched and lax. This is not the time to test for or worry about diastasis recti. Focus on rest and basic recovery.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'As swelling decreases and your uterus continues to involute, you may notice a visible ridge or gap running down the middle of your abdomen, especially when you strain to sit up. Avoid crunches and heavy lifting during this period. Gentle core engagement exercises, like diaphragmatic breathing and gentle abdominal bracing, can be started safely.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Your postpartum checkup is a good opportunity to have your provider assess for diastasis recti. A gap of about one to two finger-widths is common and often improves with targeted exercise. A physical therapist specializing in postpartum recovery can teach you safe core strengthening techniques that bring the muscles back together rather than push them further apart.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'With consistent rehabilitation exercises, many women see significant improvement by this stage. The focus should be on deep core muscles, including the transverse abdominis, rather than traditional abdominal exercises like crunches or sit-ups, which can worsen the separation. Progress is gradual but steady for most women.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'If the gap has not closed significantly despite consistent exercise, discuss next steps with your provider. Most women achieve functional recovery even if a small gap remains. In rare, severe cases where the separation significantly affects core function or quality of life, surgical repair may be discussed, but this is typically considered only after conservative treatment has been fully tried.',
    },
  ],
  whenNormal: [
    'A soft, somewhat wide gap along the midline of the abdomen in the first weeks after delivery',
    'A visible bulge or ridge along the midline when you strain to sit up from lying down',
    'Gradual narrowing of the gap over the first few months with appropriate exercise',
    'Some residual looseness in the abdominal wall that improves slowly over months',
  ],
  whenToMention: [
    'The gap feels wider than two finger-widths at your 6-week postpartum visit',
    'You have lower back pain that you suspect may be related to poor core support',
    'You notice doming or coning of your abdomen during everyday activities like lifting your baby',
    'Your symptoms are not improving after several weeks of targeted core rehabilitation',
  ],
  whenToActNow: [
    'You notice a painful bulge in your abdomen that does not flatten when you lie down, which could indicate a hernia',
    'You have severe abdominal pain with swelling, nausea, or vomiting near the site of the separation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Exercise After Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/exercise-after-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'Sperstad JB, et al. Diastasis recti abdominis during pregnancy and 12 months after childbirth. British Journal of Sports Medicine, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27324871/',
    },
    {
      org: 'NIH',
      citation:
        'Benjamin DR, et al. Effects of exercise on diastasis of the rectus abdominis muscle in the antenatal and postnatal periods: a systematic review. Physiotherapy, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24996878/',
    },
  ],
};
