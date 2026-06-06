import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-sign-language-helping-speech', title: 'Does Sign Language Help or Delay Speech?', category: 'communication',
  searchTerms: ['sign language help speech', 'baby sign language speech delay', 'sign language delay talking', 'does signing help toddler talk', 'sign language and speech development', 'baby signs help communication', 'sign language bridge to speech', 'signing before talking', 'sign language toddler speech therapy', 'will signing delay my child talking'],
  quickAnswer: 'Research consistently shows that sign language does NOT delay speech development. In fact, it can support and enhance spoken language. Signing gives children a way to communicate before they can speak, reducing frustration and building the foundational skills needed for verbal language, including turn-taking, vocabulary, and the understanding that communication has power. Many speech-language pathologists use signs as a bridge to spoken language in therapy. Children naturally drop signs as they acquire the spoken words.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies can learn simple signs like "more," "all done," and "milk" well before they can speak. Using signs alongside spoken words builds vocabulary understanding and gives babies a way to express needs. Always say the word while signing it.' },
    { ageRange: '12-18 months', context: 'Signs can bridge the gap between understanding and speaking. A child who can sign "help" or "want" is less frustrated than one who cannot communicate at all. Research shows that signing babies often speak earlier, not later.' },
    { ageRange: '18-24 months', context: 'As spoken words emerge, children naturally transition from signs to speech. You may see them sign and say a word simultaneously for a while. Continue to model both the sign and the spoken word. Do not withhold speech modeling.' },
    { ageRange: '2-3 years', context: 'For children with speech delays, signs remain a valuable communication tool. SLPs often use signs as part of a total communication approach. Signs support word retrieval and reduce frustration while spoken language develops.' },
    { ageRange: '3-5 years', context: 'Most children have transitioned fully to spoken language by this age. Children with more significant delays may continue to benefit from signs as a supplement. The goal is effective communication, whatever form it takes.' },
  ],
  whenNormal: ['Your child uses signs and is also developing spoken words', 'Your child is transitioning from signs to speech naturally', 'Your child signs with you and babbles or uses words too', 'Your child dropped signs as spoken words emerged'],
  whenToMention: ['Your child relies heavily on signs and is not adding spoken words', 'Your child is over 2 and only communicates through signs with minimal speech attempts', 'You want guidance on how to use signs effectively to support speech development'],
  whenToActNow: ['Your child is not communicating through signs OR speech', 'Your child has stopped attempting to communicate altogether', 'Your child is losing both signed and spoken communication skills'],
  relatedMilestones: ['language-development', 'first-words', 'gestures', 'social-engagement'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-augmentative-communication-need', 'toddler-understanding-but-not-talking', 'speech-therapy-at-home-activities'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Baby Signs and Language Development.', url: 'https://www.asha.org/public/speech/development/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Sign Language.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
