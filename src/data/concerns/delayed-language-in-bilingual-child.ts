import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-language-in-bilingual-child',
  title: 'Delayed Language in Bilingual Child',
  category: 'communication',
  searchTerms: [
    'bilingual child speech delay',
    'bilingual toddler not talking',
    'does bilingualism cause speech delay',
    'bilingual child late talker',
    'two languages delay speech',
    'bilingual baby confused by languages',
    'multilingual child speech development',
    'bilingual toddler language mixing',
    'when to worry bilingual speech',
    'bilingual child fewer words',
    'code switching toddler normal',
  ],
  quickAnswer:
    'Being raised with two or more languages does not cause speech or language delays. Bilingual children may have slightly fewer words in each individual language, but their total vocabulary across both languages is typically on par with monolingual peers. Language mixing (code-switching) is also completely normal and is actually a sign of sophisticated language processing. If you have concerns, ask for an evaluation - but make sure the evaluator considers both languages.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies exposed to two languages from birth can distinguish between them remarkably early. They babble on the same timeline as monolingual babies. You may notice them responding differently to each language - this is a sign that their brain is processing both. Keep speaking both languages naturally. There is no need to restrict your baby to one language.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Bilingual toddlers typically say their first words on the same timeline as monolingual toddlers, though those first words may come from either language. It\'s common for a bilingual 18-month-old to have 10 words in one language and 5 in the other. What matters is the total word count across both languages combined, not each language separately.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Your bilingual toddler may mix words from both languages in the same sentence - this is called code-switching and it\'s normal and healthy. It does not mean they\'re confused. By age 2, their combined vocabulary across both languages should be around 50 or more words. If they have fewer than 50 total words across both languages, or aren\'t combining words, consider an evaluation.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Bilingual children at this age typically develop a dominant language (usually the one they hear most) and may be less fluent in the other. This is completely normal. By age 3, they should be using sentences in at least one language and be understood by family members in both. If your child is significantly behind in both languages, that suggests a true language delay that should be addressed.',
    },
    {
      ageRange: '3+ years',
      context:
        'By preschool age, most bilingual children are clearly communicating in both languages, though one may be stronger than the other. If your child is struggling in both languages - not just the less-exposed one - a speech evaluation is warranted. Make sure the speech therapist has experience with bilingual children and evaluates both languages, as testing in only one language can underestimate a bilingual child\'s abilities.',
    },
  ],
  whenNormal: [
    'Your bilingual toddler has fewer words in each language individually, but their combined total across both languages matches age expectations.',
    'Your child mixes words from both languages in the same sentence - code-switching is a normal part of bilingual development, not confusion.',
    'Your child prefers one language over the other, especially the language of their primary caregiver or the language spoken at daycare.',
    'Your child understands both languages well but speaks mostly in one - receptive bilingualism often precedes productive bilingualism.',
    'Your child went through a quiet period when starting daycare or school in a second language - a "silent period" of adjustment is common and temporary.',
  ],
  whenToMention: [
    'Your child has fewer than 50 total words across both languages combined by age 2.',
    'Your child is not combining words in either language by age 2.',
    'Your child doesn\'t seem to understand basic instructions in either language.',
  ],
  whenToActNow: [
    'Your child has very few words in both languages, limited understanding in both, and is not using gestures to communicate - a delay in all languages is a true language delay, not a bilingual effect.',
    'Your child has lost words or phrases in either language that they previously used - regression always warrants urgent evaluation.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-vocabulary-growth',
    'language-two-word-phrases',
    'language-sentence-use',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Learning to Speak More Than One Language',
      url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/How-to-Help-Your-Child-Learn-a-Second-Language.aspx',
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
