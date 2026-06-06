import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-autism-mchat-failed', title: 'My Toddler Failed the M-CHAT Autism Screening', category: 'behavior',
  searchTerms: ['toddler failed mchat', 'M-CHAT failed what next', 'mchat screening results', 'failed autism screening toddler', 'mchat positive result', 'autism screener failed', 'what does mchat failure mean', 'mchat follow up', 'toddler screened positive autism', 'after failing mchat'],
  quickAnswer: 'Failing the M-CHAT (Modified Checklist for Autism in Toddlers) does not mean your child has autism. It means additional evaluation is recommended. Many children who fail the initial M-CHAT screen do not receive an autism diagnosis after comprehensive evaluation. The important next step is to complete the follow-up interview (M-CHAT-R/F) with your pediatrician and, if indicated, pursue a developmental evaluation.',
  byAge: [
    { ageRange: '16-20 months', context: 'The M-CHAT can be given starting at 16 months. A positive result at this young age has a higher false-positive rate. The follow-up interview narrows down which children need comprehensive evaluation.' },
    { ageRange: '20-24 months', context: 'This is the most common age for M-CHAT screening. A failed screen should be followed by the structured follow-up interview with your pediatrician. Based on results, a referral for comprehensive evaluation may be made.' },
    { ageRange: '24-30 months', context: 'After a failed M-CHAT and follow-up, a comprehensive developmental evaluation is recommended. This typically involves observation by specialists, standardized testing, and parent interviews. Evaluations may take several weeks to complete.' },
    { ageRange: '30-36 months', context: 'Whether or not a diagnosis is made, children identified through screening often benefit from early intervention services. You do not need to wait for a diagnosis to access services in many states.' },
    { ageRange: '3-5 years', context: 'Some children who failed the M-CHAT do not receive an autism diagnosis but may have other developmental differences that benefit from support. Others are diagnosed and benefit from early, intensive intervention.' },
  ],
  whenNormal: ['Your child failed the initial screen but passed the follow-up interview, suggesting a false positive', 'Your child failed on only 1 to 2 items and the follow-up interview clarified concerns', 'Your child\'s development has progressed since the screening'],
  whenToMention: ['Your child failed the M-CHAT and follow-up interview and needs a comprehensive evaluation', 'You are unsure about next steps after a failed screen', 'You want to start services while waiting for evaluation'],
  whenToActNow: ['Your child failed the M-CHAT with a high-risk score and has not been referred for evaluation', 'Your child is losing skills while waiting for evaluation'],
  relatedMilestones: ['social-engagement', 'language-development', 'joint-attention', 'pretend-play'],
  showSelfReferral: true, relatedConcernSlugs: ['baby-autism-screening-concerns', 'toddler-autism-evaluation-process', 'early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. M-CHAT-R/F Autism Screening Tool.', url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Autism Screening.', url: 'https://www.cdc.gov/ncbddd/autism/screening.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};
