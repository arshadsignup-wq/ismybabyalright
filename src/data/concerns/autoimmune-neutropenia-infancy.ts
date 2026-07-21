import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'autoimmune-neutropenia-infancy',
  title: 'Autoimmune Neutropenia of Infancy - Low White Blood Cell Count',
  category: 'medical',
  searchTerms: [
    'autoimmune neutropenia infancy',
    'baby low neutrophil count',
    'baby low white blood cells',
    'neutropenia infant',
    'baby ANC low',
    'baby absolute neutrophil count low',
    'baby blood test low neutrophils',
    'benign neutropenia baby',
    'baby frequent infections neutropenia',
    'toddler low neutrophils',
  ],
  quickAnswer:
    'Autoimmune neutropenia of infancy (AIN) is the most common cause of chronic neutropenia (low neutrophil count) in children under 2 years old. The body makes antibodies against its own neutrophils (a type of white blood cell that fights bacterial infections), causing their count to drop. Despite the sometimes very low neutrophil numbers, most children with AIN have surprisingly mild clinical courses with only minor infections such as ear infections or skin infections. AIN typically resolves on its own by age 2 to 4 years and rarely requires treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'AIN is most commonly diagnosed between 5 and 15 months of age, but can occasionally be identified earlier when a blood test done for another reason reveals a very low absolute neutrophil count (ANC), often below 500 cells per microliter. In newborns, other causes of neutropenia such as neonatal alloimmune neutropenia (from maternal antibodies), sepsis, or congenital neutropenia syndromes should be considered first. If your baby has an isolated low neutrophil count but appears well and is gaining weight, your pediatrician may monitor with repeat blood counts before pursuing further workup.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age of diagnosis for AIN. Parents typically learn about the condition when routine blood work or blood tests during an illness reveal a very low ANC. Despite the alarming numbers (sometimes below 200), children with AIN are often surprisingly well. They may have slightly more frequent ear infections, upper respiratory infections, or skin infections than peers, but serious invasive bacterial infections (sepsis, pneumonia, meningitis) are rare. Anti-neutrophil antibodies can be detected in the blood, confirming the autoimmune cause. Bone marrow examination is generally not needed if the clinical picture is consistent with AIN.',
    },
    {
      ageRange: '1-2 years',
      context:
        'During this period, the neutrophil count often fluctuates, with some counts showing near-normal levels and others being very low. This variability is characteristic of AIN and helps distinguish it from more serious congenital neutropenia syndromes, where counts are consistently very low. Most children with AIN do not require any specific treatment. If your child develops a bacterial infection, standard antibiotics are effective. In rare cases of severe infection, G-CSF (granulocyte colony-stimulating factor) can be given to temporarily boost neutrophil production. Your hematologist will typically check blood counts every 1-3 months.',
    },
    {
      ageRange: '2-4 years',
      context:
        'The majority of children with AIN experience spontaneous resolution by age 2 to 4 years, with neutrophil counts gradually normalizing as the autoantibodies disappear. About 95% of cases resolve by age 5. Once neutrophil counts have been consistently normal for several months, monitoring can be discontinued. In the rare cases where neutropenia persists beyond age 5, further evaluation may be needed to rule out other causes. Children who have recovered from AIN have no long-term consequences and do not have increased risk of recurrence or other autoimmune conditions.',
    },
  ],
  whenNormal: [
    'Your child has a low neutrophil count discovered incidentally but is otherwise healthy and growing well',
    'Your child has AIN and experiences only mild infections such as occasional ear infections or skin infections that respond to standard antibiotics',
    'The neutrophil count fluctuates between low and near-normal levels over time',
    'Your child with known AIN is active, eating well, and meeting developmental milestones',
    'The neutrophil count is gradually improving over months as expected with the natural course of AIN',
  ],
  whenToMention: [
    'Your child with known AIN seems to be getting more frequent infections than before',
    'You notice mouth sores (stomatitis) or recurring skin infections or abscesses',
    'The neutropenia has persisted beyond age 4-5 years without improvement',
  ],
  whenToActNow: [
    'Your child with known neutropenia develops a fever of 100.4F (38C) or higher, as fever with neutropenia can indicate a serious bacterial infection that requires prompt medical evaluation and may need IV antibiotics',
    'Your child appears very ill with signs of sepsis such as high fever, rapid breathing, lethargy, mottled skin, or poor responsiveness, requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pallor-baby', 'baby-bruises-easily', 'petechiae-baby', 'baby-aplastic-anemia-signs', 'fanconi-anemia-baby-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Boxer LA. How to Approach Neutropenia. Hematology ASH Education Program. 2012;2012(1):174-182.',
      url: 'https://ashpublications.org/hematology/article/2012/1/174/83906',
    },
    {
      org: 'ASH',
      citation:
        'Bux J, Behrens G, Jaeger G, Welte K. Diagnosis and Clinical Course of Autoimmune Neutropenia in Infancy: Analysis of 240 Cases. Blood. 1998;91(1):181-186.',
      url: 'https://ashpublications.org/blood/article/91/1/181/261053',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Neutropenia. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007230.htm',
    },
  ],
};
