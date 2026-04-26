import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-dropping-beginning-sounds',
  title: 'Toddler Dropping Beginning Sounds of Words',
  category: 'communication',
  searchTerms: [
    'toddler dropping first sound of words',
    'toddler leaving off beginning of words',
    'child skipping first letter of words',
    'toddler initial consonant deletion',
    'toddler says "anana" instead of "banana"',
    'toddler drops beginning sounds',
    'child leaving out first syllable',
    'toddler omitting beginning consonants',
    'toddler speech missing first sounds',
    'child says "og" instead of "dog"',
  ],
  quickAnswer:
    'Dropping the beginning sounds of words (called initial consonant deletion) is less common than dropping the end sounds, which most toddlers do. While some young children briefly go through a phase of dropping initial sounds, this pattern should resolve quickly. If your toddler consistently drops beginning sounds past age 2 to 2.5, a speech evaluation can determine if they need help developing this skill.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'When toddlers first start speaking, their words are often simplified versions of adult words. Dropping syllables ("nana" for "banana") and sounds is common. At this age, the focus should be on whether your child is attempting words at all, not on perfect pronunciation. If they\'re using words to communicate, they\'re doing great, even if those words are missing pieces.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Dropping final consonants (saying "ca" for "cat") is very common and normal at this age. Dropping initial consonants (saying "at" for "cat") is less typical but can occur occasionally, especially with harder sounds. If your toddler drops beginning sounds on just a few words, it may resolve on its own. If they drop the first sound on most words, keep an eye on it.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2 to 3, most children are using beginning consonants consistently, even if they still drop ending sounds. If your child routinely leaves off the first sound or syllable of words at this age, a speech evaluation is recommended. Initial consonant deletion is considered an atypical phonological process, meaning it doesn\'t follow the standard path of speech development and usually benefits from therapy.',
    },
    {
      ageRange: '3+ years',
      context:
        'If your child is 3 or older and still consistently drops the beginning sounds of words, speech therapy should be pursued. This pattern significantly affects how well others can understand your child and can impact their confidence in communication. The good news is that articulation therapy is very effective for this kind of speech error, and children typically make rapid progress.',
    },
  ],
  whenNormal: [
    'Your toddler drops the first syllable of multi-syllable words ("nana" for "banana") - unstressed syllable deletion is normal and different from initial consonant deletion.',
    'Your toddler is under 2 and occasionally drops initial sounds but uses them in other words - inconsistency in early speech is expected.',
    'Your child drops ending sounds of words (says "do" for "dog") - final consonant deletion is a common, normal pattern that resolves by around age 3.',
    'Your toddler drops beginning sounds on only one or two specific difficult consonants but uses most initial sounds correctly.',
  ],
  whenToMention: [
    'Your child is over 2 and routinely drops the beginning sound of words across many different consonants.',
    'Your child\'s speech is very hard to understand because initial sounds are consistently missing.',
    'The pattern of dropping initial sounds is not improving over time or seems to be getting worse.',
  ],
  whenToActNow: [
    'Your child is over 2.5 and drops initial consonants on most words, making them very difficult to understand even for family members - this needs prompt speech therapy.',
    'Your child has lost the ability to produce beginning sounds they previously used - any regression in speech skills warrants immediate evaluation.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-vocabulary-growth',
    'language-sentence-use',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - How to Raise Concerns About Your Child\'s Speech',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
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
