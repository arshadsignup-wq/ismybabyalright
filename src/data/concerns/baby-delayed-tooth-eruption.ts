import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-delayed-tooth-eruption',
  title: 'Baby Teeth Not Coming In or Coming In Out of Order',
  category: 'physical',
  searchTerms: [
    'baby teeth not coming in order',
    'baby teeth coming in wrong order',
    'baby teeth eruption order wrong',
    'baby top teeth first instead of bottom',
    'baby molars before front teeth',
    'baby teeth out of sequence',
    'baby teeth delayed eruption',
    'baby late teeth still no teeth',
    'baby teeth coming in crooked',
    'baby teeth gaps',
  ],
  quickAnswer:
    'The "typical" tooth eruption order (bottom front teeth first around 6 months, then top front teeth) is just an average - many babies get their teeth in a different order, and this is completely normal. Some babies get top teeth first, molars before incisors, or teeth in a seemingly random pattern. The order of tooth eruption does not affect dental health or the eventual position of permanent teeth. Spacing between baby teeth is actually a good sign, as it leaves room for larger permanent teeth.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Most babies have no teeth at birth, though some are born with one or two natal teeth. The first tooth typically appears around 6 months, but there is wide normal variation from 4-15 months. Some babies show teething signs (drooling, chewing, fussiness) weeks before a tooth appears. The absence of teeth at 6 months is completely normal and does not indicate any problem.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The typical pattern is bottom central incisors first, then top central incisors, but your baby may get teeth in any order. Getting teeth on one side before the other, or getting lateral incisors before central incisors, are all normal variations. Teeth sometimes appear with spaces between them, which is healthy and expected in baby teeth. By 12 months, most babies have 2-4 teeth, but having more or fewer is not concerning.',
    },
    {
      ageRange: '1-3 years',
      context:
        'By age 3, most children have all 20 baby teeth. If your child has significantly fewer teeth than expected by age 2-2.5, your pediatrician or dentist may want to evaluate. Teeth coming in crooked or overlapping in toddlers does not predict how permanent teeth will come in. The first dental visit is recommended by age 1 or within 6 months of the first tooth.',
    },
  ],
  whenNormal: [
    'Teeth arriving in any order, not just the "textbook" pattern',
    'No teeth at all until 10-12 months or even later',
    'Gaps and spacing between baby teeth (actually desirable)',
    'Teeth arriving one at a time or several at once',
    'Teeth that appear slightly crooked or rotated initially',
  ],
  whenToMention: [
    'No teeth at all by 15-18 months',
    'Your child has fewer than 4 teeth by 18 months',
    'Teeth appear discolored, pitted, or malformed when they come in',
    'A tooth comes in and then seems to disappear or dissolve',
  ],
  whenToActNow: [
    'A baby tooth is very loose or falls out in a child under 4 (this is premature and could indicate underlying issues)',
    'An erupting tooth is causing significant bleeding or a large cyst on the gum',
    'Your baby was born with teeth and they are very loose and at risk of being swallowed',
  ],
  relatedMilestones: ['6-months', '12-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['late-teething', 'baby-born-with-teeth', 'baby-grinding-teeth'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Baby\'s First Tooth: 7 Facts Parents Should Know.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'AAPD',
      citation: 'American Academy of Pediatric Dentistry. Eruption Charts.',
      url: 'https://www.aapd.org/resources/parent/faq/',
    },
  ],
};
