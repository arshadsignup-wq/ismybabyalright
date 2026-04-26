import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-pushing-other-children',
  title: 'Toddler Pushing Other Children',
  category: 'behavior',
  searchTerms: [
    'toddler pushing other kids',
    'toddler pushes at daycare',
    'why does my toddler push',
    'toddler aggressive with other children',
    'toddler shoving kids',
    'how to stop toddler from pushing',
    'toddler pushing at playground',
    'toddler pushing friends',
    'is pushing normal for toddlers',
    'toddler body contact aggression',
  ],
  quickAnswer:
    'Pushing is one of the most common physical behaviors in toddlers, especially between 18 months and 3 years. It usually happens because toddlers are still learning how to share space, express frustration, and communicate their needs with words. While it can be embarrassing and worrying, pushing at this age is a normal part of social development and almost always improves as language and emotional regulation skills grow.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, pushing is often not intentional aggression at all. Babies are learning to navigate physical space around other children and may push simply to create distance, explore cause and effect, or because they lack the motor control to interact gently. Modeling gentle touch ("soft hands") and staying close during peer interactions helps set the foundation for appropriate social behavior.',
    },
    {
      ageRange: '18 months - 2 years',
      context:
        'This is the peak age for pushing. Toddlers want things immediately, have very limited impulse control, and cannot yet use words to say "move" or "that is mine." Pushing is their fastest available tool. Stay close during playdates and intervene calmly by getting down to their level: "I won\'t let you push. Pushing hurts. You can say \'move please.\'" Consistent, brief responses are more effective than long explanations.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Pushing should gradually decrease as your child develops more language and begins to understand basic social rules. You can start coaching in the moment: "Tell your friend \'I need space\' instead of pushing." Role-playing social scenarios at home can also help. Some pushing during high-energy or crowded situations is still expected and does not mean your child is aggressive.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children have enough language and social understanding to use words instead of pushing most of the time. If pushing is still frequent, intense, or happening without any apparent trigger, it may be helpful to talk with your pediatrician. They can assess whether there are underlying sensory, communication, or emotional factors that need support.',
    },
  ],
  whenNormal: [
    'Your toddler pushes occasionally during conflicts over toys, space, or turns and responds to redirection',
    'Pushing happens mainly in crowded, overstimulating, or unfamiliar social situations',
    'Your child is between 18 months and 3 years and the behavior is gradually decreasing as language develops',
    'Your toddler shows remorse or concern after pushing when you point out the other child is upset',
  ],
  whenToMention: [
    'Pushing is happening very frequently throughout the day and is not decreasing over several weeks despite consistent intervention',
    'Your child seems to push without provocation and does not respond to redirection or show concern for other children',
    'Pushing is accompanied by other persistent aggressive behaviors like biting, hitting, or kicking that are escalating',
  ],
  whenToActNow: [
    'Your child\'s pushing is causing injuries to other children or is accompanied by sudden behavioral regression or personality changes',
    'You are concerned that your child may be experiencing something stressful that is driving the behavior, such as a change in environment or possible mistreatment',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
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
