import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-narrating-play',
  title: 'My Toddler Doesn\'t Talk During Play',
  category: 'communication',
  searchTerms: [
    'toddler doesn\'t talk during play',
    'toddler silent during play',
    'toddler not narrating play',
    'child doesn\'t talk while playing',
    'toddler quiet during pretend play',
    'toddler doesn\'t use words during play',
    'toddler plays silently',
    'child not using language in play',
    'when do toddlers talk during play',
    'toddler no self talk during play',
  ],
  quickAnswer:
    'Using language during play  -  narrating actions, giving voice to toys, or talking to themselves  -  typically develops between 2 and 3 years old. Before that, toddlers often play silently or with non-verbal sounds. If your toddler is talking in other contexts but quiet during play, they may simply be concentrating. But if they\'re silent across all contexts, their overall language development is worth evaluating.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, play is mostly exploratory  -  banging, shaking, mouthing, and stacking. Language during play, if any, is usually single words ("ball!" "uh oh!") or sound effects. Many toddlers this age play quietly and that\'s completely appropriate. What matters is whether they\'re using language in other contexts  -  naming things, making requests, responding to you.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers begin incorporating more language into play during this period. You might hear them label what they\'re doing ("car go!"), make animal sounds, or narrate simple actions. But plenty of toddlers this age still play mostly silently, especially during focused activities like puzzles or building. The key is whether they use language to communicate with you during and after play.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is when play narration typically blossoms. Children start talking to their toys, creating simple stories ("Baby hungry. Eat!"), and engaging in pretend play with accompanying dialogue. If your child is speaking in phrases and sentences in daily life but remains completely silent during play, it could indicate a difference in how they use language for social or imaginative purposes  -  worth mentioning at your next well visit.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3-4, most children narrate their play extensively  -  they give voices to characters, explain what\'s happening, and create stories. They also use private speech (talking to themselves) to guide their own behavior. If your child is largely silent during play at this age and also shows limited pretend play, limited social interest, or very rigid play patterns, a developmental evaluation could be helpful.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 and plays quietly  -  most toddlers this age don\'t narrate their play yet.',
    'Your toddler talks to you and other people but goes quiet during focused, independent play  -  concentration requires cognitive resources that compete with language production.',
    'Your toddler makes sound effects during play (car noises, animal sounds, crashes) even if they don\'t use words  -  this is a precursor to verbal narration.',
    'Your toddler uses language during play sometimes but not always  -  intermittent play narration is normal during the learning phase.',
  ],
  whenToMention: [
    'Your child is over 3 and never talks during play  -  to toys, to themselves, or to playmates  -  despite having adequate vocabulary in other contexts.',
    'Your child\'s play is very repetitive and rigid (lining up toys, spinning wheels) with no imaginative element and no language, even at age 2.5+.',
    'Your child doesn\'t engage in pretend play at all by age 2.5-3  -  no feeding dolls, no pretend cooking, no imaginative scenarios.',
  ],
  whenToActNow: [
    'Your child is silent during play AND has limited language across all contexts  -  very few words, no phrases, limited social communication  -  this warrants comprehensive evaluation.',
    'Your child previously talked during play and has stopped  -  especially if pretend play has also diminished or disappeared.',
  ],
  relatedMilestones: [
    'language-two-word-phrases',
    'language-sentences',
    'social-emotional-pretend-play',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Activities to Encourage Speech and Language Development.',
      url: 'https://www.asha.org/public/speech/development/activities-to-encourage-speech-and-language-development/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development in Young Children.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Three Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
  ],
};
