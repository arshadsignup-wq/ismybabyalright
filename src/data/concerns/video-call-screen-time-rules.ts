import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'video-call-screen-time-rules',
  title: 'Video Call Screen Time Rules',
  category: 'behavior',
  searchTerms: [
    'do video calls count as screen time for babies',
    'FaceTime with grandparents screen time',
    'video calling with toddler',
    'Zoom calls baby development',
    'are video calls okay for babies under 18 months',
    'toddler screen time video chat exception',
    'baby FaceTime family long distance',
    'how much video calling is okay for toddler',
  ],
  quickAnswer:
    'The AAP makes an explicit exception for video calls when discussing screen time guidelines. Unlike passive screen viewing, video calls are interactive and involve live, responsive social interaction — which is how young children learn language and social skills. Video calls with family members are considered appropriate even for babies under 18 months. However, the quality of the interaction matters — a toddler watching someone on a screen without engaging is passive viewing, not a video call.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies cannot visually focus well enough to engage meaningfully with a screen. Brief video calls where grandparents or distant family members can see and talk to the baby are fine but are more for the adults\' benefit. The baby benefits from hearing familiar voices.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to show interest in faces on screens and may smile at familiar faces during video calls. Keep calls short (5-10 minutes) as babies tire quickly. The interaction is most valuable when the adult on screen is responsive and engaging — talking, singing, and waiting for the baby to respond.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies can engage more actively with video calls — waving, babbling back, and showing toys to the camera. This is genuinely interactive and supports social development. Help facilitate by pointing at the screen and narrating: "Look, it\'s Grandma! Can you wave to Grandma?"',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can have increasingly meaningful video call interactions. They may show toys, perform for the camera, or have simple conversations. Video calls remain exempt from the 1-hour screen time limit because they are interactive social experiences. However, if your toddler is just passively watching a video call without engaging, it functions more like passive screen time.',
    },
  ],
  whenNormal: [
    'Your baby or toddler video calls with family members regularly and this is counted separately from entertainment screen time',
    'Your toddler sometimes loses interest partway through a video call — attention spans are short at this age',
    'Your baby does not seem to recognize the person on screen — this develops gradually over time with repeated exposure',
    'Video calls are brief and interactive, with the remote person actively engaging with your child',
  ],
  whenToMention: [
    'Your toddler seems to rely on video calls the same way they rely on passive screen entertainment — watching for extended periods without true engagement',
    'Your child becomes extremely distressed when video calls end, similar to screen-removal tantrums',
    'You have concerns about your child\'s ability to connect with people — both on screen and in person',
  ],
  whenToActNow: [
    'Your child shows no interest in interacting with faces either on screen or in person, avoids eye contact, and does not respond to social overtures — this is a concern about social development, not screen time',
    'Screen time of any kind (including video calls left running as background) is replacing sleep, active play, or face-to-face interaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'screen-time-addiction-toddler',
    'tablet-dependency-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics. 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Beyond Screen Time: A Parent\'s Guide to Media Use. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/Media/Pages/Where-We-Stand-TV-Viewing-Time.aspx',
    },
  ],
};
