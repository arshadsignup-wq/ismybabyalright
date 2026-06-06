import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-scripted-speech-only',
  title: 'Toddler Only Uses Memorized Phrases',
  category: 'communication',
  searchTerms: [
    'toddler scripted speech',
    'toddler only memorized phrases',
    'toddler repeating scripts',
    'toddler movie quotes only',
    'toddler rehearsed speech',
    'toddler echolalia scripts',
    'toddler not generating own sentences',
    'toddler only reciting',
    'gestalt language processor',
    'toddler using phrases from TV',
  ],
  quickAnswer:
    'Some children learn language in chunks or scripts, memorizing whole phrases from books, TV, or conversations rather than building sentences word by word. This is called gestalt language processing and represents a different but valid path to language development. If your child only uses memorized phrases and cannot adapt them or create novel sentences, a speech-language pathologist experienced with gestalt language processing can help guide their development.',
  byAge: [
    { ageRange: '12-18 months', context: 'Some early words may be memorized phrases that sound like single units to the child. For example, a baby might say "whatsthat" as a single word. This can be an early sign of gestalt language learning, which is not concerning at this age.' },
    { ageRange: '18-24 months', context: 'A gestalt language learner may use longer phrases or sentences that seem advanced but are actually memorized chunks. They may quote books or songs perfectly but not be able to answer a simple question. This pattern is more common in some children than others.' },
    { ageRange: '24-36 months', context: 'If your child primarily communicates through memorized scripts and cannot generate novel combinations, a speech evaluation is helpful. The goal is to help your child break down their scripts into flexible, adaptable language units.' },
    { ageRange: '3-4 years', context: 'With appropriate support, gestalt language learners can begin to mitigate and recombine their phrases into more flexible language. Speech therapy with a clinician who understands gestalt language processing is important.' },
    { ageRange: '4-5 years', context: 'Progress involves moving from whole scripts to partial scripts to novel recombinations. With appropriate therapy, many children develop flexible, self-generated language. The process may take longer than typical language development.' },
  ],
  whenNormal: [
    'Your toddler uses some memorized phrases alongside their own novel word combinations',
    'Your toddler quotes books or songs but also creates their own sentences',
    'Your toddler uses a memorized phrase in an appropriate context to communicate a real need',
    'Your young toddler is just beginning to learn language and some chunk learning is normal',
  ],
  whenToMention: [
    'Your toddler communicates almost exclusively through memorized phrases and cannot generate novel sentences',
    'Your toddler\'s scripted speech does not seem connected to the current situation or context',
    'Your toddler cannot answer questions or respond to conversation outside of their memorized scripts',
  ],
  whenToActNow: [
    'Your toddler only uses scripts and shows no understanding of language directed at them',
    'Your toddler\'s scripts are becoming more rigid and less functional over time',
  ],
  relatedMilestones: ['language-development', 'sentence-formation', 'conversation-skills', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-gestalt-language-processing', 'toddler-delayed-echolalia', 'echolalia'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Autism Spectrum Disorder: Communication Problems.', url: 'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children' },
  ],
};
