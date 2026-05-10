import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-cataracts-baby',
  title: 'Congenital Cataracts',
  category: 'medical',
  searchTerms: [
    'congenital cataracts baby',
    'baby born with cataracts',
    'white pupil baby cataracts',
    'cloudy eye baby',
    'infant cataracts',
    'newborn cataracts treatment',
    'baby cataract surgery',
    'congenital cataracts causes',
    'pediatric cataracts',
  ],
  quickAnswer:
    'Congenital cataracts are cloudiness in the lens of the eye that is present at birth, occurring in approximately 1 in 2,500 live births. They can affect one or both eyes and range from small opacities that do not affect vision to dense cataracts that completely block light. Dense congenital cataracts are a medical urgency because they can cause irreversible amblyopia (lazy eye) if not treated promptly. Surgery to remove the cataract is the primary treatment and may need to be performed within the first few weeks of life for the best visual outcome.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Congenital cataracts should be detected through the red reflex test performed at birth and during early well-child visits. A normal red reflex shows a symmetric red-orange glow in both eyes. An absent, white, or asymmetric red reflex warrants immediate referral to a pediatric ophthalmologist. Dense unilateral cataracts ideally should be removed by 6-8 weeks of age, and dense bilateral cataracts by 10 weeks, to minimize the risk of permanent vision loss from amblyopia.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a cataract was removed in the newborn period, the baby will need ongoing visual rehabilitation, which typically involves a contact lens or intraocular lens implant plus patching of the stronger eye to prevent amblyopia. Close follow-up with the pediatric ophthalmologist is essential. Small cataracts that do not significantly block the visual axis may be monitored without surgery.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Post-surgical follow-up continues with frequent eye exams to monitor for complications such as secondary glaucoma, which occurs in about 15-25% of children after congenital cataract surgery. Visual development should be monitored, and any patching or lens prescription should be adjusted regularly based on the child\'s visual progress.',
    },
    {
      ageRange: '12 months+',
      context:
        'Long-term follow-up is needed throughout childhood. Children who had congenital cataract surgery require monitoring for glaucoma, refractive changes, and amblyopia for years. Glasses or contact lenses will likely be needed. With early treatment and consistent follow-up, many children achieve functional vision, though visual outcomes depend on the type and severity of the cataract and timing of intervention.',
    },
  ],
  whenNormal: [
    'Your baby has bright, clear eyes with a symmetric red reflex in both pupils',
    'Both of your baby\'s eyes appear the same size and clarity',
    'Your baby tracks faces and objects appropriately for their age',
    'Well-child visit eye screenings have been normal',
  ],
  whenToMention: [
    'You notice a slight cloudiness or hazy spot in one or both of your baby\'s eyes',
    'Photos of your baby show a different-colored reflex between the two eyes',
    'Your baby does not seem to see well or track objects as expected for their age',
  ],
  whenToActNow: [
    'You notice a white reflection in your baby\'s pupil (leukocoria) in person or in photographs, as this requires urgent evaluation to distinguish cataracts from retinoblastoma',
    'Your newborn\'s red reflex test is abnormal or absent, as this warrants immediate referral to a pediatric ophthalmologist for evaluation and possible surgical intervention',
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
        'American Association for Pediatric Ophthalmology and Strabismus. Cataract.',
      url: 'https://aapos.org/glossary/cataract',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Pediatric Cataracts.',
      url: 'https://www.aao.org/eye-health/diseases/cataracts-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Reflex Examination in Neonates, Infants, and Children. Pediatrics. 2008;122(6):1401-1404.',
      url: 'https://publications.aap.org/pediatrics/article/122/6/1401/72595/Red-Reflex-Examination-in-Neonates-Infants-and',
    },
  ],
};
