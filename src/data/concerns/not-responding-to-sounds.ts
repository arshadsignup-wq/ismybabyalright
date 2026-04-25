import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-responding-to-sounds',
  title: 'Baby Not Responding to Sounds',
  category: 'communication',
  searchTerms: [
    'baby not responding to sounds',
    'baby not reacting to noise',
    'baby not hearing',
    'baby doesn\'t turn to sounds',
    'baby not startling at loud sounds',
    'baby ignoring sounds',
    'newborn hearing concerns',
    'baby deaf signs',
    'baby not responding to voice',
    'baby failed hearing test',
    'baby not turning toward noise',
  ],
  quickAnswer:
    'Babies should respond to sounds from birth  -  startling at loud noises, calming to familiar voices, and turning toward sounds by 4-6 months. If your baby consistently doesn\'t react to sounds, a hearing evaluation should be your first step. Hearing loss affects about 1-3 in 1,000 newborns and is highly treatable when caught early  -  early identification leads to much better language outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns should startle or blink in response to loud, sudden sounds (called the Moro reflex). They should also calm or become alert when they hear familiar voices, especially their mother\'s voice. All newborns in the US receive a hearing screening before leaving the hospital. If your baby passed this screening but you have concerns, trust your instincts  -  hearing can change, and a follow-up evaluation is easy to arrange.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, babies should be turning their eyes or head toward the source of a sound. They should respond to your voice by smiling, cooing, or becoming quiet. By 6 months, babies typically localize sound well  -  they turn directly toward where a sound is coming from. If your baby doesn\'t do any of these things, request a formal audiological evaluation.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies at this age should respond to their name, turn toward new sounds, and seem to enjoy music or singing. They should also be starting to babble, which requires being able to hear their own sounds and the sounds of others. Absence of babbling by 9 months can sometimes indicate a hearing concern and should be assessed.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, babies should clearly respond to familiar words, turn reliably when called by name, and respond to simple verbal requests. If your baby seems to ignore sounds, especially voices and their name, a comprehensive hearing evaluation is essential. Hearing loss can be partial  -  affecting only certain frequencies  -  so even a baby who responds to some sounds may have a hearing issue.',
    },
  ],
  whenNormal: [
    'Your baby sometimes ignores sounds when deeply focused on playing or exploring  -  selective attention is normal and different from not hearing.',
    'Your baby startles at loud sounds but doesn\'t always turn toward quieter sounds  -  sound localization develops gradually during the first 6 months.',
    'Your baby responds more to voices and music than to environmental noises  -  babies naturally prioritize human speech sounds.',
    'Your baby passed their newborn hearing screening and responds to sounds inconsistently  -  they may just be absorbed in what they\'re doing.',
  ],
  whenToMention: [
    'Your baby is over 4 months and doesn\'t consistently turn toward the source of sounds.',
    'Your baby doesn\'t seem to notice when you enter the room and start talking unless they can see you.',
    'Your baby is over 9 months and doesn\'t respond to their name, even when you\'re close and there are no distractions.',
    'Your baby had frequent ear infections and you\'ve noticed a change in their responsiveness to sounds.',
  ],
  whenToActNow: [
    'Your newborn doesn\'t startle at loud, sudden sounds  -  request a hearing screening if one hasn\'t been done, or a follow-up if the initial screen was inconclusive.',
    'Your baby at any age seems to have stopped responding to sounds they used to react to  -  sudden hearing changes can be caused by ear infections, fluid buildup, or other treatable conditions.',
    'Your baby has no babbling by 9 months AND doesn\'t respond to sounds  -  this combination strongly suggests hearing should be tested immediately.',
  ],
  relatedMilestones: [
    'hearing',
    'responds-to-name',
    'babbling',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing Assessment in Infants and Children: Recommendations Beyond Neonatal Screening. Pediatrics.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children: What Parents Need to Know.',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/facts.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Your Baby\'s Hearing and Communicative Development Checklist.',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
  ],
};
