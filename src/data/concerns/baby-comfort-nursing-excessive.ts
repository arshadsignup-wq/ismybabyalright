import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-comfort-nursing-excessive',
  title: 'My Baby Uses Me as a Pacifier',
  category: 'feeding',
  searchTerms: [
    'baby comfort nursing',
    'baby using breast as pacifier',
    'baby non-nutritive sucking breast',
    'baby wants to nurse all the time for comfort',
    'baby latched but not eating',
    'baby nursing for comfort not hunger',
    'excessive comfort nursing',
    'baby always on breast',
    'baby flutter sucking',
    'baby comfort sucking breast',
  ],
  quickAnswer:
    'Comfort nursing is completely normal and is one of the many purposes of breastfeeding beyond nutrition. Babies nurse for comfort during teething, illness, stress, and developmental changes. While it can be exhausting for parents, it is not harmful to the baby. If comfort nursing is affecting your well-being or preventing adequate food intake, there are gentle strategies to manage it.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'In the early weeks, it can be hard to distinguish comfort nursing from nutritive feeding. Both are important. Comfort nursing helps regulate baby\'s stress, supports bonding, and helps establish milk supply. It is not possible to spoil a newborn by nursing too much.',
    },
    {
      ageRange: '4-6 months',
      context: 'Babies at this age often comfort nurse during teething, before sleep, and during growth spurts. You may notice flutter sucking where baby sucks gently without actively swallowing. This is soothing for them. Offering a pacifier or other comfort object can help if you need a break.',
    },
    {
      ageRange: '6-9 months',
      context: 'Comfort nursing may increase during developmental milestones like crawling or separation anxiety. If your baby nurses for comfort frequently but is also eating well at meals, this is normal. You can begin gently offering other forms of comfort like rocking or cuddling to start diversifying their coping strategies.',
    },
    {
      ageRange: '9-12 months',
      context: 'If comfort nursing is happening so frequently that it interferes with solid food intake, you may want to gently redirect. Try offering solids when baby is hungry and nursing after meals. If comfort nursing is mostly at naptime and bedtime, it is typically not a concern.',
    },
    {
      ageRange: '12-24 months',
      context: 'Comfort nursing in toddlers is common and normal. If you want to reduce it, set gentle limits like nursing only in certain places or for certain durations. If comfort nursing is working for both of you, there is no medical reason to stop. Follow your toddler\'s lead and your own comfort level.',
    },
  ],
  whenNormal: [
    'Baby nurses for comfort during times of stress, teething, or illness',
    'Baby has periods of flutter sucking at the breast but is growing well',
    'Baby uses nursing for comfort mainly around sleep times',
    'Baby also eats solid foods well and nursing is supplementary comfort',
  ],
  whenToMention: [
    'Comfort nursing is so frequent that baby is not eating enough solid foods',
    'Comfort nursing is causing significant pain or distress for you',
    'Baby will not accept any comfort except nursing and it is unsustainable',
  ],
  whenToActNow: [
    'Baby is losing weight because comfort nursing has replaced nutritive feeding',
    'You are experiencing severe nipple pain, bleeding, or signs of infection from constant nursing',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nursing-to-sleep-only', 'baby-falling-asleep-while-nursing', 'excessive-night-feeding'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Breastfeeding. 2023.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
