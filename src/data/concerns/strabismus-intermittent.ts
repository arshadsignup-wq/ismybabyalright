import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'strabismus-intermittent',
  title: 'My Baby\'s Eyes Sometimes Cross (Intermittent Strabismus)',
  category: 'medical',
  searchTerms: [
    'baby eyes cross sometimes',
    'baby intermittent strabismus',
    'baby eyes wander occasionally',
    'baby one eye drifts',
    'baby eyes not always aligned',
    'baby eye turns in sometimes',
    'baby eye turns out sometimes',
    'intermittent exotropia baby',
    'baby eyes cross when tired',
    'baby occasional eye crossing',
  ],
  quickAnswer:
    'Occasional, brief eye crossing in babies under 3-4 months is very common and almost always normal as their eye muscles and coordination develop. By 4 months, the eyes should be consistently aligned. If crossing persists intermittently beyond 4 months, or if one eye consistently drifts outward (intermittent exotropia), a pediatric ophthalmology evaluation is recommended to prevent vision problems.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Intermittent eye crossing in newborns is extremely common and usually a normal part of visual development. The muscles that coordinate eye movement are still maturing, and it takes time for the brain to learn to control both eyes together. Pseudostrabismus (the appearance of crossed eyes due to a wide nasal bridge and prominent epicanthal folds) is also very common and can make normally aligned eyes look crossed. During this period, it is important to distinguish between intermittent crossing (which is usually normal) and constant crossing in one direction (which should be evaluated at any age).',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4 months, eye alignment should be consistent. If intermittent crossing is still occurring, it warrants a closer look. Your pediatrician can perform a simple cover-uncover test and a corneal light reflex test to assess alignment. If there is any concern, a referral to a pediatric ophthalmologist is appropriate. Early evaluation is important because strabismus, if left untreated, can lead to amblyopia (lazy eye), where the brain begins to suppress input from the misaligned eye.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Intermittent exotropia (where one eye occasionally drifts outward) may become apparent at this age, often most noticeable when the child is tired, sick, daydreaming, or looking at distant objects. While mild intermittent exotropia may initially be observed, it often progresses and eventually requires treatment. A pediatric ophthalmologist can monitor the frequency and magnitude of the drift and recommend intervention (patching, glasses, or surgery) when appropriate.',
    },
    {
      ageRange: '18 months+',
      context:
        'Any new onset of eye crossing in a toddler or older child should be evaluated. Accommodative esotropia (crossing caused by farsightedness) commonly presents between ages 2-3 and is treated with glasses. Intermittent strabismus that is becoming more frequent or more pronounced over time suggests the condition is worsening. Treatment options depend on the type and include glasses, vision therapy, patching, and sometimes surgery. The goal is to maintain equal vision in both eyes and, if possible, restore binocular (3D) vision.',
    },
  ],
  whenNormal: [
    'Brief, occasional crossing in a baby under 3-4 months that comes and goes randomly and does not persist',
    'Eyes that appear crossed but are actually aligned normally due to a wide nasal bridge (pseudostrabismus)  -  your pediatrician can confirm this with a simple light test',
    'Both eyes track objects and faces smoothly together most of the time',
  ],
  whenToMention: [
    'Intermittent crossing or drifting persists beyond 4 months of age, even if it is not constant',
    'You notice one eye drifts outward, especially when your child is tired, looking at something far away, or staring off in the distance',
    'Your child tilts or turns their head in an unusual way, squints frequently, or closes one eye in bright light',
  ],
  whenToActNow: [
    'One eye is constantly turned in any direction at any age (not just intermittently), as constant strabismus requires prompt evaluation to prevent permanent vision loss from amblyopia',
    'A sudden new onset of eye crossing in any child, especially if accompanied by headache, vomiting, a head tilt, double vision complaints, or a change in the appearance of the pupil  -  seek same-day evaluation as this can rarely indicate a neurological problem',
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
        'HealthyChildren.org. Strabismus (Crossed Eyes).',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Strabismus.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Donahue SP, et al. Procedures for the Evaluation of the Visual System by Pediatricians. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153596/52600/Procedures-for-the-Evaluation-of-the-Visual-System',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Strabismus: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/strabismus/symptoms-causes/syc-20353205',
    },
  ],
};
