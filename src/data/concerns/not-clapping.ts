import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-clapping',
  title: 'My Baby Isn\'t Clapping',
  category: 'physical',
  searchTerms: [
    'baby not clapping',
    'when do babies clap',
    'baby not clapping at 9 months',
    'baby not clapping at 12 months',
    'baby won\'t clap hands',
    'when should baby clap',
    'baby doesn\'t clap back',
    'teaching baby to clap',
    'baby not imitating clapping',
    'baby not clapping hands together',
  ],
  quickAnswer:
    'Clapping typically develops between 9 and 12 months and is both a fine motor skill and a social milestone  -  your baby needs the coordination to bring their hands together at midline AND the social motivation to imitate you. Many babies clap closer to their first birthday, and that is perfectly normal.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Most babies are not clapping at this age, so there is nothing to worry about. Your baby may be banging toys on surfaces or bringing objects to midline, which are precursor skills. These movements show they\'re developing the coordination they\'ll eventually use for clapping.',
    },
    {
      ageRange: '9-10 months',
      context:
        'This is when many babies start clapping, often in response to a parent clapping first or during a favorite song. If your baby isn\'t clapping yet, watch for other imitation behaviors  -  do they wave, bang two toys together, or mimic facial expressions? These show the social and motor building blocks are developing.',
    },
    {
      ageRange: '11-12 months',
      context:
        'Most babies are clapping by 12 months. If yours isn\'t, consider whether they\'re imitating other gestures like waving or reaching up to be held. Clapping is one of many social-motor skills, and some babies express themselves differently. If your baby isn\'t imitating any gestures by 12 months, mention it to your pediatrician.',
    },
    {
      ageRange: '13-15 months',
      context:
        'If your toddler still isn\'t clapping or imitating other gestures by this age, it is worth discussing with your pediatrician. The concern at this point is less about the clapping itself and more about whether your child is imitating actions and engaging socially, which are important developmental signals.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months  -  clapping is still developing and many babies don\'t start until closer to 12 months.',
    'Your baby bangs toys together or on surfaces  -  this shows they can bring hands to midline and use them together, which is the motor prerequisite for clapping.',
    'Your baby imitates other gestures like waving, blowing kisses, or raising arms  -  they\'re socially engaged even without clapping.',
    'Your baby claps inconsistently or only during certain songs or games  -  the skill is emerging.',
  ],
  whenToMention: [
    'Your baby is over 12 months and isn\'t clapping or imitating any gestures at all.',
    'Your baby doesn\'t seem to notice or respond when you model clapping, waving, or other social gestures.',
    'Your baby isn\'t bringing their hands together at midline for any activity by 9-10 months.',
  ],
  whenToActNow: [
    'Your baby was clapping and has stopped, along with loss of other social or motor skills  -  regression always warrants evaluation.',
    'Your baby shows no interest in social interaction, doesn\'t make eye contact, and isn\'t imitating any behaviors by 12 months  -  discuss with your pediatrician promptly.',
  ],
  relatedMilestones: [
    'fine-motor-banging-toys',
    'social-imitating-gestures',
    'fine-motor-midline-play',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Social Development: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Social-Development-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  If You\'re Concerned: Act Early',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
  ],
};
