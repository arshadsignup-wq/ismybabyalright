import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cri-du-chat-syndrome-baby',
  title: 'Cri du Chat Syndrome (5p Deletion) in Babies',
  category: 'medical',
  searchTerms: [
    'cri du chat syndrome baby',
    'cat cry syndrome baby',
    'baby high pitched cry unusual',
    '5p deletion syndrome infant',
    'baby microcephaly round face',
    'cri du chat early signs',
    'baby cat-like cry',
    'chromosome 5p minus syndrome',
    'cri du chat developmental delay',
    'baby high pitched mewing cry',
  ],
  quickAnswer:
    'Cri du chat syndrome (also called 5p minus or 5p deletion syndrome) is a rare chromosomal condition affecting about 1 in 15,000 to 50,000 newborns, caused by a deletion on the short arm of chromosome 5. It is named for the characteristic high-pitched, cat-like cry heard in affected infants, which is caused by problems with the larynx and nervous system. Children have intellectual disability, delayed development, small head size (microcephaly), and distinctive facial features. With early intervention and supportive therapies, children can make significant developmental progress.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The hallmark feature of cri du chat syndrome is a high-pitched, mewing cry in the newborn period that sounds similar to a cat. This cry is caused by structural differences in the larynx and is often what leads to diagnosis. Other features present at birth may include low birth weight, microcephaly (small head), a round face, widely spaced eyes, low-set ears, a small jaw, and low muscle tone (hypotonia). Feeding difficulties are common due to poor suck and swallow coordination. Diagnosis is confirmed with chromosomal microarray or karyotype showing a 5p deletion.',
    },
    {
      ageRange: '1-6 months',
      context:
        'The characteristic high-pitched cry typically becomes less distinctive over time as the larynx grows. Feeding difficulties often persist, and some babies may require specialized nipples or feeding therapy. Hypotonia affects motor development, and head control is often delayed. Early intervention services including physical, occupational, and speech therapy should begin as early as possible. Some babies may have heart defects that require monitoring or treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor development is significantly delayed — sitting independently is often achieved later than typical. Babies may be socially engaged and responsive, though communication development is notably delayed. The characteristic facial features may become more or less apparent as the child grows. Cardiac evaluation, hearing testing, and vision assessment should be completed. Some children develop recurrent respiratory infections due to immune system differences.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with cri du chat syndrome continue to make developmental progress at their own pace. Walking may be achieved between 2-6 years. Speech and language are typically the most significantly affected areas, and many children benefit from augmentative and alternative communication (AAC) systems, sign language, or picture communication boards. Behavioral challenges such as hyperactivity, aggression, or self-stimulatory behaviors may emerge. Intellectual disability ranges from moderate to severe but some children have milder involvement.',
    },
  ],
  whenNormal: [
    'Your baby with cri du chat syndrome is making steady, gradual developmental progress with early intervention',
    'Your baby is socially engaged, interactive, and responsive to caregivers',
    'Your baby is communicating through gestures, signs, or AAC even without spoken words',
    'Your baby\'s heart defects (if any) are stable and being monitored',
  ],
  whenToMention: [
    'Your newborn has an unusually high-pitched cry and you notice facial features such as a round face, small head, or widely spaced eyes',
    'Your baby with cri du chat syndrome has persistent feeding difficulties and poor weight gain',
    'Your child is not making developmental progress despite early intervention services',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, turns blue, or shows signs of a heart problem — seek emergency care',
    'Your baby is unable to feed and is becoming dehydrated — this requires urgent medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['microcephaly-signs', 'baby-high-pitched-scream'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cri-du-Chat Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/cri-du-chat-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cri du Chat Syndrome. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1294/',
    },
  ],
};
