import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-stuttering-getting-worse',
  title: 'Toddler\'s Stuttering Is Getting Worse',
  category: 'communication',
  searchTerms: [
    'toddler stuttering getting worse',
    'toddler stutter increasing',
    'toddler stuttering more',
    'stuttering progression toddler',
    'worsening stutter child',
    'toddler stutter not improving',
    'stuttering severity increasing',
    'toddler stumbling words more',
    'stutter getting worse over time',
    'toddler stuttering worse than before',
  ],
  quickAnswer:
    'If your toddler\'s stuttering has been increasing in frequency or severity over several months, it is important to seek a fluency evaluation from a speech-language pathologist. Worsening stuttering, especially with physical tension, secondary behaviors, or emotional distress, is a sign that therapy would be beneficial. Early intervention for stuttering is most effective before age 5.',
  byAge: [
    {
      ageRange: '24-36 months',
      context:
        'Some fluctuation in stuttering severity is normal during this developmental period. Stuttering may seem worse during times of excitement, fatigue, or stress. However, a consistent worsening trend over several months warrants attention.',
    },
    {
      ageRange: '3-4 years',
      context:
        'If stuttering has been present for more than 6 months and is getting worse rather than better, a fluency evaluation is recommended. Signs of progression include more frequent repetitions, longer prolongations, emergence of blocks, and increased physical tension.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Stuttering that is worsening at this age is unlikely to resolve without intervention. The development of secondary behaviors like eye blinking, head jerking, or fist clenching indicates increasing struggle and warrants prompt therapy.',
    },
    {
      ageRange: '5-6 years',
      context:
        'Early stuttering intervention is most effective. If your child\'s stuttering has progressively worsened, therapy can significantly help. Approaches like the Lidcombe Program for young children have strong evidence for effectiveness.',
    },
    {
      ageRange: '6-8 years',
      context:
        'Stuttering that has worsened through early childhood and persists to school age needs ongoing therapy. Treatment at this age focuses on both fluency techniques and building confidence. Most children make significant improvements with consistent therapy.',
    },
  ],
  whenNormal: [
    'Stuttering varies day to day but overall severity has not increased over months',
    'Stuttering seems worse when your toddler is tired, excited, or stressed, but returns to baseline',
    'Your toddler has periods of fluent speech alternating with disfluent periods',
  ],
  whenToMention: [
    'Stuttering has been consistently getting worse over the past 2 to 3 months',
    'Your toddler is using more repetitions per word or the repetitions are faster and more tense',
    'Sound prolongations or blocks are appearing when they were not present before',
    'Your toddler is beginning to avoid certain words or speaking situations',
  ],
  whenToActNow: [
    'Your toddler has developed secondary behaviors like eye blinking, facial grimacing, or body tension when stuttering',
    'Your toddler is distressed about speaking, saying things like "I can\'t talk" or refusing to communicate',
  ],
  relatedMilestones: ['fluency', 'self-confidence', 'language-development', 'social-engagement'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-stuttering-onset-sudden', 'toddler-blocks-in-speech'],
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
