import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-only-saying-few-words',
  title: 'Toddler Only Saying a Few Words',
  category: 'communication',
  searchTerms: [
    'toddler only says a few words',
    '18 month old only says 5 words',
    'toddler small vocabulary',
    'toddler not saying many words',
    'how many words should a 2 year old say',
    'toddler limited words',
    'my toddler barely talks',
    '18 month old vocabulary size',
    'toddler knows few words',
    'toddler word count low',
    'how many words is normal at 18 months',
  ],
  quickAnswer:
    'By 18 months, most toddlers say around 10 to 20 words, and by age 2, they typically have 50 or more. If your toddler has fewer words than expected but is understanding language well, using gestures, and learning new words (even slowly), they may simply be on the later end of normal. But if the gap keeps growing, an evaluation can provide clarity and support.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'Many toddlers say their first real words between 12 and 15 months, though some take longer. Having 1 to 5 words at this stage is common. What matters most is whether your child is communicating in other ways - pointing, waving, reaching, making eye contact, and babbling with varied sounds. These are all strong signs that spoken words are on their way.',
    },
    {
      ageRange: '15-18 months',
      context:
        'By 15-18 months, most toddlers have around 10-20 words, though there\'s a wide range. If your child has fewer than 5 words at 18 months, mention it to your pediatrician. However, if they\'re understanding language, following simple directions, and communicating with gestures and sounds, they may just be building up to a vocabulary burst.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when vocabulary typically takes off. Many toddlers experience a "word explosion" somewhere between 18 and 24 months, rapidly going from 20 words to 50 or more. If your child hasn\'t had this burst by age 2 and has fewer than 50 words, they\'re considered a late talker. A speech evaluation can help determine whether they\'ll catch up on their own or need support.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, children should have at least 50 words and be combining them into simple phrases. By age 3, most children have 200-1,000 words and are speaking in sentences. If your 2-year-old is still using only a handful of words, speech therapy can help bridge the gap. Early intervention at this stage has excellent outcomes.',
    },
  ],
  whenNormal: [
    'Your 12-15-month-old has just a few words but is babbling actively, pointing, and understanding what you say - words are coming.',
    'Your 18-month-old has about 10 words and is adding one or two new ones each week - slow and steady growth is still progress.',
    'Your toddler understands far more than they say - strong receptive language usually means expressive language will follow.',
    'Your toddler is in a bilingual household and has fewer words in each language individually, but their combined vocabulary across both languages is on track.',
    'Your child just had a major developmental leap in motor skills (like starting to walk) and speech has temporarily slowed - this can happen.',
  ],
  whenToMention: [
    'Your child has fewer than 5 words at 18 months.',
    'Your child has fewer than 50 words at 24 months or is not learning new words.',
    'Your child seems to understand very little of what you say, in addition to having few spoken words.',
  ],
  whenToActNow: [
    'Your child is 2 years old with fewer than 10 words and is not using any gestures to communicate - this combination suggests a significant delay.',
    'Your child has lost words they previously used consistently - any regression in language should be evaluated urgently.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-vocabulary-growth',
    'language-two-word-phrases',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Delay in Toddlers: Information for Parents',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
