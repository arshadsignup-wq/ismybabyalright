import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-celiac-disease-signs',
  title: 'Celiac Disease Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby celiac disease signs',
    'celiac disease baby symptoms',
    'baby gluten intolerance signs',
    'baby celiac diagnosis',
    'baby celiac disease when to test',
    'infant celiac symptoms',
    'baby chronic diarrhea celiac',
    'baby bloated belly celiac',
    'toddler celiac disease',
    'baby failure thrive celiac',
  ],
  quickAnswer:
    'Celiac disease is an autoimmune condition triggered by gluten that damages the small intestine lining. Signs in babies include chronic diarrhea, bloating, poor weight gain, irritability, and failure to thrive after gluten-containing foods are introduced. Celiac disease can be diagnosed with blood tests and confirmed with an intestinal biopsy. Early diagnosis and a gluten-free diet allow for normal growth and development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Celiac disease does not present before gluten is introduced into the diet, which typically occurs around 6 months. However, if there is a strong family history of celiac disease, discuss with your pediatrician when to introduce gluten and what signs to watch for.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Celiac disease cannot develop until gluten exposure occurs. Current recommendations suggest introducing gluten between 4 and 6 months as part of complementary feeding, regardless of celiac risk. There is no benefit to delaying gluten introduction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Symptoms typically appear weeks to months after gluten introduction. Classic signs include chronic diarrhea (pale, bulky, foul-smelling stools), abdominal bloating, irritability, and poor weight gain. Some babies may present with constipation instead. If symptoms develop after starting wheat, barley, or rye-containing foods, discuss celiac testing with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Celiac disease may become more apparent as the toddler eats more gluten-containing foods. A distended abdomen, chronic loose stools, short stature, or behavioral changes like irritability and poor appetite may prompt testing. Blood tests (tTG-IgA antibody) can screen for celiac disease. Do not remove gluten before testing, as this can cause false-negative results.',
    },
  ],
  whenNormal: [
    'Normal stool changes when introducing wheat or grain-based foods that resolve quickly',
    'Occasional loose stools after gluten-containing foods in an otherwise thriving child',
  ],
  whenToMention: [
    'Chronic diarrhea, bloating, or poor weight gain after gluten-containing foods are introduced',
    'Family history of celiac disease and you want to discuss screening',
    'Your child is irritable and not growing as expected',
  ],
  whenToActNow: [
    'Severe failure to thrive with significant weight loss or malnutrition',
    'Severe abdominal distension with pain',
    'An older child who has been growing normally begins to lose weight and have chronic digestive symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Celiac Disease.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Celiac Disease in Children. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2016-0123/52517/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Celiac Disease in Children. World Journal of Gastroenterology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28148535/',
    },
  ],
  relatedConcernSlugs: ['diarrhea', 'baby-malabsorption-signs', 'baby-toddler-diarrhea-chronic', 'baby-food-intolerance-vs-allergy'],
};
