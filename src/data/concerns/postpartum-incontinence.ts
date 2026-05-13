import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-incontinence',
  title: 'Postpartum Urinary Incontinence',
  category: 'maternal',
  searchTerms: [
    'postpartum incontinence',
    'leaking urine after birth',
    'peeing when coughing after baby',
    'urinary incontinence after delivery',
    'bladder control after birth',
    'stress incontinence postpartum',
    'can\'t hold pee after having baby',
    'bladder leakage postpartum',
    'urge incontinence after birth',
  ],
  quickAnswer:
    'Urinary incontinence after birth is very common, affecting up to one-third of women in the postpartum period. The most common type is stress incontinence, where urine leaks with coughing, sneezing, laughing, or exercise, caused by the stretching and weakening of the pelvic floor during pregnancy and delivery. Pelvic floor exercises (Kegels) are highly effective, and most women see significant improvement within three to six months.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Some degree of urinary leaking is very common in the immediate postpartum period. The pelvic floor muscles and nerves have been stretched and possibly injured during delivery. You may find it difficult to feel or control these muscles at first. Wearing a pad for both postpartum bleeding and urinary leaking is practical during this time. Very gentle pelvic floor squeezes, if comfortable, can help start the recovery process.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Bladder control should gradually begin to improve during this period, though leaking with sudden movements may continue. Avoiding constipation by staying hydrated and eating fiber-rich foods is important, as straining puts additional pressure on the recovering pelvic floor. Discuss any ongoing incontinence at your postpartum checkup so your provider can assess your recovery.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'With regular pelvic floor exercises, many women notice meaningful improvement by this stage. If you are unsure whether you are doing Kegels correctly, a pelvic floor physical therapist can provide biofeedback to help you target the right muscles. Research shows that supervised pelvic floor training is more effective than doing exercises on your own.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Continued pelvic floor exercises should lead to ongoing improvement. Most women with mild to moderate stress incontinence see significant resolution by this point with consistent effort. If incontinence is not improving, or if you are also experiencing urge incontinence (a sudden, strong need to urinate that you cannot control), your provider may recommend further evaluation or treatment options.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Most postpartum urinary incontinence resolves within the first year. If leaking persists despite consistent pelvic floor exercises, additional treatments such as pessary devices, bladder training, or in some cases referral to a urogynecologist may be recommended. You do not need to accept incontinence as an inevitable consequence of motherhood; effective treatments are available.',
    },
  ],
  whenNormal: [
    'Some urinary leaking in the first weeks after delivery, especially with coughing, sneezing, or sudden movements',
    'Difficulty sensing or controlling the pelvic floor muscles in the early postpartum period',
    'Gradual improvement in bladder control over weeks to months with regular pelvic floor exercises',
  ],
  whenToMention: [
    'Urinary leaking that is not improving after six to eight weeks of consistent pelvic floor exercises',
    'You experience a strong, sudden urge to urinate that you cannot control (urge incontinence)',
    'Incontinence is causing you to avoid activities, exercise, or social situations',
    'You also notice difficulty controlling gas or bowel movements',
  ],
  whenToActNow: [
    'You are unable to urinate at all or experience painful urinary retention, which requires immediate medical attention',
    'You develop sudden loss of bladder and bowel control along with numbness in the saddle area, which could indicate a rare but serious nerve condition',
    'You have signs of a urinary tract infection such as burning with urination, fever, or blood in the urine along with incontinence',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Urinary Incontinence. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/urinary-incontinence',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Bladder Control Problems in Women. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-women',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pelvic Support Problems. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/pelvic-support-problems',
    },
  ],
};
