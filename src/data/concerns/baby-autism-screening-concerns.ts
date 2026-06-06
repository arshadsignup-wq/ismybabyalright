import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'baby-autism-screening-concerns', title: 'Worried About Autism - When and How to Screen', category: 'behavior',
  searchTerms: ['worried about autism baby', 'autism screening baby', 'when to screen for autism', 'autism red flags baby', 'should I screen for autism', 'autism screening age', 'early autism detection', 'autism concerns baby toddler', 'how is autism diagnosed baby', 'autism evaluation when'],
  quickAnswer: 'The AAP recommends autism screening at 18 and 24 months for all children, using the M-CHAT-R/F questionnaire. If you have concerns before these ages, you can request screening earlier. Early signs of autism may include limited eye contact, no pointing by 12 months, no words by 16 months, no pretend play by 18 months, or loss of any previously acquired skills. Trust your instincts as a parent and raise concerns with your pediatrician.',
  byAge: [
    { ageRange: '0-6 months', context: 'Autism cannot be reliably diagnosed at this age, but some early signs may include reduced eye contact, limited social smiling, and reduced response to familiar voices. These signs overlap with many other conditions and with normal variation.' },
    { ageRange: '6-12 months', context: 'Possible early indicators include limited babbling, absent pointing, lack of response to name, reduced social engagement, and no back-and-forth gestures. These should be monitored but are not diagnostic at this age.' },
    { ageRange: '12-18 months', context: 'Autism screening can begin. Key concerns include no words by 16 months, no pointing by 12 months, no showing or waving, limited eye contact, and loss of any previously acquired skills.' },
    { ageRange: '18-24 months', context: 'Universal screening with M-CHAT-R/F is recommended at 18 and 24 months. This brief questionnaire identifies children who should be referred for comprehensive evaluation. Early identification leads to earlier intervention.' },
    { ageRange: '24-36 months', context: 'Autism can be reliably diagnosed by age 2 in many cases. If you have concerns, request a developmental evaluation. The diagnostic process typically includes observation, parent interviews, and standardized testing.' },
  ],
  whenNormal: ['Your baby makes eye contact, responds to their name, and engages socially even if quieter than peers', 'Your toddler has some quirks but is developing social communication skills on track', 'Your child plays pretend, points to share, and shows interest in other people'],
  whenToMention: ['You have a gut feeling that your child\'s social development is different', 'Your child shows several early signs like limited eye contact, absent pointing, and no words', 'There is a family history of autism and you want proactive screening'],
  whenToActNow: ['Your child has lost previously acquired skills like words, social smiling, or babbling', 'Your child shows no social engagement, no communication, and no joint attention by 18 months'],
  relatedMilestones: ['social-engagement', 'joint-attention', 'language-development', 'pretend-play'],
  showSelfReferral: true, relatedConcernSlugs: ['early-signs-of-autism-baby', 'toddler-autism-mchat-failed', 'toddler-autism-evaluation-process'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Identification, Evaluation, and Management of Children with ASD.', url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Screening and Diagnosis of Autism Spectrum Disorder.', url: 'https://www.cdc.gov/ncbddd/autism/screening.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};
