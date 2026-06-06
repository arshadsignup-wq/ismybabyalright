import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-cooing-at-2-months',
  title: 'Baby Not Cooing at 2 Months',
  category: 'communication',
  searchTerms: [
    'baby not cooing at 2 months',
    '2 month old not making sounds',
    'baby not cooing yet',
    'when do babies start cooing',
    'no cooing at 8 weeks',
    'baby silent at 2 months',
    'newborn not making vowel sounds',
    'baby not vocalizing at 2 months',
    'when should baby coo',
    'late cooing baby',
  ],
  quickAnswer:
    'Cooing typically begins between 6 and 8 weeks of age, with babies making soft vowel-like sounds such as "ooh" and "aah." If your baby is not cooing by 2 months, it may simply be at the later end of the normal range, but it is worth monitoring and mentioning at your next well-child visit.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Newborns primarily communicate through crying. Reflexive sounds like grunts and sighs are normal. Cooing has not yet developed at this stage, and the absence of vowel sounds is completely expected.',
    },
    {
      ageRange: '6-8 weeks',
      context:
        'Cooing typically emerges around this time. You may hear soft "ooh," "aah," or "goo" sounds, especially during calm, alert moments. Some babies start a bit later, particularly if they were born premature. Talking and singing to your baby encourages early vocalizations.',
    },
    {
      ageRange: '2-3 months',
      context:
        'Most babies are cooing regularly by now, often in response to a caregiver\'s voice or face. If your baby is 2 months old and not yet cooing, consider whether they respond to sounds and voices. A baby who is alert, makes eye contact, and seems to listen is likely developing normally even if cooing is slightly delayed.',
    },
    {
      ageRange: '3-4 months',
      context:
        'By 3 to 4 months, babies typically coo frequently and begin experimenting with pitch and volume. If cooing has still not emerged by this age, it is important to discuss with your pediatrician, who may recommend a hearing evaluation.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies transition from cooing to vocal play, adding squeals, growls, and raspberries. If your baby has never cooed or made vowel sounds by this age, a hearing assessment and developmental evaluation are recommended to rule out any underlying concerns.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 weeks old and communicating primarily through crying and reflexive sounds',
    'Your baby makes occasional soft sounds but not frequent or sustained cooing yet',
    'Your baby was born premature and is developing on an adjusted-age timeline',
    'Your baby responds to your voice with alertness, eye contact, or changes in facial expression even without cooing',
  ],
  whenToMention: [
    'Your baby is past 2 months with no vowel-like sounds or cooing at all',
    'Your baby does not seem to react to your voice or other sounds in the environment',
    'Your baby was cooing and has become quieter or stopped vocalizing',
  ],
  whenToActNow: [
    'Your baby does not startle or react to loud sounds, suggesting a possible hearing concern',
    'Your baby shows no interest in faces, does not make eye contact, and is completely silent by 3 months',
  ],
  relatedMilestones: ['cooing', 'social-smile', 'hearing', 'eye-tracking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-cooing', 'baby-quiet-not-vocalizing', 'baby-not-making-vowel-sounds'],
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
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Birth to One Year: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/01/',
    },
  ],
};
