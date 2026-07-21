import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dup15q-syndrome-baby',
  title: 'Dup15q Syndrome (Chromosome 15q Duplication) in Babies',
  category: 'medical',
  searchTerms: [
    'dup15q syndrome baby',
    'chromosome 15 duplication baby',
    '15q11.2-13.1 duplication',
    'dup15q autism epilepsy',
    'dup15q infantile spasms',
    'isodicentric chromosome 15 baby',
    'dup15q hypotonia baby',
    'chromosome 15q duplication symptoms',
    'dup15q EEG pattern',
    'dup15q developmental delay',
  ],
  quickAnswer:
    'Dup15q syndrome is a chromosomal disorder caused by duplication of the 15q11.2-13.1 region, the same region involved in Angelman and Prader-Willi syndromes. It is characterized by hypotonia (low muscle tone), motor delays, intellectual disability, epilepsy (including infantile spasms), and features of autism spectrum disorder. The epilepsy associated with dup15q can be severe and difficult to control, and there is a distinct EEG pattern (excessive beta activity). The isodicentric form (idic15) tends to be more severe than the interstitial duplication. Early intervention and seizure management are critical.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies with dup15q syndrome are often floppy (hypotonic) from birth, which affects feeding and early motor development. Some infants have feeding difficulties requiring specialized support. Growth may be normal or slightly affected. The isodicentric 15 (idic15) form is typically detected on standard karyotype, while interstitial duplications require chromosomal microarray. EEG may already show the characteristic excessive beta activity pattern. Early intervention services should be started as soon as the diagnosis is made.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Infantile spasms are a significant concern in dup15q syndrome, occurring in approximately 40% of children with the isodicentric form, typically between 4-8 months of age. Parents should watch for clusters of brief body flexion or extension movements, often occurring upon waking. Immediate evaluation with video EEG is critical if spasms are suspected, as early treatment improves outcomes. Motor milestones are delayed due to ongoing hypotonia. Reduced eye contact, limited social engagement, and repetitive behaviors may begin to emerge.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Developmental delays become more pronounced, particularly in speech and language. Many children develop features consistent with autism spectrum disorder, including limited language, poor social reciprocity, repetitive behaviors, and sensory processing difficulties. Epilepsy may begin or persist, with various seizure types including myoclonic, tonic-clonic, and absence seizures. The risk of Lennox-Gastaut syndrome is elevated. Pharmacoresistant (drug-resistant) epilepsy is common and may require multiple medications or consideration of dietary therapy (ketogenic diet).',
    },
    {
      ageRange: '3 years+',
      context:
        'Epilepsy management remains a primary concern, as seizures can be difficult to control and significantly impact quality of life and development. Sudden unexpected death in epilepsy (SUDEP) is a known risk, and families should discuss SUDEP risk reduction strategies with their neurologist. Behavioral challenges may intensify, including anxiety, mood dysregulation, and sleep disturbances. Despite these challenges, many children continue to make developmental gains with intensive therapy. Research into targeted treatments is ongoing. Support from the Dup15q Alliance community can be very helpful for families.',
    },
  ],
  whenNormal: [
    'Your child was tested for chromosomal abnormalities and no 15q duplication was found',
    'Your child with dup15q has well-controlled seizures on medication and is making developmental progress',
    'Your child with an interstitial duplication has a milder presentation and is meeting some milestones with therapy support',
  ],
  whenToMention: [
    'Your baby has hypotonia, developmental delays, and features of autism and has not had chromosomal microarray testing',
    'Your child with dup15q is having breakthrough seizures or seizure patterns are changing',
    'Your child with dup15q is showing new behavioral changes, sleep disruption, or regression in skills',
    'You want to discuss EEG monitoring, medication adjustments, or clinical trial opportunities',
  ],
  whenToActNow: [
    'Your baby is having clusters of brief body flexion movements, especially upon waking (possible infantile spasms - this is a medical emergency requiring prompt evaluation)',
    'Your child has a seizure lasting longer than 5 minutes or is having repeated seizures without recovery',
    'Your child has a sudden change in responsiveness, prolonged period of unresponsiveness, or breathing difficulties during or after a seizure',
    'Your child with dup15q has sudden loss of previously acquired skills or a dramatic change in behavior or alertness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['infantile-spasms-west-syndrome', 'early-signs-of-autism-baby', 'low-muscle-tone'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Chromosome 15q Duplication. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/1597/chromosome-15q-duplication',
    },
    {
      org: 'Dup15q Alliance',
      citation:
        'Dup15q Alliance. About Dup15q Syndrome: A Guide for Families and Clinicians.',
      url: 'https://dup15q.org/about-dup15q/',
    },
    {
      org: 'NIH',
      citation:
        'Conant KD, et al. A survey of seizures and current treatments in 15q duplication syndrome. Epilepsia, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24571126/',
    },
  ],
};
