import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'bilingual-speech-delay',
  title: 'Is Bilingualism Causing My Baby\'s Speech Delay?',
  category: 'communication',
  searchTerms: [
    'bilingual baby speech delay',
    'does bilingualism cause speech delay',
    'bilingual toddler not talking',
    'two languages confusing baby',
    'should I stop speaking second language',
    'bilingual language development',
    'bilingual baby late talker',
    'mixing languages toddler',
    'bilingual speech milestones',
    'raising bilingual baby speech',
  ],
  quickAnswer:
    'Bilingualism does not cause speech delays. Bilingual children may take slightly longer to say their first words in each individual language, but when you count words in both languages together, they\'re right on track. If your bilingual child has fewer than 10 total words (in any language) by 18 months or fewer than 50 by age 2, that\'s a delay  -  and you should get a speech evaluation, not drop a language.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Bilingual babies babble just like monolingual babies, and at the same age. They\'re absorbing both languages from birth and building the foundation for speech. There\'s no need to limit exposure to one language at this stage  -  the more language input they get, the better. Babies are wired to learn multiple languages simultaneously without confusion.',
    },
    {
      ageRange: '13-18 months',
      context:
        'First words may come slightly later for some bilingual toddlers, but the delay is small (a few weeks to a couple of months) and not universal. Many bilingual babies say their first words right on time. When counting vocabulary, add up words in both languages. If your child has 10 words total (5 in each language, or 8 in one and 2 in the other), that counts. If they have fewer than 10 total by 18 months, mention it to your pediatrician.',
    },
    {
      ageRange: '19-24 months',
      context:
        'By age 2, bilingual toddlers should have at least 50 words combined across both languages and be starting to put two words together (in either language). It\'s normal for them to mix languages in one sentence ("more leche")  -  this is called code-switching, and it\'s a sign of language skill, not confusion. If your child isn\'t reaching these milestones in total vocabulary, they need a speech evaluation, not less exposure to one language.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Bilingual children may have a smaller vocabulary in each individual language compared to monolingual peers, but their total vocabulary (both languages combined) should be similar. If your child is significantly delayed in understanding or expressing language in both languages, that\'s a true delay. Don\'t stop speaking your home language  -  research shows bilingual children with speech delays benefit from therapy in both languages, and maintaining the home language supports family connection and identity.',
    },
  ],
  whenNormal: [
    'Your child says some words in one language and some in another, and mixes them in sentences  -  this is typical bilingual development, not confusion.',
    'Your child has 50 words by age 2 when you count both languages together, even if they have fewer than 50 in each individual language.',
    'Your child seems to understand both languages well, even if they speak one more than the other.',
    'Your child\'s first words came a few weeks later than your monolingual friend\'s baby  -  small differences are normal and don\'t predict long-term delays.',
  ],
  whenToMention: [
    'Your child is 18 months with fewer than 10 words total across both languages.',
    'Your child is 2 years old with fewer than 50 words combined in both languages.',
    'Your child isn\'t combining words by age 2 in any language.',
    'Your child doesn\'t seem to understand simple instructions in either language by 18 months.',
  ],
  whenToActNow: [
    'Your child is over 2 years old with very few words (under 25 total) and isn\'t combining any words.',
    'Your child has lost words they were previously using in either language.',
    'Your child is 3 years old and still not using sentences in any language, or is very hard to understand.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-vocabulary-growth',
    'language-receptive-both-languages',
    'language-code-switching',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Learning Two Languages',
      url: 'https://www.asha.org/public/speech/development/learning-two-languages/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Raising Bilingual Children',
      url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/Bilingual-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Developmental Milestones for Bilingual Children',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
