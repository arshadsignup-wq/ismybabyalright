import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wilms-tumor-signs-baby',
  title: 'Wilms Tumor Signs in Babies',
  category: 'medical',
  searchTerms: [
    'wilms tumor baby',
    'baby kidney mass lump',
    'wilms tumor signs infant',
    'baby swollen belly one side',
    'nephroblastoma baby',
    'wilms tumor symptoms child',
    'baby abdominal mass kidney',
    'kidney cancer baby signs',
  ],
  quickAnswer:
    'Wilms tumor (nephroblastoma) is the most common kidney cancer in children, typically diagnosed between ages 3-4, but it can occur in infancy and up to about age 7. It affects about 1 in 10,000 children. It usually presents as a painless abdominal mass. With modern treatment combining surgery, chemotherapy, and sometimes radiation, the overall survival rate is greater than 90%, making it one of the most treatable childhood cancers.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Wilms tumor in very young infants is uncommon but can occur, sometimes diagnosed incidentally on prenatal ultrasound or during evaluation for other conditions. Babies with certain genetic syndromes — including Beckwith-Wiedemann syndrome, WAGR syndrome, and Denys-Drash syndrome — have a higher risk and may undergo screening ultrasounds starting in infancy. If found this early, the tumor is often at an early stage with excellent treatment outcomes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A parent or doctor may notice an abdominal mass or swelling, usually on one side. The mass is typically smooth, firm, and not painful. Other signs can include blood in the urine (hematuria), fever, decreased appetite, and sometimes high blood pressure. If you feel an unusual lump in your baby\'s abdomen, have it evaluated — but keep in mind that many abdominal masses in infants are benign.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As the tumor grows, it may cause more noticeable abdominal swelling, often described by parents as the belly getting bigger on one side. The baby may become fussier, eat less, or have constipation due to the mass pressing on other organs. Diagnosis involves abdominal ultrasound followed by CT or MRI. Treatment typically involves surgical removal of the affected kidney (nephrectomy) followed by chemotherapy.',
    },
    {
      ageRange: '12 months+',
      context:
        'The peak age for Wilms tumor diagnosis is 3-4 years, but it can present throughout the toddler years. Children under 2 often have a particularly favorable prognosis. After treatment, children do very well with one healthy kidney — they can lead completely normal lives with no dietary restrictions and normal physical activity. Long-term follow-up includes monitoring for recurrence and any late effects of treatment.',
    },
  ],
  whenNormal: [
    'Your baby\'s abdominal exam is soft and without masses at well-child visits',
    'Your baby has an abdominal finding that was evaluated and found to be benign',
    'Your baby with a genetic syndrome associated with Wilms tumor has normal screening ultrasounds',
    'Your child treated for Wilms tumor has completed treatment and follow-up scans are clear',
  ],
  whenToMention: [
    'You feel a firm lump or mass in your baby\'s abdomen, especially on one side',
    'You notice your baby\'s belly is getting larger or asymmetric',
    'Your baby has blood-tinged urine or unexplained high blood pressure',
  ],
  whenToActNow: [
    'You find a large, firm abdominal mass in your baby — this needs urgent evaluation (do not repeatedly press on it, as Wilms tumors can be fragile)',
    'Your baby has abdominal pain with a known or suspected mass, which could indicate rupture or hemorrhage',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Cancer Institute. Wilms Tumor and Other Childhood Kidney Tumors Treatment (PDQ) — Patient Version. NCI, 2024.',
      url: 'https://www.cancer.gov/types/kidney/patient/wilms-treatment-pdq',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Wilms Tumor — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/wilms-tumor/symptoms-causes/syc-20352655',
    },
  ],
};
