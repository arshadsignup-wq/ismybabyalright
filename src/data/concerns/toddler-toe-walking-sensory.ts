import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-toe-walking-sensory', title: 'Toddler Toe Walking from Sensory Sensitivity', category: 'behavior',
  searchTerms: ['toddler toe walking sensory', 'toddler walks on toes sensory', 'toe walking sensory processing', 'toddler tactile sensitivity feet', 'toddler doesn\'t like feet on ground', 'sensory toe walking child', 'toddler toe walking texture avoidance', 'toe walking carpet grass', 'toddler feet sensitive', 'sensory basis toe walking'],
  quickAnswer: 'Some toddlers walk on their toes because of sensory sensitivity in their feet, avoiding the feeling of certain surfaces. They may toe-walk on carpet, grass, or sand but walk flat-footed on smooth surfaces. If toe walking is persistent and seems related to surface avoidance, an occupational therapy evaluation can help with sensory desensitization strategies.',
  byAge: [
    { ageRange: '12-18 months', context: 'New walkers often toe-walk as they practice balance. This is normal in early walking and usually resolves within a few months of learning to walk.' },
    { ageRange: '18-24 months', context: 'Occasional toe walking is still common. If your toddler toe-walks specifically on certain surfaces, they may have tactile sensitivity in their feet. Observe whether the behavior is surface-specific.' },
    { ageRange: '24-36 months', context: 'Persistent toe walking should be evaluated. If it is surface-dependent, sensory processing is likely involved. If constant regardless of surface, orthopedic or neurological causes should be considered.' },
    { ageRange: '3-4 years', context: 'Toe walking from sensory sensitivity can be addressed through occupational therapy with tactile desensitization activities. The goal is to increase tolerance for different surfaces.' },
    { ageRange: '4-5 years', context: 'Persistent toe walking can affect ankle flexibility and muscle development. Continued OT and possibly physical therapy may be recommended.' },
  ],
  whenNormal: ['Your toddler recently started walking and toe walks occasionally', 'Your toddler toe walks when excited but walks flat-footed normally', 'Your toddler avoids one or two specific textures but can walk on most surfaces', 'Toe walking is decreasing over time'],
  whenToMention: ['Your toddler consistently toe walks on specific surfaces due to apparent texture sensitivity', 'Toe walking is persistent and your toddler rarely walks with a flat foot', 'Toe walking is combined with other sensory avoidance behaviors'],
  whenToActNow: ['Your toddler cannot place feet flat on the ground even when encouraged', 'Toe walking is combined with muscle tightness, balance problems, or motor delays'],
  relatedMilestones: ['sensory-processing', 'gross-motor', 'walking', 'adaptive-behavior'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-tactile-defensiveness', 'toddler-sensory-avoiding-behavior', 'toddler-sensory-processing-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toe Walking. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'NIH', citation: 'National Institutes of Health. Idiopathic Toe Walking.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559218/' },
  ],
};
