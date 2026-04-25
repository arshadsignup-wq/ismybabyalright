import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-imitating-sounds',
  title: 'Baby Not Imitating Sounds',
  category: 'communication',
  searchTerms: [
    'baby not imitating sounds',
    'baby won\'t copy sounds',
    'baby not mimicking',
    'baby doesn\'t repeat sounds',
    'baby not copying babbling',
    'when do babies imitate sounds',
    'baby not imitating speech',
    'baby not repeating after me',
    'baby not echoing sounds',
    'baby doesn\'t try to talk back',
  ],
  quickAnswer:
    'Sound imitation develops gradually  -  babies typically begin imitating vowel sounds around 4-6 months and consonant sounds by 8-10 months. This skill is a key building block for speech. If your baby is engaging with your voice, babbling on their own, and showing interest in communication, imitation is likely developing even if you haven\'t noticed it clearly yet.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'True sound imitation isn\'t expected yet. However, babies do engage in early "proto-conversations"  -  you talk, they coo, you respond, they coo again. This turn-taking is the earliest form of communicative imitation. Your baby may seem to match your pitch or rhythm even before imitating specific sounds.',
    },
    {
      ageRange: '4-7 months',
      context:
        'Babies begin to imitate simple vowel sounds during this period. You might notice that if you say "oooh," your baby tries to make a similar sound back. This imitation may be inconsistent and subtle at first. Engaging in lots of face-to-face "conversation" where you imitate your baby\'s sounds encourages them to imitate yours.',
    },
    {
      ageRange: '7-10 months',
      context:
        'Consonant sound imitation typically emerges now. Your baby may try to copy sounds like "ba," "da," or "ma" when you model them. They may also start imitating the rhythm and melody of speech even if they can\'t reproduce the exact sounds. This is sometimes called "jargoning"  -  babbling that sounds like speech with rising and falling intonation.',
    },
    {
      ageRange: '10-14 months',
      context:
        'By 10-12 months, most babies are actively trying to imitate new sounds and words. If your baby is not imitating any sounds by 12 months and is also not babbling with consonant sounds, a hearing evaluation and speech-language assessment are appropriate. Sound imitation is closely linked to the development of first words.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and engaging in turn-taking vocal play  -  cooing back when you talk  -  even without clear sound imitation.',
    'Your baby imitates some sounds but not others, or imitates at some times but not on demand  -  imitation is emerging gradually.',
    'Your baby is babbling enthusiastically on their own even if they don\'t seem to copy your specific sounds.',
    'Your baby imitates actions and gestures (clapping, waving) even if sound imitation is lagging slightly behind.',
  ],
  whenToMention: [
    'Your baby is over 9 months and makes no attempt to imitate any sounds, even simple vowel sounds.',
    'Your baby doesn\'t seem interested in back-and-forth vocal play  -  they don\'t respond when you talk or babble to them.',
    'Your baby is not babbling with consonant sounds by 9-10 months, which often coincides with limited sound imitation.',
    'Your baby is 12 months or older and not imitating sounds or attempting words.',
  ],
  whenToActNow: [
    'Your baby doesn\'t respond to sounds or voices at any age  -  this may indicate a hearing issue requiring urgent evaluation.',
    'Your baby was imitating sounds and has stopped, especially if other social behaviors (eye contact, smiling) have also decreased.',
  ],
  relatedMilestones: [
    'babbling',
    'language-first-words',
    'social-emotional-joint-attention',
    'hearing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-9mo.html',
    },
  ],
};
