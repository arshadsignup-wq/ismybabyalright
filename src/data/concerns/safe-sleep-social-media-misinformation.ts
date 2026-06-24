import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'safe-sleep-social-media-misinformation',
  title: 'Safe Sleep Misinformation on Social Media',
  category: 'sleep',
  searchTerms: [
    'safe sleep social media misinformation',
    'baby sleep hacks dangerous',
    'tiktok baby sleep advice',
    'unsafe sleep practices viral',
    'dock a tot safe sleep',
    'cosleeping social media',
    'baby sleep products not safe',
    'instagram baby sleep advice wrong',
    'influencer baby sleep dangerous',
    'safe sleep guidelines vs social media',
  ],
  quickAnswer:
    'Social media is filled with baby sleep advice that contradicts evidence-based safe sleep guidelines from the AAP. Popular viral "hacks" including nest-like sleepers, inclined positioners, weighted sleep sacks for young infants, and bed-sharing arrangements may look cozy in photos but are associated with increased risk of SIDS and sleep-related infant deaths. The AAP safe sleep guidelines are clear: babies should sleep alone, on their backs, on a firm flat surface, with no soft bedding, bumpers, or positioning devices.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'This is the highest-risk period for sleep-related infant deaths, and also the time when parents are most desperate for sleep solutions and vulnerable to social media advice. Common unsafe practices promoted online include using dock-a-tot or similar in-bed loungers for sleep, adding rolled blankets or towels to keep baby positioned, using weighted sleep sacks or swaddles on very young infants, and co-sleeping on a couch or soft surface. All of these increase suffocation and SIDS risk. The safest sleep environment is a bare crib, bassinet, or play yard with a firm mattress and fitted sheet only.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies learn to roll, new social media concerns arise around sleep positioning. The AAP recommends placing babies on their backs for every sleep, but once a baby can roll both ways independently, they can be left in their preferred sleeping position. Bumpers (including mesh ones), pillows, stuffed animals, and blankets should remain out of the sleep space through the first birthday. Products marketed as preventing flat head or keeping babies in a specific position are not recommended and can pose suffocation risks.',
    },
    {
      ageRange: '12+ months',
      context:
        'After the first birthday, the risk of SIDS decreases significantly, and a thin blanket and small lovey can be introduced to the sleep space. However, some social media advice remains problematic even for toddlers, including the use of heavy blankets, adult pillows, or toddler beds with soft rails that can pose entrapment risks. Continue following your pediatrician\'s guidance over influencer advice. When evaluating sleep products promoted online, check whether they meet CPSC (Consumer Product Safety Commission) standards.',
    },
  ],
  whenNormal: [
    'Feeling confused by contradictory advice between social media and your pediatrician',
    'Being tempted by products that promise longer sleep for your baby',
    'Wanting to follow your pediatrician\'s evidence-based advice despite popular trends',
  ],
  whenToMention: [
    'You are unsure whether a specific sleep product or practice is safe',
    'You want to discuss co-sleeping safety and risk reduction if bed-sharing is occurring',
    'You are struggling with your baby\'s sleep and want evidence-based strategies',
    'You have been using a product you now realize may not be safe and want guidance on transitioning',
  ],
  whenToActNow: [
    'You find your baby face-down on soft bedding, unresponsive, or not breathing - call 911 immediately and begin infant CPR',
    'Your baby appears to be overheating (sweating, hot to touch, rapid breathing) in a sleep product',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'tiktok-sleep-hack-nest-sids-risk',
    'sudden-unexpected-infant-death-prevention',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CPSC',
      citation:
        'Consumer Product Safety Commission. Safe Sleep for Babies. CPSC, 2024.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Safe to Sleep Campaign. NICHD, 2024.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
