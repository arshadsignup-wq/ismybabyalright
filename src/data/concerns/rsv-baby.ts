import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rsv-baby',
  title: 'RSV in Babies: What to Know',
  category: 'medical',
  searchTerms: [
    'rsv baby',
    'rsv symptoms baby',
    'baby rsv treatment',
    'respiratory syncytial virus baby',
    'rsv when to go to hospital',
    'rsv vs cold baby',
    'rsv emergency signs',
    'how long does rsv last',
    'rsv baby breathing',
    'rsv prevention baby',
  ],
  quickAnswer:
    'RSV (respiratory syncytial virus) is a common virus that affects nearly all children by age 2. Most babies have mild cold-like symptoms, but some, especially young infants and those with underlying conditions, can develop breathing difficulties. Watch for fast breathing, flaring nostrils, or visible chest pulling - these are signs to seek medical care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are at highest risk for severe RSV. Even mild symptoms like a runny nose and cough warrant close monitoring. Contact your pediatrician if your baby under 3 months shows any cold symptoms during RSV season (fall and winter). Watch for poor feeding, pauses in breathing, or increased breathing rate - these need immediate medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'RSV may start as a cold but can progress to wheezing and difficulty breathing within a few days. Watch your baby\'s breathing closely: count breaths per minute when calm (normal is under 40-60), look for chest retractions (ribs showing with each breath), and listen for wheezing. If your baby is struggling to feed due to breathing, seek medical care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies this age will have RSV-like symptoms at some point. The illness typically lasts 7-10 days, with the worst symptoms around days 3-5. Keep your baby hydrated, use a humidifier, and suction the nose gently before feeds. Call your doctor if your baby has fast breathing (over 50 breaths per minute), trouble feeding, or seems very tired.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers typically handle RSV better than younger babies, though it can still cause significant cough and congestion. The cough may linger for 2-3 weeks even after other symptoms improve. Watch for signs of dehydration (fewer wet diapers, no tears) or breathing difficulty. Most toddlers recover at home with supportive care.',
    },
    {
      ageRange: '2 years+',
      context:
        'By this age, RSV usually presents as a bad cold or mild bronchitis. Your child may have a persistent cough, runny nose, and low-grade fever. Most children feel better in 5-7 days, though the cough can linger. Watch for worsening symptoms or breathing difficulty, which is less common at this age but still possible.',
    },
  ],
  whenNormal: [
    'Your baby has cold symptoms (runny nose, cough, low-grade fever) but is breathing comfortably',
    'Your baby is feeding normally or close to normal, even with congestion',
    'Your baby is having regular wet diapers and seems fairly comfortable between coughing spells',
    'Your baby\'s breathing rate is normal when calm and asleep',
    'Your baby has been seen by a doctor, diagnosed with RSV, and is being monitored at home',
  ],
  whenToMention: [
    'Your baby under 6 months has any cold symptoms during RSV season',
    'Your baby has a fever lasting more than 3 days',
    'Your baby is eating less than half of normal feeds',
    'Your baby seems more tired than usual or is sleeping much more than normal',
    'You\'re unsure whether your baby\'s breathing is normal',
  ],
  whenToActNow: [
    'Your baby is breathing very fast (over 60 breaths per minute for infants, over 50 for toddlers when calm)',
    'Your baby\'s chest is pulling in with each breath (retractions) or nostrils are flaring',
    'Your baby\'s lips or skin turn blue or pale',
    'Your baby has pauses in breathing or irregular breathing patterns',
    'Your baby is refusing to eat or drink and has fewer wet diapers',
    'Your baby is very difficult to wake or seems listless',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Respiratory Syncytial Virus Infection (RSV). CDC, 2024.',
      url: 'https://www.cdc.gov/rsv/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. RSV: When It\'s More Than Just a Cold. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/RSV-When-Its-More-Than-Just-a-Cold.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bronchiolitis. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Bronchiolitis.aspx',
    },
  ],
};
