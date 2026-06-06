import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-gestalt-language-processing',
  title: 'Gestalt Language Processing in Toddlers',
  category: 'communication',
  searchTerms: [
    'gestalt language processing', 'gestalt language learner toddler', 'toddler learns language in chunks',
    'gestalt language development', 'toddler echolalia gestalt', 'NLA natural language acquisition',
    'toddler language processing style', 'gestalt vs analytic language', 'chunk language learner',
    'toddler whole phrase learning',
  ],
  quickAnswer:
    'Gestalt language processing is a style of language learning where children acquire whole phrases or "chunks" before breaking them down into individual words. Instead of learning "want" + "cookie" separately, a gestalt learner memorizes "want a cookie" as a single unit. This is a valid language development path, not a disorder. However, gestalt language learners may need specific support to progress through the stages of breaking down and recombining language.',
  byAge: [
    { ageRange: '12-18 months', context: 'A gestalt language learner may produce longer phrases that sound advanced but are actually memorized as whole units. They may say "Let\'s go!" or "Oh no!" as first language productions. These are called "gestalts" and are the building blocks for this learning style.' },
    { ageRange: '18-24 months', context: 'Gestalt learners accumulate more scripted phrases. They may use phrases from books, songs, or caregiver language. These scripts often serve a communicative purpose, even if the connection is not immediately obvious. Understanding the intent behind the scripts is important.' },
    { ageRange: '24-36 months', context: 'The next developmental stage involves mitigating, or beginning to break gestalts into smaller pieces. A child who once said "Let\'s go to the park" as a whole unit may begin extracting "go" or "park" for use in other contexts. Speech therapy can support this process.' },
    { ageRange: '3-4 years', context: 'With support, gestalt learners begin recombining language fragments into novel phrases. This is when original, self-generated language begins to emerge. Progress may look different from typical development but is still meaningful and important.' },
    { ageRange: '4-5 years', context: 'Many gestalt language learners develop flexible, original language by this age with appropriate support. Some may retain a preference for formulaic language but can communicate effectively. Understanding their learning style helps parents and therapists provide optimal support.' },
  ],
  whenNormal: [
    'Your toddler uses some memorized phrases alongside individual words they have learned',
    'Your toddler is beginning to break down their gestalts and use parts in new contexts',
    'Your toddler\'s gestalt language serves clear communicative purposes',
    'Your toddler is making progress through the stages of gestalt language development',
  ],
  whenToMention: [
    'Your toddler communicates only through memorized gestalts with no signs of breaking them down',
    'Your toddler\'s gestalt language does not seem to serve communicative purposes',
    'You are unsure how to support your gestalt language learner at home',
  ],
  whenToActNow: [
    'Your toddler has no functional communication, relying entirely on non-communicative scripts',
    'Your toddler\'s language development has stalled and they are not progressing through gestalt stages',
  ],
  relatedMilestones: ['language-development', 'vocabulary-growth', 'sentence-formation', 'conversation-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-scripted-speech-only', 'toddler-delayed-echolalia', 'echolalia'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
