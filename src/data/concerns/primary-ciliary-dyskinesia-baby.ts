import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'primary-ciliary-dyskinesia-baby',
  title: 'Primary Ciliary Dyskinesia (PCD) in Children',
  category: 'medical',
  searchTerms: [
    'primary ciliary dyskinesia baby',
    'PCD child symptoms',
    'chronic wet cough since birth',
    'baby chronic runny nose congestion',
    'situs inversus child',
    'recurrent ear infections chronic cough',
    'ciliary dyskinesia diagnosis',
    'Kartagener syndrome child',
    'baby chronic nasal congestion won\'t clear',
    'recurrent pneumonia child',
  ],
  quickAnswer:
    'Primary ciliary dyskinesia (PCD) is a genetic condition in which the cilia (tiny hair-like structures lining the airways, ears, and sinuses) do not beat properly and cannot clear mucus effectively. Children with PCD typically have a chronic wet cough from birth, persistent nasal congestion, recurrent ear infections, and recurrent pneumonia. About 50% of children with PCD have situs inversus (mirror-image positioning of internal organs). Early diagnosis and proactive airway clearance are key to preserving lung function.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Most newborns with PCD have unexplained respiratory distress at birth, even if born at full term. This neonatal respiratory distress (requiring supplemental oxygen or respiratory support) without a clear cause such as prematurity or infection is a key early clue. Chronic nasal congestion from the first days of life is also common. If situs inversus was detected on prenatal ultrasound, PCD should be strongly considered. The combination of neonatal distress and persistent rhinitis from birth should prompt further evaluation.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Infants with PCD have a daily wet or productive-sounding cough that does not resolve with typical treatments for colds or bronchiolitis. Chronic thick nasal discharge is present year-round, not just during illnesses. Recurrent ear infections with persistent fluid behind the eardrums (otitis media with effusion) are common and often require ear tubes. Many infants are initially diagnosed with recurrent upper respiratory infections before PCD is suspected.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Toddlers and preschoolers with PCD continue to have a daily wet cough, chronic nasal congestion, and frequent ear and sinus infections. They may also develop recurrent lower respiratory tract infections including pneumonia. The chronic cough can be mistaken for asthma, but it does not respond well to asthma medications (inhalers). If your child has a persistent wet cough that never fully clears, especially combined with chronic ear or sinus problems, ask your doctor about PCD. Nasal nitric oxide testing can be used as a screening tool.',
    },
    {
      ageRange: '5 years+',
      context:
        'School-age children with PCD may begin to develop bronchiectasis (permanent widening of airways from repeated infections) if the condition remains undiagnosed or undertreated. Daily airway clearance therapy (similar to what is used in cystic fibrosis) is a cornerstone of management to help remove trapped mucus. Regular respiratory cultures and prompt treatment of infections are important. Hearing may be affected by chronic ear fluid. With proactive management, most children with PCD can lead active lives.',
    },
  ],
  whenNormal: [
    'Your child has a wet cough during a cold that resolves completely within 2-3 weeks',
    'Your child has occasional nasal congestion with viral illnesses that clears between episodes',
    'Your child had one or two ear infections that responded to treatment and resolved fully',
    'Your child has seasonal allergies that explain chronic nasal symptoms and respond to allergy medications',
  ],
  whenToMention: [
    'Your child has had a daily wet cough for more than 8 weeks that does not fully resolve between illnesses',
    'Your child has chronic thick nasal discharge that persists year-round since infancy',
    'Your child has had multiple ear infections requiring ear tubes, combined with chronic cough or nasal congestion',
    'Your child has had more than two episodes of pneumonia, especially in the same location or with unusual organisms',
  ],
  whenToActNow: [
    'Your child has increasing breathing difficulty, high fever, or appears unwell, which could indicate a new pneumonia or worsening respiratory infection requiring urgent treatment',
    'Your newborn has unexplained respiratory distress at birth requiring oxygen, especially if situs inversus was noted on prenatal imaging',
    'Your child with known PCD develops sudden worsening of cough with blood-tinged sputum, chest pain, or significant shortness of breath',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['chronic-congestion', 'baby-cough-wet-productive', 'baby-recurring-ear-infections'],
  sources: [
    {
      org: 'ATS',
      citation:
        'Shapiro AJ, et al. Diagnosis of Primary Ciliary Dyskinesia: An Official American Thoracic Society Clinical Practice Guideline. American Journal of Respiratory and Critical Care Medicine, 2018.',
      url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.201805-0819ST',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Primary Ciliary Dyskinesia in Children. Pediatrics in Review, 2020.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/5/258/174828/Primary-Ciliary-Dyskinesia',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Primary Ciliary Dyskinesia. NIH, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/primary-ciliary-dyskinesia',
    },
  ],
};
