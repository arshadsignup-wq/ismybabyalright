import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bronchiolitis-baby-signs',
  title: 'Signs of Bronchiolitis in Babies',
  category: 'medical',
  searchTerms: [
    'bronchiolitis baby',
    'bronchiolitis signs baby',
    'baby wheezing bronchiolitis',
    'bronchiolitis vs cold baby',
    'bronchiolitis treatment baby',
    'baby bronchiolitis when to go to hospital',
    'bronchiolitis breathing baby',
    'infant bronchiolitis symptoms',
    'baby chest congestion bronchiolitis',
    'how long does bronchiolitis last',
  ],
  quickAnswer:
    'Bronchiolitis is a common lower respiratory infection in babies under 2 years, most often caused by RSV. It typically starts like a cold with runny nose and cough, then progresses to wheezing and breathing difficulty over 2-3 days. Most cases are mild and resolve at home within 1-2 weeks, but young infants (under 3 months) and babies born prematurely are at higher risk for severe illness requiring hospitalization.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants are at the highest risk for severe bronchiolitis. Their small airways are particularly vulnerable to swelling and mucus buildup. Warning signs include fast breathing (over 60 breaths per minute), nasal flaring, chest retractions (ribs visible with each breath), poor feeding, and pauses in breathing (apnea). Any infant under 3 months with breathing difficulty from bronchiolitis should be evaluated urgently, as hospitalization may be needed for oxygen support or IV fluids.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Bronchiolitis in this age group often begins with 2-3 days of cold symptoms before progressing to wheezing and increased breathing effort. The illness typically peaks around days 3-5 and then gradually improves over 1-2 weeks, though cough may linger longer. Home care includes nasal suctioning, humidified air, frequent small feedings, and monitoring breathing. There is no medication that shortens bronchiolitis -- antibiotics do not help since it is viral.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers generally handle bronchiolitis better than younger babies because their airways are larger. Symptoms may include persistent cough, wheezing, and mild breathing difficulty. Most can be managed at home with supportive care. However, if your toddler is breathing rapidly, refusing fluids, or has not had a wet diaper in 6-8 hours, medical evaluation is needed. Children with asthma, heart conditions, or immune deficiencies are at higher risk for complications.',
    },
  ],
  whenNormal: [
    'Your baby has a runny nose and cough but is breathing comfortably and feeding reasonably well.',
    'Your baby has mild wheezing after the peak of illness but is improving day by day.',
    'Your baby\'s breathing rate is normal when calm (under 40-60 breaths per minute depending on age).',
  ],
  whenToMention: [
    'Your baby under 6 months develops any wheezing or increased breathing effort.',
    'Your baby is feeding less than half of normal amounts.',
    'Your baby\'s cough is worsening after day 5 of illness or symptoms have lasted more than 2 weeks.',
  ],
  whenToActNow: [
    'Your baby is breathing very fast (over 60 breaths per minute), has chest retractions, or nasal flaring.',
    'Your baby\'s lips, tongue, or fingernails turn blue or dusky.',
    'Your baby has pauses in breathing, is extremely lethargic, or cannot be roused for feeds.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rsv-baby', 'wheezing', 'baby-breathing-fast', 'clesrovimab-new-rsv-prevention-infant'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/134/5/e1474/32990/Clinical-Practice-Guideline-The-Diagnosis',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Respiratory Syncytial Virus (RSV). CDC.',
      url: 'https://www.cdc.gov/rsv/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Bronchiolitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000975.htm',
    },
  ],
};
