import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-stuttering-onset-sudden',
  title: 'Toddler Suddenly Started Stuttering',
  category: 'communication',
  searchTerms: [
    'toddler suddenly started stuttering',
    'toddler stutter came on suddenly',
    'sudden stuttering onset toddler',
    'toddler started stammering overnight',
    'toddler stuttering out of nowhere',
    'sudden onset stutter child',
    'why did my toddler start stuttering',
    'toddler stuttering came on suddenly',
    'new stuttering toddler',
    'toddler stutter appeared suddenly',
  ],
  quickAnswer:
    'It is common for stuttering to appear suddenly in toddlers, often between ages 2 and 4, typically during a period of rapid language development. A child who was speaking fluently may begin stuttering seemingly overnight. In many cases, this developmental stuttering resolves on its own within 6 months. However, if the stuttering is severe, causes distress, or persists, a fluency evaluation is recommended.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Sudden disfluency can emerge as toddlers begin combining words and forming sentences. Their language is developing faster than their motor speech system can keep up. Mild whole-word repetitions that appear suddenly are often part of normal development.',
    },
    {
      ageRange: '24-36 months',
      context:
        'This is the most common age for stuttering onset. It often coincides with a language growth spurt. The stuttering may appear very suddenly, seeming to come from nowhere. In most cases, this is developmental stuttering that resolves within 3 to 6 months.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Sudden onset stuttering at this age is still common. Watch for whether the stuttering is "easy" (relaxed repetitions) versus "hard" (tense, forced, with physical struggle). Easy disfluencies are more likely to resolve on their own.',
    },
    {
      ageRange: '4-5 years',
      context:
        'If stuttering appeared suddenly and has persisted for more than 6 months, or if it includes tension and struggle, a speech-language pathologist should evaluate your child. Early treatment for stuttering is highly effective.',
    },
    {
      ageRange: '5-6 years',
      context:
        'Stuttering that began suddenly and has not resolved after 12 months is less likely to resolve without therapy. The Lidcombe Program and other evidence-based approaches can significantly reduce stuttering in young children.',
    },
  ],
  whenNormal: [
    'Your toddler started stuttering during a period of rapid language growth',
    'The stuttering is mild, with relaxed whole-word repetitions and no physical tension',
    'Your toddler seems unaware of and unbothered by the disfluencies',
    'The stuttering is intermittent, with fluent days and disfluent days',
  ],
  whenToMention: [
    'The stuttering has persisted for more than 6 months',
    'The stuttering involves sound or syllable repetitions with visible tension',
    'Your toddler is showing frustration, avoiding speaking, or commenting on their difficulty',
    'There is a family history of persistent stuttering',
  ],
  whenToActNow: [
    'Your toddler developed severe stuttering suddenly along with other neurological changes',
    'Your toddler has developed blocks, secondary behaviors, and significant distress about speaking',
  ],
  relatedMilestones: ['fluency', 'sentence-formation', 'language-development', 'self-confidence'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-stuttering-vs-normal-disfluency', 'toddler-stuttering-getting-worse'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Stuttering.',
      url: 'https://www.asha.org/public/speech/disorders/stuttering/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuttering in Toddlers and Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Stuttering-in-Toddlers-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Stuttering.',
      url: 'https://www.nidcd.nih.gov/health/stuttering',
    },
  ],
};
