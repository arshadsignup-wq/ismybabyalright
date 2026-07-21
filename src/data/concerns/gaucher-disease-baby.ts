import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gaucher-disease-baby',
  title: 'Gaucher Disease in Babies',
  category: 'medical',
  searchTerms: [
    'gaucher disease baby',
    'gaucher disease symptoms infant',
    'enlarged spleen baby',
    'lysosomal storage disorder baby',
    'gaucher disease type 2',
    'gaucher disease Ashkenazi Jewish',
    'glucocerebrosidase deficiency baby',
    'gaucher disease treatment baby',
    'enzyme replacement therapy baby',
    'gaucher disease newborn screening',
  ],
  quickAnswer:
    'Gaucher disease is the most common lysosomal storage disorder, caused by a deficiency of the enzyme glucocerebrosidase. It has three main types: Type 1 (non-neuronopathic) causes enlarged liver and spleen, bone problems, and anemia but does not affect the brain; Type 2 (acute neuronopathic) is a severe infantile form with rapid neurological decline; and Type 3 (chronic neuronopathic) has a slower neurological course. Enzyme replacement therapy is available and effective for Types 1 and 3. Gaucher disease is more common in individuals of Ashkenazi Jewish descent.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with Type 2 (acute neuronopathic) Gaucher disease may begin showing signs in the first weeks to months of life, including difficulty swallowing, excessive arching of the neck (retroflexion), and a fixed squint (strabismus). The spleen and liver may already be noticeably enlarged. Type 1 and Type 3 typically do not cause symptoms this early. If Gaucher disease runs in your family, genetic testing can be done at birth to confirm or rule out the diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'In Type 2 Gaucher disease, symptoms progress rapidly. Babies develop increasing difficulty feeding, failure to thrive, progressive stiffness (spasticity), and may have seizures. Hepatosplenomegaly (enlarged liver and spleen) becomes more pronounced, and the baby may develop a characteristic high-pitched cry. Unfortunately, Type 2 Gaucher disease does not respond to enzyme replacement therapy, and most affected infants do not survive beyond age 2. A pediatric geneticist or metabolic specialist should be involved in care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'For Type 2, neurological deterioration continues with loss of previously acquired skills. For Type 3 (chronic neuronopathic), subtle signs may begin to appear, including abnormal eye movements (particularly difficulty with horizontal eye movement), mild developmental delays, or an enlarged spleen found during a routine exam. Type 1 rarely causes symptoms in the first year of life but may be suspected if blood work shows low platelet counts or anemia.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Type 1 Gaucher disease may present during the toddler or preschool years with an enlarged spleen, easy bruising from low platelets, fatigue from anemia, or bone pain. Type 3 may show more pronounced neurological symptoms including learning difficulties, eye movement abnormalities, and seizures. Enzyme replacement therapy (imiglucerase, velaglucerase alfa, or taliglucerase alfa) can effectively treat the non-neurological symptoms. Substrate reduction therapy (eliglustat) is another option for some patients.',
    },
    {
      ageRange: 'Older children and beyond',
      context:
        'Type 1 Gaucher disease is a lifelong condition that requires ongoing monitoring and treatment. Children may experience bone crises (episodes of severe bone pain), growth delays, and delayed puberty. With enzyme replacement therapy, most children with Type 1 lead full, active lives. Regular monitoring includes blood counts, liver and spleen size measurements, and bone density assessments.',
    },
  ],
  whenNormal: [
    'Your baby has been tested and does not have Gaucher disease',
    'You are a Gaucher disease carrier but your partner is not — your baby will not have the disease',
    'Your child has Type 1 Gaucher disease and is responding well to enzyme replacement therapy with stable blood counts and organ sizes',
    'Carrier screening identified your carrier status before pregnancy and appropriate genetic counseling was provided',
  ],
  whenToMention: [
    'Both parents are known carriers of Gaucher disease and you want diagnostic testing for your baby',
    'Your baby has an unexplained enlarged spleen or liver found on exam',
    'Your baby has persistent low platelet counts or unexplained anemia that has not been explained by other causes',
    'You are of Ashkenazi Jewish descent and have not had carrier screening',
  ],
  whenToActNow: [
    'Your young baby has difficulty swallowing, excessive neck arching, and an enlarged abdomen — these may indicate Type 2 Gaucher disease and need urgent evaluation',
    'Your baby with known Gaucher disease develops seizures, severe bone pain, or difficulty breathing',
    'Your baby has a rapidly enlarging liver or spleen along with feeding difficulties or failure to thrive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-metabolic-disorder-signs',
    'newborn-screening-abnormal-results',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gaucher Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/gaucher-disease/',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. Gaucher Disease: Diagnosis and Management. ACMG Practice Guidelines, 2022.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Gaucher Disease. NORD, 2023.',
      url: 'https://rarediseases.org/rare-diseases/gaucher-disease/',
    },
  ],
};
