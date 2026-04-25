import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lining-up-toys',
  title: 'My Toddler Lines Up Toys',
  category: 'behavior',
  searchTerms: [
    'toddler lining up toys',
    'baby lining up objects',
    'toddler lines up cars',
    'is lining up toys autism',
    'toddler obsessed with order',
    'toddler arranging toys',
    'why does my toddler line things up',
    'toddler organizing toys in rows',
    'repetitive lining up toys',
    'toddler only lines up toys',
  ],
  quickAnswer:
    'Lining up toys is a common behavior in toddlers and is not, by itself, a sign of autism or developmental concerns. Many young children enjoy creating order, sorting, and arranging objects as part of normal play and cognitive development. What matters is whether lining up is one of many play activities or the only thing your child does.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age are learning about object permanence, cause and effect, and spatial relationships. Lining up blocks, cars, or other toys is a way to explore these concepts. Your child might line things up, knock them down, and line them up again. This is developmentally appropriate and shows emerging organizational and problem-solving skills.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Lining up and sorting often peak during this period as children\'s brains crave patterns and predictability. Your toddler might carefully arrange their toys by color, size, or type. This is part of learning to categorize and organize information. Most children will also engage in other types of play  -  pretend play, building, interactive games. If lining up is one of many activities, it is not a concern.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Preschoolers often continue to enjoy sorting, organizing, and arranging toys, especially as part of pretend play (lining up animals for a "parade," organizing a play kitchen, etc.). If your child only lines up toys, becomes very upset when the line is disrupted, avoids pretend or social play, and has language or social delays, it may be worth discussing with your pediatrician. But many neurotypical children simply enjoy order.',
    },
  ],
  whenNormal: [
    'Lining up is one of many types of play your child engages in',
    'Your child can be redirected to other activities without extreme distress',
    'Lining up is part of pretend play or problem-solving (like organizing a toy garage or farm)',
    'Your child makes eye contact, engages socially, and is developing language on track',
    'Your child shows flexibility  -  they might line things up, but also build, stack, or engage in other creative play',
  ],
  whenToMention: [
    'Lining up toys is your child\'s primary or only form of play',
    'Your child becomes very upset or has a meltdown when their lined-up toys are disrupted',
    'Lining up is rigid and repetitive with no variation or creativity',
    'You notice lining up alongside other concerns: limited eye contact, language delays, lack of pretend play, or social difficulties',
  ],
  whenToActNow: [
    'Your child has stopped engaging in other types of play they previously enjoyed and now only lines up objects',
    'Lining up is part of a pattern of rigid, inflexible behaviors that are interfering with daily life',
    'Your child has significant delays in communication, does not respond to their name, and avoids social interaction alongside the lining-up behavior',
  ],
  relatedMilestones: [
    'cognitive-problem-solving',
    'play-pretend',
    'social-emotional-engagement',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Cognitive Development in Toddlers: Sorting and Organizing.',
      url: 'https://www.zerotothree.org/resource/cognitive-development-in-toddlers/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early: Autism Spectrum Disorder.',
      url: 'https://www.cdc.gov/ncbddd/autism/signs.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Understanding Autism Spectrum Disorder. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Understanding-Autism-Spectrum-Disorder.aspx',
    },
  ],
};
