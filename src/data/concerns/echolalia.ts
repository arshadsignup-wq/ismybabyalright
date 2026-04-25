import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'echolalia',
  title: 'Toddler Repeating Words and Phrases (Echolalia)',
  category: 'communication',
  searchTerms: [
    'toddler repeating words',
    'toddler echolalia',
    'child repeats everything I say',
    'toddler parroting words',
    'toddler echoing speech',
    'toddler repeats phrases',
    'is echolalia normal',
    'echolalia toddler autism',
    'toddler repeating back questions',
    'child repeats instead of answers',
    'scripting in toddlers',
  ],
  quickAnswer:
    'Repeating words and phrases (echolalia) is a completely normal part of language development in toddlers  -  it\'s one of the main ways children learn new words and practice speaking. Most toddlers go through a phase of repeating between ages 1 and 3. It typically becomes a concern only if it\'s the primary way a child communicates past age 3, or if it replaces rather than supplements spontaneous language.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Repeating sounds and words is how babies learn to talk. When your toddler echoes "ball" after you say it, they\'re practicing and learning. This immediate echolalia is a healthy sign of language acquisition. Your baby is absorbing words and trying them out, even before they fully understand their meaning.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Echolalia is very common at this stage. Your toddler might repeat the last word of your sentences, echo questions back instead of answering, or repeat phrases from books and shows. This is how they build vocabulary. What matters is whether they\'re also starting to use some words spontaneously and meaningfully alongside the echoing.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Some echolalia is still normal at this age, but you should see increasing amounts of original, spontaneous speech. Your child should be creating their own phrases and sentences, not just repeating things they\'ve heard. If echolalia is their dominant form of communication  -  they rarely generate original language  -  a speech evaluation can help.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3-4, most children have moved past echolalia as their primary communication tool. If your child still relies heavily on repeating memorized phrases, scripts from shows, or echoing questions instead of answering them, it\'s worth having a speech-language evaluation. Persistent echolalia can sometimes be associated with autism spectrum disorder, though it can also occur in other contexts.',
    },
  ],
  whenNormal: [
    'Your toddler repeats new words after you say them  -  this is how they learn vocabulary and is exactly what you want to see.',
    'Your toddler sometimes echoes the last word of a question before answering it ("Want milk? Milk... yes!")  -  they\'re processing the question.',
    'Your toddler repeats phrases from favorite books or shows but also uses original language spontaneously.',
    'The echolalia is decreasing over time as your child\'s spontaneous language grows.',
    'Your toddler is between 18 months and 2.5 years  -  peak echolalia age  -  and is also generating some of their own phrases.',
  ],
  whenToMention: [
    'Your child is over 2.5 years old and echolalia is still their primary way of communicating, with very little spontaneous language.',
    'Your child echoes questions back instead of answering them most of the time ("Do you want water?" "Do you want water?").',
    'Your child uses memorized scripts from shows or books in situations where they don\'t quite fit, suggesting difficulty with flexible language use.',
    'Your child\'s echolalia is increasing rather than decreasing over time.',
  ],
  whenToActNow: [
    'Your child relies entirely on echoed or scripted language with no spontaneous words, combined with limited eye contact, no pointing, and limited social engagement.',
    'Your child previously used spontaneous language and has shifted to only echoing or scripted speech  -  any regression in language quality warrants evaluation.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-sentences',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Raise Concerns About a Child\'s Speech and Language. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Autism Spectrum Disorder: Communication.',
      url: 'https://www.asha.org/public/speech/disorders/autism/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
