import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'accent-vs-speech-disorder-toddler',
  title: 'Accent vs Speech Disorder in Bilingual Toddlers',
  category: 'communication',
  searchTerms: [
    'toddler accent vs speech problem',
    'bilingual toddler pronunciation',
    'toddler speaking with accent',
    'toddler mispronouncing sounds',
    'is my toddler\'s speech normal bilingual',
    'bilingual child speech delay or accent',
    'toddler mixing languages',
    'toddler code switching',
    'bilingual toddler speech evaluation',
    'toddler sounds different from peers',
    'ESL toddler speech concerns',
    'multilingual toddler pronunciation',
  ],
  quickAnswer:
    'When toddlers grow up hearing more than one language, they naturally blend sounds, patterns, and accents from both languages. This is normal and healthy, not a speech disorder. A bilingual child may pronounce some sounds differently than monolingual peers because they are learning the sound systems of two languages simultaneously. True speech disorders affect both languages equally, while accent influence appears only in specific sounds borrowed from one language to another.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this stage, bilingual babies may babble using sounds from both languages. They might say their first words slightly later than monolingual peers, but this is within normal range. The total number of words across both languages combined should be assessed, not just words in one language. A bilingual baby who says 5 words in English and 5 in Spanish has a 10-word vocabulary.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers commonly mix languages within a single sentence (called code-mixing or code-switching). This is a sign of bilingual competence, not confusion. They may use a word from Language A when speaking Language B because they learned that word first in that language. Pronunciation may include sounds from both languages. For example, a child learning Spanish and English may roll their "r" sounds in English words.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, bilingual children typically begin separating their languages more clearly and can adjust which language they speak based on who they are talking to. Some accent influence between languages is completely normal and may persist for years. A true speech sound disorder will affect production in both languages. If you are concerned, a speech-language pathologist experienced with bilingual children can evaluate whether the patterns are accent-related or disordered.',
    },
  ],
  whenNormal: [
    'Mixing words from two languages in a single sentence (code-switching)',
    'Pronouncing some sounds with influence from the other language (accent transfer)',
    'Having a slightly smaller vocabulary in each individual language compared to monolingual peers',
    'Having a combined vocabulary across both languages that matches monolingual norms',
    'Taking slightly longer to begin speaking in sentences but catching up by age 3-4',
  ],
  whenToMention: [
    'Your child\'s speech is very difficult for familiar listeners to understand in both languages by age 2.5-3',
    'Your child seems frustrated by their inability to communicate in either language',
    'Your child is not combining words in either language by age 2',
    'You are unsure whether your child\'s speech patterns reflect accent or a true disorder',
  ],
  whenToActNow: [
    'Your child has lost words or language skills they previously had in either language',
    'Your child has stopped trying to communicate verbally and uses only gestures after age 18 months',
    'Your child is not babbling or using any words by 15 months in either language',
  ],
  relatedMilestones: ['12-months', '18-months', '24-months', '36-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['bilingual-speech-delay', 'delayed-language-in-bilingual-child', 'speech-delay', 'speech-articulation-disorder'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Bilingual Service Delivery.',
      url: 'https://www.asha.org/practice-portal/professional-issues/bilingual-service-delivery/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: Speech Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-Speech-Milestones.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
