import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-pelvic-pressure',
  title: 'Pelvic Pressure and Heaviness in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'pelvic pressure pregnancy',
    'heavy feeling pelvis pregnant',
    'pressure down below pregnant',
    'baby dropping feeling',
    'lightening pregnancy',
    'pelvic heaviness pregnancy',
    'feels like baby is going to fall out',
    'cervical pressure pregnancy',
    'low pelvic pain pregnant',
    'baby head down pressure',
  ],
  quickAnswer:
    'Pelvic pressure is a common sensation in pregnancy, especially in the third trimester, caused by the growing baby\'s weight pressing on the pelvic floor, the baby descending into the pelvis (lightening), and hormonal loosening of pelvic joints. It is usually normal but should be evaluated if it occurs before 37 weeks.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Some pelvic pressure may begin in the second trimester as the uterus grows. This is usually mild and intermittent. Consistent or increasing pelvic pressure before the third trimester, especially with any cramping or back pain, should be mentioned to your provider to rule out cervical changes.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Pelvic pressure becomes most noticeable in the third trimester, particularly in the final weeks when the baby drops into the pelvis (lightening or engagement). You may feel increased heaviness, pressure on the bladder, and difficulty walking. A pregnancy support belt, kegel exercises, and pelvic tilts can help manage discomfort.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'Increasing pelvic pressure is one of the signs that labor is approaching. As the baby descends further into the birth canal, pressure becomes more intense. This is a normal part of the labor process. If pressure is accompanied by regular contractions, it may be time to contact your provider.',
    },
  ],
  whenNormal: [
    'Gradual increase in pelvic heaviness as pregnancy progresses, especially in the third trimester',
    'Pressure that worsens with standing or walking and improves with rest',
    'Increased urge to urinate due to the baby pressing on the bladder',
    'Pressure after the baby drops (lightening) in the weeks before delivery',
  ],
  whenToMention: [
    'Pelvic pressure is constant and significantly uncomfortable',
    'Pressure is accompanied by low back pain that comes and goes',
    'You feel an unusual amount of pressure earlier than expected in pregnancy',
  ],
  whenToActNow: [
    'Significant pelvic pressure before 37 weeks, especially with regular contractions, back pain, or vaginal discharge changes - this could indicate preterm labor',
    'Intense pressure with a feeling that something is bulging from the vagina',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. How to Tell When Labor Begins. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Normal Labor. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532918/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Signs of Labor. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/signs-of-labor.aspx',
    },
  ],
  relatedConcernSlugs: ['lightning-crotch-pregnancy', 'preterm-labor-signs', 'symphysis-pubis-dysfunction'],
};
