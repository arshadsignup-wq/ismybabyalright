import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'auditory-processing-disorder-toddler',
  title: 'Auditory Processing Concerns in Toddlers',
  category: 'medical',
  searchTerms: [
    'auditory processing disorder toddler',
    'toddler hears but doesn\'t understand',
    'child not processing sounds',
    'toddler difficulty understanding speech',
    'auditory processing delay baby',
    'toddler can hear but ignores words',
    'central auditory processing disorder child',
    'toddler trouble following verbal instructions',
  ],
  quickAnswer:
    'Auditory processing disorder (APD) refers to difficulty processing and interpreting sounds despite having normal hearing. While APD cannot be formally diagnosed until around age 7, some toddlers show early signs such as difficulty understanding speech in noisy environments, trouble following verbal directions, or delayed language development despite normal hearing tests. If your toddler hears well but seems to struggle with understanding spoken language, early speech-language evaluation can identify areas of need and guide supportive interventions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Auditory processing concerns are not identifiable at this age. Your baby should be responding to sounds by startling at loud noises and calming to familiar voices. If your baby is not responding to sounds at all, the first step is a hearing evaluation. At this stage, focus on ensuring your baby passed their newborn hearing screening.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age should be turning toward sounds and responding to your voice. It is far too early to consider auditory processing concerns. If your baby seems to hear sounds but is not turning toward voices or engaging with speech sounds, this could be related to many things including temperament, developmental variation, or hearing differences  -  discuss your observations with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies should be responding to their name, babbling, and beginning to understand simple words. If your baby hears environmental sounds but seems less responsive to speech, or if babbling is delayed despite normal hearing, these observations are worth tracking. At this age, the focus should be on ruling out hearing loss and monitoring speech-language development rather than considering APD.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who can hear normally but struggle to understand speech in noisy settings, have difficulty following simple directions, or show language delays may be showing early signs that could later be associated with auditory processing difficulties. A formal APD diagnosis requires specialized testing that is not reliable until age 7 or older. In the meantime, a speech-language evaluation can identify receptive language delays and guide therapy. Strategies like reducing background noise, speaking face-to-face, and using short clear sentences can help.',
    },
  ],
  whenNormal: [
    'Your toddler sometimes ignores instructions when absorbed in play or in a noisy environment  -  this is normal selective attention.',
    'Your toddler needs you to repeat things occasionally  -  all young children are still developing listening skills.',
    'Your child hears and responds well in quiet settings but gets overwhelmed in loud, chaotic environments  -  this is common for young children.',
    'Your toddler has passed a hearing test and is meeting speech milestones, even if they sometimes seem distracted.',
  ],
  whenToMention: [
    'Your toddler consistently has trouble understanding simple directions despite hearing normally on testing.',
    'Your child seems to hear sounds but struggles to make sense of speech, often needing frequent repetition even in quiet settings.',
    'Your toddler has delayed language development and you suspect the difficulty is with understanding rather than producing speech.',
  ],
  whenToActNow: [
    'Your toddler has significant receptive language delays (not understanding words or commands appropriate for their age) along with behavioral frustration  -  a comprehensive speech-language evaluation should be prioritized.',
    'Your child is losing previously acquired language skills or suddenly seeming unable to understand speech  -  this warrants urgent evaluation to rule out hearing loss or neurological causes.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Auditory Processing Disorder. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Auditory-Processing-Disorder.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Auditory Processing Disorder.',
      url: 'https://www.nidcd.nih.gov/health/auditory-processing-disorder',
    },
  ],
};
