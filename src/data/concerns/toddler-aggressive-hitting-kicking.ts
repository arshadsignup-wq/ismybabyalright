import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-aggressive-hitting-kicking',
  title: 'Toddler Hitting, Kicking, and Aggressive Behavior',
  category: 'behavior',
  searchTerms: ['toddler hitting','toddler kicking','toddler aggressive behavior','toddler hits parents','toddler hits other kids','2 year old hitting phase','toddler violent behavior','toddler throwing things at people','toddler aggression when to worry','toddler hitting at daycare','how to stop toddler from hitting','toddler angry outbursts physical'],
  quickAnswer: 'Physical aggression (hitting, kicking, throwing, pushing) is developmentally normal in toddlers ages 1-3. Research shows that physical aggression actually peaks around age 2 and then decreases as children develop language and emotional regulation skills. Toddlers are not being "bad" - they are experiencing intense emotions with zero ability to regulate them. The prefrontal cortex (responsible for impulse control) does not fully mature until the mid-20s. Consistent, calm responses that acknowledge the emotion while setting the limit are the most effective approach.',
  byAge: [
    { ageRange: '12-18 months', context: 'Hitting and pushing at this age are often experimental rather than aggressive - your toddler is learning about cause and effect and does not understand that their actions cause pain. They may also hit when frustrated because they have no words. Respond briefly and consistently: "I won\'t let you hit. Hitting hurts. You can hit this pillow." Physical redirection (gently catching their hand) is more effective than verbal explanations at this age. Stay calm - a big reaction can actually reinforce the behavior.' },
    { ageRange: '18-24 months', context: 'This is the peak age for physical aggression. Your toddler hits, kicks, or pushes because they are frustrated, overwhelmed, overtired, hungry, or want something they cannot have. They may also hit when excited - they literally cannot control the impulse. Get down to their level, hold their hands gently, and say: "I can see you\'re frustrated. I won\'t let you hit." Then help them with the problem. Teaching them to stomp feet, squeeze hands, or say "mad!" gives them an alternative outlet.' },
    { ageRange: '2-3 years', context: 'Aggression should be decreasing as language develops. Your child should be starting to use words ("No!" "Mine!" "Stop!") instead of hitting some of the time. If aggression is increasing, evaluate the environment: Is the child overtired? Overstimulated? Getting enough one-on-one time? Watching aggressive content? Is there a new stressor (new sibling, move, daycare change)? Model calm conflict resolution and praise every instance of using words instead of hitting.' },
    { ageRange: '3-4 years', context: 'By age 3-4, most children can use words instead of physical aggression most of the time, though they may still hit occasionally when very overwhelmed. If your child is hitting daily, is aggressive toward animals, enjoys hurting others, or cannot be redirected, talk to your pediatrician. Persistent physical aggression beyond age 4 that is not decreasing may benefit from behavioral evaluation and support. Rule out underlying causes like sleep deprivation, sensory processing differences, or anxiety.' },
  ],
  whenNormal: ['Your toddler hits when frustrated but can be redirected and calms down','Hitting decreases as your child develops more language','Your child shows remorse or concern after hitting (at age 2.5+)','Aggression is situational (triggered by identifiable causes) rather than constant'],
  whenToMention: ['Your child hits, kicks, or bites multiple times daily and the frequency is not decreasing','Aggression is causing problems at daycare or with other children','Your child seems to intentionally try to hurt others or shows no concern when they cause pain','You are struggling to stay calm during aggressive episodes and need support'],
  whenToActNow: ['Your child is injuring themselves or others seriously during aggressive episodes','Sudden onset of severe aggression in a previously calm child','Aggression is accompanied by other concerning behaviors like fire-setting, cruelty to animals, or extreme defiance'],
  relatedMilestones: ['social-emotional-regulation','language-expressive'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-biting-at-daycare','toddler-constant-meltdowns','toddler-destroying-things'],
  sources: [
    { org: 'NIH', citation: 'Tremblay RE, et al. Physical Aggression During Early Childhood: Trajectories and Predictors. Pediatrics. 2004.', url: 'https://pubmed.ncbi.nlm.nih.gov/15286219/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
  ],
};
