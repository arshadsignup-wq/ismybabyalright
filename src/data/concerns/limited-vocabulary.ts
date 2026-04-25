import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'limited-vocabulary',
  title: 'Toddler Has a Limited Vocabulary',
  category: 'communication',
  searchTerms: [
    'toddler limited vocabulary',
    'toddler only says a few words',
    'toddler not enough words',
    'how many words should toddler say',
    '18 month old few words',
    '2 year old limited vocabulary',
    'toddler vocabulary count',
    'toddler late talker',
    'how many words at 18 months',
    'how many words at 2 years old',
    'child knows very few words',
  ],
  quickAnswer:
    'Vocabulary size varies widely among toddlers, but general benchmarks are about 5-20 words by 18 months and around 50 words by 24 months. Many "late talkers" catch up beautifully, especially when they show strong understanding of language and use gestures to communicate.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'Most babies have 1-5 words at this stage, and "word" is defined loosely  -  it can be a sound your baby uses consistently for the same thing, even if it doesn\'t sound like the adult version. "Ba" for bottle or "duh" for dog absolutely counts. Pointing and gesturing are just as important as words right now.',
    },
    {
      ageRange: '16-18 months',
      context:
        'By 18 months, pediatricians generally expect at least 5-20 words. Many toddlers hit a "vocabulary spurt" during this time, sometimes adding a new word every day. If your toddler has fewer than 5 words by 18 months, a speech-language evaluation is a reasonable step  -  early support is highly effective.',
    },
    {
      ageRange: '19-24 months',
      context:
        'The typical 24-month-old has about 50 words and is starting to combine two words together ("more milk," "daddy up"). If your toddler has fewer than 50 words by age 2 or isn\'t combining words, a speech evaluation is recommended. About 70-80% of late talkers without other concerns catch up by school age, but early intervention improves outcomes.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Vocabulary expands rapidly during the third year  -  from 50 words to hundreds. By age 3, most children are speaking in short sentences. If your child\'s vocabulary growth has stalled or they remain very difficult to understand, speech-language therapy can make a meaningful difference.',
    },
  ],
  whenNormal: [
    'Your toddler has fewer words than peers but is clearly understanding what you say, following directions, and using gestures and pointing effectively.',
    'Your toddler is bilingual  -  children learning two languages simultaneously may have fewer words in each language but a combined vocabulary that\'s on track.',
    'Your toddler went through a slower period but is now adding new words regularly, even if they\'re still behind benchmarks.',
    'Your toddler prefers gestures and sounds but is socially engaged  -  makes eye contact, shares toys, and brings you things to show you.',
    'There\'s a family history of late talking where the child eventually caught up without intervention.',
  ],
  whenToMention: [
    'Your toddler has fewer than 5 words at 18 months.',
    'Your toddler has fewer than 50 words at 24 months or is not combining any two words together.',
    'Your toddler\'s vocabulary seems to have plateaued  -  no new words added in several weeks.',
    'Your toddler relies almost entirely on pointing, grunting, or leading you by the hand rather than attempting words.',
  ],
  whenToActNow: [
    'Your toddler has lost words they were previously using  -  vocabulary regression always warrants evaluation.',
    'Your toddler has very few words AND limited understanding, doesn\'t follow simple directions, and doesn\'t respond to their name.',
    'Your toddler has very few words combined with no pointing, no gestures, and limited social engagement.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2yr.html',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Blooming or Language Problem?',
      url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/',
    },
  ],
};
