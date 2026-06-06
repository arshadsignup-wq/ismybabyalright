import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-immediate-echolalia',
  title: 'Toddler Repeats Everything You Just Said',
  category: 'communication',
  searchTerms: [
    'toddler immediate echolalia', 'toddler repeats what I say', 'toddler echoing words back',
    'toddler parroting speech', 'toddler copying words immediately', 'toddler repeating questions back',
    'toddler echoes everything', 'immediate echolalia toddler', 'toddler mimicking speech',
    'toddler repeating instead of answering',
  ],
  quickAnswer:
    'Immediate echolalia, where a child repeats what was just said to them, is common in language development between ages 1 and 2.5. It can serve as a language learning strategy, helping children practice sounds and sentence structures. However, persistent echolalia that replaces spontaneous communication beyond age 3 may indicate a language processing difficulty and should be evaluated.',
  byAge: [
    { ageRange: '12-18 months', context: 'Imitating words and phrases is a primary way babies learn language. Repeating what you say is completely normal and is how first words are acquired. This is a positive sign of language development.' },
    { ageRange: '18-24 months', context: 'Some echolalia is still normal as toddlers learn new words and phrases through repetition. A child may echo a question before answering it or repeat a phrase while processing what it means. This should decrease as vocabulary grows.' },
    { ageRange: '24-36 months', context: 'Echolalia should be decreasing as children develop the ability to generate their own responses. If your child still echoes most of what you say and rarely produces novel speech, a speech-language evaluation is recommended.' },
    { ageRange: '3-4 years', context: 'Persistent immediate echolalia at this age may indicate an auditory processing difficulty, language disorder, or be associated with autism spectrum disorder. A comprehensive evaluation can identify the underlying cause and guide treatment.' },
    { ageRange: '4-5 years', context: 'Speech therapy can help children move from echolalic responses to self-generated language. Techniques focus on helping the child process and formulate their own responses rather than automatically repeating input.' },
  ],
  whenNormal: [
    'Your toddler is under 2.5 and repeats words and phrases as part of learning language',
    'Your toddler echoes a question briefly before providing their own answer',
    'Your toddler imitates new words you introduce, which is how they learn vocabulary',
    'Echolalia is decreasing over time as your toddler produces more original speech',
  ],
  whenToMention: [
    'Your toddler is over 2.5 and still echoes most of what you say instead of responding',
    'Your toddler cannot answer simple questions without repeating the question back',
    'Echolalia is the primary form of communication rather than just occasional imitation',
  ],
  whenToActNow: [
    'Your toddler echoes everything and shows no spontaneous language alongside other social communication concerns',
    'Echolalia has increased and your toddler has lost the ability to generate original language',
  ],
  relatedMilestones: ['language-development', 'language-comprehension', 'conversation-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['echolalia', 'toddler-delayed-echolalia', 'toddler-repeating-questions-back'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Autism Spectrum Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/autism/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Autism Spectrum Disorder: Communication Problems.', url: 'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children' },
  ],
};
