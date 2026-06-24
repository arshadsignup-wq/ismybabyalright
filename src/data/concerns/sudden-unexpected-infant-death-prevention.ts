import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sudden-unexpected-infant-death-prevention',
  title: 'Sudden Unexpected Infant Death (SUID): Prevention Strategies',
  category: 'sleep',
  searchTerms: [
    'SUID prevention',
    'sudden unexpected infant death',
    'SIDS prevention',
    'safe sleep prevent SIDS',
    'how to prevent SIDS',
    'SUID risk factors',
    'reducing SIDS risk',
    'safe sleep guidelines',
    'infant sleep death prevention',
    'sleep related infant death',
  ],
  quickAnswer:
    'Sudden Unexpected Infant Death (SUID) includes SIDS, accidental suffocation in a sleep environment, and other unexplained deaths. About 3,400 infants die from SUID annually in the US. Following AAP safe sleep guidelines can significantly reduce the risk: always place babies on their backs to sleep on a firm, flat surface; share a room but not a bed; remove all soft bedding, pillows, and toys from the sleep space; avoid overheating; offer a pacifier at sleep time; and maintain a smoke-free environment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The highest-risk period for SUID is the first four months of life. Always place your baby on their back for every sleep (naps and nighttime). Use a firm, flat sleep surface such as a CPSC-approved crib, bassinet, or play yard with a tight-fitting sheet and nothing else. Room-sharing (having the baby sleep in your room, in their own sleep space) is recommended for at least the first 6 months and ideally the first year. Never share a sleep surface with your baby, especially on a couch, recliner, or soft surface. Swaddling is safe for young infants but should be stopped once they can roll.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby begins to roll, the risk of positional suffocation increases if they are in an unsafe sleep environment. Stop swaddling once your baby shows signs of rolling. If your baby rolls onto their stomach during sleep and can roll both ways, they can be left in their preferred position, but always place them on their back at the start of sleep. Continue room-sharing and keeping the sleep space bare. Offering a pacifier at sleep time has been associated with reduced SIDS risk, even if the pacifier falls out after the baby falls asleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While SIDS risk decreases after 6 months, it does not disappear. Continue all safe sleep practices through the first birthday. Keep the crib free of blankets, pillows, bumpers, and stuffed animals. If your baby can sit, crawl, and pull to stand, ensure the crib mattress is at its lowest setting to prevent falls. Additional risk reduction strategies include keeping your baby up to date on vaccines (research shows vaccination is associated with reduced SIDS risk), maintaining a comfortable room temperature (68-72 degrees F), and ensuring everyone who cares for your baby knows safe sleep practices.',
    },
    {
      ageRange: '12+ months',
      context:
        'After the first birthday, the risk of SIDS drops significantly, and you can introduce a thin blanket and a small lovey to the sleep space. Continue to use a firm mattress and avoid heavy bedding, large pillows, and adult-sized blankets until your child is older. The transition to a toddler bed should not happen until your child is climbing out of the crib, typically around age 2-3. When transitioning, ensure the room is childproofed and the bed is low to the ground.',
    },
  ],
  whenNormal: [
    'Feeling anxious about SIDS, especially in the first few months',
    'Your baby rolls onto their stomach during sleep after they can roll both ways',
    'Following safe sleep guidelines even when well-meaning relatives suggest otherwise',
  ],
  whenToMention: [
    'You are unsure whether your current sleep setup meets safe sleep guidelines',
    'You have a family history of SIDS and want to discuss risk reduction',
    'SIDS anxiety is significantly affecting your sleep or ability to function',
    'You are bed-sharing and want to discuss risk reduction strategies',
  ],
  whenToActNow: [
    'You find your baby unresponsive, not breathing, or blue - call 911 immediately and begin infant CPR',
    'Your baby has a brief resolved unexplained event (BRUE): sudden change in breathing, color, muscle tone, or responsiveness',
    'Your baby stops breathing for more than 20 seconds or their skin turns blue or pale',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'safe-sleep-social-media-misinformation',
    'sids-blood-biomarker-test',
    'sids-genetic-link-hadha-gene',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sudden Unexpected Infant Death and Sudden Infant Death Syndrome. CDC, 2024.',
      url: 'https://www.cdc.gov/sids/data.htm',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Safe to Sleep Campaign. NICHD, 2024.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
