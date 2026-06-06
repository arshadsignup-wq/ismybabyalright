import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-sensory-processing-concerns', title: 'Signs of Sensory Processing Difficulties', category: 'behavior',
  searchTerms: ['toddler sensory processing disorder', 'SPD signs toddler', 'sensory processing concerns child', 'toddler sensory issues', 'sensory processing difficulties toddler', 'toddler sensory problems', 'sensory integration issues child', 'toddler sensory regulation problems', 'toddler oversensitive undersensitive', 'sensory processing evaluation toddler'],
  quickAnswer: 'Sensory processing differences affect how a child\'s brain interprets sensory information from their environment and body. Signs include over-sensitivity (avoiding sounds, textures, or lights), under-sensitivity (seeking intense sensory input), or a combination. If sensory differences significantly affect your child\'s daily life, eating, playing, or social participation, an occupational therapy evaluation can help.',
  byAge: [
    { ageRange: '0-12 months', context: 'Some babies show early sensory sensitivities like startle responses, feeding difficulties, or discomfort with certain textures. These may resolve or become clearer as the child develops.' },
    { ageRange: '12-24 months', context: 'Sensory preferences and sensitivities become more apparent. Toddlers may refuse certain foods, dislike having their hair washed, or seek intense physical play. Some variation is normal.' },
    { ageRange: '24-36 months', context: 'Sensory processing differences become more identifiable. If your child has significant difficulty with multiple sensory experiences that affect daily functioning, an occupational therapy evaluation is recommended.' },
    { ageRange: '3-4 years', context: 'Sensory processing difficulties can affect preschool participation, peer interaction, and self-care tasks. An OT can create a sensory diet with activities designed to help your child regulate their sensory system.' },
    { ageRange: '4-5 years', context: 'Before school entry, addressing sensory processing needs helps with classroom participation, attention, and behavior. Many children make significant progress with occupational therapy support.' },
  ],
  whenNormal: ['Your toddler has some sensory preferences but can function well in daily activities', 'Your toddler avoids some textures or sounds but is not significantly limited', 'Your toddler is active and seeks physical play as part of normal development', 'Your toddler has mild sensory sensitivities that are manageable'],
  whenToMention: ['Sensory differences significantly affect your child\'s eating, sleeping, playing, or social participation', 'Your child has both extreme avoidance of some sensory inputs and intense seeking of others', 'Sensory processing concerns are combined with other developmental differences'],
  whenToActNow: ['Your child\'s sensory difficulties are worsening and increasingly limiting their daily life', 'Severe sensory processing differences are causing distress, self-injury, or complete avoidance of necessary activities'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'motor-development', 'feeding-skills'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-seeking-behavior', 'toddler-sensory-avoiding-behavior', 'toddler-mixed-sensory-profile'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration Therapy. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing in Autism.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
  ],
};
