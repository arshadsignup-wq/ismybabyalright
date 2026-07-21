import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'phelan-mcdermid-syndrome-baby',
  title: 'Phelan-McDermid Syndrome (22q13 Deletion) in Babies',
  category: 'medical',
  searchTerms: [
    'Phelan-McDermid syndrome baby',
    '22q13 deletion syndrome baby',
    'SHANK3 gene baby',
    'baby not talking 22q13',
    'Phelan-McDermid autism',
    'baby reduced pain sensation',
    'baby chewing non-food items syndrome',
    'Phelan-McDermid hypotonia',
    'SHANK3 deletion baby',
    'Phelan-McDermid seizures',
  ],
  quickAnswer:
    'Phelan-McDermid syndrome (PMS) is a genetic condition caused by a deletion or mutation affecting the SHANK3 gene on chromosome 22q13. It is characterized by significant speech delay or absence of speech, low muscle tone (hypotonia), features of autism spectrum disorder, and reduced perception of pain. Many children chew on non-food items (mouthing behavior). PMS is often initially misdiagnosed as idiopathic autism. Seizures develop in many individuals, sometimes not until adolescence. Diagnosis is made through chromosomal microarray or targeted SHANK3 gene sequencing.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies with Phelan-McDermid syndrome are typically floppy (hypotonic) from birth, which may cause feeding difficulties and delayed motor milestones. Growth is usually normal or even above average. The facial features are generally mild and may include full or puffy eyelids, pointed chin, prominent ears, and long eyelashes. Some babies have minor hand and foot differences. If a chromosomal microarray is done for hypotonia or developmental concerns, the 22q13 deletion may be identified. Some cases result from SHANK3 point mutations that require gene sequencing to detect.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Motor delays become more apparent, though many children eventually learn to walk (average age 22 months, but some much later). The most striking feature is significant delay in or complete absence of babbling and early speech. Babies may seem unusually tolerant of pain - not crying when injured, not reacting to blood draws, or not showing discomfort that would be expected. Mouthing and chewing on non-food objects (hands, clothing, toys) is very common. Poor eye contact and reduced social reciprocity may raise concerns about autism.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Absence of speech or very limited speech is the hallmark of PMS at this age. Many children are diagnosed with autism spectrum disorder before the genetic cause is identified. Requesting chromosomal microarray testing is important for any child with significant speech delay combined with hypotonia and autistic features. Augmentative and alternative communication (AAC) devices can be very helpful. Behavioral features include hand flapping, poor eye contact, and sensory seeking. Gastroesophageal reflux and constipation are common. Renal (kidney) abnormalities occur in about 40% and should be screened.',
    },
    {
      ageRange: '3 years+',
      context:
        'Seizures develop in approximately 25-50% of individuals, sometimes not until adolescence or adulthood. Some individuals experience regression (loss of previously acquired skills), particularly during adolescence, which may be associated with onset of seizures or bipolar-like episodes. Ongoing therapies (speech, occupational, physical, behavioral) are beneficial. Research into targeted treatments for SHANK3-related disorders is active, with several clinical trials underway. Many individuals require lifelong support but can develop meaningful communication and social connections.',
    },
  ],
  whenNormal: [
    'Your child was evaluated for Phelan-McDermid syndrome and chromosomal microarray and SHANK3 testing were normal',
    'Your child with PMS is making steady progress with communication using AAC or sign language',
    'Your child with PMS has had appropriate seizure screening and monitoring with no seizures detected',
  ],
  whenToMention: [
    'Your child has significant speech delay, hypotonia, and autistic features and has not had chromosomal microarray testing',
    'Your child with PMS seems to have reduced pain perception and you need guidance on safety measures',
    'Your child with PMS is persistently mouthing or chewing on objects and you need strategies for redirecting this behavior safely',
    'You want to discuss genetic testing results, recurrence risk, or available clinical trials',
  ],
  whenToActNow: [
    'Your child with PMS has a seizure, staring spells, or episodes of unresponsiveness',
    'Your child with PMS is losing previously acquired skills (regression in speech, motor abilities, or self-care)',
    'Your child with PMS has injured themselves without showing a pain response and may have a significant injury (fracture, burn) that went unnoticed',
    'Your child is having severe behavioral changes, prolonged mood episodes, or signs of a psychiatric crisis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-signs-of-autism-baby', 'low-muscle-tone', 'not-talking'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Phelan-McDermid Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/4344/phelan-mcdermid-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Phelan-McDermid Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/phelan-mcdermid-syndrome/',
    },
    {
      org: 'PMS Foundation',
      citation:
        'Phelan-McDermid Syndrome Foundation. About PMS: Clinical Information and Family Resources.',
      url: 'https://pmsf.org/about-pms/',
    },
  ],
};
