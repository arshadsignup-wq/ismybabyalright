import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'regression-in-speech',
  title: 'Child Losing Speech or Language Regression',
  category: 'communication',
  searchTerms: [
    'child losing speech',
    'toddler stopped talking',
    'language regression',
    'speech regression toddler',
    'toddler lost words',
    'baby stopped saying words',
    'child regressing in speech',
    'toddler used to talk now doesn\'t',
    'language regression autism',
    'child losing language skills',
    'toddler losing vocabulary',
  ],
  quickAnswer:
    'Losing words or language skills that your child previously had  -  known as language regression  -  is always worth taking seriously. While some temporary "quiet periods" can occur when a toddler is focused on a new skill like walking, true loss of words (especially multiple words over weeks) should be evaluated promptly. About 25-30% of children later diagnosed with autism experience some form of language regression.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Some parents notice that a baby who was saying "mama" or "dada" seems to stop for a while. A brief pause in word use around the time a baby starts walking is not uncommon  -  their brain is busy mastering a huge motor skill. However, loss of multiple words, especially combined with decreasing social engagement (less eye contact, less interest in people), is different and warrants evaluation.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the age window where language regression is most commonly noticed by parents. If your toddler had 10-20 words and now uses only a few, or if they\'ve stopped attempting to communicate altogether, don\'t wait  -  request an evaluation. The earlier regression is identified, the earlier supportive therapies can begin. A comprehensive evaluation will typically include hearing testing, developmental assessment, and often autism screening.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Language regression at this age  -  losing phrases or sentences previously used, or shifting from spontaneous speech to only echolalia  -  should always be evaluated. At this age, regression can sometimes be associated with a rare condition called Landau-Kleffner syndrome (acquired epileptic aphasia), which is treatable. An EEG may be recommended alongside developmental evaluation.',
    },
    {
      ageRange: '3+ years',
      context:
        'Language regression in a child over 3 who was previously speaking in sentences is uncommon and should be evaluated urgently. Causes can include neurological conditions, hearing loss (which can develop at any age), severe emotional stress, or selective mutism. Your pediatrician will likely refer for a comprehensive workup.',
    },
  ],
  whenNormal: [
    'Your baby briefly stopped saying a word or two during a period of intense motor development (like learning to walk) but the words came back within a week or two.',
    'Your toddler uses different words on different days  -  rotating through their vocabulary is normal and doesn\'t count as regression.',
    'Your toddler stops using a word because they\'ve replaced it with a better version (stopped saying "ba" for ball because they now say "ball").',
  ],
  whenToMention: [
    'Your child has clearly lost words they were using consistently  -  they used to say 5+ words and now use fewer.',
    'Your child\'s communication attempts have decreased  -  they used to point and babble and now do less of both.',
    'Your child seems less interested in social interaction than they used to be  -  less eye contact, less sharing of enjoyment.',
    'Other family members or caregivers have independently noticed that your child seems to be talking less.',
  ],
  whenToActNow: [
    'Your child has lost multiple words or phrases over a period of weeks and shows decreased social engagement  -  request a comprehensive developmental evaluation promptly.',
    'Your child\'s language regression is accompanied by new unusual behaviors  -  repetitive movements, extreme reactions to sensory input, or loss of other skills like self-feeding.',
    'Your child experiences sudden language loss after a period of illness, seizure, or head injury  -  seek medical evaluation immediately.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. What Are the Early Signs of Autism? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Early-Signs-of-Autism-Spectrum-Disorders.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Signs and Symptoms of Autism Spectrum Disorder.',
      url: 'https://www.cdc.gov/ncbddd/autism/signs.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
