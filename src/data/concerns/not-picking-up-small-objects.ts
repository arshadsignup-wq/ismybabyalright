import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-picking-up-small-objects',
  title: 'My Baby Can\'t Pick Up Small Objects',
  category: 'physical',
  searchTerms: [
    'baby can\'t pick up small things',
    'baby no pincer grasp',
    'baby can\'t pick up cheerios',
    'baby can\'t use thumb and finger',
    'when do babies develop pincer grasp',
    'baby raking instead of picking up',
    'baby can\'t pick up puffs',
    'delayed pincer grasp baby',
    'baby fine motor delay',
    'baby can\'t grab small food',
  ],
  quickAnswer:
    'The pincer grasp, using the thumb and forefinger to pick up small objects, typically develops between 8 and 12 months. Before that, babies use a raking or whole-hand scooping motion, which is perfectly normal. If your baby is not showing any pincer grasp by 12 months, it is worth mentioning to your pediatrician, but many babies are simply on the later end of the normal range.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'At this age, babies are just learning to grasp objects using their whole hand (palmar grasp). They will rake at objects on a surface, scooping them toward themselves with all their fingers. Picking up small objects with fingers is not expected yet. Giving your baby age-appropriate toys of different sizes and textures helps develop their grasping skills.',
    },
    {
      ageRange: '7-9 months',
      context:
        'The transition from a raking or whole-hand grasp to a more refined grasp is underway. Many babies develop an "inferior pincer grasp" first, using the pads of their thumb and forefinger rather than the tips. Your baby may be able to pick up larger pieces of food or toys but still struggle with very small items like individual cereal pieces. This is a skill that develops with practice. Offering safe finger foods during meals is a great way to encourage this development.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies develop a true pincer grasp during this period, allowing them to pick up small items between the tips of their thumb and forefinger. If your baby is still only raking at small objects by 12 months and cannot isolate their thumb and finger to pick things up, mention it at your 12-month well visit. Your pediatrician may recommend an occupational therapy evaluation to help with fine motor development.',
    },
    {
      ageRange: '12+ months',
      context:
        'By 12-15 months, the pincer grasp should be well-established, and your toddler should be able to pick up small foods, turn pages of a board book, and place objects in containers. If your child cannot pick up small objects at all by 15 months, an occupational therapy evaluation can identify whether there is a fine motor delay and provide targeted activities to build these skills. Early intervention for fine motor skills is very effective.',
    },
  ],
  whenNormal: [
    'Your baby under 8 months uses a raking or whole-hand grasp, as the pincer grasp has not developed yet.',
    'Your 8-10 month old is using an inferior pincer grasp (pads of thumb and finger) and is still refining the skill.',
    'Your baby picks up larger objects easily but struggles with very small items, as precision develops gradually.',
    'Your baby sometimes uses a pincer grasp and sometimes rakes, as they are still learning and both approaches are normal during the transition.',
  ],
  whenToMention: [
    'Your baby is 12 months or older and shows no pincer grasp at all, only raking at small objects.',
    'Your baby avoids picking up small items and seems to have difficulty isolating their fingers for grasping.',
    'Your baby has difficulty with other fine motor tasks alongside the delayed pincer grasp, such as self-feeding or banging toys together.',
  ],
  whenToActNow: [
    'Your baby was previously picking up small objects and has lost this ability, as regression in fine motor skills warrants prompt evaluation.',
    'Your baby cannot grasp objects of any size by 6 months and shows no reaching or grasping behavior.',
  ],
  relatedMilestones: [
    'fine-motor-pincer-grasp',
    'fine-motor-grasping',
    'fine-motor-self-feeding',
    'fine-motor-transferring',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 9 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Infant Development: Milestones from 7 to 9 Months.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047086',
    },
  ],
};
