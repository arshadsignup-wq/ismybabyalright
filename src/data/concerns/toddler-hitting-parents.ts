import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-hitting-parents',
  title: 'Toddler Hitting Parents',
  category: 'behavior',
  searchTerms: [
    'toddler hitting mom',
    'toddler hitting parents',
    'toddler hits me',
    'why does my toddler hit me',
    'toddler slapping face',
    'toddler hitting when angry',
    'toddler hits parent when told no',
    'how to stop toddler from hitting',
    'toddler aggressive with parents',
    'toddler kicks parents',
    'toddler violent with mom and dad',
  ],
  quickAnswer:
    'Being hit by your toddler is one of the most upsetting experiences in parenting, but it is also one of the most common and normal behaviors between 12 and 36 months. Toddlers hit the people they feel safest with - usually their parents - because they feel secure enough to express their biggest, most overwhelming emotions. They are not being "bad" or intentionally hurtful. They are showing you that their feelings are too big for their small bodies and limited vocabulary to handle. This behavior improves with consistent, calm responses as language and emotional regulation develop.',
  byAge: [
    {
      ageRange: '10-18 months',
      context:
        'Babies and young toddlers often hit, slap, or grab faces without understanding that it hurts. At this age, hitting is often experimental or happens during moments of excitement. Calmly catch their hand, say "Gentle hands" or "That hurts," and show them how to touch gently. Keep your response brief and neutral - a big reaction can make the behavior more interesting to repeat.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'This is the peak age for hitting parents. Your toddler is experiencing frustration, anger, and disappointment but has almost no ability to regulate these emotions or express them with words. When your toddler hits, get down to their level, gently hold their hands if needed, and say "I won\'t let you hit. Hitting hurts." Then name their emotion: "You are really angry because I said no more crackers." Consistency is everything - the same calm response every single time.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'As language grows, hitting should decrease. Your child may still lash out during intense moments, but they should be developing the ability to use words some of the time. Coach them on what to do instead: "When you feel angry, you can stomp your feet, squeeze your hands, or tell me \'I am mad!\'" Praise every attempt to use words instead of hitting, even if the words are not perfectly calm.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'Most children significantly reduce hitting parents by this age. If your child is still frequently and intensely hitting you, especially if the aggression is escalating, seems deliberate, and is not responding to consistent strategies, discuss it with your pediatrician. They can help evaluate whether additional support, such as behavioral therapy or assessment for underlying emotional difficulties, would be helpful.',
    },
  ],
  whenNormal: [
    'Your toddler is between 12 and 36 months and hits mainly during tantrums or when told "no"',
    'Hitting is directed at the people your child feels safest with (usually parents) rather than peers or strangers',
    'Your child shows remorse afterward or can be redirected with consistent intervention',
    'Hitting is decreasing over time as language and emotional regulation improve',
    'The behavior is worse when your child is overtired, hungry, or overstimulated',
  ],
  whenToMention: [
    'Hitting is frequent, intense, and not decreasing despite weeks of consistent calm responses and redirection',
    'Your child is over 3.5 and hitting is still a primary way they express emotions, with very little use of words',
    'Hitting is accompanied by other persistent aggressive behaviors that are escalating and happening across multiple settings',
  ],
  whenToActNow: [
    'Your child\'s aggression is causing injury, is escalating in severity, and you are struggling to keep everyone safe',
    'You find yourself losing control of your own responses to the hitting and need support - this is a sign of strength, not weakness, and your pediatrician can help connect you with resources',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx',
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
        'Zero to Three. Aggressive Behavior in Toddlers.',
      url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/',
    },
  ],
};
