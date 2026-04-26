import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-controlling-behavior',
  title: 'Toddler Controlling Behavior',
  category: 'behavior',
  searchTerms: [
    'toddler controlling behavior',
    'toddler bossy',
    'toddler needs to be in control',
    'toddler demands everything their way',
    'toddler rigid behavior',
    'toddler inflexible',
    'toddler needs things just so',
    'toddler meltdown when things aren\'t right',
    'toddler dictates everything',
    'why is my toddler so controlling',
  ],
  quickAnswer:
    'A toddler who insists on having things "just so" or who wants to control every detail of their day is not being manipulative - they are seeking predictability and order in a world that feels overwhelming. This need for control typically peaks between ages 2 and 3.5 and is a sign that your child is developing a sense of self and trying to manage their environment. Some rigidity is completely normal and will ease as their ability to cope with change and frustration matures.',
  byAge: [
    {
      ageRange: '18 months - 2 years',
      context:
        'Early controlling behaviors often look like insistence on sameness - the same cup, the same route to the park, the same bedtime routine in the exact same order. This is actually a sign of cognitive growth. Your toddler has learned patterns and finds comfort in predictability. Gently introducing small, manageable changes while respecting their need for some consistency helps build flexibility over time.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the peak age for controlling behavior. Your toddler may insist on choosing their own clothes, demand that you sit in a specific chair, or have a meltdown if their food touches on the plate. These behaviors are about developing autonomy and coping with the fact that they cannot control everything. Offer choices where you can, maintain firm boundaries on safety and non-negotiables, and empathize with their frustration when things do not go their way.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Controlling behavior usually becomes more flexible as your child develops better coping skills and can understand simple explanations. You can start teaching flexibility through games ("Let\'s try a silly way today!") and modeling how you handle unexpected changes. If rigidity is extreme, pervasive, and causing significant distress, it may be worth exploring whether anxiety or sensory sensitivities are driving the need for control.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By age 4-5, most children can tolerate some deviation from their preferred way of doing things. If your child is still extremely rigid, has intense and prolonged meltdowns over small changes, and struggles to function in social settings because they cannot share control, discuss your concerns with your pediatrician. They can assess whether additional support might be helpful.',
    },
  ],
  whenNormal: [
    'Your toddler has strong preferences about routines, food, clothing, or activities but can eventually be redirected',
    'Controlling behavior is worst during times of stress or change and improves when life is more stable',
    'Your child is between 2 and 3.5 years old and the behavior is slowly becoming more flexible',
    'Your toddler can sometimes accept alternatives or compromises when offered choices',
  ],
  whenToMention: [
    'Rigidity is so extreme that your child melts down for extended periods over tiny changes and the behavior is not improving',
    'Controlling behavior is significantly interfering with your child\'s ability to play with other children, attend daycare, or function in daily life',
    'Your child has other patterns that concern you, such as repetitive behaviors, extreme difficulty with transitions, or very restricted interests',
  ],
  whenToActNow: [
    'Your child\'s need for control is accompanied by severe anxiety, self-harm during meltdowns, or complete inability to function when things are not exactly right',
    'Controlling behavior appeared suddenly after a stressful event and is accompanied by other significant behavioral changes',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
    'cognitive-problem-solving',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Shape and Manage Your Young Child\'s Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers (3-5 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Toddlers and Self-Control: A Survival Guide for Parents.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-self-control/',
    },
  ],
};
