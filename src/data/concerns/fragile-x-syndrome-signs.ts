import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fragile-x-syndrome-signs',
  title: 'Fragile X Syndrome Signs in Babies',
  category: 'medical',
  searchTerms: [
    'fragile x syndrome baby',
    'fragile x signs infant',
    'baby developmental delay fragile x',
    'fragile x syndrome early signs',
    'baby boy large head ears',
    'fragile x testing baby',
    'fragile x intellectual disability baby',
    'FMR1 gene baby',
  ],
  quickAnswer:
    'Fragile X syndrome is the most common inherited cause of intellectual disability and the most common known single-gene cause of autism spectrum disorder, affecting about 1 in 4,000 males and 1 in 6,000 to 8,000 females. It is caused by a mutation in the FMR1 gene on the X chromosome. Signs in infancy are often subtle, but with early identification and intervention, children with Fragile X can make significant developmental progress.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Fragile X syndrome is often not apparent in the newborn period. Some babies may have low muscle tone, feeding difficulties, and are larger than average at birth. The condition is not included in standard newborn screening in most states, so diagnosis often comes later when developmental delays become apparent. If there is a known family history of Fragile X, intellectual disability, or autism, genetic testing can be done at birth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Subtle signs may begin to emerge, including mild motor delays, low muscle tone, and less babbling than expected. Some babies may be sensitive to sensory stimulation (touch, sounds, lights) and become easily overstimulated. Physical features associated with Fragile X — a long face, prominent ears, and flexible joints — may become more noticeable over time but are often not obvious in infancy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental delays become more apparent during this period. Babies may be late to sit independently, may have reduced babbling and communication, and may show tactile defensiveness or gaze avoidance. Motor milestones are often delayed by several months. If developmental delays are identified, genetic testing for Fragile X should be considered as part of the evaluation, especially in boys.',
    },
    {
      ageRange: '12 months+',
      context:
        'By the toddler years, delays in speech and language, motor skills, and social interaction are usually more evident. Many children with Fragile X also develop behaviors associated with autism spectrum disorder, including hand flapping, poor eye contact, and social anxiety. Early intervention services — speech therapy, occupational therapy, behavioral support — can significantly improve outcomes. Physical features (long face, prominent ears, large jaw) become more distinct with age, particularly in males.',
    },
  ],
  whenNormal: [
    'Your baby was tested for Fragile X and the genetic test was negative',
    'Your baby has some flexible joints but is otherwise developing typically',
    'Your baby with Fragile X is making developmental progress with early intervention services',
    'Your baby has large ears as a normal family trait with no developmental concerns',
  ],
  whenToMention: [
    'Your baby has developmental delays and there is a family history of intellectual disability, autism, or Fragile X carriers',
    'Your baby boy has delayed speech, motor milestones, and increased sensitivity to sensory input',
    'You are a known Fragile X carrier and want to discuss testing for your baby',
  ],
  whenToActNow: [
    'Your baby is losing developmental skills they previously had — this warrants urgent evaluation regardless of the suspected cause',
    'Your baby has seizures — about 10-20% of children with Fragile X develop seizures, which require prompt medical management',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fragile X Syndrome (FXS). CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/fxs/facts.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fragile X Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/fragile-x-syndrome/',
    },
  ],
};
