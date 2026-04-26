import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-waking-from-nightmares',
  title: 'Toddler Waking from Nightmares',
  category: 'sleep',
  searchTerms: [
    'toddler waking from nightmares',
    'toddler bad dreams',
    'toddler screaming at night',
    'toddler nightmare vs night terror',
    'child afraid to sleep after nightmare',
    'toddler wakes up scared',
    'when do nightmares start',
    'how to help toddler with nightmares',
    'toddler dreaming at night',
    'toddler wakes crying scared',
  ],
  quickAnswer:
    'Nightmares are a normal part of development and typically begin between ages 2-4 as your child\'s imagination grows. Unlike night terrors, your child wakes fully and can describe feeling scared. Comfort them calmly, reassure them they are safe, and most children settle back to sleep with your gentle presence.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'True nightmares are uncommon before age 2 because the cognitive development needed for complex dreaming is still emerging. If your baby wakes crying at night, it is more likely due to hunger, teething, illness, or a sleep cycle transition than a nightmare. Comfort them as you normally would.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Some toddlers may begin to have simple bad dreams toward the end of this age range. They may wake crying and seem frightened but usually cannot explain why. Hold them, speak softly, and offer reassurance. Keep the room dimly lit so it feels safe. These early nightmares are usually brief and infrequent.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is when nightmares become more common as your child\'s imagination flourishes. They may dream about monsters, separation from you, or scary things they have seen. Go to your child quickly, offer a hug, and tell them they are safe. Avoid dismissing their fear - validate it gently and help them feel protected. A nightlight and a special "brave" stuffed animal can help.',
    },
    {
      ageRange: '3+ years',
      context:
        'Nightmares may increase in complexity. Your child can now describe their dream, which is helpful. Listen calmly, reassure them, and consider a brief calming activity like reading a short book before trying sleep again. Avoid scary media before bed. If nightmares are frequent, talk about them during daytime when your child feels safe.',
    },
  ],
  whenNormal: [
    'Nightmares happen occasionally (a few times a month) and your child settles back to sleep with comfort',
    'Bad dreams increase during times of stress, change, or illness',
    'Your child remembers the dream and can describe feeling scared',
    'Nightmares happen in the second half of the night when REM sleep is heaviest',
    'Your child is comforted by your presence and calms within 10-15 minutes',
  ],
  whenToMention: [
    'Nightmares are happening multiple times per week and significantly disrupting your child\'s sleep and daytime functioning',
    'Your child develops a persistent fear of going to sleep or refuses to sleep in their own room for weeks',
    'Nightmares seem to be related to a specific stressful event and are not improving',
  ],
  whenToActNow: [
    'Your child has episodes where they scream, thrash, and seem awake but are not responsive or aware of you - this may be a night terror rather than a nightmare and should be discussed with your doctor',
    'Nightmares are accompanied by significant daytime behavioral changes, regression, or signs of trauma',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nightmares and Night Terrors in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Nightmares in Children. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/nightmares/nightmares-in-children',
    },
  ],
};
