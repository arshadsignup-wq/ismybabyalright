import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-jerky-movements',
  title: 'My Baby Has Jerky Movements',
  category: 'physical',
  searchTerms: [
    'baby jerky movements',
    'newborn jerky arms',
    'baby twitchy movements',
    'baby flailing arms and legs',
    'baby sudden jerking',
    'infant spastic movements',
    'baby arms and legs jerk',
    'normal baby jerks',
    'baby erratic movements',
  ],
  quickAnswer:
    'Newborns and young babies often have jerky, uncoordinated movements because their nervous systems are still developing. What looks like random flailing is actually your baby learning how their body works. These movements typically become smoother and more controlled by 3-4 months as motor skills mature.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Jerky, almost spastic movements are completely normal at this age. Your baby\'s nervous system is immature, and they haven\'t yet learned to control their muscles smoothly. You might see their arms and legs shoot out suddenly, or their whole body make a big jerking motion, especially when they\'re startled or during sleep transitions. This is typical newborn behavior and will smooth out as their brain develops.',
    },
    {
      ageRange: '3-5 months',
      context:
        'By this age, you should start to see movements become more purposeful and less jerky. Your baby is learning to reach for things, bring hands to mouth, and control their head and neck smoothly. Some jerkiness is still normal, especially when they\'re excited or trying something new. If movements are becoming smoother overall, things are progressing well.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Most movements should be fairly smooth and coordinated by now, though your baby might still have some jerky motions when they\'re tired, excited, or concentrating hard on a new skill. If your baby\'s movements seem as jerky and uncontrolled as they were at birth, or if one side of the body moves very differently from the other, talk to your pediatrician.',
    },
    {
      ageRange: '10+ months',
      context:
        'By this age, jerky movements should be rare. Your baby\'s movements might still be clumsy (that\'s normal as they learn to walk and manipulate objects), but they shouldn\'t look spastic or uncontrolled. Persistent jerky movements at this age warrant an evaluation to make sure everything is developing as it should.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and has jerky arm and leg movements, especially when excited, crying, or falling asleep.',
    'The jerky movements are equal on both sides of the body.',
    'Your baby is becoming more coordinated over time  -  even if they\'re still a bit jerky, you can see progress.',
    'Your baby can be soothed when movements happen and doesn\'t seem scared or in pain.',
    'Movements happen during wake times and sleep transitions but your baby can also have periods of calm, smooth movement.',
  ],
  whenToMention: [
    'Your baby is over 6 months and movements still seem very jerky or spastic most of the time.',
    'One side of your baby\'s body moves much more jerkily than the other, or one limb seems particularly stiff or floppy.',
    'Jerky movements seem to be getting worse instead of better as your baby gets older.',
  ],
  whenToActNow: [
    'Jerky movements are rhythmic (same motion over and over), last more than a few seconds, and your baby can\'t be interrupted or soothed  -  this could be a seizure.',
    'Your baby\'s body goes stiff, their eyes roll back, or they lose consciousness during jerky episodes.',
    'Jerky movements started suddenly and are accompanied by fever, vomiting, or your baby seems very unwell.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'fine-motor-reaching',
    'gross-motor-rolling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement: Birth to 3 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  When to Act Early: Developmental Red Flags',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three  -  Your Baby\'s Development: Movement and Physical Development',
      url: 'https://www.zerotothree.org/resource/your-babys-development-movement-and-physical-development/',
    },
  ],
};
