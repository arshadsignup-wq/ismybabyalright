import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-sensory-avoiding-behavior', title: 'Toddler Avoids Certain Sensory Experiences', category: 'behavior',
  searchTerms: ['toddler sensory avoiding', 'toddler avoids textures', 'toddler won\'t touch things', 'toddler sensory avoidance', 'toddler hates certain textures', 'toddler refuses messy play', 'toddler sensory sensitivity', 'toddler overly sensitive', 'toddler avoids sounds textures', 'sensory avoidance toddler'],
  quickAnswer: 'Sensory avoiding means a child is overly sensitive to certain sensory inputs and actively avoids them. This may include refusing to touch certain textures, covering ears at sounds others tolerate, avoiding bright lights, or refusing messy play. Some sensitivity is normal in toddlers, but when avoidance significantly limits participation in daily activities, an occupational therapy evaluation can help.',
  byAge: [
    { ageRange: '0-12 months', context: 'Some babies show early sensitivity to sounds, light, or touch. They may startle easily, be fussy with certain clothing, or resist certain positions. Mild sensitivities are common.' },
    { ageRange: '12-24 months', context: 'Sensory preferences become more apparent. A toddler who avoids grass, sand, or finger paint may be showing sensory sensitivity. These behaviors are common and may resolve with gentle exposure.' },
    { ageRange: '24-36 months', context: 'If sensory avoidance is limiting your child\'s ability to eat varied foods, play with peers, or participate in normal activities, an occupational therapy evaluation is recommended.' },
    { ageRange: '3-4 years', context: 'Preschool activities require engaging with various sensory experiences. A child who avoids art projects, playground surfaces, music class, or new foods due to sensory sensitivity may benefit from OT.' },
    { ageRange: '4-5 years', context: 'Sensory avoidance that persists affects school readiness and social participation. An occupational therapist can create a plan to gradually increase tolerance while respecting the child\'s sensory needs.' },
  ],
  whenNormal: ['Your toddler dislikes some textures but can tolerate them when needed', 'Your toddler has food texture preferences but eats a reasonable variety', 'Your toddler is cautious about new sensory experiences but warms up with time', 'Your toddler has mild preferences that do not significantly limit activities'],
  whenToMention: ['Your toddler\'s sensory avoidance limits their ability to eat, play, or participate in daily activities', 'Your toddler becomes extremely distressed with certain textures, sounds, or sensory inputs', 'Sensory avoidance is affecting your child\'s nutrition, social life, or development'],
  whenToActNow: ['Your toddler\'s sensory avoidance is worsening and expanding to more situations', 'Severe sensory avoidance is combined with other developmental or behavioral concerns'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'feeding-skills', 'social-engagement'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-processing-concerns', 'toddler-tactile-defensiveness', 'toddler-overwhelmed-by-noise'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing Issues.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
  ],
};
