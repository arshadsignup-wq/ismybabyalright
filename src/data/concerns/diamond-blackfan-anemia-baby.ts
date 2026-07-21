import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diamond-blackfan-anemia-baby',
  title: 'Diamond-Blackfan Anemia in My Baby',
  category: 'medical',
  searchTerms: [
    'Diamond-Blackfan anemia baby',
    'DBA anemia infant',
    'pure red cell aplasia baby',
    'baby severe anemia 3 months',
    'baby anemia not making red blood cells',
    'baby anemia needs transfusion',
    'baby anemia with thumb abnormality',
    'congenital red cell aplasia',
    'steroid responsive anemia baby',
    'baby macrocytic anemia',
  ],
  quickAnswer:
    'Diamond-Blackfan anemia (DBA) is a rare inherited bone marrow failure syndrome where the bone marrow does not produce enough red blood cells. It typically presents in the first year of life, most commonly by 3 months of age, with severe anemia (pallor, poor feeding, rapid breathing). About 50% of affected children also have physical anomalies such as abnormal thumbs, short stature, or craniofacial differences. Most children respond to corticosteroid treatment, while others require regular blood transfusions or bone marrow transplant.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'DBA may not be immediately apparent at birth because babies are born with high hemoglobin levels. However, some newborns with DBA have physical features that may raise suspicion, including abnormal or triphalangeal thumbs (thumbs with three bones instead of two), flat nasal bridges, wide-set eyes, short neck, or congenital heart defects (present in about 15% of cases). If your newborn has any of these physical features along with anemia, your pediatrician may consider DBA in the differential diagnosis.',
    },
    {
      ageRange: '1-3 months',
      context:
        'This is the most common age for DBA to be diagnosed. While all babies experience a normal physiologic drop in hemoglobin around 6-8 weeks, babies with DBA develop much more severe anemia because their bone marrow fails to increase red blood cell production to compensate. Signs include progressive pallor, poor feeding, tachycardia (fast heart rate), and increased sleepiness. A blood count will show severe anemia with a very low reticulocyte count (the bone marrow is not making new red blood cells), which distinguishes DBA from other causes of infant anemia.',
    },
    {
      ageRange: '3-12 months',
      context:
        'After diagnosis, treatment with corticosteroids (prednisone) is typically started. About 80% of children with DBA initially respond to steroids with improvement in hemoglobin. However, some children lose their response over time, and long-term steroid use has significant side effects including growth suppression, bone thinning, and immune suppression. Children who do not respond to steroids require chronic blood transfusions every 3-5 weeks, with iron chelation therapy to manage iron overload. Genetic testing can identify mutations in ribosomal protein genes in about 60-70% of cases.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Long-term management of DBA focuses on maintaining adequate hemoglobin levels while minimizing treatment side effects. Some children experience spontaneous remission (about 20% by age 25). Hematopoietic stem cell transplant (bone marrow transplant) is the only cure and is considered for children who are transfusion-dependent, especially if a matched sibling donor is available. Children with DBA have an increased lifetime risk of certain cancers, including leukemia and solid tumors, requiring ongoing surveillance. Regular monitoring of growth, development, and iron levels is essential.',
    },
  ],
  whenNormal: [
    'Mild anemia at 6-8 weeks of age (physiologic nadir) in a baby who is otherwise well and has an adequate reticulocyte count',
    'A baby who is mildly pale but feeding well, growing normally, and has hemoglobin above 9 g/dL',
    'Brief episodes of pallor during illness that resolve as the baby recovers',
  ],
  whenToMention: [
    'Your baby seems increasingly pale, tired, or uninterested in feeding over several weeks',
    'Your baby has anemia that is more severe than expected for the physiologic nadir at 6-8 weeks',
    'Your baby has physical features such as unusual thumbs, a flat nasal bridge, or short stature along with anemia',
    'Your baby\'s anemia does not improve with iron supplementation',
  ],
  whenToActNow: [
    'Your baby is very pale, breathing rapidly, has a fast heartbeat, is refusing feeds, or is extremely lethargic, as this indicates severe anemia requiring urgent blood transfusion',
    'Your baby with known DBA develops fever and appears very ill, as immunosuppressive treatment increases infection risk',
    'Your baby becomes suddenly more pale and weak during a viral illness, which could indicate worsening anemia requiring emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pallor-baby', 'iron-deficiency-anemia-baby', 'baby-aplastic-anemia-signs', 'fanconi-anemia-baby-signs', 'physiologic-anemia-infancy'],
  sources: [
    {
      org: 'ASH',
      citation:
        'Vlachos A, Ball S, Dahl N, et al. Diagnosing and Treating Diamond Blackfan Anaemia: Results of an International Clinical Consensus Conference. British Journal of Haematology. 2008;142(6):859-876.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18671700/',
    },
    {
      org: 'NIH',
      citation:
        'National Organization for Rare Disorders (NORD). Diamond Blackfan Anemia.',
      url: 'https://rarediseases.org/rare-diseases/blackfan-diamond-anemia/',
    },
    {
      org: 'AAP',
      citation:
        'Da Costa L, Leblanc T, Mohandas N. Diamond-Blackfan Anemia. Blood. 2020;136(11):1262-1273.',
      url: 'https://ashpublications.org/blood/article/136/11/1262/461072',
    },
  ],
};
