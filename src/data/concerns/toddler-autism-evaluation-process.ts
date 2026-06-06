import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-evaluation-process', title: 'What Happens During an Autism Evaluation?', category: 'behavior',
  searchTerms: ['autism evaluation process', 'what happens autism assessment', 'autism diagnosis process toddler', 'autism evaluation what to expect', 'how is autism diagnosed toddler', 'autism testing toddler', 'developmental evaluation autism', 'ADOS testing toddler', 'autism assessment timeline', 'autism evaluation steps'],
  quickAnswer: 'An autism evaluation typically involves multiple professionals including a developmental pediatrician, psychologist, or multidisciplinary team. The process includes parent interviews about developmental history, standardized observation tools like the ADOS-2, cognitive and language assessments, and review of development. The evaluation usually takes several hours and may be split across multiple sessions. Results lead to a clear diagnostic conclusion and recommendations.',
  byAge: [
    { ageRange: '18-24 months', context: 'Evaluations at this young age focus on social communication, joint attention, play skills, and sensory behaviors. The ADOS-2 Toddler Module can be used for children as young as 12 months. Diagnosis at this age is possible but may be provisional.' },
    { ageRange: '24-36 months', context: 'This is a common age for comprehensive evaluation. Clinicians observe social interaction, communication, play, and repetitive behaviors. Parent interviews provide developmental history. Cognitive and language testing may be included.' },
    { ageRange: '3-4 years', context: 'Evaluation is more straightforward at this age as behaviors are more observable. The process typically includes the ADOS-2, cognitive testing, language evaluation, and parent questionnaires. A clear diagnosis can usually be made.' },
    { ageRange: '4-5 years', context: 'Evaluations may also include assessment of adaptive behavior, academic readiness, and social skills. Results guide both diagnosis and educational planning.' },
    { ageRange: '5-6 years', context: 'For children not diagnosed earlier, evaluations at this age often involve school observations in addition to clinical assessment. Results help with school placement and service planning.' },
  ],
  whenNormal: ['Your child has been screened and does not require comprehensive evaluation', 'Your child was evaluated and autism was ruled out', 'Your child is developing typically and screening was precautionary'],
  whenToMention: ['Your child has been referred for evaluation and you want to understand the process', 'You are waiting for an evaluation appointment and want to know what to expect', 'You have questions about whether your child needs an evaluation'],
  whenToActNow: ['Your child needs evaluation but wait times are very long and development is regressing', 'Your child has been diagnosed and needs intervention services to start immediately'],
  relatedMilestones: ['social-engagement', 'language-development', 'joint-attention', 'pretend-play'],
  showSelfReferral: true, relatedConcernSlugs: ['baby-autism-screening-concerns', 'toddler-autism-mchat-failed', 'toddler-autism-diagnosis-processing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Identification, Evaluation, and Management of Children with ASD.', url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Diagnosis of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/screening.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};
