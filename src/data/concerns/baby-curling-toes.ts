import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-curling-toes',
  title: 'My Baby Curls Their Toes',
  category: 'physical',
  searchTerms: [
    'baby curling toes',
    'baby toes curl under',
    'baby clenches toes',
    'baby curled toes when standing',
    'baby toe curling normal',
    'infant curling toes down',
    'baby gripping with toes',
    'baby plantar grasp reflex',
    'baby toes always curled',
    'toddler scrunching toes',
  ],
  quickAnswer:
    'Toe curling is very common in babies and is usually caused by the plantar grasp reflex, which is a normal newborn reflex that causes toes to curl when the sole of the foot is touched. This reflex typically fades by 9-12 months. Occasional toe curling during standing or walking is also normal as babies figure out their balance. Persistent, tight toe curling past 12 months may warrant a mention to your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The plantar grasp reflex causes babies to curl their toes when the ball of their foot is pressed. This is a completely normal primitive reflex. You will notice it when your baby is held in a standing position and their feet touch a surface, or when you stroke the sole of their foot. Babies at this age are not weight-bearing, so toe curling has no impact on movement. There is no need for concern unless your baby\'s toes seem rigidly curled and cannot be gently straightened.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As babies begin to bear weight on their legs, you might notice toe curling when they stand with support. This is a normal part of figuring out balance and foot positioning. The plantar grasp reflex is beginning to fade during this period. Some babies curl their toes on certain surfaces (cold floors, grass) as a sensory response. If your baby can straighten their toes and the curling is intermittent, this is typical.',
    },
    {
      ageRange: '9-14 months',
      context:
        'The plantar grasp reflex should be fading or gone by this age. Babies who are cruising or beginning to walk may still curl their toes occasionally, especially on unfamiliar surfaces or when feeling unsteady. However, if your baby consistently curls their toes tightly when standing or walking and cannot seem to relax them, mention it at your next appointment. Persistent toe curling can sometimes indicate increased muscle tone in the feet or lower legs.',
    },
    {
      ageRange: '14+ months',
      context:
        'Once your child is walking confidently, their toes should be mostly flat and relaxed during walking. Occasional toe scrunching is still normal, especially in shoes or on textured surfaces. If your toddler always walks with curled toes, has difficulty wearing shoes because of toe curling, or seems to be in discomfort, your pediatrician may refer you to a pediatric orthopedist or physical therapist. Tight calf muscles or increased tone can contribute to persistent toe curling.',
    },
  ],
  whenNormal: [
    'Your baby curls their toes when you touch the sole of their foot (plantar grasp reflex) and they are under 12 months.',
    'Your baby occasionally curls their toes when standing on cold, unfamiliar, or textured surfaces.',
    'Your baby curls their toes when learning to stand or walk but can straighten them when relaxed.',
    'Your toddler scrunches their toes sometimes in shoes but walks with flat feet most of the time.',
  ],
  whenToMention: [
    'Your baby\'s toes are persistently curled even when relaxed and at rest, and seem difficult to straighten.',
    'Your toddler always walks with curled toes and never seems to flatten their feet completely.',
    'The toe curling is accompanied by stiffness in the ankles or calves.',
  ],
  whenToActNow: [
    'Your baby\'s toes are rigidly curled and you cannot gently straighten them, or straightening causes apparent pain.',
    'Toe curling is accompanied by progressive stiffness in the legs, changes in walking pattern, or loss of previously achieved motor skills.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-walking',
    'gross-motor-cruising',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Palpalano S. Primitive Reflexes in the Newborn. Pediatrics in Review. 2017.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Infant Development: Milestones from 10 to 12 Months.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047380',
    },
  ],
};
