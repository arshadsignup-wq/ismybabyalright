import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-frustration-management',
  title: 'Helping My Toddler Manage Frustration',
  category: 'behavior',
  searchTerms: [
    'toddler frustrated easily',
    'toddler gets frustrated and cries',
    'toddler frustration tolerance low',
    'toddler throws things when frustrated',
    'toddler screams when can\'t do something',
    'toddler frustration management',
    'how to help frustrated toddler',
    'toddler gives up easily frustrated',
    'toddler angry can\'t do it',
    'teaching toddler patience',
  ],
  quickAnswer:
    'Toddlers experience intense frustration because they have big desires and goals but limited skills, language, and impulse control to achieve them. Frustration is not a behavioral problem — it is a sign that your child is trying to learn and grow. The prefrontal cortex, which manages emotional regulation, will not be fully developed until the mid-twenties. Your role is not to prevent frustration but to help your child learn to tolerate and work through it with your support.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, frustration is primarily physical — your toddler wants to do things their body is not yet capable of, and they cannot use words to express what they need. Screaming, crying, throwing objects, and hitting are common expressions of frustration, not aggression. Stay close, narrate their emotions ("You are frustrated because the block won\'t stack"), and offer help without taking over completely. Modeling calm behavior during their frustration teaches them emotional regulation over time.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Frustration may intensify as your toddler\'s desire for independence grows faster than their abilities. They may insist on doing things themselves ("me do it!") and melt down when they cannot. This is healthy autonomy development. Break tasks into smaller steps, allow extra time for your toddler to try things independently, and step in with assistance only when they are truly stuck. Teaching simple sign language or phrases like "help please" gives them a tool beyond screaming.',
    },
    {
      ageRange: '2-3 years',
      context:
        'As language develops, you can begin teaching simple coping strategies: taking deep breaths (blow out birthday candles), squeezing a stuffed animal, or stomping feet. Label emotions consistently ("You feel frustrated" or "That made you angry") to build emotional vocabulary. Praise effort rather than outcomes ("You kept trying — that was hard!"). Children who are praised for persistence develop better frustration tolerance over time. If frustration leads to prolonged, inconsolable meltdowns daily, consider whether anxiety or sensory sensitivities might be contributing.',
    },
  ],
  whenNormal: [
    'Your toddler gets frustrated when tasks are difficult but can be redirected or calmed with your help',
    'Frustration is worse when your toddler is tired, hungry, or overstimulated',
    'Your toddler sometimes works through frustration and succeeds, showing developing persistence',
    'Frustration episodes last a few minutes and your toddler recovers and returns to play',
  ],
  whenToMention: [
    'Your toddler is frustrated to the point of giving up on most tasks immediately and refuses to try new things',
    'Frustration regularly escalates to self-injury such as head banging, biting themselves, or pulling their own hair',
    'Your toddler\'s frustration level is significantly higher than same-age peers and is affecting their ability to participate in daycare or play groups',
  ],
  whenToActNow: [
    'Your toddler injures themselves severely during frustration episodes',
    'Frustration is accompanied by developmental regression or loss of previously acquired skills',
    'You are feeling overwhelmed by your toddler\'s frustration and struggling with your own emotional responses — seeking support is a sign of good parenting',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
    'cognitive-problem-solving',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-extreme-tantrums-public',
    'defiant-toddler',
    'toddler-defiant-wont-listen-anything',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Help Your Child Handle Frustration. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Developing Self-Control from 12-36 Months.',
      url: 'https://www.zerotothree.org/resource/developing-self-control/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips for Healthy Child Development.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
  ],
};
