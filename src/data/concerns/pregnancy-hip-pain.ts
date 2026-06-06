import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-hip-pain',
  title: 'Hip Pain During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'hip pain pregnancy',
    'hip pain when sleeping pregnant',
    'sore hips pregnancy',
    'hip pain at night pregnant',
    'can\'t sleep hip pain pregnant',
    'hip joint pain pregnancy',
    'hip stiffness pregnancy',
    'bursitis pregnancy',
    'hip pain side sleeping pregnant',
    'pregnancy hip exercises',
  ],
  quickAnswer:
    'Hip pain affects many pregnant people, particularly in the second and third trimesters. It is caused by the hormone relaxin loosening hip joints, weight gain changing your gait, the growing belly shifting your center of gravity, and the pressure of side sleeping. It is usually treatable with stretching, support pillows, and gentle exercise.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Hip pain may begin in the second trimester as the hormone relaxin loosens ligaments and joints. Gentle hip stretches, prenatal yoga, and swimming can help maintain mobility and reduce pain. A pregnancy pillow between your knees while sleeping can significantly improve nighttime hip pain.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Hip pain is often worst in the third trimester due to maximum weight and joint laxity. Sleeping on your side with a pillow between your knees and under your belly is recommended. Alternating sides during the night, warm baths, and gentle stretching before bed can help. A physical therapist experienced with pregnancy can provide targeted exercises.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Hip pain usually improves after delivery as relaxin levels decrease and joint stability returns. Recovery may take weeks to months. Gentle postpartum exercises focusing on hip and core strengthening can speed recovery. If hip pain persists beyond a few months, consult your provider.',
    },
  ],
  whenNormal: [
    'Aching hips, especially at night from side sleeping',
    'Hip stiffness after sitting or lying in one position',
    'Pain that improves with gentle movement, stretching, or position changes',
    'Discomfort that developed gradually alongside pregnancy changes',
  ],
  whenToMention: [
    'Hip pain is severe enough to limit walking or daily activities',
    'Pain is sharp and sudden rather than a gradual ache',
    'Hip pain is accompanied by significant groin or pubic bone pain, suggesting SPD',
  ],
  whenToActNow: [
    'Sudden severe hip pain with inability to bear weight, which could indicate a joint or bone issue',
    'Hip pain with swelling, redness, and warmth in the joint, which could suggest infection or inflammation',
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
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['symphysis-pubis-dysfunction', 'pregnancy-back-pain', 'pregnancy-sciatica'],
};
