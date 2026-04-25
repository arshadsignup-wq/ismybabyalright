import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'parallel-play-concerns',
  title: 'My Toddler Only Plays Beside Other Kids, Not With Them',
  category: 'behavior',
  searchTerms: [
    'toddler parallel play',
    'toddler plays next to kids not with them',
    'when do toddlers play together',
    'toddler doesn\'t share or play cooperatively',
    'toddler plays alone at daycare',
    'is parallel play normal',
    'toddler won\'t play with other kids',
    'when do kids start playing together',
    'my toddler ignores playmates',
    'toddler only plays beside other children',
  ],
  quickAnswer:
    'Parallel play  -  playing alongside other children with similar toys but not directly interacting  -  is a completely normal and important developmental stage. It typically dominates between ages 2-3 and is not a sign of social problems. True cooperative play, where children work together toward a shared goal, does not reliably emerge until age 3-4. Your toddler is learning social skills just by being near other children.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, most children engage in solitary play  -  playing independently with little awareness of other children beyond curiosity. They may watch other kids, grab their toys, or imitate their actions, but sustained interaction is not expected. Social play at this stage is primarily with caregivers, not peers. If your child enjoys playing with you and shows interest in the world around them, their social development is on track.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'Parallel play becomes the dominant play style in this age range. Your toddler may sit right next to another child, play with identical toys, and even glance over at what the other child is doing  -  but they are not truly playing together. This is completely normal and is actually an important social learning stage. Your child is learning to be comfortable around peers, to share space, and to observe social behavior. Do not try to force cooperative play; it will come naturally.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'During this period, you may see the beginnings of associative play  -  children start to interact more directly, commenting on each other\'s play, offering toys, and loosely coordinating activities, even though they are not truly cooperating on a shared project. Parallel play still happens frequently and is nothing to worry about. The transition from parallel to cooperative play is gradual and varies widely among children.',
    },
    {
      ageRange: '3.5-4+ years',
      context:
        'Cooperative play with shared goals, rules, and role-playing typically emerges around age 3.5-4. Even at this age, children still engage in parallel play sometimes  -  it does not disappear; new play skills are layered on top of it. If your child is over 4 and still exclusively engages in parallel play with no signs of interactive play developing, especially alongside other social or communication concerns, it is a good topic for your next pediatric visit.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and plays alongside other children rather than with them  -  this is the expected developmental stage called parallel play',
    'Your child watches what other kids are doing with interest, even if they do not join in directly',
    'Your child plays cooperatively with familiar adults or siblings but not yet with peers of the same age',
    'Your child is beginning to show some associative play (commenting on what others are doing, offering toys) even if full cooperation is not yet happening',
  ],
  whenToMention: [
    'Your child is over 4 and still shows no signs of interactive or cooperative play with peers despite regular social opportunities',
    'Your child seems unaware of other children entirely  -  not watching, not imitating, not reacting to their presence  -  rather than simply choosing not to engage',
    'Difficulty with peer play is accompanied by other social differences such as limited eye contact, difficulty with back-and-forth conversation, or not responding to their name',
  ],
  whenToActNow: [
    'Your child has lost previously developed social play skills  -  they used to interact with peers but have stopped, especially if combined with loss of language or other skills',
    'Your child becomes extremely distressed in the presence of other children to the point that any social setting causes meltdowns or shutdown',
  ],
  relatedMilestones: [
    'social-emotional-peer-interaction',
    'social-emotional-engagement',
    'language-expressive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. How to Support Your Child\'s Social Development.',
      url: 'https://www.zerotothree.org/resource/social-development/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Three Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
  ],
};
