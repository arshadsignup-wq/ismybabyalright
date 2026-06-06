import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-speech-sound-disorder',
  title: 'Toddler Has Multiple Speech Sound Errors',
  category: 'communication',
  searchTerms: [
    'toddler multiple sound errors',
    'toddler speech sound disorder',
    'toddler many articulation errors',
    'toddler can\'t say many sounds',
    'toddler sound errors not age appropriate',
    'speech sound disorder signs',
    'toddler severe speech errors',
    'toddler articulation disorder',
    'phonological disorder child',
    'toddler most sounds wrong',
  ],
  quickAnswer:
    'A speech sound disorder involves difficulty producing speech sounds correctly, making a child harder to understand than expected for their age. While individual sound errors are common in toddlers, having many sound errors that significantly reduce intelligibility may indicate a speech sound disorder that benefits from speech therapy. Early evaluation and treatment lead to the best outcomes.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Many sound errors are normal at this age. Toddlers have a limited set of consonants they can produce correctly, typically P, B, M, T, D, N, and sometimes H and W. Other sounds are substituted or omitted, which is expected.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Sound errors are still common but intelligibility should be increasing. By age 3, parents should understand about 75% of what their child says. If your child has so many sound errors that even you struggle to understand them, a speech evaluation is worthwhile.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most early-developing sounds should be correct. Having multiple persistent errors beyond age-appropriate phonological processes may indicate a speech sound disorder. A speech-language pathologist can assess which errors are developmental versus disordered.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most speech sounds should be correctly produced by this age, with possible exceptions for R, TH, and some blends. Multiple errors affecting intelligibility warrant speech therapy. Treatment at this age is typically very effective.',
    },
    {
      ageRange: '5-6 years',
      context:
        'Only a few later-developing sounds should still be challenging. If your child has multiple sound errors, speech therapy before school entry helps prevent impacts on reading, writing, and social confidence.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and has errors on later-developing sounds while correctly producing early sounds',
    'Your toddler\'s sound errors follow typical developmental patterns like fronting, stopping, and cluster reduction',
    'Your toddler\'s speech clarity is improving over time even if errors are still present',
    'Your toddler is understandable most of the time to familiar listeners despite some errors',
  ],
  whenToMention: [
    'Your child has so many sound errors that you often cannot understand what they are saying',
    'Your child is over 3 and still has errors on early-developing sounds like P, B, M, T, D, and N',
    'Your child\'s speech clarity has not improved over the past 6 months',
  ],
  whenToActNow: [
    'Your child was speaking clearly and has developed multiple new sound errors',
    'Your child is nearly unintelligible and is becoming frustrated, withdrawn, or aggressive due to not being understood',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['speech-articulation-disorder', 'toddler-intelligibility-low', 'toddler-phonological-processes-persistent'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonology.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Speech and Language Delays and Disorders. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
