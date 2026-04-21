import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-waving',
  title: 'My Baby Isn\'t Waving',
  searchTerms: [
    'baby not waving',
    'when do babies wave',
    'baby won\'t wave bye bye',
    'baby not waving at 12 months',
    'baby not waving goodbye',
    'when should baby wave',
    'baby doesn\'t wave back',
    'teaching baby to wave',
    'baby not doing bye bye',
    'baby not waving at 10 months',
  ],
  quickAnswer:
    'Waving typically develops between 9 and 12 months as a social imitation skill. It\'s a sweet milestone, and while its absence alone isn\'t usually a major concern, waving is a sign your baby is learning to communicate through gestures. If your baby is engaging socially in other ways, the wave will likely come.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Waving isn\'t expected yet. Your baby is still learning about social interactions — smiling at people, laughing, and starting to imitate facial expressions. These are the foundations that waving builds on. You can start modeling a wave during hellos and goodbyes, but don\'t expect it to click just yet.',
    },
    {
      ageRange: '9-11 months',
      context:
        'This is when many babies learn to wave, usually by imitating you. Some babies wave enthusiastically right away, while others need to see it dozens of times before they try it themselves. You might see a partial wave — a hand opening and closing — before it becomes a full wave. All of that counts.',
    },
    {
      ageRange: '12-14 months',
      context:
        'Most babies are waving by now, but if yours isn\'t, look at the bigger picture. Is your baby imitating other things you do (clapping, making sounds, banging toys)? Are they engaging socially — making eye contact, smiling at people, showing you things? If so, the wave itself is less important than the social skills behind it.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your toddler still isn\'t waving and also isn\'t using other gestures (pointing, reaching up to be picked up, shaking head no), it\'s worth mentioning to your pediatrician. It\'s not that waving alone is a concern, but the absence of gestures as a group can indicate that social communication development needs a closer look.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and uses other social gestures like smiling, reaching, or clapping, even if they haven\'t figured out waving yet.',
    'Your baby waves inconsistently — they do it sometimes but not every time you prompt them. This is completely typical for a new skill.',
    'Your baby waves at objects, their reflection, or the wrong direction — they\'re learning the concept, and accuracy comes later.',
    'Your baby imitates other actions (clapping, peek-a-boo, making sounds) but hasn\'t picked up waving specifically.',
    'Your baby was premature — adjusted age applies to social milestones too.',
  ],
  whenToMention: [
    'Your baby is over 12 months and doesn\'t wave, clap, or use any imitative gestures at all.',
    'Your baby doesn\'t seem to imitate any of your actions or expressions — imitation is a fundamental social learning skill.',
    'Your baby isn\'t waving and also doesn\'t seem interested in social games like peek-a-boo or pat-a-cake.',
  ],
  whenToActNow: [
    'Your baby was waving and other gestures and has stopped — any loss of previously acquired social skills needs prompt evaluation.',
    'Your baby is over 15 months with no gestures of any kind (no waving, pointing, reaching up, head shaking) combined with limited eye contact and no words.',
  ],
  relatedMilestones: [
    'social-emotional-waving',
    'social-emotional-imitation',
    'social-emotional-joint-attention',
    'social-emotional-pointing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker — Important Milestones: Your Baby By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Social Development: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Social-Development-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO — Early childhood development and disability: A discussion paper',
      url: 'https://www.who.int/publications/i/item/early-childhood-development-and-disability-a-discussion-paper',
    },
  ],
};
