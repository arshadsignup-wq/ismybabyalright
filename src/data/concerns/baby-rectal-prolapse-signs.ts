import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rectal-prolapse-signs',
  title: 'Rectal Prolapse Concerns in Baby',
  category: 'digestive',
  searchTerms: [
    'baby rectal prolapse',
    'toddler rectal prolapse',
    'baby tissue coming out rectum',
    'child rectal prolapse causes',
    'baby rectal prolapse straining',
    'toddler rectum protruding',
    'baby rectal prolapse treatment',
    'infant rectal prolapse',
    'baby bowel protruding anus',
    'toddler red tissue anus',
  ],
  quickAnswer:
    'Rectal prolapse, where rectal tissue protrudes from the anus, can occur in young children, usually during straining from constipation or diarrhea. While alarming to see, it is usually mild and self-resolving once the underlying cause (typically constipation) is treated. Gentle manual reduction and addressing constipation are the main treatments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rectal prolapse is very rare in young infants. If tissue is protruding from the anus of a newborn, it could be a rectal polyp, prolapse, or another condition and should be evaluated by a pediatrician promptly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Rectal prolapse is uncommon at this age. If it occurs, it may be related to chronic straining from diarrhea or constipation. Have your pediatrician evaluate it to determine the cause and appropriate treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If rectal prolapse occurs during straining for a bowel movement, gently push the tissue back in with a warm, wet cloth. Address the underlying constipation to prevent recurrence. If prolapse happens repeatedly, your pediatrician may investigate for underlying conditions like cystic fibrosis, which can present with rectal prolapse.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who strain heavily with constipation or during potty training may experience rectal prolapse. Treatment focuses on keeping stools soft with dietary changes and possibly stool softeners. Most children outgrow rectal prolapse once constipation is managed effectively. Persistent prolapse may need surgical evaluation.',
    },
  ],
  whenNormal: [
    'A brief, mild prolapse during straining that reduces on its own or with gentle pressure is concerning but manageable',
  ],
  whenToMention: [
    'You notice tissue protruding from your child\'s anus during bowel movements',
    'Rectal prolapse has occurred more than once',
    'You want to discuss treatment to prevent recurrence',
  ],
  whenToActNow: [
    'Prolapsed tissue that will not go back in, is turning dark or blue, or is very painful',
    'Rectal prolapse with significant bleeding',
    'Recurrent rectal prolapse in a young infant, which should be evaluated for underlying conditions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rectal Prolapse in Children. Pediatric Surgery.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Rectal Prolapse in Children. Journal of Pediatric Surgery.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29136697/',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Rectal Prolapse.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/rectal-prolapse',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-constipation-remedies-safe', 'baby-rectal-bleeding'],
};
