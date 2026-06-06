import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-heart-murmur-found',
  title: 'Heart Murmur Detected at Birth',
  category: 'medical',
  searchTerms: ['newborn heart murmur', 'baby heart murmur found', 'heart murmur at birth', 'newborn murmur normal', 'innocent murmur baby', 'heart murmur detected newborn exam', 'baby heart sound abnormal', 'newborn murmur echo needed', 'is newborn heart murmur serious', 'murmur found at hospital'],
  quickAnswer: 'Heart murmurs are very common in newborns and are often innocent (harmless). They are extra sounds heard with a stethoscope caused by blood flowing through the heart. Many murmurs detected at birth resolve on their own as the circulatory system transitions from fetal to newborn circulation. Your pediatrician may order an echocardiogram to confirm the murmur is innocent.',
  byAge: [
    { ageRange: '0-1 month', context: 'Heart murmurs are heard in many newborns during the first few days. As your baby\'s circulatory system transitions from the fetal pattern (where the placenta provided oxygen) to the newborn pattern (where the lungs take over), temporary murmurs are common. Many are caused by a patent ductus arteriosus (PDA), which normally closes within the first few days. If a murmur persists, your doctor may order an echocardiogram (ultrasound of the heart) to evaluate. Most murmurs found in healthy, well-appearing newborns turn out to be innocent.' },
    { ageRange: '1-3 months', context: 'If an echocardiogram confirmed an innocent murmur or a small, hemodynamically insignificant finding (like a small PDA or PFO), reassurance and monitoring are all that is needed. If a structural heart defect was found, a pediatric cardiologist will guide management and follow-up.' },
    { ageRange: '3-6 months', context: 'Innocent murmurs may come and go. They may be louder during illness or fever and softer when baby is calm. This is expected. Follow-up for any identified structural abnormality continues as recommended.' },
    { ageRange: '6-12 months', context: 'Innocent murmurs can persist throughout childhood and have no health significance. They do not require activity restrictions or antibiotics for dental procedures. Murmurs associated with structural defects are managed per the cardiologist\'s recommendations.' },
  ],
  whenNormal: ['An innocent murmur confirmed by echocardiogram in a well baby', 'Baby is feeding well, gaining weight, breathing comfortably, and has good skin color', 'The murmur becomes softer over time', 'Pediatrician is not concerned after evaluation'],
  whenToMention: ['A new murmur is heard at any well-child visit', 'You want to understand what the murmur means for your baby', 'You have a family history of heart defects'],
  whenToActNow: ['A murmur combined with difficulty feeding, rapid breathing, poor weight gain, or blue/gray skin color, which could indicate a significant heart defect', 'Baby becomes lethargic, sweaty during feeds, or has persistent rapid breathing'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Heart Murmurs. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Heart-Murmurs.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Heart Murmurs in Infants. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507808/' },
  ],
  relatedConcernSlugs: ['baby-heart-murmur', 'congenital-heart-defect-signs', 'patent-ductus-arteriosus'],
};
