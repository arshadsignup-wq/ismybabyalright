import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-thumb-sucking',
  title: 'Toddler Thumb Sucking',
  category: 'behavior',
  searchTerms: [
    'toddler thumb sucking',
    'when to stop thumb sucking',
    'toddler still sucks thumb',
    'thumb sucking and teeth',
    'how to stop thumb sucking toddler',
    'child sucks thumb to sleep',
    'thumb sucking dental problems',
    'is thumb sucking bad for teeth',
    'toddler finger sucking',
    'thumb sucking habit breaking',
  ],
  quickAnswer:
    'Thumb sucking is one of the most natural self-soothing behaviors in children. Many babies begin sucking their thumbs in the womb. It provides comfort, helps with sleep, and is a healthy coping mechanism for young children. The AAP and American Dental Association agree that thumb sucking is not a concern for dental development in most children under age 4. The vast majority of children stop on their own before starting kindergarten.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Thumb sucking in infancy is completely normal and beneficial. It satisfies the natural sucking reflex, provides comfort, and helps babies self-soothe. There is no reason to discourage thumb sucking at this age. Some babies prefer their thumb over a pacifier, and that is perfectly fine. The sucking reflex is strongest in the first few months and naturally diminishes over time.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Many toddlers continue to suck their thumb, especially when tired, anxious, or falling asleep. This is a healthy self-regulation tool. There is no need to try to stop it at this age. Drawing attention to the habit or creating negative associations can actually make it more persistent. Simply let it be.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Thumb sucking often naturally decreases as children develop other coping strategies and become more socially aware. If your child still sucks their thumb at this age, especially at bedtime or during quiet times, it is not a cause for concern. Dental effects are generally reversible if the habit stops before permanent teeth come in (around age 5-6). Gentle, positive approaches work better than punishment or shaming.',
    },
    {
      ageRange: '4-6 years',
      context:
        'If thumb sucking is still vigorous and frequent after age 4, it is worth discussing with your dentist and pediatrician. Prolonged, intense thumb sucking can affect the alignment of incoming permanent teeth and the shape of the palate. However, many children stop naturally when social pressure from peers increases. Positive reinforcement (reward charts, praise) is more effective than negative approaches. Bitter-tasting nail products should only be used if the child agrees.',
    },
  ],
  whenNormal: [
    'Your child is under 4 and sucks their thumb mainly for comfort during sleep, stress, or quiet times',
    'Baby teeth are well-aligned and your dentist has no concerns',
    'Thumb sucking is decreasing naturally over time',
    'Your child can stop when engaged in interesting activities and does not suck constantly throughout the day',
    'Your child uses thumb sucking as one of several self-soothing strategies',
  ],
  whenToMention: [
    'Your child is over 4 and sucks their thumb vigorously and frequently, and you notice changes in tooth alignment or the shape of the palate',
    'Thumb sucking is so constant that it interferes with speech, eating, or social interactions',
    'Your child\'s thumb has sores, calluses, or skin breakdown from intense sucking',
  ],
  whenToActNow: [
    'Your child has a significant dental problem that your dentist attributes to thumb sucking and needs evaluation or treatment',
    'Thumb sucking is accompanied by other repetitive, distressed behaviors and your child seems unable to stop despite wanting to',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Thumb Sucking. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Thumb-Sucking.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Thumb Sucking. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/002392.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pacifiers and Thumb Sucking. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers-Satisfying-Your-Babys-Needs.aspx',
    },
  ],
};
