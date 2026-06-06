import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-voice-too-loud',
  title: 'Toddler Always Yelling or Speaking Too Loudly',
  category: 'communication',
  searchTerms: [
    'toddler always yelling',
    'toddler speaks too loud',
    'toddler can\'t control volume',
    'toddler yells instead of talks',
    'toddler loud voice all the time',
    'toddler volume control',
    'toddler doesn\'t use inside voice',
    'toddler shouts everything',
    'toddler voice regulation',
    'why does toddler yell all the time',
  ],
  quickAnswer:
    'Toddlers are naturally loud as they explore their voice and express big emotions. However, a child who consistently speaks at a very loud volume may have difficulty hearing, sensory processing differences, or has developed a vocal habit. If your toddler is always extremely loud, a hearing check is a good first step to rule out hearing loss as a cause.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age are experimenting with volume as part of vocal play. Yelling, squealing, and shouting are normal and fun for them. They are learning about cause and effect with their voice. This stage is temporary and expected.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Volume control is still developing. Toddlers may yell when excited, frustrated, or trying to communicate something urgent. Some toddlers yell because they do not yet have the words to express themselves. This is a normal developmental phase.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Children begin to understand the concept of "inside voice" versus "outside voice," though they may not consistently follow it. If your child is always loud and does not seem to be able to modulate their volume, a hearing evaluation is recommended to ensure they can hear at normal conversational levels.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Volume control improves as children mature. They should be able to whisper and use a quieter voice when reminded. A child who seems unable to control their volume despite understanding the request may have hearing or sensory processing differences.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Children should have reasonable volume control in most situations. Persistent inability to regulate vocal volume warrants evaluation for hearing, sensory processing, or voice disorders.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 and experimenting with loud sounds as part of vocal play',
    'Your toddler yells when excited, frustrated, or in noisy environments',
    'Your toddler can use a quieter voice when reminded but needs frequent reminders',
    'Your toddler is louder at home where they are comfortable but quieter in new settings',
  ],
  whenToMention: [
    'Your toddler seems unable to modulate their volume even when they try',
    'Your toddler always speaks loudly and does not seem to notice how loud they are',
    'Other signs suggest possible hearing difficulty, such as turning the TV up very loud',
  ],
  whenToActNow: [
    'Your toddler\'s voice is becoming hoarse from constant yelling, suggesting vocal cord strain',
    'Your toddler does not respond to conversational-level speech, suggesting hearing loss',
  ],
  relatedMilestones: ['voice-quality', 'hearing', 'self-regulation', 'sensory-processing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-voice-hoarse-raspy', 'toddler-vocal-nodules-signs', 'hearing-loss-signs-baby'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Voice Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/voice-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing Loss in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Hearing Loss in Children.',
      url: 'https://www.nidcd.nih.gov/health/hearing-loss-children',
    },
  ],
};
