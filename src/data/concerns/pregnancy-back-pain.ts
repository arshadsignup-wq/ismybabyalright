import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-back-pain',
  title: 'Back Pain During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'back pain pregnancy',
    'lower back pain pregnant',
    'back ache pregnancy',
    'pregnancy back pain relief',
    'upper back pain pregnant',
    'spine pain during pregnancy',
    'lumbar pain pregnancy',
    'back pain second trimester',
    'back pain third trimester',
    'posterior pelvic pain pregnancy',
  ],
  quickAnswer:
    'Back pain affects approximately 50-70% of pregnant people and is most common in the second and third trimesters. It is usually caused by the shifting center of gravity, weight gain, hormonal changes that loosen ligaments, and postural adjustments as the belly grows.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Back pain in the first trimester is less common but can occur due to hormonal changes, particularly the hormone relaxin, which loosens ligaments and joints. Early pregnancy back pain is usually mild. If severe back pain occurs in early pregnancy, especially with bleeding, contact your provider to rule out other causes.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Back pain typically begins or worsens in the second trimester as the uterus grows and your center of gravity shifts. Lumbar (lower) back pain and posterior pelvic pain are the most common types. Staying active with gentle exercise like walking or prenatal yoga, wearing supportive shoes, using a pregnancy support belt, and sleeping with a pillow between your knees can all help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Back pain often peaks in the third trimester. The additional weight, further postural changes, and preparation for labor all contribute. Warm (not hot) compresses, prenatal massage, gentle stretching, and pelvic tilts can provide relief. Avoid standing for long periods and consider seeing a physical therapist if pain is significant.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Back pain often improves after delivery but may persist for weeks to months as your body recovers. Breastfeeding posture, carrying your baby, and weakened core muscles can contribute. Gentle postpartum exercises focusing on core strength can help. Talk to your provider if back pain persists beyond a few months.',
    },
  ],
  whenNormal: [
    'Dull, aching lower back pain that worsens with standing or activity and improves with rest',
    'Pain that developed gradually as your pregnancy progressed',
    'Mild to moderate pain managed with position changes, warm compresses, or gentle stretching',
    'Pain on one or both sides of the lower back or posterior pelvis',
  ],
  whenToMention: [
    'Back pain is severe enough to interfere with daily activities or sleep',
    'Pain does not improve with rest, position changes, or home remedies',
    'You have numbness or tingling running down your legs',
  ],
  whenToActNow: [
    'Sudden severe back pain, especially with vaginal bleeding, which could indicate placental abruption or preterm labor',
    'Rhythmic back pain that comes and goes at regular intervals, which may be back labor or preterm labor contractions',
    'Back pain with fever, painful urination, or other signs of kidney infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Back Pain During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/back-pain-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Low Back Pain in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539776/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Back Pain During Pregnancy: 7 Tips for Relief. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy/art-20046080',
    },
  ],
  relatedConcernSlugs: ['pregnancy-sciatica', 'pregnancy-hip-pain', 'back-labor'],
};
