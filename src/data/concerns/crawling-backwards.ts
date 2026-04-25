import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'crawling-backwards',
  title: 'My Baby Crawls Backwards',
  category: 'physical',
  searchTerms: [
    'baby crawling backwards',
    'baby going backwards instead of forward',
    'baby only crawls in reverse',
    'why does my baby crawl backwards',
    'baby crawls away from toys',
    'backwards crawling normal',
    'baby won\'t crawl forward',
  ],
  quickAnswer:
    'Many babies crawl backwards before they figure out how to go forward  -  it\'s actually easier to push with your arms than to pull with them. This is a completely normal phase of learning to crawl. As your baby\'s arm muscles get stronger and they figure out the coordination, they\'ll start moving forward. Most babies master forward crawling within a few weeks of going backwards.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'This is a common age for backwards crawling to appear. Your baby might get up on hands and knees and push themselves backwards, sometimes right away from the toy they\'re trying to reach. This can be frustrating for them (and funny for you), but it\'s actually a sign that they\'re building the strength they need. The pushing motion engages the arm muscles, which will soon be strong enough to pull the body forward.',
    },
    {
      ageRange: '9-10 months',
      context:
        'By this age, most babies who started crawling backwards have figured out how to go forward too. If your baby is still only going backwards and seems frustrated or isn\'t exploring their environment much, you can help by placing toys just slightly out of reach in front of them and giving gentle encouragement. You can also demonstrate crawling yourself  -  babies love to imitate.',
    },
    {
      ageRange: '11-12 months',
      context:
        'If your baby is still only crawling backwards at this age and doesn\'t seem interested in moving forward or finding other ways to get around (like scooting or cruising furniture), mention it to your pediatrician. It could just be that your baby is very happy with backwards crawling and will skip forward crawling entirely to start walking. Or it might be worth checking in to make sure there are no muscle tone or coordination issues.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months and has recently started crawling backwards as their first form of independent mobility.',
    'Your baby doesn\'t seem distressed by going backwards and is happily exploring, even if it\'s in reverse.',
    'You can see your baby trying to go forward sometimes, even if they haven\'t quite figured it out yet.',
    'Your baby is also working on other motor skills like pulling to stand or cruising along furniture.',
  ],
  whenToMention: [
    'Your baby is over 11 months, only crawls backwards, and shows no interest in other forms of movement like cruising or attempting to walk.',
    'Backwards crawling seems to be related to one side of the body being weaker  -  for example, one arm pushes much harder than the other.',
    'Your baby seems very frustrated by backwards movement but can\'t figure out how to go forward despite lots of practice.',
  ],
  whenToActNow: [
    'Your baby was crawling forward and has suddenly started only going backwards  -  regression in motor skills needs prompt evaluation.',
    'Backwards crawling is accompanied by signs of pain, weakness, or your baby avoiding using one limb.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Crawling and Movement',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three  -  Your Baby\'s Development: Crawling Variations',
      url: 'https://www.zerotothree.org/resource/your-babys-development-movement-and-physical-development/',
    },
  ],
};
