import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-playing-alone-always', title: 'Toddler Always Plays Alone', category: 'behavior',
  searchTerms: ['toddler always plays alone', 'toddler prefers solitary play', 'toddler won\'t play with others', 'toddler isolates self', 'toddler loner', 'toddler only plays by themselves', 'toddler doesn\'t want to play with anyone', 'toddler solitary play concerns', 'toddler social isolation play', 'toddler never plays with others'],
  quickAnswer: 'Some independent play is healthy and important for all toddlers. However, a child who exclusively plays alone and shows no interest in joining or being near others during play by age 3 may benefit from evaluation. The key is whether your child can engage with others when they choose to, even if they often prefer solitary play.',
  byAge: [
    { ageRange: '12-24 months', context: 'Solitary play is completely normal and expected. Toddlers at this age are learning about objects and their world through independent exploration. Some interest in watching other children is emerging but interactive play is not required.' },
    { ageRange: '24-36 months', context: 'Parallel play, playing near other children with similar toys, is typical. Some children strongly prefer playing alone, which may reflect temperament. However, they should at least notice and occasionally engage with nearby children.' },
    { ageRange: '3-4 years', context: 'While independent play remains important, children should also engage in some cooperative play with peers. A child who always chooses to play alone, resists all attempts at inclusion, and seems unaware of other children may need evaluation.' },
    { ageRange: '4-5 years', context: 'Peer play is increasingly important for social development. A child who consistently isolates despite opportunities for social play may have social communication differences, anxiety, or sensory sensitivities that make group play overwhelming.' },
    { ageRange: '5-6 years', context: 'Before school entry, most children engage in cooperative play. Persistent preference for complete isolation warrants evaluation for social communication differences or anxiety.' },
  ],
  whenNormal: ['Your toddler enjoys playing alone sometimes but also engages with family members', 'Your toddler plays alongside other children in parallel play', 'Your toddler prefers fewer playmates but can engage one-on-one', 'Your toddler is introverted but can participate in group play when encouraged'],
  whenToMention: ['Your child is over 3 and exclusively plays alone, resisting all attempts to engage', 'Your child seems unaware of other children even when they are playing right next to them', 'Your child becomes distressed when others try to join their play'],
  whenToActNow: ['Your child shows no interest in any social interaction including with parents and siblings', 'Your child previously played with others and has withdrawn into exclusively solitary play'],
  relatedMilestones: ['social-engagement', 'parallel-play', 'cooperative-play', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-engaging-peers', 'baby-not-playing-independently', 'toddler-not-pretend-playing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Playing with Others: Social Skills in Young Children.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
