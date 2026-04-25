import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-laughing',
  title: 'Baby Not Laughing',
  category: 'communication',
  searchTerms: [
    'baby not laughing',
    'when do babies laugh',
    'baby doesn\'t laugh',
    'baby not giggling',
    '4 month old not laughing',
    '5 month old not laughing',
    'baby smiles but doesn\'t laugh',
    'when should baby laugh',
    'baby never laughs',
    'baby not laughing out loud',
  ],
  quickAnswer:
    'Most babies laugh for the first time between 3 and 4 months, but some perfectly healthy babies don\'t laugh until 5-6 months. If your baby is smiling socially, making eye contact, and showing joy through facial expressions and body language, they may simply express happiness differently  -  not every baby is a big laugher.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Laughter isn\'t expected yet during the first 3 months. Your baby is focused on social smiling (which usually appears around 6-8 weeks), cooing, and learning to engage with faces. These social skills are the foundation for laughter. Some babies may chuckle by the end of this period, but most haven\'t reached that stage.',
    },
    {
      ageRange: '3-5 months',
      context:
        'This is the typical window for first laughs. Laughter often emerges in response to physical play  -  gentle bouncing, tickling, or silly sounds. Some babies are more reserved and may grin broadly without laughing out loud. What\'s most important is that your baby shows social engagement and pleasure in your interactions, not necessarily an audible laugh.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies are laughing by this age, though some laugh rarely. If your baby smiles, coos, and is socially engaged but simply doesn\'t laugh much, this may just be their temperament. However, if your baby doesn\'t smile, doesn\'t seem to enjoy social interaction, or is very passive, it\'s worth discussing with your pediatrician.',
    },
    {
      ageRange: '7-12 months',
      context:
        'By this age, most babies laugh during play and social games like peekaboo. A baby who has never laughed by 7-8 months and also shows limited social smiling or engagement should be evaluated. However, a baby who laughs rarely but is otherwise happy, interactive, and meeting other milestones may simply have a more serious temperament.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and smiling socially  -  laughter typically comes after social smiling is well established.',
    'Your baby smiles and shows excitement through kicking, arm-waving, and facial expressions but just doesn\'t laugh out loud much  -  some babies express joy more quietly.',
    'Your baby laughs in some situations (like during physical play) but not in others  -  this is normal selectiveness.',
    'Your baby was a bit late to social smile but is now smiling regularly  -  laughter often follows a few weeks after consistent smiling.',
  ],
  whenToMention: [
    'Your baby is over 6 months and has never laughed or chuckled, even briefly.',
    'Your baby rarely smiles and doesn\'t seem to enjoy social interaction or face-to-face play.',
    'Your baby doesn\'t respond emotionally to your voice, singing, or playful sounds.',
    'Your baby seems unusually passive or withdrawn  -  they don\'t reach for you or show excitement when you approach.',
  ],
  whenToActNow: [
    'Your baby was laughing and smiling and has stopped  -  any regression in social-emotional responses warrants prompt evaluation.',
    'Your baby over 6 months shows no social smiling, no laughter, no eye contact, and no interest in people  -  this cluster of concerns should be evaluated promptly.',
  ],
  relatedMilestones: [
    'social-smile',
    'social-emotional-joint-attention',
    'cooing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-4-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-4mo.html',
    },
  ],
};
