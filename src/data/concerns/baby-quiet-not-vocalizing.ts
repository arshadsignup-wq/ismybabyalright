import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-quiet-not-vocalizing',
  title: 'Baby Is Very Quiet and Not Vocalizing',
  category: 'communication',
  searchTerms: [
    'baby very quiet',
    'baby not making sounds',
    'quiet baby not vocalizing',
    'silent baby',
    'baby doesn\'t make noise',
    'baby rarely coos or babbles',
    'baby unusually quiet',
    'my baby never makes sounds',
    'baby not vocal at all',
    'is it normal for a baby to be quiet',
    'baby not noisy enough',
  ],
  quickAnswer:
    'Some babies are naturally quieter than others, just like some adults are more talkative than others. However, all babies should be making some sounds - cooing by 3-4 months and babbling by 7-9 months. If your baby is very quiet and rarely makes any vocal sounds, it\'s important to have their hearing checked and discuss their development with your pediatrician. A quiet baby isn\'t always a concern, but it\'s worth investigating.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns communicate mainly through crying. Between cries, they may be quite quiet, and that\'s normal. Some newborns are naturally calmer and less vocal than others. As long as your baby has a strong cry and is responsive to your voice (they calm, stare, or startle), their vocal development is on track for this early stage.',
    },
    {
      ageRange: '2-4 months',
      context:
        'By 2 to 4 months, babies should begin cooing - making soft vowel sounds like "ooo" and "aah." They often coo during social interaction, when looking at your face, or when content. If your baby is 4 months old and almost never makes any sounds beyond crying, a conversation with your pediatrician is a good idea. Hearing should be checked if it hasn\'t been recently.',
    },
    {
      ageRange: '4-7 months',
      context:
        'Between 4 and 7 months, babies typically become more vocal - laughing, squealing, blowing raspberries, and beginning to experiment with different sounds. If your baby is still very quiet at 6 months with minimal cooing and no sound experimentation, this warrants attention. Some babies are quieter by temperament, but they should still be making some variety of sounds.',
    },
    {
      ageRange: '7-12 months',
      context:
        'By 7 to 9 months, babbling with consonant-vowel combinations ("bababa," "mamama") should be happening. A baby who is very quiet at this age - not babbling, not experimenting with sounds, not trying to "talk" to you - needs a hearing evaluation and speech assessment. The transition from quiet cooing to active babbling is a critical step toward spoken language.',
    },
    {
      ageRange: '12+ months',
      context:
        'After 12 months, if your baby is still very quiet with minimal babbling and no word attempts, early intervention should begin. The earlier a quiet baby gets support, the better their outcomes. Speech therapy for babies this age often focuses on building vocal play and sound variety, which lays the groundwork for first words.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and is quiet between cries but has a strong cry and responds to your voice.',
    'Your baby makes sounds, but they\'re less frequent than other babies you know - some babies vocalize less often but still hit milestones on time.',
    'Your baby is quieter during certain times of day (when tired or just waking up) but is more vocal during social interaction and play.',
    'Your baby was premature - adjust for their corrected age when evaluating sound milestones.',
  ],
  whenToMention: [
    'Your baby is 4 months or older (corrected age) and rarely coos or makes any sounds beyond crying.',
    'Your baby makes some sounds but there\'s been no increase in variety or frequency over the past 2-3 months.',
    'Your baby doesn\'t seem to try to "talk" to you during face-to-face interaction - no back-and-forth vocalizing.',
  ],
  whenToActNow: [
    'Your baby is 9 months or older with almost no babbling and very limited vocalizations of any kind - hearing and speech evaluation needed promptly.',
    'Your baby was vocalizing and has become increasingly quiet, losing sounds they previously made - any regression requires immediate evaluation.',
  ],
  relatedMilestones: [
    'language-cooing',
    'language-babbling',
    'language-responds-to-name',
    'language-imitates-sounds',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Your Baby\'s Hearing and Communicative Development Checklist',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: Speech Milestones for Babies',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby By Six Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
  ],
};
