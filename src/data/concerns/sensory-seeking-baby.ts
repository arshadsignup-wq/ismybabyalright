import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sensory-seeking-baby',
  title: 'My Baby Seems to Seek Intense Sensory Input',
  category: 'behavior',
  searchTerms: [
    'sensory seeking baby',
    'baby seeks intense sensory input',
    'baby always moving',
    'baby loves being thrown in air',
    'baby seeks pressure',
    'sensory seeking toddler',
    'baby needs constant stimulation',
    'baby loves rough play',
    'sensory processing disorder seeking',
    'why is my baby so active',
  ],
  quickAnswer:
    'Some babies and toddlers are naturally sensory seekers  -  they crave movement, deep pressure, loud sounds, or intense physical play. This is often just a temperament variation and does not necessarily indicate a problem. Sensory seeking becomes a concern only if it interferes with safety, learning, or daily functioning.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Sensory-seeking babies at this age often love being bounced, swung, or thrown gently in the air. They may seek out loud toys, love splashing in the bath, or prefer very active play. They might also mouth objects more intensely or for longer than other babies. This is part of how they learn about the world and regulate their sensory system. As long as they can also calm down and engage with quieter activities, this is typically just their temperament.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Sensory-seeking toddlers are often highly active  -  always climbing, jumping, crashing into furniture, or seeking rough-and-tumble play. They may love spinning, swinging, or being upside down. They might chew on non-food items, seek tight hugs, or have a high pain tolerance. Providing safe outlets (climbing structures, sensory bins, chew toys) and teaching boundaries ("We jump on the couch, not the table") helps manage the behavior.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Sensory-seeking behavior often continues into the preschool years. Your child might have trouble sitting still, constantly touch everything, make loud sounds, or crave intense physical activity. If they can focus when needed, follow directions, and the sensory seeking is not causing injuries or interfering with learning, it is usually just their sensory preference. Occupational therapy can help if the seeking behavior is disruptive or unsafe.',
    },
  ],
  whenNormal: [
    'Your child seeks sensory input (movement, pressure, sound) but can also calm down and focus when needed',
    'Sensory seeking is balanced  -  your child enjoys both active and quiet activities',
    'Your child is meeting developmental milestones and can engage in age-appropriate learning and play',
    'Providing sensory outlets (swinging, jumping, chewing safe objects) helps regulate your child\'s energy and mood',
    'Your child responds to redirection and can learn boundaries around safe vs. unsafe sensory seeking',
  ],
  whenToMention: [
    'Sensory seeking is interfering with safety (your child is constantly climbing dangerously high, running into traffic, or injuring themselves)',
    'Your child has extreme difficulty sitting still for any activity and it is affecting mealtimes, diaper changes, or other daily routines',
    'Sensory seeking is paired with other concerns like language delays, social difficulties, or not responding to their name',
    'Your child seems unable to self-regulate and is constantly "revved up" with no ability to calm down',
  ],
  whenToActNow: [
    'Your child is frequently injuring themselves or others through reckless sensory-seeking behavior',
    'Sensory seeking is so intense that your child cannot participate in family routines, mealtimes, or sleep',
    'You notice sensory seeking alongside a sudden loss of skills or dramatic change in behavior',
  ],
  relatedMilestones: [
    'gross-motor-climbing',
    'social-emotional-regulation',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sensory Processing Disorder. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Processing-Disorder-SPD.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Understanding Sensory Processing in Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resource/sensory-processing/',
    },
    {
      org: 'STAR Institute',
      citation:
        'STAR Institute for Sensory Processing. Sensory Over-Responsivity and Sensory Seeking.',
      url: 'https://www.spdstar.org/basic/subtypes-of-spd',
    },
  ],
};
