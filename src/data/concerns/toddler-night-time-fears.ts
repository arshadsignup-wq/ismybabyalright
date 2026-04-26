import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-night-time-fears',
  title: 'Toddler Night-Time Fears',
  category: 'behavior',
  searchTerms: [
    'toddler afraid of the dark',
    'toddler nighttime fears',
    'toddler scared at bedtime',
    'toddler afraid of monsters',
    'toddler won\'t sleep afraid',
    'child fear of dark',
    'toddler bedtime anxiety',
    'toddler afraid of shadows',
    'toddler scared to sleep alone',
    'night fears toddler',
    'toddler nighttime anxiety',
  ],
  quickAnswer:
    'Night-time fears are a completely normal part of development that typically emerge between ages 2 and 4. This is actually a sign of cognitive growth - your child\'s imagination is developing rapidly, and they now have the ability to imagine things that are not there. They cannot yet fully distinguish between real and imaginary, which makes the dark feel genuinely scary. With reassurance, consistent bedtime routines, and respect for their feelings, most children work through night-time fears within weeks to months.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'True fear of the dark is uncommon at this age because imagination has not fully developed yet. If your young toddler resists bedtime, it is more likely related to separation anxiety than fear. Maintaining a consistent, soothing bedtime routine and offering comfort objects like a favorite stuffed animal can help. A dim nightlight is fine at any age if it provides comfort.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'Imagination begins to bloom, and with it, early fears. Your toddler may resist the dark or feel uneasy in their room at night. They may not be able to articulate what scares them. A nightlight, a "checking" routine where you look under the bed and in the closet together, and extra cuddles at bedtime can all help. Avoid dismissing their feelings - saying "there\'s nothing to be scared of" is less effective than "I understand you feel scared. I am right here."',
    },
    {
      ageRange: '2.5-4 years',
      context:
        'This is the peak age for night-time fears. Monsters under the bed, shadows on the wall, and scary sounds are common concerns. Your child\'s fear is real to them, even though you know there is nothing there. Empowering strategies work well: a flashlight to check for monsters, "monster spray" (water in a spray bottle), or a brave stuffed animal "guard." Avoid scary media content, even things marketed for children. Keep the bedtime routine calm, consistent, and reassuring.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Night-time fears may persist but usually become less intense as children develop the cognitive ability to distinguish fantasy from reality. You can start having conversations about what is real and what is pretend. If fears are so intense that your child cannot fall asleep most nights, is having frequent nightmares, or is severely anxious throughout the evening, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your child is between 2 and 5 and has recently developed a fear of the dark or of things in their room',
    'Fears are manageable with a nightlight, comfort objects, and a reassuring bedtime routine',
    'Your child can eventually fall asleep with support and sleeps through most of the night',
    'Night-time fears are worse after exciting or stressful days or after seeing something scary',
    'Your child is not anxious or fearful during the daytime',
  ],
  whenToMention: [
    'Night-time fears are so intense that your child cannot fall asleep for hours most nights despite consistent comfort and routines',
    'Anxiety extends beyond bedtime into daytime activities and your child seems generally anxious or worried',
    'Your child is having frequent, intense nightmares or night terrors that are disrupting the entire family\'s sleep',
  ],
  whenToActNow: [
    'Your child develops sudden, severe fear of their room or bed and the fear is accompanied by other behavioral changes that concern you',
    'Night-time anxiety is causing significant daily impairment - your child is exhausted, cannot function at school or daycare, and the situation is getting worse',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'cognitive-problem-solving',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Nightmares. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/003209.htm',
    },
  ],
};
