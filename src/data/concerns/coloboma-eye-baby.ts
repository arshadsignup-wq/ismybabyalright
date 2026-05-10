import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'coloboma-eye-baby',
  title: 'Coloboma of the Eye',
  category: 'medical',
  searchTerms: [
    'coloboma baby eye',
    'baby keyhole pupil',
    'coloboma iris baby',
    'baby iris abnormal shape',
    'coloboma eye birth defect',
    'baby pupil looks different',
    'cat eye baby coloboma',
    'congenital eye defect coloboma',
  ],
  quickAnswer:
    'Coloboma is a congenital condition where a portion of the eye tissue is missing, resulting from incomplete closure of the optic fissure during fetal development (around weeks 5-7 of pregnancy). It can affect the iris (giving the pupil a keyhole shape), the retina, the choroid, the optic nerve, or the lens. Coloboma occurs in approximately 1 in 10,000 births. The effect on vision depends on which structures are involved. Iris colobomas may primarily be cosmetic, while retinal or optic nerve colobomas can significantly affect vision.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Iris coloboma is often visible at birth as a keyhole-shaped or irregularly shaped pupil. It may be detected during the newborn examination. A comprehensive eye evaluation by a pediatric ophthalmologist is important to determine whether the coloboma involves only the iris or extends to deeper structures like the retina or optic nerve, which would have greater implications for vision.',
    },
    {
      ageRange: '3-6 months',
      context:
        'After initial evaluation, follow-up examinations will monitor visual development. If the coloboma is limited to the iris, the baby may be sensitive to bright light because the pupil cannot constrict fully, but vision may be relatively unaffected. If deeper structures are involved, the baby should be monitored for visual development milestones and may need early intervention services.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Ongoing monitoring continues. Some children with coloboma may also have associated conditions such as CHARGE syndrome, which involves multiple organ systems. If your baby was diagnosed with coloboma, genetic evaluation may be recommended to screen for associated conditions. Vision rehabilitation and adaptive aids may be introduced if vision is significantly affected.',
    },
    {
      ageRange: '12 months+',
      context:
        'Children with iris coloboma may benefit from tinted glasses or a wide-brimmed hat to manage light sensitivity. Those with retinal or optic nerve colobomas should have regular eye exams to monitor for complications such as retinal detachment, which is more common in eyes with coloboma. Low vision services may be helpful for children with significant visual impairment.',
    },
  ],
  whenNormal: [
    'Your baby\'s pupils are round, equal in size, and react normally to light',
    'Both eyes appear symmetrical and structurally similar',
    'The eye exam at your baby\'s well-child visit showed normal findings',
    'Your baby tracks objects and makes eye contact appropriately for their age',
  ],
  whenToMention: [
    'You notice one of your baby\'s pupils has an unusual shape, such as a keyhole or notch',
    'One iris appears to have a different pattern or a missing section compared to the other',
    'Your baby seems more sensitive to light than expected',
  ],
  whenToActNow: [
    'Your baby has a visibly abnormal pupil or iris and has not yet had a comprehensive eye examination, as prompt evaluation determines the extent of the coloboma and its impact on vision',
    'A child with known coloboma suddenly experiences vision changes, flashing lights, or a shadow in their vision, which could indicate retinal detachment',
  ],
  relatedMilestones: [
    'visual-tracking',
    'eye-contact',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Coloboma.',
      url: 'https://aapos.org/glossary/coloboma',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. What Is Coloboma?',
      url: 'https://www.aao.org/eye-health/diseases/coloboma',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Coloboma.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/coloboma',
    },
  ],
};
