import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-daycare-nap-different',
  title: 'Baby Naps Differently at Daycare',
  category: 'sleep',
  searchTerms: ['baby daycare nap different','baby naps different daycare','daycare nap problems','baby wont nap daycare','daycare nap schedule','baby short naps daycare','daycare affecting sleep','baby nap transition daycare','daycare sleep environment','baby sleeping daycare'],
  quickAnswer: 'It is very common for babies to nap differently at daycare. Brighter rooms, more stimulation, different schedules, and unfamiliar caregivers all contribute. Most babies adjust within 2-4 weeks. At home, optimize sleep conditions and consider earlier bedtime to compensate for shorter daycare naps.',
  byAge: [
    { ageRange: '3-6 months', context: 'Young babies often take shorter naps at daycare. At home, make naps as optimal as possible and consider earlier bedtime. Communicate your baby\'s sleep cues and preferences to caregivers.' },
    { ageRange: '6-12 months', context: 'Your baby may nap less at daycare but sleep well at night. If daycare follows a different schedule, your baby will likely adapt. Share your routine with caregivers.' },
    { ageRange: '12-18 months', context: 'Daycare may push nap transitions earlier or later than ideal. Communicate with caregivers. On short-nap days, move bedtime earlier.' },
    { ageRange: '18-36 months', context: 'Daycare typically has set rest time. If your toddler does not nap there, ensure they rest quietly. Allow napping at home on weekends if needed.' },
  ],
  whenNormal: ['Baby naps less at daycare than home','Baby adjusts within 2-4 weeks','Shorter daycare naps compensated by better nighttime sleep','Schedule differs on daycare vs home days'],
  whenToMention: ['Baby chronically overtired from poor daycare naps with nighttime sleep also suffering','Baby cannot nap at daycare after 4+ weeks','Daycare schedule significantly misaligned with baby needs'],
  whenToActNow: ['Baby unusually lethargic or unwell at daycare pickup','Significant behavioral changes since starting daycare'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing Quality Child Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Naps. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-weekend-schedule-different','fighting-naps','short-naps'],
};
