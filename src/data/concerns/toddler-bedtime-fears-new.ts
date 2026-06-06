import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-bedtime-fears-new', title: 'Toddler Developing New Fears at Bedtime', category: 'behavior',
  searchTerms: ['toddler new fears bedtime','toddler suddenly scared bedtime','toddler bedtime anxiety new','new fears at night toddler','toddler scared of something at bedtime','toddler developing fears sleep','toddler suddenly afraid at night','new bedtime fears child','toddler fears emerging bedtime','why is toddler suddenly scared at bedtime'],
  quickAnswer: 'New fears at bedtime are a normal part of cognitive development, typically emerging between ages 2-4 when imagination flourishes. Your toddler\'s brain is now advanced enough to imagine scenarios they cannot control, and darkness amplifies this. Validate their feelings, provide comfort strategies, and avoid dismissing or shaming the fear.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'Early fears are usually vague - your toddler may not be able to articulate what scares them. They may simply cling, cry, or resist being alone. Separation anxiety rather than specific fears is often the root cause. Extra reassurance and a consistent routine help.' },
    { ageRange: '2-3 years', context: 'Imagination-driven fears emerge: shadows, sounds, darkness, animals, or general "scary things." Your child cannot yet fully distinguish real from imaginary, especially when tired. Validate feelings, provide a nightlight, and develop a special comfort ritual.' },
    { ageRange: '3-4 years', context: 'Fears may become more specific - monsters, burglars, fire, or things they have seen on screens. Media exposure, even seemingly mild shows, can trigger fears. Limit scary content, talk through fears during the day, and empower your child with coping tools.' },
    { ageRange: '4-5 years', context: 'As understanding of real vs. pretend improves, fears often shift to more realistic concerns. Patience and gradual exposure help. Most fears resolve naturally as cognitive development advances.' },
  ],
  whenNormal: ['New fears emerge between ages 2-4','Fears respond to comfort and coping strategies','Your child can eventually fall asleep with support','Fears gradually decrease over weeks to months'],
  whenToMention: ['Fears are so intense your child cannot fall asleep for extended periods','Fears are spreading to daytime activities and limiting normal life','Your child seems excessively anxious in general, not just at bedtime'],
  whenToActNow: ['Your child describes fears that seem to relate to real threatening experiences','Extreme anxiety includes physical symptoms like vomiting, shaking, or hyperventilating'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Common Toddler Fears.', url: 'https://www.zerotothree.org/resource/common-toddler-fears/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
  ],
  relatedConcernSlugs: ['toddler-night-time-fears','toddler-dark-room-fear','toddler-monster-under-bed-fear','toddler-anxiety-at-night'],
};
