import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fanconi-anemia-baby-signs',
  title: 'Fanconi Anemia Signs in My Baby',
  category: 'medical',
  searchTerms: [
    'Fanconi anemia baby',
    'Fanconi anemia signs infant',
    'baby bone marrow failure',
    'baby absent thumb radial',
    'baby short stature anemia',
    'baby thumb abnormality anemia',
    'Fanconi anemia newborn',
    'pancytopenia child',
    'baby missing thumb birth defect',
    'inherited bone marrow failure baby',
  ],
  quickAnswer:
    'Fanconi anemia (FA) is a rare inherited bone marrow failure syndrome that causes progressive decline in blood cell production, physical anomalies, short stature, and increased cancer risk. About 75% of affected children have birth defects, most commonly involving the thumbs and forearms (radial ray anomalies), skin pigmentation changes, and short stature. Bone marrow failure typically develops between ages 5 and 10 but can occur earlier. Early diagnosis through genetic testing is important for monitoring, treatment planning, and cancer surveillance.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Some babies with Fanconi anemia are identified at birth or shortly after due to visible physical anomalies. The most characteristic finding is absent, hypoplastic (underdeveloped), or abnormally shaped thumbs, sometimes with absent or shortened forearm bones (radial ray defects). Other features may include cafe-au-lait spots (flat brown skin patches), small head size (microcephaly), small eyes (microphthalmia), kidney malformations, and short stature. Blood counts may be normal at birth, and bone marrow failure has not yet developed. If your baby has absent or abnormal thumbs along with other birth defects, your pediatrician may consider testing for FA.',
    },
    {
      ageRange: '6 months - 2 years',
      context:
        'During infancy and early toddlerhood, blood counts may remain normal or show only subtle changes. However, children with FA often demonstrate short stature and may have growth failure. Skin pigmentation changes such as cafe-au-lait spots or areas of hypo- or hyperpigmentation may become more noticeable. If FA has been diagnosed or suspected, regular blood count monitoring (typically every 3-4 months) should begin. A chromosomal breakage test (using diepoxybutane or mitomycin C) is the standard diagnostic test, and genetic testing can confirm the specific FA gene mutation.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Some children with FA begin to show early signs of bone marrow failure during this period, including gradually decreasing blood counts. The first sign is often macrocytosis (large red blood cells) and elevated fetal hemoglobin, followed by thrombocytopenia (low platelets) causing easy bruising or petechiae. Anemia and neutropenia (low white blood cells) may follow. Children should have blood counts monitored every 3-4 months and bone marrow biopsies annually. Androgens (such as oxymetholone) can temporarily improve blood counts in some children.',
    },
    {
      ageRange: '5-10 years',
      context:
        'Bone marrow failure most commonly develops between ages 5 and 10. Children may present with fatigue and pallor (anemia), frequent infections (neutropenia), or easy bruising and bleeding (thrombocytopenia). Hematopoietic stem cell transplant (bone marrow transplant) is the only cure for the bone marrow failure and is ideally performed before the child becomes transfusion-dependent. Matched sibling donors have the best outcomes. Children with FA have a significantly increased lifetime risk of leukemia (especially acute myeloid leukemia) and solid tumors (especially head, neck, and gynecological cancers), requiring lifelong cancer surveillance.',
    },
    {
      ageRange: 'Long-term considerations',
      context:
        'Fanconi anemia requires lifelong multidisciplinary care. Even after successful bone marrow transplant, cancer surveillance remains essential because FA affects all cells, not just blood cells. Endocrine issues including growth hormone deficiency, hypothyroidism, and diabetes are common. Fertility is often affected. Genetic counseling is important for families, as FA is autosomal recessive (both parents carry one copy of the gene mutation). Prenatal testing and preimplantation genetic diagnosis are available for future pregnancies.',
    },
  ],
  whenNormal: [
    'A single cafe-au-lait spot without other physical anomalies or blood count abnormalities',
    'Slightly shorter stature that follows the family pattern with normal blood counts',
    'Minor thumb variations (such as a slightly smaller thumb) without other features of FA',
  ],
  whenToMention: [
    'Your baby has absent, abnormally shaped, or extra thumbs, especially if combined with other birth defects or short stature',
    'Your child has multiple cafe-au-lait spots along with short stature or unusual skin pigmentation patterns',
    'Your child has gradually decreasing blood counts or unexplained easy bruising',
    'There is a family history of Fanconi anemia, bone marrow failure, or early-onset cancer',
  ],
  whenToActNow: [
    'Your child develops significant unexplained bruising, petechiae, frequent nosebleeds, or bleeding gums along with fatigue and pallor, which may indicate bone marrow failure requiring urgent hematology evaluation',
    'Your child with known FA develops high fever with very low white blood cell counts, which could indicate a life-threatening infection needing emergency treatment',
    'Your child with FA develops persistent bone pain, unusual lumps, or unexplained weight loss, which could indicate malignancy requiring urgent evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-aplastic-anemia-signs', 'diamond-blackfan-anemia-baby', 'pallor-baby', 'petechiae-baby', 'baby-bruises-easily'],
  sources: [
    {
      org: 'Fanconi Anemia Research Fund',
      citation:
        'Fanconi Anemia: Guidelines for Diagnosis and Management. 4th Edition. Fanconi Anemia Research Fund. 2014.',
      url: 'https://www.fanconi.org/explore/clinical-care-guidelines',
    },
    {
      org: 'ASH',
      citation:
        'Shimamura A, Alter BP. Pathophysiology and Management of Inherited Bone Marrow Failure Syndromes. Blood Reviews. 2010;24(3):101-122.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20417588/',
    },
    {
      org: 'NIH',
      citation:
        'National Organization for Rare Disorders (NORD). Fanconi Anemia.',
      url: 'https://rarediseases.org/rare-diseases/fanconi-anemia/',
    },
  ],
};
