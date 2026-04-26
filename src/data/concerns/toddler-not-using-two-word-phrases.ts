import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-using-two-word-phrases',
  title: 'Toddler Not Using Two-Word Phrases',
  category: 'communication',
  searchTerms: [
    'toddler not combining words',
    'toddler not using two word phrases',
    '2 year old not putting words together',
    'when should toddler use two word sentences',
    'toddler only using single words',
    'toddler not making phrases',
    'two word combinations toddler',
    'child not combining words by 2',
    'late to combine words toddler',
    'when do toddlers start two word phrases',
  ],
  quickAnswer:
    'Most toddlers start combining two words together - like "more milk" or "daddy go" - between 18 and 24 months. If your child has a good vocabulary of single words but hasn\'t started pairing them yet, they may just need a little more time. However, if they\'re past 24 months and still only using single words, it\'s a good idea to request a speech evaluation.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, most toddlers are still building their single-word vocabulary. Two-word phrases typically don\'t appear until closer to 18-24 months. If your child is saying a handful of words and understands simple instructions, they\'re right on track. Focus on talking to your child throughout the day and narrating what you\'re doing - this builds the foundation for word combinations.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the age range when two-word combinations typically emerge. Your toddler might say things like "more juice," "mama up," or "big truck." By 24 months, the CDC considers two-word phrases a key milestone. If your child has 50 or more single words but isn\'t combining them yet, give it a few more weeks - some children need a larger vocabulary before they start pairing words.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If your child is past their second birthday and still only using single words, a speech-language evaluation is recommended. Some late talkers do start combining words on their own, but waiting too long can mean missing a window where early intervention is most effective. A speech therapist can determine whether your child just needs a little boost or if there\'s an underlying language delay to address.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3, most children are using three- to four-word sentences and having simple conversations. If your child is 3 and still primarily using single words or only occasional two-word phrases, speech therapy should be underway. The good news is that children who get early support often make rapid progress and can close the gap with their peers.',
    },
  ],
  whenNormal: [
    'Your child is 18-20 months old and has 30-50 single words but hasn\'t started combining them yet - they may just need a bigger word bank first.',
    'Your child occasionally puts two words together but doesn\'t do it consistently - early combinations are often sporadic before they become habitual.',
    'Your child uses a single word plus a gesture to communicate complex ideas (like saying "up" while reaching toward you) - this shows they\'re thinking in combinations even before producing them verbally.',
    'Your child understands two-step directions like "get your shoes and bring them here" even though they\'re not yet producing two-word phrases themselves.',
  ],
  whenToMention: [
    'Your child is 24 months old and has not combined any two words together.',
    'Your child has fewer than 50 words at age 2 and is not combining words.',
    'Your child was starting to combine words but has stopped or gone back to single words only.',
  ],
  whenToActNow: [
    'Your child is over 2.5 years old with no word combinations and a limited vocabulary - this suggests a significant language delay that needs evaluation now.',
    'Your child has lost words or phrases they previously used - any regression in language skills requires immediate evaluation.',
  ],
  relatedMilestones: [
    'language-two-word-phrases',
    'language-first-words',
    'language-vocabulary-growth',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Two Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 1 to 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-to-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
