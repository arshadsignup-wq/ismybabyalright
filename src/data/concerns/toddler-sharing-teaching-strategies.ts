import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sharing-teaching-strategies',
  title: 'How to Teach My Toddler to Share',
  category: 'behavior',
  searchTerms: [
    'toddler won\'t share',
    'teaching toddler to share',
    'toddler sharing age',
    'toddler grabs toys from others',
    'toddler possessive over toys',
    'when do toddlers learn to share',
    'toddler mine phase',
    'toddler sharing strategies',
    'toddler takes toys from other kids',
    'forced sharing toddler',
  ],
  quickAnswer:
    'True sharing — voluntarily giving up something you want to make someone else happy — requires empathy and impulse control that toddlers are still developing. Most children do not begin to genuinely share until age 3-4. Forcing toddlers to share before they are developmentally ready can actually backfire. Instead, focus on modeling sharing, practicing turn-taking, and creating situations where sharing happens naturally.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, toddlers do not understand the concept of ownership or sharing. When they grab a toy from another child, they are not being selfish — they simply see something interesting and take it. Toddlers this young live entirely in the present moment. You can begin modeling sharing by narrating your own sharing ("I am sharing my crackers with you!") and by gently showing your toddler how to hand objects back and forth. Do not expect them to understand or comply with sharing requests yet.',
    },
    {
      ageRange: '18-24 months',
      context:
        'The "mine" phase emerges strongly around this age as toddlers develop a sense of self and ownership. This is actually a healthy developmental sign — your toddler is learning that they are a separate person with their own things. Forcing sharing at this stage can feel threatening to their developing sense of self. Instead, practice "turn-taking" with simple activities ("My turn, your turn"). Before playdates, let your toddler put away their most special toys and set out toys that are easier to share.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Between ages 2-4, children gradually develop the empathy and impulse control needed for genuine sharing. You can support this by praising sharing when it happens naturally, reading books about sharing, and modeling generosity. Avoid forced sharing — research suggests that allowing children to play with a toy until they are done and then giving the next child a turn teaches more genuine generosity than forcing immediate sharing. By age 4, most children can share with prompting, and spontaneous sharing becomes more common by age 5.',
    },
  ],
  whenNormal: [
    'Your toddler says "mine" constantly and resists giving up toys — this is a normal developmental phase',
    'Your toddler shares sometimes and refuses other times — inconsistency is expected',
    'Your toddler can take turns with adult guidance but struggles to share spontaneously',
    'Your toddler is more possessive with certain special toys while being willing to share others',
  ],
  whenToMention: [
    'Your child is over 4 years old and cannot take turns even with adult guidance',
    'Your toddler is consistently and intensely aggressive (hitting, biting, scratching) when asked to share or when another child touches any toy',
    'Your toddler shows no awareness of other children\'s feelings — no response when another child cries after having a toy taken',
  ],
  whenToActNow: [
    'Your toddler\'s possessiveness is accompanied by extreme aggression that injures other children',
    'Your toddler has lost social skills they previously demonstrated',
    'Your toddler shows multiple signs of social-communication differences beyond just difficulty sharing',
  ],
  relatedMilestones: [
    'social-emotional-empathy',
    'social-emotional-regulation',
    'social-emotional-peer-interaction',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-turn-taking-skills',
    'toddler-parallel-play-vs-interactive',
    'biting',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teaching Your Child to Share. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Teaching-Your-Child-to-Share.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Sharing: A Developmental Milestone.',
      url: 'https://www.zerotothree.org/resource/sharing/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Social and Emotional Development.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html',
    },
  ],
};
