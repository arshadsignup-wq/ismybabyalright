import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-throwing-toys',
  title: 'Toddler Throwing Toys Aggressively',
  category: 'behavior',
  searchTerms: [
    'toddler throwing toys',
    'toddler throws things when angry',
    'why does my toddler throw everything',
    'toddler aggressive throwing',
    'toddler throwing toys at people',
    'how to stop toddler from throwing',
    'toddler throws things at me',
    'toddler throwing objects dangerously',
    'is throwing toys normal for toddlers',
    'toddler throwing phase',
  ],
  quickAnswer:
    'Throwing toys is a very common behavior in toddlers and usually serves multiple developmental purposes. Young children throw to explore cause and effect, test gravity, express big emotions they cannot yet put into words, and experiment with their growing physical abilities. While it can be frustrating and sometimes dangerous, most toddlers move past the intense throwing phase as their language and emotional regulation improve.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age love to drop and throw objects as a way of learning about gravity, cause and effect, and spatial relationships. This is healthy exploration, not aggression. You can support this learning by offering safe throwing activities like soft balls and letting them drop objects from their high chair (even though it feels endless). Redirecting to appropriate throwing targets is more effective than trying to stop the behavior entirely.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Throwing becomes more purposeful during this period. Your toddler may throw out of excitement, frustration, boredom, or to get your attention. When throwing is aimed at people, calmly remove the object and say "I won\'t let you throw that at people. That hurts. You can throw this ball instead." Offering alternatives rather than just saying "no" helps channel the behavior appropriately.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, most toddlers understand that some throwing is okay (balls outside) and some is not (hard toys at people), though impulse control is still developing. Throwing during tantrums is common because the physical release feels regulating. Teaching words for feelings and having a consistent, calm response to inappropriate throwing will help the behavior decrease over time.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children significantly reduce aggressive throwing by age 3-4. If your child is still frequently throwing hard objects at people, breaking things deliberately, or seems unable to control the impulse even with consistent support, discuss it with your pediatrician. They can help rule out sensory processing differences or other factors that may be contributing.',
    },
  ],
  whenNormal: [
    'Your baby or toddler throws soft objects and watches where they land with curiosity and delight',
    'Your toddler throws things during tantrums but calms down and can be redirected afterward',
    'Throwing happens more when your child is tired, hungry, or overstimulated',
    'Your child is between 12 months and 3 years and the behavior is gradually improving with consistent boundaries',
    'Your toddler can follow the rule of "balls are for throwing, toys are not" at least some of the time',
  ],
  whenToMention: [
    'Throwing is happening very frequently and is always aimed at people, especially at their face or head',
    'Your child seems to throw to deliberately hurt others and shows no concern when someone is hurt',
    'Throwing is accompanied by other escalating aggressive behaviors and your child is over 3 years old',
  ],
  whenToActNow: [
    'Your child has injured another child or adult by throwing a heavy or sharp object and the behavior is persistent and escalating',
    'Throwing is combined with sudden behavioral changes, regression in other skills, or signs of extreme distress',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'gross-motor-throwing',
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
