import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-vision-screening-milestones',
  title: 'Infant Vision Screening and Visual Development Milestones',
  category: 'medical',
  searchTerms: [
    'baby vision development',
    'infant eye exam when',
    'baby can\'t see far away',
    'when can baby see clearly',
    'baby vision milestones',
    'infant vision screening',
    'baby eye tracking problems',
    'when to take baby to eye doctor',
    'newborn vision what can they see',
    'baby not following objects with eyes',
    'infant visual development timeline',
  ],
  quickAnswer:
    'Newborns can only see 8-12 inches clearly (about the distance to a parent\'s face during feeding), and their vision develops rapidly over the first year. By 2 months, babies should be tracking moving objects; by 4 months, they develop depth perception and color vision; by 6 months, visual acuity is about 20/100. The AAP recommends vision screening at every well-child visit, with an instrument-based screening between 12-36 months. Early detection of conditions like amblyopia (lazy eye), strabismus (crossed eyes), and refractive errors is critical because treatment is most effective when started early.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns see in shades of gray initially and can focus best at 8-12 inches. They prefer looking at faces, high-contrast patterns, and bold shapes. It is normal for newborn eyes to occasionally cross or wander, as the eye muscles are still developing coordination. By 1-2 months, babies should begin making eye contact and briefly tracking a slow-moving object. The pediatrician will perform a red reflex test at birth and at early well-visits to screen for congenital cataracts and retinoblastoma.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Vision develops rapidly during this period. By 3 months, babies should consistently track objects and people with their eyes and begin reaching for things they see. Color vision develops around 4 months, and depth perception emerges around 5 months. Persistent eye crossing or misalignment after 4 months of age should be evaluated, as early treatment for strabismus is important to prevent amblyopia. Babies born premature, especially those with retinopathy of prematurity (ROP), need specialized ophthalmologic follow-up.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, visual acuity has improved significantly and babies can see across the room. They should be able to follow rapidly moving objects, recognize familiar people at a distance, and develop hand-eye coordination for grasping and manipulating objects. The AAP recommends an instrument-based vision screening (photoscreening) at the 12-month visit to detect refractive errors, strabismus, and other conditions. If your baby consistently tilts their head to look at things, squints, or has one eye that seems to drift, bring this to your pediatrician\'s attention.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler vision continues to mature, reaching approximately 20/40 by age 2 and 20/30 by age 3. Instrument-based screening should be performed between ages 1-3 at well-child visits. By age 3-4, most children can cooperate with visual acuity chart testing. Signs of vision problems in toddlers include sitting very close to screens, holding books very close, frequent eye rubbing, squinting, head tilting, or difficulty with age-appropriate activities that require visual coordination. Family history of vision problems increases risk.',
    },
  ],
  whenNormal: [
    'Your newborn\'s eyes occasionally cross or wander in the first 2-3 months.',
    'Your baby prefers looking at faces and high-contrast objects over subtle patterns.',
    'Your baby can track a moving object by 2-3 months and reach for objects by 4-5 months.',
    'Your child passed their photoscreening at well-child visits.',
  ],
  whenToMention: [
    'Your baby does not make eye contact or track objects by 3 months of age.',
    'You notice one eye turning in, out, up, or down consistently after 4 months of age.',
    'Your baby has a white or cloudy appearance in the pupil, or the red reflex test is abnormal.',
    'Your child squints frequently, tilts their head to see, or holds objects very close to their face.',
  ],
  whenToActNow: [
    'You notice a white pupil (leukocoria) in one or both eyes, which can indicate retinoblastoma or congenital cataracts and requires urgent ophthalmologic evaluation.',
    'Your baby sustained an eye injury or has a foreign body in the eye.',
    'Your baby has sudden onset of eye swelling, redness, and discharge that may indicate orbital cellulitis.',
  ],
  relatedMilestones: [
    'vision',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'crossed-eyes',
    'nystagmus-baby',
    'anisocoria-unequal-pupils',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults by Pediatricians. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153596/52600/Visual-System-Assessment-in-Infants-Children-and',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Eye Screening for Children.',
      url: 'https://www.aao.org/eye-health/tips-prevention/children-eye-screening',
    },
    {
      org: 'NIH',
      citation:
        'NIH National Eye Institute. Your Child\'s Vision.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/keep-your-eyes-healthy/your-childs-vision',
    },
  ],
};
