import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-mixed-sensory-profile', title: 'Toddler Both Seeks and Avoids Sensory Input', category: 'behavior',
  searchTerms: ['toddler mixed sensory profile', 'toddler sensory seeking and avoiding', 'toddler both oversensitive undersensitive', 'toddler contradictory sensory needs', 'toddler seeks some avoids other sensory', 'mixed sensory processing child', 'toddler sensory profile complex', 'toddler sensory seeking avoiding same time', 'toddler sensory contradictions', 'complex sensory needs toddler'],
  quickAnswer: 'Many children with sensory processing differences show a mixed profile, seeking intense input in some senses while avoiding input in others. A child might crave spinning and crashing (vestibular and proprioceptive seeking) while being extremely sensitive to sounds and textures (auditory and tactile avoiding). This mixed profile is common and an occupational therapist can create a comprehensive sensory plan.',
  byAge: [
    { ageRange: '12-24 months', context: 'Sensory preferences are developing. Some contradiction in sensory behaviors is normal. Toddlers may love being swung but hate having their hair washed. These early differences are worth monitoring.' },
    { ageRange: '24-36 months', context: 'Mixed sensory profiles become more apparent. A toddler who crashes into everything but cannot tolerate a shirt tag may have different processing in different sensory systems. An OT evaluation can clarify.' },
    { ageRange: '3-4 years', context: 'Mixed sensory needs can be confusing for parents and teachers. An OT can create a sensory profile that identifies which senses need more input and which need protection.' },
    { ageRange: '4-5 years', context: 'With a comprehensive sensory plan, children with mixed profiles can learn strategies for both their seeking and avoiding needs. This supports better regulation throughout the day.' },
    { ageRange: '5-6 years', context: 'A well-developed sensory diet addresses both sides of the sensory profile. Children learn to self-advocate for their sensory needs as they mature.' },
  ],
  whenNormal: ['Your toddler has some strong sensory preferences but they do not significantly affect daily life', 'Your toddler loves some physical activities but avoids others', 'Mixed preferences are mild and manageable with minor accommodations'],
  whenToMention: ['Your toddler\'s mixed sensory needs make daily activities challenging and unpredictable', 'Sensory seeking in one area creates safety risks while avoidance in another limits participation', 'You are confused by contradictory sensory behaviors and need guidance'],
  whenToActNow: ['Your toddler\'s sensory needs are severely affecting eating, sleeping, playing, and social participation', 'Mixed sensory processing combined with other developmental concerns'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'adaptive-behavior', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-seeking-behavior', 'toddler-sensory-avoiding-behavior', 'toddler-sensory-processing-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
  ],
};
