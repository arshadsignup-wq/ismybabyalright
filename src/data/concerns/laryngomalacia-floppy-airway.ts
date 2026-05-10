import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'laryngomalacia-floppy-airway',
  title: 'Laryngomalacia (Floppy Airway)',
  category: 'medical',
  searchTerms: [
    'laryngomalacia baby',
    'floppy airway baby',
    'baby noisy breathing from birth',
    'laryngomalacia symptoms infant',
    'baby stridor laryngomalacia',
    'floppy larynx baby',
    'laryngomalacia feeding problems',
    'laryngomalacia treatment baby',
  ],
  quickAnswer:
    'Laryngomalacia is the most common cause of noisy breathing (stridor) in infants. It occurs when the tissue above the vocal cords is unusually soft and floppy, causing it to collapse inward during breathing and create a high-pitched squeaky sound. It typically appears within the first 2 weeks of life, peaks in severity at 4-8 months, and resolves on its own by 12-18 months. Most cases are mild and require no treatment beyond monitoring.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Laryngomalacia usually becomes noticeable within the first 2 weeks of life. You will hear a high-pitched squeaky or fluttery sound when your baby breathes in. The noise is typically worse when your baby is on their back, feeding, crying, or congested. It often improves when your baby is on their stomach or in an upright position. Your pediatrician can usually diagnose it based on the characteristic sound and circumstances.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Symptoms often peak between 4-8 months as your baby becomes more active and breathes harder. The stridor may get louder, which can be alarming but is part of the natural course. If your baby is feeding well, gaining weight appropriately, and not having color changes or apnea, this worsening is expected. However, if feeding difficulties, choking episodes, or poor weight gain develop, your pediatrician may refer you to a pediatric ENT specialist.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Improvement typically begins after the peak at 4-8 months. The stridor should gradually become less frequent and quieter. Your baby should be feeding well and gaining weight. Approximately 10-15% of babies with laryngomalacia have severe disease requiring surgical intervention (supraglottoplasty). Signs of severe disease include significant feeding difficulties, failure to thrive, obstructive apnea, or cyanosis.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most cases of laryngomalacia resolve by 12-18 months, though some mild stridor may persist until age 2. If your child still has significant noisy breathing after 18 months, or if stridor returns after previously resolving, further evaluation by an ENT specialist is warranted to rule out other airway conditions. Children who had laryngomalacia may be more prone to noisy breathing during upper respiratory infections.',
    },
  ],
  whenNormal: [
    'Baby has high-pitched breathing noise when inhaling that started in the first few weeks of life',
    'Noisy breathing improves when baby is placed on their stomach or held upright',
    'Baby is feeding well and gaining weight despite the noisy breathing',
    'Stridor is getting gradually quieter and less frequent after 6-8 months of age',
  ],
  whenToMention: [
    'Baby is having difficulty feeding, choking during feeds, or not gaining weight well',
    'Stridor is getting significantly louder or more persistent after 8 months of age',
    'Baby seems to struggle to breathe or has episodes of pausing breathing during sleep',
  ],
  whenToActNow: [
    'Baby turns blue or very pale during a breathing or feeding episode',
    'Baby has severe retractions, appears to be struggling significantly to breathe, or stops breathing -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Noisy Breathing in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Noisy-Breathing-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Laryngomalacia. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/001566.htm',
    },
  ],
};
