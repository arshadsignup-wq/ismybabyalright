import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-squealing',
  title: 'Baby Not Making Excited Sounds or Squealing',
  category: 'communication',
  searchTerms: [
    'baby not squealing',
    'baby no excited sounds',
    'baby not shrieking',
    'when do babies squeal',
    'baby not making high pitched sounds',
    'baby quiet no excitement sounds',
    'baby not squealing with delight',
    'no vocal excitement baby',
    'baby not screaming with joy',
    'when should baby squeal',
  ],
  quickAnswer:
    'Squealing and excited vocalizations typically emerge between 3 and 5 months as babies experiment with their voice. Some babies are naturally quieter, while others are vocal early. If your baby is cooing and socially engaging but not squealing yet, they are likely developing normally.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies are primarily cooing and making soft vowel sounds at this stage. Squealing has not typically developed yet. Your baby is building the vocal cord strength and breath control needed for louder, more varied sounds.',
    },
    {
      ageRange: '3-5 months',
      context:
        'This is when squealing, shrieking, and high-pitched excited sounds usually appear. Babies discover they can make loud noises and enjoy the reaction they get. Not all babies squeal at the same age, and temperament plays a role in how vocal a baby is.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies are squealing, growling, blowing raspberries, and experimenting with a wide range of sounds. These vocal play behaviors are important precursors to babbling. If your baby is still very quiet with minimal sound variety by 6 months, mention it to your pediatrician.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Babies are transitioning to babbling with consonant-vowel combinations. Squealing may decrease as more complex vocalizations take over. If your baby has never made excited high-pitched sounds and also lacks other vocalizations, a hearing evaluation may be recommended.',
    },
    {
      ageRange: '9-12 months',
      context:
        'At this stage, babbling and intentional sound-making are more important milestones than squealing. However, if your baby has been consistently quiet throughout infancy with very limited sound production of any kind, a comprehensive speech and hearing evaluation is advisable.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and making cooing sounds but has not started squealing yet',
    'Your baby has a calm temperament and makes sounds quietly rather than loudly',
    'Your baby squeals occasionally but not as frequently as other babies you know',
    'Your baby is making a variety of other sounds like coos, gurgles, or raspberries even without squealing',
  ],
  whenToMention: [
    'Your baby is over 6 months and makes very few sounds of any kind, not just squealing',
    'Your baby does not seem to react with excitement or interest to stimulating toys, games, or people',
    'Your baby\'s overall vocal production seems unusually limited compared to developmental expectations',
  ],
  whenToActNow: [
    'Your baby does not respond to sounds or voices, suggesting a possible hearing concern',
    'Your baby shows no emotional response to any stimulation and appears withdrawn or unengaged',
  ],
  relatedMilestones: ['cooing', 'vocal-play', 'babbling', 'social-smile'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-quiet-not-vocalizing', 'baby-not-making-vowel-sounds', 'baby-vocal-play-absent'],
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
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Six Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-6mo.html',
    },
  ],
};
