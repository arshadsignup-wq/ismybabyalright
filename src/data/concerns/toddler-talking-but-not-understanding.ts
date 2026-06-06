import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-talking-but-not-understanding',
  title: 'Toddler Talks but Doesn\'t Seem to Understand',
  category: 'communication',
  searchTerms: [
    'toddler talks but doesn\'t understand',
    'toddler says words but not comprehending',
    'toddler receptive language delay',
    'toddler doesn\'t understand directions',
    'toddler words but no comprehension',
    'receptive only language delay',
    'toddler uses words but confused',
    'toddler echolalic but not understanding',
    'toddler repeats but doesn\'t understand',
    'toddler surface level speech',
  ],
  quickAnswer:
    'A receptive language delay, where a child can say words but does not seem to understand language directed at them, is less common but more concerning than an expressive-only delay. Children may use memorized phrases or echolalia without true comprehension. A comprehensive speech-language evaluation including a hearing test is important to identify the cause and guide intervention.',
  byAge: [
    { ageRange: '12-18 months', context: 'Most children understand more words than they say. If your child uses some words but does not seem to understand simple requests like "give me the ball" or "where\'s your shoe," this is worth monitoring. Ensure your child has had a hearing evaluation.' },
    { ageRange: '18-24 months', context: 'Receptive language delay becomes more apparent. Your child may say words but not follow simple directions, not point to body parts when asked, or not identify familiar objects by name. A speech-language evaluation is recommended.' },
    { ageRange: '24-36 months', context: 'If your child talks but does not understand questions, cannot follow two-step directions, or uses words without seeming to understand their meaning, a comprehensive evaluation is important. Receptive language delays can be associated with hearing loss, language disorders, or developmental differences.' },
    { ageRange: '3-4 years', context: 'Speech therapy for receptive language focuses on building comprehension through structured activities. Children may need strategies for understanding directions, vocabulary, and concepts. Treatment is most effective when started early.' },
    { ageRange: '4-5 years', context: 'Receptive language difficulties can affect learning in preschool and school settings. Children may need accommodations like visual supports, simplified instructions, and additional processing time alongside ongoing therapy.' },
  ],
  whenNormal: [
    'Your young toddler is just beginning to connect words with meanings and comprehension is developing',
    'Your toddler understands words in context but not when items are out of sight',
    'Your toddler follows directions with gestural cues but not verbal-only instructions',
  ],
  whenToMention: [
    'Your toddler uses words but cannot follow simple one-step directions by 18 months',
    'Your toddler repeats words or phrases without seeming to understand their meaning',
    'Your toddler cannot point to common objects or body parts when asked by 24 months',
  ],
  whenToActNow: [
    'Your toddler shows no understanding of any words and does not respond to their name',
    'Your toddler has lost comprehension they previously demonstrated',
  ],
  relatedMilestones: ['language-comprehension', 'follows-directions', 'vocabulary-growth', 'hearing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-receptive-language', 'not-following-commands', 'toddler-mixed-receptive-expressive-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.', url: 'https://www.nidcd.nih.gov/health/specific-language-impairment' },
  ],
};
