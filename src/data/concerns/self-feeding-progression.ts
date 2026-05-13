import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'self-feeding-progression',
  title: 'Self-Feeding Milestones and Progression',
  category: 'feeding',
  searchTerms: [
    'when do babies start self feeding',
    'baby self feeding milestones',
    'baby won\'t feed themselves',
    'when can baby use a spoon',
    'toddler won\'t use utensils',
    'baby self feeding progression',
    'when should toddler use fork',
    'baby pincer grasp feeding',
    'teaching baby to self feed',
  ],
  quickAnswer:
    'Self-feeding develops gradually from around six months when babies start raking food with their whole hand, to a refined pincer grasp by nine to twelve months, to using a spoon and fork by 18 to 24 months. Every child progresses at their own pace, and messy eating is an essential part of learning. Giving your child regular opportunities to practice is the best way to support this skill.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Around six months, babies begin reaching for food and bringing it to their mouth using a palmar (whole-hand) grasp. By eight to nine months, most babies develop a pincer grasp, using their thumb and forefinger to pick up small pieces of food. Early self-feeding is messy and inefficient, and that is completely normal. Let your baby explore food with their hands even if most of it ends up on the floor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Between 12 and 15 months, most toddlers begin attempting to use a spoon, though they will be quite inaccurate at first. By 18 to 24 months, many toddlers can scoop food with a spoon and bring it to their mouth with some success. Offering pre-loaded spoons is a helpful bridge. Fork use typically comes a bit later, around 18 to 24 months. Continue allowing hand feeding alongside utensil practice.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By two to three years, most children can use a spoon and fork with reasonable accuracy, though some spills are still expected. If your child shows little interest in self-feeding or seems unable to bring food to their mouth independently by this age, mention it to your pediatrician, as it could indicate fine motor delays that benefit from early intervention.',
    },
  ],
  whenNormal: [
    'Your baby makes a big mess while learning to self-feed and drops most food on the floor initially',
    'Your baby alternates between wanting to self-feed and wanting to be fed, depending on how hungry or tired they are',
    'Your toddler uses their hands more than utensils, even after months of practice',
    'Your toddler can use a spoon but frequently turns it upside down before it reaches their mouth',
  ],
  whenToMention: [
    'Your baby over 10 months shows no interest in picking up food or bringing it to their mouth',
    'Your toddler over 18 months cannot hold or attempt to use a spoon at all',
    'Your child seems to have difficulty with the fine motor skills needed to pick up small foods by 12 months',
    'Your child strongly resists touching food and will only eat if fed by a caregiver past 18 months',
  ],
  whenToActNow: [
    'Your child is losing weight because they cannot get enough food into their mouth independently and refuse to be fed',
    'Your child has a sudden loss of previously acquired self-feeding skills',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Feeding. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Self-Feeding.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby by Twelve Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-Months-to-12-Months.aspx',
    },
  ],
};
