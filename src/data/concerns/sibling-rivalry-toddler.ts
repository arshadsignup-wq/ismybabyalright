import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sibling-rivalry-toddler',
  title: 'Sibling Rivalry in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler siblings fighting all the time',
    'sibling rivalry toddler age',
    'brothers and sisters always fighting',
    'toddler competing with sibling',
    'how to stop sibling fighting toddlers',
    'is sibling rivalry normal in toddlers',
    'toddler jealous of older sibling',
    'siblings arguing over toys constantly',
  ],
  quickAnswer:
    'Sibling rivalry is a completely normal part of child development and is nearly universal in families with more than one child. Toddlers are naturally egocentric and have limited ability to share, take turns, or manage frustration — all of which fuel sibling conflict. While it can be exhausting for parents, most sibling rivalry decreases as children develop better language and emotional regulation skills.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this age, the baby is not an active participant in rivalry, but the older toddler may show jealousy through attention-seeking behavior, clinginess, or regression. Focus on making the older child feel included and maintaining their routines.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the baby becomes more social and engaging, the older sibling may feel threatened by the attention the baby receives. Praise the older child for gentle interactions with the baby and create special one-on-one time to reinforce their importance in the family.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once the baby starts crawling and grabbing toys, conflict often escalates. The older toddler may become frustrated when the baby touches their things. Provide safe spaces for the older child\'s special toys and teach basic boundaries while supervising closely.',
    },
    {
      ageRange: '12 months+',
      context:
        'When both children are mobile, rivalry intensifies as they compete for toys, space, and parental attention. This is the peak period for physical conflicts. Focus on teaching turn-taking, using simple language to label emotions, and intervening calmly before situations escalate. Improvement typically comes as language skills develop.',
    },
  ],
  whenNormal: [
    'Your toddlers argue over toys, turns, or parental attention throughout the day',
    'There is occasional pushing, grabbing, or mild physical contact during disputes',
    'Your children alternate between playing happily together and fighting',
    'Rivalry increases when children are tired, hungry, or overstimulated',
  ],
  whenToMention: [
    'One child is consistently the aggressor and the other seems fearful or withdrawn around their sibling',
    'Sibling conflict is so intense or frequent that it is affecting the emotional wellbeing of one or both children',
    'Your child\'s aggression toward a sibling is escalating in severity despite consistent intervention',
  ],
  whenToActNow: [
    'One child has caused a significant injury to a sibling, such as biting that breaks skin, hitting with objects, or any action requiring medical attention',
    'A child shows signs of emotional trauma from sibling interactions, including persistent fearfulness, nightmares, or avoidance behaviors',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'new-sibling-adjustment-regression',
    'toddler-hitting-baby-sibling',
    'toddler-not-sharing-developmental',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sibling Rivalry. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Sibling-Rivalry.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Kramer, L. Learning How to Be a Sibling: Addressing Sibling Rivalry with Research-Based Strategies. Pediatrics. 2010.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20876172/',
    },
  ],
};
