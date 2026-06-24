import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-defiant-wont-listen-anything',
  title: 'My Toddler Won\'t Listen to Anything I Say',
  category: 'behavior',
  searchTerms: [
    'toddler won\'t listen',
    'toddler ignores me',
    'toddler defiant won\'t listen',
    'toddler doesn\'t follow directions',
    'toddler refuses to cooperate',
    'toddler won\'t do what I say',
    'how to get toddler to listen',
    'toddler selective hearing',
    'toddler disobedient all the time',
    'why won\'t my toddler listen',
    'toddler discipline not working',
  ],
  quickAnswer:
    'Toddlers who seem to ignore everything you say are experiencing a normal developmental phase. Between ages 1 and 3, children are developing autonomy, testing boundaries, and learning that they have their own will separate from yours. Their prefrontal cortex — the part of the brain responsible for impulse control and following directions — is extremely immature. This is not defiance born of disrespect; it is a necessary stage of healthy development.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, toddlers have very limited ability to understand and follow instructions. They may comprehend simple one-step commands like "come here" or "give me the ball" but often lack the impulse control to follow through even when they understand. Their attention span is very short, and they are driven primarily by curiosity and exploration. Using simple language, getting down to their eye level, and gently redirecting rather than commanding from across the room will be more effective.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when "not listening" feels most intense because toddlers understand much more than they can express and are actively testing limits. They may look right at you, hear your instruction, and do the opposite — not to be cruel but to learn what happens next. This is scientific experimentation, not personal rebellion. Keep instructions short and specific ("feet on the floor" rather than "stop climbing"), offer choices between two acceptable options, and stay calm and consistent with consequences.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Two-year-olds can follow two-step directions but are highly distractible and emotionally driven. They are more likely to listen when they are not hungry, tired, or overstimulated. Positive reinforcement (praising specific behaviors you want to see) is significantly more effective than punishment. If your child seems to never listen despite consistent approaches, consider whether hearing issues, speech and language delays, or sensory processing differences might be contributing factors.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, children generally become better at following rules and understanding expectations, though they still have frequent lapses. If your child truly seems unable to follow any directions, cannot focus on tasks, and is significantly more defiant than peers in structured settings like preschool, it may be worth discussing with your pediatrician. Conditions like ADHD, hearing difficulties, or language processing delays can look like defiance but have very different underlying causes.',
    },
  ],
  whenNormal: [
    'Your toddler listens sometimes and ignores you other times — inconsistency is the hallmark of this age',
    'Your toddler is more defiant when tired, hungry, overstimulated, or during transitions between activities',
    'Your toddler cooperates with some caregivers better than others, or behaves differently at daycare than at home',
    'Your toddler shows remorse or awareness after not listening, even if they repeat the behavior',
  ],
  whenToMention: [
    'Your toddler never seems to respond to their name or follow any instructions, even simple ones in calm settings',
    'Your toddler\'s defiance is accompanied by significant language delays or difficulty understanding spoken language',
    'Your toddler is unable to function in group settings such as daycare or playgroups due to extreme non-compliance',
  ],
  whenToActNow: [
    'Your toddler does not respond to loud sounds or their name being called, which may indicate a hearing problem',
    'Your toddler\'s behavior has suddenly changed dramatically, with regression in skills or personality changes that concern you',
    'You feel you are losing control of your own reactions to your toddler\'s behavior and are worried about your response',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-receptive',
    'cognitive-attention',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'defiant-toddler',
    'toddler-extreme-tantrums-public',
    'toddler-frustration-management',
  ],
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
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (1-2 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Challenging Behaviors: Understanding and Responding.',
      url: 'https://www.zerotothree.org/resource/challenging-behaviors/',
    },
  ],
};
