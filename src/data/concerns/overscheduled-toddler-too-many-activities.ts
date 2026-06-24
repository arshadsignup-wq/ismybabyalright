import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'overscheduled-toddler-too-many-activities',
  title: 'Overscheduled Toddler - Too Many Activities and Classes',
  category: 'behavior',
  searchTerms: [
    'overscheduled toddler',
    'too many activities toddler',
    'toddler classes too much',
    'baby enrichment classes necessary',
    'overstimulated toddler too many activities',
    'toddler burnout signs',
    'how many activities toddler need',
    'unstructured play vs classes toddler',
    'enrichment classes baby necessary',
    'keeping up with other parents activities',
  ],
  quickAnswer:
    'Child development research consistently shows that unstructured free play is more valuable for toddler development than organized activities. While enrichment classes can provide social opportunities and fun, overscheduling can lead to behavioral problems, sleep disruption, increased tantrums, and parental burnout. The AAP emphasizes that play is so important to child development that it should be protected. Toddlers need ample time for self-directed exploration, outdoor play, boredom (which fosters creativity), and rest. One to two structured activities per week is generally sufficient for most toddlers.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Baby classes (music, sensory play, swim, baby gym) are primarily for parent socialization and enjoyment, not developmental necessity. Babies learn best through responsive interactions with their caregivers during everyday activities: feeding, diaper changes, walks, and play at home. If a class brings you joy and connection with other parents, it can be valuable for that reason. But do not feel pressured to enroll in multiple classes. The best "enrichment" for a baby is a responsive, present caregiver who talks, reads, sings, and plays with them.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers benefit from some social exposure with other children, but they do not need a packed schedule to develop normally. Signs of overscheduling include: increased tantrums or meltdowns, sleep regression or difficulty settling, clinginess, resistance to leaving the house, and general crankiness. One structured activity per week plus regular playground time and playdates provides sufficient stimulation. Prioritize unstructured play, which allows toddlers to develop problem-solving skills, creativity, and independence. Watch for your own motivation: are you scheduling classes because your child enjoys them, or because of social pressure?',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers may show interest in specific activities (music, swimming, gymnastics), and one to two classes per week is a reasonable amount. Balance structured activities with plenty of unstructured time. The Danish concept of "free play" and Finnish emphasis on outdoor unstructured time are associated with excellent child development outcomes. If your schedule feels stressful and rushed, that stress transfers to your child. A relaxed, available parent is more developmentally valuable than any enrichment class. Give yourself permission to have "boring" days at home; they are actually rich developmental experiences for toddlers.',
    },
  ],
  whenNormal: [
    'Your toddler enjoys one or two activities per week and has plenty of unstructured playtime at home and outdoors.',
    'Your toddler sometimes resists going to an activity but enjoys it once there.',
    'Your family schedule allows for relaxed mealtimes, adequate sleep, and unhurried transitions.',
  ],
  whenToMention: [
    'Your toddler is showing persistent behavioral changes (increased aggression, sleep problems, regression) that might be related to overscheduling.',
    'You feel intense pressure to enroll your child in activities and it is causing you anxiety.',
    'Your toddler is consistently resistant to activities and seems exhausted or overstimulated.',
  ],
  whenToActNow: [
    'Overscheduling stress is contributing to parental depression, anxiety, or burnout that is affecting your ability to care for your child.',
    'Your toddler is showing signs of chronic stress: persistent sleep disruption, regression in developmental skills, frequent illness, or emotional withdrawal.',
    'The financial strain of multiple activities is affecting your family\'s ability to meet basic needs.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'parenting-comparison-anxiety-instagram-tiktok',
    'overstimulation-signs',
    'infant-mental-health-first-1001-days',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. The Power of Play for Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resource/the-power-of-play/',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. The Importance of Unstructured Play for Children.',
      url: 'https://www.apa.org/topics/children/play',
    },
  ],
};
