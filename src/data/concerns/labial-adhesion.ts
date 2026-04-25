import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'labial-adhesion',
  title: 'My Baby Has Labial Adhesion',
  category: 'medical',
  searchTerms: [
    'baby labial adhesion',
    'labial fusion baby',
    'baby girl labia stuck together',
    'labial adhesion treatment',
    'estrogen cream labial adhesion',
    'baby girl genital abnormality',
    'labia fused baby',
    'labial adhesion symptoms',
    'baby vagina closed',
    'labial adhesion surgery',
  ],
  quickAnswer:
    'Labial adhesion (also called labial fusion) is when the inner labia stick together, partially or completely covering the vaginal opening. It\'s common in baby girls and toddlers, affecting about 2% of girls. Most cases don\'t cause symptoms and resolve on their own as your child grows. Treatment with estrogen cream is effective if needed, and surgery is rarely necessary.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Labial adhesion is less common in young infants but can occur. You may notice during diaper changes that the labia appear to be stuck together with a thin membrane. Most don\'t cause any symptoms. Your pediatrician will examine your baby and determine if treatment is needed. If your baby can urinate normally and has no discomfort, observation alone is often recommended.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is a common age for labial adhesion to develop. Low estrogen levels in infancy contribute to the adhesion. If the fusion is partial and your baby has no symptoms, your pediatrician may recommend just monitoring. If the adhesion is causing urinary issues, discomfort, or is very extensive, a short course of estrogen cream applied to the area can help separate the labia.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Labial adhesions are common in toddlers. Most cause no symptoms and are discovered during routine exams. If your child has difficulty urinating, urinary tract infections, or discomfort, treatment with estrogen cream is usually effective. The cream is applied once or twice daily for several weeks. Your pediatrician will monitor progress.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Many labial adhesions resolve spontaneously as your child approaches puberty and natural estrogen levels rise. If adhesion persists and causes symptoms, estrogen cream can still be used. Rarely, manual separation in the doctor\'s office or very rarely surgery may be considered for severe, symptomatic cases. Most resolve without intervention.',
    },
    {
      ageRange: '5 years+',
      context:
        'As girls approach puberty, rising estrogen levels usually resolve labial adhesions. If adhesion persists into later childhood and causes problems, your pediatrician or a pediatric gynecologist can discuss treatment options. Recurrence after successful treatment is possible but less common as your child gets older.',
    },
  ],
  whenNormal: [
    'Your baby has a partial labial adhesion that doesn\'t cause symptoms',
    'Your baby can urinate normally without difficulty or discomfort',
    'Your pediatrician examined the adhesion and recommended observation',
    'You\'re applying estrogen cream as prescribed and following up with your doctor',
    'The adhesion has resolved, either on its own or with treatment',
  ],
  whenToMention: [
    'You\'ve noticed the labia appear stuck together and want it evaluated',
    'Your baby seems to have difficulty urinating or the stream is unusual',
    'Your baby seems uncomfortable during diaper changes',
    'Your child has had recurrent urinary tract infections',
    'The adhesion doesn\'t seem to be improving with estrogen cream',
  ],
  whenToActNow: [
    'Your baby is having significant difficulty urinating or seems in pain when urinating',
    'Your baby has signs of urinary retention (very swollen lower abdomen, extreme fussiness)',
    'Your baby has signs of urinary tract infection (fever, foul-smelling urine, frequent crying)',
    'The area appears very red, swollen, or infected',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Labial Adhesions. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Labial-Adhesions.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Labial Adhesions in Children. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/1/42/34385/Labial-Adhesions',
    },
    {
      org: 'AAP',
      citation:
        'American College of Obstetricians and Gynecologists. Labial Adhesions. ACOG, 2023.',
      url: 'https://www.acog.org/womens-health/faqs/labial-adhesions',
    },
  ],
};
