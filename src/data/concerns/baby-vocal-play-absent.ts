import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vocal-play-absent',
  title: 'Baby Not Experimenting with Sounds',
  category: 'communication',
  searchTerms: [
    'baby not experimenting with sounds',
    'baby no vocal play',
    'baby not making different sounds',
    'baby limited sound variety',
    'baby not growling or squealing',
    'no vocal experimentation baby',
    'baby same sounds only',
    'baby not exploring voice',
    'baby monotone sounds',
    'baby limited vocalizations',
  ],
  quickAnswer:
    'Between 4 and 6 months, babies typically enter a stage of vocal play where they experiment with squealing, growling, blowing raspberries, and varying pitch and volume. This stage builds the foundation for babbling. If your baby is not exploring different sounds by 6 months, a hearing check may be a good first step.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies at this stage primarily coo with soft vowel sounds. Vocal play has not yet developed, and it is normal for sound production to be limited to cooing, crying, and reflexive sounds like grunts.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Vocal play begins to emerge. Babies start making a wider variety of sounds including squeals, growls, and raspberry-like sounds. They are learning to control their voice and enjoy the new sounds they produce. Some babies are more vocal than others during this stage.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies are actively experimenting with sounds, changing pitch from high to low, varying volume, and producing a range of consonant-like and vowel sounds. This vocal experimentation is a key precursor to babbling. If your baby is still producing only limited, monotone sounds, mention it to your doctor.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Vocal play transitions into babbling with consonant-vowel combinations. Babies who had a rich vocal play stage tend to transition smoothly into babbling. If vocal play and babbling are both absent by 8 months, a hearing assessment and speech evaluation are recommended.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babbling should be well-established by now. If your baby has never gone through a vocal play stage and is not babbling, early intervention services can help support speech and language development.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and primarily cooing with soft vowel sounds',
    'Your baby makes some vocal play sounds but less frequently than you might expect',
    'Your baby is more focused on physical development and is vocal during calm, alert periods',
    'Your baby responds to your voice and shows interest in sounds even if their own sound production is quieter',
  ],
  whenToMention: [
    'Your baby is over 6 months and only makes one or two types of sounds with no variety',
    'Your baby does not seem interested in making sounds or experimenting with their voice',
    'Your baby is very quiet compared to same-age peers and has limited vocal output overall',
  ],
  whenToActNow: [
    'Your baby produces almost no sounds at all and does not respond to auditory stimulation by 6 months',
    'Your baby had been making sounds and has suddenly become very quiet or stopped vocalizing',
  ],
  relatedMilestones: ['cooing', 'vocal-play', 'babbling', 'hearing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-quiet-not-vocalizing', 'baby-not-squealing', 'baby-not-blowing-raspberries'],
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
        'American Academy of Pediatrics. Hearing and Making Sounds: Your Baby\'s Milestones.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hearing-and-Making-Sounds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
