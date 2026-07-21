import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'smith-lemli-opitz-syndrome-baby',
  title: 'Smith-Lemli-Opitz Syndrome (SLOS) in Babies',
  category: 'medical',
  searchTerms: [
    'Smith-Lemli-Opitz syndrome baby',
    'SLOS baby symptoms',
    'low cholesterol baby syndrome',
    'cholesterol synthesis disorder baby',
    '2-3 toe syndactyly baby',
    '7-dehydrocholesterol elevated baby',
    'DHCR7 gene mutation baby',
    'ambiguous genitalia baby SLOS',
    'Smith-Lemli-Opitz facial features',
    'cholesterol supplementation baby',
  ],
  quickAnswer:
    'Smith-Lemli-Opitz syndrome (SLOS) is an inherited metabolic disorder caused by a deficiency of the enzyme 7-dehydrocholesterol reductase (DHCR7), which is needed for the final step of cholesterol synthesis. Low cholesterol impairs development because cholesterol is essential for cell membranes, brain development, and hormone production. Characteristic features include distinctive facial features, 2-3 toe syndactyly (webbing between the second and third toes), cleft palate, ambiguous genitalia in males, and intellectual disability. Severity varies widely. Cholesterol supplementation is the primary treatment and can improve growth and behavior.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'SLOS may be suspected at birth based on characteristic features: small head (microcephaly), ptosis (droopy eyelids), a small upturned nose with anteverted nostrils, micrognathia (small jaw), 2-3 toe syndactyly, and in severely affected males, ambiguous genitalia or hypospadias. Cleft palate occurs in about 50% of cases. Severely affected newborns may have multiple organ malformations and feeding difficulties. Diagnosis is confirmed by elevated 7-dehydrocholesterol (7-DHC) levels in blood and genetic testing of the DHCR7 gene. Cholesterol supplementation is typically started immediately upon diagnosis.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Feeding difficulties are very common and may include poor suck, vomiting, and failure to thrive. Many infants have significant irritability and tactile defensiveness (sensitivity to touch). Growth is typically poor. Cholesterol supplementation (dietary cholesterol and sometimes simvastatin in older children) is the cornerstone of treatment. Cardiac defects occur in about 50% of affected children and need evaluation. Photosensitivity (sensitivity to ultraviolet light) is common and requires sun protection.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Developmental delays are evident across motor, speech, and cognitive domains, though the severity is highly variable. Children on the milder end of the spectrum may walk and develop some speech, while severely affected children may have profound intellectual disability. Behavioral features can include autistic-like behaviors, self-injurious behavior, and sleep disturbances. Cholesterol supplementation may help improve behavior, growth, and development in some children. Ongoing monitoring for GI issues, kidney malformations, and adrenal insufficiency is important.',
    },
    {
      ageRange: '3 years+',
      context:
        'Children with milder SLOS can make meaningful developmental progress with therapies and medical management. The behavioral profile often includes anxiety, hyperactivity, and sensory processing difficulties. Photosensitivity continues and sun avoidance with protective clothing and sunscreen is important. Some children develop pyloric stenosis or Hirschsprung disease. Lifelong cholesterol supplementation is needed. Genetic counseling is recommended for families, as SLOS is autosomal recessive with a 25% recurrence risk.',
    },
  ],
  whenNormal: [
    'Your baby has 2-3 toe syndactyly as an isolated finding with no other features of SLOS (isolated syndactyly is common and usually benign)',
    'Testing for SLOS (7-DHC levels) was performed and came back normal',
    'Your child with mild SLOS is on cholesterol supplementation and is growing and developing with appropriate therapies',
  ],
  whenToMention: [
    'Your baby has 2-3 toe syndactyly combined with other features such as a small head, distinctive facial features, or feeding difficulties',
    'Your baby has unexpectedly low cholesterol on blood testing',
    'Your child with SLOS is having severe behavioral issues, ongoing feeding difficulties, or poor growth despite treatment',
    'You want to discuss genetic testing, diagnosis confirmation, or recurrence risk',
  ],
  whenToActNow: [
    'Your newborn with suspected or confirmed SLOS has severe feeding difficulties, is dehydrated, or is losing weight',
    'Your baby has signs of adrenal crisis including lethargy, vomiting, poor feeding, and low blood pressure',
    'Your baby has signs of a heart defect such as rapid breathing, poor feeding, sweating during feeds, or bluish color',
    'Your child has signs of intestinal obstruction such as bilious vomiting, abdominal distension, or absence of bowel movements',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-metabolic-disorder-signs', 'syndactyly-webbed-fingers-toes'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Smith-Lemli-Opitz Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/7568/smith-lemli-opitz-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Smith-Lemli-Opitz Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/smith-lemli-opitz-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'Nowaczyk MJM, Bhatt A. Smith-Lemli-Opitz Syndrome. GeneReviews, National Library of Medicine, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1143/',
    },
  ],
};
