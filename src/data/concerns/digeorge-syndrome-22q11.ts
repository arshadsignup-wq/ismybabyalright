import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'digeorge-syndrome-22q11',
  title: 'My Baby Was Diagnosed with 22q11.2 Deletion Syndrome (DiGeorge)',
  category: 'medical',
  searchTerms: [
    'DiGeorge syndrome baby',
    '22q11 deletion syndrome',
    '22q11.2 deletion baby',
    'velocardiofacial syndrome',
    'DiGeorge syndrome heart defect',
    '22q11 deletion immune problems',
    'DiGeorge syndrome calcium',
    '22q11 deletion speech delay',
    'DiGeorge syndrome prognosis',
    'CATCH 22 syndrome baby',
  ],
  quickAnswer:
    '22q11.2 deletion syndrome (also known as DiGeorge syndrome or velocardiofacial syndrome) is caused by a small missing piece of chromosome 22 and is the most common microdeletion syndrome, affecting about 1 in 4,000 births. It can affect many body systems — heart, immune system, palate, calcium regulation, learning, and behavior. The severity varies widely, even within the same family. Some children have significant medical needs, while others have mild features. With appropriate monitoring and support, many people with 22q11.2 deletion syndrome lead fulfilling, independent lives.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Common findings in infancy include heart defects (particularly interrupted aortic arch, tetralogy of Fallot, and VSD), low calcium levels (hypocalcemia that can cause seizures), immune deficiency (reduced T cells), and feeding difficulties. A cardiac evaluation is a priority. Calcium levels should be monitored closely in the first weeks. If your baby\'s immune function is reduced, discuss vaccination modifications and infection precautions with your immunologist. Feeding therapy may be needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After any acute medical issues are managed, developmental monitoring becomes central. Motor delays are common, and early intervention (physical and occupational therapy) is beneficial. Palatal abnormalities — ranging from cleft palate to velopharyngeal insufficiency (air leaking through the nose during speech) — should be evaluated, as they affect feeding and later speech. Hearing should be tested, as ear infections and hearing loss are more common.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Speech and language delays are one of the most consistent features. Speech therapy should begin early. Cognitive development varies widely — many children are in the normal range, while others have mild to moderate intellectual disability. Behavioral concerns may include anxiety, ADHD-like symptoms, and difficulty with social interactions. Autoimmune conditions (such as thyroid disease) may develop and should be monitored.',
    },
    {
      ageRange: '3 years+',
      context:
        'With appropriate educational support, many children with 22q11.2 deletion syndrome succeed in school. Mental health monitoring is important — there is an increased risk of anxiety, ADHD, and later in life, psychotic disorders. Early mental health support is protective. The 22q11.2 Society and other family support organizations can connect you with other families and the latest research. New clinical trials continue to improve care.',
    },
  ],
  whenNormal: [
    'Your baby has 22q11.2 deletion syndrome with mild features and is receiving appropriate medical monitoring',
    'Your baby\'s heart defect has been repaired and they are recovering well',
    'Your child is progressing with therapies, even if at a slower pace than typical peers',
  ],
  whenToMention: [
    'Your baby seems to get sick more often than other babies or infections seem more severe — this may indicate immune issues need closer monitoring',
    'Your baby is having feeding difficulties, nasal regurgitation, or poor weight gain',
    'Your child\'s speech is significantly delayed or sounds very nasal',
    'Your child seems unusually anxious or is having behavioral difficulties',
  ],
  whenToActNow: [
    'Your baby has a seizure — this may be caused by low calcium. Call 911 and inform them of the 22q11.2 diagnosis',
    'Your baby is turning blue, breathing rapidly, or seems to be in cardiac distress — call 911',
    'Your baby has a high fever and you know their immune function is compromised — seek immediate medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'noonan-syndrome-baby',
    'charge-syndrome',
    'vacterl-association',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. 22q11.2 Deletion Syndrome.',
      url: 'https://medlineplus.gov/genetics/condition/22q112-deletion-syndrome/',
    },
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. 22q11.2 Deletion Syndrome.',
      url: 'https://www.chop.edu/conditions-diseases/chromosome-22q112-deletion-syndrome',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Clinical Practice Guidelines for 22q11.2 Deletion Syndrome. Journal of Pediatrics, 2023.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36528530/',
    },
  ],
};
