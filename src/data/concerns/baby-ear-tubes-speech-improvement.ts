import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ear-tubes-speech-improvement',
  title: 'Will Ear Tubes Help My Child\'s Speech?',
  category: 'communication',
  searchTerms: [
    'ear tubes speech improvement',
    'ear tubes help talking',
    'speech after ear tubes',
    'ear tube surgery speech delay',
    'will ear tubes help speech',
    'toddler speech after tubes',
    'PE tubes speech development',
    'tympanostomy tubes speech',
    'ear tubes language improvement',
    'speech progress after ear tubes',
  ],
  quickAnswer:
    'Ear tubes (tympanostomy tubes) can restore normal hearing by draining persistent fluid from the middle ear. Many children show speech and language improvement within weeks to months after tube placement, particularly if hearing loss from fluid was contributing to their speech delay. However, ear tubes alone may not resolve all speech delays, and some children benefit from speech therapy alongside tube placement.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Ear tubes at this age can normalize hearing during a critical period for language development. Babies who can hear clearly are better able to learn the sounds of their language and begin babbling. Improvement in vocalization may be noticed relatively quickly.',
    },
    {
      ageRange: '12-18 months',
      context:
        'If your child has had chronic fluid affecting hearing during the first words stage, tubes can help by restoring hearing clarity. You may notice increased babbling, more responsiveness to sound, and emerging words in the weeks and months following tube placement.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Children who receive tubes during this rapid language learning period often show noticeable vocabulary growth within 2 to 3 months. If speech delays persist more than 3 to 4 months after tubes, speech therapy may be recommended as an additional support.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Ear tubes can still help at this age, but children who have had prolonged hearing reduction may need speech therapy to catch up on missed language learning. The combination of restored hearing and therapy produces the best outcomes.',
    },
    {
      ageRange: '3-5 years',
      context:
        'If ear tubes are placed at an older age, speech improvements may take longer because the child may have developed compensatory speech patterns. Speech therapy alongside tubes is often recommended. Most children make excellent progress with this combined approach.',
    },
  ],
  whenNormal: [
    'Your child\'s speech is improving gradually in the weeks following tube placement',
    'Your child is more responsive to sounds and voices after getting tubes',
    'Your child\'s speech clarity is increasing as they can now hear their own voice more clearly',
    'Progress is gradual rather than immediate, which is typical',
  ],
  whenToMention: [
    'Three to four months after tubes, your child\'s speech has not improved at all',
    'Your child\'s hearing tests after tubes show normal hearing but speech is still delayed',
    'Your child is talking more but speech clarity has not improved',
  ],
  whenToActNow: [
    'Your child has had tubes placed and is still not responding to sounds, suggesting hearing loss beyond what fluid caused',
    'Your child\'s ear tubes have fallen out and fluid has returned with renewed hearing difficulty',
  ],
  relatedMilestones: ['hearing', 'babbling', 'first-words', 'speech-clarity', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-ear-fluid-affecting-speech', 'speech-delay-from-hearing-loss', 'hearing-loss-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Tubes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Tubes.aspx',
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
        'American Speech-Language-Hearing Association. Hearing Loss: Effects on Development.',
      url: 'https://www.asha.org/public/hearing/effects-of-hearing-loss-on-development/',
    },
  ],
};
