import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-making-eye-contact',
  title: 'Not Making Eye Contact',
  category: 'behavior',
  searchTerms: [
    'baby not making eye contact',
    'newborn won\'t look at me',
    'baby avoids eye contact',
    'when do babies make eye contact',
    'baby doesn\'t look at my face',
    'no eye contact baby autism',
    'baby looks away when I look at them',
    'infant not tracking faces',
    'baby won\'t look into my eyes',
    'when should baby make eye contact',
  ],
  quickAnswer:
    'Eye contact develops gradually over the first few months of life, and newborns can only focus on objects about 8-12 inches away. Most babies are making consistent eye contact and tracking faces by 2-3 months, so very young babies who seem to look past you are usually developing normally.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns have very limited visual range and can only focus clearly on things 8-12 inches from their face, roughly the distance to a caregiver\'s face during feeding. Brief moments of eye contact are normal at this stage, but sustained gazing develops later. Don\'t worry if your newborn seems to look through you or past you.',
    },
    {
      ageRange: '1-2 months',
      context:
        'Babies begin to show more interest in faces and may start to hold your gaze for short periods. You might notice your baby studying your face during quiet, alert moments. This is an exciting time, but the duration and consistency of eye contact is still developing.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is when most babies start making regular eye contact and actively tracking faces as they move. Social smiling in response to seeing a familiar face is a wonderful sign. If your baby is consistently engaging with your face and following your movement by 3 months, their visual social development is on track.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By now, babies are typically making strong eye contact, smiling at familiar people, and looking between objects and caregivers. They may also start looking at where you point. If your baby is still rarely meeting your gaze at this age, it\'s worth mentioning to your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age use eye contact as part of social communication, looking at you for reactions, sharing attention, and checking in. Persistent avoidance of eye contact by 6 months, especially combined with limited social smiling or not responding to their name, is something to discuss with your paediatrician.',
    },
  ],
  whenNormal: [
    'Your newborn only makes brief eye contact or seems to look past you, as their visual range is very limited',
    'Your baby makes eye contact during feeding or calm moments but looks away when overstimulated',
    'Your baby is under 3 months and is starting to track faces but not yet doing so consistently',
    'Your baby breaks eye contact to look at interesting objects or movements nearby, showing healthy curiosity',
    'Your baby makes eye contact with some people or in some settings but seems shyer in new environments',
  ],
  whenToMention: [
    'Your baby is over 3 months and rarely makes eye contact even during calm, face-to-face interactions',
    'Your baby seems to actively turn away from faces rather than just being distracted',
    'Your baby is not socially smiling by 2-3 months, alongside limited eye contact',
    'You notice limited eye contact combined with other social differences like not responding to their name by 9 months',
  ],
  whenToActNow: [
    'Your baby\'s eyes appear misaligned, crossed, or seem to wander in different directions after 4 months of age, as this could indicate a vision problem',
    'Your baby shows a sudden loss of eye contact or social engagement they previously had, at any age',
  ],
  relatedMilestones: [
    'social-smile',
    'eye-tracking',
    'responds-to-name',
    'joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Milestones: Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social and Emotional Development: Birth to 3 Months.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-Birth-to-3-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Development and Milestones.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
