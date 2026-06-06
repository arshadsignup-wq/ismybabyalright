import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-speech-therapy-referral',
  title: 'When Does My Baby Need Speech Therapy?',
  category: 'medical',
  searchTerms: [
    'baby speech therapy when',
    'baby speech therapy referral',
    'baby not talking when to worry',
    'speech delay baby',
    'baby late talker speech therapy',
    'infant speech therapy',
    'toddler speech delay therapy',
    'speech language pathologist baby',
    'baby not babbling speech concern',
    'early intervention speech baby',
  ],
  quickAnswer:
    'Speech-language therapy may be recommended if your baby is not babbling by 9 months, not using any words by 15-18 months, or has fewer than 50 words and no two-word phrases by age 2. A speech-language pathologist (SLP) works on both understanding language (receptive) and producing language (expressive), as well as feeding and swallowing difficulties. Early intervention for speech delays leads to significantly better outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Speech therapy at this age is primarily for feeding and swallowing difficulties. A speech-language pathologist who specializes in infant feeding can help with issues like difficulty latching, poor suck-swallow-breathe coordination, and aspiration during feeding. Watch for cooing sounds by 2-3 months as early communication milestones.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babbling should begin around 4-6 months with sounds like "ba," "da," and "ma." If your baby is very quiet and not babbling by 6 months, discuss this with your pediatrician. A hearing evaluation may be recommended first, as hearing loss is a common cause of speech delay.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 9 months, babies typically babble with varied sounds and may start imitating words. If your baby is not babbling or seems to have stopped vocalizing, a referral for speech evaluation is appropriate. Early intervention (birth to age 3) provides free or low-cost services in most states.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 months, most babies say at least 1-2 words. By 18 months, a vocabulary of about 10-20 words is expected. By 24 months, toddlers typically have 50+ words and begin combining two words. If your child is significantly below these benchmarks, a speech evaluation is recommended. "Wait and see" is no longer the preferred approach for speech delays.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, your child should be combining words into short phrases and be understood by familiar people about 50-75% of the time. If speech is significantly unclear, your child is frustrated by inability to communicate, or comprehension seems limited, speech therapy can make a tremendous difference. Many late talkers catch up with therapy.',
    },
  ],
  whenNormal: [
    'Your baby is meeting communication milestones within the normal range',
    'Your baby understands more than they can say (receptive language ahead of expressive)',
    'Your child is a "late talker" who understands well and is making steady progress',
  ],
  whenToMention: [
    'Your baby is not babbling by 9 months or not using any words by 15-18 months',
    'Your toddler has fewer than 50 words by age 2 or is not combining words',
    'Your child\'s speech is very difficult for others to understand',
  ],
  whenToActNow: [
    'Your baby stops babbling or loses words they previously used (regression)',
    'Your child does not seem to understand simple directions, does not respond to their name, or has completely stopped communicating',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-physical-therapy-referral',
    'baby-occupational-therapy-referral',
    'baby-developmental-pediatrician-referral',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Language and Speech Disorders in Children.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/language-disorders.html',
    },
  ],
};
