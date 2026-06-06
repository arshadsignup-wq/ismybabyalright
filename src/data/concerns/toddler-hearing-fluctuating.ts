import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-hearing-fluctuating',
  title: 'Toddler\'s Hearing Seems to Come and Go',
  category: 'communication',
  searchTerms: [
    'toddler hearing fluctuating',
    'toddler hearing comes and goes',
    'toddler intermittent hearing loss',
    'toddler sometimes hears sometimes doesn\'t',
    'toddler hearing inconsistent',
    'toddler hears some days not others',
    'fluctuating hearing loss child',
    'toddler hearing changes',
    'conductive hearing loss intermittent',
    'toddler selective hearing or hearing loss',
  ],
  quickAnswer:
    'Fluctuating hearing in toddlers is most commonly caused by middle ear fluid that comes and goes, often associated with colds, allergies, or ear infections. When fluid is present, hearing is muffled; when it drains, hearing returns to normal. If your child\'s hearing seems inconsistent, an audiological evaluation can determine whether fluid or another condition is affecting their hearing.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Fluctuating hearing from ear fluid is common in babies. You may notice your baby responds to sounds and voices better on some days than others. If this pattern is consistent, a hearing evaluation and ENT consultation are recommended.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Fluctuating hearing during this early language period can affect word learning and speech development. If your toddler seems to hear well sometimes but ignores sounds at other times, it may not be behavioral. A hearing test can clarify.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Parents often notice a pattern where their toddler hears better when healthy and worse during or after colds. This pattern is consistent with intermittent middle ear fluid. If hearing fluctuation is frequent, discuss ear tube placement with your ENT.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Chronic fluctuating hearing can affect speech development, vocabulary, and speech clarity. If your child has had intermittent hearing issues throughout toddlerhood, a speech-language evaluation alongside audiological monitoring is recommended.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Most children outgrow middle ear fluid problems as their Eustachian tubes mature. If fluctuating hearing persists, continued monitoring and possible intervention are needed. Speech and language should be assessed to determine if any delays need support.',
    },
  ],
  whenNormal: [
    'Your toddler seems to hear less well during a cold but hearing returns when they are well',
    'Hearing fluctuations are brief and your toddler\'s speech development is on track',
    'Your toddler passed a hearing test but sometimes seems distracted or selective about responding',
  ],
  whenToMention: [
    'Your toddler\'s hearing seems inconsistent over weeks or months',
    'You notice your toddler\'s speech or language development is being affected by inconsistent hearing',
    'Your toddler has had multiple ear infections and hearing seems variable between infections',
  ],
  whenToActNow: [
    'Your toddler has sudden significant hearing loss in one or both ears',
    'Your toddler\'s hearing is getting progressively worse rather than just fluctuating',
  ],
  relatedMilestones: ['hearing', 'babbling', 'first-words', 'responds-to-name'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-ear-fluid-affecting-speech', 'hearing-loss-signs-baby', 'toddler-selective-hearing-vs-real'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Infections in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Hearing Loss: Types, Causes, and Treatment.',
      url: 'https://www.asha.org/public/hearing/types-of-hearing-loss/',
    },
  ],
};
