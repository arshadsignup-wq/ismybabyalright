import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-not-sharing-developmental',
  title: 'Toddler Not Sharing (Developmental)',
  category: 'behavior',
  searchTerms: [
    'toddler refuses to share toys',
    'is it normal for toddler not to share',
    'when do toddlers learn to share',
    'my 2 year old won\'t share anything',
    'toddler screams when other kids touch toys',
    'teaching toddler to share not working',
    'toddler possessive over toys',
    'developmental timeline for sharing in children',
  ],
  quickAnswer:
    'Not sharing is completely normal for toddlers and is not a sign of selfishness or poor parenting. Children under age 3 are developmentally egocentric — they genuinely cannot understand another person\'s perspective or desires. True sharing, where a child voluntarily gives something to another because they understand the other child wants it, typically does not develop until age 3.5-4. Forcing toddlers to share can actually backfire.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Babies at this age do not have a concept of possession or sharing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to grasp objects and may hold onto them, but this is motor development, not possessiveness. They do not yet understand the concept of "mine."',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies begin to show preferences for certain objects and may resist when toys are taken away. This is the beginning of object permanence and attachment to objects — both healthy developmental signs. Offering a swap rather than simply taking a toy helps.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between 12 and 36 months, toddlers are deeply attached to the concept of "mine." This is actually a cognitive milestone — understanding ownership. Rather than forcing sharing, try turn-taking with a timer, modeling sharing, and praising any voluntary giving. By age 3-4, children begin to understand fairness and sharing becomes more natural.',
    },
  ],
  whenNormal: [
    'Your toddler grabs toys from others and refuses to let go — this is developmentally expected before age 3',
    'Your child says "mine" about everything, even things that do not belong to them',
    'Your toddler becomes upset or has a meltdown when asked to share',
    'Your child shares occasionally or spontaneously but refuses when directed to share',
  ],
  whenToMention: [
    'Your child over age 4 still has extreme difficulty with any sharing or turn-taking in all settings and is having significant social problems as a result',
    'Your toddler\'s possessiveness is accompanied by intense, prolonged aggression toward any child who comes near their things',
    'Your child shows no interest in other children at all and also has limited social interaction with adults',
  ],
  whenToActNow: [
    'Your child\'s inability to share is part of a broader pattern of extreme rigidity, intense distress with any change, and difficulty with social reciprocity that may warrant developmental evaluation',
    'Aggression related to possessiveness is causing injury to other children',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sibling-rivalry-toddler',
    'toddler-bossiness-control',
    'parallel-play-vs-interactive-play',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sharing: Learning Takes Time. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Making-Friends.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Brownell, C. et al. Socialization of Early Prosocial Behavior: Parents\' Talk About Emotions is Associated with Sharing and Helping in Toddlers. Infancy. 2013.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3655121/',
    },
  ],
};
