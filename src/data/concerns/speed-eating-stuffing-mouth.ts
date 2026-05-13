import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'speed-eating-stuffing-mouth',
  title: 'Speed Eating and Stuffing Mouth with Food',
  category: 'feeding',
  searchTerms: [
    'baby stuffing mouth with food',
    'toddler shoving food in mouth',
    'baby eating too fast',
    'toddler speed eating',
    'baby puts too much food in mouth',
    'toddler stuffs cheeks with food',
    'chipmunking food toddler',
    'baby overfilling mouth while eating',
  ],
  quickAnswer:
    'Many babies and toddlers go through a phase of stuffing their mouths with food, which is a normal part of learning about oral capacity and self-regulation. While it can be alarming, most children outgrow this behavior as their oral motor skills mature. Supervising meals closely and offering small portions at a time are the most effective strategies to keep your child safe.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies who are new to self-feeding often do not yet understand how much food fits safely in their mouth. They may grab fistfuls and shove everything in at once. This is developmentally expected. Offer only two or three pieces of food at a time on the tray, and model taking small bites yourself. The gag reflex will help protect your baby, but always supervise closely.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are often enthusiastic but impulsive eaters. They may stuff their mouths because they are very hungry, excited about a favorite food, or have not yet developed the self-regulation to pace themselves. Continue placing small portions on the plate and encourage your toddler to chew and swallow before taking the next bite. Narrating the process ("take a bite, chew, chew, swallow") can help build awareness.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By two to three years, most children are developing better self-regulation around eating pace. If your child continues to stuff large amounts of food in their mouth and seems unable to moderate, consider whether they are very hungry at mealtimes, eating too quickly due to distractions, or potentially have sensory-seeking oral needs. Persistent stuffing behaviors beyond this age may warrant a conversation with your pediatrician or a feeding therapist.',
    },
  ],
  whenNormal: [
    'Your baby or toddler occasionally overfills their mouth with a favorite food but can manage to chew and swallow it',
    'Your child stuffs food when very hungry but slows down as the meal progresses',
    'The behavior is improving gradually over time as your child gains more experience with self-feeding',
    'Your child can clear food from their mouth by chewing and swallowing even when they take a larger bite',
  ],
  whenToMention: [
    'Your child consistently stuffs their mouth at every meal and shows no improvement over several months',
    'Your child frequently gags or vomits from overfilling their mouth',
    'Your child seems unable to gauge how much food is in their mouth and cannot chew effectively',
    'The behavior is accompanied by other feeding difficulties such as extreme food selectivity or difficulty with textures',
  ],
  whenToActNow: [
    'Your child chokes (silent, cannot cough or breathe) from stuffing too much food in their mouth',
    'Your child loses consciousness or turns blue during a meal',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention for Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Feeding. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Self-Feeding.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. How Do Children Develop Healthy Eating Habits? NICHD, 2023.',
      url: 'https://www.nichd.nih.gov/',
    },
  ],
};
