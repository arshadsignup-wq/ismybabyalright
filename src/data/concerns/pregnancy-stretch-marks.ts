import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-stretch-marks',
  title: 'Stretch Marks During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'stretch marks pregnancy',
    'striae gravidarum',
    'stretch marks belly pregnant',
    'preventing stretch marks pregnancy',
    'red stretch marks pregnant',
    'itchy stretch marks',
    'stretch marks breasts pregnancy',
    'stretch marks hips pregnancy',
    'will stretch marks go away',
    'cocoa butter stretch marks pregnancy',
  ],
  quickAnswer:
    'Stretch marks (striae gravidarum) affect up to 90% of pregnant people and occur when the skin stretches rapidly as the belly, breasts, and hips grow. They appear as pink, red, or purple streaks and gradually fade to silver or white after pregnancy. Genetics plays the biggest role in whether you develop them.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Stretch marks often begin appearing in the second trimester as the belly starts to grow more rapidly. They most commonly appear on the abdomen, breasts, hips, and thighs. Keeping skin moisturized may help with comfort and itching. While no cream has been proven to prevent stretch marks, staying well-hydrated and gaining weight at a healthy pace may help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Stretch marks are most likely to appear or worsen in the third trimester when growth is fastest. They may initially look pink, red, or purple and feel slightly raised or itchy. This is the active stretching phase. Gentle moisturizing can help with itching. Try not to scratch, as this can worsen irritation.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, stretch marks gradually fade over months to years, typically becoming lighter, flatter, and less noticeable. They rarely disappear completely but become much less prominent. If you are concerned about their appearance, treatments like retinoids (not safe during breastfeeding), laser therapy, or microneedling can be discussed with a dermatologist after you are done nursing.',
    },
  ],
  whenNormal: [
    'Pink, red, or purple streaks on the belly, breasts, hips, or thighs that developed during pregnancy',
    'Mild itching where stretch marks are forming',
    'Stretch marks appear during periods of rapid growth',
    'Marks gradually fade to lighter, silver tones after delivery',
  ],
  whenToMention: [
    'Stretch marks are intensely itchy and the itching is spreading beyond the marks',
    'Stretch marks are accompanied by a rash or raised bumps, which could be PUPPP',
    'You have concerns about the appearance and want to discuss treatment options',
  ],
  whenToActNow: [
    'Severe widespread itching, especially on the palms and soles, which could be a sign of cholestasis of pregnancy rather than simple stretch marks',
    'Stretch marks become infected (red, hot, painful, or oozing)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Skin Conditions During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Striae Gravidarum. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK436005/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-skin-changes', 'pregnancy-itchy-skin', 'puppp-rash-pregnancy'],
};
