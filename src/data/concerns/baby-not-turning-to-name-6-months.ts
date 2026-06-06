import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-turning-to-name-6-months',
  title: 'Baby Not Turning to Name at 6 Months',
  category: 'communication',
  searchTerms: [
    'baby not turning to name at 6 months',
    '6 month old not responding to name',
    'baby ignores name',
    'baby doesn\'t look when I call name',
    'when do babies respond to name',
    'baby name recognition',
    'baby not recognizing own name',
    'name response delay baby',
    'baby doesn\'t turn when called',
    'when should baby know name',
  ],
  quickAnswer:
    'Most babies begin consistently responding to their name between 5 and 7 months. At 6 months, some babies are just starting to make this connection. If your baby does not respond to their name by 9 months, it is considered a milestone to discuss with your pediatrician, as it can be related to hearing or developmental differences.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies do not yet recognize their name at this age. They respond to voices and sounds in general but cannot distinguish their name from other words. This is completely normal.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Babies may begin to show some recognition of their name, such as briefly pausing or looking up when called. However, consistent name response has not yet developed, and many babies at this age do not turn to their name reliably.',
    },
    {
      ageRange: '5-7 months',
      context:
        'This is when most babies begin turning to their name more consistently. Your baby may respond when you call their name in a quiet room but not in a busy or noisy environment. Responding to name is still developing and can be inconsistent at this age.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Most babies respond to their name reliably by 9 months. If your baby rarely turns to their name by 8 months, especially in a quiet setting when they are not deeply engaged in play, mention it to your pediatrician. A hearing evaluation is often a useful first step.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Consistent name response is expected by 9 months. If your baby does not turn to their name by this age, your pediatrician may recommend hearing testing and may screen for developmental differences. Early evaluation leads to better outcomes.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and does not yet turn reliably when you call their name',
    'Your baby responds to their name in quiet settings but not when distracted or in noisy environments',
    'Your baby sometimes turns to their name and sometimes does not, which is normal variability at 6 months',
    'Your baby responds to your voice and turns to sounds but is not yet connecting their specific name to themselves',
  ],
  whenToMention: [
    'Your baby is over 9 months and rarely or never turns when you call their name',
    'Your baby does not respond to their name and also shows limited response to other sounds',
    'Your baby does not respond to their name and also has limited eye contact or social engagement',
  ],
  whenToActNow: [
    'Your baby was previously responding to their name and has suddenly stopped, along with other skill losses',
    'Your baby does not respond to any sounds or voices, suggesting a possible hearing emergency',
  ],
  relatedMilestones: ['responds-to-name', 'hearing', 'joint-attention', 'social-engagement'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-responding-to-own-name-consistently', 'not-responding-to-name', 'hearing-loss-signs-baby'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social and Emotional Development: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-4-to-7-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tuning In: How Communication Develops.',
      url: 'https://www.zerotothree.org/resource/tuning-in-how-communication-develops/',
    },
  ],
};
