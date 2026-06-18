import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bronchopulmonary-dysplasia-bpd',
  title: 'My Baby Has BPD (Bronchopulmonary Dysplasia) — Chronic Lung Disease',
  category: 'medical',
  searchTerms: [
    'bronchopulmonary dysplasia BPD',
    'chronic lung disease premature baby',
    'BPD preemie oxygen at home',
    'premature baby lung damage',
    'BPD prognosis baby',
    'preemie still on oxygen',
    'chronic lung disease NICU',
    'BPD home oxygen weaning',
    'premature baby breathing problems',
    'BPD RSV risk',
  ],
  quickAnswer:
    'Bronchopulmonary dysplasia (BPD) is a chronic lung condition that primarily affects premature babies who needed oxygen or ventilator support after birth. The immature lungs become inflamed and scarred, leading to ongoing breathing difficulties. BPD ranges from mild (needing oxygen briefly after 36 weeks corrected age) to severe (requiring long-term respiratory support). While BPD is a serious diagnosis, most children\'s lungs continue to grow and improve over the first 2-3 years of life, and many outgrow their oxygen needs entirely.',
  byAge: [
    {
      ageRange: 'NICU — diagnosis and treatment',
      context:
        'BPD is typically diagnosed when a premature baby still requires supplemental oxygen at 36 weeks corrected gestational age. In the NICU, treatment focuses on gentle ventilation strategies, nutrition to support lung growth, diuretics if fluid retention is an issue, and sometimes steroids. Discharge planning for babies with BPD may include home oxygen, pulse oximetry monitoring, and medications. This can feel overwhelming, but NICU staff will train you thoroughly before discharge.',
    },
    {
      ageRange: '0-6 months corrected age (post-discharge)',
      context:
        'The first winter after NICU discharge is the highest-risk period for respiratory infections, particularly RSV, which can be dangerous for babies with BPD. Your baby may qualify for Palivizumab (Synagis) injections during RSV season. Strict hand hygiene and limiting exposure to sick contacts is critical. Many babies come home on oxygen — weaning is done gradually under your pulmonologist\'s guidance. Do not adjust oxygen settings without medical direction.',
    },
    {
      ageRange: '6-12 months corrected age',
      context:
        'Many babies with mild to moderate BPD are weaned off oxygen during this period. Your baby\'s lungs are continuing to grow and develop new alveoli. Continued respiratory infections may cause setbacks — it is common for a cold that would be minor in other babies to cause significant breathing difficulty in a baby with BPD. Keep your pediatrician and pulmonologist closely informed about any respiratory symptoms.',
    },
    {
      ageRange: '1-3 years corrected age',
      context:
        'Most children with BPD show significant improvement by age 2-3 as their lungs grow. Some children retain increased sensitivity to respiratory infections or may develop reactive airway disease (similar to asthma). Ongoing follow-up with pulmonology is recommended. By school age, many children with a history of BPD have normal or near-normal lung function.',
    },
  ],
  whenNormal: [
    'Your baby needed oxygen in the NICU and is now being weaned gradually at home under medical supervision',
    'Your baby gets sicker with colds than term babies but recovers with supportive care',
    'Your baby\'s oxygen saturations run slightly lower than a term baby\'s — your pulmonologist has set a target range for you',
  ],
  whenToMention: [
    'Your baby is working harder to breathe — nasal flaring, rib retractions, or belly breathing',
    'Your baby\'s feeding has decreased significantly, which can be an early sign of respiratory distress',
    'Your baby seems to need more oxygen than usual or their saturations are running below the target range',
    'You are concerned about developmental delays related to your baby\'s chronic lung disease',
  ],
  whenToActNow: [
    'Your baby is turning blue or pale around the lips or fingernails — call 911 immediately',
    'Your baby is grunting with each breath, retracting severely, or breathing very fast (over 60-70 breaths per minute) — go to the emergency room',
    'Your baby stops breathing or has an apnea episode — call 911',
    'Your baby has a fever and is in respiratory distress — seek immediate medical evaluation as respiratory infections can escalate quickly in babies with BPD',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'retinopathy-of-prematurity-parent-guide',
    'adjusted-age-milestones-preemie',
    'vulnerable-child-syndrome-post-nicu',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Bronchopulmonary Dysplasia.',
      url: 'https://www.nhlbi.nih.gov/health/bronchopulmonary-dysplasia',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bronchopulmonary Dysplasia. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/144/4/e20190997/38267',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Bronchopulmonary Dysplasia.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/bronchopulmonary-dysplasia',
    },
  ],
};
