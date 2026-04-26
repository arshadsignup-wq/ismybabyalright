import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-self-feeding',
  title: 'Baby Not Self-Feeding',
  category: 'feeding',
  searchTerms: [
    'baby not self feeding',
    'baby won\'t feed themselves',
    'baby not picking up food',
    'baby won\'t use hands to eat',
    'when should baby self feed',
    'baby not using pincer grasp for food',
    'toddler wants to be spoon fed',
    'baby won\'t hold own food',
    'when do babies finger feed',
    'baby not interested in finger foods',
  ],
  quickAnswer:
    'Self-feeding is a skill that develops gradually. Most babies begin reaching for food and bringing it to their mouth around 7 to 9 months, first using a whole-hand grasp and later developing the pincer grasp (thumb and forefinger) around 9 to 12 months. Every baby develops on their own timeline, and some are more interested in self-feeding than others. Giving your baby regular opportunities to practice with safe finger foods is the best way to encourage this skill.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Babies at this age are just beginning to explore food. They may swipe at food on their tray, grab at your spoon, or bring large pieces of food to their mouth using a palmar (whole-hand) grasp. This is the very beginning of self-feeding. Let your baby explore food with their hands even if most of it ends up on the floor or in their hair. Pre-loaded spoons (where you put food on the spoon and hand it to your baby) are a good way to introduce utensil use early.',
    },
    {
      ageRange: '8-10 months',
      context:
        'Most babies are actively picking up food and bringing it to their mouth by this age, though it is still messy. Soft finger foods like small pieces of banana, avocado, well-cooked sweet potato, or puffs are great for practice. If your baby is not yet picking up food, make sure they are getting plenty of opportunity during meals with food placed directly on their tray. Some babies are more cautious and prefer to watch before trying.',
    },
    {
      ageRange: '10-12 months',
      context:
        'The pincer grasp (picking up small objects between thumb and forefinger) typically develops around 9 to 12 months and is a key milestone for self-feeding. Your baby should be picking up small pieces of food and bringing them to their mouth, even if they are still messy. If your baby shows no interest in touching food or picking it up by 12 months, mention it to your pediatrician, as it may be related to fine motor development or sensory processing.',
    },
    {
      ageRange: '1-2 years',
      context:
        'By 12 to 15 months, most toddlers are actively self-feeding with fingers and beginning to use a spoon (with lots of spilling). By 18 to 24 months, spoon use becomes more proficient, and many toddlers can also stab food with a fork. Some toddlers prefer being fed and refuse to feed themselves. This is often about control or sensory preferences rather than ability. Continue offering opportunities for self-feeding while respecting their pace.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By two years, most children can feed themselves with a spoon and fork with minimal assistance. If your child strongly resists self-feeding, seems unable to manage utensils, or has difficulty with the hand-to-mouth coordination needed for finger feeding, a developmental or feeding evaluation may be helpful. Occupational therapy can support fine motor skill development for self-feeding.',
    },
  ],
  whenNormal: [
    'Your 6 to 8 month old is more interested in squishing and exploring food than actually eating it',
    'Your baby uses a raking or whole-hand grasp to pick up food before developing a pincer grasp',
    'Your baby self-feeds finger foods but still needs help with spoon-feeding',
    'Your toddler goes through phases of wanting to be fed and phases of insisting on doing it themselves',
  ],
  whenToMention: [
    'Your baby is over 12 months and shows no interest in touching, picking up, or bringing food to their mouth',
    'Your baby has difficulty with the pincer grasp not just for food but for small objects in general',
    'Your toddler has significant difficulty using utensils compared to peers and seems frustrated by the task',
  ],
  whenToActNow: [
    'Your baby has a global delay in fine motor skills along with feeding difficulties, which may indicate a developmental concern needing evaluation',
    'Your child is losing weight because they will not self-feed and are refusing to be fed by others',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Finger Foods.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/finger-foods.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-Months.aspx',
    },
  ],
};
