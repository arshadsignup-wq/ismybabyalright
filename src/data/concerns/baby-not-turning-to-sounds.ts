import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-turning-to-sounds',
  title: 'Baby Not Turning to Sounds',
  category: 'communication',
  searchTerms: [
    'baby not turning to sounds',
    'baby doesn\'t look when I call',
    'baby not responding to noise',
    'baby ignoring sounds',
    'infant not turning head to sound',
    'baby not localizing sound',
    'baby doesn\'t react to loud noise',
    'when should baby turn to sounds',
    'baby not orienting to voice',
    'baby hearing concerns',
  ],
  quickAnswer:
    'Babies typically begin turning toward sounds around 4 to 6 months of age. If your baby isn\'t consistently looking toward voices or noises by 6 months, it\'s worth having their hearing checked. In many cases, something as simple as fluid in the ears can temporarily affect hearing, and early identification leads to the best outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first few months, babies respond to sounds by startling, quieting, or widening their eyes - but they may not turn their head toward the source yet. Newborns are still developing the neck strength and coordination needed to localize sound. If your baby startles at loud noises and seems to calm when they hear your voice, their hearing is likely working, even if they\'re not turning yet.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4 to 6 months, most babies start turning their head toward sounds, especially familiar voices and interesting noises. They may look toward a rattle, turn when you call from across the room, or respond to music. If your baby doesn\'t seem to notice sounds at all by 6 months - or has stopped reacting to them - talk to your pediatrician about a hearing screening.',
    },
    {
      ageRange: '6-9 months',
      context:
        'At this age, sound localization should be well established. Your baby should reliably turn toward voices, respond when their name is called, and show interest in environmental sounds. If they consistently don\'t react to sounds, especially their name, a hearing evaluation is important. Ear infections or fluid buildup from colds can sometimes temporarily reduce hearing at this age.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By 9-12 months, babies should respond to their name, turn to look at sounds coming from different directions, and react to both loud and soft sounds. If your baby doesn\'t reliably turn to sounds or their name at this age, hearing should be tested as soon as possible. Early identification of hearing issues is critical because hearing is the foundation for speech and language development.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and startles at loud sounds but doesn\'t yet turn their head - this is developmentally appropriate.',
    'Your baby turns to sounds sometimes but not every single time - babies can be focused on something else or simply not interested in every noise.',
    'Your baby recently had a cold or ear infection and seems temporarily less responsive to sounds - fluid can muffle hearing temporarily.',
    'Your baby responds well to voices and music but ignores repetitive background noise - this is normal selective attention.',
  ],
  whenToMention: [
    'Your baby is 6 months or older and doesn\'t consistently turn toward sounds or voices.',
    'Your baby doesn\'t seem to notice or react when you speak to them from across the room.',
    'Your baby passed their newborn hearing screening but seems less responsive to sounds now than they used to be.',
  ],
  whenToActNow: [
    'Your baby doesn\'t startle or react to any loud sounds at any age - this could indicate significant hearing loss and needs urgent evaluation.',
    'Your baby used to respond to sounds and has completely stopped - any loss of previously established responses should be evaluated right away.',
  ],
  relatedMilestones: [
    'language-responds-to-name',
    'language-cooing',
    'language-babbling',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby By Six Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Hearing Assessment in Infants and Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Your Baby\'s Hearing and Communicative Development Checklist',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
  ],
};
