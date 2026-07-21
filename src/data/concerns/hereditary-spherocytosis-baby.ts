import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hereditary-spherocytosis-baby',
  title: 'Hereditary Spherocytosis in My Baby',
  category: 'medical',
  searchTerms: [
    'hereditary spherocytosis baby',
    'spherocytosis newborn',
    'baby jaundice anemia spherocytosis',
    'baby sphere shaped red blood cells',
    'baby hemolytic anemia inherited',
    'baby enlarged spleen anemia',
    'baby anemia jaundice spleen',
    'spherocytosis newborn screening',
    'baby Coombs negative hemolytic anemia',
    'baby gallstones anemia',
  ],
  quickAnswer:
    'Hereditary spherocytosis (HS) is the most common inherited hemolytic anemia in people of northern European descent. Red blood cells are sphere-shaped instead of disc-shaped, causing them to be trapped and destroyed in the spleen. This leads to anemia, jaundice (yellowing of skin and eyes), and an enlarged spleen. Severity ranges from mild (compensated) to severe. In newborns, it often presents as prolonged or severe jaundice. Most children with HS lead normal lives with monitoring, and some require splenectomy later in childhood.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Hereditary spherocytosis often first presents in newborns as significant or prolonged jaundice that may require phototherapy or, in severe cases, exchange transfusion. The jaundice occurs because sphere-shaped red blood cells are destroyed more rapidly, releasing bilirubin. A direct Coombs test is negative (distinguishing HS from immune-mediated hemolysis). The blood smear shows spherocytes (small, round red blood cells without the normal central pallor). A family history of HS, anemia, jaundice, gallstones, or splenectomy in a parent is a strong clue.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Infants with HS may develop worsening anemia during this period as their normal physiologic anemia of infancy is compounded by ongoing hemolysis. Some babies require one or more blood transfusions in the first few months of life, particularly those with severe HS. Reticulocyte counts (young red blood cells) will be elevated as the bone marrow tries to compensate for the red blood cell destruction. Folic acid supplementation is typically recommended to support increased red blood cell production.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this age, the severity of HS becomes more apparent. Children with mild HS may have compensated hemolysis (the bone marrow keeps up with red blood cell destruction) and require no transfusions. Those with moderate to severe HS may need occasional transfusions, especially during viral infections (aplastic crises caused by parvovirus B19) when the bone marrow temporarily stops producing red blood cells. The spleen may become palpably enlarged. Diagnosis is confirmed with an osmotic fragility test or eosin-5-maleimide (EMA) binding test.',
    },
    {
      ageRange: '1-5 years',
      context:
        'During early childhood, the main concerns are managing anemia, monitoring for aplastic crises during infections, and watching for gallstones (which can develop from chronic hemolysis even in young children). Splenectomy is considered for children with severe HS requiring frequent transfusions, but it is generally deferred until after age 5 when possible to reduce the risk of overwhelming post-splenectomy infection. Partial splenectomy may be considered in younger children. All children with HS should receive pneumococcal and meningococcal vaccines, especially before any planned splenectomy.',
    },
  ],
  whenNormal: [
    'Mild jaundice in a newborn that resolves with standard phototherapy and does not recur',
    'A family member has known mild HS with compensated hemolysis requiring no treatment',
    'Your child has mild HS with a stable hemoglobin above 9-10 g/dL, mild reticulocytosis, and no symptoms',
    'Slight splenic enlargement that remains stable and your child is active and growing well',
  ],
  whenToMention: [
    'Your baby\'s jaundice is lasting longer than expected or recurs after initial treatment',
    'Your child with known HS seems more tired, pale, or irritable than usual, which may indicate worsening anemia',
    'You notice your child\'s abdomen seems swollen or you can feel an enlarged spleen',
    'Your child develops abdominal pain that could indicate gallstones from chronic hemolysis',
  ],
  whenToActNow: [
    'Your baby or child with HS suddenly becomes very pale, lethargic, and has a rapid heartbeat, which could indicate an aplastic crisis (often triggered by parvovirus B19 infection) requiring emergency transfusion',
    'Your child with HS develops high fever and appears very ill, especially if they have had a splenectomy, as this could be overwhelming post-splenectomy sepsis requiring immediate antibiotics and emergency care',
    'A newborn has severe jaundice with bilirubin levels rising rapidly despite phototherapy, which may require exchange transfusion',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pallor-baby', 'iron-deficiency-anemia-baby', 'thalassemia-baby-trait-disease', 'g6pd-deficiency-baby', 'physiologic-anemia-infancy'],
  sources: [
    {
      org: 'ASH',
      citation:
        'Bolton-Maggs PHB, Langer JC, Iolascon A, Tittensor P, King MJ. Guidelines for the Diagnosis and Management of Hereditary Spherocytosis - 2011 Update. British Journal of Haematology. 2012;156(1):37-49.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22055020/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics. 2004;114(1):297-316.',
      url: 'https://publications.aap.org/pediatrics/article/114/1/297/67055',
    },
    {
      org: 'NIH',
      citation:
        'National Organization for Rare Disorders (NORD). Hereditary Spherocytosis.',
      url: 'https://rarediseases.org/rare-diseases/hereditary-spherocytosis/',
    },
  ],
};
