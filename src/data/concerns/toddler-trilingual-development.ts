import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-trilingual-development', title: 'Trilingual Child Development Concerns', category: 'communication',
  searchTerms: ['trilingual child development', 'three languages child', 'trilingual toddler speech delay', 'raising trilingual child', 'three languages confusing toddler', 'trilingual child mixing languages', 'multilingual child development', 'three languages speech delay', 'trilingual toddler concerns', 'multiple languages child development'],
  quickAnswer: 'Children are capable of learning three or more languages simultaneously without confusion or inherent delay. Research shows that the human brain can acquire multiple languages from birth. Trilingual children may take slightly longer to build vocabulary in each individual language, but their total vocabulary across all three languages is typically on par with monolingual peers. Continue providing consistent exposure to all three languages. If you have concerns, ensure that any evaluation considers all three languages together.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies can distinguish between three languages from birth. They will babble using sounds from all languages they hear. Consistent exposure from different caregivers or in different contexts helps the baby organize the languages.' },
    { ageRange: '12-24 months', context: 'First words may come from any of the three languages. Vocabulary in each individual language may appear lower than monolingual norms, but total vocabulary across all three should be comparable. Continue speaking each language naturally.' },
    { ageRange: '2-3 years', context: 'Mixing all three languages is normal and expected. The child is using all available words to communicate. One language will likely become dominant based on exposure. The child may begin to associate different languages with different people or settings.' },
    { ageRange: '3-4 years', context: 'Language separation improves. The child increasingly matches the right language to the right person. Some languages may be stronger than others depending on exposure. Consistent input in all three languages supports balanced development.' },
    { ageRange: '4-6 years', context: 'Trilingual children develop impressive cognitive flexibility. They can often switch between languages based on context. The weaker languages need continued support through meaningful exposure and use.' },
  ],
  whenNormal: ['Your child\'s total vocabulary across all three languages is age-appropriate', 'Your child mixes languages but communicates effectively', 'Your child is beginning to match languages to the right people', 'Your child understands all three languages even if speaking ability varies'],
  whenToMention: ['Your child\'s combined vocabulary across all three languages seems low', 'Your child is not combining words in any language by age 2', 'Your child seems frustrated by communication in all languages'],
  whenToActNow: ['Your child has very limited communication across all three languages combined', 'Your child has lost words or skills in any language', 'Your child is not understood by familiar listeners in any language'],
  relatedMilestones: ['language-development', 'vocabulary-growth', 'conversation-skills', 'first-words'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-bilingual-code-switching', 'toddler-bilingual-dominant-language', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Multilingualism.', url: 'https://www.asha.org/public/speech/development/Bilingual/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Learning More Than One Language.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/Learning-More-Than-One-Language.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. The Bilingual Brain.', url: 'https://www.nih.gov/news-events/nih-research-matters/bilingual-brain' },
  ],
};
