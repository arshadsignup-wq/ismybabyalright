import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pulmonary-sequestration-baby',
  title: 'Pulmonary Sequestration in Children',
  category: 'medical',
  searchTerms: [
    'pulmonary sequestration baby',
    'lung sequestration child',
    'intralobar sequestration baby',
    'extralobar sequestration newborn',
    'recurrent pneumonia same spot child',
    'abnormal lung tissue own blood supply',
    'prenatal lung mass blood vessel',
    'pulmonary sequestration surgery',
    'lung mass aorta blood supply baby',
    'pulmonary sequestration diagnosis',
  ],
  quickAnswer:
    'Pulmonary sequestration is a mass of non-functioning lung tissue that has its own blood supply, typically from the aorta rather than the pulmonary artery. There are two types: intralobar (within the normal lung, more common) and extralobar (separate from the lung, with its own pleural covering). Sequestrations can cause recurrent pneumonia in the same location and are often found on prenatal ultrasound. Surgical removal is the definitive treatment.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Pulmonary sequestrations are frequently discovered during routine prenatal ultrasound, appearing as a solid mass in the lower chest (most commonly the left lower lobe). A key diagnostic feature is identifying an abnormal artery arising from the aorta that supplies the mass, which can be seen on prenatal Doppler ultrasound. Some sequestrations, particularly extralobar ones, may appear to shrink or even disappear on prenatal imaging, though the tissue is usually still present. Fetal MRI may be used for further evaluation. Most prenatally diagnosed sequestrations do not cause problems before birth.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Extralobar sequestrations may present with respiratory distress in the newborn period, especially if they are large or associated with other congenital abnormalities (such as congenital diaphragmatic hernia). Intralobar sequestrations are less likely to cause symptoms at birth. A CT angiogram is typically performed in the first few months of life to confirm the diagnosis and map the abnormal blood supply before surgical planning. Even if the baby is asymptomatic, evaluation is important because the sequestration may cause problems later.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Many pediatric surgeons recommend elective surgical removal of pulmonary sequestrations during infancy to prevent future infections. The surgery involves removing the abnormal tissue and ligating (tying off) the aberrant arterial blood supply from the aorta. Identifying and controlling this abnormal artery is critical during surgery. Intralobar sequestrations typically require lobectomy (removing the affected lobe), while extralobar sequestrations can be removed without sacrificing normal lung tissue.',
    },
    {
      ageRange: '1 year+',
      context:
        'Children with undiagnosed intralobar pulmonary sequestrations may present with recurrent pneumonia that always seems to occur in the same area of the lung, typically the lower lobes. These episodes may respond to antibiotics but keep coming back. This pattern of recurrent pneumonia in the same location should raise suspicion for an underlying structural abnormality. After surgical removal, children have excellent outcomes with normal lung function from the remaining lung tissue.',
    },
  ],
  whenNormal: [
    'A small lung finding was seen on prenatal ultrasound and your doctor is monitoring it with follow-up imaging',
    'Your child had a pulmonary sequestration surgically removed and has recovered well with normal breathing',
    'Your child had a single episode of pneumonia that resolved completely and has not recurred',
  ],
  whenToMention: [
    'A lung mass with an abnormal blood vessel was found on your baby\'s prenatal ultrasound and you want to discuss what to expect after birth',
    'Your child has had two or more episodes of pneumonia in the same area of the lung, which may suggest an underlying structural abnormality',
    'Your baby has a known pulmonary sequestration and you want to discuss timing of surgical removal',
    'Your child had surgery for a pulmonary sequestration and you have questions about recovery and follow-up',
  ],
  whenToActNow: [
    'Your newborn with a known lung mass develops breathing difficulty, rapid breathing, or appears blue, requiring emergency evaluation',
    'Your child with a known pulmonary sequestration develops high fever, worsening cough, and difficulty breathing, which may indicate an infection in the sequestration',
    'Your child has sudden onset of severe chest pain or coughs up blood, which could indicate hemorrhage from the abnormal arterial supply to the sequestration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pneumonia-signs-baby', 'baby-breathing-fast'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Lung Lesions: Sequestration and Related Anomalies. NeoReviews, 2019.',
      url: 'https://publications.aap.org/neoreviews/article/20/7/e400/80043/Congenital-Lung-Malformations',
    },
    {
      org: 'ATS',
      citation:
        'Defined by the American Thoracic Society. Congenital Thoracic Malformations. Proceedings of the American Thoracic Society, 2006.',
      url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.200607-1005PP',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pulmonary Sequestration. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532268/',
    },
  ],
};
