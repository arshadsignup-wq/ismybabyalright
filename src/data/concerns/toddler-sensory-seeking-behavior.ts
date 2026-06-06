import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-sensory-seeking-behavior', title: 'Toddler Shows Sensory Seeking Patterns', category: 'behavior',
  searchTerms: ['toddler sensory seeking', 'toddler craves sensory input', 'toddler always touching everything', 'toddler sensory seeker', 'toddler needs lots of stimulation', 'toddler constant movement', 'toddler sensory input craving', 'toddler can\'t sit still', 'toddler mouthing everything', 'sensory seeking behavior toddler'],
  quickAnswer: 'Sensory seeking means a child actively craves extra sensory input through activities like spinning, crashing, mouthing objects, touching everything, or making loud sounds. Some sensory seeking is normal in active toddlers. It becomes a concern when it is so intense that it interferes with daily activities, safety, or learning. An occupational therapist can evaluate sensory processing and recommend strategies.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies explore their world through all their senses. Mouthing objects, touching different textures, and being fascinated by movement are all normal sensory exploration.' },
    { ageRange: '12-24 months', context: 'Toddlers are active sensory learners. They crash into things, spin, climb, mouth objects, and seek out interesting textures. Some sensory seeking is part of normal development.' },
    { ageRange: '24-36 months', context: 'Intense sensory seeking that goes beyond typical exploration may become more apparent. If your child constantly crashes into furniture, mouths non-food items excessively, or cannot sit still for even brief activities, an OT evaluation may help.' },
    { ageRange: '3-4 years', context: 'Most children develop better body awareness and sensory regulation. Persistent intense sensory seeking that disrupts daily activities and safety should be evaluated by an occupational therapist.' },
    { ageRange: '4-5 years', context: 'Sensory seeking that continues to be intense can affect preschool participation and safety. Occupational therapy can provide sensory diets and strategies to meet sensory needs appropriately.' },
  ],
  whenNormal: ['Your toddler is active, curious, and explores through all senses', 'Your toddler enjoys physical play like jumping, climbing, and spinning', 'Your toddler mouths objects occasionally but can stop when redirected', 'Your toddler seeks sensory input but can also calm down and focus'],
  whenToMention: ['Your toddler\'s sensory seeking is so intense that it creates safety concerns', 'Your toddler cannot sit still for even brief activities like meals or story time', 'Your toddler mouths non-food objects constantly past age 2'],
  whenToActNow: ['Your toddler\'s sensory seeking behaviors are escalating and causing injuries', 'Intense sensory seeking is combined with other developmental or behavioral concerns'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'attention', 'motor-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-processing-concerns', 'toddler-proprioceptive-seeking', 'toddler-vestibular-seeking'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Understanding Sensory Processing.', url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior-why-they-do-it-and-how-to-respond/' },
  ],
};
