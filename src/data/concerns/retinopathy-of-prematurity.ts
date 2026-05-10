import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'retinopathy-of-prematurity',
  title: 'Retinopathy of Prematurity',
  category: 'medical',
  searchTerms: [
    'retinopathy of prematurity',
    'ROP premature baby eyes',
    'premature baby eye problems',
    'ROP screening baby',
    'retinopathy premature infant',
    'preemie eye exam',
    'ROP treatment baby',
    'premature baby vision',
    'retinal detachment premature baby',
  ],
  quickAnswer:
    'Retinopathy of prematurity (ROP) is a condition affecting the developing blood vessels of the retina in premature infants. It is most common in babies born before 31 weeks of gestation or weighing less than 1,500 grams (3.3 pounds). In mild cases, the abnormal blood vessels regress on their own. In severe cases, the abnormal vessels can cause scarring, retinal detachment, and blindness. All at-risk premature infants receive screening eye exams in the NICU, and treatment (laser therapy or anti-VEGF injections) is highly effective when needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Screening for ROP typically begins at 4-6 weeks of age (or 31-33 weeks postmenstrual age, whichever is later). The eye exam is performed by an ophthalmologist using an indirect ophthalmoscope after dilating the baby\'s pupils. ROP is classified by stage (1-5), zone (location on the retina), and the presence of plus disease (dilated, tortuous blood vessels). Most mild ROP (stages 1-2) resolves without treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Follow-up examinations continue until the retinal blood vessels have matured completely or until the ophthalmologist determines that the risk of ROP progression has passed. If ROP progresses to treatment-threshold disease (typically stage 3 with plus disease), treatment is performed urgently, usually within 72 hours. Treatment options include laser photocoagulation or intravitreal anti-VEGF injections.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, ROP has typically resolved or been treated. However, children who had ROP (even if it resolved on its own) are at increased risk for other eye problems including myopia (nearsightedness), strabismus, amblyopia, and late retinal detachment. Regular ophthalmologic follow-up is recommended throughout childhood.',
    },
    {
      ageRange: '12 months+',
      context:
        'Long-term follow-up is essential for all children who had ROP. Even mild ROP increases the risk of significant refractive errors, requiring glasses from an early age. Children who had severe ROP or required treatment need more frequent monitoring for late complications such as retinal detachment, glaucoma, or cataracts. Early intervention services should be utilized if vision impairment affects development.',
    },
  ],
  whenNormal: [
    'Your premature baby had ROP screening exams that showed no ROP or only stage 1-2 ROP that resolved on its own',
    'The ophthalmologist has discharged your baby from ROP screening because the retinal vessels have matured normally',
    'Your child who had mild ROP has normal vision development at follow-up exams',
    'Your premature baby was screened appropriately and no treatment was needed',
  ],
  whenToMention: [
    'Your premature baby has not been screened for ROP and you want to confirm it was done or arrange it',
    'Your child had ROP and you notice them squinting, sitting close to the TV, or having difficulty seeing',
    'You want to discuss the long-term eye care plan for your child who had ROP',
  ],
  whenToActNow: [
    'Your baby has been diagnosed with treatment-threshold ROP (stage 3 with plus disease), as treatment is needed within 72 hours to prevent retinal detachment and permanent vision loss',
    'A child with a history of severe ROP suddenly develops vision changes, a white pupil, or eye pain, which could indicate late retinal detachment or other serious complications requiring emergency ophthalmologic evaluation',
  ],
  relatedMilestones: [
    'visual-tracking',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Screening Examination of Premature Infants for Retinopathy of Prematurity. Pediatrics. 2018;142(6):e20183061.',
      url: 'https://publications.aap.org/pediatrics/article/142/6/e20183061/37580/Screening-Examination-of-Premature-Infants-for',
    },
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Retinopathy of Prematurity.',
      url: 'https://aapos.org/glossary/retinopathy-of-prematurity',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Retinopathy of Prematurity.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/retinopathy-prematurity',
    },
  ],
};
