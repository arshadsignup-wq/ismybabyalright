import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'speech-therapy-when-to-start', title: 'When to Start Speech Therapy', category: 'communication',
  searchTerms: ['when to start speech therapy', 'speech therapy age to begin', 'too young for speech therapy', 'speech therapy toddler when', 'early speech therapy benefits', 'speech therapy 18 months', 'speech therapy 2 year old', 'when does child need speech therapy', 'speech therapy referral when', 'right time for speech therapy'],
  quickAnswer: 'There is no "too young" for speech therapy. Early intervention speech services can begin as early as birth for children with identified risks, and most children benefit from starting as soon as a delay is identified. Research consistently shows that earlier intervention leads to better outcomes. If your child is not meeting communication milestones, do not wait to see if they will catch up. Request an evaluation now.',
  byAge: [
    { ageRange: '0-6 months', context: 'Speech therapy at this age focuses on feeding, early vocalizations, and parent coaching. Babies with known risk factors such as hearing loss, cleft palate, or genetic conditions should begin services immediately.' },
    { ageRange: '6-12 months', context: 'If your baby is not babbling, not responding to sounds, or not engaging socially, an evaluation is appropriate. Therapy at this age focuses on building pre-linguistic skills through parent-mediated strategies.' },
    { ageRange: '12-18 months', context: 'If your child has no words by 12 months, limited gestures, or poor understanding of simple words, request an evaluation. Early intervention at this stage can prevent gaps from widening.' },
    { ageRange: '18-24 months', context: 'Children with fewer than 20 words at 18 months or fewer than 50 words at 24 months should be evaluated. This is the most common age for parents to seek a first evaluation.' },
    { ageRange: '2-3 years', context: 'If your child is not combining words, is difficult to understand, or is frustrated by communication breakdowns, speech therapy can help significantly. It is never too late to start, and children at this age respond well to intervention.' },
  ],
  whenNormal: ['Your child is meeting communication milestones on time', 'Your child is a bit behind but making steady progress each month', 'Your pediatrician has confirmed age-appropriate communication development', 'Your child communicates effectively using gestures, words, and expressions'],
  whenToMention: ['Your child is slightly behind in speech or language milestones', 'You are unsure whether your child needs an evaluation', 'Your child has risk factors like family history of speech delay or recurrent ear infections'],
  whenToActNow: ['Your child has missed multiple communication milestones', 'Your child has lost previously acquired speech or language skills', 'Your child is becoming frustrated, withdrawn, or aggressive due to communication difficulties'],
  relatedMilestones: ['first-words', 'language-development', 'social-engagement', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-what-to-expect', 'early-intervention-speech-process', 'toddler-speech-progress-slow'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Early Intervention.', url: 'https://www.asha.org/public/speech/early-intervention/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays in Toddlers.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. When to Seek Help for Speech and Language.', url: 'https://www.zerotothree.org/resource/when-to-seek-help/' },
  ],
};
