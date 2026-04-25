import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'delayed-fine-motor',
  title: 'My Baby\'s Fine Motor Skills Seem Delayed',
  category: 'physical',
  searchTerms: [
    'baby fine motor delay',
    'baby not using hands well',
    'baby behind on fine motor skills',
    'baby can\'t stack blocks',
    'baby not self feeding',
    'delayed fine motor development',
    'baby clumsy with hands',
    'baby fine motor milestones',
    'toddler fine motor delay',
    'baby not picking up food',
  ],
  quickAnswer:
    'Fine motor skills, the small, precise movements of the hands and fingers, develop gradually throughout the first two years. Babies develop at different rates, and being a bit behind on one fine motor skill does not necessarily indicate a problem. However, if your baby seems significantly behind across multiple fine motor milestones, an occupational therapy evaluation can identify areas for support and help your child catch up.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Fine motor development starts with reflexive grasping and progresses to opening the hands, swiping at objects, and bringing hands to the mouth and midline. By 3-4 months, most babies are batting at dangling toys, opening and closing their hands, and beginning to hold a lightweight rattle when it is placed in their hand. If your baby is not opening their hands from a fisted position by 3-4 months or is not bringing their hands to midline, mention it to your pediatrician.',
    },
    {
      ageRange: '5-8 months',
      context:
        'This is a period of rapid fine motor development. Babies learn to reach accurately, grasp objects voluntarily, transfer toys between hands (around 6 months), and begin to use a raking grasp to pick up smaller items. They also start to bang objects together and explore toys with their fingers and mouth. If your baby is not reaching for objects by 5 months or cannot hold a toy by 6 months, evaluation is recommended.',
    },
    {
      ageRange: '9-12 months',
      context:
        'The pincer grasp (thumb and forefinger) develops during this period, allowing babies to pick up small foods and objects. Babies also begin to point, poke at things with their index finger, put objects into containers, and turn pages of board books. If your baby is not developing a pincer grasp by 12 months, cannot hold a bottle or cup, or shows very limited hand use during play, mention it at your well visit.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers refine their fine motor skills dramatically. They learn to stack blocks (2-3 blocks by 15 months, more by 18-24 months), use a spoon (messily at first), scribble with a crayon, turn pages, and begin to undress themselves. Every child develops at their own pace, but if your toddler seems significantly behind on multiple fine motor milestones, an occupational therapy evaluation can provide targeted support. Early intervention for fine motor skills is highly effective.',
    },
  ],
  whenNormal: [
    'Your baby is a bit behind on one fine motor skill but is progressing in other areas of fine motor development.',
    'Your baby was premature and is meeting fine motor milestones based on adjusted age rather than chronological age.',
    'Your baby prefers gross motor play and is less interested in fine motor tasks, but can do them when motivated.',
    'Your toddler is messy with self-feeding and spoon use, which is completely normal and part of learning.',
  ],
  whenToMention: [
    'Your baby seems significantly behind on multiple fine motor milestones for their age.',
    'Your baby avoids using their hands for play and exploration, or seems frustrated by fine motor tasks.',
    'Your baby has difficulty coordinating both hands together for activities like clapping, holding a bottle, or banging toys.',
  ],
  whenToActNow: [
    'Your baby or toddler has lost fine motor skills they previously had, such as no longer grasping objects they could hold before.',
    'Your baby has no voluntary hand use by 6 months and does not reach for, grasp, or manipulate objects at all.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-transferring',
    'fine-motor-pincer-grasp',
    'fine-motor-self-feeding',
    'fine-motor-stacking',
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
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 12 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Infant Development: Milestones from 10 to 12 Months.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047380',
    },
  ],
};
