import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-saying-mama-dada',
  title: 'Baby Not Saying Mama or Dada',
  category: 'communication',
  searchTerms: [
    'baby not saying mama',
    'baby not saying dada',
    'when do babies say mama',
    'when do babies say dada',
    'baby won\'t say mama or dada',
    '12 month old not saying mama',
    'baby says dada but not mama',
    'baby not saying any words',
    'when should baby say mama dada',
    'baby babbles but no mama dada',
  ],
  quickAnswer:
    'Most babies say "mama" or "dada" with meaning between 10 and 14 months, though they may babble these sounds earlier without attaching them to a person. If your baby is babbling with consonant sounds, making eye contact, and communicating with gestures, the specific words will likely follow in their own time.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Babies at this stage often babble "mamama" or "dadada" as simple sound repetition without any meaning attached. This is called canonical babbling and it\'s an exciting step, but it\'s not the same as saying a word. Your baby is simply practicing mouth movements and enjoying the sounds.',
    },
    {
      ageRange: '9-11 months',
      context:
        'Some babies begin to associate "mama" or "dada" with the right parent during this window, while many others are still using these sounds interchangeably or not at all. Both patterns are within the normal range. What matters more right now is whether your baby is babbling with a variety of consonant sounds and showing social engagement.',
    },
    {
      ageRange: '12-14 months',
      context:
        'By around 12 months, most babies are using at least one word with meaning  -  but it might not be "mama" or "dada." It could be "ba" for ball or "da" for dog. If your baby has at least one meaningful word and is communicating through pointing and gestures, they\'re on track even if "mama" and "dada" haven\'t clicked yet.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your baby has no meaningful words at all by 15 months  -  not just "mama" and "dada" but any consistently used word  -  it\'s worth mentioning to your pediatrician. However, many late talkers at this age are understanding a great deal, and a hearing evaluation plus speech assessment can help determine whether support would be useful.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and babbling with a variety of consonant-vowel sounds like "baba," "gaga," or "deedee" even without "mama" or "dada" specifically.',
    'Your baby says "mama" and "dada" but uses them interchangeably for both parents or for everything  -  this is a normal developmental step before true association.',
    'Your baby has other first words like "ball," "dog," or "more" but hasn\'t specifically settled on "mama" or "dada" yet.',
    'Your baby understands when you say "mama" or "dada" and looks at the right person, even if they don\'t say it themselves.',
  ],
  whenToMention: [
    'Your baby is over 12 months and not using any consonant sounds in babbling  -  no "ba," "da," "ma," or "ga" sounds at all.',
    'Your baby is 15 months or older with no meaningful words of any kind, not just "mama" and "dada."',
    'Your baby seems to understand very little of what you say and doesn\'t respond to familiar words or simple requests.',
  ],
  whenToActNow: [
    'Your baby was saying "mama" or "dada" and has stopped  -  any loss of words warrants a prompt evaluation.',
    'Your baby is over 12 months, has no words, does not point or gesture, and avoids eye contact  -  this combination should be evaluated soon.',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-first-words',
    'social-emotional-joint-attention',
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
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Twelve Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-12mo.html',
    },
  ],
};
