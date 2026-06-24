import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-infection-sepsis-warning-signs',
  title: 'Postpartum Infection and Sepsis - Warning Signs Every Mother Should Know',
  category: 'maternal',
  searchTerms: [
    'postpartum infection signs',
    'postpartum sepsis symptoms',
    'infection after giving birth',
    'c-section infection signs',
    'postpartum fever when to worry',
    'signs of sepsis after birth',
    'wound infection after delivery',
    'uterine infection postpartum',
    'endometritis symptoms',
    'postpartum sepsis how fast',
    'infection after birth how common',
    'fever after delivery emergency',
    'maternal sepsis warning signs',
    'postpartum infection treatment',
    'sepsis after c-section',
  ],
  quickAnswer:
    'Infections and sepsis are the second leading cause of pregnancy-related deaths. Over 43% of pregnancy-related deaths occur in the 6 weeks after delivery, yet many mothers receive only a single checkup during this period. Warning signs of postpartum infection include fever over 100.4F, foul-smelling vaginal discharge, increasing abdominal pain, redness or drainage from a C-section incision, painful urination, and flu-like symptoms that worsen rather than improve. Trust your instincts - if you feel something is wrong, seek care immediately.',
  byAge: [
    {
      ageRange: 'First 48 hours postpartum',
      context:
        'A mild temperature elevation right after delivery can be normal, especially after a long labor. However, a fever of 100.4F (38C) or higher that persists beyond the first 24 hours or develops after initial discharge requires evaluation. The most common early postpartum infections are endometritis (uterine lining infection), wound infection from a C-section or episiotomy, and urinary tract infection from catheterization. If you had a C-section, watch the incision closely for redness spreading beyond the edges, warmth, swelling, or drainage.',
    },
    {
      ageRange: 'First 1-2 weeks postpartum',
      context:
        'This is the highest-risk window for postpartum infection. Endometritis symptoms include fever, lower abdominal pain, and foul-smelling lochia (postpartum bleeding). C-section wound infections typically appear 4-7 days after surgery. Mastitis (breast infection) can also develop, causing breast pain, redness, warmth, and fever. Sepsis can develop rapidly from any of these infections. Warning signs of sepsis include: fever or abnormally low temperature, rapid heart rate, rapid breathing, confusion or disorientation, extreme pain, and feeling like you might die. If you experience these, call 911.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Late-onset infections can still occur weeks after delivery. If you develop a new fever, worsening pain (especially abdominal or pelvic), foul-smelling discharge, or feel progressively sicker rather than better, do not wait for your 6-week checkup. Contact your OB or midwife or go to the emergency room. Delayed treatment of postpartum infection is one of the most preventable causes of maternal mortality. You know your body - if something feels wrong, it likely is.',
    },
  ],
  whenNormal: [
    'Mild cramping and lochia (postpartum bleeding) that gradually decreases over 2-6 weeks.',
    'Brief low-grade temperature elevation in the first 24 hours after delivery that resolves.',
    'Breast tenderness during milk "coming in" around days 3-5 without fever or redness.',
    'Gradual improvement in energy and pain levels day by day after delivery.',
  ],
  whenToMention: [
    'Your lochia has a strong odor or changes from pink/brown to bright red after initially decreasing.',
    'You notice mild redness around your C-section incision that is not spreading.',
    'You have painful or burning urination after delivery, even without fever.',
    'You are feeling progressively more tired instead of gradually better after the first week.',
  ],
  whenToActNow: [
    'Fever of 100.4F (38C) or higher at any point after the first 24 hours postpartum.',
    'Foul-smelling vaginal discharge combined with fever, chills, or abdominal pain.',
    'C-section incision that is increasingly red, warm, draining pus, or opening up.',
    'Signs of sepsis: rapid heart rate, rapid breathing, confusion, extreme pain, feeling like something is very wrong.',
    'Heavy vaginal bleeding that soaks more than one pad per hour for two consecutive hours.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-depression-signs',
    'postpartum-anxiety-symptoms',
    'postpartum-preeclampsia-signs',
  ],
  sources: [
    {
      org: 'ACOG',
      citation: 'ACOG - Optimizing Postpartum Care and Warning Signs',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care',
    },
    {
      org: 'CDC',
      citation: 'CDC - Pregnancy-Related Deaths: Data and Statistics',
      url: 'https://www.cdc.gov/maternal-mortality/php/data-research/index.html',
    },
    {
      org: 'NIH',
      citation: 'NIH MedlinePlus - Pregnancy-Related Deaths and Sepsis',
      url: 'https://magazine.medlineplus.gov/article/pregnancy-related-deaths-are-on-the-rise-and-sepsis-is-a-big-reason/',
    },
  ],
};
