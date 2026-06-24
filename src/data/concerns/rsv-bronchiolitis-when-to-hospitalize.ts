import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rsv-bronchiolitis-when-to-hospitalize',
  title: 'RSV Bronchiolitis: When Does a Baby Need the Hospital',
  category: 'medical',
  searchTerms: [
    'rsv bronchiolitis hospital',
    'baby bronchiolitis when to go to hospital',
    'rsv baby hospital signs',
    'bronchiolitis emergency signs',
    'baby wheezing rsv hospitalize',
    'rsv baby oxygen levels',
    'when does baby need hospital bronchiolitis',
    'rsv bronchiolitis treatment hospital',
    'baby breathing hard rsv',
    'bronchiolitis admission criteria',
  ],
  quickAnswer:
    'Most babies with RSV bronchiolitis can be managed at home with supportive care, but about 1-3% of infected infants require hospitalization. Key indicators for seeking emergency care include persistent oxygen saturation below 90%, significant difficulty breathing (chest retractions, nasal flaring, grunting), inability to feed, signs of dehydration, or apnea (pauses in breathing). Babies under 3 months, premature infants, and those with chronic lung or heart disease are at highest risk for severe disease.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants are at the highest risk for severe bronchiolitis and hospitalization. Their small airways are particularly vulnerable to the inflammation and mucus production caused by RSV. Apnea (breathing pauses) can be the first sign of RSV in very young infants, even before typical respiratory symptoms appear. Any baby under 3 months with cold symptoms during RSV season should be evaluated by a pediatrician. If your baby has a breathing pause lasting more than 15-20 seconds, call 911 immediately.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bronchiolitis typically worsens over the first 3-5 days before gradually improving. Peak severity is usually around days 3-5 of illness. Watch your baby\'s breathing carefully during this window: count breaths per minute when calm (over 60 is concerning), watch for ribs pulling in with each breath (retractions), and listen for wheezing or grunting. If your baby is struggling to feed because breathing is too labored, or if they are making fewer than 3-4 wet diapers in 24 hours, seek medical attention. Hospital treatment focuses on oxygen support and hydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While still at risk for significant illness, babies in this age group generally handle bronchiolitis better than younger infants. Home management includes nasal suctioning before feeds, using a cool-mist humidifier, offering smaller and more frequent feeds, and keeping the baby\'s head slightly elevated. There are no effective medications for bronchiolitis in most cases; antibiotics do not help because it is a viral illness, and evidence does not support routine use of bronchodilators in infants. If your baby\'s condition worsens after initially improving, seek re-evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with bronchiolitis typically have milder illness than younger babies, though it can still cause significant respiratory distress in some children. The cough may persist for 2-3 weeks after the acute illness resolves. Hospitalization at this age is less common but may be necessary if oxygen levels drop or the child cannot maintain hydration. If your toddler has been diagnosed with bronchiolitis and sent home, return to the emergency department if breathing worsens, fluid intake drops significantly, or you notice a blue tinge to their lips.',
    },
  ],
  whenNormal: [
    'Your baby has a runny nose and cough but is breathing comfortably and feeding well',
    'Your baby\'s oxygen level is 95% or higher when checked at the doctor\'s office',
    'Your baby is having regular wet diapers and seems comfortable between coughing episodes',
    'Symptoms are gradually improving after the first 5 days',
  ],
  whenToMention: [
    'Your baby under 6 months develops cold symptoms during RSV season',
    'Your baby\'s breathing seems faster than normal even when calm or sleeping',
    'Your baby is feeding less than half their normal intake',
    'You are unsure whether your baby\'s breathing is within normal range',
  ],
  whenToActNow: [
    'Your baby\'s breathing rate is over 60 breaths per minute at rest, with visible chest retractions or nasal flaring',
    'Your baby\'s lips, tongue, or fingernails appear blue or pale',
    'Your baby has a breathing pause (apnea) lasting more than 15-20 seconds',
    'Your baby is refusing all feeds and has not had a wet diaper in 8+ hours',
    'Your baby is extremely lethargic, difficult to wake, or limp',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'rsv-baby',
    'rsv-prevention-nirsevimab-infant',
    'baby-breathing-fast',
  ],
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
        'Centers for Disease Control and Prevention. RSV (Respiratory Syncytial Virus). CDC, 2024.',
      url: 'https://www.cdc.gov/rsv/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Bronchiolitis in Children. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519506/',
    },
  ],
};
