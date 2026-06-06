import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-secondary-behaviors-stuttering',
  title: 'Toddler Blinks Eyes or Tenses Up When Stuttering',
  category: 'communication',
  searchTerms: [
    'toddler eye blinking stuttering',
    'toddler secondary behaviors stutter',
    'toddler tension when stuttering',
    'toddler head jerking when talking',
    'toddler facial grimace stuttering',
    'toddler foot stomping when stuck',
    'secondary stuttering behaviors',
    'toddler physical struggle speaking',
    'toddler body movements stuttering',
    'toddler stuttering with tension',
  ],
  quickAnswer:
    'Secondary behaviors during stuttering, such as eye blinking, head jerking, facial grimacing, or foot stomping, develop when a child physically struggles to push through a stutter. These behaviors are a sign that stuttering is becoming more advanced and established. A fluency evaluation with a speech-language pathologist should be sought promptly, as early treatment can prevent these patterns from becoming habitual.',
  byAge: [
    {
      ageRange: '24-36 months',
      context:
        'Secondary behaviors are uncommon at this early stage of stuttering but can develop even in very young children. If you notice your toddler physically struggling or showing unusual body movements when trying to speak, seek an evaluation.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Secondary behaviors may emerge as stuttering becomes more established. Common signs include eye blinking, eyebrow raising, lip pressing, jaw tensing, and head movements. These develop as the child tries to force through blocks or repetitions.',
    },
    {
      ageRange: '4-5 years',
      context:
        'If secondary behaviors are present, therapy should begin promptly. The longer these behaviors persist, the more habitual they become. Treatment addresses both the underlying stuttering and the secondary behaviors.',
    },
    {
      ageRange: '5-6 years',
      context:
        'Children at this age may also develop avoidance behaviors, such as substituting easier words, avoiding certain speaking situations, or refusing to answer questions. These emotional and behavioral responses are additional signs that therapy is needed.',
    },
    {
      ageRange: '6-8 years',
      context:
        'Stuttering with established secondary behaviors requires ongoing therapy. Treatment combines fluency strategies, desensitization to stuttering moments, and building communication confidence. Most children can significantly reduce both primary stuttering and secondary behaviors.',
    },
  ],
  whenNormal: [
    'Your toddler repeats words without any physical tension or associated body movements',
    'Your toddler pauses or hesitates while speaking but appears relaxed',
    'Your toddler occasionally repeats sounds but seems unaware and unbothered',
  ],
  whenToMention: [
    'Your toddler blinks eyes, tenses facial muscles, or jerks their head when stuttering',
    'Your toddler uses body movements like foot stomping or hand movements when stuck on a word',
    'You can see visible effort and struggle in your toddler\'s face or body when they stutter',
  ],
  whenToActNow: [
    'Your toddler has multiple secondary behaviors and is becoming distressed about speaking',
    'Your toddler is avoiding speaking situations or refusing to talk due to their stuttering',
  ],
  relatedMilestones: ['fluency', 'self-confidence', 'social-engagement', 'self-regulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-blocks-in-speech', 'toddler-stuttering-getting-worse'],
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
