import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wolf-hirschhorn-syndrome-baby',
  title: 'Wolf-Hirschhorn Syndrome (4p Deletion) in Babies',
  category: 'medical',
  searchTerms: [
    'Wolf-Hirschhorn syndrome baby',
    '4p deletion syndrome baby',
    'Greek warrior helmet face baby',
    'Wolf-Hirschhorn seizures',
    'Wolf-Hirschhorn growth restriction',
    '4p minus syndrome baby',
    'Wolf-Hirschhorn facial features',
    'Wolf-Hirschhorn heart defect',
    'Wolf-Hirschhorn intellectual disability',
    'Wolf-Hirschhorn syndrome diagnosis',
  ],
  quickAnswer:
    'Wolf-Hirschhorn syndrome (WHS) is a rare chromosomal condition caused by a deletion on the short arm of chromosome 4 (4p). It is characterized by a distinctive "Greek warrior helmet" facial appearance (broad forehead, prominent glabella, widely spaced eyes, and short philtrum), significant growth restriction, seizures that are often difficult to control, and intellectual disability. Heart defects occur in about 50% of cases, and kidney abnormalities are also common. Severity varies widely depending on the size of the deletion. There is no cure, but supportive care, seizure management, and early intervention can significantly improve quality of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Wolf-Hirschhorn syndrome is often suspected at birth based on the characteristic facial appearance and severe growth restriction (low birth weight, small length, and small head). The "Greek warrior helmet" facial profile includes a broad forehead with prominent glabella (the area between the eyebrows), widely spaced eyes (hypertelorism), arched eyebrows, a short philtrum, and a small chin (micrognathia). Feeding difficulties are significant and many infants require tube feeding. Diagnosis is confirmed by chromosomal microarray or FISH testing for 4p deletion. Cardiac and renal evaluations should be performed.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Seizures are a major feature of WHS, affecting approximately 90-100% of individuals, often beginning in the first year of life. Seizure types can include tonic-clonic, absence, and myoclonic seizures. Many children experience fever-triggered seizures or status epilepticus (prolonged seizures). An EEG and neurological evaluation are essential. Anti-seizure medications are used, though seizures can be difficult to control and may require multiple medications. Growth remains significantly below typical curves. Feeding difficulties may require ongoing tube feeding support.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Developmental delays are significant across all domains. Many children eventually sit independently but walking is significantly delayed or may not be achieved in more severely affected individuals. Speech development is very limited, and augmentative communication strategies are important. Seizures may improve somewhat with age in some children, though they remain a lifelong concern. Skeletal anomalies including scoliosis and hip dysplasia may develop. Dental abnormalities are common. Recurrent infections can occur due to immune system differences.',
    },
    {
      ageRange: '3 years+',
      context:
        'With appropriate medical management and therapy, many individuals with WHS continue to gain new skills. The seizure tendency often improves during childhood, with some individuals becoming seizure-free by adolescence. Growth continues to be restricted. Social and emotional development can be a relative strength for many individuals. Life expectancy is variable and depends largely on the severity of the condition and management of complications, particularly seizures and cardiac defects. Many individuals with milder forms live into adulthood.',
    },
  ],
  whenNormal: [
    'Your baby was evaluated for a chromosomal abnormality and testing (microarray or karyotype) showed no 4p deletion',
    'Your child with WHS is having a period of good seizure control on their current medications',
    'Your child with WHS is making developmental progress, even if slowly, with appropriate therapies and support',
  ],
  whenToMention: [
    'Your newborn has facial features and growth restriction that raise concern for Wolf-Hirschhorn syndrome',
    'Your child with WHS is having increased seizure frequency or new seizure types',
    'Your child with WHS has feeding difficulties, poor weight gain, or recurrent infections',
    'You want to discuss genetic counseling, recurrence risk, or ongoing management plans',
  ],
  whenToActNow: [
    'Your child has a seizure lasting longer than 5 minutes or is having repeated seizures without recovery in between (status epilepticus)',
    'Your baby has signs of a heart problem such as rapid breathing, poor feeding, sweating during feeds, or bluish color',
    'Your baby is unable to feed, is severely dehydrated, or has signs of aspiration (choking, recurrent pneumonia)',
    'Your child becomes unresponsive, has difficulty breathing, or develops a high fever with signs of serious infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['microcephaly-signs', 'baby-seizure-types-infant', 'intrauterine-growth-restriction'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Wolf-Hirschhorn Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/5880/wolf-hirschhorn-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Wolf-Hirschhorn Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/wolf-hirschhorn-syndrome/',
    },
    {
      org: '4p- Support Group',
      citation:
        'The 4p- Support Group. Information About Wolf-Hirschhorn Syndrome for Families.',
      url: 'https://www.4p-supportgroup.org/about-wolf-hirschhorn-syndrome/',
    },
  ],
};
