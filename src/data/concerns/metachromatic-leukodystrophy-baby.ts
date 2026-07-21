import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'metachromatic-leukodystrophy-baby',
  title: 'Metachromatic Leukodystrophy (MLD) in Babies',
  category: 'medical',
  searchTerms: [
    'metachromatic leukodystrophy baby',
    'MLD infant signs',
    'baby losing ability to walk',
    'late infantile leukodystrophy',
    'baby white matter disease',
    'baby developmental regression MLD',
    'arylsulfatase A deficiency baby',
    'baby losing motor skills progressive',
    'leukodystrophy baby symptoms',
    'MLD gene therapy baby',
  ],
  quickAnswer:
    'Metachromatic leukodystrophy (MLD) is a rare inherited lysosomal storage disorder affecting about 1 in 40,000 to 160,000 people, caused by deficiency of the enzyme arylsulfatase A (ARSA). This leads to progressive destruction of myelin (the protective white matter coating on nerves) in the brain and peripheral nerves. The late infantile form is the most common and severe, typically presenting between ages 1-2 with loss of motor skills and progressive neurological decline. Gene therapy (atidarsagene autotemcel/Lenmeldy) has been approved for presymptomatic or early symptomatic patients, offering the first disease-modifying treatment option.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies with MLD typically appear completely normal in the first months of life. Development proceeds normally, and there are usually no early signs. MLD is not currently included in standard newborn screening in most states, though some states are adding it. If there is a known family history of MLD, prenatal or newborn testing for ARSA enzyme activity and genetic confirmation should be pursued immediately, as early treatment (before symptoms begin) offers the best outcomes with gene therapy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'In the late infantile form of MLD, babies typically continue to develop normally through this period, reaching milestones such as sitting, babbling, and sometimes cruising. However, subtle signs may begin to emerge toward the end of this period in some children, including clumsiness, difficulty with walking or standing, or irritability. Most children are not yet diagnosed at this stage unless there is a family history.',
    },
    {
      ageRange: '1-2 years',
      context:
        'This is when the late infantile form of MLD most commonly becomes apparent. Children who had been walking may begin to stumble, fall frequently, or lose the ability to walk. Other early signs include stiffness or floppiness in the legs, difficulty with speech, and behavioral changes such as increased irritability. The regression of previously acquired motor skills is a key warning sign. An MRI showing white matter abnormalities, low ARSA enzyme activity, and elevated urine sulfatides confirm the diagnosis.',
    },
    {
      ageRange: '2-3 years',
      context:
        'In untreated late infantile MLD, progression continues with loss of speech, swallowing difficulties, vision loss, and eventual loss of all voluntary movement. This is a devastating trajectory for families. Gene therapy (Lenmeldy/atidarsagene autotemcel) is FDA-approved for presymptomatic and early symptomatic late infantile MLD and has shown the ability to slow or halt disease progression in many treated children. Hematopoietic stem cell transplant may also be considered. Supportive care including physical therapy, feeding support, and seizure management is essential.',
    },
  ],
  whenNormal: [
    'Your baby is developing on schedule with no signs of regression, and you are monitoring because of a family history',
    'Your child was treated with gene therapy before symptoms appeared and continues to develop',
    'Your child is meeting milestones and MRI shows stable findings after treatment',
  ],
  whenToMention: [
    'Your toddler who was previously walking well is becoming increasingly clumsy or unsteady',
    'Your child is losing previously acquired motor or language skills',
    'You have a family history of MLD and want to discuss testing for your baby',
    'Your child has been diagnosed with MLD and you want to discuss treatment options including gene therapy',
  ],
  whenToActNow: [
    'Your child is rapidly losing motor skills, has difficulty swallowing, or is choking on food or liquids — seek urgent neurological evaluation',
    'Your child is having seizures or episodes of stiffness with arching of the back',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'baby-developmental-regression-signs'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Metachromatic Leukodystrophy. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1130/',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. FDA Approves First Gene Therapy for Metachromatic Leukodystrophy. FDA News Release, March 2024.',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-metachromatic-leukodystrophy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Metachromatic Leukodystrophy. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/metachromatic-leukodystrophy/',
    },
  ],
};
