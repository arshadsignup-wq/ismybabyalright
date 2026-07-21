import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'thalassemia-baby-trait-disease',
  title: 'Thalassemia in My Baby - Trait vs Disease',
  category: 'medical',
  searchTerms: [
    'thalassemia baby',
    'thalassemia trait baby',
    'beta thalassemia infant',
    'alpha thalassemia baby',
    'thalassemia major baby',
    'thalassemia newborn screening',
    'baby anemia thalassemia',
    'baby needs blood transfusion anemia',
    'Cooley\'s anemia baby',
    'hemoglobin Bart\'s baby',
  ],
  quickAnswer:
    'Thalassemia is a group of inherited blood disorders where the body makes abnormal or insufficient hemoglobin, leading to anemia. There are two main types: alpha thalassemia and beta thalassemia. Thalassemia trait (minor) causes mild or no anemia and usually requires no treatment. Thalassemia disease (major or intermedia) causes more significant anemia that may require regular blood transfusions. Most cases are identified through newborn screening. Families with Mediterranean, Middle Eastern, African, or Southeast Asian heritage are at higher risk.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with thalassemia major (such as beta thalassemia major or Cooley\'s anemia) may appear healthy at birth because they still have high levels of fetal hemoglobin, which is not affected by beta-globin mutations. Newborn screening can detect abnormal hemoglobin patterns and identify babies at risk. Alpha thalassemia major (hemoglobin Bart\'s hydrops fetalis) is the most severe form and usually causes death in utero or shortly after birth. Babies with hemoglobin H disease (a moderate form of alpha thalassemia) may have mild jaundice and anemia at birth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when beta thalassemia major typically becomes apparent, as fetal hemoglobin declines and is replaced by abnormal or absent adult hemoglobin. Symptoms include progressive pallor, poor feeding, failure to thrive, irritability, and enlargement of the spleen and liver. The baby\'s hemoglobin may drop significantly (below 7 g/dL), requiring the first blood transfusion. If your baby was identified on newborn screening, your hematologist will monitor hemoglobin levels closely during this period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with thalassemia major are typically on a regular transfusion program by this age, receiving blood transfusions every 2-4 weeks to maintain hemoglobin above 9-10 g/dL. Without transfusions, babies develop severe anemia, bone marrow expansion causing facial bone changes, growth failure, and organ damage. Babies with thalassemia intermedia may have moderate anemia that does not yet require transfusions but needs close monitoring. Iron chelation therapy to prevent iron overload from transfusions is typically started after 10-20 transfusions or when ferritin levels rise.',
    },
    {
      ageRange: '1-3 years',
      context:
        'For children on regular transfusions, the focus shifts to maintaining adequate hemoglobin levels, monitoring iron overload, and ensuring normal growth and development. Thalassemia trait (minor) is often discovered incidentally when a blood count shows mild microcytic anemia that does not respond to iron supplements. Thalassemia trait does not require treatment but is important for genetic counseling, as two parents with trait have a 25% chance of having a child with thalassemia major with each pregnancy. Bone marrow transplant (hematopoietic stem cell transplant) is the only current cure for thalassemia major and is most successful when performed in young children with a matched sibling donor.',
    },
  ],
  whenNormal: [
    'Your child has thalassemia trait (minor) and has mild or no anemia with no symptoms',
    'Newborn screening identified a thalassemia carrier state and your pediatrician confirms no significant anemia',
    'Mild microcytic anemia that is stable and does not worsen over time, consistent with trait',
    'Your child with thalassemia trait is growing and developing normally',
  ],
  whenToMention: [
    'Your baby appears progressively paler over weeks, is more tired than usual, or is not feeding well',
    'Your family has a history of thalassemia or you have Mediterranean, Middle Eastern, African, or Southeast Asian heritage and your baby has unexplained anemia',
    'Your baby\'s mild anemia is not responding to iron supplementation, which may suggest thalassemia rather than iron deficiency',
  ],
  whenToActNow: [
    'Your baby is very pale, lethargic, breathing rapidly, or refusing feeds, as this may indicate severe anemia requiring urgent blood transfusion',
    'Your baby with known thalassemia develops high fever, which could indicate a serious infection especially if the child has had a splenectomy or has a central line for transfusions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['iron-deficiency-anemia-baby', 'sickle-cell-disease-baby', 'pallor-baby', 'hereditary-spherocytosis-baby', 'physiologic-anemia-infancy'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Thalassemia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Thalassemia.aspx',
    },
    {
      org: 'ASH',
      citation:
        'American Society of Hematology. Thalassemia.',
      url: 'https://www.hematology.org/education/patients/anemia/thalassemia',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Thalassemias.',
      url: 'https://www.nhlbi.nih.gov/health/thalassemias',
    },
  ],
};
