import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cornelia-de-lange-syndrome-baby',
  title: 'Cornelia de Lange Syndrome (CdLS) in Babies',
  category: 'medical',
  searchTerms: [
    'cornelia de lange syndrome baby',
    'CdLS baby signs',
    'baby small with limb anomalies',
    'baby synophrys thin lips',
    'cornelia de lange facial features baby',
    'baby growth restriction limb differences',
    'CdLS diagnosis infant',
    'baby excessive body hair small',
    'cornelia de lange developmental delay',
    'baby upturned nose long philtrum',
  ],
  quickAnswer:
    'Cornelia de Lange syndrome (CdLS) is a rare genetic developmental disorder affecting about 1 in 10,000 to 30,000 newborns, most often caused by mutations in the NIPBL gene (about 60% of cases) or related cohesin complex genes. It is characterized by distinctive facial features (arched eyebrows that often meet in the middle, long eyelashes, small upturned nose, thin downturned lips), growth restriction, limb anomalies ranging from small hands to missing forearms, and intellectual disability of variable severity. The condition has a wide spectrum, and individuals with milder forms may not be diagnosed until later in childhood.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with CdLS are often small at birth (intrauterine growth restriction) and may have distinctive facial features recognizable to experienced clinicians: thin arched eyebrows that meet in the middle (synophrys), long eyelashes, a small upturned nose with anteverted nares, a long philtrum, thin downturned lips, and a small jaw (micrognathia). Limb anomalies range from subtle (small hands, short fifth fingers, single transverse palmar crease) to severe (missing forearms or fingers). Feeding difficulties with severe gastroesophageal reflux are very common and often the most challenging issue in early infancy.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Feeding difficulties and reflux often dominate this period. Many babies with CdLS have poor growth and may need specialized feeding support, anti-reflux medications, and sometimes surgical interventions for severe reflux. Excessive body hair (hirsutism) may be noticeable. Low muscle tone and slow development are common. Hearing should be tested early, as hearing loss occurs in about 80% of individuals with CdLS. Heart defects are present in about 25% of cases and require cardiac evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental delays become more apparent, with delayed sitting, reaching, and babbling. The severity varies greatly depending on the type of mutation and degree of involvement. Children with milder CdLS may have borderline to mild intellectual disability, while those with classic CdLS typically have moderate to severe delays. Behavioral features may begin to emerge, including self-injurious behavior (particularly in the setting of untreated pain from reflux) and preference for routine.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with CdLS continue to develop at their own pace. Walking may be delayed (average around 2-3 years in moderate cases). Speech development is significantly delayed, and many children benefit from sign language or AAC. Behavioral characteristics become more apparent, including anxiety in new situations, preference for predictable routines, and possible self-injurious behaviors. Treating underlying pain (reflux, dental issues, ear infections) often significantly improves behavior. Growth remains slow, and CdLS-specific growth charts should be used.',
    },
  ],
  whenNormal: [
    'Your baby with CdLS is making gradual developmental progress and is engaged with caregivers',
    'Your baby\'s reflux is being managed and feeding is improving',
    'Your baby\'s heart defect (if present) is stable and being monitored',
    'Your child is communicating through signs, gestures, or AAC and is responsive to therapy',
  ],
  whenToMention: [
    'Your baby has distinctive facial features, small size, and limb differences that have not been evaluated for CdLS',
    'Your baby with CdLS has persistent vomiting, feeding refusal, or poor weight gain that may indicate severe reflux',
    'Your child with CdLS is showing self-injurious behavior, which may indicate untreated pain',
    'You want to discuss genetic testing or genetic counseling for your family',
  ],
  whenToActNow: [
    'Your baby has bloody vomit or stool, which may indicate severe reflux complications or intestinal problems — seek immediate medical attention',
    'Your baby has breathing difficulties, blue color, or signs of a heart problem requiring emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growing-too-slow', 'intrauterine-growth-restriction'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cornelia de Lange Syndrome. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1104/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cornelia de Lange Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/cornelia-de-lange-syndrome/',
    },
    {
      org: 'CdLS Foundation',
      citation:
        'Cornelia de Lange Syndrome Foundation. About CdLS: Information for Families. CdLS Foundation, 2024.',
      url: 'https://www.cdlsusa.org/',
    },
  ],
};
