import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-singing-along',
  title: 'Toddler Not Singing Along to Songs',
  category: 'communication',
  searchTerms: [
    'toddler not singing along',
    'toddler won\'t sing nursery rhymes',
    'child doesn\'t sing with me',
    'toddler not interested in songs',
    'when do toddlers start singing',
    'toddler won\'t do hand motions to songs',
    'child not singing along to music',
    'toddler doesn\'t finish songs',
    '2 year old not singing',
    'toddler won\'t participate in music',
  ],
  quickAnswer:
    'Most toddlers begin singing parts of familiar songs between 18 months and 2.5 years, often starting by filling in the last word of a line or humming the melody. Some children love singing and start early, while others prefer to listen quietly and may not sing along until closer to age 3. Not singing along doesn\'t necessarily indicate a language problem - some kids are just observers rather than performers.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, most toddlers enjoy listening to music and may bounce, clap, or sway, but they\'re not expected to sing yet. Some early talkers might attempt a word or two of a familiar song. What matters more at this stage is whether your child shows interest in music - does their face light up when a favorite song comes on? Do they want you to sing it again? Interest is the precursor to participation.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Between 18 and 24 months, many toddlers start filling in familiar words in songs, especially at the end of lines. If you pause before the last word of "Twinkle Twinkle Little ___," they may fill in "star." They might also hum melodies or do hand motions for songs like "Itsy Bitsy Spider." If your toddler isn\'t doing this yet, try pausing and waiting - they may surprise you.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, many children can sing parts of several familiar songs, though the words may not be perfectly clear and the melody may be approximate. Some children prefer to sing alone (you might catch them singing in their crib) rather than with others. If your child has good language development otherwise but doesn\'t sing, it may simply be a preference - not all children are performers.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3-4, most children can sing entire simple songs and enjoy doing so. If your child is 3+ and never attempts to sing, hum, or fill in words to songs, and they also have limited vocabulary or trouble with other language milestones, singing difficulty may be part of a broader language concern worth evaluating. But if language is otherwise fine, some children simply don\'t enjoy singing.',
    },
  ],
  whenNormal: [
    'Your toddler loves listening to songs and does hand motions but doesn\'t sing the words yet - physical participation often comes before vocal participation.',
    'Your child sings when they think no one is listening (in their crib, in the car seat) but won\'t perform on demand - many children are self-conscious about singing.',
    'Your 2-year-old hums melodies but doesn\'t produce the lyrics clearly - melody awareness is actually a positive sign.',
    'Your child fills in the last word of familiar song lines when you pause, even if they don\'t sing full songs.',
    'Your child is more interested in active play than sitting and singing - temperament matters.',
  ],
  whenToMention: [
    'Your child is over 2.5 and shows no interest in music at all - doesn\'t respond to songs, doesn\'t clap or move to rhythm, and doesn\'t attempt any singing or humming.',
    'Your child is over 3 and can\'t reproduce any part of a familiar song, combined with other language delays like limited vocabulary or difficulty with sentences.',
  ],
  whenToActNow: [
    'Your child shows no response to music or singing at any age, doesn\'t respond to changes in your vocal tone, and also doesn\'t respond well to sounds in general - hearing should be evaluated.',
  ],
  relatedMilestones: [
    'language-vocabulary-growth',
    'language-imitates-sounds',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 2 to 3 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Two Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
