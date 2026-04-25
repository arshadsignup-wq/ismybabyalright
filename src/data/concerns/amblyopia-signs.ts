import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'amblyopia-signs',
  title: 'I\'m Worried About Lazy Eye (Amblyopia)',
  category: 'medical',
  searchTerms: [
    'baby lazy eye',
    'amblyopia baby',
    'baby one eye weaker',
    'baby vision problem one eye',
    'lazy eye signs baby',
    'baby eye patching',
    'amblyopia treatment baby',
    'toddler lazy eye',
    'baby poor vision one eye',
    'amblyopia early signs',
  ],
  quickAnswer:
    'Amblyopia (lazy eye) is the most common cause of vision loss in children, affecting about 2-3% of kids. It occurs when one eye develops weaker vision because the brain favors the other eye. The tricky part is that amblyopia often has no obvious outward signs  -  the eye usually looks normal. Early detection through routine vision screening is critical because treatment is most effective in the first few years of life.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Amblyopia begins developing when something interferes with normal visual development in one eye. In infants, the most common causes are strabismus (misaligned eyes), a significant difference in refractive error between the two eyes (anisometropia), or anything blocking the line of sight (such as a congenital cataract, droopy eyelid, or hemangioma over the eye). Newborn eye exams check for red reflexes in both eyes, which can detect cataracts and other serious conditions. If your baby has a noticeable eye turn, a white pupil, or a drooping eyelid, early ophthalmologic evaluation is essential.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Signs that may suggest amblyopia or its risk factors at this age include a persistent eye turn (strabismus), poor visual tracking with one eye compared to the other, fussiness when one eye is covered (the child protests when the good eye is covered but does not mind when the amblyopic eye is covered), or a visible obstruction of one eye. The AAP recommends vision screening at well-child visits beginning in infancy. Instrument-based screening (photoscreening) can detect risk factors even before a child can participate in a vision chart test.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the critical window for amblyopia detection and treatment. The visual system is still highly plastic, meaning the brain can still learn to use the weaker eye with proper treatment. Treatment typically involves correcting any underlying cause (glasses for refractive errors, surgery for cataracts or strabismus) and then forcing the brain to use the weaker eye through patching the stronger eye or using atropine drops to blur the stronger eye. Treatment started before age 4-5 has the best outcomes.',
    },
    {
      ageRange: '3-7 years',
      context:
        'Vision screening with an eye chart becomes possible at age 3-4 and is recommended by the AAP and USPTF. This is often when amblyopia is first detected, as the child may not realize they see differently with each eye. If one eye reads significantly worse than the other on the chart, amblyopia is likely. Treatment remains effective during this age range, though it takes longer and may be less complete than if started earlier. The visual system continues to have some plasticity up to about age 7-10, but earlier treatment yields better results.',
    },
  ],
  whenNormal: [
    'Your baby tracks objects and makes eye contact equally well with both eyes',
    'Both eyes have a symmetric red reflex in photographs (both pupils glow the same red-orange color)',
    'Your baby does not protest when you briefly cover either eye during play',
    'Your child has passed their most recent vision screening at the pediatrician\'s office',
  ],
  whenToMention: [
    'Your child seems to squint, tilt their head, or close one eye when looking at things',
    'Your child has a family history of amblyopia, strabismus, or childhood vision problems, which increases their risk',
    'You notice your child sits very close to the TV or holds objects very close to their face, which could indicate a vision issue',
  ],
  whenToActNow: [
    'Your baby or child has a constant eye turn, a white or abnormal pupil reflex (leukocoria), a drooping eyelid covering the pupil, or any other visible obstruction of an eye  -  these require prompt ophthalmologic evaluation to prevent permanent vision loss from amblyopia',
    'Your child has failed a vision screening or has a significant difference in vision between the two eyes  -  early referral to a pediatric ophthalmologist is critical, as treatment effectiveness decreases with age',
  ],
  relatedMilestones: [
    'visual-tracking',
    'eye-contact',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'AAP Section on Ophthalmology. Visual System Assessment in Infants, Children, and Young Adults. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022058955/188354/Visual-System-Assessment-in-Infants-Children-and',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Amblyopia (Lazy Eye).',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Amblyopia-Lazy-Eye.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Amblyopia (Lazy Eye).',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/amblyopia-lazy-eye',
    },
  ],
};
