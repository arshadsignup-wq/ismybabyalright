import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cholesteatoma-baby',
  title: 'Cholesteatoma in Babies',
  category: 'medical',
  searchTerms: [
    'cholesteatoma baby',
    'cholesteatoma infant',
    'skin growth behind eardrum baby',
    'congenital cholesteatoma',
    'white mass behind eardrum baby',
    'baby ear cyst',
    'cholesteatoma toddler symptoms',
    'baby hearing loss cholesteatoma',
  ],
  quickAnswer:
    'A cholesteatoma is an abnormal collection of skin cells that grows behind the eardrum or in the middle ear. In babies, it can be congenital (present at birth) or acquired after repeated ear infections or eardrum perforations. While not cancerous, cholesteatomas can grow and damage the tiny bones of the middle ear, leading to hearing loss and other complications. Surgical removal is the standard treatment, and early detection leads to better outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Congenital cholesteatoma may be discovered incidentally during newborn examination or hearing screening. A doctor may notice a white mass behind an intact eardrum during a routine ear check. At this age, the cholesteatoma is typically small and may be monitored initially, with surgery planned when the baby is a bit older and better able to tolerate anesthesia, unless rapid growth is observed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a congenital cholesteatoma was identified earlier, your ENT specialist will monitor its growth. Acquired cholesteatomas are very rare at this age. Signs that may prompt investigation include persistent unilateral (one-sided) ear drainage, a white mass visible through the eardrum, or unexplained hearing differences between ears on audiological testing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with recurrent ear infections may rarely develop an acquired cholesteatoma. Your doctor may suspect this if ear infections are always in the same ear, if there is persistent foul-smelling drainage, or if hearing loss is noted in one ear. An ENT specialist will examine the ear with a microscope and may order a CT scan to evaluate the extent of the growth.',
    },
    {
      ageRange: '12 months+',
      context:
        'Cholesteatomas in toddlers may present with chronic ear drainage that does not respond to standard antibiotic drops, progressive hearing loss in one ear, or a foul smell from the ear. If your child had ear tubes and one ear continues to drain despite treatment, a cholesteatoma should be considered. Surgery (tympanomastoidectomy) is the definitive treatment, and follow-up monitoring is important as recurrence is possible.',
    },
  ],
  whenNormal: [
    'Your baby has earwax that appears white or pale  -  this is normal earwax, not a cholesteatoma.',
    'Your baby had an ear infection with temporary drainage that resolved completely with treatment.',
    'Your doctor checked behind the eardrum and confirmed a normal appearance with no abnormal growths.',
    'Your child has a small retraction pocket in the eardrum that your ENT is monitoring  -  this is not yet a cholesteatoma.',
  ],
  whenToMention: [
    'Your baby has persistent foul-smelling drainage from one ear that does not respond to antibiotic ear drops.',
    'Your doctor notices a white mass or unusual appearance behind the eardrum during examination.',
    'Your child has progressive hearing loss in one ear, especially after recurrent ear infections.',
  ],
  whenToActNow: [
    'Your child has ear drainage accompanied by facial weakness, dizziness, or severe headache  -  these could indicate a cholesteatoma complication requiring urgent evaluation.',
    'Your baby develops sudden severe hearing loss in one ear along with persistent drainage  -  seek prompt ENT evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cholesteatoma. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Cholesteatoma.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Cholesteatoma.',
      url: 'https://www.nidcd.nih.gov/health/cholesteatoma',
    },
  ],
};
