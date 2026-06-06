import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'symphysis-pubis-dysfunction',
  title: 'Symphysis Pubis Dysfunction (SPD/PGP)',
  category: 'maternal',
  searchTerms: [
    'symphysis pubis dysfunction',
    'SPD pregnancy',
    'pelvic girdle pain pregnancy',
    'PGP pregnancy',
    'pubic bone pain pregnant',
    'clicking pelvis pregnancy',
    'pain between legs pregnant',
    'groin pain pregnancy',
    'can\'t walk pregnancy pelvic pain',
    'pelvis separating pregnancy',
  ],
  quickAnswer:
    'Symphysis pubis dysfunction (SPD), also called pelvic girdle pain (PGP), occurs when the joint at the front of the pelvis becomes too loose during pregnancy, causing pain, instability, and difficulty walking. It affects about 1 in 5 pregnant people to some degree. It is caused by the hormone relaxin and the weight of the growing baby.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'SPD may begin in the second trimester as relaxin loosens the pubic symphysis joint. Symptoms include pain at the front of the pelvis that may radiate to the groin, inner thighs, or lower back. Pain often worsens with walking, climbing stairs, getting in and out of bed, or standing on one leg. A pelvic support belt and physical therapy can help significantly.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'SPD often worsens in the third trimester. Keeping your knees together when turning in bed, sitting down to get dressed, avoiding wide-legged positions, and using a pillow between your legs at night can help. A physiotherapist specializing in pregnancy can teach you techniques to manage daily activities with less pain.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'Let your birth team know about your SPD so they can help you find comfortable positions during labor. Avoid pushing your legs too far apart. Water birth may be helpful as buoyancy reduces joint stress. SPD does not prevent vaginal delivery in most cases.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'SPD usually improves within weeks to months after delivery as relaxin levels decrease. Postpartum physiotherapy can help speed recovery. In rare cases, the pubic symphysis separates significantly (diastasis symphysis pubis), which requires specialized care. Most people recover fully.',
    },
  ],
  whenNormal: [
    'Mild to moderate pubic bone pain that worsens with certain activities',
    'Pain when walking, climbing stairs, or getting out of bed',
    'Clicking or grinding sensation in the pelvic area',
    'Pain managed with position modifications and a support belt',
  ],
  whenToMention: [
    'Pelvic pain is severe enough to significantly limit mobility',
    'You need crutches or a wheelchair due to pelvic pain',
    'Pain is not improving with recommended strategies',
  ],
  whenToActNow: [
    'Sudden severe pain in the pubic area with a popping sensation, which could indicate symphysis separation',
    'Inability to walk or bear weight on either leg',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Back Pain During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/back-pain-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pelvic Girdle Pain in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557619/',
    },
    {
      org: 'NICE',
      citation:
        'National Institute for Health and Care Excellence. Pelvic Girdle Pain. NICE, 2023.',
      url: 'https://cks.nice.org.uk/topics/pelvic-girdle-pain/',
    },
  ],
  relatedConcernSlugs: ['pregnancy-hip-pain', 'pregnancy-back-pain', 'pregnancy-pelvic-pressure'],
};
