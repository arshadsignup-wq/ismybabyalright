import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hearing-loss-signs-baby',
  title: 'Signs of Hearing Loss in Babies',
  category: 'communication',
  searchTerms: [
    'baby hearing loss signs',
    'how to tell if baby is deaf',
    'baby not responding to sounds',
    'baby hearing test',
    'newborn hearing screening failed',
    'baby doesn\'t turn to voice',
    'baby not startled by loud noises',
    'signs of deafness in infants',
    'baby hearing problems',
    'when to check baby hearing',
  ],
  quickAnswer:
    'Most babies are screened for hearing loss at birth, but some hearing problems develop later or are missed. Early signs include not startling to loud sounds, not turning toward voices by 6 months, or not babbling by 9 months. Catching hearing loss early is critical for language development.',
  byAge: [
    {
      ageRange: 'Birth-3 months',
      context:
        'Newborns should startle or blink to sudden loud sounds and calm to familiar voices. They may turn their eyes or head slightly toward sounds. Most hospitals screen hearing at birth, but this test can miss mild losses or problems that develop later. If your baby seems completely unbothered by loud noises or doesn\'t react to your voice at all, mention it at the first checkup.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 6 months, babies should reliably turn their head toward sounds and voices. They should respond to their name, react to changes in your tone of voice, and show interest in toys that make noise. If your baby seems "in their own world" and doesn\'t respond when you call from behind, it\'s worth a hearing check  -  even if they passed the newborn screen.',
    },
    {
      ageRange: '7-12 months',
      context:
        'Babbling should be in full swing by 9 months, with consonant-vowel sounds like "bababa" or "dadada." Babies this age should also respond to simple words like "no" and look at familiar objects when you name them. If there\'s no babbling or your baby doesn\'t respond to speech or singing, a hearing evaluation should be done promptly.',
    },
    {
      ageRange: '13-18 months',
      context:
        'Your baby should follow simple instructions ("give me the cup") and say a few words by 18 months. If they\'re not responding to language at all, not imitating sounds, or not showing progress in understanding, hearing should be checked before assuming it\'s just a speech delay. Hearing loss is one of the most common reasons for delayed language.',
    },
    {
      ageRange: '19-36 months',
      context:
        'Toddlers with hearing loss may seem to ignore you, turn the TV volume very high, or speak much more loudly than needed. They may struggle to follow directions or seem frustrated when trying to communicate. Even mild or intermittent hearing loss (like from chronic ear infections) can affect speech development, so persistent concerns should be evaluated.',
    },
  ],
  whenNormal: [
    'Your baby startles to loud sounds, turns toward your voice, and seems to enjoy music and singing.',
    'Your baby passed the newborn hearing screen and is meeting typical milestones for responding to sound and beginning to babble.',
    'Your baby sometimes seems not to hear you, but it\'s inconsistent  -  they may just be deeply focused on play (common in toddlers).',
    'Your baby has had a few ear infections but is still babbling, responding to their name, and progressing with language.',
  ],
  whenToMention: [
    'Your baby failed the newborn hearing screen or didn\'t have one done.',
    'Your baby is over 6 months and doesn\'t turn toward voices or sounds consistently.',
    'Your baby is over 9 months with no babbling, or babbling has decreased over time.',
    'Your baby has had multiple ear infections and you\'re noticing a change in how they respond to sound.',
    'Your baby seems to hear some sounds (like a door closing) but not others (like your voice).',
  ],
  whenToActNow: [
    'Your baby has completely stopped babbling or lost words they were using before.',
    'Your baby is over 12 months and shows no response to sounds, voices, or their name  -  this needs immediate hearing evaluation.',
    'Your baby\'s hearing seems to have suddenly changed after an illness, injury, or medication.',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-responds-to-name',
    'language-first-words',
    'social-emotional-responds-to-voice',
    'cognitive-turns-to-sounds',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Hearing Loss in Children: Data and Statistics',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/data.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Warning Signs of Hearing Loss in Infants and Children',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Warning-Signs-of-Hearing-Loss.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  How Does Your Child Hear and Talk?',
      url: 'https://www.asha.org/public/speech/development/chart/',
    },
  ],
};
