import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'biotinidase-deficiency-baby',
  title: 'Biotinidase Deficiency in Babies',
  category: 'medical',
  searchTerms: [
    'biotinidase deficiency baby',
    'biotinidase deficiency newborn screening',
    'biotin deficiency baby',
    'biotinidase deficiency symptoms infant',
    'biotin treatment baby seizures',
    'biotinidase deficiency skin rash',
    'biotinidase deficiency hair loss baby',
    'biotinidase deficiency hearing loss',
    'biotinidase deficiency treatment biotin',
    'treatable metabolic condition baby',
  ],
  quickAnswer:
    'Biotinidase deficiency is an inherited metabolic disorder in which the body cannot properly recycle the vitamin biotin, which is essential for several important enzymes. Without treatment, it causes seizures, low muscle tone (hypotonia), skin rash, hair loss, hearing loss, and developmental delay. The remarkable news is that biotinidase deficiency is one of the most treatable metabolic conditions — daily biotin supplementation completely prevents all symptoms when started early through newborn screening. Children treated from birth develop entirely normally.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Babies with biotinidase deficiency appear completely normal at birth. Newborn screening detects the enzyme deficiency before any symptoms develop. If your baby\'s newborn screen is positive for biotinidase deficiency, confirmatory testing will measure the level of biotinidase enzyme activity. Profound deficiency (less than 10% enzyme activity) requires lifelong biotin supplementation. Partial deficiency (10-30% enzyme activity) may also benefit from biotin supplementation, especially during times of stress or illness. Treatment is simple — daily oral biotin, an inexpensive and widely available vitamin.',
    },
    {
      ageRange: '1-6 months',
      context:
        'If biotinidase deficiency is not detected on newborn screening and goes untreated, symptoms can begin appearing in the first months of life. The most common early signs are seizures that do not respond well to standard seizure medications, a skin rash (often eczema-like, around the eyes, nose, and mouth), and hair loss (alopecia). The baby may develop low muscle tone and feeding difficulties. These symptoms resolve completely when biotin supplementation is started. Babies diagnosed on newborn screening and started on biotin in the first weeks of life never develop these symptoms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'In untreated babies, symptoms progress and can include developmental delays, hearing loss (which may become permanent if treatment is delayed too long), vision problems (optic atrophy), recurrent infections due to immune dysfunction, and metabolic acidosis. Treated babies on daily biotin have none of these problems and develop completely normally. The daily biotin dose is typically 5-20 mg for profound deficiency. Biotin is given as an oral supplement and is well-tolerated with essentially no side effects.',
    },
    {
      ageRange: '1 year and beyond',
      context:
        'Children diagnosed and treated early through newborn screening have an excellent long-term prognosis — they develop normally, attend school without limitations, and live healthy lives. The only requirement is taking daily biotin supplementation lifelong. If biotin is stopped, symptoms can recur at any age. One important note: biotin supplements can interfere with some laboratory tests (particularly thyroid tests and troponin), so parents should always inform healthcare providers that their child takes biotin before any blood tests.',
    },
    {
      ageRange: 'Late or missed diagnosis',
      context:
        'If biotinidase deficiency is diagnosed late (after symptoms have developed), biotin supplementation will still resolve seizures, skin rash, and hair loss. However, hearing loss and vision changes that have already occurred may be permanent. This underscores the critical importance of newborn screening — every day of untreated biotinidase deficiency increases the risk of irreversible damage. If you suspect your child may have been missed on newborn screening and they have unexplained seizures, rash, or hair loss, ask your doctor about biotinidase testing.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for biotinidase deficiency',
    'Your baby was diagnosed with biotinidase deficiency, is taking daily biotin, and is developing completely normally',
    'Confirmatory testing showed partial biotinidase deficiency, and your baby is on biotin supplementation as a precaution and is thriving',
    'An initial borderline screen was followed by confirmatory testing showing adequate enzyme activity',
  ],
  whenToMention: [
    'Your baby received an abnormal biotinidase deficiency result on newborn screening — follow up for confirmatory testing to determine if treatment is needed',
    'Your baby has unexplained seizures combined with a skin rash or hair loss that has not been diagnosed',
    'You are wondering if your child\'s biotin dose needs adjustment as they grow',
    'Your child with biotinidase deficiency needs blood work and you want to make sure the lab knows about biotin supplementation to avoid test interference',
  ],
  whenToActNow: [
    'Your baby with known biotinidase deficiency has missed several days of biotin supplementation and develops seizures, a skin rash, or becomes lethargic — resume biotin immediately and contact your metabolic team',
    'Your baby has seizures that are not responding to standard treatment, combined with a distinctive rash around the face and hair loss — ask your doctor about biotinidase testing as a possible treatable cause',
    'Your child with biotinidase deficiency develops hearing changes that may indicate hearing loss — early audiology evaluation is important',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'newborn-screening-abnormal-results',
    'baby-seizure-types-infant',
    'baby-hair-loss-patches',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Biotinidase Deficiency. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/biotinidase-deficiency/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Biotinidase Deficiency Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/biotinidase-deficiency',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. ACT Sheet: Decreased Biotinidase Activity. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
