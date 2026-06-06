import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-catching-up-speech', title: 'Late Bloomer vs. True Speech Delay', category: 'communication',
  searchTerms: ['late bloomer speech', 'toddler catching up speech', 'will my toddler catch up talking', 'late talker catch up', 'late bloomer vs speech delay', 'toddler speech late bloomer', 'when do late talkers catch up', 'late talker outcome', 'will speech delay resolve', 'toddler talking late normal'],
  quickAnswer: 'Some late talkers do catch up on their own by age 3 to 4, but research shows that about 20 to 30% of late talkers continue to have language difficulties. There is no reliable way to predict which children will catch up and which will not. Children who understand language well, use gestures, and have good play skills are more likely to catch up. However, waiting to see carries risk. Early evaluation and intervention, even for potential late bloomers, ensures that children who need help get it during the most critical developmental window.',
  byAge: [
    { ageRange: '12-18 months', context: 'Children with fewer words but strong understanding, good use of gestures, and social engagement have a better prognosis. However, any child below milestone expectations benefits from evaluation even if they may catch up.' },
    { ageRange: '18-24 months', context: 'Late talkers with fewer than 50 words at age 2 should be evaluated. Positive signs include good comprehension, use of gestures to communicate, social engagement, and pretend play. These children are more likely to catch up, but monitoring is still important.' },
    { ageRange: '2-3 years', context: 'If a child has not caught up by age 3, the likelihood of spontaneous resolution decreases. Children who are still significantly behind peers should receive speech therapy rather than continuing to wait.' },
    { ageRange: '3-4 years', context: 'Children who were late talkers and caught up in vocabulary may still have subtle weaknesses in grammar, narrative, and literacy. Ongoing monitoring through school years is recommended even after apparent catch-up.' },
    { ageRange: '4-6 years', context: 'Research shows that some children who appeared to catch up in spoken language later struggle with reading and writing. Early literacy support can prevent academic difficulties for former late talkers.' },
  ],
  whenNormal: ['Your child is a bit behind in talking but understands everything and communicates with gestures', 'Your child is adding new words steadily even if behind peers', 'Your child was a late talker but has caught up and communicates effectively', 'Your child\'s pediatrician and SLP confirm steady progress'],
  whenToMention: ['Your child has fewer than 50 words at age 2 even with good understanding', 'You are being told to wait and see but feel your child needs help', 'Your child was a late talker who caught up but now struggles with sentences or reading'],
  whenToActNow: ['Your child is over 2 and has very few words AND poor understanding', 'Your child is falling further behind peers rather than catching up', 'Your child is frustrated, withdrawn, or having behavior problems related to communication difficulties'],
  relatedMilestones: ['language-development', 'first-words', 'vocabulary-growth', 'social-engagement'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-speech-plateau', 'toddler-speech-progress-slow', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Late-Talking Children.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.', url: 'https://www.nidcd.nih.gov/health/specific-language-impairment' },
  ],
};
