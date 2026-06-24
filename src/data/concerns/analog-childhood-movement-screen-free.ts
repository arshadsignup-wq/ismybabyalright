import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'analog-childhood-movement-screen-free',
  title: 'Raising a Screen-Free Baby: Movement and Analog Play',
  category: 'behavior',
  searchTerms: [
    'screen free baby benefits',
    'no screen time baby development',
    'analog play infant',
    'movement based play baby',
    'screen free childhood',
    'baby too much screen time',
    'alternatives to screen time baby',
    'physical play instead of screens toddler',
    'screen free parenting tips',
    'outdoor play baby development',
  ],
  quickAnswer:
    'The AAP recommends no screen time for children under 18 months (except video calls) and limited, high-quality programming for ages 18-24 months with a caregiver. Movement-based and analog play supports healthy brain development, motor skills, and social-emotional growth. Active, hands-on play helps babies build neural connections more effectively than passive screen viewing.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'At this age, your baby learns best through face-to-face interaction, tummy time, reaching for objects, and being talked to. Screen time provides no developmental benefit and may displace crucial interactive time. Simple activities like tummy time, playing with rattles, looking at high-contrast images, and being carried in different positions all promote motor development and sensory exploration far more effectively than any screen content.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins sitting, crawling, and exploring, physical play becomes even more important. Stacking cups, banging pots, crawling through tunnels, and playing peekaboo all build motor skills, spatial awareness, and cause-and-effect understanding. The AAP continues to recommend avoiding screen media at this age. If screens are used occasionally, they should never replace active play or caregiver interaction.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers benefit enormously from unstructured physical play - climbing, running, dancing, playing with sand and water, and exploring nature. From 18-24 months, small amounts of high-quality educational programming watched together with a caregiver can be appropriate, but should not replace active play. The key is balance: toddlers need at least 180 minutes of physical activity daily, including active outdoor play when possible.',
    },
  ],
  whenNormal: [
    'Your baby prefers playing with physical objects and interacting with people over watching screens.',
    'Your toddler watches some age-appropriate content with you and easily transitions to other activities afterward.',
    'Your child meets motor milestones on schedule and enjoys active, physical play throughout the day.',
  ],
  whenToMention: [
    'Your toddler becomes extremely upset or has prolonged tantrums when screens are turned off.',
    'Your child seems to prefer screens over interacting with people or engaging in physical play.',
    'You notice your child\'s motor development seems delayed and they spend significant time in sedentary screen viewing.',
  ],
  whenToActNow: [
    'Your child is showing signs of developmental delay in motor skills, language, or social interaction regardless of screen use.',
    'Your toddler is completely uninterested in any form of play or interaction except screen content.',
    'Your child has had a seizure triggered by screen content (photosensitive seizures).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'overstimulation-signs',
    'understimulation-signs',
    'baby-fine-motor-delay-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age, 2019.',
      url: 'https://www.who.int/publications/i/item/9789241550536',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Physical Activity Guidelines for Children Under 6.',
      url: 'https://www.cdc.gov/physical-activity-basics/guidelines/children-and-adolescents.html',
    },
  ],
};
