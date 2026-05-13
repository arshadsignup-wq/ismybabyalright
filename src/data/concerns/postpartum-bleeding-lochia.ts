import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-bleeding-lochia',
  title: 'Postpartum Bleeding (Lochia)',
  category: 'maternal',
  searchTerms: [
    'postpartum bleeding',
    'lochia after birth',
    'how long does bleeding last after delivery',
    'blood clots after birth',
    'postpartum discharge',
    'heavy bleeding after having baby',
    'lochia stages',
    'bleeding getting heavier postpartum',
    'when to worry about postpartum bleeding',
  ],
  quickAnswer:
    'Postpartum bleeding, called lochia, is the vaginal discharge that occurs after both vaginal and cesarean deliveries as your uterus sheds its lining and heals where the placenta was attached. It typically starts as heavy, bright red bleeding and gradually transitions to lighter pink and then yellowish-white discharge over four to six weeks. While it can be alarming, lochia is a normal and essential part of recovery.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the first few days, lochia is bright red and heavy, similar to a very heavy period. You may pass small blood clots up to the size of a plum, particularly when standing up after lying down. By the end of the first week, the bleeding should be decreasing in volume and turning from bright red to a darker red or brownish color. Soaking more than one pad per hour consistently is not normal and requires immediate medical attention.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'The discharge gradually transitions from pinkish-brown to a yellowish or creamy white color (lochia alba). The volume should be significantly lighter than the first week. You may notice a temporary increase in bleeding with increased activity or breastfeeding, which stimulates uterine contractions. This is your body\'s signal to rest more if bleeding picks up.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'For most women, lochia has stopped completely by six weeks postpartum. Some women may experience light spotting or occasional discharge for up to eight weeks, which is still within the normal range. If you experience a return of bright red, heavy bleeding after lochia had slowed or stopped, contact your provider, as this could indicate a retained piece of placenta or other complication.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Lochia should have resolved well before this point. Any vaginal bleeding at this stage may represent the return of your menstrual period, particularly if you are not exclusively breastfeeding. If you experience unexplained heavy bleeding months after delivery, consult your provider to rule out other causes.',
    },
  ],
  whenNormal: [
    'Heavy, bright red bleeding in the first few days that gradually decreases over weeks',
    'Passing small blood clots (up to plum-sized) in the first few days, especially when changing positions',
    'Discharge transitioning from red to pink to yellowish-white over four to six weeks',
    'A temporary increase in flow with breastfeeding or physical activity that settles with rest',
  ],
  whenToMention: [
    'Bleeding that seemed to be slowing suddenly becomes heavier again with bright red blood',
    'The discharge has a foul smell, which could indicate an infection',
    'Lochia has not significantly decreased by three weeks postpartum',
    'You are passing clots larger than a golf ball after the first 24 hours',
  ],
  whenToActNow: [
    'You are soaking through one or more pads per hour for two or more consecutive hours',
    'You feel dizzy, lightheaded, or faint, which could indicate excessive blood loss',
    'You pass very large clots (larger than your fist) or experience a sudden gush of blood after the first day postpartum',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Hemorrhage. ACOG Practice Bulletin, 2017.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Lochia. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560528/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG PostpartumCare, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
  ],
};
