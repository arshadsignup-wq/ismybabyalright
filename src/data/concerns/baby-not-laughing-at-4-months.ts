import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-laughing-at-4-months',
  title: 'Baby Not Laughing at 4 Months',
  category: 'communication',
  searchTerms: [
    'baby not laughing at 4 months',
    '4 month old not laughing',
    'when do babies laugh',
    'baby doesn\'t laugh yet',
    'no laughter at 4 months',
    'baby not giggling',
    'when should baby laugh',
    'late laughing baby',
    'baby smiles but doesn\'t laugh',
    'baby not laughing out loud',
  ],
  quickAnswer:
    'Most babies produce their first laugh between 3 and 4 months of age, but some perfectly healthy babies do not laugh until 5 or 6 months. If your baby is smiling socially, making eye contact, and cooing, a slightly late laugh is usually nothing to worry about.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns may show reflexive smiles during sleep, but social smiling and laughter have not yet developed. Babies communicate primarily through crying and early cooing at this stage.',
    },
    {
      ageRange: '2-3 months',
      context:
        'Social smiles emerge around 6 to 8 weeks. Babies begin responding to faces and voices with smiles and increased alertness. True laughter typically has not appeared yet, though some early laughers may chuckle by the end of this period.',
    },
    {
      ageRange: '3-4 months',
      context:
        'This is when many babies produce their first genuine laugh, often in response to physical play like tickling, bouncing, or funny sounds. However, there is wide variation in when laughter appears. Some babies are more serious or observant by temperament and laugh later.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Most babies are laughing regularly by now. If your baby is 4 to 5 months old, smiling socially, engaging with you, and making sounds but has not laughed yet, they are likely developing normally. If by 6 months there is still no laughter and limited social engagement, mention it to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age laugh frequently during social games and physical play. If your baby has never laughed and also shows limited facial expressions, reduced eye contact, or no babbling, a developmental evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and smiling socially but has not produced a belly laugh yet',
    'Your baby has a calm or serious temperament and smiles readily but laughs infrequently',
    'Your baby laughs in some situations like tickling but not others',
    'Your baby is cooing, making eye contact, and engaging socially even without frequent laughter',
  ],
  whenToMention: [
    'Your baby is over 6 months and has never laughed or giggled',
    'Your baby rarely smiles and does not seem to enjoy social interaction',
    'Your baby shows limited facial expressions overall along with absent laughter',
  ],
  whenToActNow: [
    'Your baby was laughing and has suddenly stopped all social engagement including smiling and vocalizing',
    'Your baby shows no response to playful interaction, makes no eye contact, and does not react to familiar voices by 6 months',
  ],
  relatedMilestones: ['social-smile', 'cooing', 'responds-to-name', 'joint-attention'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-laughing', 'baby-flat-affect-no-expression', 'no-social-smile'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-4mo.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Your Baby\'s Development: 4 Months.',
      url: 'https://www.zerotothree.org/resource/your-babys-development-4-months/',
    },
  ],
};
