import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ear-fluid-affecting-speech',
  title: 'Ear Fluid Affecting Baby\'s Speech Development',
  category: 'communication',
  searchTerms: [
    'ear fluid affecting speech',
    'baby ear infections speech delay',
    'otitis media speech development',
    'fluid in ears baby talking',
    'ear fluid language delay',
    'chronic ear infections speech',
    'middle ear fluid baby',
    'ear infections causing speech delay',
    'glue ear speech development',
    'recurrent ear infections talking',
  ],
  quickAnswer:
    'Chronic or recurrent middle ear fluid (otitis media with effusion) can temporarily reduce hearing by 15 to 40 decibels, which is like hearing through water. During critical periods of language learning, this muffled hearing can impact speech and language development. If your baby has frequent ear infections or persistent fluid, discuss the potential speech impact with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ear fluid is common in young babies. Brief episodes of fluid are unlikely to impact long-term speech development. However, chronic fluid that persists for 3 or more months reduces hearing during an important time for learning the sounds of language.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a critical period for hearing speech sounds and beginning to babble. Chronic ear fluid during this time can muffle the sounds your baby hears, potentially delaying babbling and early word recognition. Monitor babbling milestones closely.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Children with chronic ear fluid during the first words stage may have fewer words or less clear speech. If your child has had frequent ear infections and is not meeting speech milestones, discuss whether ear fluid may be a contributing factor.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Ongoing fluid or recurrent infections during this period of rapid vocabulary growth can impact word learning and speech clarity. Ear tubes may be recommended if fluid persists and hearing is affected. Many children show improvement in speech after tubes are placed.',
    },
    {
      ageRange: '24-36 months',
      context:
        'If chronic ear fluid has been present and treated, speech and language often catch up once hearing is normalized. If delays persist after fluid has resolved, speech therapy can help close the gap. Most children with ear-fluid-related delays catch up fully.',
    },
  ],
  whenNormal: [
    'Your baby had one or two brief ear infections that resolved with treatment',
    'Your baby\'s hearing has returned to normal between ear infections',
    'Your baby is meeting speech milestones despite having had some ear infections',
    'Ear fluid was brief and your baby\'s babbling and language are developing well',
  ],
  whenToMention: [
    'Your baby has had 3 or more ear infections in 6 months or 4 or more in a year',
    'Your baby has had persistent ear fluid for 3 months or longer',
    'Your baby is behind on speech milestones and has a history of frequent ear infections',
  ],
  whenToActNow: [
    'Your baby has persistent ear fluid and is not babbling or responding to sounds',
    'Your toddler has chronic ear fluid with significant speech delay and a hearing test shows reduced hearing',
  ],
  relatedMilestones: ['hearing', 'babbling', 'first-words', 'speech-clarity'],
  showSelfReferral: true,
  relatedConcernSlugs: ['hearing-loss-signs-baby', 'speech-delay-from-hearing-loss', 'baby-ear-tubes-speech-improvement'],
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
        'American Speech-Language-Hearing Association. Hearing Loss: Effects on Development.',
      url: 'https://www.asha.org/public/hearing/effects-of-hearing-loss-on-development/',
    },
  ],
};
