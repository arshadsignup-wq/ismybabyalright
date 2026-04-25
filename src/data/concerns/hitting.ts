import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hitting',
  title: 'Toddler Hitting',
  category: 'behavior',
  searchTerms: [
    'toddler hitting parents',
    'why does my toddler hit me',
    'toddler hitting other kids',
    'how to stop toddler from hitting',
    '2 year old hitting',
    'toddler hitting at daycare',
    'baby slapping my face',
    'toddler hitting when angry',
    'is hitting normal for toddlers',
    'toddler hitting themselves in the head',
    'one year old hitting',
  ],
  quickAnswer:
    'Hitting is a very normal part of toddler development and does not mean your child is aggressive or that you are doing something wrong. Toddlers hit because their brains are still developing impulse control and they lack the language to express big feelings. With consistent, calm guidance, most children learn better ways to cope by age 3-4.',
  byAge: [
    {
      ageRange: '9-14 months',
      context:
        'Babies at this age often swing their arms and make contact with faces or bodies without any intent to hurt. They are experimenting with cause and effect  -  "I swing my arm, and something interesting happens!" Slapping or smacking your face may even be accompanied by giggles. A calm, neutral response helps them learn without reinforcing the behavior through big reactions.',
    },
    {
      ageRange: '14-24 months',
      context:
        'This is when hitting most often becomes intentional, driven by frustration, wanting a toy, being told "no," or simply feeling overwhelmed. The prefrontal cortex  -  the part of the brain responsible for impulse control  -  is still very immature. Your toddler genuinely cannot stop themselves in the moment, even if they "know" hitting is wrong. Consistent responses like gently catching their hand and saying "I won\'t let you hit. Hitting hurts" are most effective.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Hitting may continue but should start decreasing as language and emotional regulation develop. Two-year-olds are often caught between knowing the rule and being able to follow it. Keep teaching feeling words ("You\'re mad! You wanted that toy"), offer alternatives ("You can stomp your feet"), and stay calm. Progress may be slow but it is happening, even when it doesn\'t feel like it.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children hit much less frequently by age 3-4 as language and self-regulation improve. If hitting is still frequent, intense, or escalating at this age, it is a good idea to talk with your pediatrician. They can help determine if there are underlying factors like sensory needs, anxiety, or communication difficulties that would benefit from support.',
    },
  ],
  whenNormal: [
    'Your toddler hits when frustrated, overwhelmed, or overtired  -  these are the most common triggers',
    'Your baby smacks your face during play without seeming to understand it hurts',
    'Hitting happens occasionally but your child also shows affection, empathy, and is gradually improving with consistent guidance',
    'Your toddler is between 1-3 years old and the behavior is slowly decreasing over time',
  ],
  whenToMention: [
    'Hitting is very frequent (many times daily) and is not improving despite weeks of consistent, calm responses',
    'Your child seems to hit without any identifiable trigger, not related to frustration, excitement, or social conflicts',
    'Your child is over 3 and still hitting regularly at home or at school or daycare',
    'Hitting is accompanied by other intense behaviors like severe tantrums, property destruction, or extreme difficulty with transitions',
  ],
  whenToActNow: [
    'Your child hurts themselves intentionally  -  hitting their own head, biting themselves, or scratching  -  especially if it is escalating',
    'Your child has injured another child or adult seriously (bruising, breaking skin) and does not seem distressed about it',
    'There is a sudden increase in aggressive behavior after a major life change, trauma, or alongside regression in other skills',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
    'social-emotional-empathy',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Shape and Manage Your Young Child\'s Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
  ],
};
