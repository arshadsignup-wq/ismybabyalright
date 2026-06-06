import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-nasal-voice-quality',
  title: 'Toddler Has a Nasal-Sounding Voice',
  category: 'communication',
  searchTerms: [
    'toddler nasal voice',
    'toddler hypernasality',
    'toddler sounds nasal',
    'child talks through nose',
    'toddler nasal speech quality',
    'toddler nasally voice',
    'hypernasal speech child',
    'toddler voice sounds stuffed up',
    'toddler resonance problem',
    'velopharyngeal dysfunction child',
  ],
  quickAnswer:
    'A persistently nasal-sounding voice (hypernasality) occurs when too much air escapes through the nose during speech. Occasional nasality during colds or allergies is normal, but persistent hypernasality may indicate velopharyngeal dysfunction, enlarged adenoids, or, rarely, a submucous cleft palate. If your child\'s voice consistently sounds nasal when they are healthy, an evaluation by an ENT specialist is recommended.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Nasal voice quality is difficult to assess before words develop. Babies who have difficulty with feeding, nasal regurgitation of milk, or a visible cleft palate should be evaluated promptly by a craniofacial team.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As words emerge, a nasal voice quality may become noticeable. If your toddler consistently sounds nasal when healthy and not congested, mention this to your pediatrician. A referral to an ENT specialist can determine the cause.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Hypernasality becomes more apparent as speech develops and sentences grow longer. Common causes include enlarged adenoids, velopharyngeal insufficiency, or a submucous cleft palate that may not have been detected at birth.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Nasal voice quality should be evaluated if persistent. Enlarged adenoids are a common and treatable cause. A speech-language pathologist can assess the degree of nasality and determine whether it is affecting speech clarity.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Treatment depends on the cause. Enlarged adenoids may be addressed surgically. Velopharyngeal insufficiency may require surgery or a prosthetic device. Speech therapy can help with compensatory speech patterns that develop alongside nasal voice quality.',
    },
  ],
  whenNormal: [
    'Your toddler sounds nasal during a cold, allergies, or sinus congestion',
    'Your toddler\'s nasal quality is temporary and resolves when congestion clears',
    'Your toddler has mild nasality on M, N, and NG sounds only, which is normal',
  ],
  whenToMention: [
    'Your toddler consistently sounds nasal even when they are not sick',
    'Your toddler\'s nasal voice quality is noticeable to others',
    'Food or liquid occasionally comes out of your toddler\'s nose during eating or drinking',
  ],
  whenToActNow: [
    'Your newborn or infant has nasal regurgitation of milk during every feeding',
    'Your child has sudden onset of severe nasality along with difficulty swallowing',
  ],
  relatedMilestones: ['voice-quality', 'speech-clarity', 'feeding-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['nasal-speech', 'toddler-voice-hoarse-raspy', 'toddler-vocal-nodules-signs'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Resonance Disorders.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/resonance-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cleft Lip and Palate. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/cleft-craniofacial/Pages/Cleft-Lip-and-Palate.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Velopharyngeal Insufficiency.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538347/',
    },
  ],
};
