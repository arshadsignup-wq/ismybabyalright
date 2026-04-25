import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'monotone-speech',
  title: 'My Child Speaks in a Monotone Voice',
  category: 'communication',
  searchTerms: [
    'child speaks in monotone',
    'toddler flat speech',
    'child no expression in voice',
    'child monotone voice',
    'child doesn\'t vary tone',
    'toddler robotic speech',
    'child flat intonation',
    'monotone speech autism',
    'child speech no emotion',
    'toddler speaks without inflection',
  ],
  quickAnswer:
    'Prosody  -  the natural rise and fall of speech  -  develops gradually in young children. Some toddlers go through phases of flat-sounding speech as they focus on getting words right. However, persistently monotone speech past age 3, especially when combined with other social communication differences, can sometimes be associated with autism spectrum disorder or other developmental conditions and is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Early words often sound flat because toddlers are concentrating on producing the word itself. It takes cognitive effort just to say "ball," and adding expressive intonation is an extra layer. At this age, what matters more is whether your child\'s babble and jargon have varied intonation  -  rising tones, falling tones, emphasis. Babble that sounds conversational is a positive sign, even if actual words come out flat.',
    },
    {
      ageRange: '18-24 months',
      context:
        'As vocabulary grows, you should start hearing more variation in how your toddler uses their voice. They might say "NO!" emphatically, whisper "bye bye" gently, or use a rising tone to ask "more?" The emergence of these prosodic patterns shows that your child is learning to use voice quality to communicate meaning, not just words.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, most children use varied intonation naturally  -  they can sound excited, sad, questioning, or demanding through their tone of voice alone. If your child\'s speech consistently sounds flat, robotic, or lacking in emotional expression at this stage, especially if they also have difficulty reading others\' emotions from tone of voice, it\'s worth bringing up with your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistently monotone speech past age 3  -  where a child doesn\'t naturally vary pitch, volume, or rhythm to express emotions or ask questions  -  is considered atypical and warrants evaluation. This can be associated with autism spectrum disorder, hearing difficulties, or speech-motor planning issues. A speech-language pathologist can assess prosody specifically and provide targeted therapy if needed.',
    },
  ],
  whenNormal: [
    'Your toddler\'s early words sound flat, but their babble and jargon have varied, conversational intonation patterns.',
    'Your child sounds monotone when concentrating on new or difficult words but uses varied tone with familiar words and phrases.',
    'Your child is under 2 and still developing expressive prosody  -  natural intonation patterns take time to solidify.',
    'Your child uses varied intonation in some contexts (like singing or pretend play) even if everyday speech sounds flatter.',
  ],
  whenToMention: [
    'Your child is over 2.5 years and consistently speaks in a flat, monotone voice across all contexts  -  not just with new words.',
    'Your child doesn\'t seem to recognize or respond to emotional cues in others\' voices  -  they can\'t tell when you\'re excited, upset, or asking a question by tone alone.',
    'Your child\'s speech has an unusual rhythm or cadence  -  it sounds rehearsed, overly formal, or "robotic" compared to peers.',
  ],
  whenToActNow: [
    'Monotone speech combined with limited eye contact, difficulty with back-and-forth conversation, restricted interests, and repetitive behaviors  -  this pattern of features warrants comprehensive developmental evaluation.',
    'Your child previously had expressive, varied speech and it has become flat and monotone  -  any change in speech quality should be evaluated promptly.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-sentences',
    'social-emotional-joint-attention',
    'social-emotional-empathy',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Social Communication Disorder.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/social-communication-disorder/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Autism Spectrum Disorder: Communication Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Communication-Problems-in-Children-with-Autism.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Autism Spectrum Disorder: Communication Problems.',
      url: 'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children',
    },
  ],
};
