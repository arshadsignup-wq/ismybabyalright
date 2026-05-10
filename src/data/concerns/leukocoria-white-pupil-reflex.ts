import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'leukocoria-white-pupil-reflex',
  title: 'Leukocoria (White Pupil Reflex)',
  category: 'medical',
  searchTerms: [
    'white pupil baby',
    'leukocoria baby',
    'white reflex eye baby',
    'white glow in baby eye photo',
    'baby eye looks white in picture',
    'no red eye in baby photo',
    'white pupil baby photo',
    'retinoblastoma white pupil',
    'cat eye reflex baby',
  ],
  quickAnswer:
    'Leukocoria (white pupil) is an abnormal white reflection from the retina instead of the normal red-orange reflex. It can be noticed in photographs (where one eye shows red-eye and the other appears white) or during a pediatric eye exam. Leukocoria is a medical emergency because it can be a sign of retinoblastoma (a childhood eye cancer), congenital cataracts, retinopathy of prematurity, or other serious eye conditions. Any white pupil reflex requires immediate referral to a pediatric ophthalmologist.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The red reflex test is performed at birth and at every well-child visit in the first months. An absent, white, or asymmetric red reflex is considered abnormal and requires urgent evaluation. In newborns, the most common causes of leukocoria include retinoblastoma, congenital cataracts, persistent fetal vasculature, Coats disease, and retinopathy of prematurity (in premature infants). Early detection is critical, especially for retinoblastoma, where treatment is most effective when the tumor is small.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Parents may first notice leukocoria in photographs, where the flash illuminates one pupil red (normal) and the other white (abnormal). This is sometimes called the "cat\'s eye reflex." If you notice this in photos, seek evaluation immediately. Even if it only appears in certain angles or positions, it can indicate a tumor or other pathology that blocks the normal red reflex.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Retinoblastoma is most commonly diagnosed between birth and age 3, with the median age of diagnosis around 18 months. A white pupil may become more apparent as the child grows. Other signs that may accompany leukocoria include strabismus (eye misalignment), poor vision in the affected eye, and a change in eye color. Any of these signs warrant immediate evaluation.',
    },
    {
      ageRange: '12 months+',
      context:
        'Continue monitoring for leukocoria during well-child visits and in photographs. Some conditions causing leukocoria, such as Coats disease, may present later in childhood. If retinoblastoma is diagnosed, treatment may include chemotherapy, laser therapy, cryotherapy, or in severe cases, enucleation (removal of the eye). With early detection, the survival rate for retinoblastoma is over 95%.',
    },
  ],
  whenNormal: [
    'Both of your baby\'s pupils show a symmetric red-orange reflex in photographs and during eye exams',
    'A photograph occasionally shows one eye looking white due to the angle of the flash, but the red reflex is confirmed as normal at the doctor\'s visit',
    'Your baby\'s eyes appear clear with no visible cloudiness or white areas in the pupil',
    'Eye exams at well-child visits have consistently shown normal, symmetric red reflexes',
  ],
  whenToMention: [
    'You have taken a photo where one eye appears to have a white, yellow, or different-colored reflex and you want it evaluated',
    'You are unsure whether the white appearance in a photo is a camera artifact or a true abnormality',
    'Your baby\'s eyes seem to reflect light differently from each other',
  ],
  whenToActNow: [
    'You notice a white or yellowish glow in your baby\'s pupil, whether in person or in photographs, as this requires immediate evaluation by a pediatric ophthalmologist to rule out retinoblastoma and other serious conditions',
    'Your baby\'s pediatrician found an abnormal red reflex during an exam, as this is an urgent referral for comprehensive eye evaluation under dilation',
  ],
  relatedMilestones: [
    'visual-tracking',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Reflex Examination in Neonates, Infants, and Children. Pediatrics. 2008;122(6):1401-1404.',
      url: 'https://publications.aap.org/pediatrics/article/122/6/1401/72595/Red-Reflex-Examination-in-Neonates-Infants-and',
    },
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Leukocoria.',
      url: 'https://aapos.org/glossary/leukocoria',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Retinoblastoma.',
      url: 'https://www.aao.org/eye-health/diseases/retinoblastoma',
    },
  ],
};
