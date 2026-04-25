import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'stuttering',
  title: 'Toddler Stuttering or Stammering',
  category: 'communication',
  searchTerms: [
    'toddler stuttering',
    'toddler stammering',
    'child repeating words',
    'toddler stuck on words',
    'toddler speech not fluent',
    'is stuttering normal in toddlers',
    '2 year old stuttering',
    '3 year old stuttering',
    'developmental stuttering',
    'when to worry about stuttering',
    'toddler repeating first syllable',
  ],
  quickAnswer:
    'Developmental stuttering  -  repeating sounds, syllables, or words  -  is very common in toddlers between ages 2 and 5, occurring in about 5-8% of children. In most cases it\'s a temporary phase that resolves on its own as the brain catches up with rapid language development. About 75-80% of children who stutter will stop naturally.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Some toddlers begin to show mild disfluencies as their vocabulary explodes and they try to put new words together. Repeating whole words ("I-I-I want that") is especially common and usually reflects the brain working hard to coordinate language. This is called normal disfluency and is part of typical development.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the peak age for developmental stuttering to emerge. Your toddler\'s thoughts are racing ahead of their ability to get words out, which can lead to sound repetitions ("b-b-b-ball"), prolongations ("ssssnake"), or blocks where they seem stuck. Most children move through this phase within 6-12 months.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Stuttering that began around age 2-3 often resolves during this period. If stuttering has persisted for more than 6-12 months, is getting worse rather than better, or your child is showing signs of frustration or avoidance, a speech-language pathologist can help determine whether therapy would be beneficial.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Children who are still stuttering at age 4-5, especially if it started before age 3, should be evaluated by a speech-language pathologist. Early intervention for persistent stuttering is very effective. Boys are about 3-4 times more likely than girls to continue stuttering beyond the developmental phase.',
    },
  ],
  whenNormal: [
    'Your toddler repeats whole words or phrases ("I want-I want-I want juice")  -  this is the most common and least concerning type of disfluency.',
    'The stuttering comes and goes, sometimes disappearing for weeks before returning  -  this waxing and waning pattern is typical of developmental stuttering.',
    'Your toddler stutters more when excited, tired, or trying to tell a complex story  -  situational stuttering is very common.',
    'Your toddler doesn\'t seem frustrated or aware of the stuttering and continues to communicate eagerly.',
    'The stuttering has been present for fewer than 6 months.',
  ],
  whenToMention: [
    'The stuttering has lasted longer than 6 months without improvement.',
    'Your child is showing physical tension when stuttering  -  facial grimacing, eye blinking, head movements, or visible struggle to get words out.',
    'Your child is becoming frustrated, avoiding speaking, or saying "I can\'t talk" or "the words won\'t come out."',
    'There is a family history of persistent stuttering (stuttering that continued into adolescence or adulthood).',
  ],
  whenToActNow: [
    'Your child suddenly begins stuttering severely after previously speaking fluently, especially after a head injury or illness.',
    'Your child has completely stopped trying to speak due to stuttering-related frustration or anxiety.',
  ],
  relatedMilestones: [
    'language-two-word-phrases',
    'language-sentences',
    'social-emotional-self-expression',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuttering in Toddlers and Preschoolers: What\'s Typical, What\'s Not. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Stuttering-in-Toddlers-Preschoolers.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Childhood Fluency Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/childhood-fluency-disorders/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Stuttering.',
      url: 'https://www.nidcd.nih.gov/health/stuttering',
    },
  ],
};
