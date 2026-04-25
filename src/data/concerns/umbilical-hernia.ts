import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'umbilical-hernia',
  title: 'Umbilical Hernia (Belly Button Sticking Out)',
  category: 'medical',
  searchTerms: [
    'baby belly button sticking out',
    'baby umbilical hernia',
    'baby outie belly button',
    'baby belly button bulges when crying',
    'umbilical hernia newborn',
    'baby hernia near belly button',
    'is baby belly button hernia dangerous',
    'baby belly button pokes out when straining',
    'umbilical hernia treatment baby',
    'when does umbilical hernia close',
  ],
  quickAnswer:
    'An umbilical hernia is a soft bulge near the belly button caused by a small gap in the abdominal muscles where the umbilical cord was attached. They are very common, occurring in about 20% of babies, and the vast majority close on their own by age 4-5 without any treatment. They are almost never dangerous in children.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Umbilical hernias are often first noticed in the early weeks as the umbilical stump heals. The bulge typically becomes more prominent when your baby cries, strains, or coughs, and may flatten when they are calm or lying down. This is completely normal. The hernia does not cause your baby pain, even when it is bulging. Do not tape a coin over it or try to push it in, as these folk remedies do not help and can cause skin irritation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The hernia may appear unchanged or may be slowly getting smaller. The size of the hernia can vary, from less than 1 cm to several centimeters. Larger hernias may take longer to close but still usually resolve. Your pediatrician will check the hernia at routine well-child visits to monitor its progress.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Most umbilical hernias close by age 1-2, and nearly all close by age 4-5. As your child becomes more active, the hernia may still be visible during periods of straining or abdominal pressure. Continued monitoring is the standard approach; surgery is generally not considered until after age 4-5 unless the hernia is very large or causing problems.',
    },
    {
      ageRange: '4-5 years',
      context:
        'If the hernia has not closed by age 4-5, or if it is larger than about 1.5-2 cm, your doctor may recommend surgical repair. The surgery is a straightforward outpatient procedure with an excellent success rate. Hernias that persist past age 5 are unlikely to close on their own.',
    },
  ],
  whenNormal: [
    'A soft bulge at the belly button that becomes more prominent with crying, coughing, or straining and reduces when your baby is relaxed',
    'The hernia is soft and can be gently pushed back in (reducible)',
    'Your baby does not appear to be in pain when the hernia bulges',
    'The hernia is gradually getting smaller over months to years',
    'The skin over the hernia looks normal in color, without redness or discoloration',
  ],
  whenToMention: [
    'The hernia seems to be getting larger rather than smaller over time',
    'Your child is approaching age 4-5 and the hernia has not closed',
    'You have questions about whether or when surgical repair might be needed',
  ],
  whenToActNow: [
    'The hernia becomes hard, swollen, discolored, or very tender and cannot be gently pushed back in, as this may indicate an incarcerated or strangulated hernia requiring emergency surgery (this is very rare in children)',
    'Your baby is vomiting and the hernia area appears firm and painful, which could indicate trapped intestine',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Umbilical Hernia in Babies.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Umbilical-Hernia.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Baby and Young Child: Birth to Age 5. 7th Edition.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
  ],
};
