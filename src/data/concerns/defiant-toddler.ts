import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'defiant-toddler',
  title: 'My Toddler Says \'No\' to Everything',
  category: 'behavior',
  searchTerms: [
    'toddler says no to everything',
    'defiant toddler',
    'toddler refuses everything',
    'terrible twos saying no',
    'toddler oppositional behavior',
    'toddler won\'t cooperate',
    'why does my toddler say no all the time',
    'toddler defiance normal',
    'strong willed toddler',
    'toddler refuses to listen',
  ],
  quickAnswer:
    'Saying "no" to everything is one of the most universal and developmentally healthy behaviors in toddlerhood. It emerges around 18-24 months and peaks around age 2-3. Your toddler is not trying to be difficult  -  they are discovering that they are a separate person with their own will, which is a critical milestone in identity development. This phase is temporary and is actually a sign of healthy cognitive and emotional growth.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Babies often learn the word "no" early because they hear it frequently and it is a powerful, attention-getting word. Some children begin shaking their head "no" or saying the word even before they understand its full meaning. Early defiance at this age  -  pulling away, arching the back, protesting  -  is the first sign of emerging autonomy. It is a cause for celebration (even when it doesn\'t feel like it), because it means your child understands they have preferences and can express them.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'This is the classic "no" phase. Your toddler may say no to things they actually want, say no reflexively before even processing the question, or say no and then do the thing anyway. This is because "no" has become their default way of asserting independence and control. Offering limited choices ("Do you want the red cup or the blue cup?") rather than yes-or-no questions is one of the most effective strategies. Reducing the number of questions you ask and using statements instead ("It\'s time to put shoes on") can also help.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'Defiance may become more sophisticated as language develops. Your child might negotiate, argue, or offer creative alternatives instead of just saying "no." This is actually progress  -  they are developing reasoning and problem-solving skills even when it feels like they are just being difficult. Power struggles are best avoided by choosing your battles, offering choices within acceptable boundaries, and using natural consequences when appropriate. Humor can be a surprisingly effective tool during this phase.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'The reflexive "no" phase typically eases significantly by age 3.5-4 as children develop better emotional regulation, understand consequences more clearly, and can be reasoned with to some degree. If defiance is still extreme, persistent, and accompanied by intense aggression, inability to follow any rules, or significant difficulty at preschool or daycare, it may be worth discussing with your pediatrician to rule out underlying causes such as anxiety, speech and language delays, or oppositional defiant disorder.',
    },
  ],
  whenNormal: [
    'Your toddler is between 18 months and 3 years old and says "no" as a default response  -  this is the hallmark of healthy autonomy development',
    'Your child sometimes says no to things they actually want, then gets upset when you respect their answer  -  they are still figuring out what "no" means',
    'Your toddler cooperates sometimes and defies other times  -  inconsistency is normal at this stage',
    'Defiance is worst when your child is tired, hungry, overstimulated, or in transition between activities',
  ],
  whenToMention: [
    'Defiance is so extreme and persistent that your child cannot function at daycare or preschool, and the behavior is significantly different from peers',
    'Your child seems genuinely angry or hostile most of the time, not just asserting independence, and rarely has moments of joy, cooperation, or warmth',
    'Defiance is accompanied by aggression that is escalating, deliberate property destruction, or inability to enjoy any activities',
  ],
  whenToActNow: [
    'Your child\'s oppositional behavior is accompanied by regression in developmental skills, sudden personality changes, or signs of extreme anxiety or depression',
    'You feel you are losing control of your reactions to your child\'s defiance and are concerned about your own response  -  reaching out for support is a sign of strength, not failure',
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
        'Zero to Three. Toddlers and Self-Control: A Survival Guide for Parents.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-self-control/',
    },
  ],
};
