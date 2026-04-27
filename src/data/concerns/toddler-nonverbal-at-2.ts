import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-nonverbal-at-2',
  title: 'Toddler Not Talking at Age 2 - Nonverbal',
  category: 'communication',
  searchTerms: ['toddler not talking at 2','2 year old not talking','nonverbal toddler','toddler no words at 2','child not speaking at 24 months','late talker 2 years old','when to worry about toddler not talking','2 year old won\'t talk','toddler only babbles no words','nonverbal 2 year old causes','speech therapy for 2 year old','2 year old not saying words'],
  quickAnswer: 'A child with no words at age 2 should be evaluated by their pediatrician and referred for a hearing test and speech-language evaluation. While some late talkers do catch up on their own, a child with no words at 24 months needs assessment to determine the cause - which could range from a simple language delay to hearing loss, autism, or another developmental condition. Early intervention is remarkably effective, and the sooner it begins, the better the outcomes. You do not need a diagnosis to start receiving speech therapy services through Early Intervention.',
  byAge: [
    { ageRange: '12-15 months', context: 'Most babies say their first word around 12 months, but the range extends to 15 months. If your child has no words by 15 months but is babbling, pointing, making eye contact, and understanding what you say, they may simply be a late talker. If they are also not babbling, not pointing, not making eye contact, or not responding to their name, earlier evaluation is warranted.' },
    { ageRange: '15-18 months', context: 'By 18 months, most toddlers have at least 5-20 words and understand many more. If your child has no words by 18 months, the CDC recommends developmental screening. The first step is always a hearing evaluation, as even mild hearing loss can significantly delay speech. You do not need a referral from your pediatrician to contact your state\'s Early Intervention program - parents can self-refer.' },
    { ageRange: '18-24 months', context: 'This is a critical period for language development. The "language explosion" typically happens between 18-24 months. If your child reaches 24 months with no words or only a handful of words, a comprehensive evaluation should include hearing testing, speech-language assessment, and developmental screening. About 50-70% of late talkers without other developmental concerns do eventually catch up, but there is no reliable way to predict which ones will without professional guidance.' },
    { ageRange: '24-36 months', context: 'A nonverbal child at 2 who is also not using gestures, not making eye contact, and not engaging socially needs a comprehensive developmental evaluation including autism screening. However, many children who are nonverbal at 2 have an isolated language delay - they communicate with gestures, are socially engaged, and simply need speech therapy to unlock their verbal skills. Speech-language therapy at this age shows the strongest evidence of effectiveness.' },
  ],
  whenNormal: ['Your child has a few words and is adding new ones, even if slowly - growth matters more than the exact count','Your child understands much more than they say and follows directions well','Your child communicates effectively with pointing, gesturing, and leading you to what they want','There is a family history of late talking with eventual catch-up, and your child is otherwise developing normally'],
  whenToMention: ['Your child has fewer than 10 words by 18 months','Your child has no words at all by 24 months','Your child does not seem to understand simple instructions or questions','Your child\'s speech progress has stalled with no new words for several weeks'],
  whenToActNow: ['Your child had words and lost them - any regression in language warrants urgent evaluation','Your child has no words, no pointing, no gestures, limited eye contact, and does not respond to their name - request a comprehensive developmental evaluation immediately','You suspect your child cannot hear well - hearing loss is treatable and time-sensitive'],
  relatedMilestones: ['language-first-words','language-two-word-phrases','language-receptive','language-babbling'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-talking','speech-delay','late-talker','early-signs-of-autism-baby'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
