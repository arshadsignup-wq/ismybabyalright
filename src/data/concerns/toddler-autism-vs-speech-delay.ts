import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-vs-speech-delay', title: 'Is It Autism or Just a Speech Delay?', category: 'communication',
  searchTerms: ['autism vs speech delay', 'speech delay or autism', 'is it autism or late talking', 'difference between autism and speech delay', 'late talker vs autism', 'autism vs language delay', 'how to tell autism from speech delay', 'autism speech delay difference', 'could speech delay be autism', 'distinguishing autism from speech delay'],
  quickAnswer: 'The key difference is in social communication. A child with a speech delay typically has good social skills: they make eye contact, point to share, use gestures, play pretend, and engage socially. They simply have fewer words. A child with autism has differences in social communication itself: reduced eye contact, limited joint attention, absent or reduced gesturing, and difficulty with the social aspects of communication. A comprehensive evaluation can distinguish between the two.',
  byAge: [
    { ageRange: '12-18 months', context: 'At this young age, it can be difficult to distinguish. Key differences: a late talker typically points, shows objects, responds to their name, and engages socially. A child with early autism signs may not do these things even though both groups may have limited words.' },
    { ageRange: '18-24 months', context: 'Differences become clearer. Late talkers usually have strong gesture use, good eye contact, respond to their name, and understand language well. Children with autism may have limited gestures, reduced eye contact, and difficulty with joint attention.' },
    { ageRange: '24-36 months', context: 'By age 2, distinctions are more apparent. Late talkers with strong social skills often catch up. Children with autism typically show social communication differences beyond just word count. A developmental evaluation can clarify.' },
    { ageRange: '3-4 years', context: 'Most late talkers have caught up or are catching up. Children with autism continue to show social communication differences even as their language skills may improve.' },
    { ageRange: '4-5 years', context: 'If speech delay has resolved but social communication challenges persist, a comprehensive evaluation is warranted. Some children may have both a language disorder and autism.' },
  ],
  whenNormal: ['Your child has few words but points, gestures, makes eye contact, and engages socially', 'Your child understands language well and communicates through gestures', 'Your child is a late talker but plays pretend and shows interest in other children', 'Your child\'s only concern is the number of words they use'],
  whenToMention: ['Your child has few words AND limited gestures, reduced eye contact, or no pointing', 'Your child does not respond to their name alongside a speech delay', 'Your child has no pretend play alongside limited words'],
  whenToActNow: ['Your child has lost words or social skills they previously had', 'Your child has almost no communication including words, gestures, and eye contact'],
  relatedMilestones: ['language-development', 'social-engagement', 'joint-attention', 'gestures'],
  showSelfReferral: true, relatedConcernSlugs: ['late-talker', 'early-signs-of-autism-baby', 'baby-autism-screening-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism vs Language Delay. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Blooming or Language Problem?', url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};
