import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'neuroblastoma-signs-baby',
  title: 'Neuroblastoma Signs in Babies',
  category: 'medical',
  searchTerms: [
    'neuroblastoma baby',
    'baby abdominal mass lump',
    'neuroblastoma symptoms infant',
    'baby raccoon eyes bruising',
    'neuroblastoma signs under 1',
    'baby swollen belly hard lump',
    'baby cancer signs',
    'neuroblastoma prognosis baby',
  ],
  quickAnswer:
    'Neuroblastoma is the most common cancer in infants, accounting for about 6-10% of all childhood cancers. It develops from immature nerve cells and most commonly appears as a mass in the abdomen (adrenal gland), chest, neck, or pelvis. About 90% of cases are diagnosed before age 5, with a median age of diagnosis around 18 months. Babies under 1 year have the best prognosis, with many low-risk tumors even regressing on their own without treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neuroblastoma in very young infants may be found incidentally on prenatal ultrasound or during evaluation for another concern. A baby may have a palpable abdominal mass, a firm lump in the neck, or skin nodules that appear as blue-purple "blueberry muffin" spots. In some cases, the tumor is detected because of compression symptoms — difficulty breathing if in the chest, or constipation and urinary issues if in the pelvis. Babies diagnosed under 1 year often have very favorable outcomes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Signs may include a firm, nontender mass in the abdomen that a parent or doctor feels during a routine exam, protruding eyes (proptosis) with dark circles ("raccoon eyes") if the tumor has spread to the area around the eyes, and general symptoms like irritability and poor feeding. A special form called 4S neuroblastoma occurs in infants under 12 months and may actually spontaneously regress without treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Neuroblastoma may present with an enlarging abdominal mass, fever of unknown origin, bone pain (causing irritability and limping or refusing to bear weight), and sometimes watery diarrhea. Diagnosis involves imaging (ultrasound, CT, MIBG scan), urine tests for catecholamines (VMA/HMA), and biopsy. Babies under 1 year with neuroblastoma generally have the best prognosis among all age groups.',
    },
    {
      ageRange: '12 months+',
      context:
        'Neuroblastoma diagnosed after age 1 tends to be more aggressive and may require more intensive treatment including chemotherapy, surgery, radiation, and immunotherapy. However, treatment advances have significantly improved survival rates. Low-risk and intermediate-risk neuroblastomas have survival rates above 90%. Even high-risk neuroblastoma has seen improving outcomes with modern multimodal therapy.',
    },
  ],
  whenNormal: [
    'Your baby was evaluated for a mass and it was found to be benign (such as a normal lymph node or cyst)',
    'Your baby has small "stork bite" birthmarks or typical newborn skin findings, not blueberry muffin lesions',
    'Your baby\'s abdominal exam is normal and soft at well-child visits',
    'Your baby is growing well, active, and has no unexplained masses or symptoms',
  ],
  whenToMention: [
    'You feel a firm lump or mass in your baby\'s abdomen, neck, or anywhere on the body',
    'Your baby has unexplained dark circles around the eyes or protruding eyes',
    'Your baby has unusual firm blue or purple skin nodules',
  ],
  whenToActNow: [
    'Your baby has a rapidly growing abdominal mass with poor feeding, vomiting, or signs of distress',
    'Your baby has sudden weakness in the legs, difficulty walking, or changes in bladder or bowel function — a spinal tumor may be compressing the spinal cord',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Cancer Institute. Neuroblastoma Treatment (PDQ) — Patient Version. NCI, 2024.',
      url: 'https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Neuroblastoma — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/neuroblastoma/symptoms-causes/syc-20351017',
    },
  ],
};
