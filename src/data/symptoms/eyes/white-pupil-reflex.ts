import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'white-pupil-reflex',
  title: 'White Pupil Reflex (Leukocoria) in Babies',
  bodySystem: 'eyes',
  description: 'Leukocoria (white pupil reflex) is a white reflection from the pupil instead of the normal red reflex seen in photographs or on direct examination. It is a critical finding that requires urgent ophthalmologic evaluation because it can indicate retinoblastoma (eye cancer), cataracts, or other serious eye conditions. Parents often first notice it in flash photographs where one eye shows red-eye and the other appears white.',
  possibleCauses: [
    { cause: 'Camera artifact or angle (asymmetric red reflex in photos due to gaze direction)', likelihood: 'common' },
    { cause: 'Retinoblastoma (eye cancer)', likelihood: 'uncommon' },
    { cause: 'Congenital cataracts', likelihood: 'uncommon' },
    { cause: 'Persistent fetal vasculature (persistent hyperplastic primary vitreous)', likelihood: 'rare' },
    { cause: 'Retinopathy of prematurity (ROP) with retinal detachment', likelihood: 'rare' },
    { cause: 'Coats disease', likelihood: 'rare' },
    { cause: 'Toxocariasis (parasitic eye infection)', likelihood: 'rare' },
    { cause: 'Retinal detachment', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Both pupils should show an equal red reflex when examined with an ophthalmoscope or in flash photos. Slight asymmetry in one photo is often just the angle.', whenToWorry: 'Consistently white, yellow, or absent red reflex in one or both eyes across multiple photos or angles. Any asymmetry noted by pediatrician on red reflex exam.' },
    { ageRange: '6-24 months', normalVariation: 'Red reflex should be equal and symmetric. Flash photos should show red-eye equally in both eyes when looking directly at the camera.', whenToWorry: 'White reflex noted in multiple photographs, strabismus (eye crossing) with white reflex, one eye appearing different from the other in photos consistently, or difference in visual behavior between eyes.' },
    { ageRange: '2-5 years', normalVariation: 'Red reflex continues to be checked at well-child visits. Children should have equal bilateral red reflexes.', whenToWorry: 'New onset leukocoria, eye crossing with white reflex, visible white mass in pupil, vision loss in one eye, or pain and redness with white pupil.' },
  ],
  urgencyLevels: {
    emergency: [
      'White pupil reflex confirmed on examination by pediatrician',
      'White reflex with sudden eye swelling, pain, or redness (possible advanced disease)',
      'White reflex with orbital swelling or proptosis',
    ],
    urgent: [
      'White pupil noticed in photos consistently across multiple images',
      'Absent red reflex in one eye noted by parent or provider',
      'White pupil with new onset strabismus (eye crossing)',
      'White or yellow reflex in one eye while other eye is red in photos',
    ],
    sameDay: [
      'Concern about pupil appearance in one photo but not others',
      'Family history of retinoblastoma with any eye concern',
    ],
    monitor: [
      'Single photo with asymmetric reflex that is not reproduced in other photos',
      'Known normal exam with occasional artifact in certain lighting',
    ],
  },
  homeRemedies: [
    'Take flash photos of your baby looking directly at the camera in a dimly lit room',
    'Compare the red reflex between both eyes in multiple photos taken at different times',
    'If one eye consistently appears white, yellow, or different from the other, seek evaluation',
    'Do NOT delay medical evaluation if leukocoria is suspected—early detection is critical',
    'There are no home remedies for leukocoria—it always requires professional evaluation',
    'Keep all scheduled well-child visits where red reflex screening is performed',
    'If you have a family history of retinoblastoma, inform your pediatrician at the first visit',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['eye-not-tracking', 'unequal-pupils', 'red-eye'],
  relatedIllnessSlugs: ['retinoblastoma', 'cataracts'],
  relatedConcernSlugs: ['baby-white-pupil', 'baby-eye-glow', 'baby-no-red-reflex'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Red Reflex Examination in Neonates, Infants, and Children. Pediatrics. 2008;122(6):1401-1404. Reaffirmed 2018.', url: 'https://publications.aap.org/pediatrics/article/122/6/1401/72561/Red-Reflex-Examination-in-Neonates-Infants-and' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Retinoblastoma - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/retinoblastoma/symptoms-causes/syc-20351008' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Learn the Signs. Act Early. Vision Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};
