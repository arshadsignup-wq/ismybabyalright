import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-delayed-echolalia',
  title: 'Toddler Repeats TV Shows or Movie Lines',
  category: 'communication',
  searchTerms: [
    'toddler delayed echolalia', 'toddler repeating TV lines', 'toddler quoting movies',
    'toddler reciting shows', 'toddler scripting from TV', 'delayed echolalia child',
    'toddler repeating phrases from past', 'toddler echoing old conversations',
    'toddler uses TV phrases to communicate', 'toddler quoting books repeatedly',
  ],
  quickAnswer:
    'Delayed echolalia, where a child repeats phrases from TV, movies, books, or past conversations, can serve a communicative purpose. Some children use these memorized phrases to express their feelings or needs. This pattern is common in gestalt language learners and children on the autism spectrum. If your child relies primarily on delayed echolalia to communicate, a speech-language pathologist can help them develop more flexible language.',
  byAge: [
    { ageRange: '18-24 months', context: 'Some toddlers begin quoting familiar books or songs. At this age, this often reflects good memory and enjoyment of language rather than a concern. It becomes noteworthy only if it is the primary means of communication.' },
    { ageRange: '24-36 months', context: 'Delayed echolalia may become more prominent as children are exposed to more media. A child who uses a movie quote in a relevant context, like saying "to infinity and beyond" when excited, is using echolalia functionally. A child who recites scripts with no apparent connection to the situation may need evaluation.' },
    { ageRange: '3-4 years', context: 'If delayed echolalia is the dominant form of communication and your child rarely generates original language, a speech-language evaluation is recommended. Therapists can help decode the communicative intent behind scripts and guide your child toward flexible language.' },
    { ageRange: '4-5 years', context: 'With appropriate therapy, children can learn to break down their memorized scripts into smaller units and recombine them creatively. This is a gradual process that respects the child\'s natural language learning style.' },
    { ageRange: '5-6 years', context: 'Ongoing therapy and support help children transition from scripted to more spontaneous language. Many children maintain some scripting behaviors but develop adequate flexible language alongside them.' },
  ],
  whenNormal: [
    'Your toddler quotes favorite books or songs during play alongside original language',
    'Your toddler uses a memorized phrase appropriately to express a feeling or need',
    'Your toddler enjoys reciting familiar stories but also has their own words and sentences',
    'Quoting is a fun activity rather than the only way your child communicates',
  ],
  whenToMention: [
    'Your toddler communicates primarily through quotes from TV, movies, or past conversations',
    'Your toddler recites scripts in situations where they seem unconnected to what is happening',
    'Your toddler has difficulty communicating beyond their memorized phrases',
  ],
  whenToActNow: [
    'Your toddler only communicates through scripts and shows signs of social communication difficulty',
    'Your toddler\'s scripting has increased while spontaneous language has decreased',
  ],
  relatedMilestones: ['language-development', 'conversation-skills', 'sentence-formation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['echolalia', 'toddler-immediate-echolalia', 'toddler-scripted-speech-only'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Autism Spectrum Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/autism/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Autism Spectrum Disorder: Communication Problems.', url: 'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Information for Parents. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
  ],
};
