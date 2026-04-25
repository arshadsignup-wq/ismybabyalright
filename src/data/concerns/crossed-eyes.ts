import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'crossed-eyes',
  title: 'Baby Crossed Eyes (Strabismus)',
  category: 'medical',
  searchTerms: [
    'baby eyes crossing',
    'baby cross eyed',
    'baby one eye turns in',
    'baby eyes not aligned',
    'strabismus in babies',
    'newborn eyes crossing',
    'baby eye wanders',
    'baby lazy eye',
    'baby eyes look different directions',
    'when should baby eyes straighten out',
    'pseudostrabismus baby',
  ],
  quickAnswer:
    'It is common for newborns\' eyes to occasionally cross or wander during the first 3-4 months as their eye muscles strengthen and coordination develops. This intermittent crossing usually resolves on its own. However, if one eye consistently turns in, out, up, or down after 4 months, or if crossing is constant at any age, it should be evaluated by a pediatric ophthalmologist.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Intermittent eye crossing in newborns is very common and usually not a cause for concern. Babies are still developing the coordination between their eye muscles and brain. Many babies also have pseudostrabismus, where a wide nasal bridge or prominent skin folds make the eyes appear crossed when they are actually aligned. True constant crossing at any age, however, should be evaluated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4 months, a baby\'s eyes should be consistently aligned and able to track objects smoothly together. If crossing is still occurring regularly after 4 months, a referral to a pediatric ophthalmologist is recommended. Early detection is important because untreated strabismus can lead to amblyopia (lazy eye), where the brain starts to ignore signals from the misaligned eye.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Any persistent eye misalignment at this age needs evaluation. Treatment depends on the type and cause of strabismus and may include glasses, patching the stronger eye to strengthen the weaker one, or in some cases, surgery to adjust the eye muscles. The earlier treatment begins, the better the outcomes for visual development.',
    },
    {
      ageRange: '12 months+',
      context:
        'Some children develop strabismus (particularly intermittent exotropia, where an eye turns outward) after infancy. New onset eye turning at any age should be evaluated. Children do not outgrow true strabismus, and early treatment is important for developing normal binocular vision and preventing permanent vision loss in the affected eye.',
    },
  ],
  whenNormal: [
    'Brief, intermittent crossing in a baby under 3-4 months old that comes and goes and is not constant',
    'Your baby\'s eyes appear slightly crossed due to a wide, flat nasal bridge (pseudostrabismus), but actually track together normally',
    'Both eyes move together smoothly to follow objects or faces after 3-4 months of age',
    'Your baby makes good eye contact and visually tracks objects across their field of vision',
  ],
  whenToMention: [
    'Your baby\'s eyes are still intermittently crossing after 4 months of age',
    'You notice one eye consistently drifts inward, outward, upward, or downward while the other looks straight ahead',
    'Your baby seems to tilt or turn their head consistently to one side when looking at things',
    'You are not sure whether your baby\'s eyes are truly misaligned or if it is pseudostrabismus from their facial features',
  ],
  whenToActNow: [
    'One eye is constantly turned in a different direction from the other at any age, as this indicates true strabismus requiring prompt evaluation to prevent vision loss',
    'Your baby develops a sudden new eye turn, especially if accompanied by a head tilt, eye swelling, or the pupil appears white in photographs instead of the normal red reflex',
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
        'American Academy of Ophthalmology/AAP. Pediatric Eye Evaluations Preferred Practice Pattern. 2017.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Strabismus.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Warning Signs of Vision Problems in Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vision Health Initiative: Children.',
      url: 'https://www.cdc.gov/vision-health/about/index.html',
    },
  ],
};
