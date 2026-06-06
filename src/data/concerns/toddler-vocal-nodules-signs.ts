import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-vocal-nodules-signs',
  title: 'Signs of Vocal Nodules in Children',
  category: 'communication',
  searchTerms: [
    'vocal nodules child',
    'toddler vocal nodules signs',
    'child vocal cord nodules',
    'screaming causing nodules',
    'child voice nodules',
    'vocal cord damage child',
    'voice overuse child',
    'singer\'s nodes child',
    'child voice hoarse from yelling',
    'vocal abuse toddler',
  ],
  quickAnswer:
    'Vocal nodules are small callus-like growths on the vocal cords caused by voice overuse or abuse, such as frequent yelling, screaming, or straining. In children, they cause chronic hoarseness, a breathy voice quality, and voice fatigue. Unlike in adults, vocal nodules in children usually resolve with voice therapy and behavioral changes rather than surgery.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Vocal nodules are uncommon at this age but can develop in toddlers who scream or cry excessively. If your toddler has been persistently hoarse for several weeks, mention this to your pediatrician.',
    },
    {
      ageRange: '24-36 months',
      context:
        'This age is characterized by big emotions and frequent yelling, which can strain the vocal cords. Occasional hoarseness from a day of yelling is normal, but chronic hoarseness lasting weeks suggests a possible voice disorder.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Vocal nodules are more commonly diagnosed in preschool-age children. Boys are more frequently affected. Signs include chronic hoarseness, a breathy or rough voice, voice breaks, and increased effort to speak. An ENT evaluation with laryngoscopy can confirm the diagnosis.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Voice therapy with a speech-language pathologist is the primary treatment. Therapy teaches children vocal hygiene including drinking more water, reducing yelling, using a moderate volume, and avoiding throat clearing. Most nodules resolve with these behavioral changes.',
    },
    {
      ageRange: '6-10 years',
      context:
        'Many children outgrow vocal nodules as their larynx grows during puberty. Surgery is rarely recommended in children. Continued voice therapy and vocal hygiene habits help manage symptoms.',
    },
  ],
  whenNormal: [
    'Your toddler is hoarse after a day of yelling or playing but their voice returns to normal within a day or two',
    'Your child is hoarse during or after a cold or respiratory illness',
    'Your child has occasional voice changes that resolve quickly',
  ],
  whenToMention: [
    'Your child has been hoarse for more than 2 to 3 weeks with no improvement',
    'Your child\'s voice quality is consistently rough, breathy, or strained',
    'Your child\'s voice frequently breaks or gives out during conversation',
  ],
  whenToActNow: [
    'Your child has sudden voice loss with breathing difficulty',
    'Your child\'s hoarseness is accompanied by difficulty swallowing or pain',
  ],
  relatedMilestones: ['voice-quality', 'vocal-health', 'speech-clarity'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-voice-hoarse-raspy', 'toddler-voice-too-loud', 'toddler-nasal-voice-quality'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Vocal Fold Nodules and Polyps.',
      url: 'https://www.asha.org/public/speech/disorders/vocal-fold-nodules-and-polyps/',
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
        'National Institute on Deafness and Other Communication Disorders. Vocal Fold Paralysis.',
      url: 'https://www.nidcd.nih.gov/health/vocal-fold-paralysis',
    },
  ],
};
