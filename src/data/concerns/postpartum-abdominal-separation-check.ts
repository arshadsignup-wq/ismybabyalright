import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-abdominal-separation-check',
  title: 'Diastasis Recti - Postpartum Abdominal Separation',
  category: 'maternal',
  searchTerms: [
    'diastasis recti postpartum',
    'abdominal separation after pregnancy',
    'postpartum belly gap',
    'stomach muscles separated after baby',
    'diastasis recti check',
    'postpartum pooch won\'t go away',
    'ab separation exercises',
    'diastasis recti treatment',
    'core recovery after pregnancy',
    'belly still looks pregnant months later',
    'diastasis recti physical therapy',
  ],
  quickAnswer:
    'Diastasis recti abdominis (DRA) is a separation of the rectus abdominis muscles (the "six-pack" muscles) along the midline of the abdomen. It occurs in approximately 60% of women at 6 weeks postpartum and about 30% still have it at 12 months. The separation is caused by pregnancy hormones that soften connective tissue combined with the mechanical stretching of the growing uterus. While some gap closure occurs naturally in the first 8 weeks postpartum, specific core rehabilitation exercises (not traditional crunches or sit-ups) can help restore function. Pelvic floor physical therapy is the gold-standard treatment.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'In the immediate postpartum period, some degree of abdominal separation is nearly universal. During this time, focus on gentle movement, proper breathing, and avoiding activities that put excessive strain on the abdominal wall (heavy lifting, straining, sit-ups, planks). You can check for diastasis recti at home by lying on your back with knees bent, placing your fingers above the belly button, and gently lifting your head. If you can fit more than 2 finger-widths in the gap between the muscles, this indicates significant separation. Ask your provider about it at your postpartum visit.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'After your 6-week postpartum check, a pelvic floor physical therapist can assess your diastasis recti and create a rehabilitation program. Effective exercises focus on deep core activation (transverse abdominis and pelvic floor muscles) rather than superficial abdominal exercises. Avoid crunches, sit-ups, planks, and heavy lifting until assessed, as these can worsen the separation. A physical therapist can teach you proper core engagement during daily activities like lifting your baby, pushing a stroller, and getting out of bed. Most women see significant improvement with targeted rehabilitation.',
    },
    {
      ageRange: 'Baby 6 months and beyond',
      context:
        'If diastasis recti persists beyond 6-12 months despite consistent physical therapy, it may not fully close on its own. However, the functional strength of the connective tissue (linea alba) matters more than the width of the gap. Many women with a persistent gap function well with proper core strength. In severe cases with functional problems (back pain, pelvic floor dysfunction, hernia), surgical repair (abdominoplasty) may be considered, but this is typically not recommended until you have completed your family. Insurance may cover repair if functional issues are documented.',
    },
  ],
  whenNormal: [
    'You have a small (1-2 finger-width) gap that is gradually closing in the first few months postpartum.',
    'Your core function is improving and you can engage your deep core muscles during daily activities.',
    'You are working with a physical therapist and seeing progressive improvement.',
  ],
  whenToMention: [
    'You have a gap wider than 2 finger-widths that is not improving after 6-8 weeks postpartum.',
    'You have back pain, pelvic floor problems (incontinence, prolapse symptoms), or difficulty with daily activities related to core weakness.',
    'You want a referral to a pelvic floor physical therapist for assessment and treatment.',
    'You notice a visible bulge or "coning" of your abdomen when you sit up or strain.',
  ],
  whenToActNow: [
    'You notice a bulge near or above the belly button that increases with straining, which may indicate an umbilical or ventral hernia requiring surgical evaluation.',
    'You have severe abdominal pain or your abdominal wall feels significantly unstable.',
    'You have signs of incarcerated hernia: a bulge that cannot be pushed back in, severe pain, nausea, or vomiting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-body-recovery-timeline',
    'postpartum-back-pain-causes',
    'losing-baby-weight-safely',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Physical Activity and Exercise During Pregnancy and the Postpartum Period. Committee Opinion No. 804, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Diastasis Recti Abdominis During Pregnancy and the Postpartum Period. British Journal of Sports Medicine, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29991510/',
    },
    {
      org: 'APTA',
      citation:
        'American Physical Therapy Association. Postpartum Pelvic Floor and Core Recovery.',
      url: 'https://www.apta.org/patient-care/evidence-based-practice-resources/womens-health',
    },
  ],
};
