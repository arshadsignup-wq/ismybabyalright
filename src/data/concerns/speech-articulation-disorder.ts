import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'speech-articulation-disorder',
  title: 'My Child\'s Speech Is Hard to Understand (Articulation)',
  category: 'communication',
  searchTerms: [
    'child speech hard to understand',
    'toddler speech unintelligible',
    'child articulation problems',
    'toddler unclear speech',
    'can\'t understand my toddler',
    'child mumbles words',
    'toddler speech not clear',
    'child articulation disorder',
    'toddler garbled speech',
    'speech intelligibility toddler',
  ],
  quickAnswer:
    'Speech clarity improves gradually: strangers typically understand about 50% of a 2-year-old\'s speech, 75% at age 3, and nearly 100% by age 4. If you can understand your child but others can\'t, that\'s often normal  -  you\'re an expert in your child\'s speech patterns. But if even you struggle to understand your child by age 2-2.5, or if strangers can\'t understand most of what your 3-year-old says, a speech evaluation is a good idea.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'First words are often barely recognizable as words to anyone other than parents. Your toddler might say "bah" for ball, "nana" for banana, or "guh" for cup. This is completely normal  -  early words are approximations, and they\'ll get clearer with practice. What matters is that your child is consistently using these sound patterns to mean specific things.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Speech is still quite unclear to unfamiliar listeners, and that\'s expected. You (as the parent) should be able to understand most of what your toddler says, even if others can\'t. Common patterns include dropping final consonants ("ca" for cat), simplifying clusters ("poon" for spoon), and substituting easier sounds for harder ones. If you find that even you can\'t understand your child most of the time, it\'s worth a discussion with your pediatrician.',
    },
    {
      ageRange: '2-3 years',
      context:
        'The general guideline is that strangers should understand about 50% of a 2-year-old\'s speech and about 75% of a 3-year-old\'s speech. If your child falls significantly below these benchmarks, articulation therapy can help. Speech-language pathologists use intelligibility  -  the percentage of speech understood by unfamiliar listeners  -  as a key measure. Early articulation therapy is very effective, with most children making significant gains.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 4, strangers should understand nearly everything your child says, even if some individual sounds aren\'t perfect yet. If your child is over 3 and frequently not understood  -  if they have to repeat themselves often, if they get frustrated trying to communicate, or if they\'re starting to avoid talking  -  an articulation evaluation is strongly recommended. Childhood articulation disorders respond very well to therapy, and earlier intervention typically means faster progress.',
    },
  ],
  whenNormal: [
    'You understand your toddler well but grandparents or strangers have trouble  -  parents are always the best interpreters of their child\'s early speech.',
    'Your child\'s speech is unclear but improving steadily over time  -  clarity naturally improves as the mouth muscles and motor planning mature.',
    'Your child is under 3 and makes common speech sound substitutions  -  "w" for "r," "d" for "th," "t" for "k"  -  these are age-appropriate simplifications.',
    'Your child speaks clearly when calm but becomes less intelligible when excited, tired, or talking fast  -  this is true for many young children.',
  ],
  whenToMention: [
    'Even you (as the parent) struggle to understand your child by age 2, or strangers can\'t understand most of what your 3-year-old says.',
    'Your child is getting frustrated or shutting down because people can\'t understand them  -  emotional impact of unclear speech is a reason to seek help.',
    'Your child\'s speech clarity isn\'t improving over time, or seems stuck at the same level for several months.',
  ],
  whenToActNow: [
    'Your child is over 3 and almost completely unintelligible to unfamiliar listeners  -  consistent articulation difficulties at this level benefit significantly from therapy.',
    'Your child\'s speech was clear and has become harder to understand  -  any regression in speech clarity should be evaluated, as it could indicate a neurological or hearing issue.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-sentences',
    'motor-oral-development',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonological Processes.',
      url: 'https://www.asha.org/public/speech/disorders/speech-sound-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Be Concerned About a Child\'s Speech. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.',
      url: 'https://www.nidcd.nih.gov/health/specific-language-impairment',
    },
  ],
};
