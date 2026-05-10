import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eye-alignment-issues-infant',
  title: 'Eye Alignment Issues in Infants',
  category: 'medical',
  searchTerms: [
    'baby eye alignment problem',
    'baby eyes not straight',
    'infant eye misalignment',
    'baby one eye drifts',
    'baby eye turns outward',
    'baby eye turns inward',
    'strabismus signs baby',
    'baby eyes don\'t line up',
    'pseudostrabismus baby',
  ],
  quickAnswer:
    'Eye alignment issues (strabismus) in infants can involve one eye turning inward (esotropia), outward (exotropia), upward (hypertropia), or downward (hypotropia). Intermittent misalignment in newborns under 3-4 months is very common and usually resolves as eye muscles strengthen. Constant misalignment at any age, or any misalignment persisting after 4 months, should be evaluated by a pediatric ophthalmologist. Many parents also mistake pseudostrabismus (the appearance of crossed eyes caused by a wide nasal bridge) for true misalignment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Intermittent eye crossing is very common in newborns and is caused by immature eye muscle coordination. The eyes may occasionally drift or cross, especially when the baby is tired. This typically resolves by 3-4 months. However, constant, fixed misalignment at any age is not normal and should be evaluated. Babies with wide nasal bridges may appear cross-eyed (pseudostrabismus) even though their eyes are properly aligned.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4 months, the eyes should be consistently aligned and working together. Any persistent eye turn after this age needs evaluation. Infantile esotropia (constant inward turning of one eye beginning before 6 months) often requires surgical correction. Early intervention is important to prevent amblyopia and to allow binocular vision to develop.',
    },
    {
      ageRange: '6-12 months',
      context:
        'New onset or persistent strabismus at this age warrants prompt evaluation. Accommodative esotropia (eye turning caused by farsightedness) can develop and may be treated with glasses. Any sudden onset eye misalignment, especially if accompanied by a head tilt or other neurological symptoms, needs urgent evaluation as it can rarely be associated with more serious conditions.',
    },
    {
      ageRange: '12 months+',
      context:
        'Intermittent exotropia (eye turning outward occasionally) is the most common form of strabismus that develops after infancy. If you notice one eye drifting outward when your child is tired, daydreaming, or looking at distant objects, mention this to your pediatrician. Treatment options include glasses, patching, exercises, or surgery depending on the type and severity.',
    },
  ],
  whenNormal: [
    'Your baby under 4 months has occasional, brief eye crossing that comes and goes',
    'Your baby\'s eyes appear crossed but tracking tests show they move together normally, suggesting pseudostrabismus',
    'Both eyes consistently move together and track objects in all directions after 4 months',
    'Your baby makes good eye contact and reaches accurately for objects',
  ],
  whenToMention: [
    'Eye crossing or drifting still occurs intermittently after 4 months of age',
    'You notice one eye sometimes turning outward when your child is tired or looking into the distance',
    'Your child tilts or turns their head to one side consistently when looking at things',
  ],
  whenToActNow: [
    'One eye is constantly turned in a different direction at any age, as constant strabismus requires prompt evaluation to prevent permanent vision loss from amblyopia',
    'A new eye turn develops suddenly, especially with headache, vomiting, head tilt, or changes in pupil size, which could indicate a neurological issue requiring emergency evaluation',
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
        'American Association for Pediatric Ophthalmology and Strabismus. Strabismus.',
      url: 'https://aapos.org/glossary/strabismus',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Strabismus in Children.',
      url: 'https://www.aao.org/eye-health/diseases/strabismus-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Strabismus (Crossed Eyes). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Strabismus.aspx',
    },
  ],
};
