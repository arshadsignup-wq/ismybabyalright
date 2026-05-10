import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'williams-syndrome-baby',
  title: 'Williams Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'williams syndrome baby',
    'williams syndrome infant signs',
    'baby elfin face features',
    'baby colic extreme fussiness',
    'williams syndrome feeding difficulty',
    'baby heart murmur and feeding problems',
    'williams syndrome diagnosis baby',
    'baby overly friendly developmental delay',
  ],
  quickAnswer:
    'Williams syndrome is a rare genetic condition caused by the deletion of about 26-28 genes on chromosome 7, affecting about 1 in 7,500 to 10,000 people. It is characterized by cardiovascular problems (especially supravalvular aortic stenosis), distinctive facial features, developmental delays, and a characteristically outgoing, social personality. With appropriate medical care and early intervention, children with Williams syndrome can make meaningful developmental progress.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Williams syndrome may not be immediately apparent at birth. Early signs can include feeding difficulties (colic, reflux, difficulty gaining weight), prolonged crying, and a heart murmur. Some babies have a characteristic facial appearance — a broad forehead, short nose with a flat bridge, wide mouth, and full lips — though these features become more distinct with age. A heart murmur detected at birth often leads to the diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Feeding difficulties often continue, and many babies with Williams syndrome are irritable and colicky. Growth may be slow. Elevated blood calcium (hypercalcemia) occurs in some infants and can contribute to irritability and feeding problems. If a heart defect is present, cardiology follow-up is ongoing. Developmental delays may begin to emerge, particularly in motor skills.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor milestones such as sitting and crawling are often delayed due to low muscle tone and joint laxity. However, babies with Williams syndrome tend to be very socially engaged — they often have excellent eye contact and are captivated by faces and music. Speech may be delayed in starting but eventually becomes a relative strength. Early intervention with physical and occupational therapy supports motor development.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with Williams syndrome are often described as having remarkably friendly, outgoing personalities. Walking is typically delayed (average around 21 months). Language skills often develop well, though there may be delays in spatial reasoning, fine motor skills, and problem-solving. Music often brings particular joy. Ongoing cardiac monitoring, blood pressure checks, and developmental support are important parts of care.',
    },
  ],
  whenNormal: [
    'Your baby with Williams syndrome is making slow but steady progress with early intervention support',
    'Your baby is socially engaged, makes good eye contact, and responds to voices and music',
    'Your baby\'s cardiac condition is stable and being monitored regularly',
    'Feeding difficulties are gradually improving with age and dietary adjustments',
  ],
  whenToMention: [
    'Your baby has feeding difficulties, extreme irritability, and poor weight gain combined with a heart murmur',
    'Your baby has distinctive facial features and developmental delays that have not yet been evaluated genetically',
    'Your baby with Williams syndrome is not progressing in motor development despite therapy',
  ],
  whenToActNow: [
    'Your baby shows signs of heart failure — rapid breathing, sweating with feeding, poor weight gain, and blue or gray color',
    'Your baby is excessively irritable, vomiting, and not eating — elevated calcium levels may need urgent treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Williams Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/williams-syndrome/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Health Care Supervision for Children With Williams Syndrome. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/2/e20193761/36882/Health-Care-Supervision-for-Children-With-Williams',
    },
  ],
};
