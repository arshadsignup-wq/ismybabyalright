import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pallister-killian-syndrome-baby',
  title: 'Pallister-Killian Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Pallister-Killian syndrome baby',
    'tetrasomy 12p baby',
    'mosaic tetrasomy 12p',
    'Pallister-Killian facial features',
    'Pallister-Killian skin pigmentation',
    'isochromosome 12p baby',
    'Pallister-Killian diagnosis skin biopsy',
    'Pallister-Killian hypotonia baby',
    'Pallister-Killian seizures baby',
    'streaky skin pigmentation baby syndrome',
  ],
  quickAnswer:
    'Pallister-Killian syndrome (PKS) is a rare chromosomal disorder caused by the presence of an extra isochromosome made up of two copies of the short arm of chromosome 12 (mosaic tetrasomy 12p). The extra chromosome is present in some cells but not all (mosaicism). Key features include characteristic facial features, significant hypotonia (low muscle tone), intellectual disability, streaks of skin with different coloring (pigmentary anomalies following lines of Blaschko), and seizures. Importantly, PKS is often NOT detectable on a standard blood karyotype and typically requires a skin biopsy (fibroblast karyotype) or buccal smear for diagnosis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'PKS may be suspected at birth based on the combination of distinctive facial features and significant hypotonia. Facial features include a high forehead, sparse hair in the temporal regions, a flat nasal bridge, widely spaced eyes, a short nose with anteverted nostrils, a long philtrum, a thin upper lip, and a full lower lip. Profound hypotonia is nearly universal and causes severe feeding difficulties, often requiring tube feeding. Diaphragmatic hernia occurs in about 5% of cases and may require surgical repair. A standard blood chromosome test may be normal - if PKS is suspected, a skin biopsy for fibroblast karyotype or fluorescence in situ hybridization (FISH) on buccal cells is needed.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Feeding difficulties and hypotonia remain significant challenges. Seizures may begin in infancy, sometimes in the form of infantile spasms, which require prompt treatment. Pigmentary skin anomalies may become more apparent, appearing as streaks or patches of lighter or darker skin following the lines of Blaschko (curved lines on the body). These are most visible in sun-exposed areas or under Wood lamp examination. Hearing loss occurs in many children and should be evaluated. Cardiac defects are present in about 25% of cases.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Developmental delays are significant in all areas. Some children with milder mosaicism may sit independently and develop a few words, while more severely affected children may have minimal voluntary movement and no speech. Seizures may be difficult to control. The sparse temporal hair that was present at birth often fills in during early childhood. Joint contractures may develop due to limited movement. Streaky pigmentation patterns become more distinctive and can help support the clinical diagnosis.',
    },
    {
      ageRange: '3 years+',
      context:
        'Children with PKS continue to require intensive support and medical management. Seizures may improve with age in some individuals. Scoliosis and musculoskeletal complications may develop due to hypotonia and limited mobility. Vision and hearing should be monitored regularly. Despite the significant challenges, many individuals with PKS show awareness of and engagement with their environment, respond to familiar people, and can participate in sensory activities. Life expectancy varies depending on severity, but many individuals live into adulthood.',
    },
  ],
  whenNormal: [
    'Your baby was evaluated for PKS and skin fibroblast testing (or other tissue-based testing) was negative',
    'Your baby has areas of different skin pigmentation that are isolated and not associated with other PKS features (several other conditions can cause pigmentary mosaicism)',
    'A standard blood karyotype was normal - but note that this does NOT rule out PKS (tissue-based testing is needed if clinical suspicion is high)',
  ],
  whenToMention: [
    'Your baby has significant hypotonia combined with distinctive facial features and you want to discuss testing for PKS',
    'Your baby has streaky skin pigmentation along with developmental delays and you want to discuss whether fibroblast karyotype testing is appropriate',
    'Your child with PKS is having increasing seizure frequency or new seizure types',
    'You want to discuss genetic counseling, the diagnosis, or long-term management plans',
  ],
  whenToActNow: [
    'Your baby has a seizure, clusters of infantile spasms, or prolonged seizure activity lasting more than 5 minutes',
    'Your baby is unable to feed adequately, is losing weight, or shows signs of aspiration (choking during feeds, recurrent pneumonia)',
    'Your newborn has signs of breathing difficulty that could indicate a diaphragmatic hernia (rapid breathing, bluish color, difficulty breathing)',
    'Your child with PKS becomes suddenly unresponsive, has severe breathing difficulties, or has signs of a serious infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['low-muscle-tone', 'baby-seizure-types-infant', 'baby-skin-color-uneven'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Pallister-Killian Mosaic Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/7332/pallister-killian-mosaic-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Pallister-Killian Mosaic Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/pallister-killian-mosaic-syndrome/',
    },
    {
      org: 'Unique',
      citation:
        'Unique - Rare Chromosome Disorder Support Group. Pallister-Killian Syndrome: Information for Families.',
      url: 'https://rarechromo.org/information/disorder-guides/',
    },
  ],
};
