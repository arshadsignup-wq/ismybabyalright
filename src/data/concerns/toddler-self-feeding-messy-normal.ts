import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-self-feeding-messy-normal',
  title: 'Is It Normal That My Toddler\'s Self-Feeding Is So Messy?',
  category: 'feeding',
  searchTerms: [
    'toddler messy eater normal',
    'toddler self feeding messy',
    'toddler eating with hands',
    'toddler food everywhere',
    'when do toddlers eat neatly',
    'toddler messy eating development',
    'toddler won\'t use spoon properly',
    'toddler drops food on floor',
    'messy eating toddler age',
    'toddler food play normal',
  ],
  quickAnswer:
    'Yes, messy self-feeding is completely normal and an important part of your toddler\'s development. Toddlers are developing fine motor skills, hand-eye coordination, and sensory awareness through the act of touching, squishing, and exploring food. Most toddlers begin using a spoon independently around 15-18 months, but neatness improves slowly over the next two years. Allowing messy eating actually supports healthy feeding development and positive relationships with food.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'When babies first start solids, eating is as much about exploration as nutrition. Babies use their hands to feel textures, bring food to their mouths, and learn about cause and effect (drop food, parent picks it up). This sensory exploration is important for developing comfort with different food textures and reducing picky eating later. Offer soft finger foods and let your baby practice. The mess is part of the learning process and should be expected — spread a mat under the high chair for easy cleanup.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers begin showing interest in using a spoon, though they will be very inaccurate at first. Most food ends up on their face, hair, bib, and the floor rather than in their mouth. This is normal and expected. Offer a preloaded spoon (you load it, they bring it to their mouth) to build success. Let your toddler alternate between fingers and utensils. Resist the urge to take over feeding — even though you could do it faster and neater, self-feeding develops important motor skills and autonomy.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Spoon and fork accuracy improves gradually. By age 2, most toddlers can use a spoon with moderate accuracy, though spills are still common. By age 3, eating becomes noticeably neater, though not adult-level tidy. Fork use develops after spoon use — stabbing food requires more coordination. If your toddler seems to have no interest in self-feeding at all by 18 months, or cannot bring any food to their mouth independently, mention this to your pediatrician as it may indicate fine motor or developmental concerns.',
    },
  ],
  whenNormal: [
    'Your toddler gets food in their hair, on the floor, and everywhere except their mouth during self-feeding attempts',
    'Your toddler prefers eating with hands rather than utensils — most toddlers use hands alongside utensils until age 3-4',
    'Your toddler plays with food, squishes it, and smears it — this is sensory exploration, not misbehavior',
    'Your toddler\'s utensil accuracy varies widely from meal to meal',
  ],
  whenToMention: [
    'Your toddler shows no interest in self-feeding or bringing food to their mouth by 15-18 months',
    'Your toddler cannot hold a spoon or grasp food by 12-15 months',
    'Your toddler was self-feeding but has stopped and now insists on being fed entirely',
  ],
  whenToActNow: [
    'Your toddler has lost the ability to grasp objects or bring things to their mouth after previously being able to',
    'Your toddler chokes frequently during self-feeding, which may indicate a swallowing or coordination problem',
    'Your toddler\'s hands tremble significantly or they seem unable to control their fine motor movements',
  ],
  relatedMilestones: [
    'feeding-self-feeding',
    'fine-motor-grasp',
    'fine-motor-manipulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-utensil-refusal',
    'throwing-food',
    'toddler-food-texture-sensitivity',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Self-Feeding.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Mealtime.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/index.html',
    },
    {
      org: 'Ellyn Satter Institute',
      citation:
        'Ellyn Satter Institute. How to Get Your Toddler to Eat Well.',
      url: 'https://www.ellynsatterinstitute.org/how-to-feed/the-division-of-responsibility-in-feeding/',
    },
  ],
};
