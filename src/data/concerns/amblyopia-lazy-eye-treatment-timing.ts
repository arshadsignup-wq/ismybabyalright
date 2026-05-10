import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'amblyopia-lazy-eye-treatment-timing',
  title: 'Amblyopia (Lazy Eye) Treatment Timing',
  category: 'medical',
  searchTerms: [
    'lazy eye treatment baby',
    'amblyopia treatment age',
    'when to treat lazy eye child',
    'patching for lazy eye baby',
    'amblyopia in infants',
    'lazy eye early intervention',
    'amblyopia critical period treatment',
    'baby one eye weaker',
    'lazy eye toddler signs',
  ],
  quickAnswer:
    'Amblyopia (lazy eye) is the most common cause of vision loss in children, affecting 2-3% of the population. It occurs when one eye develops weaker vision because the brain favors the other eye. Early detection and treatment are critical because the visual system is most responsive to treatment during early childhood. Treatment is most effective when started before age 7, though improvement is possible at older ages. Treatment options include patching the stronger eye, atropine eye drops, glasses, or a combination.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Vision is still developing rapidly. Amblyopia at this age is most commonly caused by conditions that block vision in one eye, such as congenital cataracts or severe ptosis (drooping eyelid). The red reflex test done at birth and well-child visits can help detect these conditions early. Prompt treatment of any vision-blocking condition is essential to prevent amblyopia.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, babies should be tracking objects equally with both eyes. If you notice one eye consistently turning (strabismus), this is the most common cause of amblyopia in young children. An eye examination by a pediatric ophthalmologist is recommended if strabismus is suspected, as early treatment produces the best outcomes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The AAP and AAPOS recommend vision screening at well-child visits. Photoscreening devices can detect risk factors for amblyopia as early as 6-12 months. If amblyopia is diagnosed, treatment may involve glasses to correct any refractive error, patching of the stronger eye for prescribed hours per day, or atropine drops in the stronger eye to blur its vision and encourage use of the weaker eye.',
    },
    {
      ageRange: '12 months+',
      context:
        'The critical period for visual development extends through early childhood, with the greatest plasticity before age 7. Treatment for amblyopia is most effective when started early but can show benefit up to age 12-13 in some cases. Consistent follow-up with a pediatric ophthalmologist is essential. The typical patching regimen is 2-6 hours per day, depending on severity.',
    },
  ],
  whenNormal: [
    'Your baby\'s eyes occasionally cross during the first 3-4 months, which is normal intermittent strabismus',
    'Vision screening at your child\'s well-visit shows no concerns',
    'Both eyes appear to track objects and people equally',
    'Your child reaches for objects accurately and has no difficulty with depth perception',
  ],
  whenToMention: [
    'One eye appears to turn in, out, up, or down, even intermittently, after 4 months of age',
    'Your child consistently tilts or turns their head to one side when looking at things',
    'Your child squints or closes one eye in bright light or when trying to focus',
  ],
  whenToActNow: [
    'A screening test or eye exam indicates possible amblyopia, as early referral to a pediatric ophthalmologist is important and delays reduce treatment effectiveness',
    'You notice a white reflection in your baby\'s pupil in photographs instead of the normal red reflex, which could indicate a serious condition like retinoblastoma or congenital cataracts blocking vision',
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
        'American Association for Pediatric Ophthalmology and Strabismus. Amblyopia.',
      url: 'https://aapos.org/glossary/amblyopia',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Amblyopia: Preferred Practice Pattern.',
      url: 'https://www.aao.org/preferred-practice-pattern/amblyopia-ppp',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults by Pediatricians. Pediatrics. 2016;137(1):e20153596.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153596/52600/Visual-System-Assessment-in-Infants-Children-and',
    },
  ],
};
