import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sensory-avoiding-baby',
  title: 'My Baby Avoids Certain Textures or Sounds',
  category: 'behavior',
  searchTerms: [
    'baby avoids textures',
    'baby hates certain sounds',
    'sensory avoidant baby',
    'baby sensitive to textures',
    'baby covers ears at loud sounds',
    'baby hates tags in clothes',
    'baby hates getting hands dirty',
    'sensory over responsive baby',
    'baby sensory defensiveness',
    'tactile defensiveness baby',
  ],
  quickAnswer:
    'Many babies and toddlers have strong sensory preferences and may avoid certain textures, sounds, or sensations. This is often a normal part of development and temperament. Sensory avoidance becomes a concern if it is extreme, interfering with daily activities like eating, dressing, or playing, or if it is paired with developmental delays.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are just beginning to explore different textures and sounds. It is normal for some babies to dislike certain sensations  -  pulling away from grass, crying at loud sounds, or resisting certain fabrics. Most babies gradually adapt with repeated gentle exposure. If your baby consistently avoids many sensations or becomes extremely distressed by normal sensory experiences, mention it to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers often develop stronger sensory preferences. Your child might refuse certain clothing, avoid messy play, cover their ears at loud sounds, or resist having their face or hands wiped. Some of this is normal toddler autonomy and preference. However, if avoidance is extreme (meltdowns over tags in shirts, refusing all messy foods, unable to tolerate any loud environments), it may be sensory over-responsivity.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Many preschoolers continue to have sensory preferences but develop coping strategies. If sensory avoidance is interfering with daily life (cannot go to parks because of grass, cannot eat most foods because of texture, cannot tolerate public places because of sound), occupational therapy can be very helpful. A sensory evaluation can identify specific sensitivities and provide strategies.',
    },
  ],
  whenNormal: [
    'Your baby dislikes a few specific textures or sounds but tolerates most others',
    'With gentle, repeated exposure, your child gradually becomes more comfortable with previously avoided sensations',
    'Sensory preferences are manageable  -  you can work around them (cutting out tags, offering a preferred spoon) without major disruption',
    'Your child is otherwise developing typically and can engage in age-appropriate play and learning',
    'Sensory avoidance is mild and does not cause extreme distress or interfere with daily routines',
  ],
  whenToMention: [
    'Your child avoids many textures, sounds, or sensations and it is limiting their ability to eat, dress, or play',
    'Sensory avoidance is causing significant distress (frequent meltdowns, refusal to participate in activities)',
    'Your child is extremely sensitive to sensations that most children tolerate (cannot be in public places, refuses most foods, cannot tolerate being touched)',
    'Sensory issues are paired with other concerns like language delays, social difficulties, or repetitive behaviors',
  ],
  whenToActNow: [
    'Your child is losing weight or not getting adequate nutrition because of extreme texture aversions with food',
    'Sensory avoidance is so severe that your child cannot tolerate necessary daily activities (bathing, diaper changes, dressing)',
    'Your child has suddenly developed extreme sensory sensitivities that are new or worsening rapidly',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'self-help-feeding',
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
        'Zero to Three. Sensory Sensitivities in Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resource/sensory-processing/',
    },
    {
      org: 'STAR Institute',
      citation:
        'STAR Institute for Sensory Processing. Sensory Over-Responsivity (SOR).',
      url: 'https://www.spdstar.org/basic/subtypes-of-spd',
    },
  ],
};
