import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-responding-to-voice',
  title: 'Baby Not Reacting to Voices',
  category: 'communication',
  searchTerms: [
    'baby not responding to voice',
    'baby doesn\'t react to talking',
    'baby ignores my voice',
    'baby not turning to voice',
    'baby doesn\'t recognize my voice',
    'newborn not responding to sound',
    'baby no reaction to speech',
    'baby doesn\'t look when I talk',
    'baby not reacting to voices',
    'baby unresponsive to voice',
  ],
  quickAnswer:
    'Babies begin responding to familiar voices in the first weeks of life, often by quieting, turning their head, or changing their expression. If your baby consistently does not react to voices by 2 to 3 months, a hearing evaluation is an important first step to rule out hearing loss.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns can recognize their mother\'s voice from birth and may quiet or become alert when hearing it. However, responses at this age are subtle and inconsistent. Your baby may startle to loud sounds but not visibly react to conversational-level speech.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Babies begin to show clearer responses to voices, including turning toward the speaker, widening their eyes, changing their sucking pattern, or cooing in response. If your baby shows no recognition or reaction to voices by 3 months, discuss your concerns with your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies clearly respond to voices by turning toward the sound, smiling at familiar voices, and showing excitement or comfort when spoken to. A baby who consistently ignores voices should be evaluated for hearing, even if they passed the newborn hearing screen.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies respond to their name, react to changes in tone of voice, and may turn toward a speaker even across the room. If your baby does not respond to voices at this age, a comprehensive hearing evaluation and developmental assessment are recommended.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babies understand simple words and respond to familiar phrases. They follow verbal directions and react to the emotional tone of speech. Lack of response to voices at this age requires prompt hearing and developmental evaluation.',
    },
  ],
  whenNormal: [
    'Your newborn occasionally startles to sounds but does not consistently turn toward your voice yet',
    'Your baby responds to your voice at home in quiet settings but seems less responsive in noisy environments',
    'Your baby is deeply focused on an activity or toy and seems to ignore you temporarily',
    'Your baby is very young (under 6 weeks) and responses to voices are subtle and inconsistent',
  ],
  whenToMention: [
    'Your baby is over 3 months and does not seem to recognize or react to familiar voices',
    'Your baby responds to some sounds like music or toys but ignores human speech',
    'Your baby does not calm or change behavior when you speak soothingly',
  ],
  whenToActNow: [
    'Your baby does not react to any sounds, including loud noises, at any age',
    'Your baby previously responded to voices and has suddenly stopped, which may indicate sudden hearing loss',
  ],
  relatedMilestones: ['hearing', 'responds-to-name', 'cooing', 'social-engagement'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-responding-to-sounds', 'hearing-loss-signs-baby', 'baby-not-turning-to-sounds'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing and Making Sounds: Your Baby\'s Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hearing-and-Making-Sounds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Your Baby\'s Hearing and Communicative Development Checklist.',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children.',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/index.html',
    },
  ],
};
