import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bronchiolitis-vs-pneumonia',
  title: 'Bronchiolitis vs Pneumonia',
  category: 'medical',
  searchTerms: [
    'bronchiolitis vs pneumonia baby',
    'difference between bronchiolitis and pneumonia',
    'baby bronchiolitis or pneumonia',
    'RSV bronchiolitis symptoms',
    'baby wheezing bronchiolitis',
    'bronchiolitis treatment baby',
    'when does bronchiolitis become pneumonia',
    'baby chest infection bronchiolitis',
  ],
  quickAnswer:
    'Bronchiolitis and pneumonia are both lower respiratory infections in babies but affect different parts of the lungs. Bronchiolitis inflames the small airways (bronchioles) and is almost always caused by viruses like RSV, primarily affecting babies under 2. Pneumonia infects the air sacs (alveoli) and can be caused by viruses or bacteria. Both can cause coughing, fast breathing, and difficulty breathing, but their treatments differ -- bronchiolitis is managed with supportive care while bacterial pneumonia requires antibiotics.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Both bronchiolitis and pneumonia can be serious in very young infants. Bronchiolitis from RSV is the most common cause of hospitalization in this age group. Symptoms include runny nose progressing to cough, wheezing, and difficulty breathing over 3-5 days. Pneumonia in newborns may present with fewer obvious respiratory symptoms and more general signs like poor feeding, lethargy, and temperature instability. Any breathing difficulty in a baby under 3 months requires prompt medical evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bronchiolitis typically starts as a cold with runny nose and cough, then progresses to wheezing and increased work of breathing around day 3-5 of illness. The illness peaks around day 5-7 and gradually improves over 2-3 weeks. Pneumonia may present similarly but often includes higher fever, more localized crackles heard by the doctor, and may not improve on the expected bronchiolitis timeline. Your doctor can distinguish between them through examination and sometimes a chest X-ray.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Bronchiolitis remains common in this age group during fall and winter months. If your baby seems to be getting worse after day 5-7 of illness, develops a new fever after initially improving, or looks sicker than expected for bronchiolitis, pneumonia may be developing. Sometimes pneumonia occurs as a secondary bacterial infection after viral bronchiolitis. Trust your instincts -- if your baby seems more unwell than a typical cold, seek medical evaluation.',
    },
    {
      ageRange: '12 months+',
      context:
        'Bronchiolitis becomes less common after age 2 as airways grow larger. Toddlers are more likely to develop pneumonia, which can be viral or bacterial. Bacterial pneumonia often causes higher persistent fevers, can appear suddenly, and may present with a child looking quite ill. Viral pneumonia tends to develop more gradually alongside other cold symptoms. Your pediatrician will determine the cause and whether antibiotics are needed.',
    },
  ],
  whenNormal: [
    'Baby has a cold with mild cough and congestion but is breathing comfortably and feeding well',
    'Baby with bronchiolitis is on day 7-10 and symptoms are gradually improving',
    'Baby has a mild fever with cold symptoms but is alert, playing, and making wet diapers',
    'Baby\'s breathing rate is normal for age when calm and at rest',
  ],
  whenToMention: [
    'Baby\'s cold seems to be getting worse rather than better after 5-7 days',
    'Baby develops a new fever after seeming to improve from a respiratory illness',
    'Baby is feeding less than 50% of normal or has noticeably fewer wet diapers',
  ],
  whenToActNow: [
    'Baby is breathing very fast (over 60 breaths per minute) or has visible chest retractions when calm',
    'Baby has bluish lips, extreme lethargy, or is not waking for feeds -- call 911 or go to the ER immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/134/5/e1474/32976/Updated-Guidance-for-Palivizumab-Prophylaxis-Among',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. RSV in Infants and Young Children. CDC.',
      url: 'https://www.cdc.gov/rsv/about/symptoms.html',
    },
  ],
};
