import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'retinopathy-of-prematurity-parent-guide',
  title: 'My Preemie Is Being Screened for ROP (Retinopathy of Prematurity)',
  category: 'medical',
  searchTerms: [
    'retinopathy of prematurity ROP',
    'ROP screening premature baby',
    'ROP stage 1 2 3 baby',
    'ROP treatment laser baby',
    'premature baby eye problems',
    'ROP plus disease',
    'preemie eye exam',
    'ROP anti-VEGF injection baby',
    'retinopathy of prematurity prognosis',
    'preemie vision problems',
  ],
  quickAnswer:
    'Retinopathy of prematurity (ROP) is a condition where abnormal blood vessels grow in the retina of premature babies, potentially threatening vision. It occurs because the retinal blood vessels are not fully developed at birth in preterm infants. ROP is staged 1 through 5 based on severity. Stages 1-2 often resolve without treatment. Stage 3 and above, especially with "plus disease," may require treatment with laser therapy or anti-VEGF injections. With modern screening and treatment, the vast majority of babies with ROP retain functional vision.',
  byAge: [
    {
      ageRange: 'NICU — screening and monitoring',
      context:
        'ROP eye exams begin at 4-6 weeks of age for babies born before 31 weeks or weighing less than 1500 grams. The exams involve dilating your baby\'s eyes and using a special instrument to examine the retina. These exams are uncomfortable for your baby, and watching them is difficult for parents. The exams continue every 1-3 weeks until the retinal blood vessels have matured. If ROP is detected, the stage and zone are documented to track progression.',
    },
    {
      ageRange: '0-3 months corrected age',
      context:
        'If your baby had mild ROP (stage 1-2) that resolved, follow-up eye exams are still recommended to check for long-term refractive errors (nearsightedness is more common in preemies). If treatment was needed (laser or anti-VEGF injection), close ophthalmologic follow-up continues to ensure the treatment was effective and the ROP does not recur. Most treated ROP stabilizes well.',
    },
    {
      ageRange: '3-12 months corrected age',
      context:
        'Your baby should have regular eye exams to monitor visual development and check for strabismus (crossed eyes), amblyopia (lazy eye), and refractive errors, all of which are more common in premature babies regardless of ROP status. If your baby seems to not track objects visually, does not make eye contact, or you notice the eyes crossing frequently after 4 months corrected age, mention this to your ophthalmologist.',
    },
    {
      ageRange: '1 year+ corrected age',
      context:
        'Most children who had ROP, even those who required treatment, have good functional vision. Annual eye exams are recommended through childhood. Premature children are at higher risk for nearsightedness, astigmatism, and other visual issues, so early detection and correction (glasses if needed) supports development. Children who had severe ROP (stage 4-5) may have significant visual impairment and benefit from early vision rehabilitation services.',
    },
  ],
  whenNormal: [
    'Your baby has stage 1-2 ROP and the ophthalmologist says it is regressing or stable — this is common and usually resolves',
    'Your baby\'s ROP screening exams are continuing on schedule and the doctor is satisfied with progress',
    'Your baby had ROP that resolved and now needs routine follow-up eye exams',
  ],
  whenToMention: [
    'You notice your baby does not seem to focus on faces or track objects by 2-3 months corrected age',
    'Your baby\'s eyes seem to cross frequently or one eye turns in or out after 4 months corrected age',
    'You have concerns about whether your baby can see well',
    'You have questions about the ROP staging or what the findings mean for your baby specifically',
  ],
  whenToActNow: [
    'Your baby\'s ophthalmologist recommends urgent treatment (laser or injection) — time is critical with aggressive ROP, and treatment should not be delayed',
    'You notice a white reflection in your baby\'s pupil (leukocoria) — this requires immediate ophthalmologic evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'bronchopulmonary-dysplasia-bpd',
    'adjusted-age-milestones-preemie',
    'nicu-parent-trauma',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Retinopathy of Prematurity.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/retinopathy-prematurity',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Screening Examination of Premature Infants for Retinopathy of Prematurity. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/6/e20183061/37593',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Retinopathy of Prematurity.',
      url: 'https://www.aao.org/eye-health/diseases/retinopathy-prematurity',
    },
  ],
};
