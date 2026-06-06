import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-insomnia',
  title: 'Insomnia and Sleep Difficulties in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'insomnia pregnancy',
    'can\'t sleep pregnant',
    'pregnancy sleep problems',
    'waking up at night pregnant',
    'trouble falling asleep pregnant',
    'pregnancy insomnia third trimester',
    'sleep position pregnancy',
    'sleeping on back pregnant',
    'pregnancy sleep tips',
    'exhausted but can\'t sleep pregnant',
  ],
  quickAnswer:
    'Insomnia affects up to 78% of pregnant people at some point during pregnancy. It can be caused by physical discomfort, frequent urination, hormonal changes, anxiety, and difficulty finding a comfortable sleeping position. While frustrating, it is very common and there are many strategies that can help improve sleep quality.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Despite extreme fatigue, many people have difficulty sleeping in the first trimester due to nausea, frequent urination, and hormonal changes. Establishing a regular sleep schedule, keeping the bedroom cool and dark, and addressing nausea before bed can help. It is still safe to sleep in any position during the first trimester.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Sleep often improves somewhat in the second trimester as nausea decreases and energy returns. Begin practicing side sleeping, ideally on your left side, which optimizes blood flow to the baby. A pregnancy pillow between your knees and behind your back can improve comfort. Vivid dreams may also disrupt sleep during this time.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Insomnia is most common and severe in the third trimester. Physical discomfort, frequent bathroom trips, heartburn, leg cramps, and baby movements all contribute. Limit fluids before bed, elevate your head for heartburn, and try relaxation techniques like deep breathing or guided meditation. If you wake at night and cannot fall back asleep within 20 minutes, get up and do a quiet, non-stimulating activity until you feel sleepy.',
    },
  ],
  whenNormal: [
    'Difficulty falling or staying asleep that worsens as pregnancy progresses',
    'Waking frequently to urinate or due to physical discomfort',
    'Feeling tired despite getting some sleep',
    'Sleep improves with position changes, pregnancy pillows, or relaxation techniques',
  ],
  whenToMention: [
    'Insomnia is severe and persistent, significantly affecting your daily function',
    'You are experiencing loud snoring or gasping during sleep, which could indicate sleep apnea',
    'Lack of sleep is contributing to anxiety or depression',
  ],
  whenToActNow: [
    'You are so exhausted that you are unable to function safely (for example, falling asleep while driving)',
    'Insomnia is accompanied by severe anxiety, panic attacks, or thoughts of self-harm',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Sleep During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/sleep-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sleep Disorders in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK564330/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Sleep During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/sleep-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-vivid-dreams', 'pregnancy-restless-legs', 'pregnancy-anxiety'],
};
