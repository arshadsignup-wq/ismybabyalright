import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-blowing-raspberries',
  title: 'Baby Not Blowing Raspberries',
  category: 'communication',
  searchTerms: [
    'baby not blowing raspberries',
    'baby not making bubbles',
    'when do babies blow raspberries',
    'baby no lip buzzing',
    'baby not doing raspberries',
    'baby not making spit bubbles',
    'raspberry blowing milestone',
    'baby oral motor development',
    'when should baby blow raspberries',
    'baby not vibrating lips',
  ],
  quickAnswer:
    'Blowing raspberries typically emerges between 4 and 7 months as part of vocal play. This fun skill helps babies develop the oral motor control needed for speech. Some babies skip raspberries altogether and develop other vocal play behaviors instead, which is perfectly normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies are focused on cooing and early vowel sounds at this stage. Raspberry blowing requires oral motor coordination that has not developed yet. Your baby is building the foundation for these skills.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is when many babies discover they can blow raspberries, make spit bubbles, and create buzzing sounds with their lips. These activities strengthen the lips, tongue, and cheeks for future speech. However, not all babies blow raspberries during this window, and that is normal.',
    },
    {
      ageRange: '6-8 months',
      context:
        'Most babies who will blow raspberries are doing so by now, often enthusiastically and repeatedly. If your baby is not blowing raspberries but is making other varied sounds like squealing, growling, and beginning to babble, their oral motor development is progressing well.',
    },
    {
      ageRange: '8-10 months',
      context:
        'Babbling with consonants becomes the primary vocal milestone at this stage. Raspberry blowing may decrease as babies focus on more complex sound production. If your baby has never made any oral motor play sounds and is also not babbling, discuss this with your pediatrician.',
    },
    {
      ageRange: '10-12 months',
      context:
        'The focus shifts to babbling and early word attempts. Whether or not your baby ever blew raspberries is less important than whether they are progressing toward consonant sounds and varied vocalizations.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and has not started blowing raspberries yet',
    'Your baby makes other vocal play sounds like squeals and growls but skips raspberries',
    'Your baby tried raspberries briefly and moved on to babbling instead',
    'Your baby is developing babbling and consonant sounds even without a raspberry-blowing phase',
  ],
  whenToMention: [
    'Your baby is over 8 months with very limited oral motor play sounds of any kind',
    'Your baby drools excessively and has difficulty with feeding along with absent raspberry blowing',
    'Your baby seems to have weak lip or tongue movements and is not producing varied sounds',
  ],
  whenToActNow: [
    'Your baby has significant difficulty with feeding, excessive drooling, and no oral sound play, which may suggest oral motor weakness',
    'Your baby shows no sound production at all and does not respond to sounds by 6 months',
  ],
  relatedMilestones: ['vocal-play', 'babbling', 'cooing', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-raspberries-but-no-words', 'baby-vocal-play-absent', 'toddler-oral-motor-weakness'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Birth to One Year: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/01/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-4-to-7-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Communication Development in Infants.',
      url: 'https://www.zerotothree.org/resource/your-babys-development-4-months/',
    },
  ],
};
