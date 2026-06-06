import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-responds-to-sound-but-not-speech',
  title: 'Baby Responds to Sounds but Not Speech',
  category: 'communication',
  searchTerms: [
    'baby responds to sound not speech',
    'baby hears sounds but ignores talking',
    'baby reacts to noise not voice',
    'baby doesn\'t respond to speech',
    'baby hears music but not words',
    'baby turns to sounds not talking',
    'auditory processing baby',
    'baby sound vs speech response',
    'baby ignores speech but hears',
    'baby selective sound response',
  ],
  quickAnswer:
    'A baby who responds to environmental sounds like music, door slamming, or dogs barking but seems to ignore human speech likely has adequate hearing. This pattern may indicate a preference for certain frequencies, a social communication difference, or early signs of a receptive language or processing difficulty. If this pattern is consistent, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies at this age may show stronger startle responses to sudden loud sounds than to speech, which is softer and more constant. They may turn to a loud noise but not consistently track a speaking voice. This is generally normal as auditory processing is still developing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies should be increasingly attentive to human speech, showing preference for voices over other sounds. If your baby consistently turns to music or noise but does not respond to your voice, it is worth monitoring. Some babies are simply more attuned to novel sounds.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By this age, babies typically show clear preference for speech, especially their native language. They turn to their name, respond to vocal tone, and engage with speakers. A baby who responds well to environmental sounds but consistently ignores speech should be evaluated.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babies understand several words and respond to their name reliably. If your baby clearly hears sounds but does not respond to speech, this may indicate an auditory processing difference or a social communication concern. A comprehensive hearing and developmental evaluation is recommended.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers should understand many words and follow simple directions. A child who hears sounds well but does not process speech normally may benefit from an auditory processing evaluation and speech-language assessment.',
    },
  ],
  whenNormal: [
    'Your young baby startles to loud sounds but does not yet consistently turn to your voice',
    'Your baby seems more interested in novel sounds than familiar speech temporarily',
    'Your baby responds to your voice in quiet settings but seems less responsive in noisy environments',
    'Your baby is under 4 months and auditory preferences are still developing',
  ],
  whenToMention: [
    'Your baby consistently turns to environmental sounds but rarely responds to human speech after 6 months',
    'Your baby seems to not understand any words despite responding normally to other sounds by 12 months',
    'The pattern is consistent and not explained by the environment being noisy',
  ],
  whenToActNow: [
    'Your baby shows no social engagement alongside ignoring speech, suggesting a broader developmental concern',
    'Your baby has lost responsiveness to speech that they previously showed',
  ],
  relatedMilestones: ['hearing', 'responds-to-name', 'language-comprehension', 'social-engagement'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-responding-to-sounds', 'hearing-loss-signs-baby', 'auditory-processing-disorder-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing and Making Sounds: Your Baby\'s Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hearing-and-Making-Sounds.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Auditory Processing Disorder.',
      url: 'https://www.asha.org/public/hearing/auditory-processing-disorder/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Your Baby\'s Hearing.',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
  ],
};
