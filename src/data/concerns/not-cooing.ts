import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-cooing',
  title: 'Baby Not Cooing',
  category: 'communication',
  searchTerms: [
    'baby not cooing',
    'when do babies coo',
    'baby not making sounds',
    'baby not vocalizing',
    '2 month old not cooing',
    '3 month old not cooing',
    'baby only cries no cooing',
    'when should baby start cooing',
    'baby quiet no sounds',
    'baby not talking at 3 months',
  ],
  quickAnswer:
    'Cooing  -  those soft "ooh" and "aah" vowel sounds  -  typically begins between 6 and 8 weeks of age and becomes more frequent by 2-3 months. Some babies start a bit later, especially if they were born prematurely. If your baby is socially engaged, making eye contact, and smiling, cooing is likely just around the corner.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'During the first 6 weeks, crying is your baby\'s primary form of communication, and that\'s completely expected. Some babies begin making soft vowel-like sounds toward the end of this period, but most haven\'t started cooing yet. Focus on responding to your baby\'s cries  -  this back-and-forth teaches them that communication gets a response.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'This is when cooing typically emerges. Your baby may start with quiet "ooh" or "aah" sounds, often during calm, alert moments  -  especially during face-to-face interaction with you. Premature babies may start cooing later based on their adjusted age. Talking, singing, and responding to your baby\'s sounds encourages more vocalization.',
    },
    {
      ageRange: '3-4 months',
      context:
        'By 3-4 months, most babies are cooing regularly, laughing, and beginning to experiment with a wider variety of sounds including squeals and growls. If your baby is not making any vowel sounds by 4 months (adjusted age for preemies), it\'s worth mentioning to your pediatrician. A hearing screen may be recommended.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies transition from cooing to vocal play and early babbling during this period. If your baby has never cooed or made vowel sounds by 4-5 months, your pediatrician will likely want to check hearing and may recommend a developmental evaluation. Early identification of any issues leads to the best outcomes.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 weeks old  -  many babies haven\'t started cooing yet at this age.',
    'Your baby was born prematurely and you\'re calculating based on adjusted age  -  a baby born 6 weeks early may not coo until closer to 3-4 months chronological age.',
    'Your baby coos in some settings but not others  -  babies often vocalize more during calm, one-on-one interaction than in busy or stimulating environments.',
    'Your baby is making eye contact, smiling socially, and seems engaged even if cooing hasn\'t started yet.',
  ],
  whenToMention: [
    'Your baby is 3-4 months old (adjusted age) and has never made any vowel sounds or cooing noises.',
    'Your baby seems unusually quiet overall  -  rarely cries and makes very few sounds of any kind.',
    'Your baby doesn\'t seem to react to your voice or turn toward sounds.',
  ],
  whenToActNow: [
    'Your baby does not respond to any sounds  -  no startling at loud noises, no turning toward voices  -  at any age. This suggests a possible hearing concern that needs prompt evaluation.',
    'Your baby was cooing and has completely stopped making sounds, especially if accompanied by decreased social engagement.',
  ],
  relatedMilestones: [
    'cooing',
    'social-smile',
    'hearing',
    'babbling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 1 to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-3-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2mo.html',
    },
  ],
};
