import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-lining-up-arranging-only', title: 'Toddler Only Lines Things Up or Arranges Objects', category: 'behavior',
  searchTerms: ['toddler only lines things up', 'toddler arranging objects', 'toddler obsessed with lining up', 'toddler only organizes toys', 'toddler sorts and arranges only', 'toddler lining up exclusively', 'toddler won\'t play just arranges', 'toddler lines up everything', 'lining up toys concern', 'toddler only stacks and sorts'],
  quickAnswer: 'Many toddlers enjoy lining up toys, sorting objects, or arranging things in patterns. This can be a normal part of cognitive development as children explore concepts of order, patterns, and categories. It becomes a concern when lining up is the only way a child plays, when they become extremely distressed if arrangements are disturbed, and when it prevents other types of play like pretend play and social play.',
  byAge: [
    { ageRange: '12-24 months', context: 'Lining up and arranging objects is part of normal exploration. Toddlers learn about spatial relationships and patterns through these activities. It is normal alongside other types of play.' },
    { ageRange: '24-36 months', context: 'If lining up is the dominant play activity and your child shows no interest in pretend play, social play, or functional toy use, this warrants monitoring. An occasional lining-up phase is normal.' },
    { ageRange: '3-4 years', context: 'Exclusive arranging and lining up at this age, combined with distress when objects are moved and limited other play, may indicate autism spectrum features or other developmental differences.' },
    { ageRange: '4-5 years', context: 'Play should be diverse and flexible. A child who exclusively arranges objects and cannot engage in other forms of play needs evaluation.' },
    { ageRange: '5-6 years', context: 'By school age, rigid, restrictive play patterns affect social development and learning. Professional support can help expand play skills.' },
  ],
  whenNormal: ['Your toddler lines up toys sometimes but also plays with them in other ways', 'Your toddler enjoys sorting and arranging but does not become distressed when objects are moved', 'Your toddler lines things up during a developmental phase but the behavior is not exclusive', 'Your toddler also engages in pretend play and social play'],
  whenToMention: ['Lining up is your child\'s only form of play and they resist other activities', 'Your child becomes extremely upset if their lined-up objects are disturbed', 'Exclusive arranging is combined with limited social engagement and no pretend play'],
  whenToActNow: ['Your child only lines up objects, has no other play skills, and shows social communication difficulties', 'Arranging behavior is increasing and other play types are decreasing'],
  relatedMilestones: ['pretend-play', 'flexible-thinking', 'social-engagement', 'cognitive-development'],
  showSelfReferral: true, relatedConcernSlugs: ['lining-up-toys', 'toddler-rigid-play-patterns', 'toddler-spinning-objects-fascination'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Information. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Understanding Play.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
