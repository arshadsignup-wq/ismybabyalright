import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-making-vowel-sounds',
  title: 'Baby Not Making Vowel Sounds',
  category: 'communication',
  searchTerms: [
    'baby not making vowel sounds',
    'baby not cooing',
    'baby not saying ooh aah',
    'baby not vocalizing vowels',
    'when do babies start cooing',
    'baby no vowel sounds 3 months',
    'baby quiet no cooing',
    'infant not making sounds',
    'baby not making ooh sounds',
    'baby silent 2 months',
    'when should baby start making sounds',
  ],
  quickAnswer:
    'Most babies begin making vowel sounds - those lovely "oooh," "aaah," and "eee" sounds - around 2 to 3 months of age. This early cooing is one of the first steps in language development. Some babies are naturally quieter than others, but if your baby isn\'t making any vowel sounds by 4 months, it\'s worth checking in with your pediatrician to make sure hearing and development are on track.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'In the first two months, babies communicate mainly through crying and reflexive sounds like grunts, squeaks, and sighs. Cooing and vowel sounds haven\'t started yet, and that\'s completely normal. Your newborn is taking in the world and learning the rhythm of your voice. Talking and singing to your baby now lays the groundwork for their first vowel sounds.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is when most babies begin cooing - making open, rounded vowel sounds like "ooo," "aaa," and "eee." These sounds often emerge during face-to-face interaction and are your baby\'s first attempts at "conversation." If your baby is 3-4 months old and making some sounds (even if they\'re not classic coos), they\'re likely on track. Some babies coo quietly or only in certain settings.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4 to 6 months, cooing should be well established and your baby may be adding new sounds - squealing, growling, blowing raspberries. If your baby still isn\'t making any vowel-like sounds by 4-5 months, talk to your pediatrician. A hearing screening is a good first step, since babies need to hear sounds to learn to produce them.',
    },
    {
      ageRange: '6+ months',
      context:
        'After 6 months, babies should be moving from cooing into babbling - adding consonant sounds to their vowels ("bababa," "mamama"). If your baby is over 6 months and still isn\'t making vowel sounds or any purposeful vocalizations, a speech and hearing evaluation is recommended. Early identification of any issues gives your baby the best start.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and makes occasional sounds like grunts, squeaks, or sighs but no clear vowel sounds yet - cooing is just about to begin.',
    'Your baby coos sometimes but not constantly - some babies are quieter and vocalize mainly during interactive play.',
    'Your baby makes sounds mostly when they\'re content and happy, and is quiet when tired or overstimulated.',
    'Your baby was premature - adjust for their corrected age when tracking vocalization milestones.',
  ],
  whenToMention: [
    'Your baby is 4 months old (corrected for prematurity) and has not made any vowel-like sounds.',
    'Your baby makes sounds but they\'re all the same monotone quality with no variation in pitch or sound type.',
    'Your baby seems disinterested in voices and doesn\'t try to "talk back" when you speak to them.',
  ],
  whenToActNow: [
    'Your baby is 6 months or older and makes no purposeful vocalizations at all - not even vowel sounds, grunts, or squeals.',
    'Your baby was making vowel sounds and has completely stopped vocalizing - loss of any communication skill warrants immediate evaluation.',
  ],
  relatedMilestones: [
    'language-cooing',
    'language-babbling',
    'language-responds-to-name',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby By Four Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: Speech Milestones for Babies',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
