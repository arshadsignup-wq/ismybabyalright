import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-babbling',
  title: 'Baby Not Babbling',
  category: 'communication',
  searchTerms: [
    'baby not babbling',
    'when do babies babble',
    'baby not making consonant sounds',
    'baby not saying baba or mama',
    'no babbling at 8 months',
    'baby only coos not babbling',
    'late babbling in babies',
    'baby not making sounds',
    'when should baby start babbling',
    'baby babbling milestones',
  ],
  quickAnswer:
    'Babbling with consonant sounds like "ba," "da," and "ma" typically begins between 6 and 9 months and is an important building block for speech. Babies develop at different rates, but if your baby is not making any consonant sounds by 9 months, a hearing check is a good first step.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this age, babies communicate through crying, cooing, and making soft vowel-like sounds such as "oooh" and "ahhh." These early sounds are the foundation for later babbling. Responding to your baby\'s sounds with smiles and conversation encourages them to vocalise more.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies start experimenting with a wider range of sounds, including squeals, growls, and raspberry-blowing. Some babies begin early babbling with consonant-vowel combinations toward the end of this period, but many are still in the cooing and vocal play stage. Both are perfectly normal.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when canonical babbling, repeating consonant-vowel combinations like "bababa," "mamama," or "dadada," typically emerges. Your baby is practicing the mouth movements needed for speech. Not all babies babble at exactly 6 months, so don\'t worry if your baby is a bit later, especially if they are making lots of other sounds and engaging socially.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babbling becomes more varied and speech-like, with different consonant sounds strung together ("ba-da-ga"). Babies start to use babbling with intention, as if having a conversation. If your baby is not producing any consonant sounds by 9-10 months, your doctor will likely recommend a hearing assessment as a first step.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most babies have a few recognisable words by 12-15 months, built on months of babbling practice. If your baby is still not babbling with consonant sounds by 12 months, a speech and language evaluation can help determine whether support would be beneficial.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and making cooing sounds, squeals, or vowel sounds but not yet using consonants',
    'Your baby is 6-8 months and babbling is just beginning to emerge with occasional consonant sounds',
    'Your baby babbles more at some times than others, such as when relaxed at home versus in unfamiliar settings',
    'Your baby is very physically active and focused on motor milestones, and their babbling is developing a bit more slowly',
    'Your baby makes lots of sounds and engages socially, even if the consonant combinations are not yet frequent',
  ],
  whenToMention: [
    'Your baby is 9 months or older and is not making any consonant sounds like "b," "d," "m," or "g"',
    'Your baby was babbling and has become noticeably quieter or stopped babbling',
    'Your baby does not seem to respond to your voice or turn toward sounds, which could suggest a hearing concern',
    'Your baby is over 12 months with no babbling and no emerging words',
  ],
  whenToActNow: [
    'Your baby had been babbling or using words and has suddenly stopped vocalising altogether',
    'Your baby does not react to loud sounds at any age, suggesting a possible hearing issue that needs prompt evaluation',
  ],
  relatedMilestones: [
    'cooing',
    'babbling',
    'first-words',
    'responds-to-name',
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
    {
      org: 'WHO',
      citation:
        'World Health Organization. Developmental Milestones and Early Childhood Surveillance.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
