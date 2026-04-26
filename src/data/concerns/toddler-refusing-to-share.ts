import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-refusing-to-share',
  title: 'Toddler Refusing to Share',
  category: 'behavior',
  searchTerms: [
    'toddler won\'t share',
    'toddler refuses to share',
    'toddler possessive over toys',
    'how to teach toddler to share',
    'toddler mine phase',
    'toddler grabs toys from other kids',
    'toddler sharing problems',
    'when do toddlers learn to share',
    'toddler hoards toys',
    'toddler selfish with toys',
  ],
  quickAnswer:
    'Not sharing is one of the most normal and developmentally appropriate behaviors for toddlers. True sharing requires an understanding of other people\'s feelings, the ability to delay gratification, and a sense of ownership - skills that are still developing between ages 2 and 4. Most children do not genuinely understand sharing until age 3-4, and even then it takes practice. Forcing a toddler to share before they are ready can actually slow the development of generosity rather than encourage it.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, babies do not understand the concept of ownership or sharing at all. If another child takes their toy, they cry because their thing is gone, not because they understand it belongs to them. They may hand you objects as a form of interaction (this is early turn-taking) but cannot be expected to share with peers. Modeling sharing between adults is the best early teaching tool.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'The word "mine" becomes a powerful part of your toddler\'s vocabulary, and everything is "mine." This is a cognitive milestone - your child is understanding the concept of possession. Forcing sharing at this age often leads to more possessiveness, not less. Instead, try turn-taking with a timer ("You play with it until the timer beeps, then it is your friend\'s turn") and have duplicates of popular toys available at playdates.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'Empathy and the ability to understand others\' perspectives are beginning to develop. You can start coaching sharing more directly: "Look at your friend\'s face. They look sad because they want a turn." Praise any spontaneous acts of sharing or generosity enthusiastically. Allow your child to set aside special toys before playdates so they do not have to share everything.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'By age 3.5-4, most children can share with some consistency, especially when reminded. They begin to understand fairness and enjoy the positive response they get from sharing. If your child still refuses to share anything with anyone at this age and shows no signs of empathy or concern for other children\'s feelings, mention it to your pediatrician as part of a broader social development conversation.',
    },
  ],
  whenNormal: [
    'Your toddler says "mine" frequently and resists giving up toys they are playing with',
    'Your child is under 3 and does not yet grasp the concept of turn-taking or sharing',
    'Sharing is harder with favorite or special toys but easier with less-valued items',
    'Your child occasionally shares spontaneously and can sometimes take turns with support',
    'Possessiveness is worse in group settings or when they are tired or hungry',
  ],
  whenToMention: [
    'Your child is over 4 and shows no interest in sharing, turn-taking, or any cooperative play despite consistent modeling and teaching',
    'Refusal to share is accompanied by a broader pattern of difficulty relating to peers, lack of interest in other children, or persistent aggression during play',
  ],
  whenToActNow: [
    'Your child\'s possessiveness leads to frequent, severe aggression that injures other children and is escalating despite consistent intervention',
    'Sudden change in behavior where a previously social child becomes extremely possessive, withdrawn, and unable to engage with peers',
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
        'American Academy of Pediatrics. Learning to Share. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Learning-to-Share.aspx',
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
        'Zero to Three. Sharing: Why It\'s So Hard and How to Help.',
      url: 'https://www.zerotothree.org/resource/sharing/',
    },
  ],
};
