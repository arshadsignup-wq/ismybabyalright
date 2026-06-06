import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-voice-hoarse-raspy',
  title: 'Toddler Has a Persistently Hoarse or Raspy Voice',
  category: 'communication',
  searchTerms: [
    'toddler hoarse voice',
    'toddler raspy voice',
    'toddler voice sounds rough',
    'toddler chronic hoarseness',
    'toddler scratchy voice',
    'child hoarse voice persistent',
    'toddler voice not clearing',
    'toddler husky voice',
    'toddler voice disorder',
    'toddler vocal quality problems',
  ],
  quickAnswer:
    'A persistently hoarse or raspy voice in a toddler that lasts more than 2 to 3 weeks may indicate vocal cord irritation, vocal nodules, or another voice disorder. Common causes include frequent screaming, yelling, or voice overuse. If your child\'s voice is chronically hoarse, an evaluation by an ear, nose, and throat (ENT) specialist is recommended.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies may sound hoarse after prolonged crying. If the hoarseness resolves when your baby is calm, it is typically not a concern. A consistently weak or hoarse cry from birth should be mentioned to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who scream, yell, or cry frequently may develop temporary hoarseness. If the hoarseness comes and goes with voice use, it is usually benign. Persistent hoarseness lasting more than 2 to 3 weeks warrants a medical evaluation.',
    },
    {
      ageRange: '24-36 months',
      context:
        'This is an age when vocal abuse is common as toddlers express strong emotions through yelling and screaming. Persistent hoarseness may indicate developing vocal nodules. An ENT evaluation with laryngoscopy can visualize the vocal cords and determine the cause.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Voice disorders are most commonly identified around preschool age. Chronic hoarseness, breathiness, or voice breaks during speech should be evaluated. Treatment typically focuses on teaching healthy voice habits rather than surgery.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Voice therapy with a speech-language pathologist can teach children vocal hygiene techniques, such as reducing yelling, staying hydrated, and using an appropriate volume. Most vocal nodules in children resolve with behavior modification alone.',
    },
  ],
  whenNormal: [
    'Your toddler sounds hoarse after a day of yelling or playing loudly but their voice clears within a day or two',
    'Your toddler has a hoarse voice during or just after an illness like a cold',
    'Your toddler\'s voice sounds slightly different than other children\'s but is not persistently hoarse',
    'Your toddler is hoarse occasionally but not most of the time',
  ],
  whenToMention: [
    'Your toddler\'s voice has been hoarse for more than 2 to 3 weeks',
    'Your toddler\'s voice is consistently rough, breathy, or strained',
    'Your toddler\'s voice frequently breaks or cuts out during speech',
  ],
  whenToActNow: [
    'Your toddler has sudden voice loss with difficulty breathing, which could indicate a serious airway issue',
    'Your baby has had a weak, hoarse, or absent cry from birth',
  ],
  relatedMilestones: ['voice-quality', 'speech-clarity', 'vocal-health'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-vocal-nodules-signs', 'toddler-voice-too-loud', 'toddler-nasal-voice-quality'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Voice Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/voice-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hoarseness in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hoarseness.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Voice Disorders.',
      url: 'https://www.nidcd.nih.gov/health/voice',
    },
  ],
};
